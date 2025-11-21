# Image Architecture Audit & Implementation Plan

**Date:** November 20, 2025  
**Status:** In Progress  
**Priority:** P0 - Critical rendering issues affecting hero and section images

---

## Executive Summary

Image rendering issues stem from **misuse of `<picture>` element for layout**. The HTML spec defines `<picture>` as a transparent wrapper for format selection only, but our code applies layout styles (width/height/positioning) directly to it. This causes browser inconsistencies and percentage-height calculation failures.

**Impact:**
- Hero image: "Padding on sides" - not filling viewport width
- Section images: Not filling container height despite grid stretch
- Product images: Working correctly (explicit height container)

---

## Root Cause Analysis

### The Picture Element Problem

**HTML Standard:** `<picture>` should be transparent - no layout responsibility
**Our Implementation:** Applies `width: 100%, height: 100%` to picture element

```tsx
// CURRENT (WRONG)
<picture style={{ display: 'block', width: '100%', height: '100%' }}>
  <img style={{ width: '100%', height: '100%' }} />
</picture>

// CORRECT
<div style={{ width: '100%', height: '100%' }}>
  <picture>
    <img style={{ width: '100%', height: '100%' }} />
  </picture>
</div>
```

### Why Percentage Heights Fail

CSS `height: 100%` requires explicit height on ALL ancestors:

```
Container (height: 75vh) ✅
  → Picture (height: 100%) ⚠️ = 75vh in some browsers, undefined in others
    → Img (height: 100%) ❌ = 100% of what? Picture has no defined box model
```

### Why Product Images Work

```tsx
<div style={{ height: '25vh' }}>  // ✅ Explicit height in viewport units
  <picture> ... </picture>         // Browser can calculate 100% = 25vh
</div>
```

---

## Implementation Plan

### Phase 1: P0 Fixes (3 hours) - CRITICAL

**Goal:** Fix all current rendering issues

#### 1.1 Remove Layout Styles from Picture Element ✅ Priority: P0
**File:** `src/components/ResponsivePicture.tsx`
**Change:** Picture gets ONLY `display: block`, no dimensions
**Rationale:** Picture is format selector, not layout container

#### 1.2 Add Explicit Wrapper Divs ✅ Priority: P0
**Files:** `src/components/LandingPage.tsx`
**Changes:**
- Hero: Wrap ResponsivePicture in div with explicit dimensions
- Sections: Ensure grid stretch works with proper picture sizing
**Rationale:** Wrapper divs provide concrete dimensions for percentage calculations

#### 1.3 Fix SmartImage Consistency ✅ Priority: P0
**File:** `src/components/SmartImage.tsx`
**Change:** Always render picture element (even without cache)
**Rationale:** Prevents layout shifts when manifest updates

### Phase 2: P1 Fixes (7 hours) - HIGH

#### 2.1 Add Intrinsic Dimensions
**Files:** Both image components
**Change:** Add width/height attributes from manifest
**Impact:** Prevents CLS, improves Core Web Vitals

#### 2.2 Fix Sizes Attributes
**File:** `src/components/SmartImage.tsx`
**Change:** Default sizes to actual rendered width (240px for products)
**Impact:** Prevents downloading oversized images (2.6x bandwidth waste)

#### 2.3 Make Object-Fit Configurable
**Files:** Both image components
**Change:** Add objectFit prop with sensible defaults
**Impact:** Component reusability

### Phase 3: P2 Fixes (Future) - MEDIUM

- Quality calibration with perceptual testing
- Cache invalidation with content hashing
- Art direction support for responsive cropping
- Separate components by use case

---

## Current State Assessment

### Components

**ResponsivePicture:**
- ✅ AVIF/WebP format selection
- ✅ Multiple width variants
- ✅ Accepts className prop
- ❌ Forces layout styles on picture element
- ❌ Hardcodes objectFit: 'cover'
- ❌ No intrinsic dimensions

**SmartImage:**
- ✅ Amazon/Cloudinary URL optimization
- ✅ Local caching with manifest
- ❌ Inconsistent DOM (picture vs img based on cache)
- ❌ Default sizes="90vw" incorrect for 240px cards
- ❌ Hardcodes objectFit: 'contain'

### Image Pipeline

**optimize-images.mjs:**
- ✅ 8 width variants (48-1920px)
- ✅ AVIF/WebP dual format
- ✅ File-based caching
- ⚠️ Generates unused small variants for hero (48-256px)
- ⚠️ Quality settings uncalibrated (AVIF 50, WebP 75)

**cache-remote-images.mjs:**
- ✅ 4 width variants (240-640px)
- ✅ Manifest tracking
- ✅ Fetch with retry/backoff
- ⚠️ No content-type validation
- ⚠️ No size limits (DoS risk)

---

## Performance Metrics

**Current Landing Page:**
- Hero: 271KB AVIF (1920px) ✅
- Section images: ~100KB each ✅
- Product images: ~50KB each ✅
- Total first paint: ~671KB ✅

**Identified Waste:**
- Sizes attribute: 2.6x bandwidth waste on products
- Storage: 5x waste from unused hero variants
- CLS: Missing dimensions likely >0.1 threshold

---

## Implementation Tracking

### Completed
- [x] ResponsivePicture refactor - Picture only gets display:block, img handles all sizing
- [x] LandingPage hero wrapper - Added explicit div with width/height 100%
- [x] LandingPage section wrappers - Added inner divs for both sections
- [x] SmartImage unification - Always renders picture element regardless of cache

### In Progress
- Testing Phase 1 fixes

### Blocked
- None

---

## Testing Checklist

After each fix:
- [ ] Hero image fills viewport edge-to-edge (no side padding)
- [ ] Section images fill container height (match content height)
- [ ] Product images remain constrained to 25vh container
- [ ] No layout shift on page load
- [ ] No console errors/warnings
- [ ] Hot reload works without full refresh

---

## Rollback Plan

If issues arise:
1. Git checkout previous commit
2. Clear browser cache
3. Restart dev server
4. Document specific failure case

**Last Known Good Commit:** [To be recorded]

---

## References

- [MDN: `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [HTML Spec: The picture element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)
- [CSS Percentage Heights](https://www.w3.org/TR/CSS2/visudet.html#the-height-property)
- [Core Web Vitals: CLS](https://web.dev/cls/)
