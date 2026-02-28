#!/usr/bin/env node
/**
 * Publish discussion drafts to GitHub Discussions via GraphQL.
 * Prerequisites: gh CLI authenticated (gh auth status)
 * Usage: node scripts/publish-discussions.mjs
 *        REPO=owner/name node scripts/publish-discussions.mjs  # override repo
 */

import { execSync } from 'child_process';
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { tmpdir } from 'os';
import { randomBytes } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DRAFTS_DIR = join(__dirname, '..', 'discussion-drafts');

function runGhGraphQL(queryOrMutation, variables = {}) {
  const tmp = join(tmpdir(), `gh-gql-${randomBytes(8).toString('hex')}.json`);
  const payload = JSON.stringify({ query: queryOrMutation, variables });
  writeFileSync(tmp, payload, 'utf-8');
  try {
    const result = execSync(`gh api graphql --input ${tmp}`, {
      encoding: 'utf-8',
      maxBuffer: 1024 * 1024,
    });
    return JSON.parse(result);
  } finally {
    try {
      unlinkSync(tmp);
    } catch (_) {}
  }
}

function getRepoFromGit() {
  try {
    const out = execSync('git remote get-url origin', {
      encoding: 'utf-8',
      cwd: join(__dirname, '..'),
    });
    const m = out.trim().match(/github\.com[:/]([\w-]+)\/([\w.-]+?)(?:\.git)?$/i);
    return m ? `${m[1]}/${m[2].replace(/\.git$/i, '')}` : null;
  } catch {
    return null;
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { body: content, frontmatter: {} };
  const [, fm, body] = match;
  const frontmatter = {};
  for (const line of fm.split('\n')) {
    const m = line.match(/^(\w+):\s*["']?([^"'\n]+)["']?$/);
    if (m) frontmatter[m[1]] = m[2].trim();
  }
  return { frontmatter, body: body.trim() };
}

function main() {
  const repo = process.env.REPO || getRepoFromGit();
  if (!repo) {
    console.error('Could not determine repo. Set REPO=owner/name or run from a git clone.');
    process.exit(1);
  }

  try {
    execSync('gh auth status', { stdio: 'pipe' });
  } catch {
    console.error('gh CLI not authenticated. Run: gh auth login');
    process.exit(1);
  }

  const [owner, name] = repo.split('/');
  if (!owner || !name) {
    console.error('Invalid REPO format. Use owner/name');
    process.exit(1);
  }

  const repoQuery = `
    query($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        id
        discussionCategories(first: 20) {
          nodes {
            id
            name
          }
        }
        discussions(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            title
          }
        }
      }
    }
  `;
  const repoData = runGhGraphQL(repoQuery, { owner, name });
  const repoNode = repoData?.data?.repository;
  if (!repoNode) {
    console.error('Repository not found or Discussions not enabled:', repo);
    console.error(repoData?.errors?.map((e) => e.message) || '');
    process.exit(1);
  }

  const repositoryId = repoNode.id;
  const categories = new Map(repoNode.discussionCategories.nodes.map((n) => [n.name, n.id]));
  const existingTitles = new Set(repoNode.discussions.nodes.map((n) => n.title));

  const files = readdirSync(DRAFTS_DIR).filter((f) => f.endsWith('.md')).sort();
  let created = 0;
  let skipped = 0;

  for (const file of files) {
    const path = join(DRAFTS_DIR, file);
    const content = readFileSync(path, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    const title = frontmatter.title;
    const categoryName = frontmatter.category || 'General';

    if (!title) {
      console.warn(`Skipping ${file}: no title in frontmatter`);
      skipped++;
      continue;
    }

    if (existingTitles.has(title)) {
      console.log(`Skip (exists): ${title}`);
      skipped++;
      continue;
    }

    const categoryId = categories.get(categoryName);
    if (!categoryId) {
      console.warn(`Skipping ${file}: category "${categoryName}" not found. Available: ${[...categories.keys()].join(', ')}`);
      skipped++;
      continue;
    }

    const mutation = `
      mutation($input: CreateDiscussionInput!) {
        createDiscussion(input: $input) {
          discussion { url title }
        }
      }
    `;
    const input = { repositoryId, categoryId, title, body };
    try {
      const result = runGhGraphQL(mutation, { input });
      const discussion = result?.data?.createDiscussion?.discussion;
      if (discussion) {
        console.log(`Created: ${discussion.title}`);
        console.log(`  ${discussion.url}`);
        created++;
        existingTitles.add(title);
      } else {
        console.error('Create failed:', result?.errors || result);
      }
    } catch (err) {
      console.error(`Failed to create "${title}":`, err.message);
    }
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`);
}

main();
