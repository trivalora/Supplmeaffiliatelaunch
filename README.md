# Suppl.me Affiliate Launch - Product Data Pipeline

## Project Overview
Complete internal pipeline for supplement product data scraping, normalization, and filtering.

**Note:** This is an internal data processing project. Scraping and data pipeline scripts are NOT deployed publicly.

## Quick Start
See [docs/QUICK-START-GUIDE.md](docs/QUICK-START-GUIDE.md) for getting started.

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

## Recent Improvements

### ✅ Bodybuilding.com Fix (Nov 2024)
- Fixed product name parsing (removed HTML markup)
- Added image URL capture
- 75% of products cleaned

### ✅ Project Organization (Nov 2024)
- Reorganized all documentation
- Clean data pipeline structure
- Separated web build from data processing
- Comprehensive README files

## Development

```bash
# Install dependencies
npm install

# Run full pipeline
npx tsx scripts/data-pipeline/scraping/run-all-supplements.ts
npx tsx scripts/data-pipeline/normalization/step1-normalize-and-enrich.ts
npx tsx scripts/data-pipeline/normalization/step1.2-filter-by-relevance.ts
```

## Important Notes

⚠️ **Internal Use Only**: Scraping scripts and data pipeline are for internal product data collection only. Not deployed to production.

📊 **Data Quality**: Low retention rates from some retailers (e.g., Bodybuilding.com: 452→1 ashwagandha products) is correct - their search returns generic popular products instead of relevant supplements.

🔍 **Image Support**: All scrapers now capture product images which flow through the entire pipeline.

---

For detailed information, refer to documentation in the `docs/` directory and script-specific READMEs in `scripts/`.
