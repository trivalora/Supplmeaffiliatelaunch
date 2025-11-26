# Frontend Migration Guide: Static JSON → Database API

## 🎯 Overview

This guide provides step-by-step instructions for migrating from static JSON files to the database-backed API. We'll update components one by one to use the new React hooks.

## ✅ What's Already Done

### 1. API Routes (Week 3) - Complete!
- ✅ GET /api/supplements
- ✅ GET /api/supplements/[slug]
- ✅ GET /api/supplements/[slug]/products
- ✅ GET /api/products/[id]
- ✅ GET /api/products/search

### 2. React Hooks - Complete!
- ✅ `useSupplements()` - List all supplements
- ✅ `useSupplementDetail(slug)` - Get single supplement
- ✅ `useSupplementProducts(slug, filters)` - Products with filters
- ✅ `useProduct(id)` - Single product detail
- ✅ `useProductSearch(query, filters)` - Search all products

### 3. Loading/Error Components - Complete!
- ✅ `LoadingSkeleton` - Visual loading states
- ✅ `ErrorState` - User-friendly error messages
- ✅ `EmptyState` - No results message

---

## 📋 Migration Checklist

### Phase 1: Update Product Comparison Client ✅ PRIORITY
**File**: `src/components/ProductComparisonClient.tsx`  
**Current**: Loads from `/api/products/supplements/${supplement}.json`  
**Target**: Use `useSupplementProducts()` hook

**Changes Needed**:
1. Import `useSupplementProducts` hook
2. Replace `fetch()` call with hook
3. Remove `loadSupplement()` function
4. Use hook's `loading`, `error`, `products` states
5. Update filters to use hook's `setFilters()`

**Before**:
```tsx
async function loadSupplement(supplement: string) {
  const response = await fetch(`/api/products/supplements/${supplement}.json`);
  const data = await response.json();
  setCurrentData(data.products || []);
}
```

**After**:
```tsx
const { products, loading, error, filters, setFilters } = useSupplementProducts(supplementId, {
  page: 1,
  limit: 100,
  sort: sortBy,
  in_stock: true
});
```

---

### Phase 2: Update Knowledgebase Pages
**Files**: `src/components/pages/supplements/*KnowledgebasePage.tsx` (17 files)  
**Current**: Import static JSON at build time  
**Target**: Use `useSupplementDetail()` hook

**Example Migration**:

**Before** (AshwagandhaKnowledgebasePage.tsx):
```tsx
import ashwagandhaData from '@/public/api/products/supplements/ashwagandha.json';

export function AshwagandhaKnowledgebasePage() {
  const productCount = ashwagandhaData.products.length;
  const minPrice = Math.min(...ashwagandhaData.products.map(p => p.price));
  
  return <KnowledgebaseTemplate supplementName="Ashwagandha" productCount={productCount} />;
}
```

**After**:
```tsx
'use client';
import { useSupplementDetail } from '@/hooks';
import { LoadingSkeleton, ErrorState } from '@/components/shared';

export function AshwagandhaKnowledgebasePage() {
  const { supplement, loading, error } = useSupplementDetail('ashwagandha');
  
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState error={error} />;
  if (!supplement) return null;
  
  return (
    <KnowledgebaseTemplate 
      supplementName={supplement.name}
      productCount={supplement.product_count}
      minPrice={supplement.min_price}
      maxPrice={supplement.max_price}
    />
  );
}
```

---

### Phase 3: Update Product Detail Pages
**Files**: Product detail page components  
**Current**: Load product data from JSON  
**Target**: Use `useProduct(id)` hook

**Migration**:
```tsx
'use client';
import { useProduct } from '@/hooks';
import { ProductDetailSkeleton, ErrorState } from '@/components/shared';

export function ProductDetailPage({ productId }: { productId: string }) {
  const { product, loading, error, refetch } = useProduct(productId);
  
  if (loading) return <ProductDetailSkeleton />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;
  if (!product) return <EmptyState message="Product not found" />;
  
  return (
    <div>
      <h1>{product.brand} - {product.product_name}</h1>
      {/* Render product details */}
      {product.prices.map(price => (
        <PriceCard key={price.retailer} price={price} />
      ))}
    </div>
  );
}
```

---

### Phase 4: Add Search Functionality
**Goal**: Implement global product search

**New Component**: `src/components/shared/ProductSearch.tsx`

```tsx
'use client';
import { useState } from 'react';
import { useProductSearch } from '@/hooks';
import { Search } from 'lucide-react';

export function ProductSearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { products, loading, error, query, setQuery, search } = useProductSearch();
  
  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all products..."
        className="w-full px-4 py-2 border rounded-lg"
      />
      
      {query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-lg shadow-lg max-h-96 overflow-auto">
          {loading && <div>Searching...</div>}
          {error && <div className="text-red-500 p-4">{error}</div>}
          {products.length === 0 && !loading && (
            <div className="p-4 text-text-secondary">No products found</div>
          )}
          {products.map(product => (
            <div key={product.id} className="p-4 hover:bg-tertiary cursor-pointer">
              <div className="font-semibold">{product.brand}</div>
              <div className="text-sm text-text-secondary">{product.product_name}</div>
              <div className="text-primary font-semibold">${product.best_total_price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## 🗑️ Cleanup Phase: Remove Static Files

### After all components are migrated:

1. **Delete static JSON files**:
```bash
rm -rf public/api/products/supplements/*.json
```

2. **Remove unused imports**:
```bash
# Search for all JSON imports
grep -r "from '@/public/api/products" src/components/
# Remove these imports from each file
```

3. **Update .gitignore**:
```
# No longer needed
# public/api/products/supplements/
```

4. **Verify build still works**:
```bash
npm run build
```

---

## 🎨 UI Components for Filters

### Price Range Filter
```tsx
<DualRangeSlider
  min={0}
  max={100}
  value={priceRange}
  onValueChange={setPriceRange}
  className="w-full"
/>
```

### Brand Filter
```tsx
<input
  type="text"
  value={filters.brand || ''}
  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
  placeholder="Filter by brand..."
/>
```

### Retailer Filter
```tsx
<select
  value={filters.retailer || ''}
  onChange={(e) => setFilters({ ...filters, retailer: e.target.value })}
>
  <option value="">All Retailers</option>
  <option value="iHerb">iHerb</option>
  <option value="Amazon">Amazon</option>
  {/* etc */}
</select>
```

### Third-Party Tested Toggle
```tsx
<label>
  <input
    type="checkbox"
    checked={filters.third_party_tested || false}
    onChange={(e) => setFilters({ ...filters, third_party_tested: e.target.checked })}
  />
  Third-Party Tested Only
</label>
```

---

## 🔄 Migration Order (Recommended)

1. ✅ **ProductComparisonClient** (DONE FIRST - most critical)
2. **Knowledgebase Pages** (17 pages - similar pattern)
3. **Product Detail Pages** (use existing route structure)
4. **Add Search Component** (new feature!)
5. **Cleanup Static Files** (after verifying everything works)

---

## 📊 Progress Tracking

### Components to Migrate (Total: ~20)
- [ ] ProductComparisonClient.tsx (1)
- [ ] AshwagandhaKnowledgebasePage.tsx (1/17)
- [ ] BcaaKnowledgebasePage.tsx (2/17)
- [ ] CalciumKnowledgebasePage.tsx (3/17)
- [ ] CaseinProteinKnowledgebasePage.tsx (4/17)
- [ ] CollagenKnowledgebasePage.tsx (5/17)
- [ ] CreatineKnowledgebasePage.tsx (6/17)
- [ ] CurcuminKnowledgebasePage.tsx (7/17)
- [ ] IronKnowledgebasePage.tsx (8/17)
- [ ] MagnesiumKnowledgebasePage.tsx (9/17)
- [ ] MultivitaminKnowledgebasePage.tsx (10/17)
- [ ] Omega3KnowledgebasePage.tsx (11/17)
- [ ] PrebioticsKnowledgebasePage.tsx (12/17)
- [ ] ProbioticsKnowledgebasePage.tsx (13/17)
- [ ] SulforaphaneKnowledgebasePage.tsx (14/17)
- [ ] VitaminCKnowledgebasePage.tsx (15/17)
- [ ] VitaminDKnowledgebasePage.tsx (16/17)
- [ ] WheyProteinKnowledgebasePage.tsx (17/17)
- [ ] ProductDetailClient (if exists)

### Static Files to Remove (~35 MB)
- [ ] public/api/products/supplements/*.json (17 files)
- [ ] Any backup JSON files

---

## 🚀 Quick Start

### 1. Start with ProductComparisonClient
This is the most complex component and most frequently used.

### 2. Test thoroughly
```bash
npm run dev
# Test comparison pages
# Test filters
# Test sorting
# Test pagination
```

### 3. Migrate one knowledgebase page
Pick Ashwagandha as the test case (most products).

### 4. Verify performance
- API responses < 500ms
- No loading flicker
- Smooth filter transitions

### 5. Roll out to all pages
Use the pattern from step 3 for remaining pages.

---

## 💡 Tips & Best Practices

1. **Keep old code commented** for first migration:
```tsx
// OLD: Static JSON
// import data from '@/public/api/products/supplements/ashwagandha.json';

// NEW: Database API
const { supplement, loading, error } = useSupplementDetail('ashwagandha');
```

2. **Add error boundaries**:
```tsx
<ErrorBoundary fallback={<ErrorState error="Something went wrong" />}>
  <YourComponent />
</ErrorBoundary>
```

3. **Test incrementally**:
- Migrate one page
- Test thoroughly
- Deploy
- Monitor
- Repeat

4. **Monitor performance**:
```tsx
console.time('API call');
const data = await fetch('/api/supplements/ashwagandha');
console.timeEnd('API call'); // Should be < 500ms
```

---

## 📝 Next Steps

After completing the migration:

1. **Verify all pages work**
2. **Remove static JSON files**
3. **Update documentation**
4. **Deploy to production**
5. **Monitor for issues**
6. **Celebrate! 🎉**

---

**Status**: Ready to begin Phase 1  
**Estimated Time**: 6-8 hours total  
**Priority**: ProductComparisonClient → Knowledgebase Pages → Cleanup
