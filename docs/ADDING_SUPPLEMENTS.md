# Guide: Adding a New Supplement to Suppl.me

**Last Updated**: November 26, 2025  
**Sprint**: Sprint 2 - Documentation  
**Difficulty**: Intermediate  
**Time Required**: 30-60 minutes per supplement

---

## Overview

This guide walks you through adding a new supplement to the Suppl.me platform. The current system requires manual component mapping for Next.js static site generation (SSG) to work correctly.

**Current Capacity**: 17 supplements (scalable to 50 with current architecture)

---

## Prerequisites

Before starting, ensure you have:

- [ ] Node.js >=22.x installed
- [ ] Access to supplement product data (DSLD API or manual data collection)
- [ ] Scientific research/meta-analysis for the supplement
- [ ] High-quality supplement image (optimized WebP format preferred)

---

## Step-by-Step Process

### Phase 1: Planning & Data Collection (15-20 minutes)

#### 1.1 Research Requirements

Gather the following information:

- **Supplement Name**: Official name (e.g., "Zinc", "Vitamin B12")
- **Subcategory**: One of: `'Protein Supplements' | 'Vitamins' | 'Minerals' | 'Amino Acids' | 'Probiotics' | 'Omega-3 Fatty Acids' | 'Phytochemicals' | 'Enzymes' | 'Others'`
- **Meta-Analysis Data**: Research grades for benefits
- **Dosing Information**: Evidence-based recommendations
- **Safety Information**: Known side effects, interactions
- **Benefits & Drawbacks**: Evidence-based claims
- **Product Data**: At least 20+ products from major retailers

#### 1.2 File Naming Conventions

Determine the naming pattern for your supplement:

```typescript
// Examples:
'Zinc' → 'ZincKnowledgebasePage' (key: 'zinc')
'Vitamin B12' → 'VitaminB12KnowledgebasePage' (key: 'vitaminb12')
'Fish Oil' → 'FishOilKnowledgebasePage' (key: 'fishoil')

// Rule: Remove spaces, capitalize first letter of each word, add 'KnowledgebasePage' suffix
// Key: Lowercase, no spaces, no special characters
```

---

### Phase 2: Add Route Configuration (5 minutes)

#### 2.1 Edit `src/routes.config.ts`

Add your supplement to the `KNOWLEDGEBASE_ROUTES` array:

```typescript
// Example: Adding Zinc
{
  key: 'zinc',
  title: 'Zinc',
  path: '/zinc',
  description: 'Evidence-based review of zinc for immune function, wound healing, and deficiency prevention',
  componentPath: './components/pages/supplements/ZincKnowledgebasePage',
  componentName: 'ZincKnowledgebasePage',
  showInNav: true,
  category: 'knowledgebase',
  subcategory: 'Minerals'
}
```

**⚠️ Important Notes:**
- Place in alphabetical order for easier maintenance
- `key` must be unique and lowercase
- `path` must start with `/` and match the key
- `componentPath` points to the file location (without `.tsx` extension)
- `componentName` must exactly match the exported function name

#### 2.2 Add Comparison Route

Add a comparison page route to the `COMPARISON_ROUTES` array:

```typescript
{
  key: 'zinc-comparison',
  title: 'Zinc Price Comparison | Best Deals',
  path: '/zinc-comparison',
  componentPath: './components/pages/comparisons',
  componentName: 'ZincComparison',
  category: 'comparison',
  supplementId: 'zinc'
}
```

---

### Phase 3: Create Component Files (15-20 minutes)

#### 3.1 Create Knowledgebase Page Component

Create `src/components/pages/supplements/ZincKnowledgebasePage.tsx`:

```typescript
'use client';

import { KnowledgebaseTemplate } from '@/components/templates/KnowledgebaseTemplate';
import { getSupplementSEO } from '@/lib/seo';
import { SEOHead } from '@/components/SEOHead';

/**
 * Zinc Knowledgebase Page
 * 
 * Evidence-based review of zinc supplementation.
 * Meta-analysis data: [Add source]
 */

export function ZincKnowledgebasePage() {
  const benefits = [
    {
      claim: 'Immune System Support',
      grade: 'A',
      evidence: 'Meta-analysis of 17 RCTs (n=2,367) shows zinc supplementation reduces duration and severity of common cold by 33%.',
      dosing: '15-30mg zinc (as zinc acetate or gluconate) within 24 hours of symptom onset',
      caveat: 'Most effective when taken early. Nausea common at higher doses.'
    },
    // Add more benefits...
  ];

  const drawbacks = [
    {
      concern: 'Copper Deficiency Risk',
      grade: 'B',
      evidence: 'Long-term zinc supplementation (>40mg/day) can reduce copper absorption, leading to deficiency.',
      risk: 'High doses (>40mg/day) for extended periods',
      mitigation: 'Consider copper co-supplementation (2mg copper per 15mg zinc) for long-term use.'
    },
    // Add more drawbacks...
  ];

  const pageProps = {
    supplementName: 'Zinc',
    heroDescription: 'Comprehensive evidence-based review of zinc supplementation: immune function, wound healing, and testosterone support.',
    heroImageUrl: '/images/supplements/zinc.webp',
    
    overviewContent: (
      <>
        <p className="leading-relaxed">
          Zinc is an essential mineral involved in over 300 enzymatic reactions, immune function, 
          protein synthesis, and wound healing. Deficiency affects an estimated 17% of the global population.
        </p>
        {/* Add more overview content */}
      </>
    ),
    
    benefits,
    drawbacks,
    
    researchGrades: [
      { claim: 'Immune System Support', grade: 'A' },
      { claim: 'Wound Healing', grade: 'B' },
      { claim: 'Testosterone Support', grade: 'C' },
      // Add more grades...
    ],
    
    buyingGuideItems: [
      {
        category: 'Form',
        recommendation: 'Zinc picolinate or citrate',
        reasoning: 'Better absorbed than zinc oxide or sulfate.'
      },
      // Add more buying guide items...
    ],
    
    references: [
      {
        authors: 'Hemilä H, Fitzgerald JT, Petrus EJ, Prasad A',
        title: 'Zinc acetate lozenges for treating the common cold: an individual patient data meta-analysis',
        journal: 'Br J Clin Pharmacol',
        year: 2016,
        url: 'https://pubmed.ncbi.nlm.nih.gov/27378206/'
      },
      // Add more references...
    ],
    
    furtherReading: [
      {
        title: 'NIH Office of Dietary Supplements - Zinc',
        url: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
        description: 'Comprehensive overview of zinc research and recommendations'
      },
      // Add more reading links...
    ],
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Zinc', benefits, '/zinc')} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}
```

**⚠️ Important:**
- Always include `'use client';` at the top
- Export function name MUST match `componentName` in routes.config.ts
- Use `KnowledgebaseTemplate` for consistent structure
- Include at least 3-5 benefits and 2-3 drawbacks with evidence

#### 3.2 Create Comparison Page Component

Create `src/components/pages/comparisons/ZincComparison.tsx`:

```typescript
'use client';

import { ProductComparisonWrapper } from '@/components/templates/ProductComparisonWrapper';
import { PageKey } from '@/routes.config';

interface ComparisonProps {
  onNavigate?: (page: PageKey) => void;
}

export function ZincComparison({ onNavigate }: ComparisonProps) {
  return (
    <ProductComparisonWrapper
      supplementId="zinc"
      onNavigate={onNavigate}
    />
  );
}
```

#### 3.3 Export Comparison Component

Add export to `src/components/pages/comparisons/index.ts`:

```typescript
export { ZincComparison } from './ZincComparison';
```

---

### Phase 4: Add Component Mapping (5 minutes)

#### 4.1 Edit `app/[slug]/page.tsx`

Add imports and mapping entries:

```typescript
// 1. Add import (alphabetical order)
import { ZincKnowledgebasePage } from '@/components/pages/supplements/ZincKnowledgebasePage';

// ... (other imports)

import {
  // ... (existing comparison imports)
  ZincComparison,
} from '@/components/pages/comparisons';

// 2. Add to COMPONENT_MAP (alphabetical order)
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  // Knowledgebase pages
  // ... (existing entries)
  'ZincKnowledgebasePage': ZincKnowledgebasePage,
  
  // Comparison pages
  // ... (existing entries)
  'ZincComparison': ZincComparison,
};
```

**⚠️ Critical:** Missing this step will result in 404 errors!

---

### Phase 5: Add Product Data (10-15 minutes)

#### 5.1 Create Product JSON File

Create `public/api/products/supplements/zinc.json`:

```json
[
  {
    "id": "NOW-Zinc-50mg",
    "dsld_id": "12345",
    "brand": "NOW Foods",
    "name": "Zinc Gluconate 50mg",
    "serving_size": "1 tablet",
    "servings_per_container": 250,
    "form": "Tablet",
    "active_ingredients": [
      {
        "name": "Zinc",
        "amount": 50,
        "unit": "mg",
        "daily_value_percent": 455
      }
    ],
    "retailers": [
      {
        "name": "iHerb",
        "url": "https://www.iherb.com/pr/now-foods-zinc-gluconate-50-mg-250-tablets/542",
        "price": 9.99,
        "price_per_serving": 0.04
      },
      {
        "name": "Amazon",
        "url": "https://www.amazon.com/dp/B000I69B3W",
        "price": 12.49,
        "price_per_serving": 0.05
      }
    ],
    "certifications": ["GMP"],
    "third_party_tested": true
  }
  // Add 20+ more products...
]
```

**Data Collection Tips:**
- Use DSLD database for accurate supplement information
- Collect at least 20-30 products from major retailers
- Include price per serving for comparison
- Note third-party testing and certifications

---

### Phase 6: Add Image Assets (5 minutes)

#### 6.1 Add Supplement Image

Add optimized image to `public/images/supplements/zinc.webp`

**Image Specifications:**
- Format: WebP (preferred) or JPEG
- Size: 800×600 pixels minimum
- File size: <200KB
- Aspect ratio: 4:3 or 16:9
- Content: High-quality supplement bottle or ingredient visualization

#### 6.2 Register Image in Mapping

Add to `src/utils/supplementImages.ts`:

```typescript
export const supplementImages: Record<string, string> = {
  // ... existing entries
  zinc: '/images/supplements/zinc.webp',
};
```

---

### Phase 7: Test & Verify (10 minutes)

#### 7.1 Run Development Server

```bash
npm run dev
```

**Test Checklist:**

- [ ] Navigate to `/zinc` - page loads correctly
- [ ] Navigate to `/zinc-comparison` - comparison page loads
- [ ] Header dropdown shows "Zinc" in navigation
- [ ] Search functionality finds "Zinc"
- [ ] All benefits/drawbacks render with proper grades
- [ ] Research section displays correctly
- [ ] Buying guide section appears
- [ ] Product comparison section loads products
- [ ] References section displays with working links
- [ ] Further reading links work
- [ ] Image loads correctly
- [ ] No console errors

#### 7.2 Build for Production

```bash
npm run build
```

**Build Checklist:**

- [ ] Build completes successfully (no errors)
- [ ] All 1,938 pages generated (1,936 + 1 new knowledgebase + 1 new comparison)
- [ ] Structured data generated for zinc page
- [ ] Sitemap includes new routes

---

## Common Issues & Solutions

### Issue 1: 404 Error on New Page

**Symptom**: Navigating to `/zinc` returns 404

**Solutions**:
1. Check routes.config.ts - ensure `path: '/zinc'` is correct
2. Verify component mapping in `app/[slug]/page.tsx`
3. Check component export name matches exactly
4. Run `npm run build` to regenerate static pages

---

### Issue 2: Component Not Found

**Symptom**: Build error: `Component ZincKnowledgebasePage not found in COMPONENT_MAP`

**Solutions**:
1. Check import statement in `app/[slug]/page.tsx`
2. Verify export name in component file matches import
3. Ensure no typos in COMPONENT_MAP

---

### Issue 3: Comparison Page Not Loading

**Symptom**: `/zinc-comparison` returns 404 or doesn't load products

**Solutions**:
1. Check COMPARISON_ROUTES in routes.config.ts
2. Verify `supplementId: 'zinc'` matches product JSON filename
3. Ensure comparison export added to `index.ts`
4. Check COMPONENT_MAP includes comparison component

---

### Issue 4: Image Not Loading

**Symptom**: Broken image icon on page

**Solutions**:
1. Verify image file exists at correct path
2. Check supplementImages.ts mapping
3. Ensure image format is WebP or JPEG
4. Clear browser cache and rebuild

---

### Issue 5: Build Takes Too Long

**Symptom**: Build time exceeds 10 minutes

**Solutions**:
1. Check product JSON file size (<2MB recommended)
2. Optimize images (WebP, <200KB)
3. Consider splitting large product datasets
4. Close unnecessary applications during build

---

## Checklist: Adding a Supplement

Use this checklist to track your progress:

**Phase 1: Planning**
- [ ] Research data collected
- [ ] Meta-analysis reviewed
- [ ] Product data gathered (20+ products)
- [ ] Image acquired and optimized

**Phase 2: Routes**
- [ ] Added to KNOWLEDGEBASE_ROUTES
- [ ] Added to COMPARISON_ROUTES

**Phase 3: Components**
- [ ] Created knowledgebase page component
- [ ] Created comparison page component
- [ ] Added comparison export to index.ts

**Phase 4: Mapping**
- [ ] Added knowledgebase import to app/[slug]/page.tsx
- [ ] Added comparison import to app/[slug]/page.tsx
- [ ] Added both to COMPONENT_MAP

**Phase 5: Data**
- [ ] Created product JSON file
- [ ] Verified JSON structure
- [ ] Added minimum 20 products

**Phase 6: Assets**
- [ ] Added supplement image
- [ ] Registered image in supplementImages.ts

**Phase 7: Testing**
- [ ] Development server loads page
- [ ] Comparison page works
- [ ] Navigation dropdown shows supplement
- [ ] Search finds supplement
- [ ] Production build succeeds
- [ ] All pages generate correctly

---

## Tips for Efficiency

### Batch Operations

When adding multiple supplements, consider this workflow:

1. **Day 1: Research** - Collect data for 5 supplements
2. **Day 2: Routes** - Add all 5 to routes.config.ts at once
3. **Day 3: Components** - Create all 5 knowledgebase components
4. **Day 4: Components** - Create all 5 comparison components
5. **Day 5: Mapping & Data** - Add all mappings and product data
6. **Day 6: Testing** - Test all 5 together

### Code Templates

Save boilerplate code as snippets in your editor for faster creation.

### Automation Opportunities (Future)

The following could be automated:
- Component mapping generation from routes.config.ts
- Comparison component creation (they're all identical structure)
- Product data collection from DSLD API

---

## Next Steps After Adding Supplement

1. **Update Documentation**
   - Add supplement to README.md supplement list
   - Update any affected guides

2. **Announce Addition**
   - Update changelog
   - Prepare social media announcement
   - Email notification to subscribers

3. **Monitor Performance**
   - Check Google Search Console for indexing
   - Monitor page load times
   - Track user engagement

4. **Consider Related Content**
   - Add glossary terms related to new supplement
   - Create comparison guides (e.g., "Zinc vs. Copper")
   - Write blog posts about the supplement

---

## Scaling Beyond 30 Supplements

When approaching 30+ supplements, consider:

1. **Dynamic Component Loading** (attempted in Sprint 2)
   - Currently blocked by Next.js SSG limitations
   - Revisit when Next.js supports dynamic imports in SSG

2. **Database Migration**
   - Move product data to PostgreSQL/Supabase
   - API-based product fetching
   - Required at 50+ supplements

3. **Search Service**
   - Implement Algolia or Typesense
   - Required for sub-50ms search at 50+ supplements

4. **Build Optimization**
   - Incremental Static Regeneration (ISR)
   - Edge caching with Vercel
   - Separate admin/public builds

---

## Questions?

If you encounter issues not covered in this guide:

1. Check existing supplement pages for examples
2. Review build errors carefully (they're usually specific)
3. Consult the audit documents in `docs/` folder
4. Ask in development Slack channel

**Document maintained by**: Development Team  
**Last verified working**: November 26, 2025  
**Next review date**: January 1, 2026
