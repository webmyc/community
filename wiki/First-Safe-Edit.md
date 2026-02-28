# Your First Safe Edit with Respira

**Goal:** Update one element on one page without breaking anything.

**Time:** 15 minutes

**You'll learn:**
- How duplicate-first workflow works
- How to review changes before they go live
- How to rollback if needed

## Prerequisites

- [ ] Respira installed ([setup guide](https://respira.press/docs))
- [ ] AI assistant connected (Claude Code, Cursor, or browser AI)
- [ ] You have a test page you can edit (not homepage, not critical page)
- [ ] You have a recent backup (always)

## Step 1: Choose a Simple Change

Pick something easy for your first try:

**Good first edits:**
- Change button text ("Learn More" → "Get Started")
- Update copyright year in footer
- Change a heading color
- Update a single paragraph of text

**Not good for first time:**
- Redesigning entire page
- Changing global styles
- Complex multi-step changes

## Step 2: Create Duplicate

**In AI assistant, say:**

```
Create a duplicate of page [PAGE_ID or PAGE_NAME].
I want to safely edit the [element you're changing].
```

**AI will:**
1. Find the page
2. Create a duplicate
3. Confirm duplicate was created
4. Give you the duplicate page ID

## Step 3: Make the Change

**Now say:**

```
On the duplicate page [DUPLICATE_ID], change [specific instruction].

For example:
"On the duplicate, change all 'Contact Us' buttons to say 'Get Started'"
```

**AI will:**
1. Read the duplicate page structure
2. Identify the elements to change
3. Make the changes
4. Confirm what was updated

## Step 4: Review

**AI will give you a link like:**
```
https://yoursite.com/wp-admin/admin.php?page=respira-approvals
```

**In WordPress admin:**
1. Go to the approvals page
2. Click "Preview Duplicate"
3. Check desktop view
4. Check mobile view (resize browser)
5. Verify the change looks right

**What to check:**
- [ ] Change is correct (button text matches what you asked for)
- [ ] Nothing else broke (layout intact, other elements unchanged)
- [ ] Mobile looks good (responsive design intact)
- [ ] No weird spacing or alignment issues

## Step 5: Approve or Reject

**If it looks good:**
- Click "Approve Changes"
- Duplicate becomes the live page
- Original is kept as backup

**If something's wrong:**
- Click "Reject Changes"
- Duplicate is deleted
- Original page unchanged
- Try again with a different prompt

## Step 6: Verify Live

After approving:
1. Visit the actual page on your site (not wp-admin)
2. Clear cache (browser + server)
3. Check it looks right
4. Check mobile again

**Success:** You just did your first AI edit safely!

## If You Need to Rollback

**Made a mistake? No problem.**

In WordPress admin:
1. Go to Pages → Find the page
2. Look for Respira revision history
3. Click "Restore" on the previous version

Or ask AI:
```
Restore page [PAGE_ID] to the previous version before my last change
```

## Common First-Time Issues

**Issue:** "AI can't find the page"
**Fix:** Use the page ID instead of name, or give more context

**Issue:** "Change looks wrong in preview"
**Fix:** Reject and try a more specific prompt

**Issue:** "Nothing changed"
**Fix:** Check you're looking at the duplicate, not the original

**Issue:** "AI changed too much"
**Fix:** Be more specific about *only* changing what you want

## Next Steps

You did it! Now try:

**Next:** [Simple Bulk Edit](./Prompt-Recipes#update-text-bulk)
**Advanced:** [MCP Orchestration](./MCP-Orchestration)
**Troubleshooting:** [Common Issues](./Common-Issues)

## Share Your Win

First edit successful? Post in:
- [Discord #wins](#) (link when ready)
- [Discussions Showcase](https://github.com/webmyc/community/discussions/categories/showcase)

---

**Got stuck?** Ask in [Discussions Q&A](https://github.com/webmyc/community/discussions/categories/q-a).
