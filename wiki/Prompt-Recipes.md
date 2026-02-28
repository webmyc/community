# Prompt Recipes

**Tested, reusable prompts for common WordPress tasks.**

All prompts follow the duplicate-first workflow: AI edits a copy, you review, you approve.

## Quick Index

**Content:**
- [Update Text Across Multiple Pages](#update-text-bulk)
- [Change Button Text and Style](#button-changes)
- [Update Footer Content](#footer-update)
- [Add New Section to Multiple Pages](#add-section-bulk)

**Design:**
- [Change Color Scheme](#color-scheme)
- [Update Heading Sizes](#heading-sizes)
- [Modify Button Styles Globally](#button-styles)
- [Adjust Spacing](#spacing-changes)

**SEO:**
- [Generate Missing Meta Descriptions](#meta-descriptions)
- [Add Alt Text to Images](#alt-text)
- [Fix Heading Structure](#heading-structure)
- [Create FAQ Schema](#faq-schema)

**Bulk Operations:**
- [Update Contact Info Site-Wide](#contact-info)
- [Change CTA Text Across Site](#cta-bulk)
- [Update Year in Copyrights](#copyright-year)
- [Add Tracking Code to All Pages](#tracking-code)

---

## Content Recipes

### Update Text Across Multiple Pages {#update-text-bulk}

**Use when:** You need to change text that appears on multiple pages (pricing, contact info, company name)

**Difficulty:** Beginner

**The prompt:**

```
List all pages containing the text "[OLD_TEXT]".
For each page:
1. Create a duplicate
2. Replace "[OLD_TEXT]" with "[NEW_TEXT]"
3. Preserve all formatting and styling

Return the duplicates for my review.
```

**Example:**

```
List all pages containing "Call us at (555) 123-4567".
For each page:
1. Create a duplicate
2. Replace with "Call us at (555) 987-6543"
3. Preserve all formatting

Return duplicates for review.
```

**Expected result:**
- List of affected pages
- Duplicate created for each
- Text replaced consistently
- Approval links provided

**Tips:**
- Test on 1-2 pages first before bulk
- Check mobile view (text might wrap differently)
- Verify no partial matches (e.g., don't replace "contact" when you meant "contact form")

### Change Button Text and Style {#button-changes}

**Use when:** Updating CTAs across your site

**Difficulty:** Beginner

**Builder:** Any (specify your builder in prompt)

**The prompt:**

```
On page [PAGE_ID]:
1. Create duplicate
2. Find all buttons with text "[OLD_TEXT]"
3. Change text to "[NEW_TEXT]"
4. Change button color to [COLOR]
5. Verify button functionality preserved

Return duplicate for review.
```

**Example (Elementor):**

```
On page 123:
1. Create duplicate
2. Find all buttons with "Learn More"
3. Change to "Get Started"
4. Change color to #10b981 (green)
5. Keep hover effects and links

Return duplicate for review.
```

**Example (Divi):**

```
On homepage:
1. Duplicate
2. Find all et_pb_button modules with "Contact Us"
3. Change to "Schedule Call"
4. Update button_bg_color to #2563eb
5. Preserve module settings

Return duplicate.
```

**Tips:**
- Specify exact color in hex (#10b981) not "green"
- Test one button first
- Check hover states still work
- Verify links didn't break

---

## Design Recipes

### Change Color Scheme {#color-scheme}

**Use when:** Rebrand, new color palette

**Difficulty:** Intermediate

**Risk:** Medium (affects visual design)

**The prompt:**

```
Audit page [PAGE_ID] for color usage.
Create mapping:
- Old primary: [OLD_COLOR] → New: [NEW_COLOR]
- Old secondary: [OLD_COLOR] → New: [NEW_COLOR]
- Old accent: [OLD_COLOR] → New: [NEW_COLOR]

Then:
1. Create duplicate
2. Replace colors according to mapping
3. Preserve gradients and opacity
4. Check contrast ratios (WCAG AA minimum)

Return duplicate + contrast report.
```

**Tips:**
- Do this on staging first
- Test one page before going site-wide
- Check mobile view
- Verify CTA buttons still stand out
- Run accessibility check after

---

## SEO Recipes

### Generate Missing Meta Descriptions {#meta-descriptions}

**Use when:** SEO audit shows missing meta descriptions

**Difficulty:** Beginner

**The prompt:**

```
For pages [LIST_PAGE_IDS or "all pages"]:
1. Check which pages have missing meta descriptions
2. For each missing description:
   a. Read page title and first paragraph
   b. Generate 150-160 character description
   c. Include primary keyword if obvious
   d. Write for humans, not robots

3. Create duplicates with meta added
4. Return list for review before applying

Requirements:
- 150-160 characters
- Actionable, not generic
- Unique per page
```

**Example:**

```
For all service pages:
1. Find pages with no meta description
2. Generate descriptions that:
   - Summarize page value
   - Include call to action
   - 150-160 chars
   - Use page's primary topic

Create duplicates for review.
```

**Verification:**

```
After approval, verify:
- Meta tag present in HTML
- Character count 150-160
- No duplicate descriptions
- Appears in Google Search Console
```

---

## Bulk Operation Recipes

### Update Contact Info Site-Wide {#contact-info}

**Use when:** Address, phone, email changed

**Difficulty:** Intermediate

**The prompt:**

```
Site-wide contact info update:

Old info:
- Address: [OLD_ADDRESS]
- Phone: [OLD_PHONE]
- Email: [OLD_EMAIL]

New info:
- Address: [NEW_ADDRESS]
- Phone: [NEW_PHONE]
- Email: [NEW_EMAIL]

Steps:
1. Search entire site for any occurrence
2. List all locations (pages, widgets, footers, contact forms)
3. For each location:
   a. Create duplicate or backup
   b. Update info
   c. Preserve formatting
4. Return full change list for review

Do NOT auto-approve. I want to review every location.
```

**Verification checklist:**

- [ ] Contact page
- [ ] Footer (all pages)
- [ ] Header (if applicable)
- [ ] Contact forms (placeholders, labels)
- [ ] About page
- [ ] Sidebar widgets
- [ ] Schema markup (if present)

### Update Year in Copyrights {#copyright-year}

**Use when:** New year, every January

**Difficulty:** Beginner

**The prompt:**

```
Update copyright year site-wide:

Find all instances of "© 2024" or "Copyright 2024"
Replace with "© 2025" or "Copyright 2025"

Search in:
- Footers (all pages)
- Legal pages (Terms, Privacy)
- Custom HTML blocks
- Text widgets

For each instance:
1. Create backup/duplicate
2. Update year
3. Preserve exact formatting

Return list of changes for bulk approval.
```

**Tip:** Run this in early January, verify on staging first.

---

## Builder-Specific Recipes

### Elementor: Update Widget Settings

```
For all Elementor heading widgets on page [PAGE_ID]:
1. Create duplicate
2. Change typography:
   - Font size: 42px → 48px
   - Font weight: 600 → 700
   - Line height: 1.2 → 1.3
3. Preserve:
   - Font family
   - Color
   - Animations
   - Responsive settings

Return duplicate.
```

### Divi: Global Module Update

```
Find all instances of Divi global module "[MODULE_NAME]":
1. List all pages using this module
2. Create duplicates of affected pages
3. Update module:
   - [Setting 1]: [Old] → [New]
   - [Setting 2]: [Old] → [New]
4. Verify global sync maintained

Return affected pages list + duplicates.
```

---

## Prompt Modifiers

**Add these to any prompt for extra safety/control:**

**Extra cautious:**
```
+ Do NOT make any changes without showing me a detailed plan first
+ List every element that will be affected
+ Highlight any potential risks
```

**Verification:**
```
+ After changes, run these checks:
  - Desktop preview
  - Mobile preview  
  - Links functionality
  - Form submissions (if affected)
```

**Constraints:**
```
+ Do NOT change:
  - Global styles
  - Header/footer
  - Navigation menus
  - Any analytics or tracking code
```

---

## Contributing New Recipes

Share a prompt that worked? Add it here:

1. Use the [Prompt Recipe Template](./Template-Prompt-Recipe)
2. Test it at least twice
3. Include builder-specific notes if applicable
4. Redact any private domains or data

## Related

- [First Safe Edit](./First-Safe-Edit) - start here if new
- [Common Issues](./Common-Issues) - if prompts fail
- [MCP Orchestration](./MCP-Orchestration) - multi-tool workflows

---

**Got a recipe to share?** Edit this page or post in [Discussions](https://github.com/webmyc/community/discussions).
