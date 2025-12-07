# DOI Redirect SEO Fix - December 7, 2025

## Problem
DOI URLs (Digital Object Identifiers) sometimes redirect to journal homepages instead of specific articles. This can happen when:
- Articles are moved or renamed
- DOI resolution services have temporary issues
- Publishers change their URL structure
- Papers are retracted or archived

This creates potential SEO issues as Google might see these as "broken" or "low-quality" external links.

## Solution Implemented

### 1. **rel="nofollow external"** Attribute
Added to all DOI reference links to tell search engines:
- `nofollow`: Don't pass PageRank/link juice (scholarly citations shouldn't affect our SEO score)
- `external`: This is an external link (explicit signal)
- `noopener noreferrer`: Security best practices (already had this)

```tsx
rel="nofollow external noopener noreferrer"
```

### 2. **Schema.org Structured Data**
Added proper scholarly citation markup so Google understands these are academic references:

```tsx
<div itemScope itemType="https://schema.org/ScholarlyArticle">
  <span itemProp="author">{ref.authors}</span>
  <span itemProp="datePublished">{ref.year}</span>
  <p itemProp="name">{ref.title}</p>
  <p itemProp="publisher">{ref.journal}</p>
</div>
```

This explicitly tells search engines:
- These are scholarly citations (not navigation links)
- They have academic context (author, date, publisher)
- Redirects are expected behavior for academic content

### 3. **Visual External Link Indicator**
Added a small external link icon (↗) to each reference link:
- Improves user experience (users know it's leaving the site)
- Signals to crawlers this is intentional external navigation
- Hover effect shows interactivity

### 4. **data-citation-type Attribute**
Custom data attribute for additional semantic clarity:
```tsx
data-citation-type="scholarly"
```

## Files Changed
- `src/components/sections/knowledgebase/ReferencesSection.tsx`

## SEO Impact

### Before:
```html
<a href="https://doi.org/10.1002/ptr.8148" target="_blank" rel="noopener noreferrer">
  <p>Study title</p>
</a>
```
**Issues:**
- ❌ No signal that redirects are expected
- ❌ Passes link equity to potentially broken URLs
- ❌ No semantic markup for citations

### After:
```html
<div itemScope itemType="https://schema.org/ScholarlyArticle">
  <span itemProp="author">Authors</span>
  <span itemProp="datePublished">2024</span>
  <a 
    href="https://doi.org/10.1002/ptr.8148"
    rel="nofollow external noopener noreferrer"
    itemProp="citation"
    data-citation-type="scholarly"
  >
    <p itemProp="name">Study title</p>
    <svg><!-- external icon --></svg>
  </a>
  <p itemProp="publisher">Journal Name</p>
</div>
```
**Benefits:**
- ✅ Google knows these are scholarly citations
- ✅ Redirects won't affect our SEO score
- ✅ Proper semantic structure for academic content
- ✅ Better user experience with external link icon

## Testing

### Local Testing:
```bash
npm run build
npm run start
```

Visit any knowledgebase page with references:
- http://localhost:3000/vitamin-c (10 references)
- http://localhost:3000/omega-3 (12 references)
- http://localhost:3000/curcumin (9 references)

### Production Testing:
After deployment, verify:
1. External link icons appear on all reference links
2. Links open in new tab
3. No console errors
4. Schema.org markup validates: https://validator.schema.org/

### SEO Validation:
Run Google Rich Results Test on pages with references:
https://search.google.com/test/rich-results

Expected: ScholarlyArticle schema recognized

## Additional Notes

### Why "nofollow" for Academic Citations?
- Academic citations are for credibility, not link building
- Prevents link juice leakage to redirected pages
- Industry standard for citation links (like Wikipedia)
- Protects against "link rot" SEO penalties

### DOI Best Practices
DOI.org recommends using full URLs (we already do this):
- ✅ `https://doi.org/10.1002/ptr.8148`
- ❌ `doi:10.1002/ptr.8148`

### Future Improvements (Optional)
1. Add DOI metadata preview on hover (tooltip with abstract)
2. Implement fallback to PubMed/PMC links if DOI fails
3. Add "cite this" button with multiple citation formats
4. Track broken DOI links in analytics

## Deployment

```bash
git add src/components/sections/knowledgebase/ReferencesSection.tsx
git commit -m "fix: Add nofollow + schema.org markup to DOI reference links for SEO"
git push origin main
```

Vercel will auto-deploy in ~2-3 minutes.

## References Affected
- **17 supplement knowledgebase pages** with ~150+ total DOI links
- All future knowledgebase pages with references
- Automatically applies to all existing and new citations

---

**Status**: ✅ Complete  
**Version**: 0.7.2  
**Date**: December 7, 2025
