# API Development: Week 3-4 Implementation Plan

**Status**: 🔄 IN PROGRESS  
**Duration**: Week 3-4 (20 hours)  
**Dependencies**: ✅ Database migration complete (Week 1-2)  
**Date Started**: November 26, 2025

---

## Overview

With the database migration complete (17 supplements, 1,663 products, 1,986 prices), we now build the API layer to serve this data. This enables dynamic product loading, search capabilities, and prepares for future features like real-time price updates.

### Database Status (Week 1-2 Complete ✅)

```sql
-- Supabase PostgreSQL (api schema)
✅ supplements (17 rows)
✅ products (1,663 rows) - with json_id field preserving original IDs
✅ prices (1,986 rows)
✅ retailers (7 rows)
✅ glossary_terms (0 rows) - ready for future migration
✅ 14 indexes for performance
✅ 2 views (product_details_view, supplement_summary_view)
✅ Full-text search capabilities
```

---

## Week 3: Core API Endpoints (12 hours)

### Day 1-2: Supplements & Products API (6 hours)

#### 1. GET /api/supplements
**Purpose**: List all supplements with summary data

**Implementation**:
```typescript
// app/api/supplements/route.ts
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('supplement_summary_view')
    .select('*')
    .eq('show_in_nav', true)
    .order('sort_order');
  
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ supplements: data });
}
```

**Response**:
```json
{
  "supplements": [
    {
      "slug": "ashwagandha",
      "name": "Ashwagandha",
      "display_name": "Ashwagandha",
      "subcategory": "Adaptogens",
      "product_count": 96,
      "avg_price": 15.99,
      "hero_image_url": "/images/supplements/ashwagandha.webp"
    }
  ]
}
```

**Tests**:
- ✅ Returns all active supplements
- ✅ Includes product counts from view
- ✅ Proper error handling
- ✅ Caching headers (revalidate: 3600)

#### 2. GET /api/supplements/[slug]
**Purpose**: Get single supplement with full details

**Implementation**:
```typescript
// app/api/supplements/[slug]/route.ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('supplements')
    .select(`
      *,
      products (count)
    `)
    .eq('slug', slug)
    .single();
  
  if (error) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json({ supplement: data });
}
```

**Tests**:
- ✅ Returns supplement by slug
- ✅ Includes product count
- ✅ 404 for invalid slug
- ✅ ISR: revalidate every hour

#### 3. GET /api/supplements/[slug]/products
**Purpose**: Get paginated product list for a supplement

**Implementation**:
```typescript
// app/api/supplements/[slug]/products/route.ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  const retailer = searchParams.get('retailer');
  const sortBy = searchParams.get('sort') || 'price_asc';
  
  const supabase = createClient();
  
  // Get supplement ID
  const { data: supplement } = await supabase
    .from('supplements')
    .select('id')
    .eq('slug', slug)
    .single();
  
  if (!supplement) {
    return Response.json({ error: 'Supplement not found' }, { status: 404 });
  }
  
  // Build query
  let query = supabase
    .from('product_details_view')
    .select('*', { count: 'exact' })
    .eq('supplement_slug', slug);
  
  // Filter by retailer if specified
  if (retailer) {
    query = query.contains('available_retailers', [retailer]);
  }
  
  // Sort
  const [sortField, sortDir] = sortBy.split('_');
  if (sortField === 'price') {
    query = query.order('best_total_price', { ascending: sortDir === 'asc' });
  } else if (sortField === 'brand') {
    query = query.order('brand', { ascending: sortDir === 'asc' });
  }
  
  // Paginate
  const start = (page - 1) * limit;
  query = query.range(start, start + limit - 1);
  
  const { data, error, count } = await query;
  
  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  
  return Response.json({
    products: data,
    pagination: {
      page,
      limit,
      total: count,
      totalPages: Math.ceil((count || 0) / limit)
    }
  });
}
```

**Query Parameters**:
- `page` (default: 1)
- `limit` (default: 50, max: 100)
- `retailer` (filter by retailer name)
- `sort` (price_asc, price_desc, brand_asc, brand_desc)

**Response**:
```json
{
  "products": [
    {
      "id": "uuid",
      "json_id": "57173_organic traditions_...",
      "brand": "Organic Traditions",
      "product_name": "Ashwagandha Root Powder",
      "best_total_price": 12.99,
      "available_retailers": ["iHerb", "Amazon"],
      "product_image_url": "/images/products/...",
      "is_active": true
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 96,
    "totalPages": 2
  }
}
```

**Tests**:
- ✅ Pagination works correctly
- ✅ Retailer filtering works
- ✅ Sorting by price works
- ✅ Returns correct page counts
- ✅ Handles invalid page numbers

### Day 3: Product & Search API (6 hours)

#### 4. GET /api/products/[id]
**Purpose**: Get single product with all prices

**Implementation**:
```typescript
// app/api/products/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createClient();
  
  // Try by UUID first, then by json_id
  let query = supabase
    .from('products')
    .select(`
      *,
      supplement:supplements(*),
      prices(
        *,
        retailer:retailers(*)
      )
    `);
  
  // Check if id is a UUID or json_id
  if (id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
    query = query.eq('id', id);
  } else {
    query = query.eq('json_id', id);
  }
  
  const { data, error } = await query.single();
  
  if (error) {
    return Response.json({ error: 'Product not found' }, { status: 404 });
  }
  
  return Response.json({ product: data });
}
```

**Response**:
```json
{
  "product": {
    "id": "uuid",
    "json_id": "57173_organic traditions_...",
    "brand": "Organic Traditions",
    "product_name": "Ashwagandha Root Powder",
    "dsld_id": "57173",
    "supplement": {
      "slug": "ashwagandha",
      "name": "Ashwagandha"
    },
    "prices": [
      {
        "price": 12.99,
        "currency": "USD",
        "product_url": "https://...",
        "in_stock": true,
        "retailer": {
          "name": "iHerb",
          "logo_url": "/logos/iherb.png"
        }
      }
    ]
  }
}
```

**Tests**:
- ✅ Returns product by UUID
- ✅ Returns product by json_id (backward compatibility)
- ✅ Includes related supplement
- ✅ Includes all prices with retailer info
- ✅ 404 for invalid ID

#### 5. GET /api/products/search
**Purpose**: Full-text search across products

**Implementation**:
```typescript
// app/api/products/search/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const supplement = searchParams.get('supplement');
  const limit = parseInt(searchParams.get('limit') || '20');
  
  if (!q || q.length < 2) {
    return Response.json({ error: 'Query too short' }, { status: 400 });
  }
  
  const supabase = createClient();
  
  let query = supabase
    .from('products')
    .select(`
      id,
      json_id,
      brand,
      product_name,
      product_image_url,
      supplement:supplements(slug, name)
    `)
    .textSearch('fts', q, {
      type: 'websearch',
      config: 'english'
    })
    .limit(limit);
  
  if (supplement) {
    query = query.eq('supplements.slug', supplement);
  }
  
  const { data, error } = await query;
  
  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  
  return Response.json({ results: data });
}
```

**Query Parameters**:
- `q` (required, min 2 chars)
- `supplement` (optional filter by supplement slug)
- `limit` (default: 20, max: 100)

**Response**:
```json
{
  "results": [
    {
      "id": "uuid",
      "json_id": "57173_...",
      "brand": "NOW Foods",
      "product_name": "Ashwagandha Extract 450mg",
      "product_image_url": "...",
      "supplement": {
        "slug": "ashwagandha",
        "name": "Ashwagandha"
      }
    }
  ]
}
```

**Tests**:
- ✅ Full-text search works
- ✅ Filters by supplement
- ✅ Returns ranked results
- ✅ Handles special characters
- ✅ Minimum query length enforced

---

## Week 4: Frontend Integration & Optimization (8 hours)

### Day 1-2: Update Product Detail Pages (4 hours)

#### 6. Migrate Product Detail to API

**Current**: Loads entire JSON file (2+ MB) for single product  
**Target**: Fetch single product via API (15 KB)

**Implementation**:
```typescript
// app/[slug]/product/[productId]/page.tsx

export async function generateStaticParams() {
  // Still generate all paths at build time for SSG
  const supplements = await getAllSupplements();
  const paths = [];
  
  for (const supp of supplements) {
    const products = await getSupplementProducts(supp.slug);
    paths.push(
      ...products.map(p => ({
        slug: supp.slug,
        productId: p.json_id // Use json_id for backward compatibility
      }))
    );
  }
  
  return paths;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, productId } = await params;
  
  // Fetch from API instead of loading entire JSON
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${productId}`,
    { next: { revalidate: 3600 } } // ISR: revalidate hourly
  );
  
  if (!res.ok) notFound();
  
  const { product } = await res.json();
  
  return <ProductDetailClient product={product} />;
}
```

**Benefits**:
- ✅ 99% reduction in data transfer (2 MB → 15 KB)
- ✅ Faster page loads
- ✅ Still SSG at build time
- ✅ ISR allows updates without rebuild

### Day 3: Update Comparison Pages (2 hours)

#### 7. Migrate Comparison to API

**Current**: Loads entire JSON file  
**Target**: Fetch via API with pagination

**Implementation**:
```typescript
// app/components/ProductComparisonClient.tsx

'use client';

export function ProductComparisonClient({ supplementId }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const res = await fetch(
        `/api/supplements/${supplementId}/products?page=${page}&limit=50&sort=price_asc`
      );
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    }
    loadProducts();
  }, [supplementId, page]);
  
  // ... rest of component
}
```

**Features**:
- ✅ Client-side data fetching (keeps comparison interactive)
- ✅ Pagination support
- ✅ Sort by price
- ✅ Filter by retailer

### Day 4: Add Search Component (2 hours)

#### 8. Global Product Search

**Implementation**:
```typescript
// src/components/shared/content/GlobalSearch.tsx

'use client';

export function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    
    const timer = setTimeout(async () => {
      setLoading(true);
      const res = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.results || []);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <Spinner />}
      {results.length > 0 && (
        <SearchResults results={results} onClose={() => setResults([])} />
      )}
    </div>
  );
}
```

**Integration**:
- Add to Header component
- Mobile-friendly dropdown
- Keyboard navigation
- Analytics tracking

---

## Testing & Validation

### API Tests
```bash
# Test all endpoints
curl http://localhost:3000/api/supplements
curl http://localhost:3000/api/supplements/ashwagandha
curl http://localhost:3000/api/supplements/ashwagandha/products?page=1&limit=10
curl http://localhost:3000/api/products/57173_organic%20traditions_...
curl "http://localhost:3000/api/products/search?q=ashwagandha&limit=10"
```

### Performance Benchmarks
- [ ] API response time < 200ms (p95)
- [ ] Product detail page load < 1s
- [ ] Search results < 300ms
- [ ] Comparison page pagination < 500ms

### SEO Validation
- [ ] All 1,691 product pages still generate at build time
- [ ] Metadata still includes product info
- [ ] Structured data still present
- [ ] URLs unchanged (backward compatibility)

---

## Deployment Checklist

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx  # Server-side only
NEXT_PUBLIC_SITE_URL=https://www.suppl.me
```

### Vercel Configuration
```json
{
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase_url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase_anon_key",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase_service_role_key"
  }
}
```

### Build & Deploy
```bash
# Test locally
npm run build
npm run start

# Deploy to Vercel
git push origin main  # Auto-deploys

# Verify
curl https://www.suppl.me/api/supplements
```

---

## Success Metrics

### Week 3-4 Completion Criteria

**API Endpoints**:
- ✅ 5 core endpoints implemented
- ✅ All endpoints tested
- ✅ Error handling complete
- ✅ Response times < 200ms

**Frontend Integration**:
- ✅ Product detail pages use API
- ✅ Comparison pages use API
- ✅ Global search working
- ✅ All pages still SSG

**Performance**:
- ✅ Product detail loads 90% faster
- ✅ Comparison loads 85% faster
- ✅ Search returns results in < 300ms
- ✅ SEO unchanged

**Documentation**:
- ✅ API documentation complete
- ✅ Frontend migration guide
- ✅ Deployment checklist

---

## Next Steps (Week 5-6)

After Week 3-4 API implementation:

1. **Admin Dashboard** (Week 5)
   - Product management UI
   - Price update interface
   - Bulk import tools

2. **Advanced Features** (Week 6)
   - Real-time price updates
   - Price alerts
   - Favorites/wishlist
   - Advanced filtering

3. **Optimization** (Ongoing)
   - Redis caching layer
   - CDN for product images
   - Query optimization
   - Monitoring & alerts

---

## Resources

**Documentation**:
- [Supabase Client Docs](https://supabase.com/docs/reference/javascript/introduction)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [ISR in Next.js 16](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)

**Database**:
- [Database Schema](../supabase/migrations/)
- [Supabase Dashboard](https://supabase.com/dashboard/project/rdraqlnxypwlhkhngyjk)

**Previous Work**:
- [Database Migration Plan](SCALABILITY_IMPLEMENTATION_PLAN.md)
- [Week 1-2 Summary](DATABASE_MIGRATION_COMPLETE.md)

---

**Last Updated**: November 26, 2025  
**Next Review**: After Week 3-4 completion
