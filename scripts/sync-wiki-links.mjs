#!/usr/bin/env node

/**
 * Validates internal wiki links
 * Ensures all [[Page-Name]] and [text](./Page-Name) links point to existing pages
 *
 * Run: node scripts/sync-wiki-links.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WIKI_DIR = join(__dirname, '..', 'wiki');

// Get all markdown files in wiki
function getAllWikiPages() {
  if (!existsSync(WIKI_DIR)) {
    console.error(`❌ Wiki directory not found: ${WIKI_DIR}`);
    process.exit(1);
  }

  return readdirSync(WIKI_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

// Extract links from markdown content
function extractLinks(content) {
  const wikiLinks = content.match(/\[\[([^\]]+)\]\]/g) || [];
  const markdownLinks = content.match(/\[([^\]]+)\]\(\.\/([^)#]+)/g) || [];

  return {
    wiki: wikiLinks.map((l) => l.replace(/\[\[|\]\]/g, '')),
    markdown: markdownLinks.map((l) => {
      const match = l.match(/\(\.\/([^)#]+)/);
      return match ? match[1].trim() : '';
    }),
  };
}

// Main validation
function validateWikiLinks() {
  const pages = getAllWikiPages();
  const issues = [];

  console.log(`📚 Checking ${pages.length} wiki pages...\n`);

  pages.forEach((page) => {
    const filepath = join(WIKI_DIR, `${page}.md`);
    const content = readFileSync(filepath, 'utf-8');
    const links = extractLinks(content);

    // Check wiki-style links [[Page]]
    links.wiki.forEach((target) => {
      const cleanTarget = target.replace(/\.md$/, '').split('#')[0].trim();
      const normalizedTarget = cleanTarget ? cleanTarget.replace(/\s+/g, '-') : '';
      if (cleanTarget && !pages.includes(cleanTarget) && !pages.includes(normalizedTarget)) {
        issues.push({
          page,
          type: 'wiki-link',
          target,
          message: `[[${target}]] - page does not exist`,
        });
      }
    });

    // Check markdown-style links [text](./Page)
    links.markdown.forEach((target) => {
      if (!target) return;
      const cleanTarget = target.replace(/\.md$/, '').split('#')[0];
      if (!pages.includes(cleanTarget)) {
        issues.push({
          page,
          type: 'markdown-link',
          target,
          message: `[](./${target}) - page does not exist`,
        });
      }
    });
  });

  // Report
  if (issues.length === 0) {
    console.log('✅ All wiki links valid!\n');
    return;
  }

  console.log(`❌ Found ${issues.length} broken link(s):\n`);

  issues.forEach((issue) => {
    console.log(`${issue.page}.md:`);
    console.log(`  ${issue.message}\n`);
  });

  process.exit(1);
}

validateWikiLinks();
