# ✅ Deployment Checklist

## Before Deploying to Vercel

### 1. ✅ Verify File Structure

Ensure your root directory contains:

- [ ] `index.html` (entry point)
- [ ] `package.json` (dependencies)
- [ ] `vite.config.ts` (Vite configuration)
- [ ] `vercel.json` (Vercel routing)
- [ ] `tsconfig.json` (TypeScript config)
- [ ] `src/main.tsx` (application entry)
- [ ] `public/` folder with `robots.txt` and `sitemap.xml`

### 2. ✅ Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 3. ✅ Verify SEO Files

- [ ] `/public/robots.txt` exists
- [ ] `/public/sitemap.xml` exists (should have 230+ URLs)
- [ ] All pages have unique `<title>` tags
- [ ] All pages have unique `<meta name="description">` tags

### 4. ✅ Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Suppl.me launch"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 5. ✅ Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Click "Deploy"

### 6. ✅ Post-Deployment Verification

After deployment, check:

- [ ] Homepage loads correctly
- [ ] All routes work (knowledgebase, glossary, supplements)
- [ ] `/robots.txt` is accessible
- [ ] `/sitemap.xml` is accessible
- [ ] SEO meta tags are present (view page source)
- [ ] Images load correctly
- [ ] All supplement pages load
- [ ] All 198 glossary pages load

### 7. ✅ Submit Sitemap to Search Engines

#### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership
4. Go to "Sitemaps" section
5. Submit: `https://yourdomain.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## 🚨 Common Issues & Fixes

### Issue: 404 on Page Refresh

**Cause:** `vercel.json` is missing or misconfigured

**Fix:** Ensure `/vercel.json` contains:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Issue: Build Fails

**Cause:** Dependencies not installed or TypeScript errors

**Fix:** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Routes Return 404

**Cause:** SPA routing not configured

**Fix:** Ensure `vercel.json` is at root level (not in src/)

### Issue: Sitemap Not Found

**Cause:** `public/` folder not at root level

**Fix:** Move `public/` folder to root level (same level as `package.json`)

## 🎯 Performance Tips

After deployment, improve performance:

1. **Enable Vercel Analytics** (free)
2. **Enable Vercel Speed Insights** (free)
3. **Set up custom domain** (improves SEO)
4. **Enable HTTPS** (automatic on Vercel)
5. **Enable compression** (automatic on Vercel)

## 📊 Expected Results

After 2-4 weeks of deployment and sitemap submission:

- ✅ Google will index 230+ pages
- ✅ Pages will appear in search results
- ✅ Supplement pages will rank for relevant keywords
- ✅ Glossary pages will appear in "definition" searches
- ✅ Social shares will show Open Graph images

## 🎉 You're Live!

Once deployed:
- Your site is live 24/7
- SSL certificate is automatic
- CDN distribution is global
- Automatic deployments on git push

**Congratulations! Your evidence-based supplement website is now live! 🚀**
