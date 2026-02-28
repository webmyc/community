# Wiki Setup Guide

One-time setup for the Respira Community Wiki.

## Pre-Launch

- [ ] Enable wiki: Settings → General → Features → check **Wikis**
- [ ] Clone wiki repo: `git clone https://github.com/webmyc/community.wiki.git`
- [ ] Copy contents from `wiki/` directory to wiki repo root
- [ ] Rename `Home.md` to `Home.md` (GitHub wiki uses Home as front page)
- [ ] Push: `git add . && git commit -m "chore: initial wiki pages" && git push`
- [ ] Run validation: `npm run wiki:validate`

## Go Live

- [ ] Verify [Wiki](https://github.com/webmyc/community/wiki) displays correctly
- [ ] Test edit workflow (Edit → change → Save)
- [ ] Create [Announcement discussion](#announcement-draft) (see below)
- [ ] Pin announcement in Discussions
- [ ] Add wiki link to Discord (when ready)

## Post-Launch

- [ ] Seed prompt recipes from your own usage
- [ ] Invite power users to contribute
- [ ] Set up periodic `npm run wiki:validate` in CI or locally

## Syncing wiki/ to GitHub Wiki

The `wiki/` folder in this repo is the source of truth. To update the live wiki:

1. Clone wiki: `git clone https://github.com/webmyc/community.wiki.git community-wiki`
2. Copy: `cp wiki/*.md community-wiki/`
3. In community-wiki: `git add . && git status`
4. Commit and push changes

Or use a sync script (future improvement).
