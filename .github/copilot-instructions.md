# Copilot Instructions: Suppl.me Affiliate Launch

## Project Overview

Evidence-based supplement information platform with a complete data pipeline. Two distinct systems:
1. **Frontend**: React/TypeScript web app (production-ready, Vercel-deployed)
2. **Data Pipeline**: Python scripts for scraping, normalizing, and enriching supplement data (internal only, NOT deployed)

**Current Status**: V2.0 production-ready with 17 supplement pages, 197 glossary terms, comprehensive audit complete.

## Architecture

### Frontend (src/)
- **React 18** + TypeScript + Vite 6 + Tailwind CSS v4
- **Routing**: Single `routes.config.ts` manages all navigation - add new pages here first
- **Components**: Two key templates:
  - `KnowledgebaseTemplate`: Supplement pages with evidence summaries, dosing, retailer buttons
  - `GlossaryTemplate`: Scientific/medical term explanations
- **Analytics**: GTM + GA4 via `AnalyticsProvider.tsx`, track all user interactions
- **Design System**: Fluid typography, CSS variables in `styles/globals.css`, color scheme defined there
- **Performance**: 215 lazy-loaded components via route-based code splitting in `App.tsx`

### Data Pipeline (data-pipeline/)
10-step pipeline (Python + TypeScript scrapers):
1. **Scraping**: Puppeteer/ScraperAPI for retailer data (`scripts/scrapers/`)
2. **Normalization**: Standardize product data (`step1-normalized/`)
3. **Filtering**: Relevance filtering (`step2-filtered/`)
4. **Brand Extraction**: Clean product names (`step3-branded/`)
5. **Name Normalization**: Matching preparation (`step4-normalized/`)
6. **DSLD Matching**: SQLite database matching (`step5-dsld-matched/`)
7. **Grouping**: Group by DSLD ID (`step6-grouped-by-dsld/`)
8. **Label Data**: Integrate ingredient data (`step7-enriched-with-label-data/`)
9. **Pricing**: Calculate price-per-unit (`step8-with-pricing/`)
10. **Retailer Comparison**: Generate comparison data (`step10-retailer-comparison/`)

**Key**: Scrapers use `price_usd` field, NOT `price` or `price_per_serving`.

### API (api/)
Vercel serverless functions (scaffold only):
- `/api/health`: Status endpoint
- `/api/prices`: Mock price data (future: live retailer data)
- Future: structured data, affiliate redirects, analytics ingestion

## Critical Workflows

### Add New Supplement Page
1. Create `src/components/[Name]PageNewV2.tsx` using `KnowledgebaseTemplate`
2. Add route to `KNOWLEDGEBASE_ROUTES` in `routes.config.ts` with `category: 'v2'`
3. Add image mapping to `src/utils/supplementImages.ts`
4. Page auto-appears in Header dropdown and search

### Add Glossary Term
1. Create `src/components/glossary/[Term]Page.tsx` using `GlossaryTemplate`
2. Add to `GLOSSARY_ROUTES` in `routes.config.ts`
3. Term auto-links in content via `autolinkGlossaryTerms()` utility

### Run Data Pipeline
```bash
# Full pipeline from scratch
npx tsx scripts/data-pipeline/scraping/run-all-supplements.ts
npx tsx scripts/data-pipeline/normalization/step1-normalize-and-enrich.ts
npx tsx scripts/data-pipeline/normalization/step1.2-filter-by-relevance.ts
# Continue through step10...

# DSLD database setup (first time)
npx tsx scripts/database/init-database.ts
npx tsx scripts/database/import-dsld-to-sqlite.ts
```

### Build & Deploy
```bash
npm run dev              # Development server (port 3000)
npm run build           # Production build
npm run build:full      # Build with image optimization, font subsetting
npm run postbuild       # Auto-runs: sitemap + structured data generation
```

**Vercel Deploy**: Automatic on push to main/preview branches. Build command: `npm run build`, output: `build/`.

## Project-Specific Patterns

### 1. Centralized Routing
**Never** hardcode routes. Always reference `routes.config.ts`:
```typescript
import { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } from './routes.config';
// Use route.key for navigation, route.title for display
```

### 2. Glossary Auto-Linking
Content automatically links glossary terms. Wrap text:
```typescript
import { autolinkGlossaryTerms } from '../utils/glossaryAutolink';
const linkedContent = autolinkGlossaryTerms('Text with meta-analysis mentioned');
```

### 3. Analytics Tracking
Track all user interactions:
```typescript
import { trackPageView, trackOutboundLink } from '../utils/analytics';
trackPageView('Vitamin D', 'supplement');
trackOutboundLink('Buy Now', 'https://amazon.com', 'Amazon', 'vitamin-d');
```

### 4. Component Lazy Loading
Import components via lazy loading in `App.tsx`:
```typescript
const VitaminDPageNewV2 = lazy(() => import('./components/VitaminDPageNewV2'));
```

### 5. Image Handling
- **Optimized images**: `scripts/web-build/optimize-images.mjs` (WebP conversion)
- **Remote caching**: `scripts/web-build/cache-remote-images.mjs` for retailer logos
- **Component**: Use `SmartImage` for lazy loading + fallback support

### 6. Data Pipeline Scripts
- **Python**: Use `python3 scripts/...` for data processing
- **TypeScript**: Use `npx tsx scripts/...` for scrapers/utilities
- **Database**: SQLite at `products.db` (DSLD data, 2M+ records)

### 7. Formulation Filters
Data pipeline extracts 46 filters from product labels:
- Dietary: vegan, gluten_free, non_gmo, organic, kosher, etc.
- Formulation: micronized, buffered, chelated, liposomal, hydrolyzed, etc.
See `product-filters.json` for full list.

## Key Files & Directories

### Must-Know Files
- `routes.config.ts`: Single source of truth for all navigation
- `styles/globals.css`: Design system, all CSS variables, typography rules
- `package.json`: Build scripts, see `postbuild` for auto-tasks
- `vite.config.ts`: Route chunking strategy (glossary grouped, radix-ui split)
- `App.tsx`: Lazy loading registry, route definitions
- `data-pipeline/PIPELINE_COMPLETION_SUMMARY.md`: Full pipeline documentation

### Directory Structure
```
src/
├── components/          # React components
│   ├── *PageNewV2.tsx  # V2 supplement pages (17 total)
│   ├── glossary/       # 197 glossary term pages
│   ├── ui/             # ShadCN components
│   └── KnowledgebaseTemplate.tsx  # Main template
├── utils/              # Utilities (analytics, glossary, images)
├── hooks/              # Custom React hooks
└── styles/             # Global CSS, design system

scripts/
├── data-pipeline/      # Product data processing
│   ├── scraping/       # Retailer scrapers
│   ├── normalization/  # Data cleanup
│   └── utilities/      # Maintenance tools
├── database/           # DSLD database management
└── web-build/          # Image/font optimization, sitemap

data-pipeline/
├── input/              # Raw scraped data
├── output/             # Processed data (step1-10)
└── scripts/            # Python processing scripts

api/                    # Vercel serverless functions
```

## Common Pitfalls

1. **Don't bypass routes.config.ts**: Always add routes there, not in individual components
2. **Price field**: Use `price_usd` from scraped data, NOT `price` or `price_per_serving` (latter is null)
3. **Glossary terms**: Auto-link is case-insensitive but exact match (plural handling exists)
4. **V1 pages removed**: Only V2 pages exist now (v1 cleanup complete, see `COMPREHENSIVE_AUDIT_COMPLETE.md`)
5. **Analytics**: Always track user actions (clicks, scrolls, searches) for funnel analysis
6. **Database queries**: Use prepared statements, DSLD DB has 2M+ records
7. **Build scripts**: `postbuild` auto-runs sitemap + structured data - don't run manually

## External Dependencies

- **DSLD Database**: NIH dietary supplement database (CSV import to SQLite)
- **Scrapers**: Puppeteer for Bodybuilding.com, ScraperAPI for GNC/Walmart
- **Retailers**: iHerb, Vitacost, Amazon (affiliate links configured)
- **Third-party Testing**: USP, ConsumerLab, NSF (links in KnowledgebaseTemplate)
- **Analytics**: GTM container, GA4 property, Hotjar, Microsoft Clarity

## Development Commands

```bash
# Frontend
npm install              # Install dependencies
npm run dev              # Dev server (localhost:3000)
npm run build            # Production build
npm run build:images     # Build with image optimization
npm run build:full       # Build with ALL optimizations (images, fonts)

# Data Pipeline
npx tsx scripts/data-pipeline/scraping/run-all-supplements.ts
npx tsx scripts/data-pipeline/normalization/step1-normalize-and-enrich.ts
python3 scripts/data-pipeline/step6-group-by-dsld/group_by_dsld_id.py

# Database
npx tsx scripts/database/init-database.ts
npx tsx scripts/database/query-dsld.ts "ashwagandha"

# Utilities
npx tsx scripts/data-pipeline/utilities/inspect-excluded-products.ts
node scripts/web-build/optimize-images.mjs
```

## Testing & Validation

- **No formal test suite**: Manual testing via `npm run dev`
- **Build verification**: `npm run build` must succeed before deploy
- **Data validation**: Review `*-reports/` directories in pipeline output
- **Analytics**: Test in GTM Preview mode before production

## Analytics System Details

### Architecture
- **GTM Container**: Central event hub pushing to GA4, Hotjar, Clarity
- **DataLayer Pattern**: All events go through `window.dataLayer` array
- **Session Tracking**: Automatic session ID generation, activity timestamps

### Key Tracking Functions
```typescript
// Always initialize on app mount
initializeDataLayer();

// Page views with category
trackPageView('Vitamin D', 'supplement');

// User interactions
trackSupplementSection('Omega-3', 'benefits');
trackAccordionToggle('What to Expect', true);

// External clicks (affiliate, certification, retailer)
trackOutboundLink('https://amazon.com', 'Buy Now', 'affiliate', 'vitamin-d');
trackCertificationClick('USP', 'https://usp.org', 'vitamin-c');
trackRetailerClick('iHerb', 'https://iherb.com/product', 'magnesium', 15.99);

// Product interactions
trackProductClick('NOW Foods Vitamin D', 'NOW Foods', 'iHerb', 9.99, 'vitamin-d');
trackProductImpression('Life Extension Omega-3', 'Life Extension', 'Vitacost', 24.99);
```

### Event Schema
All events include:
- `event`: Event name (e.g., 'outbound_link_click')
- `timestamp`: ISO 8601 string
- `currentPage`: Current pathname
- Context-specific fields (supplementName, linkText, etc.)

### Custom Hooks
```typescript
// Auto-track page view on mount
useSupplementTracking('Ashwagandha');

// Auto-track product impressions
useProductTracking(products, 'calcium');
```

### Testing
1. Open browser DevTools → Console
2. Type `window.dataLayer` to see all events
3. Use GTM Preview mode for live debugging
4. Check GA4 DebugView for real-time validation

## SEO & Structured Data

### Meta Tags (SEOHead Component)
Every page uses `<SEOHead>` for dynamic meta tags:
```tsx
<SEOHead
  title="Vitamin D: Evidence-Based Review"
  description="Meta-analysis of vitamin D..."
  keywords="vitamin d, cholecalciferol, 25-hydroxyvitamin d"
  pageType="article"
  author="Suppl.me Research Team"
  canonicalUrl="/vitamin-d"
/>
```

### Structured Data Generation
**Auto-runs on build** via `postbuild` script:

1. **Sitemap**: `scripts/web-build/generate-sitemap.mjs`
   - Parses `routes.config.ts` for all V2 + glossary pages
   - Uses `PAGE_PATHS` for clean URLs (e.g., `/ashwagandha` not `/ashwagandhav2`)
   - Outputs to `public/sitemap.xml`
   - Includes 17 comparison pages (`/[supplement]-comparison`)

2. **JSON-LD**: `scripts/web-build/build-structured-data.mjs`
   - **Supplement pages**: Product + MedicalWebPage schemas
   - **Glossary pages**: DefinedTerm + WebPage schemas
   - Outputs to `public/structured-data/[key].json`
   - Pages load via `<script type="application/ld+json">`

### Schema Types Used
- `Product`: Supplement pages (name, category, description)
- `MedicalWebPage`: Health content pages
- `DefinedTerm`: Glossary terms with definitions
- `WebPage`: All page types (canonical URL, description)

### Canonical URLs
Base URL from env: `VITE_CANONICAL_BASE_URL` or defaults to `https://suppl.me`

## Troubleshooting Guide

### Common Issues

#### 1. Route Not Found (404)
**Symptoms**: New page returns 404 or doesn't appear in navigation
**Fix**:
```typescript
// 1. Add to routes.config.ts
{
  key: 'zinc',
  title: 'Zinc',
  category: 'v2',
  componentPath: './components/ZincPageNewV2',
  componentName: 'ZincPageNewV2',
  showInNav: true,
  subcategory: 'Minerals'
}

// 2. Add to App.tsx lazy imports
const ZincPageNewV2 = lazy(() => import('./components/ZincPageNewV2'));

// 3. Add to supplementImages.ts
zinc: '/images/supplements/zinc.webp'
```

#### 2. Glossary Terms Not Auto-Linking
**Symptoms**: Terms don't become clickable links
**Causes**:
- Term not in `GLOSSARY_ROUTES` (routes.config.ts)
- Spelling mismatch (case-insensitive, but must match exactly)
- Content not wrapped in `autolinkGlossaryTerms()` or `autolinkGlossaryContent()`

**Fix**:
```typescript
// Wrap text content
const linkedContent = autolinkGlossaryTerms('Text with meta-analysis');

// For React components
const linkedJSX = autolinkGlossaryContent(<p>Text with bioavailability</p>);
```

#### 3. Analytics Not Tracking
**Symptoms**: Events not appearing in GA4 or `window.dataLayer`
**Debug**:
```bash
# 1. Check console for events
console.log(window.dataLayer);

# 2. Verify GTM container loaded
console.log(window.gtag);

# 3. Test event manually
pushToDataLayer({ event: 'test', data: 'test' });
```

**Common causes**:
- `AnalyticsProvider` not wrapping App
- AdBlocker blocking GTM script
- Missing `trackPageView()` call on page mount

#### 4. Build Fails: Image Not Found
**Symptoms**: Vite build error about missing image
**Fix**:
```bash
# 1. Check image exists
ls public/images/supplements/[name].webp

# 2. Optimize images
npm run images

# 3. Check supplementImages.ts mapping
```

#### 5. Data Pipeline Step Fails
**Symptoms**: Python script crashes, partial output, missing fields
**Debug checklist**:
```bash
# 1. Check input file exists
ls data-pipeline/output/step[N-1]/*.json

# 2. Validate JSON structure
cat file.json | jq . > /dev/null

# 3. Check for null price fields
cat file.json | jq '[.products[] | select(.price_usd == null)] | length'

# 4. Review error logs in *-reports/ directory
cat data-pipeline/output/step[N]-reports/errors.json
```

**Common fixes**:
- Missing `price_usd` field: Update scraper to use correct field
- DSLD database not initialized: Run `npx tsx scripts/database/init-database.ts`
- Brand not matched: Add to `scripts/lib/brand-synonyms.ts`

#### 6. Lazy Loading Component Fails
**Symptoms**: "A component suspended..." error, blank page
**Fix**:
```tsx
// Ensure lazy import in App.tsx
const ComponentName = lazy(() => import('./components/ComponentName'));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/page" element={<ComponentName />} />
  </Routes>
</Suspense>
```

#### 7. Vercel Deploy Build Fails
**Symptoms**: Build succeeds locally, fails on Vercel
**Check**:
1. Node version matches (22.x in `package.json`)
2. Build command is `npm run build` (not `npm run build:full`)
3. Output directory is `build/`
4. Environment variables set in Vercel dashboard
5. Check build logs for missing dependencies

**Fix missing deps**:
```bash
# Ensure all imports in package.json
npm install
git add package.json package-lock.json
git commit -m "fix: add missing dependencies"
```

## Data Pipeline Debugging

### Pipeline Overview
```
Step 1: Normalize      → price_usd, brand extraction
Step 2: Filter         → relevance scoring (0-100)
Step 3: Brand Extract  → clean product names
Step 4: Name Normalize → prepare for matching
Step 5: DSLD Match     → SQLite fuzzy matching
Step 6: Group          → group by DSLD ID
Step 7: Label Data     → ingredient amounts
Step 8: Pricing        → price per unit calculations
Step 9: Module         → embeddable widget data
Step 10: Comparison    → retailer comparison pages
```

### Common Pipeline Issues

#### Missing Price Data
**Symptom**: Products have null `price` or `price_per_unit`
**Fix**:
```python
# In step 6-10: ALWAYS use price_usd field
price = product.get('price_usd') or product.get('price')

# NOT this:
price = product.get('price_per_serving')  # This is always null
```

#### Low Match Rate (Step 5)
**Symptom**: < 30% products matched to DSLD
**Causes**:
- Supplement keyword not in product name
- Brand name mismatch
- Dosage format not normalized

**Debug**:
```bash
# Check unmatched products
npx tsx scripts/data-pipeline/utilities/inspect-excluded-products.ts

# Review match scores
cat data-pipeline/output/step5-dsld-matched/match-report.json | jq '.low_confidence_matches'
```

#### Variant Detection Issues (Step 6b)
**Symptom**: Same product counted as multiple variants
**Fix**: Check flavor/size extraction in `identify_product_variants.py`

#### Missing Filters (Step 7)
**Symptom**: Products missing dietary/formulation filters
**Cause**: Keywords not in DSLD label statements
**Fix**: Add to `extract_dietary_preferences()` function

### Pipeline Validation Commands
```bash
# Validate JSON structure
jq empty data-pipeline/output/step8-with-pricing/products.json

# Count products per supplement
jq '.products | group_by(.supplement_category) | map({category: .[0].supplement_category, count: length})' file.json

# Check price coverage
jq '[.products[] | select(.price_per_unit != null)] | length' file.json

# Find missing fields
jq '[.products[] | select(.price_usd == null)] | .[0]' file.json
```

### Re-running Specific Steps
```bash
# Re-run from step 6 onwards (after fixing price field)
python3 data-pipeline/scripts/step6-group-by-dsld/group_by_dsld_id.py
python3 data-pipeline/scripts/step7-enrich-with-label-data/merge_dsld_label_data.py
python3 data-pipeline/scripts/step8-calculate-pricing/calculate_price_per_unit.py
npx tsx data-pipeline/scripts/step10-retailer-comparison/generate-retailer-comparison.ts
```

## Notes

- **Node version**: 22.x (specified in package.json)
- **TypeScript**: Strict mode enabled, `skipLibCheck: true` for speed
- **SPA routing**: Vercel rewrites all routes to `index.html` (see `vercel.json`)
- **Bundle size**: ~2-3MB reduction via lazy loading, glossary chunked separately
- **SEO**: Meta tags configured per-page via `SEOHead` component, sitemap auto-generated
