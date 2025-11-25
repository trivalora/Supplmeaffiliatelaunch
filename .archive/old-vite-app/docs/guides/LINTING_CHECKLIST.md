# Linting & Validation Checklist

**Purpose:** Ensure consistency, scalability, and maintainability across all knowledgebase pages.

**Last Updated:** November 5, 2025

---

## Table of Contents

1. [Pre-Commit Checklist](#pre-commit-checklist)
2. [Automated Validation Rules](#automated-validation-rules)
3. [Manual Code Review Checklist](#manual-code-review-checklist)
4. [Common Issues & Fixes](#common-issues--fixes)
5. [Validation Scripts](#validation-scripts)

---

## Pre-Commit Checklist

### ✅ Before Every Commit

Run through this checklist for EVERY file you modify:

#### Typography & Styling
- [ ] **NO inline clamp() values** - Use `.fluid-h1`, `.fluid-h2`, `.fluid-h3`, `.fluid-body`, `.fluid-small`, `.fluid-lead`
- [ ] **NO manual font-size** in `className` or `style` attributes
- [ ] **NO hardcoded colors** except in hero sections (brand identity)
- [ ] **NO arbitrary Tailwind values** like `bg-[#162F1C]`, `p-[24px]`, `text-[18px]`
- [ ] **All colors use CSS variables** or Tailwind semantic classes

#### Data Attributes & Spacing
- [ ] **NO manual padding** on elements with `data-knowledgebase-*` attributes
- [ ] **NO manual margin** on elements with `data-knowledgebase-*` attributes
- [ ] **NO spacing classes** (p-6, m-4, gap-4) on data-attributed elements
- [ ] **All layout containers** use semantic data attributes
- [ ] **Data attributes are hierarchical** (e.g., `data-knowledgebase-card-info`)

#### Template Consistency
- [ ] **Uses template component** (KnowledgebaseTemplate, WhatToExpectSection, etc.)
- [ ] **Props are data-only** (no styling properties like `titleStyle` or `cardPadding`)
- [ ] **Section structure** matches other V2 pages
- [ ] **Component imports** are consistent (`./components/FileName`)

#### External Links
- [ ] **All external links** have `target="_blank"`
- [ ] **All external links** have `rel="nofollow noopener noreferrer"`
- [ ] **USP links** go to homepage: `https://www.usp.org/`
- [ ] **ConsumerLab links** go to homepage: `https://www.consumerlab.com/`
- [ ] **NSF links** go to homepage: `https://www.nsf.org/`

#### Glossary
- [ ] **All comparison operators escaped** as `<` and `>`
- [ ] **All technical terms** are linked using glossary autolink
- [ ] **Glossary pages** follow GlossaryTemplate structure
- [ ] **NO JSX parsing errors** from unescaped < or >

#### Content Consistency
- [ ] **Disclaimer text standardized:** "Effects vary by individual. Consult healthcare provider before starting."
- [ ] **Sunset icon** used for evening effects (from lucide-react)
- [ ] **Timeline data** follows proper structure (onset, peak, duration, labels)
- [ ] **Results timeline** has "Signs of effectiveness" section if applicable

#### Performance & Accessibility
- [ ] **All images** have descriptive `alt` attributes
- [ ] **Icon sizes** are consistent (w-5 h-5 for inline, w-6 h-6 for features)
- [ ] **Heading hierarchy** is correct (h1 → h2 → h3)
- [ ] **NO console errors** when running the page

---

## Automated Validation Rules

[Full validation rules with JavaScript code examples available in original file - 870 lines total]

### Rule 1: No Inline clamp() in JSX
**Fix:** Use `.fluid-h2` instead of inline clamp()

### Rule 2: No Manual Padding on Data Attributes
**Fix:** Remove manual padding, let data attributes handle spacing

### Rule 3: External Links Must Be Safe
**Fix:** Add `target="_blank"` and `rel="nofollow noopener noreferrer"`

### Rule 4: Comparison Operators Must Be Escaped
**Fix:** Use `<` and `>` instead of < and >

### Rule 5: Standardized Disclaimer Text
**Fix:** Use exact text: "Effects vary by individual. Consult healthcare provider before starting."

### Rule 6: Third-Party Links Go to Homepages
**Fix:** Link to homepage, not subpages

### Rule 7: Consistent Icon Sizes
**Standard sizes:** w-4, w-5, w-6, w-8, w-12

---

## Manual Code Review Checklist

### For Pull Request Reviews

When reviewing PRs, verify the following:

#### Structural Consistency
- [ ] Same template used across similar pages
- [ ] Identical section order across pages
- [ ] Consistent data structures
- [ ] NO custom implementations of standard sections

#### Styling Consistency
- [ ] Typography classes used throughout
- [ ] Data attributes handle all layout spacing
- [ ] NO mixing of semantic and manual styles
- [ ] CSS variables used for colors

#### Component Reusability
- [ ] Shared components used
- [ ] NO duplicate code between pages
- [ ] Props interfaces match template requirements
- [ ] Icon imports are consistent

#### Content Consistency
- [ ] Disclaimer text is standardized
- [ ] External link formatting is consistent
- [ ] Glossary term linking is comprehensive
- [ ] Image alt texts are descriptive

---

## Common Issues & Fixes

### Issue 1: Mixing Typography Approaches
❌ **Bad:** `<h2 style={{ fontSize: 'clamp(...)' }}>`  
✅ **Good:** `<h2 className="fluid-h2">`

### Issue 2: Data Attributes with Manual Spacing
❌ **Bad:** `<div data-knowledgebase-card-info className="p-6">`  
✅ **Good:** `<div data-knowledgebase-card-info>`

### Issue 3: Unsafe External Links
❌ **Bad:** `<a href="https://external.com">Link</a>`  
✅ **Good:** Add `target="_blank"` and `rel="nofollow noopener noreferrer"`

---

## Validation Scripts

Create validation scripts in `/scripts/` directory:

- `lint-typography.js` - Check typography classes
- `lint-data-attributes.js` - Check data attribute spacing
- `lint-external-links.js` - Check external link safety
- `lint-glossary.js` - Check glossary escaping
- `lint-all.js` - Run all checks

**Add to package.json:**
```json
{
  "scripts": {
    "lint:all": "node scripts/lint-all.js",
    "lint:typography": "node scripts/lint-typography.js",
    "lint:data-attributes": "node scripts/lint-data-attributes.js",
    "lint:external-links": "node scripts/lint-external-links.js",
    "lint:glossary": "node scripts/lint-glossary.js"
  }
}
```

---

## Integration with Git Hooks

### Pre-Commit Hook

Create `.husky/pre-commit`:

```bash
#!/bin/sh
npm run lint:all
```

**Setup:**
```bash
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm run lint:all"
```

---

## Summary

This linting system ensures:

✅ **Consistency** - All pages follow the same patterns  
✅ **Scalability** - Easy to add 100+ pages with confidence  
✅ **Maintainability** - Changes propagate through templates  
✅ **Quality** - Automated checks catch issues early  
✅ **Speed** - Developers get immediate feedback  

**Key Principle:** If it can be automated, it should be automated.

---

**Last Updated:** November 5, 2025  
**Maintained By:** Trivalora Development Team
