# Scripts Directory

Organized scripts for product data processing and web development.

## Directory Structure

```
scripts/
├── data-pipeline/          Product data scraping & processing
│   ├── scraping/          Scrape retailers for product data
│   ├── normalization/     Normalize & enrich data
│   ├── utilities/         Maintenance & testing
│   └── README.md
├── database/              DSLD database setup & queries
│   └── README.md
├── web-build/             Frontend build scripts (NOT product data)
│   └── README.md
├── lib/                   Shared libraries
│   ├── product-filter.ts
│   ├── brand-extractor.ts
│   ├── brand-synonyms.ts
│   ├── dsld-enrichment.ts
│   ├── matcher.ts
│   ├── types.ts
│   ├── db-helper.ts
│   └── review-outputs.ts
├── scrapers/              Individual retailer scrapers
│   ├── bodybuilding-price-scrape-puppeteer.ts
│   ├── gnc-price-scrape-scraperapi.ts
│   ├── walmart-price-scrape-scraperapi.ts
│   ├── supplement-warehouse-price-scrape-puppeteer.ts
│   └── scraperapi.ts
└── archive/               Obsolete scripts
```

## Quick Start

### Product Data Pipeline

```bash
# 1. Scrape product data
npx tsx data-pipeline/scraping/run-all-supplements.ts

# 2. Normalize & enrich
npx tsx data-pipeline/normalization/step1-normalize-and-enrich.ts

# 3. Filter by relevance
npx tsx data-pipeline/normalization/step1.2-filter-by-relevance.ts
```

### Database

```bash
# Query DSLD database
npx tsx database/query-dsld.ts "ashwagandha"
```

## See Also

- [data-pipeline/README.md](data-pipeline/README.md) - Product data processing
- [database/README.md](database/README.md) - DSLD database
- [web-build/README.md](web-build/README.md) - Frontend build scripts
