# Database Scripts

Scripts for direct database operations, fixes, and data maintenance.

## Contents (3 scripts)

### Data Fixes
- `fix-osteomalacia-typo.mjs` - Fixed typo in glossary term (osteomalach → osteomalacia)

### Data Cleanup
- `delete-knowledgebase-from-glossary.mjs` - Remove supplement entries from glossary table

### Data Updates
- `fix-glossary-seo.mjs` - Batch update glossary SEO metadata

## Usage

All scripts connect directly to Supabase using service role key:

```bash
node scripts/database/[script-name].mjs
```

## ⚠️ Important Notes

- These scripts modify database data directly
- Always verify queries before running in production
- Service role key required (not anon key)
- Most are one-time fixes that have already been applied

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx
```

## Database Schema

Scripts operate on the `api` schema (not `public`):
- `api.glossary_terms`
- `api.supplements`
- `api.products`
