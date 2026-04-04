# HOMA-IR 404 Fix - v0.7.1.2

**Date:** December 7, 2025  
**Issue:** `/glossary/homair` returns 404 error

## Problem

The URL `/glossary/homair` was returning a 404 error because:
- **Database slug:** `homa-ir` (with hyphen)
- **Autolinking key:** `homair` (without hyphen)
- **Result:** Glossary autolinks pointed to `/glossary/homair` which doesn't exist

## Root Cause

Mismatch between the autolinking configuration and database slug format. When the glossary was migrated to the database, the slug was correctly set as `homa-ir` (following URL conventions with hyphens), but the autolinking file still had the old format without the hyphen.

## Solution

### 1. Fixed Autolinking Key

**File:** `src/lib/glossaryAutolink.tsx`

Changed from:
```tsx
{
  key: "homair",
  terms: [
    "HOMA-IR",
    "Homeostatic Model Assessment of Insulin Resistance",
    "homa-ir",
  ],
}
```

To:
```tsx
{
  key: "homa-ir",
  terms: [
    "HOMA-IR",
    "Homeostatic Model Assessment of Insulin Resistance",
    "homa-ir",
  ],
}
```

### 2. Added 301 Redirect

**File:** `next.config.mjs`

Added redirect for legacy URLs:
```javascript
{
  source: "/glossary/homair",
  destination: "/glossary/homa-ir",
  permanent: true,
}
```

### 3. Verification Script

Created `scripts/check-glossary-mismatches.mjs` to detect similar issues:
- Compares database slugs with autolinking keys
- Ensures 100% match across all 197 glossary terms
- Can be run anytime to validate consistency

## Testing

✅ **Correct URL:** `https://www.suppl.me/glossary/homa-ir` → 200 OK  
✅ **Old URL:** `https://www.suppl.me/glossary/homair` → 308 Redirect → `/glossary/homa-ir`  
✅ **Database check:** All 197 terms verified matching  

## Impact

- **SEO:** 404 error eliminated, proper 308 redirect preserves link equity
- **User Experience:** Users with old bookmarks/links automatically redirected
- **Future-proof:** Verification script prevents similar issues

## Files Changed

1. `src/lib/glossaryAutolink.tsx` - Fixed HOMA-IR key
2. `next.config.mjs` - Added redirect
3. `scripts/check-glossary-mismatches.mjs` - New verification tool (NEW)

## Version

Minor fix - **v0.7.1.2**
