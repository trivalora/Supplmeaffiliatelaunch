# Analysis Scripts

Utility scripts for analyzing and auditing data, content, and system state.

## Contents (16 scripts)

### Glossary Analysis
- `analyze-glossary-content.mjs` - Analyze glossary term content quality
- `check-glossary-seo.mjs` - Audit glossary SEO metadata
- `check-broken-terms.mjs` - Find broken glossary term links
- `get-first-10-terms.mjs` - Sample first 10 glossary terms
- `view-sample-terms.mjs` - View sample glossary data
- `comprehensive-slug-audit.mjs` - Complete slug validation audit
- `verify-seo-fixes.mjs` - Verify SEO fixes were applied

### Image Analysis
- `check-image-stats.mjs` - Image usage statistics
- `check-images.mjs` - Image file validation
- `analyze-mapping.mjs` - Analyze image mapping data
- `compare-vitacost-urls.mjs` - Compare Vitacost URL formats

### Product Analysis
- `check-key-points.mjs` - Validate product key points
- `check-products-schema.mjs` - Validate product schema

### Content Audits
- `audit-meta-descriptions.mjs` - Audit meta description quality
- `check-hardcoded-links.mjs` - Find hardcoded links in code
- `test-format.mjs` - Test data formatting

## Usage

All scripts use ES modules and expect to be run from the project root:

```bash
node scripts/analysis/[script-name].mjs
```

Most scripts connect to Supabase and require `.env.local` with database credentials.

## Dependencies

- `@supabase/supabase-js` - Database access
- `dotenv` - Environment variables
- Node.js 22+ with ES modules support
