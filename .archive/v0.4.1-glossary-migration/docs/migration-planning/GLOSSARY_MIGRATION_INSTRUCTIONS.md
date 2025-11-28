# Glossary Migration - Manual Application Guide

**Date:** November 27, 2025  
**Migration File:** `supabase/migrations/20251127120000_seed_glossary_terms.sql`  
**Status:** ✅ SQL Generated, Ready to Apply

---

## Quick Summary

- **197 glossary terms** extracted from React components
- **138 KB SQL file** generated with INSERT statements
- **No errors** during extraction
- **Ready to apply** to production database

---

## How to Apply the Migration

### ✅ METHOD 1: Supabase SQL Editor (RECOMMENDED)

**Steps:**
1. Open Supabase SQL Editor:  
   https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk/sql/new

2. Open the SQL file:  
   `/Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch/supabase/migrations/20251127120000_seed_glossary_terms.sql`

3. Copy ALL contents of the file (⌘+A, ⌘+C)

4. Paste into the SQL Editor

5. Click **"Run"** button (bottom right)

6. Wait for success message (~30-60 seconds)

7. Verify: You should see "Success. No rows returned."

8. Run validation:
   ```bash
   node scripts/migration/validate-glossary-data.mjs
   ```

---

### METHOD 2: Using psql (If you have direct database access)

```bash
# Get your connection string from Supabase dashboard
# Settings → Database → Connection string (Direct connection)

psql "postgresql://postgres:[YOUR-PASSWORD]@db.rdraqlnxypwlhkhngyjk.supabase.co:5432/postgres" \
  -f supabase/migrations/20251127120000_seed_glossary_terms.sql
```

---

### METHOD 3: Supabase CLI (Requires project link)

```bash
# Link to remote project
npx supabase link --project-ref rdraqlnxypwlhkhngyjk

# Push migration
npx supabase db push

# Note: This pushes ALL pending migrations
```

---

## After Migration

### 1. Validate Data

Run the validation script to ensure all 197 terms were inserted:

```bash
node scripts/migration/validate-glossary-data.mjs
```

**Expected Output:**
```
✅ Total terms: 197
✅ All terms have required fields
✅ No duplicate slugs
✅ 60 terms have abbreviations
✅ 39 terms have related terms
```

### 2. Test API Endpoints

```bash
# Start dev server (if not running)
npm run dev

# Test endpoints
curl http://localhost:3000/api/glossary | jq '.total'
# Expected: 197

curl http://localhost:3000/api/glossary/rct | jq '.term.term'
# Expected: "Randomized Controlled Trial"

curl "http://localhost:3000/api/glossary?search=clinical" | jq '.terms | length'
# Expected: Multiple results
```

### 3. Update Documentation

After successful migration, update:
- ✅ `docs/API_DOCUMENTATION.md` - Add note that endpoints have real data
- ✅ `CHANGELOG.md` - Add entry for glossary data migration
- ✅ `.github/copilot-instructions.md` - Update stats (197 terms in database)

---

## Troubleshooting

### Issue: "relation does not exist"
**Solution:** The `api.glossary_terms` table wasn't created yet. Run:
```sql
-- Check if table exists
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'api' AND table_name = 'glossary_terms';

-- If not, create it first using:
-- supabase/migrations/20251126000001_create_tables.sql
```

### Issue: "duplicate key value violates unique constraint"
**Solution:** Table already has data. Clear it first:
```sql
BEGIN;
DELETE FROM api.glossary_terms;
COMMIT;
-- Then re-run the seed migration
```

### Issue: "permission denied"
**Solution:** You need service_role or postgres role. Check your credentials.

---

## Migration File Details

**File:** `supabase/migrations/20251127120000_seed_glossary_terms.sql`  
**Size:** 138.26 KB  
**Lines:** 4,288  
**Inserts:** 197 terms + related terms updates

**Structure:**
1. BEGIN transaction
2. Disable triggers (for speed)
3. 197 INSERT statements (alphabetically sorted)
4. UPDATE statements for related_terms (linking)
5. Re-enable triggers
6. COMMIT transaction
7. Verification query

---

## What Gets Inserted

### Required Fields (All 197 terms)
- ✅ `slug` - URL-safe identifier
- ✅ `term` - Display name
- ✅ `definition` - Short explanation

### Optional Fields
- ✅ `abbreviation` - 60 terms have this
- ✅ `expanded_explanation` - 4 terms have detailed content
- ✅ `meta_title` - 197 terms (auto-generated)
- ✅ `meta_description` - 197 terms (from route config)
- ✅ `related_terms` - 39 terms have links to other terms

### Example Inserted Data

```sql
INSERT INTO api.glossary_terms (
  slug,
  term,
  abbreviation,
  definition,
  meta_title,
  meta_description
) VALUES (
  'rct',
  'Randomized Controlled Trial',
  'RCT',
  'A type of scientific experiment that randomly assigns participants...',
  'Randomized Controlled Trial - Suppl.me Glossary',
  'A type of scientific experiment that randomly assigns participants...'
);
```

---

## Next Steps After Migration

1. ✅ Validate data (197 terms)
2. ✅ Test API endpoints
3. ✅ Update documentation
4. ⏳ **(Future)** Migrate frontend components to use API
5. ⏳ **(Future)** Add admin UI for managing terms
6. ⏳ **(Future)** Implement full-text search UI

---

## Support

If you encounter issues:
1. Check Supabase dashboard logs
2. Run validation script for diagnostics
3. Review migration file for syntax errors
4. Contact support with error messages

---

**Status:** ✅ Ready to Apply  
**Last Updated:** November 27, 2025  
**Next Action:** Apply migration via Supabase SQL Editor
