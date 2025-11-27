# Week 1-2 Implementation Guide: Database Setup & Schema

**Status**: 🚀 IN PROGRESS  
**Phase**: Database Migration - Week 1-2  
**Timeline**: 20 hours (8h setup + 12h implementation)  
**Date Started**: November 26, 2025

---

## ✅ Completed Tasks

### Phase 1A: Project Setup (Completed)
- [x] Install Supabase client library (`@supabase/supabase-js`)
- [x] Initialize Supabase in project (`npx supabase init`)
- [x] Create migration files (4 migrations)
- [x] Create Supabase client files (client.ts, server.ts, types.ts)

### Files Created
```
✅ supabase/
   ├── config.toml (auto-generated)
   └── migrations/
       ├── 20251126000001_create_tables.sql
       ├── 20251126000002_create_indexes.sql
       ├── 20251126000003_create_views_and_functions.sql
       └── 20251126000004_seed_retailers.sql

✅ lib/supabase/
   ├── client.ts     # Browser Supabase client
   ├── server.ts     # Server-side client
   └── types.ts      # TypeScript database types
```

---

## 🔄 Next Steps

### Phase 1B: Supabase Account Setup (30 minutes)

1. **Create Supabase Account**
   - Go to https://supabase.com
   - Sign up (free tier is sufficient)
   - Confirm email

2. **Create New Project**
   - Click "New Project"
   - Organization: Create new or use existing
   - Project name: `supplme-production` (or your choice)
   - Database password: **Save this securely!**
   - Region: Choose closest to your users (e.g., `us-east-1`)
   - Pricing plan: Free tier
   - Click "Create new project"
   - Wait ~2 minutes for provisioning

3. **Get Project Credentials**
   Navigate to Project Settings → API:
   - **Project URL**: `https://xxx.supabase.co`
   - **Anon/Public Key**: `eyJhbGciOi...` (public, safe for browser)
   - **Service Role Key**: `eyJhbGciOi...` (secret, server-only)

### Phase 1C: Configure Environment Variables (5 minutes)

Create `.env.local` in project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Database URL (for direct connections if needed)
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres
```

**⚠️ IMPORTANT**:
- Never commit `.env.local` to git (already in .gitignore)
- Keep `SUPABASE_SERVICE_ROLE_KEY` secret
- `NEXT_PUBLIC_*` vars are safe for browser

### Phase 1D: Link Local to Remote Project (5 minutes)

```bash
# Link your local project to Supabase
npx supabase link --project-ref <your-project-ref>

# Your project ref is the subdomain from your project URL:
# https://abcdefghijk.supabase.co
#        ^^^^^^^^^^^
#        project-ref
```

When prompted:
- Database password: Enter the password you set when creating the project
- Would you like to save this password? `Y` (recommended)

### Phase 1E: Run Database Migrations (10 minutes)

```bash
# Push migrations to remote database
npx supabase db push

# This will:
# 1. Create all 5 tables (supplements, retailers, products, prices, glossary_terms)
# 2. Add all indexes for performance
# 3. Create views and functions
# 4. Seed retailers data (7 retailers)
```

**Expected Output**:
```
Applying migration 20251126000001_create_tables.sql...
Applying migration 20251126000002_create_indexes.sql...
Applying migration 20251126000003_create_views_and_functions.sql...
Applying migration 20251126000004_seed_retailers.sql...
Finished supabase db push.
```

### Phase 1F: Verify Database Setup (10 minutes)

1. **Open Supabase Dashboard**
   - Go to https://supabase.com/dashboard
   - Select your project
   - Navigate to "Table Editor"

2. **Verify Tables Created**
   You should see:
   - [ ] `supplements` (0 rows - will be populated in Week 2)
   - [ ] `retailers` (7 rows - seeded)
   - [ ] `products` (0 rows - will be populated in Week 2)
   - [ ] `prices` (0 rows - will be populated in Week 2)
   - [ ] `glossary_terms` (0 rows - will be populated in Week 2)

3. **Check Retailers Data**
   ```sql
   -- Run in Supabase SQL Editor
   SELECT slug, name, is_active, priority 
   FROM retailers 
   ORDER BY priority;
   ```

   Expected result (7 rows):
   ```
   iherb               | iHerb               | true | 1
   amazon              | Amazon              | true | 2
   vitacost            | Vitacost            | true | 3
   gnc                 | GNC                 | true | 4
   walmart             | Walmart             | true | 5
   bodybuilding        | Bodybuilding.com    | true | 6
   supplement-warehouse| Supplement Warehouse| true | 7
   ```

4. **Verify Views Created**
   Navigate to Database → Views:
   - [ ] `product_details_view`
   - [ ] `supplement_summary_view`

5. **Verify Functions Created**
   Navigate to Database → Functions:
   - [ ] `update_updated_at_column()`
   - [ ] `get_products_by_supplement()`

6. **Test Supabase Connection** (optional)
   ```bash
   # Create a test file
   cat > test-supabase.js << 'EOF'
   import { createClient } from '@supabase/supabase-js';
   
   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
   const supabase = createClient(supabaseUrl, supabaseKey);
   
   const { data, error } = await supabase.from('retailers').select('*');
   
   if (error) {
     console.error('Error:', error);
   } else {
     console.log('Success! Retrieved', data.length, 'retailers');
     console.log(data);
   }
   EOF
   
   # Run test
   node --input-type=module test-supabase.js
   
   # Clean up
   rm test-supabase.js
   ```

---

## 📊 Week 1-2 Checklist

### Setup (Day 1-2)
- [x] Install dependencies
- [x] Initialize Supabase
- [x] Create migration files
- [x] Create client libraries
- [ ] Create Supabase account
- [ ] Create Supabase project
- [ ] Configure environment variables
- [ ] Link local to remote
- [ ] Run migrations
- [ ] Verify database setup

### Data Migration (Day 3-10) - **NEXT**
- [ ] Create extraction script (`extract-products-to-csv.mjs`)
- [ ] Extract supplements data (17 rows)
- [ ] Extract products data (1,691 rows)
- [ ] Extract prices data (11,837 rows)
- [ ] Extract glossary data (198 rows)
- [ ] Create transformation script (`transform-data.mjs`)
- [ ] Clean and normalize data
- [ ] Validate data integrity
- [ ] Create load script (`load-to-supabase.mjs`)
- [ ] Load supplements to database
- [ ] Load products to database
- [ ] Load prices to database
- [ ] Load glossary terms to database
- [ ] Verify all data loaded correctly
- [ ] Create backup of JSON files

---

## 🎯 Success Criteria (Week 1-2)

By end of Week 2, you should have:

✅ **Database Infrastructure**
- [ ] Supabase project created and configured
- [ ] All 5 tables created with proper schema
- [ ] All indexes created for performance
- [ ] All views and functions working
- [ ] 7 retailers seeded

✅ **Data Migration**
- [ ] 17 supplements migrated
- [ ] 1,691 products migrated
- [ ] 11,837 prices migrated
- [ ] 198 glossary terms migrated
- [ ] All relationships intact (foreign keys valid)
- [ ] No duplicate data
- [ ] DSLD label data preserved

✅ **Validation**
- [ ] Can query supplements via Supabase
- [ ] Can query products via Supabase
- [ ] Product-retailer-price relationships work
- [ ] Views return expected data
- [ ] Functions execute successfully

---

## ⏱️ Time Tracking

| Task | Estimated | Actual | Status |
|------|-----------|--------|--------|
| Install dependencies | 5 min | ✅ | Complete |
| Initialize Supabase | 5 min | ✅ | Complete |
| Create migrations | 2 hours | ✅ | Complete |
| Create client libs | 1 hour | ✅ | Complete |
| **Total (Phase 1A)** | **~3.5 hours** | **✅** | **Complete** |
| | | | |
| Create Supabase account | 30 min | ⏳ | Pending |
| Configure environment | 5 min | ⏳ | Pending |
| Link project | 5 min | ⏳ | Pending |
| Run migrations | 10 min | ⏳ | Pending |
| Verify setup | 10 min | ⏳ | Pending |
| **Total (Phase 1B-1F)** | **~1 hour** | **⏳** | **Pending** |
| | | | |
| Create extraction script | 3 hours | ⏳ | Pending |
| Run extraction | 1 hour | ⏳ | Pending |
| Create transformation script | 4 hours | ⏳ | Pending |
| Run transformation | 1 hour | ⏳ | Pending |
| Create load script | 3 hours | ⏳ | Pending |
| Run load & verify | 2 hours | ⏳ | Pending |
| **Total (Phase 2)** | **~14 hours** | **⏳** | **Pending** |
| | | | |
| **GRAND TOTAL** | **~18.5 hours** | **3.5 hours** | **19% Complete** |

---

## 📝 Notes

**What We've Done**:
- ✅ Created complete database schema (5 tables)
- ✅ Added performance indexes (14 indexes)
- ✅ Created helper views and functions
- ✅ Seeded retailers data
- ✅ Set up TypeScript types for type safety
- ✅ Created browser and server Supabase clients

**What's Next**:
1. You need to create a Supabase account
2. Create a project and get credentials
3. Add credentials to `.env.local`
4. Run migrations to create database
5. Then we'll proceed to Week 2 (data migration)

**Why This Approach**:
- All migrations are version-controlled (easy to rollback)
- TypeScript types ensure type safety
- Separate browser/server clients for security
- Seeding retailers first simplifies foreign key relationships

---

## 🆘 Troubleshooting

### Problem: `npx supabase` command not found
**Solution**: Install Supabase CLI globally
```bash
npm install -g supabase
```

### Problem: Migration fails with "relation already exists"
**Solution**: Reset database and rerun
```bash
npx supabase db reset
npx supabase db push
```

### Problem: Can't connect to Supabase
**Solution**: Check environment variables
```bash
# Verify .env.local exists and has correct values
cat .env.local | grep SUPABASE
```

### Problem: "Missing environment variables" error
**Solution**: Restart dev server after adding .env.local
```bash
# Kill existing dev server (Ctrl+C)
npm run dev
```

---

## 📚 Resources

- **Supabase Docs**: https://supabase.com/docs
- **Supabase CLI**: https://supabase.com/docs/guides/cli
- **Database Schema**: `supabase/migrations/20251126000001_create_tables.sql`
- **Implementation Plan**: `docs/SCALABILITY_IMPLEMENTATION_PLAN.md`
- **Visual Guide**: `docs/DATABASE_MIGRATION_VISUAL_GUIDE.md`

---

**Ready to continue? Complete Phase 1B-1F (Supabase account setup) and we'll move to Week 2 (data migration)!**
