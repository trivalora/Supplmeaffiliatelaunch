# Project Memory - Suppl.me Affiliate Launch

> **Auto-loaded context for GitHub Copilot and AI assistants**

## 🎯 Quick Project Identity

**Name:** Suppl.me - Evidence-Based Supplement Comparison Platform  
**Version:** 0.6.6.4 (Production - December 1, 2025)  
**Stack:** Next.js 16 + React 19 + Supabase PostgreSQL + TypeScript + Tailwind v4  
**Status:** ✅ Production-ready, 1,936 pages live on Vercel, **195 glossary terms**, **SEO optimized with definition labels**

---

## 🏗️ Architecture at a Glance

### Frontend

- **Framework:** Next.js 16 App Router (NOT Pages Router)
- **Routing:** `src/routes.config.ts` (single source of truth, 230 routes)
- **Components:** 246 page components using 3 main templates
- **Styling:** Tailwind CSS v4 + CSS variables
- **Analytics:** GTM (GTM-NQWRNKFT) → GA4 (G-JHCPJYM37R)

### Backend

- **Database:** Supabase PostgreSQL (schema: `api`, NOT `public`)
- **Tables:** 5 core + 4 analytics tables
- **Data:** 17 supplements (with extended content), 1,691 products, 11,837 prices, **197 glossary terms (ALL 500+ words)**
- **API:** 11 endpoints (all App Router style in `app/api/`)
- **Content:** 14 extended columns for SEO-optimized product page content
- **Glossary:** 5 rich content fields (why_it_matters, simple_explanation, key_points, common_misconceptions, examples)

### Deployment

- **Host:** Vercel
- **Build:** ~5 min for 1,936 static pages (SSG)
- **URL:** https://www.suppl.me
- **Auto-deploy:** Push to `main` branch

---

## 🚨 Critical Rules (Must Follow)

### 1. **ALWAYS Use App Router** (Not Pages Router)

```typescript
// ✅ CORRECT - App Router
app / api / glossary / route.ts;

// ❌ WRONG - Pages Router
pages / api / glossary.ts;
```

### 2. **ALWAYS Await Params** (Next.js 15+)

```typescript
// ✅ CORRECT
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
}

// ❌ WRONG
const { slug } = params; // Will crash!
```

### 3. **ALWAYS Configure Supabase Schema**

```typescript
// ✅ CORRECT
const supabase = createClient(url, key, {
  db: { schema: "api" }, // Critical!
});

// ❌ WRONG - Will return empty results
const supabase = createClient(url, key);
```

### 4. **Server Components by Default**

```typescript
// ✅ DEFAULT - Server Component (no directive needed)
export function MyComponent() { ... }

// ✅ ONLY when using hooks, browser APIs, or Lucide icons
'use client';
export function MyComponent() {
  const [state, setState] = useState();
}
```

### 5. **Tailwind Over Inline Styles**

```typescript
// ✅ PREFERRED
<div className="bg-primary text-white p-4" />

// ✅ ACCEPTABLE - CSS variables
<div style={{ backgroundColor: 'var(--primary)' }} />

// ❌ AVOID - Hardcoded colors
<div style={{ backgroundColor: '#162F1C' }} />
```

---

## 📁 File Organization

### Key Directories

```
app/                          # Next.js App Router
├── api/                      # 7 API endpoints
├── [slug]/                   # Supplements (17) + comparisons (17)
└── glossary/[term]/          # Glossary terms (197)

src/
├── components/
│   ├── pages/                # 246 page components
│   │   ├── supplements/      # 17 knowledgebase pages
│   │   ├── comparisons/      # 17 comparison pages
│   │   ├── glossary/         # 197 glossary term pages
│   │   └── static/           # 13 static pages
│   ├── templates/            # 3 reusable templates
│   └── ui/                   # 47 ShadCN components
├── routes.config.ts          # ⭐ ROUTING SOURCE OF TRUTH
└── utils/analytics.ts        # GTM tracking functions

scripts/
├── migration/                # Database utilities
├── data-pipeline/            # Product scraping
└── web-build/               # Sitemap, structured data

supabase/
└── migrations/              # SQL migration files
```

### Import Aliases

```typescript
import { Component } from "@/components/ui/component";
import { helper } from "@/utils/helper";
import { type } from "@/types/type";
```

---

## 🔄 Common Workflows

### Adding a New Supplement

1. **Route:** Add to `src/routes.config.ts`
2. **Component:** Create in `src/components/pages/supplements/`
3. **Map:** Import in `app/[slug]/page.tsx` COMPONENT_MAP
4. **Build:** Run `npm run build`

**See:** `docs/ADDING_SUPPLEMENTS.md` for full guide

### Adding a Glossary Term

1. **Database:** Insert into `api.glossary_terms` via SQL or Supabase dashboard
2. **API:** Term automatically available via `/api/glossary/[slug]`
3. **Optional:** Create custom component if advanced layout needed

### Deploying Changes

```bash
git add .
git commit -m "feat: description"
git push origin main
# Auto-deploys to Vercel (~5 min build)
```

---

## 🗄️ Database Schema

### Supabase Connection

```typescript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { db: { schema: "api" } } // ← REQUIRED!
);
```

### Tables (Schema: `api`)

- **supplements** (17 rows) - Supplement metadata
- **products** (1,691 rows) - Product details + DSLD data
- **retailers** (7 rows) - iHerb, Amazon, etc.
- **prices** (11,837 rows) - Product-retailer-price joins
- **glossary_terms** (197 rows) - Glossary definitions

---

## 🎨 Styling System

### Design Tokens (CSS Variables)

```css
--primary: #162f1c; /* Dark green */
--primary-light: #1e4728;
--accent: #c8a882; /* Gold */
--background: #f8f6f3; /* Off-white */
```

### Tailwind Classes

```typescript
// Use semantic Tailwind classes
<div className="bg-primary text-white p-4 rounded-lg" />

// Or CSS variables for complex cases
<div style={{ paddingTop: 'var(--header-height)' }} />
```

### Component Libraries

- **UI Components:** ShadCN (47 components in `src/components/ui/`)
- **Icons:** Lucide React (requires 'use client')
- **Animations:** Framer Motion (motion package)

---

## 📊 Analytics Implementation

### GTM Container

**ID:** GTM-NQWRNKFT  
**Events:** 22 tracking events  
**Variables:** 36 data layer variables

### Common Tracking Patterns

```typescript
import { trackEvent } from "@/utils/analytics";

// Product clicks
trackEvent("product_click", {
  product_id: "123",
  product_name: "Vitamin D3",
  retailer: "iHerb",
  price: "15.99",
});

// Page views
trackEvent("page_view", {
  page_path: "/ashwagandha",
  page_title: "Ashwagandha - Suppl.me",
});
```

---

## 🧪 Development Commands

```bash
# Development
npm run dev              # Dev server (http://localhost:3000)
npm run build            # Production build (5 min, 1,936 pages)
npm run start            # Serve production build
npm run lint             # ESLint

# Database
npx supabase init        # Initialize Supabase
npx supabase migration new my_migration
npx supabase db push     # Apply migrations

# Testing
node scripts/migration/validate-glossary-data.mjs
node scripts/migration/test-glossary-api.mjs
```

---

## 📚 Documentation Index

**Essential Docs:**

- `.github/copilot-instructions.md` - Complete project guide (you're here!)
- `docs/COMPREHENSIVE_AUDIT_DEC2025.md` - Full codebase audit
- `docs/API_DOCUMENTATION.md` - All 7 API endpoints
- `docs/ADDING_SUPPLEMENTS.md` - Content addition workflow
- `docs/GLOSSARY_BACKEND_COMPLETE.md` - Glossary system reference

**Quick Reference:**

- `docs/reference/QUICK_ANSWERS.md` - Common questions
- `docs/PRODUCTION_QUICK_REF.md` - Production checklist
- `docs/DATABASE_MIGRATION_VISUAL_GUIDE.md` - Architecture diagrams

---

## 🐛 Common Pitfalls & Fixes

### Issue: 404 on New Page

**Cause:** Missing COMPONENT_MAP entry  
**Fix:** Check `app/[slug]/page.tsx` has import + COMPONENT_MAP entry

### Issue: Supabase Returns Empty Results

**Cause:** Missing `schema: 'api'` configuration  
**Fix:** Add `db: { schema: 'api' }` to createClient options

### Issue: "params is not a Promise" Error

**Cause:** Not awaiting params in Next.js 15+  
**Fix:** Change `const { slug } = params` to `const { slug } = await params`

### Issue: "Cannot use useState in Server Component"

**Cause:** Using hooks without 'use client' directive  
**Fix:** Add `'use client';` at top of file

### Issue: Hardcoded Colors Not Matching Design

**Cause:** Using hex colors instead of design tokens  
**Fix:** Use `className="bg-primary"` or `var(--primary)`

---

## 🚀 Current Phase: Frontend Integration

**Goal:** Connect React components to Supabase API endpoints

**Tasks:**

1. Create custom React hooks (`useGlossary`, `useSupplements`)
2. Implement client-side caching (SWR or React Query)
3. Add loading states and error boundaries
4. Build search UI with live results
5. Optimize performance with pagination

**See:** `docs/FRONTEND_MIGRATION_GUIDE.md` for detailed plan

---

## 📈 Project Stats

- **Total Pages:** 1,936 (all statically generated)
- **Build Time:** ~5 minutes
- **SEO Score:** 9.75/10
- **Bundle Size:** Optimized with tree-shaking
- **Lighthouse:** 90+ across all metrics
- **Production URL:** https://www.suppl.me

---

## 🔐 Environment Variables

**Required in `.env.local`:**

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT
NEXT_PUBLIC_SITE_URL=https://www.suppl.me
```

---

## 🤖 AI Assistant Instructions

**When working on this project:**

1. **CHECK** `src/routes.config.ts` before modifying routes
2. **USE** `db: { schema: 'api' }` for all Supabase queries
3. **AWAIT** params in all route handlers
4. **PREFER** Server Components (add 'use client' only when needed)
5. **USE** Tailwind classes over inline styles
6. **REFER** to documentation in `docs/` before making assumptions
7. **TEST** with `npm run build` before considering task complete

**For complex tasks:**

- Read relevant documentation first
- Follow established patterns in codebase
- Maintain consistency with existing code style
- Ask for clarification if requirements are unclear

---

**Last Updated:** November 2025  
**Version:** 0.5.0  
**Status:** Production Ready ✅

---

## 📝 Product Content Generation

### SEO Content System (v0.5.0)

Product pages generate unique 400+ word paragraphs using:

**Key Files:**
- `src/lib/product-content-generator.ts` - Template-based content generation
- `src/lib/product-context-data.ts` - TypeScript fallback data
- `app/components/ProductDetailClient.tsx` - Fetches supplement context from API

**Database Columns (14 new in v0.5.0):**
- `quick_overview` - Brief 1-2 sentence description
- `extended_overview` - Detailed 150+ word scientific explanation
- `science_snapshot` - Research summary paragraph
- `key_benefits[]` - Array of benefit statements
- `ideal_for[]` - Target audience array
- `timing_tips[]` - When/how to take guidance
- `quality_markers[]` - What to look for when buying
- `safety_considerations[]` - Safety information
- `what_to_expect_summary[]` - Timeline expectations
- `typical_dosage_min/max/unit` - Dosage range
- `form_notes` (JSONB) - Form-specific guidance
- `what_to_expect` (JSONB) - Primary/secondary outcome timelines
- `synergy_notes` - Complementary supplement combinations

**Content Generation Flow:**
```
ProductDetailClient
    ↓
Parallel fetch: product + supplement context
    ↓
generateProductContent(product, supplementContext)
    ↓
Hash-based template selection (5 overview + 5 detail templates)
    ↓
400+ word unique paragraphs
```
