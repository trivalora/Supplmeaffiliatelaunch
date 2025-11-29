# Suppl.me Affiliate Launch

## 🚀 Production Status

**Version**: 0.5.0  
**Build Status**: ✅ Successful (0 errors, 0 warnings)  
**Pages Generated**: 1,936 static pages  
**Last Updated**: November 2025  

### Current State
- ✅ **Production Ready**: All systems operational
- ✅ **17 Supplement Pages** with evidence-based information
- ✅ **197 Glossary Terms** in Supabase database
- ✅ **17 Price Comparison Pages** across 7 retailers
- ✅ **1,691 Product Detail Pages** with DSLD integration
- ✅ **Supabase Backend**: PostgreSQL with 7 API endpoints
- ✅ **Clean Workspace**: All migration artifacts archived
- 🔄 **Next Phase**: Frontend integration with API endpoints

**Status**: ✅ **PRODUCTION READY** - All endpoints operational

## Quick Start

### Development
```bash
npm install              # Install dependencies
npm run dev              # Start dev server (port 3000)
npm run build            # Production build (1,936 pages)
npm run start            # Serve production build
```

### API Endpoints (Production Ready)

**All 7 endpoints operational in production:**

**Supplements:**
- `GET /api/supplements` - List all supplements
- `GET /api/supplements/[slug]` - Single supplement details
- `GET /api/supplements/[slug]/products` - Product list (paginated, filtered)

**Products:**
- `GET /api/products/[id]` - Single product details
- `GET /api/products/search` - Full-text search across products

**Glossary:**
- `GET /api/glossary` - List glossary terms (search & pagination)
- `GET /api/glossary/[slug]` - Single glossary term details

**Test locally:**
```bash
npm run dev              # Start dev server

# Test endpoints
curl http://localhost:3000/api/supplements | jq
curl http://localhost:3000/api/glossary?search=clinical | jq
curl http://localhost:3000/api/glossary/rct | jq
```

See **[API Documentation](docs/API_DOCUMENTATION.md)** for complete reference.

### Documentation
- **[CHANGELOG](CHANGELOG.md)** - Version history and changes
- **[Production Status](PRODUCTION_STATUS.md)** - Current deployment status
- **[API Documentation](docs/API_DOCUMENTATION.md)** - API endpoint reference
- **[Architecture](docs/ARCHITECTURE.md)** - System design and patterns
- **[Documentation Index](docs/INDEX.md)** - Complete documentation map
- **[Adding Supplements](docs/ADDING_SUPPLEMENTS.md)** - How to add new supplements

### Archives
- **[v0.4.1 Glossary Migration](.archive/v0.4.1-glossary-migration/README.md)** - Glossary backend migration artifacts
- **[v0.3 Migration](.archive/v0.3-migration/README.md)** - Database migration artifacts
- **[Deployment Artifacts](.archive/deployment-artifacts/README.md)** - Deployment troubleshooting docs

---

## Project Overview

Evidence-based supplement information platform built with **Next.js 16 App Router**, **React 19**, and **Supabase PostgreSQL**.

### Key Features
- 🔬 Evidence-based supplement information (17 supplements)
- 💰 Price comparison across 7 retailers (11,837 prices)
- 📊 1,691 products with DSLD database integration
- 📚 197 glossary terms in Supabase database
- 🔍 Full-text search and advanced filtering
- 📱 Fully responsive, production-ready design
- 📈 Complete analytics integration (GTM + GA4)
- ⚡ 7 RESTful API endpoints with Supabase backend

### Architecture
- **Frontend:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4
- **Backend:** Supabase (PostgreSQL) with 5 tables, optimized views
- **Hosting:** Vercel (frontend) + Supabase (database)
- **Analytics:** Google Tag Manager + Google Analytics 4
- **Build:** Static Site Generation (SSG) for 1,936 pages

## Documentation Structure

### 📖 Guides
- **[Scraper System](docs/guides/SCRAPER-SYSTEM.md)** - How the scraping system works
- **[Normalization](docs/guides/NORMALIZATION.md)** - Data normalization process
- **[Bodybuilding.com Fix](docs/guides/BODYBUILDING-FIX.md)** - Recent parsing bug fix

### 📋 Reference
- **[Bot Protection](docs/reference/BOT-PROTECTION.md)** - Handling anti-bot measures
- **[Cookie Auth](docs/reference/COOKIE-AUTH.md)** - Cookie-based authentication
- **[Retailer Fixes](docs/reference/RETAILER-FIXES.md)** - Retailer-specific fixes
- **[Product Filtering](docs/reference/PRODUCT-FILTERING.md)** - Filtering logic
- **[Walmart Scraper](docs/reference/WALMART-SCRAPER.md)** - Walmart-specific notes

### 🗂️ Archive
Historical analysis and fix documentation: [docs/archive/](docs/archive/)

## Project Structure

```
├── docs/                          Documentation
│   ├── guides/                    Active guides
│   ├── reference/                 Reference material
│   └── archive/                   Historical docs
│
├── data-pipeline/                 Product data & outputs
│   ├── input/
│   │   ├── scraped-data/         Raw scraped data
│   │   └── existing-data/        Pre-existing datasets
│   ├── output/
│   │   ├── step1-normalized/     Normalized & enriched
│   │   └── step2-filtered/       Final filtered dataset
│   └── temp/                      Temporary files
│
├── scripts/                       All automation scripts
│   ├── data-pipeline/            Product data processing
│   │   ├── scraping/             Scraper orchestration
│   │   ├── normalization/        Data normalization
│   │   └── utilities/            Maintenance tools
│   ├── database/                  DSLD database
│   ├── web-build/                 Frontend build (separate)
│   ├── lib/                       Shared libraries
│   ├── scrapers/                  Individual retailer scrapers
│   └── archive/                   Obsolete scripts
│
├── products.db                    SQLite DSLD database
├── migrations/                    Database migrations
│
├── src/                           Frontend source (public)
├── api/                           API endpoints (public)
├── public/                        Public assets
│
└── [config files]                 Project configuration
```

## Product Data Pipeline

### 1. Data Collection

```bash
# Scrape all supplements from retailers
npx tsx scripts/data-pipeline/scraping/run-all-supplements.ts

# Output: data-pipeline/input/scraped-data/
```

### 2. Normalization & Enrichment

```bash
# Normalize product data and enrich with DSLD
npx tsx scripts/data-pipeline/normalization/step1-normalize-and-enrich.ts

# Output: data-pipeline/output/step1-normalized/
```

### 3. Filtering

```bash
# Filter products by relevance
npx tsx scripts/data-pipeline/normalization/step1.2-filter-by-relevance.ts

# Output: data-pipeline/output/step2-filtered/
```

### 4. Brand Extraction & Cleaning

```bash
# Extract brands and clean product names
npx tsx scripts/data-pipeline/brand-extraction/step3-extract-brands.ts

# Output: data-pipeline/output/step3-branded/
```

### 5. Name Normalization

```bash
# Normalize product names for matching
npx tsx scripts/data-pipeline/name-normalization/step4-normalize-names.ts

# Output: data-pipeline/output/step4-normalized/
```

### Data Flow

```
Raw Data (Retailers) 
    ↓
[Scraping] → data-pipeline/input/scraped-data/
    ↓
[Normalization] → data-pipeline/output/step1-normalized/
    ↓
[Filtering] → data-pipeline/output/step2-filtered/
    ↓
[Brand Extraction] → data-pipeline/output/step3-branded/
    ↓
[Name Normalization] → data-pipeline/output/step4-normalized/
    ↓
Final Processed Dataset
```

## Database (DSLD)

The project uses the DSLD (Dietary Supplement Label Database) for enrichment:

```bash
# Initialize database
npx tsx scripts/database/init-database.ts

# Import DSLD data
npx tsx scripts/database/import-dsld-to-sqlite.ts

# Query database
npx tsx scripts/database/query-dsld.ts "ashwagandha"
```

Database location: `products.db`

## Utilities

```bash
# Inspect filtered products
npx tsx scripts/data-pipeline/utilities/inspect-excluded-products.ts

# Fix Bodybuilding.com data issues
npx tsx scripts/data-pipeline/utilities/fix-and-reprocess-bodybuilding-data.ts

# Test scraper fixes
npx tsx scripts/data-pipeline/utilities/test-bodybuilding-fix.ts
```

## Retailers Supported

- **Bodybuilding.com** - Puppeteer scraper with image capture
- **GNC** - ScraperAPI scraper
- **Walmart** - ScraperAPI scraper  
- **Supplement Warehouse** - Puppeteer scraper
- **iHerb** - Pre-existing dataset
- **Vitacost** - Pre-existing dataset

## Configuration

- **.env** - Environment variables (not in git)
- **.env.example** - Example configuration
- **tsconfig.json** - TypeScript configuration
- **package.json** - Dependencies and scripts

## Recent Updates

### ✅ Version 0.5.0 - Supplement Content Migration (Nov 29, 2025)
- Migrated supplement content to Supabase for SEO-optimized product pages
- Added 14 new columns to `api.supplements` table for rich content
- Generates unique 400+ word paragraphs for each product page
- Dynamic content based on form type (capsule, powder, gummy, liquid)
- Hash-based template selection for content uniqueness
- Parallel API fetch in ProductDetailClient for performance
- See [CHANGELOG.md](CHANGELOG.md) for full details

### ✅ Version 0.4.1 - Glossary Backend Complete (Dec 2024)
- Migrated 197 glossary terms to Supabase database
- Added 2 new API endpoints (GET /api/glossary)
- Archived migration scripts and documentation
- Clean workspace with active utilities only

### ✅ Version 0.4.0 - Workspace Cleanup (Nov 27, 2025)
- Archived all migration scripts and documentation
- Cleaned up temporary deployment troubleshooting docs
- Created comprehensive archive structure
- Updated to clean, production-ready workspace

### ✅ Version 0.3.0 - Database Migration (Nov 26-27, 2025)
- Migrated from static JSON to Supabase PostgreSQL
- Built 5 RESTful API endpoints
- Deployed to production (all endpoints operational)
- Enriched data with filters, metadata, DSLD integration

### ✅ Version 0.2.0 - UI Refinement (Nov 2025)
- Production-ready UI with polished components
- Complete analytics integration (22 events)
- SEO optimization (structured data, sitemaps)
- 1,936 pages with zero build errors

## Development

```bash
# Install dependencies
npm install

# Run full pipeline
npx tsx scripts/data-pipeline/scraping/run-all-supplements.ts
npx tsx scripts/data-pipeline/normalization/step1-normalize-and-enrich.ts
npx tsx scripts/data-pipeline/normalization/step1.2-filter-by-relevance.ts
```

## Version History

**Current:** v0.4.1 - Glossary backend complete  
**Previous:** v0.4.0 - Clean, production-ready workspace  
**See:** [CHANGELOG.md](CHANGELOG.md) for complete version history

---

## Important Notes

⚠️ **Migration Artifacts**: All migration scripts and documentation have been archived in `.archive/`. They are preserved for reference but no longer needed for active development.

📊 **Data Pipeline**: Internal scraping scripts (in `scripts/data-pipeline/`) are for product data collection only. They are not deployed to production and run separately from the web application.

🔍 **Production Backend**: The site runs on Supabase PostgreSQL with real-time API endpoints. All 197 glossary terms are now database-driven.

---

For detailed information, refer to:
- **[Documentation Index](docs/INDEX.md)** - Complete documentation map
- **[API Documentation](docs/API_DOCUMENTATION.md)** - API reference
- **[Architecture](docs/ARCHITECTURE.md)** - System design
- **[CHANGELOG](CHANGELOG.md)** - Version history
