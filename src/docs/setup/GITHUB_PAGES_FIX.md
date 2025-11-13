# GitHub Pages Deployment Fix

## 🚨 Problem
The sitemap.xml and robots.txt files are not accessible after GitHub Pages deployment.

## ✅ Solution

### Files Fixed
1. ✅ Created `/vite.config.ts` - Ensures `/public/` files are copied to build
2. ✅ Updated `/package.json.example` - Changed deploy directory from `build` to `dist`
3. ✅ `/public/sitemap.xml` - Ready to deploy
4. ✅ `/public/robots.txt` - Ready to deploy

---

## 🔧 How to Redeploy

### Option 1: Using npm deploy script (Recommended)

```bash
# 1. Ensure package.json exists (rename from package.json.example)
mv package.json.example package.json

# 2. Install dependencies (if not already done)
npm install

# 3. Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your app to `/dist/` folder
- Copy all `/public/` files (including sitemap.xml and robots.txt)
- Create CNAME file with "suppl.me"
- Push to gh-pages branch

---

### Option 2: Manual Build & Push

```bash
# 1. Build the project
npm run build

# 2. Verify files are in dist folder
ls dist/sitemap.xml
ls dist/robots.txt

# 3. If files are missing, manually copy them
cp public/sitemap.xml dist/
cp public/robots.txt dist/

# 4. Create CNAME
echo 'suppl.me' > dist/CNAME

# 5. Deploy using gh-pages
npx gh-pages -d dist
```

---

## 🔍 Verify Deployment

After deployment, check these URLs:
- ✅ https://suppl.me/sitemap.xml
- ✅ https://suppl.me/robots.txt
- ✅ https://suppl.me/ (homepage should work)

Test in terminal:
```bash
curl -I https://suppl.me/sitemap.xml
curl -I https://suppl.me/robots.txt
```

Both should return `200 OK` status.

---

## 🎯 GitHub Pages Settings

Ensure your GitHub repository settings are correct:

1. Go to: https://github.com/trivalora/Supplmeaffiliatelaunch/settings/pages
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` / `/ (root)`
4. **Custom domain**: `suppl.me`
5. **Enforce HTTPS**: ✅ Enabled

---

## 📋 Troubleshooting

### If sitemap.xml still not accessible:

**1. Check if files exist in gh-pages branch:**
```bash
git checkout gh-pages
ls -la | grep -E "sitemap|robots"
git checkout main
```

**2. Manually verify build output:**
```bash
npm run build
ls -la dist/ | grep -E "sitemap|robots"
```

**3. Force rebuild with cache clear:**
```bash
rm -rf dist node_modules/.vite
npm run build
npm run deploy
```

**4. Check Vite publicDir:**
The `/vite.config.ts` file explicitly sets `publicDir: 'public'`, which tells Vite to copy everything from `/public/` to `/dist/` during build.

---

## 🚀 After Successful Deployment

### Submit Sitemap to Search Engines:

**Google Search Console:**
1. Go to: https://search.google.com/search-console
2. Add property: `suppl.me`
3. Verify ownership
4. Sitemaps → Add sitemap: `https://suppl.me/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to: https://www.bing.com/webmasters
2. Add site: `suppl.me`
3. Verify ownership
4. Sitemaps → Submit sitemap: `https://suppl.me/sitemap.xml`

---

## 📁 File Locations Reference

```
/public/
  ├── sitemap.xml       ← Source file
  └── robots.txt        ← Source file

/dist/ (after build)
  ├── sitemap.xml       ← Copied automatically by Vite
  ├── robots.txt        ← Copied automatically by Vite
  ├── CNAME            ← Created by predeploy script
  ├── index.html       ← Main app entry
  └── assets/          ← JS/CSS bundles
```

---

## ✅ Success Checklist

- [ ] Renamed `package.json.example` to `package.json`
- [ ] Ran `npm install`
- [ ] Ran `npm run build` successfully
- [ ] Verified `dist/sitemap.xml` exists
- [ ] Verified `dist/robots.txt` exists
- [ ] Ran `npm run deploy`
- [ ] Checked https://suppl.me/sitemap.xml (200 OK)
- [ ] Checked https://suppl.me/robots.txt (200 OK)
- [ ] Submitted sitemap to Google Search Console
