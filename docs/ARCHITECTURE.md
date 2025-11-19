# Module Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DATA PIPELINE                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Step 1-8: Price Per Unit Calculation                               │
│  ├── 3,184 matched products                                         │
│  ├── 3,039 with price per unit (95.4%)                              │
│  └── 145 excluded (no ingredient amounts)                           │
│                                                                       │
│  Step 9: Create Embeddable Module                                   │
│  ├── Filter products (keep only with PPU)                           │
│  ├── Group by supplement (17 categories)                            │
│  ├── Extract metadata & filters (40 types)                          │
│  └── Generate JSON files                                            │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ├─────────────────────┐
                              │                     │
                              ▼                     ▼
┌──────────────────────────────────┐  ┌──────────────────────────────┐
│    FULL MODULE JSON (2.4 MB)    │  │ PER-SUPPLEMENT JSON (100KB)  │
├──────────────────────────────────┤  ├──────────────────────────────┤
│ product-comparison-module.json   │  │ supplements/vitamin-d.json   │
│                                  │  │ supplements/magnesium.json   │
│ • All 3,039 products             │  │ supplements/omega-3.json     │
│ • All 17 supplements             │  │ ... (17 total files)         │
│ • 40 filters with IDs            │  │                              │
│ • Complete metadata              │  │ • Faster loading             │
│                                  │  │ • Category-specific          │
│ Use for: Multi-category pages    │  │ Use for: Single supplement   │
└──────────────────────────────────┘  └──────────────────────────────┘
                              │                     │
                              └─────────┬───────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        WEB API ENDPOINT                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  GET /api/products/product-comparison-module.json                   │
│  GET /api/products/supplements/{supplement}.json                    │
│  GET /api/products/module-config.json                               │
│                                                                       │
│  • Serve static JSON files                                          │
│  • Enable CORS for cross-origin requests                            │
│  • Add gzip compression (70% size reduction)                        │
│  • Optional: CDN for global performance                             │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    REACT WIDGET COMPONENT                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  SupplementComparisonWidget.tsx                                     │
│                                                                       │
│  Props:                          Features:                          │
│  ├── supplement (optional)       ├── Real-time search               │
│  ├── apiEndpoint                 ├── 40+ filters                    │
│  ├── defaultLimit                ├── Sort (PPU, price, rating)      │
│  ├── showSearch                  ├── Pagination                     │
│  ├── showFilters                 ├── Responsive design              │
│  └── compact                     └── TypeScript types               │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ├─────────────┬──────────────┐
                              │             │              │
                              ▼             ▼              ▼
┌────────────────────┐  ┌──────────────┐  ┌──────────────────────┐
│  BLOG POST EMBED   │  │  COMPARISON  │  │   LANDING PAGE       │
├────────────────────┤  │     PAGE     │  ├──────────────────────┤
│                    │  ├──────────────┤  │                      │
│ <article>          │  │ <div>        │  │ <main>               │
│   <h1>Best Vit D   │  │   <Widget    │  │   <Widget />         │
│   </h1>            │  │     supp="d" │  │                      │
│                    │  │   />         │  │   User selects       │
│   <Widget          │  │ </div>       │  │   supplement         │
│     supplement="d" │  │              │  │ </main>              │
│     compact        │  │ Dedicated    │  │                      │
│   />               │  │ product page │  │ Category selector    │
│                    │  │              │  │                      │
│ </article>         │  └──────────────┘  └──────────────────────┘
│                    │
│ Mid-article embed  │
└────────────────────┘
```

## Data Flow

```
User Interaction
      │
      ▼
┌─────────────────┐
│  User opens     │
│  page with      │──┐
│  widget         │  │
└─────────────────┘  │
                     │
      ┌──────────────┘
      │
      ▼
┌─────────────────┐     ┌──────────────────┐
│  Widget checks  │────>│  Pre-selected    │
│  props          │     │  supplement?     │
└─────────────────┘     └──────────────────┘
                              │
                 ┌────────────┴───────────┐
                 │                        │
                 ▼ No                     ▼ Yes
        ┌─────────────────┐     ┌──────────────────┐
        │  Show supplement│     │  Fetch JSON data │
        │  selector grid  │     │  for supplement  │
        └─────────────────┘     └──────────────────┘
                 │                        │
                 │ User clicks            │
                 └────────────┬───────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Load supplement │
                    │  data from API   │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Display product │
                    │  list with       │
                    │  filters & search│
                    └──────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
   ┌──────────┐      ┌──────────────┐    ┌──────────┐
   │  Search  │      │  Apply       │    │  Sort    │
   │  products│      │  filters     │    │  results │
   └──────────┘      └──────────────┘    └──────────┘
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Re-render list  │
                    │  (client-side)   │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  User clicks     │
                    │  "View Product"  │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Navigate to     │
                    │  retailer site   │
                    │  (affiliate link)│
                    └──────────────────┘
```

## Component Structure

```
SupplementComparisonWidget
├── State Management
│   ├── supplement (selected category)
│   ├── data (loaded JSON)
│   ├── searchTerm
│   ├── activeFilters (Set<string>)
│   ├── sortBy
│   └── limit
│
├── Effects
│   └── useEffect (load data when supplement changes)
│
├── Computed Values
│   └── filteredProducts (useMemo)
│       ├── Apply search
│       ├── Apply filters
│       ├── Sort
│       └── Limit
│
└── Render
    ├── No supplement selected
    │   └── Supplement selector grid
    │
    ├── Loading state
    │   └── Loading message
    │
    ├── Error state
    │   └── Error message + back button
    │
    └── Main view
        ├── Header
        │   ├── Back button
        │   ├── Supplement name
        │   └── Statistics
        │
        ├── Search bar (if showSearch)
        │
        ├── Controls
        │   ├── Sort selector
        │   └── Limit selector
        │
        ├── Filters (if showFilters)
        │   ├── Dietary preferences
        │   ├── Free-from options
        │   ├── Formulation types
        │   └── Clear all button
        │
        └── Product list
            ├── Results header
            └── Product cards
                ├── Product info
                │   ├── Name
                │   ├── Brand/Retailer
                │   └── Tags
                ├── Pricing
                │   ├── Price per unit
                │   ├── Total price
                │   └── Amount per serving
                └── Actions
                    ├── View product link
                    └── Rating (if available)
```

## File Structure

```
project/
├── data-pipeline/
│   ├── scripts/
│   │   └── step9-create-module/
│   │       └── create_embeddable_module.py
│   └── output/
│       └── step9-embeddable-module/
│           ├── product-comparison-module.json (2.4 MB)
│           ├── module-config.json
│           ├── STEP9_SUMMARY.md
│           └── supplements/
│               ├── vitamin-d.json (187 products)
│               ├── magnesium.json (191 products)
│               ├── omega-3.json (380 products)
│               └── ... (14 more)
│
├── src/
│   └── components/
│       ├── SupplementComparisonWidget.tsx (React component)
│       └── SupplementComparisonWidget.css (Styling)
│
├── docs/
│   ├── WIDGET_USAGE.md (Complete documentation)
│   ├── widget-demo.html (Interactive demo)
│   └── vanilla-example.html (Pure JS implementation)
│
└── QUICK_REFERENCE.md (Cheat sheet)
```

## Integration Patterns

### Pattern 1: Blog Post Embed
```tsx
// For supplement review articles
<SupplementComparisonWidget 
  supplement="vitamin-d"
  compact={true}
  defaultLimit={10}
/>
```
**Use case:** Mid-article product comparison  
**Loading:** Fast (100-300KB JSON)  
**User experience:** Immediate results

### Pattern 2: Comparison Page
```tsx
// Dedicated product comparison pages
<SupplementComparisonWidget 
  supplement="magnesium"
  showFilters={true}
  defaultLimit={50}
/>
```
**Use case:** Full-featured comparison  
**Loading:** Fast (100-300KB JSON)  
**User experience:** Comprehensive filtering

### Pattern 3: Landing Page
```tsx
// Category selector first
<SupplementComparisonWidget />
```
**Use case:** Main product discovery  
**Loading:** Instant (no initial load)  
**User experience:** Browse all categories

### Pattern 4: Multi-Category
```tsx
// Multiple widgets on one page
<div>
  <SupplementComparisonWidget supplement="vitamin-d" defaultLimit={5} />
  <SupplementComparisonWidget supplement="magnesium" defaultLimit={5} />
</div>
```
**Use case:** "Best of" collections  
**Loading:** Parallel (200-600KB total)  
**User experience:** Side-by-side comparison

## Performance Optimization

```
┌─────────────────────────────────────────────────────────────┐
│                     OPTIMIZATION LAYERS                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Layer 1: File Structure                                     │
│  ├── Per-supplement files (100-300KB vs 2.4MB)              │
│  └── Lazy load only needed data                             │
│                                                               │
│  Layer 2: Network                                            │
│  ├── CDN distribution (global edge caching)                 │
│  ├── Gzip compression (70% size reduction)                  │
│  └── HTTP/2 multiplexing                                    │
│                                                               │
│  Layer 3: Client-Side                                        │
│  ├── useMemo for filtered products                          │
│  ├── Debounced search input                                 │
│  ├── Virtual scrolling (future enhancement)                 │
│  └── Code splitting (lazy load component)                   │
│                                                               │
│  Layer 4: Caching                                            │
│  ├── Browser cache (304 responses)                          │
│  ├── Service worker (offline support)                       │
│  └── LocalStorage (recent searches)                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Deployment Checklist

- [ ] Generate data files (Step 9 script)
- [ ] Deploy JSON to `/api/products/` endpoint
- [ ] Enable gzip compression on server
- [ ] Set up CDN (optional but recommended)
- [ ] Install React component
- [ ] Test on staging environment
- [ ] Verify all 17 supplement categories load
- [ ] Test filters and search functionality
- [ ] Check mobile responsiveness
- [ ] Add affiliate tracking to URLs
- [ ] Monitor API response times
- [ ] Set up error tracking
- [ ] Configure analytics events
- [ ] Document custom styling for team
- [ ] Schedule weekly data updates
- [ ] Deploy to production

---

**Architecture Version:** 1.0  
**Last Updated:** 2025-11-19
