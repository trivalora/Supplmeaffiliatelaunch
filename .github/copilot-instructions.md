# Copilot Instructions: Suppl.me Affiliate Launch

## Project Overview

Evidence-based supplement information platform. **Next.js 16 App Router** (production-ready, Vercel-deployed) with static site generation for 1,936 pages.

**Current Version:** 0.4.1 (Dec 2024)  
**Status:** ✅ Production-ready with glossary backend complete  
**Location:** `/Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch`

**Key Stats:**
- ✅ 17 supplements, 197 glossary terms (in database), 17 comparison pages, 1,691 product detail pages
- ✅ 7 API endpoints (all operational in production)
- ✅ Supabase PostgreSQL backend (17 supplements, 1,691 products, 11,837 prices, **197 glossary terms**)
- ✅ SEO Score: 9.75/10 - Excellent implementation
- ✅ Template System: 9/10 - Strong, consistent, reusable

**Version 0.4.1 Highlights:**
📚 **Glossary Backend Complete** ✅
- **Database**: 197 glossary terms in Supabase (all data-driven)
- **API**: GET /api/glossary endpoints operational
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
├── supplements (17 rows)
├── products (1,691 rows)
├── retailers (7 rows)
├── prices (11,837 rows)
└── glossary_terms (197 rows) ← NEW in v0.4.1
    ├── 60 with abbreviations (30.5%)
    ├── 27 with related_terms links
    └── 187 with SEO metadata (94.9%)
```

### API Routes
**Production (All Live)**:
- `/api/supplements` - List all supplements
- `/api/supplements/[slug]` - Supplement details
- `/api/supplements/[slug]/products` - Product list (paginated)
- `/api/products/[id]` - Single product
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
'use client';
import { KnowledgebaseTemplate } from '@/components/templates/KnowledgebaseTemplate';

export function ZincKnowledgebasePage() {
  return <KnowledgebaseTemplate supplementName="Zinc" {...data} />;
}
```

**Step 3**: Add to COMPONENT_MAP in `app/[slug]/page.tsx`
```typescript
import { ZincKnowledgebasePage } from '@/components/pages/supplements/ZincKnowledgebasePage';

const COMPONENT_MAP = {
  // ...
  'ZincKnowledgebasePage': ZincKnowledgebasePage,
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
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  // Must await!
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
import Image from 'next/image';
<Image src="/images/supplements/vitamin-d.webp" alt="Vitamin D" width={800} height={600} />
```

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
- ✅ **v0.4.1** (Dec 2024): Glossary backend complete - 197 terms in database
- ✅ **v0.4.0** (Nov 27, 2025): Workspace cleanup - 50+ files archived
- ✅ **v0.3.0** (Nov 26-27, 2025): Database migration complete - Supabase production ready
- ✅ **v0.2.0** (Nov 2025): UI refinement - 1,936 pages with zero errors

**Migration Status:**
- ✅ Week 1-2: Database setup (17 supplements, 1,691 products, 11,837 prices)
- ✅ Week 3: API development (5 endpoints, all operational)
- ✅ Week 3.5: Glossary backend (197 terms, 2 new endpoints)
- 🔄 Week 4: Frontend integration (in planning)

**Architecture Notes:**
- All migration scripts archived in `.archive/v0.3-migration/`
- Production deployment docs archived in `.archive/deployment-artifacts/`
- Active documentation consolidated and updated for v0.4
- See [CHANGELOG.md](/CHANGELOG.md) for complete version history

---

## ✅ Production Status (v0.4.1 - Dec 2024)

### All Systems Operational

**API Endpoints (Production):**
```
✅ GET /api/supplements → 200 OK (17 supplements)
✅ GET /api/supplements/[slug] → 200 OK (single supplement)
✅ GET /api/supplements/[slug]/products → 200 OK (paginated, filtered)
✅ GET /api/products/[id] → 200 OK (single product)
✅ GET /api/products/search → 200 OK (full-text search)
✅ GET /api/glossary → 200 OK (197 terms, search & pagination) ← NEW
✅ GET /api/glossary/[slug] → 200 OK (single term) ← NEW
```

**Infrastructure:**
- ✅ Supabase PostgreSQL backend (17 supplements, 1,691 products, 11,837 prices, **197 glossary terms**)
- ✅ Vercel hosting with all environment variables configured
- ✅ App Router API routes (App Router style, not Pages Router)
- ✅ Clean workspace (migration artifacts archived)

**v0.4.1 Changes:**
- 📚 Glossary backend: 197 terms in database (fully data-driven)
- 🔧 Utility scripts: test and validate glossary API/data
- 📖 Complete documentation (GLOSSARY_BACKEND_COMPLETE.md)
- ✅ All validation checks passed
- 🗄️ Database schema: glossary_terms table with 197 entries
- 🔗 Related terms: 27 terms with UUID linking
- 🗺️ Sitemap fix: 1,691 product pages restored via Supabase queries

**Test Production:**
```bash
# Test endpoints
curl https://www.suppl.me/api/supplements/ashwagandha
curl https://www.suppl.me/api/products/search?q=magnesium
curl https://www.suppl.me/api/glossary?search=clinical
curl https://www.suppl.me/api/glossary/rct
```
