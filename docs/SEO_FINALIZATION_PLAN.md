# SEO Finalization Plan

**Date:** November 27, 2025  
**Status:** In Progress  
**Priority:** HIGH - SEO Critical Issues

---

## Executive Summary

This document outlines the plan to finalize SEO optimization for the Suppl.me website, addressing 4 critical issues identified during audit.

### Issues Identified

1. **Mobile Image Optimization** - Images not properly optimized on mobile devices
2. **Missing Glossary SEO Metadata** - 8 glossary terms missing meta_title and meta_description
3. **Meta Description Audit** - Ensure unique, SEO-optimized descriptions across all pages
4. **Product Structured Metadata** - Verify structured data for all 1,691 products from database

---

## Investigation Findings

### 1. Mobile Image Optimization Analysis

**Current Implementation:**

**SectionImage Component** (`src/components/images/SectionImage.tsx`):
```tsx
<source type="image/avif" srcSet={toSet('avif')} sizes="(min-width: 1024px) 50vw, 100vw" />
<source type="image/webp" srcSet={toSet('webp')} sizes="(min-width: 1024px) 50vw, 100vw" />
```

**Issue:** `sizes` attribute correctly uses responsive breakpoints BUT:
- Missing intermediate mobile breakpoints (640px, 768px)
- Could benefit from more granular size hints for tablets
- AVIF and WebP srcSets are correctly generated

**ProductImage Component** (`src/components/images/ProductImage.tsx`):
```tsx
sizes = '240px'  // Default is fixed size
```

**Issue:** Fixed size doesn't account for:
- High DPI displays (Retina, etc.)
- Different mobile screen sizes
- Container width variations

**Root Cause:**
- Images ARE being delivered with proper srcSet and modern formats (AVIF, WebP)
- The `sizes` attribute needs refinement for better mobile optimization
- Next.js Image component not being used (custom implementation instead)

**Solution:** Enhance `sizes` attributes with more granular mobile breakpoints

---

### 2. Missing Glossary SEO Metadata

**Database Query Results:**

Found **8 terms** missing SEO metadata:

1. `bloodglucose` - Blood Glucose
2. `cognitivefunction.tsx` - Cognitive Function (note: .tsx in slug - migration artifact)
3. `eightohdg` - 8-OHdG
4. `hedgesg` - Hedges' g
5. `inflammation` - Inflammation
6. `insulinresistance` - Insulin Resistance
7. `omega3` - Omega-3 Fatty Acids
8. `singleblinded` - Single Blinded

**Root Cause:**
- These terms were migrated from React components to database
- SEO metadata extraction script missed these 8 terms
- Existing glossary pages fall back to hardcoded components

**Solution:** Generate and insert SEO metadata into Supabase database

---

### 3. Meta Description Audit

**Current Implementation:**

**Layout (Default):**
```tsx
description: 'Comprehensive evidence-based supplement information with clinical research, 
meta-analysis reviews, dosing recommendations, safety profiles, and multi-retailer price 
comparison. Compare prices from iHerb, Amazon, Vitacost, and more.'
```

**Supplement Pages:**
- Use `getSEOContent(route.key)` from `src/lib/seo-content.ts`
- Falls back to generic: `Evidence-based information about ${route.title} supplements: benefits, dosing, safety, and retailer comparison.`

**Product Pages:**
```tsx
description: `Compare prices and view supplement facts for ${brand} ${productName}. 
Available at multiple retailers with detailed ingredient information from DSLD database.`
```
✅ **Dynamic per product** - GOOD

**Static Pages:**
- About, Contact, Privacy, Terms - ✅ **Unique descriptions**
- Glossary Index - ✅ **Unique description**
- Glossary Terms - Use `term.meta_description` or fall back to `term.definition`

**Issues Found:**
- Root layout description repeated in openGraph and Twitter metadata
- Need to verify supplement pages have unique descriptions (check `seo-content.ts`)

**Solution:** Audit `seo-content.ts` for uniqueness and optimization

---

### 4. Product Structured Metadata

**Current Implementation:**

Product pages (`app/[slug]/product/[productId]/page.tsx`):
```tsx
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // Fetches from Supabase
  const { data: product, error } = await supabase
    .from('products')
    .select(`id, brand, dsld_product_name, supplement:supplements(name)`)
    .eq('id', productId)
    .single();
  
  // Returns basic metadata (title, description, keywords, openGraph, twitter)
}
```

**Issue:**
- ❌ No Schema.org structured data (Product, Offer, AggregateRating)
- ❌ No JSON-LD implementation
- ✅ Basic metadata (title, description, OG, Twitter) is dynamic from DB

**Root Cause:**
- Structured data implementation missing from product pages
- Supplement comparison pages have structured data, but products don't

**Solution:** Implement Product schema with JSON-LD for all product pages

---

## Implementation Plan

### Phase 1: Mobile Image Optimization (2 hours)

**Files to Modify:**
1. `src/components/images/SectionImage.tsx`
2. `src/components/images/ProductImage.tsx`

**Changes:**

#### SectionImage.tsx
```tsx
// BEFORE
sizes="(min-width: 1024px) 50vw, 100vw"

// AFTER  
sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 60vw, (min-width: 768px) 75vw, (min-width: 640px) 90vw, 100vw"
```

#### ProductImage.tsx
```tsx
// BEFORE
sizes = '240px'

// AFTER
sizes = '(min-width: 1024px) 240px, (min-width: 768px) 200px, (min-width: 640px) 180px, 160px'
```

**Testing:**
- Test on Chrome DevTools mobile emulation
- Verify correct image sizes loaded on different viewports
- Check Lighthouse mobile score improvement

---

### Phase 2: Glossary SEO Metadata (1.5 hours)

**Task:** Add meta_title and meta_description for 8 missing terms

**Implementation:**

Create SQL migration script:
```sql
-- Fix slug issue (cognitivefunction.tsx → cognitivefunction)
UPDATE api.glossary_terms 
SET slug = 'cognitivefunction' 
WHERE slug = 'cognitivefunction.tsx';

-- Add SEO metadata for all 8 terms
UPDATE api.glossary_terms
SET 
  meta_title = 'Blood Glucose - Suppl.me Glossary',
  meta_description = 'Blood glucose levels and their relationship to supplement efficacy, metabolism, and health outcomes.'
WHERE slug = 'bloodglucose';

-- (Repeat for all 8 terms...)
```

**Validation:**
```bash
node scripts/migration/validate-glossary-data.mjs
```

---

### Phase 3: Meta Description Audit (2 hours)

**Tasks:**

1. **Audit seo-content.ts**
   - Read `src/lib/seo-content.ts`
   - Verify all 17 supplements have unique descriptions
   - Check for SEO best practices (150-160 chars, includes keywords)

2. **Create meta description checker script**
   ```javascript
   // scripts/audit-meta-descriptions.mjs
   // Check for duplicates, length, keyword inclusion
   ```

3. **Fix any issues found**
   - Rewrite duplicate descriptions
   - Optimize length and keywords
   - Ensure call-to-action where appropriate

---

### Phase 4: Product Structured Metadata (3 hours)

**Task:** Implement Schema.org Product structured data for all 1,691 products

**Files to Create/Modify:**
1. Create `src/lib/structuredData.ts` (if doesn't exist)
2. Modify `app/[slug]/product/[productId]/page.tsx`

**Implementation:**

```typescript
// src/lib/structuredData.ts
export function generateProductSchema(product: any) {
  const prices = product.retailer_prices || [];
  const lowestPrice = prices.reduce((min, p) => 
    p.price < min ? p.price : min, Infinity);
  const highestPrice = prices.reduce((max, p) => 
    p.price > max ? p.price : max, 0);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.brand} ${product.dsld_product_name}`,
    description: `${product.dsld_product_name} by ${product.brand}`,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: lowestPrice.toFixed(2),
      highPrice: highestPrice.toFixed(2),
      offerCount: prices.length,
      availability: 'https://schema.org/InStock',
      offers: prices.map(p => ({
        '@type': 'Offer',
        price: p.price.toFixed(2),
        priceCurrency: 'USD',
        seller: {
          '@type': 'Organization',
          name: p.retailer_name
        },
        url: p.url,
        availability: 'https://schema.org/InStock'
      }))
    },
    category: product.supplement?.name || 'Dietary Supplement'
  };
}
```

```tsx
// app/[slug]/product/[productId]/page.tsx
import { generateProductSchema } from '@/lib/structuredData';

export default async function ProductPage({ params }: ProductPageProps) {
  // ... existing code ...
  
  // Fetch full product data
  const { data: product } = await supabase
    .from('products')
    .select(`*, supplement:supplements(name), retailer_prices(*)`)
    .eq('id', productId)
    .single();
  
  const structuredData = generateProductSchema(product);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageViewTracker ... />
      <ProductDetailClient ... />
    </>
  );
}
```

**Validation:**
- Test with Google Rich Results Test
- Verify all products have structured data
- Check for schema validation errors

---

## Timeline

| Phase | Task | Duration | Status |
|-------|------|----------|--------|
| 1 | Mobile Image Optimization | 2h | 🔄 Next |
| 2 | Glossary SEO Metadata | 1.5h | ⏳ Pending |
| 3 | Meta Description Audit | 2h | ⏳ Pending |
| 4 | Product Structured Data | 3h | ⏳ Pending |
| **Total** | | **8.5h** | |

---

## Success Metrics

### Before (Current)
- Lighthouse SEO Score: 9.75/10
- Missing SEO metadata: 8 glossary terms
- Mobile image optimization: Partial
- Structured data: Supplement pages only

### After (Target)
- Lighthouse SEO Score: 10/10
- Missing SEO metadata: 0
- Mobile image optimization: ✅ Complete
- Structured data: ✅ All pages (1,936 total)
- Unique meta descriptions: ✅ 100%
- Google Rich Results: ✅ 1,691 products

---

## Documentation Updates

After implementation, update:
1. `docs/COMPREHENSIVE_AUDIT_DEC2025.md` - Update SEO score and findings
2. `docs/API_DOCUMENTATION.md` - Document structured data utilities
3. `docs/STYLING_GUIDE.md` - Add image optimization guidelines
4. `README.md` - Update project status
5. Create `docs/SEO_OPTIMIZATION_COMPLETE.md` - Final report

---

## Next Steps

1. ✅ Investigation complete
2. ⏳ Begin Phase 1: Mobile Image Optimization
3. ⏳ Execute remaining phases sequentially
4. ⏳ Validate all changes
5. ⏳ Update documentation
6. ⏳ Deploy to production

