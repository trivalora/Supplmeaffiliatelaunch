# Production API Fix - Complete Solution

## 🔍 Problem Diagnosed

**Symptoms:**
```
✅ /api/supplements → 200 OK (works)
❌ /api/supplements/ashwagandha → 404 Not Found
❌ /api/supplements/ashwagandha/products → 404 Not Found
❌ /api/health → 500 Internal Server Error
```

**Root Cause:**
Dynamic API routes (`[slug]`) are returning 404 because either:
1. Environment variables are not set in Vercel production
2. Supabase client initialization is failing
3. Dynamic routes aren't being deployed properly

---

## ✅ Solution (3 Steps)

### Step 1: Verify Environment Variables in Vercel

**Go to:** https://vercel.com/dashboard → Your Project → Settings → Environment Variables

**Required Variables (7 total):**

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://rdraqlnxypwlhkhngyjk.supabase.co` | ✅ All 3 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | ✅ All 3 |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | ✅ All 3 (🔒 Sensitive) |
| `DATABASE_URL` | `postgresql://postgres.rdraqlnx...` | ✅ All 3 (🔒 Sensitive) |
| `NEXT_PUBLIC_GTM_ID` | `GTM-NQWRNKFT` | ✅ All 3 |
| `NEXT_PUBLIC_SITE_URL` | `https://www.suppl.me` | ✅ All 3 |
| `NEXT_PUBLIC_CANONICAL_BASE_URL` | `https://www.suppl.me` | ✅ All 3 |

**Action:**
1. Check each variable exists
2. Verify "Production", "Preview", and "Development" are all checked
3. Copy exact values from `.env.local` (see VERCEL_ENV_SETUP.md)

---

### Step 2: Check Supabase Project Status

**Go to:** https://supabase.com/dashboard

**Verify:**
- [ ] Project is **Active** (not paused)
- [ ] Tables exist: `supplements`, `products`, `prices`, `retailers`
- [ ] Data is loaded (17 supplements, 1,000+ products)

**If paused:**
1. Click "Restore Project"
2. Wait 2 minutes for database to wake up
3. Test connection:
   ```bash
   curl https://rdraqlnxypwlhkhngyjk.supabase.co/rest/v1/supplements \
     -H "apikey: YOUR_ANON_KEY" \
     -H "Authorization: Bearer YOUR_ANON_KEY"
   ```

---

### Step 3: Redeploy from Vercel

**After verifying Steps 1-2:**

1. Go to: https://vercel.com/dashboard → Your Project → Deployments
2. Find the latest deployment
3. Click the **three dots** (⋮) on the right
4. Click **"Redeploy"**
5. ✅ Check "Use existing Build Cache"
6. Click **"Redeploy"** button
7. Wait 2-3 minutes for deployment

---

## 🧪 Verification

### Test 1: Health Check
```bash
curl https://www.suppl.me/api/health
```
**Expected:** `{"status":"ok","timestamp":"..."}`

### Test 2: Supplements List
```bash
curl https://www.suppl.me/api/supplements
```
**Expected:** `{"supplements":[...],"total":17}`

### Test 3: Single Supplement (Previously Failing)
```bash
curl https://www.suppl.me/api/supplements/ashwagandha
```
**Expected:** `{"supplement":{"id":"...","slug":"ashwagandha",...}}`

### Test 4: Products List (Previously Failing)
```bash
curl "https://www.suppl.me/api/supplements/ashwagandha/products?limit=5"
```
**Expected:** `{"products":[...],"pagination":{...}}`

---

## 🚨 If Still Failing

### Check Vercel Function Logs

1. Go to: https://vercel.com/dashboard → Your Project → Deployments
2. Click on latest deployment
3. Click **"Functions"** tab
4. Look for errors in:
   - `/api/supplements/[slug]`
   - `/api/supplements/[slug]/products`

**Common Errors:**

#### Error: "Missing environment variables"
```
Error: Missing Supabase server environment variables
```
**Fix:** Go back to Step 1, verify all 7 variables are set

#### Error: "connect ETIMEDOUT"
```
Error: connect ETIMEDOUT
```
**Fix:** 
1. Supabase project is paused → Restore it
2. Database URL is wrong → Verify in `.env.local`
3. Network issue → Wait 5 minutes and retry

#### Error: "relation \"supplements\" does not exist"
```
Error: relation "supplements" does not exist
```
**Fix:** Tables are in wrong schema
1. Check if tables are in `public` vs `api` schema
2. Update `src/lib/supabase/server.ts`:
   ```typescript
   db: { schema: 'public' } // Change from 'api' if needed
   ```

---

## 📊 Diagnostic Script

Run this locally to test your environment:

```bash
node scripts/diagnose-production.mjs
```

**What it checks:**
- ✅ All 4 production API endpoints
- ✅ HTTP status codes
- ✅ Response format
- ✅ Error messages

---

## 🔧 Alternative: Use Vercel CLI

If dashboard doesn't work, use CLI:

```bash
# Install CLI
npm i -g vercel

# Login
vercel login

# Check environment variables
vercel env ls

# Add missing variables
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

---

## 📝 Technical Details

### Why Dynamic Routes Return 404

Next.js API routes with `[slug]` parameters are **serverless functions**. They:
1. Run on-demand (not pre-rendered)
2. Need environment variables at runtime
3. Connect to Supabase on each request

**Without environment variables:**
```typescript
// This throws an error in production
const supabase = createClient(); // ❌ Missing env vars
```

**The error causes:**
- Next.js returns generic 404 page
- No helpful error message in browser
- Must check Vercel Function Logs

### Why /api/supplements Works

Static endpoint doesn't use params:
```typescript
export async function GET(request: Request) {
  // No params needed
  const supabase = createClient();
  // ...
}
```

---

## ✅ Success Checklist

After deploying:

- [ ] `curl https://www.suppl.me/api/health` returns 200
- [ ] `curl https://www.suppl.me/api/supplements` returns 200
- [ ] `curl https://www.suppl.me/api/supplements/ashwagandha` returns 200 ⭐
- [ ] `curl https://www.suppl.me/api/supplements/ashwagandha/products` returns 200 ⭐
- [ ] Visit https://www.suppl.me/comparison/ashwagandha
- [ ] Products load without errors
- [ ] Browser console shows no 404 errors
- [ ] GTM events fire correctly

---

## 📞 Support

**If you're still stuck:**

1. Run diagnostics:
   ```bash
   node scripts/diagnose-production.mjs
   ```

2. Check Vercel logs:
   - Deployments → Latest → Functions → Look for errors

3. Test Supabase directly:
   ```bash
   node test-db-quick.mjs
   ```

4. Share output with team or in GitHub Issues

---

**Last Updated:** November 26, 2025  
**Status:** Ready for deployment  
**Confidence:** 95% (assuming env vars are set correctly)
