# Copilot Instructions: Suppl.me Affiliate Launch

## Project Overview

Evidence-based supplement information platform. **Next.js 16 App Router** (production-ready, Vercel-deployed) with static site generation for 1,936 pages.

**Current Status**: Production-ready - 17 supplement pages, 198 glossary terms, 17 comparison pages, 1,691 product detail pages, 1,936 total static pages.

**Recent Critical Updates (Nov 25, 2025 - Evening)**:
- ✅ **Content Directory Reorganization COMPLETE** (Phase 11): All content organized into logical structure
- ✅ **292 Files Reorganized**: 254 moved, 20 new, 13 modified
- ✅ **New Directory Structure**: pages/, templates/, sections/, shared/, providers/
- ✅ **All Imports Updated**: routes.config.ts + app/ + component imports
- ✅ **Build Verified**: 1937 pages, 0 TypeScript errors
- ✅ **Codebase Cleanup Complete**: Archived 13 obsolete migration scripts
- ✅ **Comprehensive Audit**: CODEBASE_AUDIT_NOV25.md created
- ✅ **Content Structure Recommendations**: IMPLEMENTED (was optional, now complete)
- ✅ **Scalability & Standardization Audit**: CODEBASE_AUDIT_SCALABILITY_NOV2025.md created
- ✅ All previous critical updates remain resolved

**Previous Critical Updates (Nov 25, 2025):**
- ✅ **Hero Image Full Width**: Fixed position: fixed with proper top offset, spans full viewport
- ✅ **Search Dropdowns**: All 3 contexts (header, hero, product comparison) properly sized and scrollable
  - Header search: `max-height: calc(94vh - var(--header-height))`
  - Hero search: `max-height: calc(37vh - var(--header-height))` (60vh position)
  - Product comparison: `max-height: calc(84vh - var(--header-height))` (15vh position)
- ✅ **Image Constraints Removed**: Global `max-width: 80%` changed to `max-width: 100%`
- ✅ **Thumbnail Images**: Dropdown thumbnails use absolute positioning to fill containers (no whitespace)
- ✅ **Search Result Clicks**: Fixed click-outside handler to allow navigation
- ✅ **Scroll Behavior**: Search dropdowns use `overscroll-behavior: contain` to prevent page scroll
- ✅ **Build System**: 0 TypeScript errors, 0 peer dependency warnings
- ✅ **All Critical Issues**: RESOLVED
**Known Issues & Improvement Opportunities**: See `docs/CODEBASE_AUDIT_SCALABILITY_NOV2025.md` for detailed analysis.

**High Priority Improvements Identified:**
1. 🔴 Remove 'v2' suffix from route keys (confusing legacy naming)
2. ✅ **COMPLETED**: Extract comparison component wrappers (17 separate files created)
3. 🔴 Replace hardcoded colors with CSS variables (8 components affected)

**Medium Priority Improvements:**
4. ⚠️ Separate data from components (improve maintainability)
5. ⚠️ Implement dynamic component loading (scalability for 30+ supplements)
6. ⚠️ Standardize glossary related terms format (consistency)

See full audit report for detailed recommendations and implementation roadmap.
**Known Issues**: NONE - All critical issues resolved!

## Architecture

### Frontend (app/ + src/)
- **Next.js 16** (App Router) + React 19 + TypeScript + Tailwind CSS v4
- **Routing System**:
  - `src/routes.config.ts` - Single source of truth for ALL navigation (230 routes)
  - **Route categories**: 'knowledgebase' | 'glossary' | 'comparison' (v1/v2 removed)
  - `app/[slug]/page.tsx` - Dynamic route for supplement + comparison pages (34 routes)
  - `app/[slug]/product/[productId]/page.tsx` - Dynamic product detail pages (1,691 routes)
  - `app/glossary/[term]/page.tsx` - Dynamic route for 198 glossary terms
  - `app/lib/route-adapter.ts` - Bridges routes.config.ts → Next.js params
  - **COMPONENT_MAP pattern**: All page components MUST be imported and mapped in dynamic routes
- **Key Templates** (Client Components in src/components/):
  - `KnowledgebaseTemplate` - Supplement pages with evidence, dosing, retailer buttons
  - `GlossaryTemplate` - Scientific term pages with auto-linking
  - `ProductComparisonWrapper` - Price comparison pages (17 supplements)
  - `ProductDetailClient` - Product detail pages with DSLD data, pricing, retailer buttons (1,867 pages)
- **Analytics**: GTM container via `@next/third-parties/google`, dataLayer pattern in src/utils/analytics.ts
  - **GTM Container**: `src/gtm-container-complete.json` (22 events, 36 variables, import via GTM_IMPORT_GUIDE.md)
  - **GA4 Measurement ID**: G-JHCPJYM37R
- **Performance**: All 2,108 pages statically generated at build time (SSG with ISR support)

### API (api/)
Vercel serverless functions:
- `/api/health` - Status endpoint
- Future: dynamic data endpoints, affiliate redirects, analytics

## Critical Workflows

### Add New Supplement Page
1. **Add route** to `src/routes.config.ts` in `KNOWLEDGEBASE_ROUTES`:
   ```typescript
   {
     key: 'zinc',
     title: 'Zinc',
     path: '/zinc',
     category: 'knowledgebase',
     componentPath: './components/pages/supplements/ZincKnowledgebasePage',
     componentName: 'ZincKnowledgebasePage',
     showInNav: true,
     subcategory: 'Minerals'
   }
   ```

2. **Create component** `src/components/pages/supplements/ZincKnowledgebasePage.tsx`:
   ```typescript
   'use client';  // Required for analytics
   import { KnowledgebaseTemplate } from '@/components/templates/KnowledgebaseTemplate';
   
   export function ZincKnowledgebasePage() {
     return <KnowledgebaseTemplate supplementName="Zinc" {...data} />;
   }
   ```

3. **Add to dynamic route** `app/[slug]/page.tsx`:
   ```typescript
   // Import
   import { ZincKnowledgebasePage } from '@/components/pages/supplements/ZincKnowledgebasePage';
   
   // Add to COMPONENT_MAP
   const COMPONENT_MAP = {
     // ...
     'ZincKnowledgebasePage': ZincKnowledgebasePage,
   };
   ```

4. **Add comparison page**:
   ```typescript
   // Create src/components/pages/comparisons/ZincComparison.tsx
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
   
   // Add export to src/components/pages/comparisons/index.ts:
   export { ZincComparison } from './ZincComparison';
   
   // In routes.config.ts (COMPARISON_ROUTES)
   {
     key: 'zinc-comparison',
     title: 'Zinc Price Comparison | Best Deals',
     path: '/zinc-comparison',
     componentPath: './components/pages/comparisons',
     componentName: 'ZincComparison',
     category: 'comparison'
   }
   
   // Import in app/[slug]/page.tsx (automatically from index.ts):
   import { ZincComparison } from '@/components/pages/comparisons';
   const COMPONENT_MAP = { 'ZincComparison': ZincComparison, ... };
   ```

5. **Add image** to `src/utils/supplementImages.ts`:
   ```typescript
   zinc: '/images/supplements/zinc.webp'
   ```

Page auto-appears in Header dropdown and generates statically at build time.

### Add Glossary Term
1. **Create page** `src/components/pages/glossary/ZincDeficiencyPage.tsx`:
   ```typescript
   'use client';  // Required if using Lucide icons
   import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
   
   export function ZincDeficiencyPage() {
     return (
       <GlossaryTemplate
         term="Zinc Deficiency"
         definition="A condition where..."  // Must be string, not JSX
         expandedExplanation={<>JSX content here</>}  // Use this for JSX
       />
     );
   }
   ```

2. **Add route** to `src/routes.config.ts` in `GLOSSARY_ROUTES`:
   ```typescript
   {
     key: 'zinc-deficiency',
     title: 'Zinc Deficiency',
     path: '/glossary/zinc-deficiency',
     componentPath: './components/pages/glossary/ZincDeficiencyPage',
     componentName: 'ZincDeficiencyPage',
     description: 'A condition where...'
   }
   ```

Term auto-links in content and generates statically.
   ```typescript
   {
     key: 'zinc-deficiency',
     title: 'Zinc Deficiency',
     path: '/glossary/zinc-deficiency',
     componentName: 'ZincDeficiencyPage',
     description: 'A condition where...'
   }
   ```

Term auto-links in content and generates statically.

### Build & Deploy
```bash
npm run dev              # Dev server on port 3000 (or 3001 if 3000 occupied)
npm run build            # Production build (1,936 static pages)
npm run build:images     # Build with image optimization
npm run build:full       # Build with images + font subsetting
npm run start            # Serve production build locally
```

**Build Status** (Jan 2025):
- ✅ 0 TypeScript errors
- ✅ 0 peer dependency warnings (was 60)
- ✅ 1,936 pages: 17 supplements + 1,691 products + 198 glossary + 17 comparisons + 13 static
- ✅ Node.js >=22.x (currently v24.1.0 in dev)
- ✅ React 19.2.0 + Next.js 16.0.3 + Tailwind CSS v4

**Important**: `postbuild` script auto-runs after build:
- Generates sitemap.xml from routes.config.ts (includes all 1,936 pages)
- Creates structured data JSON-LD files (clean filenames without v2 suffix)
- Pings search engines

**Vercel Deploy**: Automatic on push to main. Build command: `npm run build`, output: `.next/`.

### Product Page Patterns

**Breadcrumb Structure** (4 levels):
```typescript
// app/components/ProductDetailClient.tsx
Home / {supplement} Products / {brand} / {product name without brand}

// Example:
Home / ashwagandha Products / Nutricost / Organic Ashwagandha Root Powder
//     └─ supplement    └─ brand   └─ product (brand prefix stripped)
```

**Retailer Button Styling** (7 retailer-specific styles):
```typescript
// iHerb, GNC, Walmart, Vitacost, Bodybuilding.com, Supplement Warehouse:
className="bg-tertiary border-secondary" + logo + "Buy Now"

// Amazon (special case):
className="bg-[#FF9900]" (orange) + inverted white logo

// Generic retailers:
className="bg-primary text-white" + "Buy Now at {retailer}"
```

**DSLD Label Data** (8 categories displayed when available):
- statement_of_identity (Product Identity)
- branding (Branding Claims)
- formulation (Formulation Details)
- suggested_use (Suggested Use)
- precautions (Precautions)
- product_specific (Product Specific Information)
- seals_symbols (Certifications & Seals)
- other (Other Label Information)

## Next.js-Specific Patterns

### 1. Server vs Client Components
- **Default is Server Component** - no 'use client' needed
- **Add 'use client' when**:
  - Using React hooks (useState, useEffect, useRef, etc.)
  - Using browser APIs (window, document, localStorage)
  - Importing Lucide icons (they're functions, need client boundary)
  - Tracking analytics (onClick handlers)

**Example**:
```typescript
'use client';  // Required for hooks + icons

import { useState } from 'react';
import { Heart, Brain } from 'lucide-react';

export function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>...</button>;
}
```

### 2. Dynamic Routes with Async Params
Next.js 15+ requires awaiting params:
```typescript
// app/[slug]/page.tsx
export default async function SupplementPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;  // Must await!
  const route = getRouteByPath(`/${slug}`);
  // ...
}

// generateMetadata also needs await
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;  // Must await!
  // ...
}
```

### 3. Centralized Routing (routes.config.ts)
**NEVER hardcode routes**. Always use routes.config.ts:
```typescript
import { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } from '@/routes.config';

// Get route by key
const route = KNOWLEDGEBASE_ROUTES.find(r => r.key === 'vitamin-d');

// Navigate using Next.js Link
import Link from 'next/link';
<Link href={route.path}>{route.title}</Link>
```

### 4. Component Props: Strings vs JSX
GlossaryTemplate has two fields for content:
- `definition` - **String only**, will be auto-linked
- `expandedExplanation` - **JSX/ReactNode**, for complex content

```typescript
// WRONG - JSX in definition
<GlossaryTemplate
  definition={<p>Some <strong>bold</strong> text</p>}  // Error!
/>

// CORRECT - String in definition, JSX in expandedExplanation
<GlossaryTemplate
  definition="Some bold text"  // Plain string
  expandedExplanation={<p>Some <strong>bold</strong> text</p>}  // JSX ok here
/>
```

### 5. Image Handling
- Place images in `public/images/supplements/` or `public/images/glossary/`
- Use Next.js Image component for optimization:
  ```typescript
  import Image from 'next/image';
  <Image src="/images/supplements/vitamin-d.webp" alt="Vitamin D" width={800} height={600} />
  ```
- Image optimization: `npm run images` (converts to WebP, generates srcsets)

### 6. Hero Image Full-Width Coverage ✅ FIXED (Nov 25, 2025)
**Previous Issue**: Hero background image cuts off ~15% on left/right sides
**Solution Applied**: 
- Changed `.hero-image-container` to `position: fixed` with `top: var(--header-height)`
- Uses `left: 0; width: 100vw` for full viewport coverage
- Added `z-index: -1` to keep behind content
- Removed global `max-width: 80%` image constraint
- Added `.hero-image` and `.hero-image-container img` to exception list

**Documentation**: See `docs/HERO_IMAGE_FIX_NOV25.md` for complete details

**Working Pattern**:
```typescript
// src/styles/globals.css
.hero-image-container {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100vw;
  height: 75vh;
  max-height: 75vh;
  z-index: -1;
}
```

### 7. Search Results Styling (Category-Specific Backgrounds)
Search dropdowns use distinct backgrounds per category with **3 context-specific max-heights**:

**Dropdown Height Calculations** (Nov 25, 2025):
```css
/* Header search - positioned at header level (~0vh from top) */
.header-search-dropdown {
  max-height: calc(94vh - var(--header-height));
}

/* Hero search - positioned at 60vh from top */
.hero-search-dropdown {
  max-height: calc(37vh - var(--header-height));
}

/* Product comparison search - positioned at 15vh from top */
.product-comparison-search-dropdown {
  max-height: calc(84vh - var(--header-height));
}
```

**Scroll Behavior**:
- All dropdowns use `overflow: hidden` on container
- `.search-results-content` has `overflow-y: auto` with `overscroll-behavior: contain`
- This prevents page scroll when scrolling dropdown

**Result Item Backgrounds**:
```typescript
// Knowledgebase items - Blackish overlay
style={{ backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.03)' }}

// Glossary items - White backgrounds
style={{ backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF' }}

// Product Comparison - Defined in CSS
.comparison-item { background-color: rgba(22, 47, 28, 0.15); }
```

**Thumbnail Images**:
- All use `.dropdown-thumbnail` class (40x40px containers)
- Images use `position: absolute; inset: 0` to fill completely
- Global `max-width: 100%` (removed 80% constraint)
- No whitespace or margins

**Click Handling**:
- Search dropdowns use separate `dropdownRef` to prevent click-outside closing
- Allows navigation to complete before dropdown closes

## Project-Specific Conventions

### 1. Component Naming
- Supplement pages: `[Name]KnowledgebasePage.tsx` (e.g., `AshwagandhaKnowledgebasePage.tsx`)
- Glossary pages: `[Name]Page.tsx` (e.g., `BioavailabilityPage.tsx`)
- **No more "V2" suffix** - v1 pages removed, all current pages are v2 architecture
- **⚠️ KNOWN ISSUE**: Route keys still have `v2` suffix (e.g., `ashwagandhav2`) - scheduled for cleanup

### 2. Styling Standards (Priority Order)

**Use in this order:**

1. **Tailwind Utility Classes** (Primary)
   ```typescript
   <div className="bg-primary text-white p-4 rounded-lg">
   ```

2. **CSS Variables via Inline Styles** (Dynamic values)
   ```typescript
   <div style={{ paddingTop: 'var(--header-height)' }}>
   ```

3. **Tailwind + CSS Variables** (Hybrid)
   ```typescript
   <div className="p-[var(--space-md)] bg-primary/10">
   ```

4. **Inline Styles** (Last resort - complex calculations)
   ```typescript
   <div style={{ height: 'calc(100vh - var(--header-height))' }}>
   ```

**Never Use:**
- ❌ Hardcoded hex colors (`#162F1C`) - use `var(--primary)` or Tailwind classes
- ❌ Hardcoded pixel values (`padding: 24px`) - use `var(--space-*)` or Tailwind
- ❌ Magic numbers without comments

**Available CSS Variables**: See `src/styles/globals.css` for complete list:
- Typography: `--fluid-h1`, `--fluid-h2`, `--fluid-body`, etc.
- Spacing: `--space-xs`, `--space-sm`, `--space-md`, etc.
- Colors: `--primary`, `--secondary`, `--tertiary`, `--background`, etc.
- Layout: `--header-height`, `--page-padding-inline`, etc.

### 2. Glossary Auto-Linking
Content automatically links glossary terms:
```typescript
import { autolinkGlossaryContent } from '@/lib/glossaryAutolink';

// For JSX
const linkedJSX = autolinkGlossaryContent(<p>Text with bioavailability mentioned</p>);

// For strings
const linkedText = autolinkGlossaryTerms('Text with meta-analysis mentioned');
```

Auto-linking:
- Case-insensitive matching
- Handles plurals automatically
- Creates hover cards with term definitions
- Tracks clicks via `trackGlossaryLinkClick()`
- **Performance**: Uses `useMemo()` in templates to prevent re-processing

### 3. Analytics Tracking
// src/components/ZincKnowledgebasePage.tsx (20 lines)
import { ZINC_DATA } from '@/data/supplements/zinc';
export function ZincKnowledgebasePage() {
  return <KnowledgebaseTemplate {...ZINC_DATA} />;
}
```

### 4. Component Reusability

**Template System** (use these for all pages):
- `KnowledgebaseTemplate` - All supplement pages (17 in use)
- `GlossaryTemplate` - All glossary terms (198 in use)
- `ProductComparisonWrapper` - All comparison pages (17 in use)
- `ProductDetailClient` - All product detail pages (1,691 in use)

**Modular Sections** (in `src/components/sections/knowledgebase/`):
- `BenefitsDrawbacksSection` - Benefits/drawbacks cards
- `ResearchSection` - Research grades display
- `BuyingGuideSection` - Buying recommendations
- `ReferencesSection` - Scientific references
- `ProductComparisonSection` - Price comparison embed
- `OverviewSection` - Overview content
- `FurtherReadingSection` - Additional resources

**When to create new components**: Only if pattern used 3+ times AND not covered by existing templates.
- `BuyingGuideSection` - Buying recommendations
- `ReferencesSection` - Scientific references
- `ProductComparisonSection` - Price comparison embed
- `OverviewSection` - Overview content
- `FurtherReadingSection` - Additional resources

**When to create new components**: Only if pattern used 3+ times AND not covered by existing templates.

### 2. Glossary Auto-Linking
Content automatically links glossary terms:
```typescript
import { autolinkGlossaryContent } from '@/lib/glossaryAutolink';

// For JSX
const linkedJSX = autolinkGlossaryContent(<p>Text with bioavailability mentioned</p>);

// For strings
const linkedText = autolinkGlossaryTerms('Text with meta-analysis mentioned');
```

Auto-linking:
- Case-insensitive matching
- Handles plurals automatically
- Creates hover cards with term definitions
- Tracks clicks via `trackGlossaryLinkClick()`

### 3. Analytics Tracking
All tracking via src/utils/analytics.ts:
```typescript
// Page views
trackPageView('Vitamin D', 'supplement');

// User interactions
trackSupplementSection('Omega-3', 'benefits');
trackAccordionToggle('What to Expect', true);

// External links
trackOutboundLink('https://amazon.com', 'Buy Now', 'affiliate', 'vitamin-d');
trackRetailerClick('iHerb', 'https://iherb.com/product', 'magnesium', 15.99);

// Product interactions
trackProductClick('NOW Foods Vitamin D', 'NOW Foods', 'iHerb', 9.99, 'vitamin-d');
```

All events push to `window.dataLayer` → GTM → GA4/Hotjar/Clarity.
### 4. SEO & Structured Data
Every page needs metadata:
```typescript
// app/[slug]/page.tsx
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const route = getRouteByPath(`/${slug}`);
  
  return {
    title: `${route.title} - Suppl.me`,
    description: route.description,
    openGraph: { title: route.title, description: route.description },
  };
}
```

Structured data generates automatically via `postbuild`:
- Sitemap: `public/sitemap.xml` (1,936 URLs)
- JSON-LD: `public/structured-data/[key].json` (clean filenames: ashwagandha.json not ashwagandhav2.json)
- Product schema names: Enhanced with "- Scientific Evidence & Price Comparison" suffix
- BreadcrumbList schema: Added to all 1,691 product pages for SERP breadcrumbs

**URL Structure** (SEO-optimized):
```
✅ Clean URLs:
/ashwagandha                    # Knowledgebase
/ashwagandha-comparison         # Comparison
/ashwagandha/product/ABC123     # Product Detail
/glossary/bioavailability       # Glossary

❌ Never use:
/ashwagandhav2                  # No version suffixes
/supplement/123                 # No numeric IDs
/products?id=ABC                # No query params
```

## Scalability & Best Practices

### Current Architecture Capacity

**Current Scale**: 1,936 pages
- 17 supplement pages
- 198 glossary terms
- 17 comparison pages
- 1,691 product detail pages
- 13 static pages

**Estimated Capacity** (without refactoring):
- **Immediate** (0-30 supplements): Current system adequate
- **Growth** (30-100 supplements): Requires dynamic component loading
- **Enterprise** (100+ supplements): Database migration recommended

### Identified Improvement Opportunities

See `docs/CODEBASE_AUDIT_SCALABILITY_NOV2025.md` for full analysis.

**Quick Reference**:
1. 🔴 HIGH: Remove `v2` suffix from route keys (effort: 2h)
2. 🔴 HIGH: Generate comparison wrappers programmatically (effort: 3h)
3. 🔴 HIGH: Replace hardcoded colors with CSS variables (effort: 4h)
4. ⚠️ MEDIUM: Separate data from components (effort: 8h)
5. ⚠️ MEDIUM: Implement dynamic component loading (effort: 6h)

### Adding New Supplements at Scale

**When adding your 1st-30th supplement**: Follow existing pattern (3 files)
**When adding your 31st+ supplement**: Implement dynamic loading first

**Current Bottleneck**: COMPONENT_MAP in `app/[slug]/page.tsx`
```typescript
// Current (manual - doesn't scale past 30):
import { Supplement1Page } from '@/components/...';
import { Supplement2Page } from '@/components/...';
// ... 30+ imports ...

const COMPONENT_MAP = {
  'Supplement1Page': Supplement1Page,
  // ... 30+ mappings ...
};

// Future (dynamic - scales to 1000+):
const Component = await import(`@/components/${route.componentName}`);
```n" suffix
- BreadcrumbList schema: Added to all 1,691 product pages for SERP breadcrumbs

## Key Files & Directories

### Must-Know Files
- `src/routes.config.ts` - **Single source of truth** for all navigation (2,322 lines)
- `app/layout.tsx` - Root layout with GTM, Header, Footer
- `app/[slug]/page.tsx` - Dynamic supplement pages (17 routes) + COMPONENT_MAP
- `app/[slug]/product/[productId]/page.tsx` - Dynamic product detail pages (1,867 routes)
- `app/glossary/[term]/page.tsx` - Dynamic glossary pages (198 routes)
- `app/error.tsx` - Next.js error boundary with analytics tracking
- `app/components/HeaderClient.tsx` - Header with search, dropdown (434 lines)
- `app/components/ProductDetailClient.tsx` - Product detail page with DSLD data (648 lines)
- `app/lib/route-adapter.ts` - Maps routes.config.ts → Next.js
- `src/components/templates/KnowledgebaseTemplate.tsx` - Supplement page template (337 lines)
- `src/components/templates/GlossaryTemplate.tsx` - Glossary term template (286 lines)
- `src/utils/analytics.ts` - All analytics tracking functions
- `src/lib/glossaryAutolink.tsx` - Auto-linking engine
- `src/styles/globals.css` - Design system, CSS variables (2,134 lines)
- `package.json` - Build scripts, Node >=22.x required

### Directory Structure
```
app/                           # Next.js App Router
├── [slug]/
│   ├── page.tsx              # Supplement + comparison pages (dynamic, COMPONENT_MAP)
│   └── product/[productId]/page.tsx  # Product detail pages (1,867 routes)
├── glossary/[term]/page.tsx  # Glossary pages (dynamic)
├── components/               # Client components (HeaderClient, ProductDetailClient, etc.)
├── lib/route-adapter.ts      # Route mapping utility
├── layout.tsx                # Root layout
└── error.tsx                 # Error boundary with analytics

src/                           # Source code
├── components/               # All page components (289 total)
│   ├── pages/
│   │   ├── supplements/      # 17 knowledgebase pages
│   │   ├── comparisons/      # 17 comparison pages + index
│   │   ├── glossary/         # 197 glossary term pages
│   │   └── static/           # 13 static pages
│   ├── templates/            # 3 template files (Knowledgebase, Glossary, ProductComparison)
│   ├── sections/
│   │   └── knowledgebase/    # 10 modular sections (Benefits, Research, etc.)
│   ├── shared/
│   │   ├── layout/           # Header, Footer, ErrorBoundary
│   │   ├── ui-extensions/    # TrackedLink, AffiliateTooltip, ImageWithFallback, DarkModeToggle
│   │   └── content/          # SearchResults, SmartImage, ResponsivePicture
│   ├── providers/            # AnalyticsProvider
│   └── ui/                   # 47 ShadCN components
├── routes.config.ts          # ⭐ ROUTING SOURCE OF TRUTH (2,322 lines)
├── utils/                    # Analytics, images, supplementImages.ts
├── lib/                      # Glossary autolink, analytics
└── styles/globals.css        # Design system (2,134 lines - CSS variables, dark mode)

scripts/                       # Build scripts
├── data-pipeline/            # Product data scraping & processing
├── database/                 # DSLD database queries
└── web-build/               # Sitemap, structured data generation

public/                        # Static assets
├── images/supplements/       # Supplement images (17)
├── api/products/supplements/ # Product data JSON (17 files, ~2 MB each)
├── structured-data/          # JSON-LD files (auto-generated)
└── sitemap.xml              # Generated sitemap (1,937 URLs)
```

**File Count Summary**:
- Component Files: 289 (17 supplements + 17 comparisons + 197 glossary + 13 static + 45 other)
- Data Files: 41 (17 product JSON + 17 images + 7 logos)
- Configuration: 18 (routes, TypeScript, Next.js, build scripts)
- **Total Static Pages**: 1,937
Medium Usage (50-90%):
⚠️ technicalExplanation (154/198 - 78%)
⚠️ examples (129/198 - 65%)
⚠️ keyPoints (115/198 - 58%)

⚠️ INCONSISTENCY: relatedTerms uses two different formats:
// Format 1 (60% of pages):
relatedTerms: ['Term 1', 'Term 2']

// Format 2 (40% of pages):
relatedTerms: [{ term: 'Term 1', key: 'term1' }]

// Recommendation: Standardize on object format
```

**When creating new pages**, refer to most complete examples:
- Knowledgebase: `AshwagandhaKnowledgebasePage.tsx`, `CreatineKnowledgebasePage.tsx`
- Glossary: `RCTPage.tsx`, `MetaAnalysisPage.tsx`

### Directory Structure
```
app/                           # Next.js App Router
├── [slug]/
│   ├── page.tsx              # Supplement + comparison pages (dynamic)
│   └── product/[productId]/page.tsx  # Product detail pages (1,867 routes)
├── glossary/[term]/page.tsx  # Glossary pages (dynamic)
├── components/               # Client components (HeaderClient, ProductDetailClient, etc.)
├── lib/route-adapter.ts      # Route mapping utility
├── layout.tsx                # Root layout
└── error.tsx                 # Error boundary with analytics

src/                           # Source code
├── components/               # All page components
│   ├── *KnowledgebasePage.tsx  # 17 supplement pages
│   ├── glossary/*.tsx        # 198 glossary pages
│   ├── knowledgebase/        # Modular sections (Evidence, Dosing, etc.)
│   └── ui/                   # ShadCN components (39 total)
├── routes.config.ts          # ROUTING SOURCE OF TRUTH
├── utils/                    # Analytics, images, supplementImages.ts
├── lib/                      # Glossary autolink, analytics
└── styles/globals.css        # Design system (CSS variables, primary green)

scripts/                       # Build scripts
└── web-build/               # Sitemap, structured data generation

public/                        # Static assets
├── images/supplements/       # Supplement images
├── structured-data/          # JSON-LD files
└── sitemap.xml              # Generated sitemap
```

## Common Pitfalls

### 1. Next.js 15+ Params Breaking Change
**Error**: `params.slug` is undefined
**Cause**: Next.js 15+ made params a Promise
**Fix**:
```typescript
// WRONG (old way)
export default async function Page({ params }: { params: { slug: string } }) {
  const route = getRouteByPath(`/${params.slug}`);
}

// CORRECT (new way)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  // Must await!
  const route = getRouteByPath(`/${slug}`);
}
```

### 2. Client Component Boundaries
**Error**: "Event handlers cannot be passed to Client Components"
**Cause**: Passing onClick/functions to Server Components
**Fix**: Add `'use client'` to component that needs interactivity:
```typescript
'use client';  // Add this at top of file

import { useState } from 'react';
export function MyComponent() {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(s => s + 1)}>Click</button>;
}
```

### 3. Lucide Icons in Server Components
**Error**: "Functions cannot be passed directly to Client Components"
**Cause**: Lucide icons are functions, need client boundary
**Fix**: Add `'use client'` to any component using Lucide icons:
```typescript
'use client';  // Required for Lucide icons

import { Heart, Brain, Shield } from 'lucide-react';
export function MyComponent() {
  return <Heart className="w-6 h-6" />;
}
```

### 4. JSX in String Props
**Error**: "a.split is not a function"
**Cause**: Passing JSX to `definition` field (expects string)
**Fix**: Use `expandedExplanation` for JSX content:
```typescript
// WRONG
<GlossaryTemplate
  definition={<p>Some <strong>text</strong></p>}  // Error!
/>

// CORRECT
<GlossaryTemplate
  definition="Some text"  // Plain string
  expandedExplanation={<p>Some <strong>text</strong></p>}  // JSX here
/>
```

### 5. Route Not Found (404)
**Symptoms**: New page returns 404
**Debug**:
1. Check `src/routes.config.ts` - route defined?
2. Check `app/[slug]/page.tsx` - component imported and in COMPONENT_MAP?
3. Check component filename matches componentName in routes.config.ts
4. Rebuild: `npm run build` (routes cached at build time)

**Fix**:
```typescript
// 1. Add to routes.config.ts
{ key: 'zinc', title: 'Zinc', path: '/zinc', componentName: 'ZincKnowledgebasePage', ... }

// 2. Import in app/[slug]/page.tsx
import { ZincKnowledgebasePage } from '@/components/ZincKnowledgebasePage';

// 3. Add to COMPONENT_MAP
const COMPONENT_MAP = { 'ZincKnowledgebasePage': ZincKnowledgebasePage, ... };
```

**Common Cause**: Comparison pages missing from COMPONENT_MAP - All comparison components from ProductComparisonWrapper.tsx MUST be imported and mapped.

### 6. Hero Image Cut Off on Sides
**Symptoms**: Hero background image cuts off ~15% on left/right sides, horizontal scrollbar appears
**Cause**: Using `width: '100vw'` on hero image/overlay containers breaks out of document flow
### 6. Hero Image Full-Width Coverage ✅ FIXED (Nov 25, 2025)
**Previous Issue**: Hero background image cuts off ~15% on left/right sides
**Solution Applied**: 
- Removed redundant `width: '100%', height: '100%'` from image containers
- Added proper height constraints and header offset to hero section
- Fixed responsive padding with `px-[2vw] md:px-[var(--page-padding-inline)]`
- Fixed TypeScript error in HeaderClient import

**Documentation**: See `docs/HERO_IMAGE_FIX_NOV25.md` for complete details

**Working Pattern**:
```typescript
// src/components/LandingPage.tsx
<div
  id="hero"
  className="relative flex items-center justify-center"
  style={{
    minHeight: '600px',
    height: '75vh',
    maxHeight: '75vh',
    marginTop: 'var(--header-height)'
  }}
>
  {/* Background Image - NO explicit width constraint */}
  <div className="absolute inset-0">
    <HeroImage ... />
  </div>
  
  <div className="relative z-10 w-full px-[2vw] md:px-[var(--page-padding-inline)]">
    {/* Content */}
  </div>
</div>
```

### 7. Header Overlapping Content
**Symptoms**: Fixed header covers top portion of hero section or page content
**Cause**: Content doesn't account for fixed header height (80px)
**Fix**: Add `marginTop: 'var(--header-height)'` to hero section or `padding-top: var(--header-height)` to main content:
```typescript
// Hero section offset
<div id="hero" style={{ 
  height: '75vh',
  marginTop: 'var(--header-height)' 
}}>

// OR for regular pages
<main className="min-h-screen" style={{ paddingTop: 'var(--header-height)' }}>
```

### 8. Product Page Colors Not Consistent
**Symptoms**: Product pages using mixed green variants instead of brand primary
**Cause**: Hardcoded green-50, green-100, green-500, green-600 colors
**Fix**: Use CSS variables (primary, primary/10, primary/30) from globals.css:
```typescript
// WRONG
className="bg-green-50 border-green-200 text-green-600"

// CORRECT
className="bg-primary/10 border-primary/30 text-primary"
```

### 9. DSLD Label Data Missing
**Symptoms**: Only 2 label categories showing (suggested_use, precautions)
**Cause**: Missing display code for other 6 categories
**Fix**: All 8 categories implemented in ProductDetailClient.tsx:
- statement_of_identity, branding, formulation, suggested_use, precautions, product_specific, seals_symbols, other

### 10. Analytics Not Tracking
**Error**: Events not appearing in window.dataLayer
**Debug**:
```javascript
// Check dataLayer exists
console.log(window.dataLayer);

// Check GTM loaded
console.log(window.google_tag_manager);

// Test manual event
window.dataLayer.push({ event: 'test', data: 'hello' });
```

**Common causes**:
- GTM container ID wrong (check NEXT_PUBLIC_GTM_ID in .env)
- AdBlocker blocking GTM script
- Missing trackPageView() call on page mount
- Component not a Client Component (add 'use client')

### 11. Build Fails on Vercel
**Symptoms**: Build succeeds locally, fails on Vercel
**Check**:
1. Node version: 22.x specified in package.json engines
2. Build command: `npm run build` (NOT npm run build:full)
3. Install command: `npm install` (default)
4. Output directory: `.next` (default for Next.js)
5. Environment variables set in Vercel dashboard

**Debug**:
```bash
# Test production build locally
npm run build
npm run start

# Check build output
ls -la .next/

# Verify all dependencies installed
npm install
```

## GTM Analytics Setup

### Container Import (First-Time Setup)
The project includes a pre-configured GTM container with 22 events, 36 variables, and full GA4 integration:

1. **Import container**: `src/gtm-container-complete.json`
2. **Follow guide**: `GTM_IMPORT_GUIDE.md` for step-by-step instructions
3. **Container ID**: GTM-NQWRNKFT (update in `.env` if using different container)
4. **GA4 Property**: G-JHCPJYM37R

### Key Events Tracked (22 total)
- **Page interactions**: pageview, supplement_view, supplement_section_view
- **Product events**: product_click, product_impressions, retailer_click
- **Affiliate tracking**: affiliate_click, certification_click
- **User engagement**: scroll_depth (25/50/75/100%), time_on_page, engagement_time
- **Navigation**: navigation_click, search, glossary_link_click, cta_click
- **Session tracking**: session_start, session_end, exit_intent
- **Error monitoring**: error, 404_error, outbound_link_click

### Analytics Testing
```javascript
// Check dataLayer in browser console
console.log(window.dataLayer);

// Check GTM loaded
console.log(window.google_tag_manager);

// Test manual event
window.dataLayer.push({ event: 'test', data: 'hello' });

// Use GTM Preview mode (recommended)
// Use GA4 DebugView for real-time validation
```

### Common Analytics Issues
- **Events not firing**: Check component has `'use client'` directive
- **Missing dataLayer**: Verify GTM script loads before analytics calls
- **AdBlocker interference**: Test in incognito mode or disable blockers
- **Wrong container ID**: Check NEXT_PUBLIC_GTM_ID in .env matches container

## Development Commands

```bash
# Frontend (Next.js)
npm install              # Install dependencies
npm run dev              # Dev server (port 3000)
npm run build            # Production build (218 static pages)
npm run start            # Serve production build
npm run lint             # ESLint

# Build with optimizations
npm run build:images     # Build with image optimization
npm run build:full       # Build with images + font subsetting

# Utilities
npm run images                    # Optimize images to WebP
npm run cache:remote-images       # Cache retailer logos
npm run subset:fonts              # Subset fonts
npm run analyze                   # Bundle size analysis
```

## Testing & Validation

- **No formal test suite**: Manual testing via `npm run dev`
- **Build verification**: `npm run build` must succeed (generates 1,936 pages)
- **Local preview**: `npm run start` after build to test production output
- **Product pages**: Test random sample of 1,691 product pages for:
  - Correct breadcrumb hierarchy (4 levels)
  - Retailer button styling with logos
  - DSLD label data display (8 categories)
  - Primary green color consistency
- **Analytics testing**: 
  1. Open DevTools → Console
  2. Check `window.dataLayer` for events
  3. Use GTM Preview mode
  4. Verify in GA4 DebugView

## External Dependencies

- **Product Data**: DSLD (Dietary Supplement Label Database) for supplement information
- **Retailers**: iHerb, Vitacost, Amazon, GNC, Walmart, Bodybuilding.com, Supplement Warehouse (affiliate links)
- **Third-party Testing**: USP, ConsumerLab, NSF (certification links)
- **Analytics**: GTM container, GA4 property, Hotjar, Microsoft Clarity
- **Deployment**: Vercel (automatic deploy on push to main)

## Documentation Structure

### Root Level
- **README.md** - Project overview and quick start
- **PRODUCTION_READY.md** - Production readiness report (Nov 24, 2025)
- **PRODUCTION_READINESS_AUDIT.md** - Detailed audit checklist
- **INDEX.md** - Moved to docs/INDEX.md (master documentation index)

### Organized Documentation (docs/)
- **deployment/** - Deployment guides (DEPLOYMENT_CHECKLIST.md, VERCEL_BUILD_SETTINGS.md, VERCEL_ENV_VARS.md)
- **guides/** - How-to guides (GTM_IMPORT_GUIDE.md, QUICK-START-GUIDE.md)
- **reference/** - Quick reference materials (QUICK_REFERENCE.md, QUICK_ANSWERS.md)
- **archive/** - Historical documentation
- **INDEX.md** - Master documentation index

### Recent Documentation (Nov 25, 2025 - Evening)
- **CODEBASE_AUDIT_NOV25.md** - Comprehensive codebase structure analysis
  - File count summary (1,936 pages, 229 components)
  - Naming conventions documentation
  - Build system health check
  - Best practices compliance review
- **CONTENT_STRUCTURE_RECOMMENDATIONS.md** - Optional reorganization proposals
  - Two implementation options (full vs minimal)
  - Risk assessment and effort estimates
  - Implementation guide with detailed checklists
  - Import path update examples
- **CLEANUP_SUMMARY_NOV25.md** - Cleanup actions taken (13 scripts archived)

### Archived Documentation (.archive/)
- **completed-work-nov-2025/** - Recent fixes and enhancements (Nov 2025)
  - CATEGORY_CLEANUP_COMPLETE.md
  - SEO_ENHANCEMENTS_COMPLETE.md
  - UI_FIXES_COMPLETE.md
  - UI_POLISH_FIXES_COMPLETE.md
  - And 4 more completion docs
- **migration-docs/** - v0.2 → v0.3 migration history

### Archived Scripts (scripts/.archive-cleanup-nov25/)
- **Migration fix scripts** - 13 obsolete scripts from Vite→Next migration
  - Icon validation, props cleanup, link formatting, etc.
  - All executed successfully during migration
  - Archived for historical reference

### Finding Documentation
1. **Start with**: `docs/INDEX.md` for complete navigation
2. **AI agents**: `.github/copilot-instructions.md` (this file)
3. **Quick help**: `docs/reference/QUICK_ANSWERS.md`
4. **Deployment**: `docs/deployment/` folder
5. **Project audit**: `docs/CODEBASE_AUDIT_NOV25.md` for comprehensive overview
6. **Reorganization**: `docs/CONTENT_STRUCTURE_RECOMMENDATIONS.md` for future improvements

## Notes

- **Node version**: >=22.x required (package.json engines), currently dev on v24.1.0
- **React version**: 19.2.0 (bleeding edge, Nov 2024 release)
- **react-day-picker**: v9.11.2 (comes from ShadCN UI Calendar component, React 19 compatible)
- **TypeScript**: Strict mode enabled, skipLibCheck: true for faster builds
- **Static generation**: All 1,936 pages pre-rendered at build time (SSG)
- **Error handling**: app/error.tsx with analytics tracking and user-friendly UI
- **SEO**: Meta tags per-page, sitemap (1,936 URLs) + structured data auto-generated
- **Bundle size**: Automatic code splitting by Next.js, lazy-loaded components
- **Documentation**: Organized in docs/ folder, indexed in docs/INDEX.md (Nov 25, 2025 cleanup)
