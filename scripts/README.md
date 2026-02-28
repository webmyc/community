# Scripts

## publish-discussions.mjs

Publishes discussion drafts from `discussion-drafts/*.md` to GitHub Discussions via the GraphQL API.

### Prerequisites

- Node.js 18+
- [gh CLI](https://cli.github.com/) installed and authenticated

```bash
gh auth status
# If not logged in: gh auth login
```

### Usage

From repo root:

```bash
npm run publish:discussions
```

Or with Node directly:

```bash
node scripts/publish-discussions.mjs
```

### Override repo

By default the script uses the `origin` remote of the current git repo. To target another repo:

```bash
REPO=webmyc/community node scripts/publish-discussions.mjs
```

### Behavior

1. Reads all `.md` files in `discussion-drafts/`
2. Parses YAML frontmatter (`title`, `category`)
3. Queries GitHub for repository ID, discussion categories, and existing discussion titles
4. For each draft: if a discussion with the same title exists, skips; otherwise creates via `createDiscussion` mutation
5. Prints created URLs and a summary

### Discussion categories

Create these categories in the repo **before** running (Settings → General → Discussions → Create category):

- Announcements
- Q&A
- Troubleshooting
- Prompt Recipes
- Feature Requests
- Showcase
- Roadmap (optional)
