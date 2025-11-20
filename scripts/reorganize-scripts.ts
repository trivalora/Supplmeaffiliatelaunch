#!/usr/bin/env tsx
/**
 * Scripts Folder Reorganization
 * 
 * Organizes scripts into a clear structure:
 * - data-pipeline/ - All product data scraping & processing
 * - database/ - DSLD database setup & queries
 * - web-build/ - Frontend build scripts (not for product data)
 */

import * as fs from 'fs';
import * as path from 'path';

const scriptsDir = __dirname;

console.log('\n╔═══════════════════════════════════════════════════════════╗');
console.log('║         SCRIPTS FOLDER REORGANIZATION                     ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

// Create new directory structure
const newDirs = [
  'data-pipeline',
  'data-pipeline/scraping',
  'data-pipeline/normalization',
  'data-pipeline/utilities',
  'database',
  'web-build'
];

console.log('📁 Creating Directory Structure\n');
for (const dir of newDirs) {
  const dirPath = path.join(scriptsDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`   ✅ Created: scripts/${dir}/`);
  }
}

// Move files to organized structure
const fileMoves = [
  // Data Pipeline - Scraping
  { from: 'run-all-supplements.ts', to: 'data-pipeline/scraping/run-all-supplements.ts', category: 'scraping' },
  { from: 'run-four-scrapers.ts', to: 'data-pipeline/scraping/run-four-scrapers.ts', category: 'scraping' },
  { from: 'scrape-retailers.ts', to: 'data-pipeline/scraping/scrape-retailers.ts', category: 'scraping' },
  { from: 'postprocess-scrape.ts', to: 'data-pipeline/scraping/postprocess-scrape.ts', category: 'scraping' },
  
  // Data Pipeline - Normalization
  { from: 'step1-normalize-and-enrich.ts', to: 'data-pipeline/normalization/step1-normalize-and-enrich.ts', category: 'normalization' },
  { from: 'step1.2-filter-by-relevance.ts', to: 'data-pipeline/normalization/step1.2-filter-by-relevance.ts', category: 'normalization' },
  { from: 'normalize-all-supplements.ts', to: 'data-pipeline/normalization/normalize-all-supplements.ts', category: 'normalization' },
  { from: 'normalize-dsld-and-join.ts', to: 'data-pipeline/normalization/normalize-dsld-and-join.ts', category: 'normalization' },
  
  // Data Pipeline - Utilities
  { from: 'fix-and-reprocess-bodybuilding-data.ts', to: 'data-pipeline/utilities/fix-and-reprocess-bodybuilding-data.ts', category: 'utilities' },
  { from: 'test-bodybuilding-fix.ts', to: 'data-pipeline/utilities/test-bodybuilding-fix.ts', category: 'utilities' },
  { from: 'inspect-excluded-products.ts', to: 'data-pipeline/utilities/inspect-excluded-products.ts', category: 'utilities' },
  { from: 'cleanup-and-organize.ts', to: 'data-pipeline/utilities/cleanup-and-organize.ts', category: 'utilities' },
  
  // Database
  { from: 'init-database.ts', to: 'database/init-database.ts', category: 'database' },
  { from: 'import-dsld-to-sqlite.ts', to: 'database/import-dsld-to-sqlite.ts', category: 'database' },
  { from: 'query-dsld.ts', to: 'database/query-dsld.ts', category: 'database' },
  
  // Web Build (frontend-only, separate from product data)
  { from: 'build-structured-data.mjs', to: 'web-build/build-structured-data.mjs', category: 'web' },
  { from: 'cache-remote-images.mjs', to: 'web-build/cache-remote-images.mjs', category: 'web' },
  { from: 'generate-sitemap.mjs', to: 'web-build/generate-sitemap.mjs', category: 'web' },
  { from: 'optimize-images.mjs', to: 'web-build/optimize-images.mjs', category: 'web' },
  { from: 'report-bundle.mjs', to: 'web-build/report-bundle.mjs', category: 'web' },
  { from: 'run-migrations.mjs', to: 'web-build/run-migrations.mjs', category: 'web' },
  { from: 'subset-fonts.mjs', to: 'web-build/subset-fonts.mjs', category: 'web' },
];

console.log('\n📝 Reorganizing Scripts\n');

const movesByCategory: Record<string, number> = {};

for (const move of fileMoves) {
  const fromPath = path.join(scriptsDir, move.from);
  const toPath = path.join(scriptsDir, move.to);
  
  if (fs.existsSync(fromPath)) {
    fs.renameSync(fromPath, toPath);
    console.log(`   ✅ Moved: ${move.from} → ${move.to}`);
    movesByCategory[move.category] = (movesByCategory[move.category] || 0) + 1;
  } else {
    console.log(`   ⏭️  Skip: ${move.from} (not found)`);
  }
}

// Create README files for each category
console.log('\n📚 Creating Category READMEs\n');

const readmes = [
  {
    path: 'data-pipeline/README.md',
    content: `# Data Pipeline Scripts

Product data scraping,  processing, normalization, and filtering.

## Directory Structure

### scraping/
Scripts for scraping product data from retailers.

- **run-all-supplements.ts** - Run scrapers for all supplement types
- **run-four-scrapers.ts** - Run specific retailer scrapers
- **scrape-retailers.ts** - Core scraping orchestration
- **postprocess-scrape.ts** - Post-process scraped data

### normalization/
Scripts for normalizing and enriching product data.

- **step1-normalize-and-enrich.ts** - Main normalization script
- **step1.2-filter-by-relevance.ts** - Filter products by relevance
- **normalize-all-supplements.ts** - Batch normalization
- **normalize-dsld-and-join.ts** - DSLD data integration

### utilities/
Helper scripts for data pipeline maintenance.

- **fix-and-reprocess-bodybuilding-data.ts** - Fix Bodybuilding.com data issues
- **test-bodybuilding-fix.ts** - Test scraper fixes
- **inspect-excluded-products.ts** - Analyze filtered products
- **cleanup-and-organize.ts** - Project cleanup

## Usage

\`\`\`bash
# Scrape all supplements
npx tsx data-pipeline/scraping/run-all-supplements.ts

# Normalize scraped data
npx tsx data-pipeline/normalization/step1-normalize-and-enrich.ts

# Filter by relevance
npx tsx data-pipeline/normalization/step1.2-filter-by-relevance.ts
\`\`\`

## Data Flow

1. **Scraping** → \`data-pipeline/input/scraped-data/\`
2. **Normalization** → \`data-pipeline/output/step1-normalized/\`
3. **Filtering** → \`data-pipeline/output/step2-filtered/\`
`
  },
  {
    path: 'database/README.md',
    content: `# Database Scripts

DSLD (Dietary Supplement Label Database) setup and querying.

## Scripts

- **init-database.ts** - Initialize SQLite database
- **import-dsld-to-sqlite.ts** - Import DSLD data into database
- **query-dsld.ts** - Query DSLD database

## Usage

\`\`\`bash
# Initialize database
npx tsx database/init-database.ts

# Import DSLD data
npx tsx database/import-dsld-to-sqlite.ts

# Query database
npx tsx database/query-dsld.ts <product_name>
\`\`\`

## Database Location

The SQLite database is created at: \`products.db\`
`
  },
  {
    path: 'web-build/README.md',
    content: `# Web Build Scripts

Frontend build and optimization scripts.

**Note:** These scripts are for the public-facing website, NOT for product data processing.

## Scripts

- **build-structured-data.mjs** - Build structured data for SEO
- **cache-remote-images.mjs** - Cache remote images locally
- **generate-sitemap.mjs** - Generate sitemap.xml
- **optimize-images.mjs** - Optimize images for web
- **report-bundle.mjs** - Analyze bundle size
- **run-migrations.mjs** - Run database migrations
- **subset-fonts.mjs** - Subset fonts for performance

## Usage

These scripts are typically run as part of the build process, not manually.
`
  }
];

for (const readme of readmes) {
  const readmePath = path.join(scriptsDir, readme.path);
  fs.writeFileSync(readmePath, readme.content);
  console.log(`   ✅ Created: scripts/${readme.path}`);
}

// Update main scripts README
const mainReadme = `# Scripts Directory

Organized scripts for product data processing and web development.

## Directory Structure

\`\`\`
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
\`\`\`

## Quick Start

### Product Data Pipeline

\`\`\`bash
# 1. Scrape product data
npx tsx data-pipeline/scraping/run-all-supplements.ts

# 2. Normalize & enrich
npx tsx data-pipeline/normalization/step1-normalize-and-enrich.ts

# 3. Filter by relevance
npx tsx data-pipeline/normalization/step1.2-filter-by-relevance.ts
\`\`\`

### Database

\`\`\`bash
# Query DSLD database
npx tsx database/query-dsld.ts "ashwagandha"
\`\`\`

## See Also

- [data-pipeline/README.md](data-pipeline/README.md) - Product data processing
- [database/README.md](database/README.md) - DSLD database
- [web-build/README.md](web-build/README.md) - Frontend build scripts
`;

fs.writeFileSync(path.join(scriptsDir, 'README.md'), mainReadme);
console.log(`   ✅ Updated: scripts/README.md`);

console.log('\n\n╔═══════════════════════════════════════════════════════════╗');
console.log('║           REORGANIZATION COMPLETE                         ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

console.log('📊 Summary:');
console.log(`   Scraping scripts: ${movesByCategory.scraping || 0}`);
console.log(`   Normalization scripts: ${movesByCategory.normalization || 0}`);
console.log(`   Utility scripts: ${movesByCategory.utilities || 0}`);
console.log(`   Database scripts: ${movesByCategory.database || 0}`);
console.log(`   Web build scripts: ${movesByCategory.web || 0}\n`);

console.log('📁 New Structure:');
console.log('   scripts/data-pipeline/  - All product data processing');
console.log('   scripts/database/       - DSLD database');
console.log('   scripts/web-build/      - Frontend build (separate)');
console.log('   scripts/lib/            - Shared libraries');
console.log('   scripts/scrapers/       - Individual scrapers\n');
