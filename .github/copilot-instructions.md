# Copilot Instructions: Suppl.me Affiliate Launch

## Project Overview

Evidence-based supplement information platform. **Next.js 16 App Router** (production-ready, Vercel-deployed) with static site generation for 1,936 pages.

**Current Status** (Nov 26, 2025):
- ✅ Production-ready - 17 supplements, 198 glossary terms, 17 comparison pages, 1,691 product detail pages
- ✅ SEO Score: 9.75/10 - Excellent implementation
- ✅ Template System: 9/10 - Strong, consistent, reusable
- ✅ Overall Health: 7.8/10 - Production-ready with clear improvement path

**Active Priority** (Week 4):
🚀 **Frontend Integration** - Connecting React components to REST API
- **Current Phase**: Week 3 Complete ✅ - All 5 API endpoints tested & functional
- **Next Phase**: Week 4 - Frontend integration (hooks, page updates, search UI)
- **See**: `docs/WEEK_3_COMPLETE.md` for API reference & `docs/WEEK_3_CHECKLIST.md` for testing results
- **Why**: Dynamic product loading, real-time search, better UX, scalable architecture

---

## Architecture

### Frontend
- **Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- **Routing**: `src/routes.config.ts` - Single source of truth (230 routes)
- **Templates**: `KnowledgebaseTemplate`, `GlossaryTemplate`, `ProductComparisonWrapper`, `ProductDetailClient`
- **Analytics**: GTM (22 events, 36 variables) → GA4 (G-JHCPJYM37R)
- **Build**: All 1,936 pages statically generated (SSG), ~5 min build time

### Backend (Current - File-Based)
```
public/api/products/supplements/
├── ashwagandha.json (391 KB, 142 products)
├── calcium.json (716 KB)
├── collagen.json (868 KB)
└── ... (17 files total, ~34 MB)
```

### Backend (Target - Database)
```
Supabase/PostgreSQL
├── supplements (17 rows)
├── products (1,691 rows)
├── retailers (7 rows)
├── prices (11,837 rows)
└── glossary_terms (198 rows)
```

### API Routes
**Current**:
- `/api/health` - Status endpoint
- `/api/events` - Analytics tracking
- `/api/partner-lead` - Lead submission (optional PostgreSQL)
- `/api/subscribe` - Email subscription (optional PostgreSQL)

**Target** (Week 3):
- `/api/supplements` - List all supplements
- `/api/supplements/[slug]` - Supplement details
- `/api/supplements/[slug]/products` - Product list (paginated)
- `/api/products/[id]` - Single product
- `/api/products/search` - Product search
- `/api/retailers` - Retailer list
- `/api/glossary` - Glossary terms
- `/api/glossary/[slug]` - Single term

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

**Step 1**: Create `src/components/pages/glossary/[Term]Page.tsx`
```typescript
'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function ZincDeficiencyPage() {
  return (
    <GlossaryTemplate
      term="Zinc Deficiency"
      definition="Plain text definition..."  // String only
      expandedExplanation={<>JSX content here</>}  // JSX here
    />
  );
}
```

**Step 2**: Add route to `src/routes.config.ts` in `GLOSSARY_ROUTES`

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
├── migration/                # NEW: Database migration scripts
│   ├── extract-products-to-csv.mjs
│   ├── transform-data.mjs
│   └── load-to-supabase.mjs
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

**Database Migration**: ✅ Week 1-2 Complete (17 supplements, 1,663 products, 1,986 prices)
**API Development**: ✅ Week 3 Complete (5 endpoints, all filters tested, error handling verified)
**Current Focus**: Week 4 - Frontend integration + Production deployment fix

**Recent Fixes** (Nov 26, 2025):
- ✅ Fixed Supabase client imports (`createClient` from `@/lib/supabase/server`)
- ✅ Moved `/lib/supabase` to `/src/lib/supabase` for correct path resolution
- ✅ Updated column names: `dsld_id` (not `json_id`), `supplement_id` (not `supplement_slug`)
- ✅ All 5 API endpoints tested and functional locally
- 🚨 **PRODUCTION ISSUE**: Dynamic API routes return 404 (env vars not set in Vercel)
- 📝 Created fix: `docs/PRODUCTION_API_FIX.md` + `scripts/setup-vercel-env.mjs`
- 📝 Documented optional `supplement_slug` optimization (see `docs/SUPPLEMENT_SLUG_ENHANCEMENT.md`)

---

## 🚨 Production Deployment Fix

### Critical Issue (Nov 26, 2025)

**Problem:**
```
❌ GET /api/supplements/ashwagandha → 404 Not Found
❌ GET /api/supplements/ashwagandha/products → 404 Not Found
✅ GET /api/supplements → 200 OK (works)
```

**Root Cause:** Environment variables not set in Vercel production

### Quick Fix (Choose One)

#### Option A: Manual (5 minutes)
1. Go to https://vercel.com/dashboard → Settings → Environment Variables
2. Add 7 variables (copy from `.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (mark sensitive)
   - `DATABASE_URL` (mark sensitive)
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CANONICAL_BASE_URL`
3. Check all 3 environments for each variable
4. Deployments → Latest → ⋮ → Redeploy

#### Option B: CLI (2 minutes)
```bash
npm i -g vercel
vercel login
vercel link
node scripts/setup-vercel-env.mjs
vercel --prod
```

### Verification
```bash
# After deployment, run diagnostics
node scripts/diagnose-production.mjs

# Expected output:
# ✅ /api/supplements → 200 OK
# ✅ /api/supplements/ashwagandha → 200 OK
# ✅ /api/supplements/ashwagandha/products → 200 OK
```

### Documentation
- **Complete Guide**: `docs/PRODUCTION_API_FIX.md`
- **Env Setup**: `VERCEL_ENV_SETUP.md`
- **Diagnostics**: `scripts/diagnose-production.mjs`

### Common Issues

**Still 404 after setup?**
- Check Vercel Function Logs (Deployments → Functions tab)
- Verify Supabase project isn't paused (https://supabase.com/dashboard)
- Confirm all 7 variables are set for "Production" environment

**500 Internal Server Error?**
- Supabase connection issue → Check project status
- Wrong schema → Verify `db: { schema: 'api' }` in `src/lib/supabase/server.ts`

**Variables not working?**
- Must redeploy after adding variables
- Verify names match exactly (case-sensitive)
- Check "Production" checkbox is ticked
