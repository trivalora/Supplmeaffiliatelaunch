# Copilot Instructions: Suppl.me Affiliate Launch

## Project Overview

Evidence-based supplement information platform. **Next.js 16 App Router** (production-ready, Vercel-deployed) with static site generation for 1,936 pages.

**Current Version:** 0.6.3 (Nov 29, 2025)  
**Status:** ✅ Production-ready with triple-platform server-side tracking (GA4 + Facebook + TikTok)  
**Location:** `/Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch`

**Key Stats:**

- ✅ 17 supplements, 197 glossary terms (in database), 17 comparison pages, 1,691 product detail pages
- ✅ 11 API endpoints (all operational in production)
- ✅ Supabase PostgreSQL backend (17 supplements, 1,691 products, 11,837 prices, **197 glossary terms**, **analytics tracking**)
- ✅ Triple-platform server-side tracking: GA4 Measurement Protocol + Facebook CAPI + TikTok Events API
- ✅ SEO Score: 9.75/10 - Excellent implementation
- ✅ Template System: 9/10 - Strong, consistent, reusable
- ✅ Product Content: 400+ word SEO paragraphs (dynamic generation)
- ✅ Backend Analytics: Server-side tracking with affiliate click_id generation

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
  **Active Priority** (Week 5):
  📈 **Analytics Enhancement** - Current Phase

- **Goal**: Complete analytics infrastructure with GA4 Measurement Protocol and affiliate webhooks
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

````
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
````

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
