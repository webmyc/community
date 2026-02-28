# Post-Rename Update Checklist

**DO NOT merge these changes until AFTER the repo is renamed to "community"**

After running `gh repo rename community`, make these updates in a follow-up PR:

## Files to update (repo name references)

- [ ] `.github/ISSUE_TEMPLATE/config.yml`
  - Update contact_links URL from `/respira-docs/` to `/community/`

- [ ] Documentation config file (check during Phase 0 audit)
  - Update editUrl or repo references
  - Check if baseUrl needs updating (GitHub Pages only)

- [ ] Any workflow files (.github/workflows/*.yml)
  - Check for hardcoded "respira-docs" references

- [ ] README.md
  - Update any URLs pointing to old repo name

- [ ] ADMIN_SETUP.md
  - Update example commands if they reference old name

## Validation after rename

- [ ] Clone repo fresh: `git clone git@github.com:webmyc/community.git`
- [ ] Docs build successfully
- [ ] "Edit this page" links work
- [ ] Issue template contact links work
- [ ] Discussion links in drafts work

## If anything breaks

Common issues:
- GitHub Pages baseUrl mismatch (check docs framework config)
- Edit links 404 (check editUrl in docs config)
- Workflows fail (check repo refs in Actions)

Fix, test, deploy.
