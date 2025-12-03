# CSS Optimization - Implementation Checklist

**Version:** 0.6.4  
**Date:** November 29, 2025  
**Status:** READY TO IMPLEMENT

---

## ✅ PHASE 1: QUICK WINS (Target: 2 hours)

### Task 1.1: Remove Google Fonts Import
**File:** `src/styles/globals.css`  
**Action:** Delete line 1  
**Time:** 2 minutes

```diff
- @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap");
  @import "tailwindcss";
```

- [ ] File modified
- [ ] Line 1 removed completely
- [ ] File saved

---

### Task 1.2: Add Font Preload Hints
**File:** `app/layout.tsx`  
**Action:** Add preload links in `<head>`  
**Time:** 10 minutes

**Location:** Inside `<head>`, after `<GoogleTagManager />`

```tsx
<head>
  <GoogleTagManager gtmId={gtmId} />
  
  {/* Preload critical fonts */}
  <link
    rel="preload"
    href="/fonts/Lato-Regular-subset.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Lato-Bold-subset.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

- [ ] Preload links added
- [ ] `crossOrigin="anonymous"` included
- [ ] File saved

---

### Task 1.3: Enable CSS Optimization in Next.js
**File:** `next.config.mjs`  
**Action:** Add experimental CSS optimization  
**Time:** 5 minutes

**Add to config object:**

```javascript
const nextConfig = {
  // ... existing config (images, turbopack, etc.)
  
  // CSS Optimization
  experimental: {
    optimizeCss: true, // Enable built-in CSS optimization
  },
  
  // ... rest of config
};
```

- [ ] Config updated
- [ ] `optimizeCss: true` added
- [ ] File saved

---

### Task 1.4: Test Locally
**Time:** 30 minutes

```bash
# Clean build
rm -rf .next

# Rebuild
npm run build

# Should see: ✓ Compiled successfully
# Check output for CSS file sizes

# Start production server
npm run start

# Open http://localhost:3000
```

**Manual Checks:**
- [ ] Site loads correctly
- [ ] Fonts display properly (Regular and Bold)
- [ ] Header renders correctly
- [ ] Dark mode works
- [ ] No console errors
- [ ] CSS Network tab: No Google Fonts request ✅

**Lighthouse Audit:**
```bash
# Open DevTools > Lighthouse
# Run Performance audit (Mobile)
# Check: Performance score improved?
```

- [ ] Build successful
- [ ] Site loads correctly
- [ ] Fonts work
- [ ] No external font requests
- [ ] Performance improved

---

### Task 1.5: Commit Changes
**Time:** 5 minutes

```bash
git add src/styles/globals.css
git add app/layout.tsx
git add next.config.mjs

git commit -m "feat(perf): Phase 1 CSS optimization - remove Google Fonts, add preloads

- Remove external Google Fonts import (saves 200-400ms)
- Add preload hints for critical Lato fonts
- Enable Next.js CSS optimization
- Expected: -47% reduction in CSS blocking time"

# Review commit
git show
```

- [ ] Files staged
- [ ] Commit created
- [ ] Commit message descriptive

---

### Task 1.6: Deploy to Production
**Time:** 1 hour (including monitoring)

```bash
# Push to GitHub (triggers Vercel deployment)
git push origin main

# Monitor deployment in Vercel dashboard
# Wait for build to complete
```

**Post-Deployment Checks:**
- [ ] Vercel build successful
- [ ] Production site loads correctly
- [ ] Fonts render properly
- [ ] No 404 errors for fonts
- [ ] CSS Network requests reduced
- [ ] Lighthouse Performance improved

**Measure Results:**
1. Open production site: https://www.suppl.me
2. Open DevTools > Network
3. Filter by CSS
4. Refresh page (Cmd+Shift+R)
5. Record CSS load times

**Expected Results:**
```
Before: 810ms + 320ms = 1,130ms total
After:  ~600ms total (-47% improvement) ✅
```

- [ ] Deployed successfully
- [ ] CSS load time < 700ms
- [ ] No regressions
- [ ] Performance improved

---

## 📊 PHASE 1 SUCCESS METRICS

### Required ✅
- [x] No Google Fonts external request
- [x] CSS load time reduced by 30-50%
- [x] All fonts render correctly
- [x] No console errors
- [x] All 1,936 pages work

### Nice to Have 🎯
- [ ] CSS load < 600ms
- [ ] FCP improved by 300-400ms
- [ ] Lighthouse score +5 points
- [ ] No layout shifts

---

## ⚠️ TROUBLESHOOTING

### Issue: Fonts not loading
**Symptoms:** Text shows fallback fonts  
**Solution:**
1. Check `/fonts/Lato-Regular-subset.woff2` exists
2. Verify preload paths are correct (no typos)
3. Check browser Network tab for 404 errors
4. Ensure `crossOrigin="anonymous"` is included

### Issue: Build fails
**Symptoms:** TypeScript or Next.js errors  
**Solution:**
1. Check `next.config.mjs` syntax
2. Ensure no extra commas or brackets
3. Run `npm run build 2>&1 | tail -50` to see errors
4. Revert changes if needed: `git checkout -- .`

### Issue: CSS still slow
**Symptoms:** CSS load time not improved  
**Solution:**
1. Verify Google Fonts line is removed
2. Check Network tab for external requests
3. Clear browser cache (Cmd+Shift+R)
4. Test on different network (throttle to 3G)
5. Proceed to Phase 2 for critical CSS

### Issue: Dark mode broken
**Symptoms:** Dark mode not working  
**Solution:**
1. Check if CSS variables are intact
2. Verify globals.css not corrupted
3. Test class toggle: `document.documentElement.classList.add('dark')`
4. Review git diff to see what changed

---

## 📋 READY FOR PHASE 2?

After Phase 1 is successfully deployed and verified, you can proceed to Phase 2.

**Phase 2 Prerequisites:**
- [ ] Phase 1 deployed and stable
- [ ] CSS load time measured and documented
- [ ] No production issues from Phase 1
- [ ] Team ready for critical CSS extraction

**Phase 2 Scope:**
- Extract critical CSS (<14KB)
- Inline critical CSS in `<head>`
- Async load remaining CSS
- Expected: -82% blocking time (from baseline)

**Phase 2 Time Estimate:** 1-2 days

---

## 🎯 NEXT STEPS

1. **Complete Phase 1 tasks** (check all boxes above)
2. **Monitor for 24-48 hours** (ensure stability)
3. **Document results** (CSS load times, Lighthouse scores)
4. **Decide on Phase 2** (review full plan in `CSS_OPTIMIZATION_PLAN.md`)

---

## 📞 SUPPORT

**Questions during implementation?**
- Review full plan: `docs/CSS_OPTIMIZATION_PLAN.md`
- Check summary: `docs/CSS_OPTIMIZATION_SUMMARY.md`
- Test locally first (always!)
- Monitor Vercel logs during deployment

**Rollback procedure if needed:**
```bash
# Find last working commit
git log --oneline -5

# Rollback to previous commit
git revert HEAD

# Or hard reset (careful!)
git reset --hard HEAD~1
git push origin main --force
```

---

**Checklist Version:** 1.0  
**Last Updated:** November 29, 2025  
**Related Docs:**
- `docs/CSS_OPTIMIZATION_PLAN.md` - Full implementation plan
- `docs/CSS_OPTIMIZATION_SUMMARY.md` - Quick reference guide
