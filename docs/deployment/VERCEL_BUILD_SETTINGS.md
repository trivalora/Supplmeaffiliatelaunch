# Vercel Build Settings Configuration

**Go to:** Vercel Dashboard → Your Project → Settings → General

---

## Required Build Settings

### 1. Framework Preset
```
Framework Preset: Next.js
```
- **Why:** Automatically configures build commands and optimizations
- **Action:** Select "Next.js" from dropdown (should auto-detect)

---

### 2. Build & Development Settings

#### Root Directory
```
Root Directory: ./
```
- **Why:** Project is in repository root
- **Action:** Leave as `./` (default)

---

#### Build Command
```
Build Command: npm run build
```
- **Why:** Runs `next build` to generate production build
- **Action:** Should auto-fill, verify it says `npm run build`
- **Alternative:** Leave blank to use default Next.js build

---

#### Output Directory
```
Output Directory: .next
```
- **Why:** Next.js outputs to `.next` folder
- **Action:** Should auto-fill, verify it says `.next`
- **Alternative:** Leave blank to use Next.js default

---

#### Install Command
```
Install Command: npm install
```
- **Why:** Installs dependencies from `package.json`
- **Action:** Should auto-fill, verify it says `npm install`
- **Alternative:** Leave blank to use default

---

### 3. Node.js Version
```
Node.js Version: 22.x
```
- **Why:** Your `package.json` specifies `"engines": { "node": ">=22.x" }`
- **Action:** 
  1. Go to Settings → General
  2. Scroll to "Node.js Version"
  3. Select `22.x` from dropdown
  4. Click "Save"

---

### 4. Environment Variables
**Already covered in VERCEL_ENV_VARS.md**

Add these 4 required variables:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CANONICAL_BASE_URL`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

---

## Advanced Settings (Optional)

### 1. Automatically Expose System Environment Variables
```
Setting: Automatically Expose System Environment Variables
Value: Enabled (default)
```
- **Why:** Allows Next.js to access Vercel system variables
- **Action:** Leave enabled (default)

---

### 2. Ignored Build Step
```
Setting: Ignored Build Step
Value: (leave blank)
```
- **Why:** You want to build on every push
- **Action:** Leave blank

---

### 3. Custom Domains
```
Production Domain: suppl.me (or www.suppl.me)
```
- **Action:**
  1. Go to Settings → Domains
  2. Click "Add Domain"
  3. Enter `suppl.me`
  4. Follow DNS configuration instructions
  5. Vercel will auto-provision SSL certificate

---

## Complete Configuration Checklist

### General Settings
- [x] Framework Preset: Next.js
- [x] Root Directory: `./`
- [x] Build Command: `npm run build`
- [x] Output Directory: `.next`
- [x] Install Command: `npm install`
- [x] Node.js Version: 22.x

### Environment Variables
- [x] `NEXT_PUBLIC_SITE_URL` = `https://www.suppl.me`
- [x] `NEXT_PUBLIC_CANONICAL_BASE_URL` = `https://www.suppl.me`
- [x] `NEXT_PUBLIC_GTM_ID` = `GTM-NQWRNKFT`
- [x] `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-JHCPJYM37R`

### Optional
- [ ] `NEXT_PUBLIC_HOTJAR_ID` (add later)
- [ ] `NEXT_PUBLIC_CLARITY_ID` (add later)

### Domains
- [ ] Custom domain configured: `suppl.me`
- [ ] DNS records pointing to Vercel
- [ ] SSL certificate provisioned

---

## Step-by-Step Setup

### If Starting Fresh (New Vercel Project)

1. **Import Git Repository**
   - Go to: https://vercel.com/new
   - Click "Import Git Repository"
   - Select: `trivalora/Supplmeaffiliatelaunch`
   - Click "Import"

2. **Configure Project**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Settings: Leave default or verify:
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`
   - Click "Deploy" (will fail without env vars, that's OK)

3. **Add Environment Variables**
   - Go to Settings → Environment Variables
   - Add 4 required variables (see VERCEL_ENV_VARS.md)
   - Click "Redeploy" button

4. **Configure Domain**
   - Go to Settings → Domains
   - Add `suppl.me`
   - Update DNS records at your registrar
   - Wait for SSL certificate (2-10 minutes)

5. **Set Node.js Version**
   - Go to Settings → General
   - Scroll to "Node.js Version"
   - Select `22.x`
   - Click "Save"
   - Redeploy

---

### If Project Already Exists

1. **Verify Build Settings**
   - Go to Settings → General
   - Check all settings match above
   - Update if needed

2. **Verify Environment Variables**
   - Go to Settings → Environment Variables
   - Should have 4-6 variables
   - Add missing ones

3. **Verify Node.js Version**
   - Go to Settings → General
   - Should be `22.x`
   - Update if different

4. **Redeploy**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

---

## Verification After Configuration

### 1. Check Build Logs
```
✓ Compiled successfully
✓ Generating static pages (1936/1936)
✓ Finalizing page optimization
```

### 2. Check Deployment Status
```
Status: Ready
Build Time: 2-5 minutes
Output: 1936 pages
```

### 3. Check Site
```bash
curl -I https://suppl.me
# Should return: 200 OK
```

---

## Troubleshooting

### Build Fails: "Module not found"
**Solution:** Verify `npm install` ran successfully in build logs

### Build Fails: "Node version incompatible"
**Solution:** Set Node.js version to 22.x in Settings → General

### Environment Variables Not Working
**Solution:** 
1. Verify variables are set for correct environment (Production)
2. Redeploy after adding variables
3. Check variable names have `NEXT_PUBLIC_` prefix

### Domain Not Working
**Solution:**
1. Verify DNS records point to Vercel
2. Wait 2-24 hours for DNS propagation
3. Check SSL certificate status in Vercel

---

## Quick Reference

**Minimum Required Settings:**
```
Framework: Next.js
Build Command: npm run build
Output Directory: .next
Node.js Version: 22.x
Environment Variables: 4 required (see VERCEL_ENV_VARS.md)
```

**Deploy Command (Manual):**
```bash
git push origin main  # Auto-deploys on Vercel
```

**Redeploy (Without Code Change):**
```bash
git commit --allow-empty -m "trigger: redeploy"
git push origin main
```

---

**Last Updated:** November 24, 2025  
**Verified Against:** Next.js 16, Vercel Platform
