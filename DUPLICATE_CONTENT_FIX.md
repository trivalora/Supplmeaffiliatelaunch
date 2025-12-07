# Duplicate Content Fix - v0.7.1.1

**Date:** December 7, 2025  
**Issue:** Duplicate content warnings on knowledgebase pages (Benefits & Drawbacks sections)

## Problem

The knowledgebase pages were rendering the Benefits & Drawbacks section **twice** in the DOM:
1. Once for mobile view (hidden on desktop with `lg:hidden`)
2. Once for desktop view (hidden on mobile with `hidden lg:block`)

This created duplicate content in the HTML, causing:
- Duplicate content warnings from SEO/accessibility checkers
- Duplicate glossary autolinks in the DOM
- Unnecessary rendering overhead

## Root Cause

**File:** `src/components/templates/KnowledgebaseTemplate.tsx`

The component was using a common responsive pattern of rendering content twice and hiding one version with CSS:

```tsx
{/* Mobile version - after Overview */}
<div className="lg:hidden">
  <BenefitsDrawbacksSection ... />
</div>

{/* Desktop version - in sidebar */}
<div className="hidden lg:block">
  <BenefitsDrawbacksSection ... />
</div>
```

While this is functionally correct, it meant:
- **Both sections exist in the DOM** (just CSS-hidden)
- **Autolinking runs twice** on the same content
- **Duplicate `<a>` tags** with identical hrefs and text

## Solution

Replaced dual-rendering with **CSS Grid reordering** to have only ONE instance of the component:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
  {/* Left Column - Overview + Research */}
  <div className="lg:col-span-2 space-y-8 lg:order-1 order-2">
    <OverviewSection ... />
    <ResearchSection ... />
  </div>

  {/* Right Column - Benefits/Drawbacks (reordered on mobile) */}
  <div className="lg:col-span-1 lg:order-2 order-1">
    <div className="lg:sticky lg:top-[calc(var(--header-height)+1rem)]">
      <BenefitsDrawbacksSection ... />
    </div>
  </div>
</div>
```

**How it works:**
- **Desktop (lg):** Order 1 = left column, Order 2 = right sidebar
- **Mobile:** Order 1 = Benefits/Drawbacks, Order 2 = Overview + Research

## Additional Improvements

**File:** `src/components/sections/knowledgebase/BenefitsDrawbacksSection.tsx`

Added `useMemo` to cache autolinked content and prevent redundant processing:

```tsx
const linkedBenefits = useMemo(
  () => benefits.map((benefit) =>
    shouldUseAutolink
      ? autolinkGlossaryTerms(benefit.description, currentPage)
      : benefit.description
  ),
  [benefits, shouldUseAutolink, currentPage]
);
```

## Results

✅ **Zero duplicate content** - Only one instance of Benefits/Drawbacks in DOM  
✅ **Same visual layout** - Desktop sidebar, mobile appears before overview  
✅ **Better performance** - Autolinking runs once instead of twice  
✅ **Cleaner HTML** - No duplicate `<a>` tags or glossary links  
✅ **SEO compliant** - No duplicate content warnings  

## Testing

1. **Desktop view:** Benefits/Drawbacks appear in right sidebar (sticky)
2. **Mobile view:** Benefits/Drawbacks appear before Overview
3. **HTML inspection:** Only one instance of each benefit/drawback description
4. **Glossary links:** Each term linked only once per benefit/drawback

## Files Changed

1. `src/components/templates/KnowledgebaseTemplate.tsx` - Grid reordering
2. `src/components/sections/knowledgebase/BenefitsDrawbacksSection.tsx` - useMemo caching

## Version

Updated to **v0.7.1.1** (minor fix)

No CHANGELOG.md or PROJECT_MEMORY.md update required (minor fix, not a feature).
