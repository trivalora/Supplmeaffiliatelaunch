# Vercel Deployment Guide - Suppl.me v0.3

**Status:** Ready for Deployment  
**Platform:** Vercel  
**Framework:** Next.js 16.0.3 (App Router)  
**Date:** November 24, 2025

---

## Prerequisites

### 1. Vercel Account Setup
- [ ] Create Vercel account at https://vercel.com
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`

### 2. GitHub Repository
- [ ] Repository pushed to GitHub
- [ ] Repository: `trivalora/Supplmeaffiliatelaunch`
- [ ] Branch: `main` (production), create `staging` for testing

### 3. Environment Variables Ready
Required environment variables (from `.env`):
```bash
NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JHCPJYM37R
NEXT_PUBLIC_SITE_URL=https://suppl.me
```

Optional (for future features):
```bash
NEXT_PUBLIC_HOTJAR_ID=
NEXT_PUBLIC_CLARITY_ID=
```

---

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Import Project
1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select GitHub repository: `trivalora/Supplmeaffiliatelaunch`
4. Authorize Vercel to access repository

#### Step 2: Configure Project
1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `suppl.me_Affiliate_Launch_v0.3/` (or leave as root if repo is flat)
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)
6. **Development Command**: `npm run dev` (default)

#### Step 3: Set Environment Variables
Click "Environment Variables" and add:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_GTM_ID` | `GTM-NQWRNKFT` | Production, Preview |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-JHCPJYM37R` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://suppl.me` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://preview.suppl.me` | Preview |

**Important**: Mark as "Production" and "Preview" for all except SITE_URL

#### Step 4: Deploy
1. Click "Deploy"
2. Wait for build (3-5 minutes for 2,108 pages)
3. Deployment will be available at:
   - Preview: `https://supplme-[hash].vercel.app`
   - Production (after domain setup): `https://suppl.me`

### Option 2: Deploy via Vercel CLI

```bash
# Navigate to project directory
cd suppl.me_Affiliate_Launch_v0.3

# Login to Vercel
vercel login

# Deploy to preview (staging)
vercel

# Deploy to production
vercel --prod
```

---

## Domain Configuration

### Step 1: Add Custom Domain
1. In Vercel Dashboard → Project Settings → Domains
2. Add domains:
   - Primary: `suppl.me`
   - Alias: `www.suppl.me`
3. Vercel provides DNS records

### Step 2: Configure DNS
**Option A: Use Vercel Nameservers (Recommended)**
1. Copy Vercel nameservers from dashboard
2. Update nameservers at your domain registrar
3. Wait for DNS propagation (up to 48 hours)

**Option B: Use CNAME Records**
1. Add CNAME record at your DNS provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

2. Add A record for root domain:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

### Step 3: SSL Certificate
- Vercel automatically provisions SSL certificates
- Certificates auto-renew
- Force HTTPS enabled by default

---

## Build Configuration

### Vercel Settings (vercel.json)

Current configuration in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Note**: Remove rewrites section for Next.js App Router (not needed).

### Optimized vercel.json:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install --legacy-peer-deps",
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).webp",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/www",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

---

## Post-Deployment Checklist

### Immediate (Within 1 hour)
- [ ] **Verify Deployment**: Visit https://suppl.me and check homepage loads
- [ ] **Check GTM**: Verify Google Tag Manager loads (check Network tab)
- [ ] **Test Navigation**: Click through all navigation links
- [ ] **Mobile Test**: Test on mobile device (iOS + Android)
- [ ] **Check Analytics**: Verify events in GA4 DebugView

### Within 24 Hours
- [ ] **Run Lighthouse**: Test performance scores (target: >90)
- [ ] **Verify Sitemap**: Check https://suppl.me/sitemap.xml loads
- [ ] **Submit to Google**: Submit sitemap to Google Search Console
- [ ] **Check All Routes**: Test at least 10 supplement pages, 5 glossary terms, 3 product pages
- [ ] **Test Search**: Verify search functionality works
- [ ] **Check Images**: Confirm all images load correctly
- [ ] **Dark Mode**: Test dark mode toggle

### Within 1 Week
- [ ] **Monitor Analytics**: Check GA4 for traffic, events, errors
- [ ] **Review Core Web Vitals**: Check Google Search Console "Core Web Vitals" report
- [ ] **Check Error Logs**: Review Vercel deployment logs for errors
- [ ] **Test Affiliate Links**: Verify affiliate links track correctly
- [ ] **User Testing**: Get feedback from real users
- [ ] **SEO Check**: Verify meta tags, Open Graph, Twitter Cards

---

## Monitoring & Maintenance

### Vercel Dashboard
- **Analytics**: Track page views, top pages, geographic distribution
- **Logs**: Monitor deployment logs, runtime logs, errors
- **Bandwidth**: Track data transfer usage
- **Build Time**: Monitor build duration (should be 3-5 minutes)

### Google Analytics (GA4)
- **Real-time**: Monitor live users
- **Events**: Track affiliate clicks, product clicks, searches
- **Conversions**: Set up goals for affiliate clicks
- **User Flow**: Understand navigation patterns

### Google Search Console
- **Coverage**: Monitor indexed pages (should reach 2,108+ pages)
- **Performance**: Track impressions, clicks, CTR, position
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Manual Actions**: Check for any penalties

### Error Monitoring (Recommended)
Consider adding:
- **Sentry**: JavaScript error tracking
- **LogRocket**: Session replay for debugging
- **Vercel Analytics**: Built-in performance monitoring

---

## Rollback Plan

### If Deployment Fails:
1. **Check Build Logs**: Vercel Dashboard → Deployment → View Logs
2. **Common Issues**:
   - TypeScript errors: Check for type mismatches
   - Missing dependencies: Run `npm install` locally
   - Environment variables: Verify all required vars set
   - Image paths: Check all image imports

3. **Rollback**:
   ```bash
   # In Vercel Dashboard
   # Go to Deployments → Previous Deployment → Promote to Production
   ```

### If Production Has Issues:
1. **Immediate**: Promote previous deployment to production
2. **Investigate**: Check error logs, user reports
3. **Fix**: Create hotfix branch, test locally
4. **Redeploy**: Push to main for automatic redeployment

---

## Deployment Timeline

### Pre-Launch (Day -7 to -1)
- [ ] Final testing on preview deployment
- [ ] Performance audit (Lighthouse)
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit
- [ ] SEO audit
- [ ] Analytics testing

### Launch Day (Day 0)
- [ ] Deploy to production (off-peak hours recommended)
- [ ] Monitor deployment (1-2 hours)
- [ ] Verify all critical paths work
- [ ] Submit sitemap to Google
- [ ] Announce launch (social media, email, etc.)

### Post-Launch (Day 1-7)
- [ ] Monitor analytics hourly (Day 1)
- [ ] Check error logs daily
- [ ] Review user feedback
- [ ] Monitor Core Web Vitals
- [ ] Track affiliate click-through rates
- [ ] Fix any urgent issues

### Week 2-4
- [ ] Weekly performance reviews
- [ ] SEO optimization based on data
- [ ] A/B testing (if applicable)
- [ ] Content updates
- [ ] Feature enhancements

---

## Environment-Specific Configuration

### Production
```bash
NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JHCPJYM37R
NEXT_PUBLIC_SITE_URL=https://suppl.me
NODE_ENV=production
```

### Staging/Preview
```bash
NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JHCPJYM37R
NEXT_PUBLIC_SITE_URL=https://preview.suppl.me
NODE_ENV=production
```

### Development
```bash
NEXT_PUBLIC_GTM_ID=GTM-NQWRNKFT
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JHCPJYM37R
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

---

## Continuous Deployment

### Automatic Deployments
Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to any branch (creates preview URL)
- **Pull Requests**: Every PR gets a unique preview URL

### Branch Strategy
```
main (production)
  ↓
staging (pre-production testing)
  ↓
feature/* (feature development)
```

### Deployment Workflow
1. Develop on feature branch: `git checkout -b feature/new-feature`
2. Push to GitHub: `git push origin feature/new-feature`
3. Vercel creates preview URL automatically
4. Create PR to staging: Merge when tests pass
5. Test on staging preview
6. Create PR to main: Deploy to production

---

## Performance Expectations

### Build Time
- **First Build**: ~5-7 minutes (2,108 pages)
- **Incremental Builds**: ~2-3 minutes (cached dependencies)
- **ISR Updates**: Instant (when implemented)

### Page Load Times
- **Landing Page**: < 1.5s (FCP), < 2.0s (LCP)
- **Supplement Pages**: < 1.2s (FCP), < 1.8s (LCP)
- **Product Pages**: < 1.0s (FCP), < 1.5s (LCP)
- **Glossary Pages**: < 0.8s (FCP), < 1.2s (LCP)

### Bundle Sizes
- **Initial Bundle**: ~180KB (gzipped)
- **Page Bundles**: 50-100KB per page (gzipped)
- **Total JS**: ~1MB (split across routes)

---

## Troubleshooting

### Build Failures
**Error**: TypeScript compilation errors
```bash
# Fix locally
npm run build
# Fix all TypeScript errors
# Push to GitHub
```

**Error**: Out of memory during build
```json
// In vercel.json
{
  "build": {
    "env": {
      "NODE_OPTIONS": "--max_old_space_size=4096"
    }
  }
}
```

### Runtime Errors
**Error**: 404 on dynamic routes
- Check `generateStaticParams()` in page files
- Verify all routes in `routes.config.ts`

**Error**: Images not loading
- Verify images in `/public/` directory
- Check Next.js Image domain configuration
- Check file paths case-sensitivity

**Error**: Environment variables undefined
- Check variable names start with `NEXT_PUBLIC_`
- Verify set in Vercel dashboard
- Redeploy after adding new variables

### Performance Issues
**Slow Build Times**
- Enable caching in Vercel
- Use turbo cache: `npm run build -- --turbo`

**Slow Page Loads**
- Check bundle sizes: `npm run analyze`
- Verify images optimized
- Check for large dependencies

**High Memory Usage**
- Reduce concurrent builds
- Split large data files
- Optimize images before build

---

## Success Metrics

### Launch Targets (Week 1)
- [ ] **Availability**: 99.9% uptime
- [ ] **Performance**: Lighthouse score >90
- [ ] **LCP**: < 2.5s for 75% of page loads
- [ ] **FID**: < 100ms for 75% of interactions
- [ ] **CLS**: < 0.1 for 75% of page loads
- [ ] **Error Rate**: < 0.1%

### Growth Targets (Month 1)
- [ ] **Indexed Pages**: 2,000+ pages in Google
- [ ] **Organic Traffic**: 1,000+ sessions
- [ ] **Affiliate Clicks**: 100+ clicks
- [ ] **Search Impressions**: 10,000+

---

## Support & Resources

### Vercel Support
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support
- Status: https://www.vercel-status.com

### Next.js Resources
- Docs: https://nextjs.org/docs
- Examples: https://github.com/vercel/next.js/tree/canary/examples
- Discord: https://discord.gg/nextjs

### Project Resources
- GTM Import Guide: See `GTM_IMPORT_GUIDE.md`
- Performance Checklist: See `PERFORMANCE_OPTIMIZATION_CHECKLIST.md`
- Migration Report: See `MIGRATION_COMPLETE.md`

---

## Final Checks Before Production

- [ ] All environment variables configured
- [ ] Domain configured and SSL active
- [ ] GTM container published
- [ ] GA4 property configured
- [ ] Sitemap submitted to Google
- [ ] All tests passing
- [ ] Performance audit complete
- [ ] Security headers configured
- [ ] Analytics verified
- [ ] Error monitoring set up
- [ ] Rollback plan documented
- [ ] Team notified of deployment

**Ready to deploy?** Follow steps above and monitor closely for first 24 hours!
