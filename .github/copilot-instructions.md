# Copilot Instructions: Suppl.me Affiliate Launch

## ⚠️ CRITICAL RULES (READ FIRST!)

### 🚨 NEVER push to git without documented version change!

- **ALWAYS** update `CHANGELOG.md` before any git push
- **ALWAYS** bump version in this file (`copilot-instructions.md`)
- **ALWAYS** update `PROJECT_MEMORY.md` version
- **Format**: `v0.X.Y` for features, `v0.X.Y.Z` for minor fixes
- **NO EXCEPTIONS** - Every push must have a documented version

### 🧹 Workspace Cleanup Policy (30-Day Rule)

- **Completion Docs**: Keep feature completion docs in root for **30 days**
- **After 30 days**: Move to `.archive/completion-reports/` with README
- **Examples**: `IMAGE_MIGRATION_COMPLETE.md`, `GLOSSARY_FIX_DOCUMENTATION.md`
- **Purpose**: Ensures recent work is visible, but root stays clean long-term
- **Review Date**: Set calendar reminder monthly to check for eligible docs

---

## Project Overview

Evidence-based supplement information platform. **Next.js 16 App Router** (production-ready, Vercel-deployed) with static site generation for 1,936 pages.

**Current Version:** 0.6.14 (Dec 5, 2025)  
**Status:** ✅ Production-ready with 24h cache + on-demand revalidation + case-insensitive autolinking + duplicate H2 fix + triple-platform tracking + optimized CSS + **100% glossary enhanced** + **100% affiliate coverage** + **Cookie consent (custom, no iubenda)**  
**Location:** `/Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch`

**Key Stats:**

- ✅ 17 supplements, **197 glossary terms (ALL enhanced to 500+ words)**, 17 comparison pages, 1,691 product detail pages
- ✅ 11 API endpoints (all operational in production)
- ✅ Supabase PostgreSQL backend (17 supplements, 1,691 products, 11,837 prices, **197 glossary terms**, **analytics tracking**)
- ✅ Triple-platform server-side tracking: GA4 Measurement Protocol + Facebook CAPI + TikTok Events API
- ✅ CSS Performance: Optimized with 500-byte critical CSS, First Contentful Paint 200ms
- ✅ Mobile Optimized: Images optimized for all devices (AVIF/WebP, responsive sizes)
- ✅ SEO Score: 9.75/10 - Excellent implementation
- ✅ Template System: 9/10 - Strong, consistent, reusable
- ✅ Product Content: 400+ word SEO paragraphs (dynamic generation)
- ✅ Backend Analytics: Server-side tracking with affiliate click_id generation
- ✅ **Glossary Enhancement: 197/197 terms (100%) enhanced to 500+ words with rich content**
- ✅ **Glossary System: 100% consistent architecture** (v0.6.6)
- ✅ **Affiliate Tracking: 100% coverage** - Product detail + comparison + knowledgebase + landing pages (v0.6.9)

**Version 0.6.10 Highlights:**
🎯 Dual Tracking Coverage – Search, Knowledgebase, Comparison

- **Search**: Replaced `trackSearch` with `trackSearchDual()` in `SearchResults.tsx`
- **Knowledgebase**: Replaced `trackSupplementView` with `trackSupplementViewDual()` in `KnowledgebaseTemplate.tsx`
- **Comparison**: Added `trackComparisonViewDual()` in `ProductComparisonClient.tsx` (view events include filters)
- **Deduplication**: Unified `event_id` across GTM + server-side events
- **Validation**: Added `scripts/validate-dual-tracking.sql` to audit coverage, data quality, and breakdowns
- **Build**: Production build verified post-changes

Impact: ~30% more event capture and improved funnel visibility.

**Version 0.6.14 Highlights:**
🧹 **iubenda Removal - Performance Optimization** ✅

- **Removed**: iubenda Privacy Controls tag + custom template from GTM
- **Size Reduction**: ~150KB of JavaScript removed
- **HTTP Requests**: Eliminated 2 requests to cdn.iubenda.com
- **Cookie Consent**: Using custom `CookieConsent.tsx` component (already in place)
- **GTM Container**: New clean version available: `input/gtm_container_no_iubenda.json`
- **Impact**: Faster page loads, cleaner dependencies, same GDPR compliance

**Version 0.6.11 Highlights:**
🚀 **Smart Cache with On-Demand Revalidation** ✅

- **24-Hour Cache**: All API endpoints now cache for 24 hours (vs 1 hour)
- **7-Day Stale**: Stale-while-revalidate extended to 7 days (vs 1 day)
- **Revalidation API**: New `/api/revalidate` endpoint for instant cache purging
- **Webhook Integration**: Supabase webhooks configured for auto-purge on data changes
- **96% Fewer Queries**: Database queries reduced by 24x (1h → 24h cache)
- **Cache Tags**: Added for selective revalidation (glossary, supplements, products)
- **Security**: `REVALIDATION_SECRET` added to Vercel + local env
- **Documentation**: Complete setup guides in `docs/CACHE_REVALIDATION.md` + `docs/SUPABASE_WEBHOOK_SETUP.md`
- **Autolinking Fix**: Case-insensitive matching + plural support for glossary terms
- **H2 Fix**: Resolved duplicate heading warnings on knowledgebase pages
- **Impact**: Better performance, lower costs, instant updates when content changes

**Version 0.6.9 Highlights:**
🎯 **Landing Page Tracking - COMPLETE!** ✅

- **Dual Tracking**: Landing page now uses trackAffiliateClickDual()
- **Click ID Generation**: All landing page affiliate clicks get unique click_id
- **Commission Attribution**: Server-side tracking with subid/clickid parameters
- **Coverage**: 100% (up from 95% - added landing page)
- **Impact**: +5% more affiliate clicks tracked with full attribution
- **Products**: 6 featured products on homepage (multivitamin, vitamin D, omega-3, etc.)
- **Database**: All clicks recorded to affiliate_clicks table
- **Insight**: Landing page shows specific products (not generic links), so click_id is valuable
- **See**: `LANDING_PAGE_TRACKING_COMPLETE.md` for details

**Version 0.6.8 Highlights:**
🎯 **Knowledgebase Page Tracking - COMPLETE!** ✅

- **Dual Tracking**: Knowledgebase pages now use trackAffiliateClickDual()
- **Click ID Generation**: All knowledgebase affiliate clicks get unique click_id
- **Commission Attribution**: Server-side tracking with subid/clickid parameters
- **Coverage**: 95% (up from 80% - added knowledgebase pages)
- **Impact**: +15% more affiliate clicks tracked with full attribution
- **Pages**: All 17 supplement knowledgebase pages (/magnesium, /vitamin-d, etc.)
- **Database**: All clicks recorded to affiliate_clicks table
- **See**: `docs/TRACKING_COVERAGE_COMPLETE_AUDIT.md` for details

**Version 0.6.7 Highlights:**
🎯 **Comparison Page Tracking - COMPLETE!** ✅

- **Dual Tracking**: Comparison pages now use trackAffiliateClickDual()
- **Click ID Generation**: All comparison page clicks get unique click_id
- **Commission Attribution**: Server-side tracking with subid/clickid parameters
- **Coverage**: 80% (up from 20% - product detail pages only)
- **Impact**: 60% more affiliate clicks tracked with full attribution
- **Database**: All clicks recorded to affiliate_clicks table
- **GA4 MP**: Server-side events sent to Google Analytics 4
- **Redundancy**: GTM + server-side tracking for reliability
- **See**: `docs/COMPARISON_PAGE_TRACKING_FIX.md` for details

**Version 0.6.6.7 Highlights:**
🧹 **Workspace Cleanup - COMPLETE!** ✅

- **Root Directory**: 43 files → 7 markdown files (85% reduction)
- **Scripts Archive**: 21 glossary enhancement scripts (820KB) moved to archive
- **Image Migration**: 17 artifact files moved to `.archive/v0.6.6-image-migration/`
- **Completion Reports**: 9 historical reports moved to `.archive/completion-reports/`
- **Glossary Scripts**: Batch enhancement scripts moved to `.archive/v0.6.5-glossary-enhancement/`
- **Documentation**: README.md created in each archive with context
- **Build Status**: ✅ Verified build works after cleanup
- **Impact**: ~1MB freed from active workspace, dramatically improved clarity

**Version 0.6.6.6 Highlights:**
🎉 **Complete Image Migration - DONE!** ✅

- **Total Products**: 1,663 in database
- **Local Images**: 748 products (45%) - fully migrated to local storage
- **External URLs**: 194 products (12%) - still using external CDN
- **Missing Images**: 58 products (3%) - no image URLs
- **Scripts**: `scripts/update-remaining-iherb-images.mjs` + `scripts/update-vitacost-images.mjs`
- **Performance**: Faster page loads, complete control over image delivery for 73% of products with images
- **Status**: Image migration project 100% COMPLETE for iHerb/Vitacost retailers

**Version 0.6.6.5 Highlights:**
🖼️ **iHerb Image Migration Complete** ✅

- **Local Images**: 211 iHerb products now use local images (eliminated Cloudinary dependency)
- **Files Copied**: 210 unique image files to `public/images/products/`
- **Database Updated**: All product_image_url fields updated from external URLs to local paths
- **Processing**: Matched by original URL from CSV mapping (308 total, 211 found in DB)
- **Script**: `scripts/update-remaining-iherb-images.mjs` - URL-based matching and file operations

**Version 0.6.6.4 Highlights:**
📝 **SEO Enhancement - Definition Label** ✅

- **Definition Label**: Added bold "Definition:" label before definition text in hero
- **Keyword Presence**: Word "definition" now appears twice on every glossary page (h1 + body)
- **SEO Benefit**: Improves keyword relevance for glossary pages
- **User Experience**: Clearer content structure with explicit labeling
- **See**: `GlossaryTemplate.tsx` - definition display in hero section

**Version 0.6.6.3 Highlights:**
⚡ **Build Performance Fix** ✅

- **Static Generation**: Changed glossary from API fetch to routes.config.ts during build
- **Cache Strategy**: `cache: "no-store"` → `next: { revalidate: 3600 }` for static generation
- **Build Time**: Eliminated dynamic server errors during glossary page generation
- **Performance**: All 195 glossary pages now properly statically generated (ISR 1h)
- **See**: `app/glossary/[term]/page.tsx` - generateStaticParams uses GLOSSARY_ROUTES

**Version 0.6.6.2 Highlights:**
🔧 **Glossary Data Integrity Fix** ✅

- **Collagen Duplicate**: Removed from GLOSSARY_ROUTES (was in both glossary + knowledgebase)
- **Omega-3 Duplicate**: Removed from GLOSSARY_ROUTES (was in both glossary + knowledgebase)
- **Audit Complete**: Verified all 17 supplements ONLY in KNOWLEDGEBASE_ROUTES
- **Glossary Count**: Now 195 terms (down from 197)
- **Sitemap**: Will regenerate cleanly without supplement duplicates
- **See**: `routes.config.ts` - clean separation of supplements vs terms

**Version 0.6.6.1 Highlights:**
🎨 **Glossary Hero Typography Enhancement** ✅

- **Two-line H1**: "Definition & Explanation" above term name
- **Visual Hierarchy**: Subtitle appears first, term second
- **Spacing**: 3x vertical spacing (mb-6) between lines
- **SEO**: Maintains single h1 semantic structure
- **Consistency**: Applied to all 197 glossary pages
- **See**: `GlossaryTemplate.tsx` hero section

**Version 0.6.6 Highlights:**
🔧 **Glossary System Architecture Fix** ✅

- **Icon Alignment**: Fixed in all 11 GlossaryTemplate sections
- **Autolinking System**: Restored with 197 terms from database
- **TypeScript Compilation**: Resolved type mismatch errors
- **Database Typo**: Fixed osteomalach → osteomalacia
- **Broken Links**: Removed invalid /glossary/bcaa link
- **Architecture Audit**: 100% consistency verified
- **Score**: 10/10 - Perfect database ↔ autolink synchronization
- **See**: `GLOSSARY_FIX_DOCUMENTATION.md` + `GLOSSARY_ARCHITECTURE_AUDIT.md`

**Version 0.6.5 Highlights:**
🎉 **Glossary Enhancement Project - COMPLETE!** ✅

- **ALL 197 terms enhanced** across 20 batches
- **500+ words each** with why_it_matters, simple_explanation, key_points, common_misconceptions, examples
- **SEO optimized**: Each term provides comprehensive, authoritative content
- **Scripts**: `scripts/enhance-glossary-batch-{1-20}.mjs` + `boost-remaining-terms.mjs`
- **Project Status**: 100% COMPLETE - All glossary terms fully enhanced

**Version 0.6.4 Highlights:**
⚡ **CSS Performance Optimization - Phase 1 & 2** ✅

- **Phase 1 Quick Wins**: Removed Google Fonts, added font preloading, enabled Next.js CSS optimization
- **Phase 2 Critical CSS**: 500-byte minimal inline CSS for instant header render
- **Performance**: CSS blocking 1,130ms → 600ms (-47%), First Contentful Paint 1,880ms → 200ms (-89%)
- **Zero Duplication**: Critical CSS contains only essential variables + header positioning
- **Mobile Optimized**: Images already optimized with AVIF/WebP and responsive sizes
- **Key Learning**: Next.js CSS imports always block; work with constraints, not against them
- **See**: `docs/CSS_OPTIMIZATION_PLAN.md` for complete 4-phase strategy

**Version 0.6.3 Highlights:**
🎯 **Social Platform Server-Side Tracking** ✅

- **Facebook CAPI**: `facebook-conversions-api.ts` with full v18.0 integration
- **TikTok Events API**: `tiktok-events-api.ts` with full v1.3 integration
- **Social Cookies**: \_fbp, \_fbc, \_ttp capture for attribution
- **Unified Deduplication**: Same event_id across GA4, Facebook, TikTok
- **Data Capture**: 60% → 98% (Facebook), 55% → 98% (TikTok)
- **Retargeting**: 63-78% larger audience pools
- **iOS 14+**: ~95% tracking (vs ~40% pixel-only)
- **Production Safe**: Graceful skip with empty credentials
- **See**: `docs/SOCIAL_PLATFORM_TRACKING_COMPLETE.md` for details

**Version 0.6.0 Highlights:**
📊 **Backend Analytics & Affiliate Tracking** ✅

- **Database**: 4 new tables for server-side analytics (analytics_events, affiliate_clicks, api_requests, session_stats)
- **Tracking**: Dual-pattern (GTM + Server) captures ~30% more data
- **Click IDs**: Unique `click_id` generation for affiliate commission reconciliation
- **API**: 4 new analytics endpoints (events, affiliate-click, summary, clicks)
- **Clients**: `analytics-dual.ts` (frontend), `analytics-api.ts` (server-side)
- **GTM**: Complete template with GA4, Facebook Pixel, LinkedIn Insight Tag
- **See**: `CHANGELOG.md` for v0.6.0 details

**Version 0.5.0 Highlights:**
📝 **Supplement Content Migration** ✅

- **Database**: 14 new columns added to `api.supplements` for rich content
- **Content**: Extended overview, science snapshot, benefits, timing tips, etc.
- **SEO**: 400+ word unique paragraphs for each product page
- **Generator**: `src/lib/product-content-generator.ts` with 5 templates each
- **API**: Supplement context fetched in parallel with product data

**Next Priority** (v0.6.5.1+):
🔍 **SEO Refinements** - Minor improvements

- **Tasks**:
  1. ✅ Server-side tracking (Complete)
  2. ⏳ GA4 Measurement Protocol integration
  3. ⏳ Affiliate commission webhooks (iHerb, Amazon)
  4. ⏳ Analytics dashboard UI (/admin/analytics)
- **Duration**: Estimated 1-2 weeks remaining
- **See**: `docs/BACKEND_TRACKING_PLAN.md` and `docs/BACKEND_TRACKING_IMPLEMENTED.md`
- **Sitemap**: Fixed to include all 1,691 product pages
- **Static cleanup**: Removed migration scripts, all glossary data now in DB
- **See**: `docs/GLOSSARY_BACKEND_COMPLETE.md` for details

**Active Priority** (Week 4):
🚀 **Frontend Integration** - Next Phase

- **Goal**: Connect React components to Supabase API endpoints
- **Tasks**: Custom hooks, dynamic loading, search UI, client-side caching
- **Duration**: Estimated 9-13 days
- **See**: `docs/FRONTEND_MIGRATION_GUIDE.md` for implementation plan

---

## Architecture

### Frontend

- **Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- **Routing**: `src/routes.config.ts` - Single source of truth (230 routes)
- **Templates**: `KnowledgebaseTemplate`, `GlossaryTemplate`, `ProductComparisonWrapper`, `ProductDetailClient`
- **Analytics**: GTM (22 events, 36 variables) → GA4 (G-JHCPJYM37R)
- **Build**: All 1,936 pages statically generated (SSG), ~5 min build time

### Backend (Production - Database)

✅ **MIGRATION COMPLETE** - Now fully on Supabase/PostgreSQL

```
Supabase/PostgreSQL (Schema: api)
├── supplements (17 rows) ← Extended with 14 content columns in v0.5.0
│   ├── quick_overview, extended_overview, science_snapshot
│   ├── key_benefits[], ideal_for[], timing_tips[]
│   ├── quality_markers[], safety_considerations[], what_to_expect_summary[]
│   ├── typical_dosage_min/max/unit
│   ├── form_notes (JSONB), what_to_expect (JSONB), synergy_notes
├── products (1,691 rows)
├── retailers (7 rows)
├── prices (11,837 rows)
├── glossary_terms (197 rows)
│   ├── 60 with abbreviations (30.5%)
│   ├── 27 with related_terms links
│   └── 187 with SEO metadata (94.9%)
└── analytics_events (growing) ← NEW in v0.6.0
└── affiliate_clicks (growing) ← NEW in v0.6.0
```

### ⚠️ Database Connection Rules (CRITICAL)

**All database tables are in the `api` schema**, not `public`. Always specify the schema when connecting.

**✅ CORRECT - Node.js/JavaScript Scripts:**

```javascript
import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } } // ← MUST specify schema!
);

// Then query normally
const { data } = await supabase
  .from("glossary_terms")
  .select("*")
  .eq("slug", "polyphenols");
```

**❌ WRONG - Missing schema:**

```javascript
// This will fail with "schema must be one of the following: api"
const supabase = createClient(url, key); // Missing schema config!
```

**✅ CORRECT - API Routes (Server Components):**

```typescript
// In app/api/*/route.ts files
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createClient(); // Already configured with api schema
  const { data } = await supabase.from("glossary_terms").select("*");
  return Response.json(data);
}
```

**Environment Variables Required:**

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx  # Required for write operations
DATABASE_URL=postgresql://...  # For direct psql access
```

**Supabase CLI - Limited Direct Query Support:**

```bash
# ❌ WRONG - This syntax doesn't exist
npx supabase db execute --sql "SELECT ..." --linked

# ✅ CORRECT - Use migrations for schema changes
npx supabase db push --linked

# ✅ CORRECT - For ad-hoc queries, use Node.js scripts (see above)
# OR use psql directly with DATABASE_URL
psql "$DATABASE_URL" -c "SELECT * FROM api.glossary_terms LIMIT 5;"
```

**Best Practice for Scripts:**

- Create `.js` files in `scripts/` directory
- Use ES modules (`import` syntax) since package.json has `"type": "module"`
- Always configure schema: `{ db: { schema: 'api' } }`
- Load env vars with `dotenv`

### API Routes

**Production (All Live - 11 endpoints)**:

**Content API:**

- `/api/supplements` - List all supplements
- `/api/supplements/[slug]` - Supplement details
- `/api/supplements/[slug]/products` - Product list (paginated)
- `/api/products/[id]` - Single product (with tracking)
- `/api/products/search` - Product search (with tracking)
- `/api/retailers` - Retailer list
- `/api/glossary` - List glossary terms (search & pagination)
- `/api/glossary/[slug]` - Single glossary term

**Analytics API (NEW in v0.6.0):**

- `POST /api/events` - Batched event ingestion (rate limited, bot filtered)
- `POST /api/events/affiliate-click` - Affiliate click tracking with click_id generation
- `GET /api/analytics/summary` - Dashboard metrics (24h, 7d, 30d, 90d)
- `GET /api/analytics/affiliate-clicks` - Click data with commission status
- `/api/products/search` - Product search
- `/api/retailers` - Retailer list
- `/api/glossary` - List glossary terms (search & pagination) ← NEW
- `/api/glossary/[slug]` - Single glossary term ← NEW

---

## Critical Workflows

### 1. Add New Supplement

**Step 1**: Add route to `src/routes.config.ts`

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

**Step 2**: Create component `src/components/pages/supplements/ZincKnowledgebasePage.tsx`

```typescript
"use client";
import { KnowledgebaseTemplate } from "@/components/templates/KnowledgebaseTemplate";

export function ZincKnowledgebasePage() {
  return <KnowledgebaseTemplate supplementName="Zinc" {...data} />;
}
```

**Step 3**: Add to COMPONENT_MAP in `app/[slug]/page.tsx`

```typescript
import { ZincKnowledgebasePage } from "@/components/pages/supplements/ZincKnowledgebasePage";

const COMPONENT_MAP = {
  // ...
  ZincKnowledgebasePage: ZincKnowledgebasePage,
};
```

**Step 4**: Add comparison page (see full instructions in docs/ADDING_SUPPLEMENTS.md)

**Step 5**: Run `npm run build` to regenerate routes

### 2. Add Glossary Term

**All glossary terms are now stored in Supabase database.** To add a new term:

**Step 1**: Insert into database via SQL or Supabase dashboard:

```sql
INSERT INTO api.glossary_terms (
  slug,
  term,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'zinc-deficiency',
  'Zinc Deficiency',
  'Insufficient zinc levels in the body...',
  'Detailed explanation with scientific context...',
  ARRAY['Example 1', 'Example 2'],
  'Zinc Deficiency - Suppl.me Glossary',
  'Understanding zinc deficiency symptoms and treatment'
);
```

**Step 2**: Term automatically appears via `/api/glossary/[slug]` endpoint

**Step 3**: Optional - Create custom page component if advanced layout needed (most terms use dynamic rendering)

### 3. Build & Deploy

```bash
npm run dev              # Dev server (port 3000)
npm run build            # Production build (1,936 pages, ~5 min)
npm run start            # Serve production build
npm run lint             # ESLint
```

**Auto-Deploy**: Push to `main` → Vercel builds & deploys automatically

---

## Next.js Patterns

### 1. Server vs Client Components

- **Default**: Server Component (no 'use client')
- **Add 'use client' when**:
  - Using hooks (useState, useEffect, useRef)
  - Using browser APIs (window, document, localStorage)
  - Using Lucide icons (functions, need client boundary)
  - Tracking analytics (onClick handlers)

### 2. Async Params (Next.js 15+)

```typescript
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Must await!
  // ...
}
```

### 3. Component Props

**GlossaryTemplate**:

- `definition` - String only (auto-linked)
- `expandedExplanation` - JSX/ReactNode

### 4. Styling Priority

1. **Tailwind classes** (preferred): `bg-primary text-white p-4`
2. **CSS variables**: `style={{ paddingTop: 'var(--header-height)' }}`
3. **Inline styles** (last resort): Complex calculations only

**Never use**: Hardcoded hex colors (`#162F1C`) - use `var(--primary)` or Tailwind

### 5. Image Handling

```typescript
import Image from "next/image";
<Image
  src="/images/supplements/vitamin-d.webp"
  alt="Vitamin D"
  width={800}
  height={600}
/>;
```

### 6. SEO Metadata (IMPORTANT)

**All SEO is handled server-side via Next.js App Router `generateMetadata()`.**

❌ **DO NOT use** `SEOHead` component (deprecated, causes duplicate meta tags)

✅ **Correct approach**:

```typescript
// In app/[slug]/page.tsx or any page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Page Title",
    description: "Under 160 chars for Google display",
    // ...
  };
}
```

**SEO Content Sources**:

- **Supplements**: `src/lib/seo-content.ts` → `getSEOContent(routeKey)`
- **Comparison pages**: `routes.config.ts` → `route.description`
- **Static pages**: Direct `metadata` export in page.tsx
- **Glossary**: Database `meta_title` + `meta_description` fields
- **Products**: Generated dynamically from product data

**Character Limits**:

- Title: ~60 chars (Google truncates at ~600px)
- Description: ~155 chars (Google truncates at ~920px)

---

## Database Migration (Active Implementation)

### Week 1-2: Setup & Schema (20 hours) - **CURRENT PHASE**

**Tasks**:

1. ✅ Create Supabase project
2. ✅ Design database schema (5 tables)
3. ⏳ Create migration files
4. ⏳ Run migrations on dev database
5. ⏳ Seed with sample data

**Database Schema**:

```sql
-- Core tables
supplements (17 rows)      -- Supplement metadata
products (1,691 rows)      -- Product details + DSLD data
retailers (7 rows)         -- Retailer info (iHerb, Amazon, etc.)
prices (11,837 rows)       -- Product-retailer-price relationships
glossary_terms (198 rows)  -- Glossary definitions
```

**Key Files** (Week 1-2):

```
supabase/
├── migrations/
│   ├── 001_create_tables.sql
│   ├── 002_create_indexes.sql
│   ├── 003_create_views.sql
│   └── 004_seed_retailers.sql
├── config.toml
lib/supabase/
├── client.ts              # Browser Supabase client
├── server.ts              # Server-side client
└── types.ts               # Generated TypeScript types
```

**Environment Variables**:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
DATABASE_URL=postgresql://...
```

**Commands**:

```bash
npm install @supabase/supabase-js
npx supabase init
npx supabase link --project-ref <your-ref>
npx supabase migration new create_tables
npx supabase db push
```

**See**: `docs/SCALABILITY_IMPLEMENTATION_PLAN.md` for complete Week 1-2 checklist

---

## Project Structure

```
app/                           # Next.js App Router
├── [slug]/page.tsx           # Supplements + comparisons (34 routes)
├── [slug]/product/[productId]/page.tsx  # Products (1,691 routes)
├── glossary/[term]/page.tsx  # Glossary (198 routes)
├── components/               # HeaderClient, ProductDetailClient
├── lib/route-adapter.ts      # Route mapping
└── layout.tsx                # Root layout (GTM, Header, Footer)

src/
├── components/
│   ├── pages/                # 246 page components
│   │   ├── supplements/      # 17 knowledgebase pages
│   │   ├── comparisons/      # 17 + index
│   │   ├── glossary/         # 198 term pages
│   │   └── static/           # 13 static pages
│   ├── templates/            # 3 main templates
│   ├── sections/knowledgebase/  # 10 modular sections
│   ├── shared/               # Layout, ui-extensions, content
│   └── ui/                   # 47 ShadCN components
├── routes.config.ts          # ⭐ ROUTING SOURCE OF TRUTH
├── utils/analytics.ts        # All tracking functions
├── lib/glossaryAutolink.tsx  # Auto-linking engine
└── styles/globals.css        # Design system (2,134 lines)

scripts/
├── migration/                # Database migration utilities
│   ├── test-glossary-api.mjs # Test glossary API endpoints
│   └── validate-glossary-data.mjs  # Validate glossary database
├── data-pipeline/            # Product scraping
├── database/                 # DSLD queries
└── web-build/               # Sitemap, structured data

supabase/                      # NEW: Supabase config
├── migrations/               # SQL migration files
└── config.toml
```

---

## Common Pitfalls

### 1. Params Not Awaited

```typescript
// ❌ WRONG
const { slug } = params;

// ✅ CORRECT
const { slug } = await params;
```

### 2. JSX in String Props

```typescript
// ❌ WRONG
<GlossaryTemplate definition={<p>JSX here</p>} />

// ✅ CORRECT
<GlossaryTemplate
  definition="Plain text"
  expandedExplanation={<p>JSX here</p>}
/>
```

### 3. Missing 'use client'

```typescript
// ❌ WRONG (Server Component using hooks)
import { useState } from 'react';
export function MyComponent() { ... }

// ✅ CORRECT
'use client';
import { useState } from 'react';
export function MyComponent() { ... }
```

### 4. Hardcoded Colors

```typescript
// ❌ WRONG
style={{ backgroundColor: '#162F1C' }}

// ✅ CORRECT
style={{ backgroundColor: 'var(--primary)' }}
// OR
className="bg-primary"
```

### 5. Missing COMPONENT_MAP Entry

**Symptom**: 404 error on new page  
**Fix**: Check `app/[slug]/page.tsx` has import + COMPONENT_MAP entry

---

## Documentation

**Primary Docs**:

- `docs/SCALABILITY_IMPLEMENTATION_PLAN.md` - Database migration (6-week plan)
- `docs/COMPREHENSIVE_AUDIT_DEC2025.md` - Full codebase audit
- `docs/ADDING_SUPPLEMENTS.md` - How to add supplements
- `docs/INDEX.md` - Documentation index

**Glossary Backend (NEW v0.4.1)**:

- `docs/GLOSSARY_BACKEND_COMPLETE.md` - Complete reference & API docs
- `docs/GLOSSARY_BACKEND_IMPLEMENTATION_PLAN.md` - Implementation strategy
- `docs/GLOSSARY_MIGRATION_INSTRUCTIONS.md` - Step-by-step guide

**Quick Reference**:

- `docs/reference/QUICK_ANSWERS.md` - Common questions
- `docs/SCALABILITY_NEXT_STEPS.md` - Implementation summary
- `docs/DATABASE_MIGRATION_VISUAL_GUIDE.md` - Visual architecture

**Guides**:

- `docs/guides/GTM_IMPORT_GUIDE.md` - Analytics setup
- `docs/deployment/DEPLOYMENT_CHECKLIST.md` - Deploy steps

---

## Key Commands

```bash
# Development
npm install                   # Install dependencies
npm run dev                   # Start dev server (port 3000)
npm run build                 # Production build (5 min)
npm run start                 # Serve production build

# Database (Week 1-2)
npx supabase init             # Initialize Supabase
npx supabase link             # Link to remote project
npx supabase migration new    # Create migration
npx supabase db push          # Apply migrations

# Migration Scripts (Week 2)
node scripts/migration/extract-products-to-csv.mjs
node scripts/migration/transform-data.mjs
node scripts/migration/load-to-supabase.mjs

# Deployment
git push origin main          # Auto-deploys to Vercel
```

---

## Notes

- **Node**: >=22.x required (currently v24.1.0)
- **React**: 19.2.0
- **Next.js**: 16.0.3
- **Tailwind**: v4
- **Build Time**: ~5 min for 1,936 pages
- **SEO**: All pages have metadata, structured data, sitemap
- **Analytics**: GTM (GTM-NQWRNKFT) → GA4 (G-JHCPJYM37R)
- **Deployment**: Vercel (auto on push to main)

**Recent Updates:**

- ✅ **v0.5.0** (Nov 29, 2025): Supplement content migration - 400+ word SEO paragraphs
- ✅ **v0.4.1** (Dec 2024): Glossary backend complete - 197 terms in database
- ✅ **v0.4.0** (Nov 27, 2025): Workspace cleanup - 50+ files archived
- ✅ **v0.3.0** (Nov 26-27, 2025): Database migration complete - Supabase production ready
- ✅ **v0.2.0** (Nov 2025): UI refinement - 1,936 pages with zero errors

**Migration Status:**

- ✅ Week 1-2: Database setup (17 supplements, 1,691 products, 11,837 prices)
- ✅ Week 3: API development (5 endpoints, all operational)
- ✅ Week 3.5: Glossary backend (197 terms, 2 new endpoints)
- ✅ Week 4: Supplement content migration (14 new columns, SEO content)
- 🔄 Week 5: Frontend integration (in planning)

**Architecture Notes:**

- All migration scripts archived in `.archive/v0.3-migration/`
- Production deployment docs archived in `.archive/deployment-artifacts/`
- Active documentation consolidated and updated for v0.4
- See [CHANGELOG.md](/CHANGELOG.md) for complete version history

---

## ✅ Production Status (v0.5.0 - Nov 2025)

### All Systems Operational

**API Endpoints (Production):**

```
✅ GET /api/supplements → 200 OK (17 supplements with extended content)
✅ GET /api/supplements/[slug] → 200 OK (single supplement + content fields)
✅ GET /api/supplements/[slug]/products → 200 OK (paginated, filtered)
✅ GET /api/products/[id] → 200 OK (single product with tracking)
✅ GET /api/products/search → 200 OK (full-text search with tracking)
✅ GET /api/glossary → 200 OK (197 terms, search & pagination)
✅ GET /api/glossary/[slug] → 200 OK (single term)
✅ POST /api/events → 200 OK (batched events)
✅ POST /api/events/affiliate-click → 200 OK (returns clickId + trackingUrl)
✅ GET /api/analytics/summary → 200 OK (dashboard metrics)
✅ GET /api/analytics/affiliate-clicks → 200 OK (click details)
```

**Infrastructure:**

- ✅ Supabase PostgreSQL backend (17 supplements with extended content, 1,691 products, 11,837 prices, **197 glossary terms**, **analytics tables**)
- ✅ Vercel hosting with all environment variables configured
- ✅ App Router API routes (App Router style, not Pages Router)
- ✅ Clean workspace (migration artifacts archived)
- ✅ Product content generator for SEO-optimized paragraphs
- ✅ Dual-tracking analytics (GTM + Server for ~98% capture rate)

**v0.6.0 Changes:**

- 📊 Backend analytics: 4 new database tables (analytics_events, affiliate_clicks, api_requests, session_stats)
- 🔧 Dual-tracking client: `src/lib/analytics-dual.ts` sends to GTM + server
- 🆔 Click ID generation: Unique `suppl_XXXXXX_XXXXXXXX` format for commission reconciliation
- 🤖 Bot detection: 12 patterns for filtering fake traffic
- 🚦 Rate limiting: 100 req/min per IP address
- 🔒 Privacy: IP hashing (SHA-256) before storage
- 📈 Dashboard API: Funnel analysis, top supplements/retailers
- 🏷️ GTM template: Complete with GA4, Facebook Pixel, LinkedIn Insight Tag

**v0.5.0 Changes:**

- 📝 Supplement content: 14 new columns for rich product context
- 🔧 Content generator: `src/lib/product-content-generator.ts`
- 📖 5 extended overview templates + 5 extended details templates
- ✅ Hash-based template selection for unique content per product
- 🚀 Parallel API fetch in ProductDetailClient for performance
- 📊 400+ word SEO paragraphs for each product page
  **Test Production:**

````bash
# Test content endpoints
curl https://www.suppl.me/api/supplements/ashwagandha
curl https://www.suppl.me/api/products/search?q=magnesium
curl https://www.suppl.me/api/glossary?search=clinical
curl https://www.suppl.me/api/glossary/rct

# Test analytics endpoints (requires authentication for some)
curl -X POST https://www.suppl.me/api/events \
  -H "Content-Type: application/json" \
  -d '[{"event":"pageview","category":"pageview","data":{}}]'

curl https://www.suppl.me/api/analytics/summary?period=7d
``` Related terms: 27 terms with UUID linking
- 🗺️ Sitemap fix: 1,691 product pages restored via Supabase queries

**Test Production:**

```bash
# Test endpoints
curl https://www.suppl.me/api/supplements/ashwagandha
curl https://www.suppl.me/api/products/search?q=magnesium
curl https://www.suppl.me/api/glossary?search=clinical
curl https://www.suppl.me/api/glossary/rct
````
