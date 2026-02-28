---
title: "Elementor: supported workflows, known gotchas, and safe patterns"
category: "Prompt Recipes"
---

If you're using Elementor, start with these safe patterns:

- duplicate the page/template first
- keep changes small
- verify responsive breakpoints

Known gotchas (from docs):

- Target widgets by custom CSS ID (`_element_id`) for reliable updates
- Elementor stores layouts as JSON in `_elementor_data` post meta
- Avoid batch edits across many pages in one run; do one page at a time for critical content

Recommended workflows:

- [Read page](https://docs.respira.press/tools/pages/read-page) → inspect structure
- [Create duplicate](https://docs.respira.press/tools/pages/create-duplicate) → safe copy
- [Update page](https://docs.respira.press/tools/pages/update-page) → edit the duplicate
- Approve in WordPress Admin (Respira → Approve Edits)

Docs:

- [Elementor Builder Reference](https://docs.respira.press/builders/elementor)
