# Contributing to the Wiki

This wiki is community-maintained. If you learned something useful, share it.

## Philosophy

**Give more than you receive.**

If you solved a problem, document it. If you found a better prompt, add it. If you discovered a gotcha, warn others.

**Socrates' Triple Filter:**
- Is it true? (Have you tested this?)
- Is it kind? (Does it help people?)
- Is it useful? (Is it actionable?)

## What to Contribute

**Good contributions:**
- Tested prompt recipes
- Solutions to common issues
- Integration guides for MCP tools
- Real case studies (redacted)
- Builder-specific tips
- Before/after examples (redacted)

**Not for the wiki:**
- Speculation or untested ideas → Discussions
- Questions → Discussions Q&A
- Bug reports → GitHub Issues
- Feature requests → Discussions
- Official documentation → that's respira.press

## How to Edit

1. **Find the page** you want to improve (or create new)
2. **Click "Edit"** (top right corner)
3. **Make your changes:**
   - Follow existing format
   - Use templates if applicable
   - Keep it focused
4. **Add edit summary:** "What I changed and why"
5. **Preview** before saving
6. **Save** the page

## Writing Guidelines

**Be specific:**
❌ "Change the button"
✅ "Change button text from 'Learn More' to 'Get Started' and update color to #10b981"

**Be testable:**
❌ "This should work"
✅ "Tested on Elementor 3.x, works on shared hosting"

**Be clear:**
- Short paragraphs
- Bullets over walls of text
- Code blocks for prompts/commands
- Screenshots when helpful (redacted)

**Be honest:**
If something has limitations, say so. If you're not sure, say so.

## Templates

Use these for consistency:

- [Prompt Recipe Template](./Template-Prompt-Recipe)
- [Troubleshooting Template](./Template-Troubleshooting)
- [Integration Guide Template](./Template-Integration)
- [Case Study Template](./Template-Case-Study)

Copy template, fill in sections, save as new page.

## Naming Conventions

**Pages:**
- Use title case: `First-Safe-Edit` not `first-safe-edit`
- Hyphenate spaces: `Prompt-Recipes` not `Prompt Recipes`
- Be descriptive: `Elementor-Hero-Section-Tips` not `El-Tips`

**Categories (in file path if used):**
- Builders/
- Workflows/
- Integrations/
- Troubleshooting/
- Templates/

## Linking

**Internal wiki links:**
```markdown
See [Prompt Recipes](./Prompt-Recipes)
Or [[Prompt-Recipes]] (wiki-style)
```

**External links:**
```markdown
[Official docs](https://respira.press/docs)
[GitHub Discussion](https://github.com/webmyc/community/discussions)
```

**Link to official docs when possible** (don't duplicate them)

## Redaction Rules

**Always redact:**
- API keys, license keys, passwords
- Private domains (use example.com)
- Client names or identifying info
- Full error logs with secrets

**Redaction format:**
```
WORDPRESS_API_KEY=respira_REDACTED
Site: REDACTED.com
Client: [REDACTED]
```

## Examples and Screenshots

**Use examples:**
Show, don't just tell. Include actual prompts, real output (redacted), before/after.

**Screenshots:**
- Redact private info first
- Use descriptive alt text
- Keep file sizes reasonable
- Annotate if helpful (arrows, highlights)

## Quality Checks

Before saving, verify:

- [ ] I tested this (didn't just guess)
- [ ] I redacted all secrets
- [ ] I linked to official docs when relevant
- [ ] I used a template (if applicable)
- [ ] My changes are focused (one topic)
- [ ] My edit summary is clear

## Review Process

**Wiki is open-edit** but maintainers may:
- Revert vandalism or spam
- Fix formatting for consistency
- Move content to better location
- Merge duplicate pages

If your edit is reverted, you'll see why in the page history.

## Page Organization

**Keep pages focused.**

One topic per page. If a page gets too long (>500 lines), consider splitting:

`Prompt-Recipes` (hub page with links)
  ↳ `Prompt-Recipes-Content`
  ↳ `Prompt-Recipes-Design`
  ↳ `Prompt-Recipes-SEO`

## Maintenance

**Update outdated content:**
If you find something that no longer works (software updated, better method found), update it.

**Add "Last updated" note:**
```markdown
---
**Last updated:** 2026-03-01
```

## Need Help?

**Not sure if your contribution fits?**
Ask in [Discussions Community Meta](https://github.com/webmyc/community/discussions/categories/community-meta)

**Technical issues with wiki editing?**
Ask in [Discussions Q&A](https://github.com/webmyc/community/discussions/categories/q-a)

**Found a wiki bug?**
Report in [GitHub Issues](https://github.com/webmyc/community/issues)

## Recognition

Frequent contributors may be recognized in:
- [Contributors](./Contributors) page (when created)
- Project README
- Community highlights

But the real reward: you made it easier for the next person.

---

**Ready to contribute?** Pick a page and improve it.
