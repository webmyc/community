# Community Automation Scripts

## Prerequisites

- Node.js 18+ installed
- GitHub CLI authenticated: `gh auth status`
- Repository discussions enabled

## Publish Discussion Drafts

Creates GitHub Discussions from markdown files in `discussion-drafts/`.

**IMPORTANT:** Create discussion categories in GitHub UI FIRST.

Required categories:
- Announcements
- Q&A
- Troubleshooting
- Prompt Recipes
- Feature Requests
- Showcase
- Community Meta

**Run:**
```bash
npm run publish:discussions
```

The script will:
- Check all required categories exist (fails if missing)
- Skip discussions that already exist (checks by title)
- Create new discussions from drafts
- Print what was created and what was skipped

**To re-run safely:**
Just run it again. It won't create duplicates.

## Troubleshooting

**"Missing required discussion categories"**
→ Create the categories in GitHub UI first

**"gh: command not found"**
→ Install GitHub CLI: https://cli.github.com

**"gh auth status" fails**
→ Run: `gh auth login`

**Script creates discussions in wrong category**
→ Check YAML frontmatter in draft files matches category name exactly
