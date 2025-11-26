# Database Migration Overview: Visual Guide

**Quick Reference**: Architecture transition from file-based to database-driven

---

## Current vs. Future Architecture

### 📁 CURRENT: File-Based System

```
┌─────────────────────────────────────────────────────────┐
│                    BUILD TIME (5 minutes)                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  public/api/products/supplements/                        │
│  ├── ashwagandha.json (391 KB, 142 products)            │
│  ├── calcium.json (716 KB, 300+ products)               │
│  ├── collagen.json (868 KB, 350+ products)              │
│  └── ... (17 files total, ~34 MB)                       │
│                           │                              │
│                           ▼                              │
│                 generateStaticParams()                   │
│                           │                              │
│                           ▼                              │
│            Generates 1,691 product pages                 │
│                 (loads entire JSON each time)            │
│                           │                              │
│                           ▼                              │
│                  Deploy to Vercel                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Problems at Scale:**
- ❌ 5+ minute builds (will grow to 15+ at 50 supplements)
- ❌ Loading 2 MB file to show single product
- ❌ Can't update prices without full rebuild
- ❌ Build fails if JSON file is too large
- ❌ No real-time features possible

---

### 🗄️ FUTURE: Database-Driven System

```
┌─────────────────────────────────────────────────────────┐
│              NEXT.JS 16 APP (Runtime)                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  User visits: /ashwagandha/product/DSLD12345             │
│                           │                              │
│                           ▼                              │
│           Check ISR cache (1 hour TTL)                   │
│           ├─ Hit? Return cached HTML                     │
│           └─ Miss? Fetch from API ──┐                    │
│                                     │                    │
├─────────────────────────────────────┼───────────────────┤
│            API LAYER                │                    │
│                                     ▼                    │
│    GET /api/products/DSLD12345                           │
│         (Next.js Route Handler)                          │
│                  │                                       │
│                  ▼                                       │
│         Query Supabase/PostgreSQL                        │
│         (< 50ms query time)                              │
│                  │                                       │
├──────────────────┼───────────────────────────────────────┤
│    DATABASE     │                                        │
│                 ▼                                        │
│    ┌────────────────────────┐                           │
│    │  Supabase/PostgreSQL   │                           │
│    ├────────────────────────┤                           │
│    │  📊 supplements (17)    │                           │
│    │  📦 products (1,691)    │                           │
│    │  🏪 retailers (7)       │                           │
│    │  💰 prices (11,837)     │                           │
│    │  📖 glossary (198)      │                           │
│    └────────────────────────┘                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Benefits:**
- ✅ 3-minute builds (only template pages)
- ✅ API responds in < 200ms
- ✅ Update prices without rebuild
- ✅ Real-time features possible
- ✅ Advanced search & filtering
- ✅ Scales to 1000+ supplements

---

## Database Schema at a Glance

### 5 Core Tables

```sql
┌─────────────────┐
│  supplements    │  (17 rows)
├─────────────────┤
│ id              │  UUID (primary key)
│ slug            │  TEXT (unique) - 'ashwagandha'
│ name            │  TEXT - 'Ashwagandha'
│ subcategory     │  TEXT - 'Phytochemicals'
│ description     │  TEXT
│ hero_image_url  │  TEXT
│ meta_title      │  TEXT (SEO)
│ meta_keywords   │  TEXT[] (SEO)
└─────────────────┘
         │
         │ 1:N relationship
         ▼
┌─────────────────┐
│    products     │  (1,691 rows)
├─────────────────┤
│ id              │  UUID (primary key)
│ dsld_id         │  TEXT (unique) - 'DSLD12345'
│ supplement_id   │  UUID → supplements.id
│ brand           │  TEXT - 'NOW Foods'
│ product_name    │  TEXT - 'Ashwagandha 450mg'
│ label_data      │  JSONB (8 categories)
│ ingredients     │  JSONB (structured)
│ third_party_tested │ BOOLEAN
│ certifications  │  TEXT[] - ['USP', 'NSF']
└─────────────────┘
         │
         │ 1:N relationship
         ▼
┌─────────────────┐
│     prices      │  (11,837 rows)
├─────────────────┤
│ id              │  UUID (primary key)
│ product_id      │  UUID → products.id
│ retailer_id     │  UUID → retailers.id
│ price           │  DECIMAL(10,2) - 12.99
│ product_url     │  TEXT
│ affiliate_url   │  TEXT
│ in_stock        │  BOOLEAN
│ last_checked_at │  TIMESTAMPTZ
└─────────────────┘
         │
         │ N:1 relationship
         ▼
┌─────────────────┐
│   retailers     │  (7 rows)
├─────────────────┤
│ id              │  UUID (primary key)
│ slug            │  TEXT - 'iherb'
│ name            │  TEXT - 'iHerb'
│ logo_url        │  TEXT
│ button_style    │  JSONB (colors)
│ is_affiliate    │  BOOLEAN
│ priority        │  INTEGER (display order)
└─────────────────┘

┌─────────────────┐
│ glossary_terms  │  (198 rows)
├─────────────────┤
│ id              │  UUID (primary key)
│ slug            │  TEXT - 'rct'
│ term            │  TEXT - 'Randomized Controlled Trial'
│ abbreviation    │  TEXT - 'RCT'
│ definition      │  TEXT
│ examples        │  TEXT[]
│ related_terms   │  UUID[] (self-reference)
└─────────────────┘
```

---

## API Architecture

### 8 Primary Endpoints

```
GET /api/supplements
├─ Returns: List of all supplements
└─ Cache: 1 hour

GET /api/supplements/[slug]
├─ Example: /api/supplements/ashwagandha
├─ Returns: Supplement details + product count
└─ Cache: 1 hour

GET /api/supplements/[slug]/products
├─ Example: /api/supplements/ashwagandha/products?page=1&limit=20
├─ Returns: Paginated product list with prices
├─ Query params: page, limit, sort, filter
└─ Cache: 5 minutes

GET /api/products/[id]
├─ Example: /api/products/uuid-or-dsld-id
├─ Returns: Full product details + all retailer prices
├─ Includes: Label data, ingredients, certifications
└─ Cache: 1 hour

GET /api/products/search
├─ Example: /api/products/search?q=vitamin+d&brand=NOW
├─ Returns: Search results with filters
└─ Cache: 5 minutes

GET /api/retailers
├─ Returns: List of all retailers with logos, styles
└─ Cache: 24 hours

GET /api/glossary
├─ Returns: List of all glossary terms
└─ Cache: 1 hour

GET /api/glossary/[slug]
├─ Example: /api/glossary/rct
├─ Returns: Full term definition + related terms
└─ Cache: 1 hour
```

---

## Migration Process (3 Steps)

### Step 1: Extract (2 hours)
```bash
node scripts/migration/extract-products-to-csv.mjs

# Reads from:
public/api/products/supplements/*.json (17 files)

# Outputs to:
data/migration/
├── supplements.csv
├── products.csv
├── retailers.csv
└── prices.csv
```

### Step 2: Transform (4 hours)
```bash
node scripts/migration/transform-data.mjs

# Cleans & normalizes:
- Removes duplicates
- Validates DSLD IDs
- Normalizes brand names
- Extracts retailer info
- Structures label data

# Outputs to:
data/migration/
├── supplements_clean.csv
├── products_clean.csv
├── retailers_clean.csv
└── prices_clean.csv
```

### Step 3: Load (6 hours)
```bash
node scripts/migration/load-to-supabase.mjs

# Inserts into Supabase:
1. Retailers (7 rows)
2. Supplements (17 rows)
3. Products (1,691 rows)
4. Prices (11,837 rows)
5. Glossary terms (198 rows)

# Validates:
- All foreign keys valid
- No orphaned records
- All products have prices
- All prices reference valid retailers
```

---

## Rollback Strategy

### Feature Flag Approach

```typescript
// lib/data-source.ts
const USE_DATABASE = process.env.NEXT_PUBLIC_USE_DATABASE === 'true';

export async function getProduct(dsldId: string) {
  if (USE_DATABASE) {
    // ✅ New way: Fetch from API
    const response = await fetch(`/api/products/${dsldId}`);
    return await response.json();
  } else {
    // 🔄 Old way: Read from JSON
    const supplementSlug = getSupplementSlugFromDsldId(dsldId);
    const response = await fetch(`/api/products/supplements/${supplementSlug}.json`);
    const data = await response.json();
    return data.products.find(p => p.id === dsldId);
  }
}
```

### Rollout Plan

```
Week 1-4: Development & Testing
├─ Database ready, API functional
└─ USE_DATABASE=false (still using JSON)

Week 5: Gradual Rollout
├─ Monday:    10% of traffic → USE_DATABASE=true
├─ Wednesday: 50% of traffic → USE_DATABASE=true
├─ Friday:    100% of traffic → USE_DATABASE=true
└─ Monitor: Error rates, response times, user feedback

Week 6: Finalization
├─ Remove feature flag code
├─ Delete JSON files (after 30-day backup period)
└─ Update documentation
```

If issues arise:
```bash
# Instant rollback
vercel env add NEXT_PUBLIC_USE_DATABASE false --production
# Redeploy takes < 3 minutes
```

---

## Timeline Visual

```
Week 1: Setup & Schema Design (8 hours)
┌────────────────────────────────────────┐
│ Mon-Tue: Supabase setup (4h)           │
│ Wed-Fri: Create tables, indexes (4h)   │
└────────────────────────────────────────┘

Week 2: Data Migration (12 hours)
┌────────────────────────────────────────┐
│ Mon-Tue: Extract & transform (6h)      │
│ Wed-Thu: Load to database (4h)         │
│ Fri: Validation & backup (2h)          │
└────────────────────────────────────────┘

Week 3: API Development (16 hours)
┌────────────────────────────────────────┐
│ Mon-Tue: Supplements & products API (8h)│
│ Wed-Thu: Retailers & glossary API (6h) │
│ Fri: Caching & error handling (2h)     │
└────────────────────────────────────────┘

Week 4: Frontend Integration (12 hours)
┌────────────────────────────────────────┐
│ Mon-Tue: Update product pages (6h)     │
│ Wed-Thu: Update comparison pages (4h)  │
│ Fri: Loading states & errors (2h)      │
└────────────────────────────────────────┘

Week 5: Testing (8 hours)
┌────────────────────────────────────────┐
│ Mon-Tue: Unit & integration tests (4h) │
│ Wed-Thu: Performance & SEO tests (3h)  │
│ Fri: Bug fixes (1h)                    │
└────────────────────────────────────────┘

Week 6: Deployment (4 hours)
┌────────────────────────────────────────┐
│ Mon: Deploy to staging, test (2h)      │
│ Wed: Deploy to production (1h)         │
│ Fri: Monitor & document (1h)           │
└────────────────────────────────────────┘

Total: 60 hours over 6 weeks
```

---

## Cost Breakdown

### Supabase Free Tier (Forever Free)
```
✅ 500 MB database storage
   Current need: ~100 MB (for 50 supplements)
   
✅ 2 GB bandwidth/month
   Estimate: ~1 GB/month with edge caching
   
✅ 100,000 monthly active users
   Current: ~1,000/month
   
✅ 50,000 monthly API calls (cached)
   Estimate: ~500,000 total, but 90% cached

Upgrade to Pro ($25/month) when:
- 100+ supplements
- 1M+ monthly API calls
- Need daily backups
```

### Infrastructure Costs (Current)
```
Vercel Pro: $20/month (already paying)
Domain: $12/year (already paying)
Analytics: Free (GA4 + Hotjar)

New costs: $0/month (free tier sufficient)
```

---

## Success Criteria

### ✅ Phase 1: Complete (Week 1-2)
- [ ] Supabase project created
- [ ] Database schema deployed
- [ ] Data migrated successfully
- [ ] Validation: 0 data integrity errors

### ✅ Phase 2: Complete (Week 3)
- [ ] All 8 API endpoints functional
- [ ] API response time < 200ms (p95)
- [ ] Caching working correctly
- [ ] Error handling tested

### ✅ Phase 3: Complete (Week 4)
- [ ] Product pages using API
- [ ] Comparison pages using API
- [ ] ISR working correctly
- [ ] Build time < 3 minutes

### ✅ Phase 4: Complete (Week 5-6)
- [ ] All tests passing
- [ ] SEO validation complete
- [ ] Production deployment successful
- [ ] No regressions in performance

---

## Quick Reference: Key Commands

```bash
# Database
npx supabase init                          # Initialize Supabase
npx supabase link --project-ref xxx        # Link to remote project
npx supabase migration new create_tables   # Create migration
npx supabase db push                       # Apply migrations

# Migration
node scripts/migration/extract-products-to-csv.mjs
node scripts/migration/transform-data.mjs
node scripts/migration/load-to-supabase.mjs

# Development
npm run dev                                # Start dev server
npm run build                              # Build for production
npm run start                              # Serve production build

# Deployment
vercel env add USE_DATABASE true --production
vercel --prod                              # Deploy to production

# Rollback
vercel env add USE_DATABASE false --production
vercel --prod                              # Instant rollback
```

---

## Resources

📘 **Full Implementation Plan**: `docs/SCALABILITY_IMPLEMENTATION_PLAN.md`  
📊 **Comprehensive Audit**: `docs/COMPREHENSIVE_AUDIT_DEC2025.md`  
🚀 **Next Steps**: `docs/SCALABILITY_NEXT_STEPS.md`  
🤖 **Copilot Instructions**: `.github/copilot-instructions.md`

🌐 **Supabase Docs**: https://supabase.com/docs  
⚡ **Next.js ISR**: https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration  
💬 **Support**: Supabase Discord, Next.js Discord

---

**Status**: ✅ Ready to implement  
**Risk Level**: 🟢 Low (with rollback plan)  
**Estimated Timeline**: 6 weeks  
**Total Effort**: 60 hours
