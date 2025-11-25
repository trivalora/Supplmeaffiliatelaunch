# Vercel Environment Variables Setup Guide

## Required Variables (Production)

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

### 1. Site Configuration
```
Variable Name: NEXT_PUBLIC_SITE_URL
Value: https://suppl.me
Environment: Production, Preview, Development
```

```
Variable Name: NEXT_PUBLIC_CANONICAL_BASE_URL
Value: https://suppl.me
Environment: Production, Preview, Development
```

---

### 2. Analytics (REQUIRED)
```
Variable Name: NEXT_PUBLIC_GTM_ID
Value: GTM-NQWRNKFT
Environment: Production, Preview, Development
```

```
Variable Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-JHCPJYM37R
Environment: Production, Preview, Development
```

---

### 3. Optional Analytics (Add Later if Needed)
```
Variable Name: NEXT_PUBLIC_HOTJAR_ID
Value: (leave blank or add your Hotjar site ID)
Environment: Production, Preview, Development
```

```
Variable Name: NEXT_PUBLIC_CLARITY_ID
Value: (leave blank or add your Microsoft Clarity project ID)
Environment: Production, Preview, Development
```

---

## How to Add in Vercel

### Step-by-Step:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard

2. **Select Your Project**
   - Click on "Supplmeaffiliatelaunch" (or your project name)

3. **Open Settings**
   - Click "Settings" tab at top

4. **Navigate to Environment Variables**
   - Click "Environment Variables" in left sidebar

5. **Add Each Variable**
   - Click "Add New" button
   - Enter variable name (e.g., `NEXT_PUBLIC_GTM_ID`)
   - Enter value (e.g., `GTM-NQWRNKFT`)
   - Select environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save"

6. **Repeat for All Variables**
   - Add all 4 required variables
   - Optionally add 2 analytics variables

---

## Verification

After adding variables, you can verify by:

1. **Check in Vercel Dashboard**
   - Go to Settings → Environment Variables
   - Should see 4-6 variables listed

2. **After Deploy**
   - Open browser console on https://suppl.me
   - Type: `process.env.NEXT_PUBLIC_GTM_ID` (won't work in browser, but GTM will load)
   - Better: Check if GTM loads: `console.log(window.google_tag_manager)`

---

## Important Notes

### ✅ DO:
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Add to all environments (Production, Preview, Development)
- Keep sensitive data (API keys) as plain environment variables (no `NEXT_PUBLIC_` prefix)

### ❌ DON'T:
- Commit `.env` file to Git (already in .gitignore)
- Use `NEXT_PUBLIC_` prefix for server-only secrets
- Forget to redeploy after adding variables (Vercel will prompt)

---

## Quick Copy-Paste

**For quick setup, copy these 4 required variables:**

```bash
NEXT_PUBLIC_SITE_URL=https://suppl.me
NEXT_PUBLIC_CANONICAL_BASE_URL=https://suppl.me
NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JHCPJYM37R
```

**Optional (add later):**
```bash
NEXT_PUBLIC_HOTJAR_ID=
NEXT_PUBLIC_CLARITY_ID=
```

---

## After Adding Variables

Vercel will prompt you to redeploy. Click **"Redeploy"** or push a new commit:

```bash
git commit --allow-empty -m "trigger: redeploy with env vars"
git push origin main
```

---

**Last Updated:** November 24, 2025
