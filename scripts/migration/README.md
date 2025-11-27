# Migration Scripts

## Glossary Database Utilities

These scripts help maintain and validate the glossary database.

### validate-glossary-data.mjs

Validates the glossary database content and structure:
- Checks for terms with missing content
- Verifies related_terms UUID references
- Validates SEO metadata completeness
- Reports statistics on abbreviations, examples, etc.

**Usage:**
```bash
node scripts/migration/validate-glossary-data.mjs
```

**Expected output:**
```
✅ All 197 terms have complete content
✅ All 27 related terms have valid UUID references
✅ 187 terms have SEO metadata (94.9%)
```

### test-glossary-api.mjs

Tests the glossary API endpoints:
- `/api/glossary` - List endpoint with pagination and search
- `/api/glossary/[slug]` - Single term endpoint

**Usage:**
```bash
# Start dev server first
npm run dev

# Then run tests (in another terminal)
node scripts/migration/test-glossary-api.mjs
```

**Tests:**
- List all terms
- Pagination
- Search functionality
- Single term retrieval
- Error handling (404s)

---

## Database Management

All glossary terms are stored in Supabase PostgreSQL:

**Schema:** `api.glossary_terms`
**Location:** Supabase project (see `.env.local` for credentials)

### Adding New Glossary Terms

Use SQL INSERT via Supabase dashboard or psql:

```sql
INSERT INTO api.glossary_terms (
  slug,
  term,
  definition,
  expanded_explanation,
  examples,
  meta_title,
  meta_description
) VALUES (
  'new-term-slug',
  'New Term',
  'Brief definition...',
  'Detailed explanation...',
  ARRAY['Example 1', 'Example 2'],
  'New Term - Suppl.me Glossary',
  'SEO description...'
);
```

### Updating Existing Terms

```sql
UPDATE api.glossary_terms
SET 
  definition = 'Updated definition...',
  expanded_explanation = 'Updated explanation...',
  updated_at = CURRENT_TIMESTAMP
WHERE slug = 'term-slug';
```

### Querying Terms

```sql
-- Count all terms
SELECT COUNT(*) FROM api.glossary_terms;

-- Find terms missing content
SELECT slug, term 
FROM api.glossary_terms 
WHERE expanded_explanation IS NULL;

-- Search terms
SELECT slug, term, definition 
FROM api.glossary_terms 
WHERE term ILIKE '%protein%' 
   OR definition ILIKE '%protein%';
```
