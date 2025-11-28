# Scripts Directory

Organized scripts for product data processing, database utilities, and web development.

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
├── migration/             Database utilities (validation & testing)
│   ├── validate-glossary-data.mjs
│   ├── test-glossary-api.mjs
│   └── README.md
├── web-build/             Frontend build scripts
│   └── README.md
├── indexing/              SEO & search engine indexing
│   └── submit-to-indexnow.mjs
├── public/                Public data files
├── lib/                   Shared libraries
└── .archive-cleanup-nov25/ Archived cleanup scripts
```

## Quick Start

### Database Utilities

```bash
# Validate glossary database
node scripts/migration/validate-glossary-data.mjs

# Test glossary API endpoints
node scripts/migration/test-glossary-api.mjs

# Query DSLD database
npx tsx database/query-dsld.ts "ashwagandha"
```

### Product Data Pipeline

```bash
# 1. Scrape product data
npx tsx data-pipeline/scraping/run-all-supplements.ts

# 2. Normalize & enrich
npx tsx data-pipeline/normalization/step1-normalize-and-enrich.ts

# 3. Filter by relevance
npx tsx data-pipeline/normalization/step1.2-filter-by-relevance.ts
```

### Web Build

```bash
# Generate structured data
node web-build/build-structured-data.mjs

# Submit URLs to IndexNow
node indexing/submit-to-indexnow.mjs
```

## Archived Scripts

Migration and deployment scripts have been archived:
- **[v0.4.1 Glossary Migration](../.archive/v0.4.1-glossary-migration/scripts/)** - 9 migration/deployment scripts
- **[v0.3 Migration](../.archive/v0.3-migration/scripts/)** - 27 database migration scripts

See archive README files for details.

## See Also

- [data-pipeline/README.md](data-pipeline/README.md) - Product data processing
- [database/README.md](database/README.md) - DSLD database
- [web-build/README.md](web-build/README.md) - Frontend build scripts
