# Migration Gaps Analysis: v0.2 (React) → v0.3 (Next.js)

**Date:** November 24, 2025  
**Status:** CRITICAL GAPS IDENTIFIED - Migration Incomplete

---

## Executive Summary

The migration from v0.2 (React/Vite) to v0.3 (Next.js 16) is **~60% complete** with several critical features missing or improperly implemented. The Next.js version has the basic structure but lacks key v0.2 features that make the header functional and the landing page visually correct.

---

## 🚨 CRITICAL ISSUES

### 1. **Header is Completely Different & Missing Features**

#### v0.2 Header Features (FULLY IMPLEMENTED):
- ✅ Sophisticated search bar with expansion animation
- ✅ Search results dropdown with live filtering
- ✅ Knowledgebase dropdown with supplement thumbnails
- ✅ Supplement images in dropdown (using ResponsivePicture)
- ✅ Dark mode toggle
- ✅ Mobile hamburger menu
- ✅ Search expansion pushes navigation out of view on mobile
- ✅ Complex z-index layering for overlays
- ✅ Preloading of dropdown images (AVIF format)
- ✅ Memoized dropdown items for performance
- ✅ Route prefetching on hover

#### v0.3 Header Features (MINIMAL IMPLEMENTATION):
- ❌ NO search bar at all
- ❌ NO search results functionality
- ❌ Basic knowledgebase dropdown (missing images)
- ❌ No supplement thumbnails in dropdown
- ❌ Dark mode toggle exists but simplified
- ❌ Mobile menu exists but simplified
- ❌ No search expansion animation
- ❌ No image preloading
- ❌ No route prefetching
- ❌ Missing ResponsivePicture component usage

**Impact:** Users cannot search supplements in v0.3 - this is a PRIMARY feature in v0.2!

---

### 2. **Product Images Missing in Header Dropdown**

#### v0.2 Implementation:
```tsx
// Uses ResponsivePicture with optimized images
<ResponsivePicture
  file={fileName}
  alt={route.title}
  widths={[64, 96, 128, 256]}
  sizes="38px"
  fallbackSrc={imageUrl}
  imgProps={{ className: 'w-full h-full object-cover', draggable: false }}
/>
```

#### v0.3 Implementation:
```tsx
// Uses Next.js Image with unoptimized flag
<Image
  src={imageUrl}
  alt={route.title}
  width={40}
  height={40}
  className="w-full h-full object-cover"
  unoptimized  // ← DEFEATS PURPOSE OF NEXT.JS IMAGE OPTIMIZATION!
/>
```

**Problems:**
1. Images are marked `unoptimized` - not using Next.js image optimization
2. No responsive srcset generation (v0.2 has 4 sizes: 64, 96, 128, 256)
3. No AVIF/WebP format switching
4. No preloading of top 6 images (v0.2 has this)

---

### 3. **Landing Page Hero Not Full Width**

#### v0.2 Implementation:
```tsx
<div
  id="hero"
  className="relative flex items-center justify-center"
  style={{
    minHeight: '600px',
    height: '75vh',
    maxHeight: '75vh',
    marginTop: 'var(--header-height)'
  }}
>
```

#### v0.3 Implementation:
```tsx
<div
  id="hero"
  className="relative flex items-center justify-center"
  style={{
    minHeight: '600px',
    height: '75vh',
    maxHeight: '75vh',
    marginTop: 'var(--header-height)',
    width: '100vw',  // ← Added but doesn't work
    marginLeft: 'calc(-50vw + 50%)',  // ← Hack that breaks layout
    marginRight: 'calc(-50vw + 50%)'
  }}
>
```

**Problem:** The v0.3 uses CSS hacks to escape container padding, but this is WRONG. The real issue is likely:
- Hero is inside a container with padding in Next.js layout
- In v0.2, hero is a direct child of the main flex container
- The LandingPage structure differs between versions

**Root Cause:** v0.3 has `app/layout.tsx` wrapping everything in `<main className="min-h-screen">`, which may have default padding or constraints.

---

### 4. **Image System Differences**

#### v0.2 (Vite):
- Uses Figma plugin imports: `figma:asset/hash.png`
- Vite processes these at build time
- ResponsivePicture component generates multiple sizes
- Optimized images in `/public/optimized/` with multiple formats/sizes

#### v0.3 (Next.js):
- Uses string paths: `"hash.png"`
- Next.js doesn't process figma: imports
- ResponsivePicture component exists but NOT USED in Header
- Trying to use Next.js Image component but with `unoptimized` flag

**Missing Components in v0.3 Header:**
- SearchBar component
- SearchResults component
- Proper ResponsivePicture usage

---

## 📋 Missing Components & Features

### Components in v0.2 NOT in v0.3 Header:

1. **SearchBar Component** (inline in v0.2 Header)
   - Animated expansion (320px when open, 24px when closed)
   - X button to clear search
   - Focus management
   - Integration with SearchResults

2. **SearchResults Component**
   - Dropdown below search bar
   - Filters KNOWLEDGEBASE_ROUTES by query
   - Shows title + description
   - Click to navigate

3. **Advanced Dropdown Features**
   - Image preloading (AVIF) for top 6 items
   - ResponsivePicture for thumbnails
   - Scroll indicator gradient
   - Memoized items for performance

### Features in v0.2 NOT in v0.3:

1. **Search Overlay**
   - Full-page backdrop when search is expanded
   - Blur effect on background
   - Click outside to close

2. **Route Prefetching**
   - v0.2 prefetches routes on hover in dropdown
   - v0.3 doesn't have this (could use Next.js Link prefetch)

3. **Image Optimization Pipeline**
   - v0.2: Figma → Vite → ResponsivePicture → /optimized/
   - v0.3: String paths → Next.js Image (but marked unoptimized)

---

## 🔧 Architecture Differences

### v0.2 (React/Vite SPA):
```
App.tsx (Root)
├── AnalyticsProvider
├── Header (with navigation state)
│   ├── SearchBar (inline)
│   ├── SearchResults (conditional)
│   ├── KnowledgebaseDropdown
│   └── MobileMenu
├── [Current Page Component]
└── Footer
```

### v0.3 (Next.js App Router):
```
app/layout.tsx (Root)
├── AnalyticsProvider
├── Header (Server Component)
│   └── HeaderClient (Client Component)
│       ├── KnowledgebaseDropdown
│       └── MobileMenu
├── [Page from app/*/page.tsx]
└── Footer
```

**Key Differences:**
1. v0.2: Single Header component with all state
2. v0.3: Split between Server (Header) and Client (HeaderClient) components
3. v0.2: Uses callback-based navigation (`onNavigate`)
4. v0.3: Uses Next.js router (`useRouter`, `<Link>`)

---

## 🎯 Routes Configuration Differences

### v0.2:
```typescript
{
  key: 'ashwagandhav2',
  title: 'Ashwagandha',
  description: '...',
  componentPath: './components/AshwagandhaPageNewV2',
  componentName: 'AshwagandhaPageNewV2',
  showInNav: true,
  category: 'v2',
  subcategory: 'Phytochemicals'
}
```

### v0.3:
```typescript
{
  key: 'ashwagandhav2',
  title: 'Ashwagandha',
  path: '/ashwagandha',  // ← ADDED for Next.js routing
  description: '...',
  componentPath: './components/AshwagandhaKnowledgebasePage',  // ← Different name
  componentName: 'AshwagandhaKnowledgebasePage',
  showInNav: true,
  category: 'v2',
  subcategory: 'Phytochemicals'
}
```

**Changes:**
- Added `path` field for explicit Next.js routes
- Component names changed (e.g., `PageNewV2` → `KnowledgebasePage`)
- Added `supplementId` field for comparison pages

---

## 📸 Image Implementation Comparison

### v0.2 Supplement Images (`src/utils/supplementImages.ts`):
```typescript
import imgImageAshwagandha from "figma:asset/e5cf0235b0f882bf01162ab58a79301b0c1e2ebe.png";

export const SUPPLEMENT_IMAGES: Record<PageKey, string> = {
  'ashwagandhav2': imgImageAshwagandha,  // Vite processes this to URL
  // ...
};
```

### v0.3 Supplement Images (`src/lib/supplementImages.ts`):
```typescript
const imgImageAshwagandha = "e5cf0235b0f882bf01162ab58a79301b0c1e2ebe.png";

export const SUPPLEMENT_IMAGES: Record<PageKey, string> = {
  'ashwagandhav2': imgImageAshwagandha,  // Just a string, manually mapped
  // ...
};

export function getSupplementThumbnail(pageKey: PageKey): string | undefined {
  const baseFile = SUPPLEMENT_IMAGES[pageKey];
  if (!baseFile) return undefined;
  const base = baseFile.replace(/\.(png|jpe?g)$/i, '');
  return `/optimized/${base}-256.webp`;  // Manually construct path
}
```

**Key Difference:**
- v0.2: Vite automatically processes imports
- v0.3: Manual path construction, assumes files exist in `/public/optimized/`

---

## 🐛 Specific Bugs in v0.3

### 1. Hero Image Bleeding Out of Container
**File:** `src/components/LandingPage.tsx`  
**Lines:** 127-134

```tsx
// WRONG - CSS hack doesn't work properly
style={{
  minHeight: '600px',
  height: '75vh',
  maxHeight: '75vh',
  marginTop: 'var(--header-height)',
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',  // ← HACK
  marginRight: 'calc(-50vw + 50%)'  // ← HACK
}}
```

**Solution:** Hero should be direct child of `<body>` or outside any container with padding. In v0.2, this works because the entire page structure is different.

### 2. Missing Search Functionality
**File:** `app/components/HeaderClient.tsx`  
**Missing:** Entire SearchBar and SearchResults components

### 3. Dropdown Images Not Optimized
**File:** `app/components/HeaderClient.tsx` (line 68)

```tsx
// WRONG - defeats Next.js optimization
<Image
  src={imageUrl}
  alt={route.title}
  width={40}
  height={40}
  className="w-full h-full object-cover"
  unoptimized  // ← WHY IS THIS HERE?
/>
```

---

## ✅ What's Working Correctly

1. **Basic routing** - Next.js App Router with dynamic routes
2. **Static page generation** - All pages generate at build time
3. **Analytics** - GTM integration works
4. **Footer** - Appears identical
5. **Dark mode** - Toggle exists (though simplified)
6. **Mobile menu** - Basic version works
7. **Component architecture** - Split into Server/Client correctly
8. **Route adapter** - `getRouteByKey()` works for navigation

---

## 🚀 Migration Priority Tasks

### CRITICAL (Must Fix Before Launch):

#### 1. Add Search Functionality to Header
**Files to Create/Modify:**
- `app/components/HeaderClient.tsx` - Add SearchBar component
- `src/components/SearchResults.tsx` - Already exists, integrate it
- `app/components/Header.tsx` - Pass search state to HeaderClient

**Implementation:**
```tsx
// In HeaderClient.tsx, add:
function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  // ... implement v0.2 SearchBar logic
}
```

#### 2. Fix Header Dropdown Images
**File:** `app/components/HeaderClient.tsx`

**Change:**
```tsx
// REMOVE unoptimized flag
<Image
  src={imageUrl}
  alt={route.title}
  width={40}
  height={40}
  className="w-full h-full object-cover"
  // unoptimized  ← DELETE THIS
/>
```

**Better Solution:** Use ResponsivePicture component like v0.2:
```tsx
import { ResponsivePicture } from '@/components/ResponsivePicture';

<ResponsivePicture
  file={baseFileName}
  alt={route.title}
  widths={[64, 96, 128, 256]}
  sizes="40px"
  imgProps={{ className: 'w-full h-full object-cover' }}
/>
```

#### 3. Fix Landing Page Hero Full Width
**File:** `app/layout.tsx` and `src/components/LandingPage.tsx`

**Option A:** Remove padding from layout
```tsx
// app/layout.tsx
<main className="min-h-screen">  {/* Remove any padding classes */}
  {children}
</main>
```

**Option B:** Make hero absolute positioned
```tsx
// LandingPage.tsx - HeroSection
<div
  id="hero"
  className="absolute left-0 right-0"  // ← Use absolute positioning
  style={{
    top: 'var(--header-height)',
    minHeight: '600px',
    height: '75vh',
    maxHeight: '75vh',
  }}
>
```

**Option C:** Use Next.js specific full-bleed pattern
```tsx
<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  {/* Hero content */}
</div>
```

### HIGH PRIORITY (Improve UX):

#### 4. Add Image Preloading to Dropdown
**File:** `app/components/HeaderClient.tsx`

Port the v0.2 logic:
```tsx
useEffect(() => {
  const toPreload = navRoutes.slice(0, 6);
  toPreload.forEach((route) => {
    const src = getSupplementThumbnail(route.key);
    if (!src) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}, [navRoutes]);
```

#### 5. Add Route Prefetching on Hover
**File:** `app/components/HeaderClient.tsx`

Use Next.js Link prefetch:
```tsx
<Link 
  href={href}
  prefetch={true}  // ← Next.js will prefetch on hover
  onPointerEnter={() => router.prefetch(href)}
>
```

#### 6. Add Search Overlay Backdrop
**File:** `app/components/HeaderClient.tsx`

Port from v0.2:
```tsx
{isSearchExpanded && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/30 z-40"
    onClick={() => setIsSearchExpanded(false)}
  />
)}
```

### MEDIUM PRIORITY (Polish):

7. Memoize dropdown items (already in v0.2)
8. Add scroll indicator gradient to dropdown
9. Optimize image loading strategy (lazy vs eager)
10. Add search analytics tracking

---

## 📊 Component Comparison Table

| Component | v0.2 | v0.3 | Status |
|-----------|------|------|--------|
| Header | ✅ Full featured | ⚠️ Basic | 60% complete |
| SearchBar | ✅ Animated | ❌ Missing | **NOT STARTED** |
| SearchResults | ✅ Dropdown | ❌ Missing | **NOT STARTED** |
| KnowledgebaseDropdown | ✅ With images | ⚠️ No images | 70% complete |
| MobileMenu | ✅ Full featured | ⚠️ Basic | 80% complete |
| DarkModeToggle | ✅ Works | ✅ Works | 100% |
| ResponsivePicture | ✅ Used everywhere | ⚠️ Not in Header | 50% usage |
| Footer | ✅ Works | ✅ Works | 100% |
| LandingPage | ✅ Full width hero | ❌ Broken layout | 90% (hero broken) |
| KnowledgebaseTemplate | ✅ Works | ✅ Works | 100% |
| GlossaryTemplate | ✅ Works | ✅ Works | 100% |

---

## 🎨 Design System Comparison

Both versions use the same CSS variables and design system (in `styles/globals.css`), so styling should be consistent. The differences are purely functional.

**CSS Variables Used:**
- `--header-height`: 80px
- `--header-bg`: Background color
- `--header-text`: Text color
- `--page-padding-inline`: Horizontal padding
- etc.

---

## 📦 File Structure Comparison

### v0.2 Key Files:
```
src/
├── App.tsx                    # Root component with routing
├── components/
│   ├── Header.tsx            # 654 lines - full featured
│   ├── SearchResults.tsx     # Search dropdown
│   ├── ResponsivePicture.tsx # Image component
│   └── LandingPage.tsx       # Landing page
├── utils/
│   └── supplementImages.ts   # Image imports (Figma)
└── routes.config.ts          # Route definitions
```

### v0.3 Key Files:
```
app/
├── layout.tsx                # Root layout
├── page.tsx                  # Home page
├── [slug]/page.tsx          # Dynamic supplement pages
├── components/
│   ├── Header.tsx           # 84 lines - server component
│   ├── HeaderClient.tsx     # 195 lines - client component
│   └── LandingPageWrapper.tsx
src/
├── components/
│   ├── SearchResults.tsx    # EXISTS but not used!
│   ├── ResponsivePicture.tsx
│   └── LandingPage.tsx
├── lib/
│   └── supplementImages.ts  # String paths (no Figma)
└── routes.config.ts         # Route definitions
```

**Key Observation:** SearchResults.tsx EXISTS in v0.3 but is NOT IMPORTED OR USED in the Header!

---

## 🔍 Detailed Code Differences

### Header Complexity:

| Metric | v0.2 | v0.3 |
|--------|------|------|
| Total Lines | 654 | 279 (Header + HeaderClient) |
| Components | 10 | 3 |
| State Variables | 6 | 2 |
| useEffect Hooks | 5 | 2 |
| Animation Groups | 3 | 1 |

v0.2 is **2.3x more complex** - this is expected since it has search + advanced features.

---

## 🛠️ Recommended Migration Plan

### Phase 1: Critical Fixes (1-2 days)

**Day 1 Morning:**
1. Add SearchBar to HeaderClient.tsx
   - Port animation logic from v0.2
   - Port expansion states
   - Add search icon/input/clear button

**Day 1 Afternoon:**
2. Integrate SearchResults component
   - Import existing SearchResults.tsx
   - Wire up to SearchBar state
   - Test search filtering

**Day 2 Morning:**
3. Fix header dropdown images
   - Remove `unoptimized` flag OR
   - Switch to ResponsivePicture component
   - Test image loading

**Day 2 Afternoon:**
4. Fix landing page hero width
   - Debug layout.tsx padding
   - Test full-width hero
   - Verify on mobile/desktop

### Phase 2: UX Improvements (1 day)

**Day 3:**
5. Add image preloading for dropdown
6. Add route prefetching on hover
7. Add search overlay backdrop
8. Memoize dropdown items
9. Add search analytics tracking

### Phase 3: Polish (0.5 days)

**Day 4:**
10. Test all search interactions
11. Test dropdown interactions
12. Mobile testing
13. Performance audit
14. Cross-browser testing

---

## 🧪 Testing Checklist

### Critical Features to Test:

- [ ] Search bar expands/collapses smoothly
- [ ] Search filters supplements correctly
- [ ] Search results dropdown appears below input
- [ ] Clicking search result navigates to page
- [ ] Knowledgebase dropdown shows images
- [ ] Images in dropdown load properly (not 404)
- [ ] Mobile menu opens/closes
- [ ] Dark mode toggle works
- [ ] Hero image spans full viewport width
- [ ] No horizontal scrollbar on any page
- [ ] Navigation links work on all pages
- [ ] Analytics tracks all interactions

### Performance to Verify:

- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] Images use AVIF/WebP formats
- [ ] Dropdown images preload properly
- [ ] No layout shift when opening dropdown
- [ ] Search is responsive (< 100ms to update)

---

## 📋 Code Snippets to Port

### 1. SearchBar Component (from v0.2 Header.tsx)

```tsx
function SearchBar({ isExpanded, setIsExpanded, onNavigate }: {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  onNavigate: (page: PageKey) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsExpanded(false);
  };

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    handleClear();
  };

  return (
    <>
      <motion.div
        className="relative flex items-center"
        initial={false}
        animate={{
          width: isExpanded ? '320px' : '24px',
        }}
        transition={{
          duration: 0.6,
          ease: [0.32, 0.72, 0, 1],
        }}
        style={{ height: '24px' }}
      >
        {!isExpanded ? (
          <Search
            className="h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: 'var(--header-text)' }}
            onClick={handleSearchClick}
          />
        ) : (
          <div className="relative flex items-center w-full h-6">
            <Search
              className="absolute left-3 h-4 w-4 pointer-events-none"
              style={{ color: 'var(--header-secondary)' }}
            />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search supplements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 h-6 border-0 focus-visible:ring-1 text-sm"
            />
            <X
              className="absolute right-3 h-4 w-4 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: 'var(--header-secondary)' }}
              onClick={handleClear}
            />
          </div>
        )}
      </motion.div>

      {isExpanded && searchQuery && (
        <div className="absolute top-full mt-2 w-[320px]" style={{ right: 0, zIndex: 10001 }}>
          <SearchResults query={searchQuery} onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
}
```

### 2. Image Preloading (from v0.2 Header.tsx)

```tsx
useEffect(() => {
  const toPreload = navRoutes.slice(0, 6);
  const cleanupIds: string[] = [];
  toPreload.forEach((route) => {
    const src = SUPPLEMENT_IMAGES[route.key as PageKey];
    if (!src) return;
    try {
      const last = src.split('?')[0].split('/').pop() || '';
      const cleaned = last.replace(/-[A-Za-z0-9_~.-]+\.(png|jpe?g)$/i, '.$1');
      const base = cleaned.replace(/\.(png|jpe?g)$/i, '');
      if (!base) return;
      const id = `preload-nav-${base}`;
      if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'preload';
        link.as = 'image';
        link.setAttribute('imagesrcset', `/optimized/${base}-96.avif 96w`);
        link.setAttribute('imagesizes', '38px');
        document.head.appendChild(link);
        cleanupIds.push(id);
      }
    } catch { }
  });
  return () => {
    cleanupIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  };
}, [navRoutes]);
```

### 3. Search Overlay Backdrop (from v0.2 Header.tsx)

```tsx
<AnimatePresence>
  {isSearchExpanded && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/30"
      style={{ zIndex: 'var(--z-sticky)' }}
      onClick={() => setIsSearchExpanded(false)}
    />
  )}
</AnimatePresence>
```

---

## 🎯 Success Criteria

Migration will be considered complete when:

1. ✅ Search bar works exactly like v0.2
2. ✅ All header dropdown images load properly
3. ✅ Landing page hero is full viewport width
4. ✅ No console errors
5. ✅ No 404s for images
6. ✅ All analytics events fire
7. ✅ Mobile menu fully functional
8. ✅ Dark mode works everywhere
9. ✅ Performance metrics match or exceed v0.2
10. ✅ All 218 pages generate without errors

---

## 🔗 Related Files to Review

### Must Read:
1. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/src/components/Header.tsx` (654 lines)
2. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/app/components/HeaderClient.tsx` (195 lines)
3. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/src/components/SearchResults.tsx`
4. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/components/SearchResults.tsx`

### Image System:
5. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/src/utils/supplementImages.ts`
6. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/lib/supplementImages.ts`
7. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/src/components/ResponsivePicture.tsx`
8. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/components/ResponsivePicture.tsx`

### Layout:
9. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/app/layout.tsx`
10. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/src/components/LandingPage.tsx`
11. `/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/components/LandingPage.tsx`

---

## 💡 Next.js Specific Considerations

### What to Keep in Mind:

1. **Server vs Client Components**
   - Header is Server Component (static)
   - HeaderClient is Client Component (interactive)
   - Can't use useState in Server Components

2. **Image Optimization**
   - Next.js Image component handles optimization automatically
   - Don't use `unoptimized` flag unless absolutely necessary
   - Can still use ResponsivePicture for advanced control

3. **Routing**
   - Use `useRouter()` from `next/navigation` (NOT `next/router`)
   - Use `<Link>` for navigation (auto-prefetches)
   - Can use `router.prefetch()` for manual prefetching

4. **CSS Variables**
   - Work the same in Next.js
   - Define in `globals.css`
   - Access via `var(--variable-name)`

5. **Build Output**
   - Static pages in `.next/server/app/`
   - Optimized images in `.next/static/media/`
   - Check build output to verify all pages generated

---

## 📞 Questions to Answer

1. **Why is `unoptimized` flag used in HeaderClient?**
   - Likely a workaround when images weren't loading
   - Should be removed and images properly configured

2. **Where are the optimized images stored in v0.3?**
   - Should be in `/public/optimized/` like v0.2
   - Verify these exist with correct filenames

3. **Why isn't SearchResults.tsx imported in v0.3?**
   - File exists but not used
   - Was this migration incomplete?

4. **What's the hero width issue root cause?**
   - CSS hack in v0.3 suggests layout problem
   - Need to investigate `app/layout.tsx` padding

---

## End of Analysis

**Next Steps:** 
1. Review this document
2. Prioritize Phase 1 tasks
3. Start with SearchBar implementation
4. Test incrementally
5. Deploy only after all critical issues resolved

**Estimated Time to Completion:** 3-4 days full-time work
