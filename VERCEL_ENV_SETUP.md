# Vercel Environment Variables Setup

## 🚨 Critical: API Routes Need Environment Variables

Your deployment is failing because the API routes can't connect to Supabase. The environment variables from `.env.local` are **not** automatically deployed to Vercel.

## Quick Fix (5 minutes)

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Find your `Supplmeaffiliatelaunch` project
3. Click on the project name

### Step 2: Add Environment Variables
1. Click **Settings** tab
2. Click **Environment Variables** in the left sidebar
3. Add the following 7 variables (click "Add" for each, copy-paste the values):

---

**Variable 1 of 7:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://rdraqlnxypwlhkhngyjk.supabase.co
```
✅ Check all 3: Production, Preview, Development

---

**Variable 2 of 7:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNTQ4MzQsImV4cCI6MjA3OTczMDgzNH0.G3jTJgmMMwPAweePvdPJV3YRcecUaCrNGFSOpcZTTnc
```
✅ Check all 3: Production, Preview, Development

---

**Variable 3 of 7:** 🔒 **MARK AS SENSITIVE**
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE1NDgzNCwiZXhwIjoyMDc5NzMwODM0fQ.FtKlSITzItpRbsZo6jASuWwgmsiYHWpN8jXuqH2fHAw
```
✅ Check all 3: Production, Preview, Development  
⚠️ Check "Sensitive" checkbox

---

**Variable 4 of 7:** 🔒 **MARK AS SENSITIVE**
```
Name: DATABASE_URL
Value: postgresql://postgres.rdraqlnxypwlhkhngyjk:pEkpoj-hovsif-4cofba@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```
✅ Check all 3: Production, Preview, Development  
⚠️ Check "Sensitive" checkbox

---

**Variable 5 of 7:**
```
Name: NEXT_PUBLIC_GTM_ID
Value: GTM-NQWRNKFT
```
✅ Check all 3: Production, Preview, Development

---

**Variable 6 of 7:**
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://www.suppl.me
```
✅ Check all 3: Production, Preview, Development

---

**Variable 7 of 7:**
```
Name: NEXT_PUBLIC_CANONICAL_BASE_URL
Value: https://www.suppl.me
```
✅ Check all 3: Production, Preview, Development

### Step 3: Redeploy
After adding all variables:
1. Go to **Deployments** tab
2. Find the most recent deployment
3. Click the **three dots** (⋮) on the right
4. Click **Redeploy**
5. Check "Use existing Build Cache" 
6. Click **Redeploy** button

### Step 4: Verify
Once redeployed (takes ~2 minutes):
1. Visit https://www.suppl.me/ashwagandha-comparison
2. Open browser DevTools (F12)
3. Check Console - should see products loading
4. Should see product cards displayed

## What This Fixes

**Before**: API routes return 404 because they can't connect to Supabase
```
GET /api/supplements/ashwagandha/products 404 (Not Found)
Error: Supplement not found
```

**After**: API routes connect to Supabase and return product data
```
GET /api/supplements/ashwagandha/products 200 (OK)
{ products: [...], total: 142, page: 1 }
```

## Alternative: Use Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add DATABASE_URL production
vercel env add NEXT_PUBLIC_GTM_ID production
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add NEXT_PUBLIC_CANONICAL_BASE_URL production

# Redeploy
vercel --prod
```

## Security Notes

✅ **Safe to expose** (public keys):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CANONICAL_BASE_URL`

🔒 **Keep secret** (server-only):
- `SUPABASE_SERVICE_ROLE_KEY` (bypasses Row Level Security)
- `DATABASE_URL` (direct database access)

All `NEXT_PUBLIC_*` variables are embedded in client-side JavaScript bundles. The Supabase anon key is safe because Row Level Security (RLS) protects your data.

## Troubleshooting

### Still getting 404 errors?
1. Check Vercel **Function Logs** in dashboard
2. Look for "Cannot find module" or connection errors
3. Verify all 7 environment variables are set
4. Make sure you selected all 3 environments (Production, Preview, Development)

### Database connection errors?
1. Go to Supabase dashboard: https://supabase.com/dashboard
2. Check if project is paused (free tier auto-pauses after 7 days inactivity)
3. Click "Restore" if needed
4. Verify connection string in Project Settings → Database

### Need to update values?
1. Go to Vercel → Settings → Environment Variables
2. Click **Edit** next to the variable
3. Update the value
4. Click **Save**
5. Redeploy from Deployments tab

## Next Steps After Deployment

1. ✅ Verify API endpoints work:
   - https://www.suppl.me/api/health
   - https://www.suppl.me/api/supplements
   - https://www.suppl.me/api/supplements/ashwagandha/products

2. ✅ Test comparison pages:
   - https://www.suppl.me/ashwagandha-comparison
   - https://www.suppl.me/multivitamin-comparison
   - https://www.suppl.me/vitamin-d-comparison

3. ✅ Check product detail pages:
   - Click any product card
   - Verify data loads correctly
   - Check affiliate links work

4. 📊 Monitor analytics:
   - GTM → Check events are firing
   - GA4 → Verify pageviews and events

## Automated Setup

For faster setup, use the automated script:

```bash
# Install Vercel CLI
npm i -g vercel

# Login and link project
vercel login
vercel link

# Run automated setup
node scripts/setup-vercel-env.mjs

# Deploy
vercel --prod
```

## Support

If you encounter issues:
1. **Run diagnostics**: `node scripts/diagnose-production.mjs`
2. Check Vercel Function Logs (Dashboard → Deployments → Functions)
3. Check Supabase project status (https://supabase.com/dashboard)
4. Test API endpoints directly with curl
5. Review complete guide: `docs/PRODUCTION_API_FIX.md`
