# API Endpoints Documentation

**Base URL**: `https://www.suppl.me/api`  
**Version**: 1.2  
**Last Updated**: November 29, 2025

---

## Authentication

All API endpoints are currently **public** (no authentication required). Rate limiting is handled by Vercel/Supabase.

---

## Endpoints Overview

### Product & Supplement Endpoints
1. [GET /supplements](#1-get-supplements) - List all supplements
2. [GET /supplements/[slug]](#2-get-supplementsslug) - Single supplement details
3. [GET /supplements/[slug]/products](#3-get-supplementsslugproducts) - Product list with filters
4. [GET /products/[id]](#4-get-productsid) - Single product details
5. [GET /products/search](#5-get-productssearch) - Full-text product search

### Form Submission Endpoints  
6. [POST /subscribe](#6-post-subscribe) - Newsletter subscription
7. [POST /partner-lead](#7-post-partner-lead) - Partner application

### Glossary Endpoints
8. [GET /glossary](#8-get-glossary) - List glossary terms
9. [POST /glossary](#9-post-glossary) - Create glossary term
10. [GET /glossary/[slug]](#10-get-glossaryslug) - Single glossary term
11. [PUT /glossary/[slug]](#11-put-glossaryslug) - Update glossary term
12. [DELETE /glossary/[slug]](#12-delete-glossaryslug) - Delete glossary term

---

## Product & Supplement Endpoints

### 1. GET /supplements

List all supplements with summary data.

**Query Parameters**:
- `show_in_nav` (boolean, optional) - Filter by navigation visibility

**Example Request**:
```bash
GET /api/supplements?show_in_nav=true
```

**Example Response**:
```json
{
  "supplements": [
    {
      "id": "uuid",
      "slug": "ashwagandha",
      "name": "Ashwagandha",
      "display_name": "Ashwagandha",
      "subcategory": "Adaptogens",
      "hero_image_url": "/images/supplements/ashwagandha.webp",
      "show_in_nav": true,
      "sort_order": 1,
      "product_count": 96,
      "avg_price": 15.99,
      "min_price": 8.99,
      "max_price": 39.99
    }
  ]
}
```

**Cache**: 1 hour

---

### 2. GET /supplements/[slug]

Get single supplement with details.

**Path Parameters**:
- `slug` (string, required) - Supplement slug (e.g., 'ashwagandha')

**Example Request**:
```bash
GET /api/supplements/ashwagandha
```

**Example Response**:
```json
{
  "supplement": {
    "id": "uuid",
    "slug": "ashwagandha",
    "name": "Ashwagandha",
    "display_name": "Ashwagandha",
    "subcategory": "Adaptogens",
    "description": "Adaptogenic herb...",
    "hero_description": "Evidence-based review...",
    "hero_image_url": "/images/supplements/ashwagandha.webp",
    "show_in_nav": true,
    "sort_order": 1,
    "meta_title": "Ashwagandha - Evidence-Based Research",
    "meta_description": "Comprehensive meta-analysis review...",
    "meta_keywords": ["ashwagandha", "adaptogens"],
    "quick_overview": "An adaptogenic herb traditionally used in Ayurvedic medicine...",
    "extended_overview": "Ashwagandha (Withania somnifera) has been used for over 3,000 years...",
    "science_snapshot": "Clinical studies have shown that ashwagandha root extract...",
    "key_benefits": ["Supports healthy cortisol levels", "May help with occasional stress", "..."],
    "ideal_for": ["Those managing daily stress", "People seeking adaptogenic support", "..."],
    "timing_tips": ["Can be taken morning or evening depending on your goals", "..."],
    "quality_markers": ["KSM-66", "Sensoril", "root extract", "..."],
    "safety_considerations": ["Generally well-tolerated at recommended doses", "..."],
    "what_to_expect_summary": ["Most users begin noticing subtle changes...", "..."],
    "typical_dosage_min": 300,
    "typical_dosage_max": 600,
    "typical_dosage_unit": "mg",
    "form_notes": {"capsule": "Convenient for consistent daily dosing...", "..."},
    "what_to_expect": {"primaryOutcome": {"label": "Stress Support", "timeframe": "4-8 weeks", "intensity": "Moderate"}, "secondaryOutcome": {"..."}},
    "synergy_notes": "Often combined with other adaptogens like rhodiola...",
    "product_count": 96,
    "created_at": "2025-11-26T00:00:00Z",
    "updated_at": "2025-11-29T00:00:00Z"
  }
}
```

**Response Fields (v0.5.0 additions)**:
- `quick_overview` (string) - Brief 1-2 sentence description
- `extended_overview` (string) - Detailed 150+ word scientific explanation
- `science_snapshot` (string) - Research summary paragraph
- `key_benefits` (string[]) - Array of benefit statements (6-8 items)
- `ideal_for` (string[]) - Target audience array (4-5 items)
- `timing_tips` (string[]) - When/how to take guidance (3-4 items)
- `quality_markers` (string[]) - What to look for when buying (4-5 items)
- `safety_considerations` (string[]) - Safety information (3-4 items)
- `what_to_expect_summary` (string[]) - Timeline expectations (3-4 items)
- `typical_dosage_min` (number) - Minimum typical dosage
- `typical_dosage_max` (number) - Maximum typical dosage
- `typical_dosage_unit` (string) - Dosage unit (mg, mcg, IU, etc.)
- `form_notes` (object) - Form-specific guidance keyed by form type
- `what_to_expect` (object) - Primary/secondary outcome timelines
- `synergy_notes` (string) - Complementary supplement combinations

**Cache**: 1 hour

**Error Responses**:
- `404` - Supplement not found

---

### 3. GET /supplements/[slug]/products

Get paginated product list for a supplement with advanced filtering.

**Path Parameters**:
- `slug` (string, required) - Supplement slug

**Query Parameters**:
- `page` (number, default: 1) - Page number
- `limit` (number, default: 50, max: 100) - Items per page
- `retailer` (string, optional) - Filter by retailer name (exact match)
- `brand` (string, optional) - Filter by brand (partial match, case-insensitive)
- `min_price` (number, optional) - Minimum price filter
- `max_price` (number, optional) - Maximum price filter
- `third_party_tested` (boolean, optional) - Filter by testing status
- `in_stock` (boolean, default: true) - Only show in-stock products
- `sort` (string, default: 'price_asc') - Sort order
  - Options: `price_asc`, `price_desc`, `brand_asc`, `brand_desc`

**Example Request**:
```bash
GET /api/supplements/ashwagandha/products?page=1&limit=10&sort=price_asc&retailer=iHerb&min_price=10&max_price=20
```

**Example Response**:
```json
{
  "products": [
    {
      "id": "uuid",
      "json_id": "57173_organic traditions_...",
      "brand": "Organic Traditions",
      "product_name": "Ashwagandha Root Powder",
      "product_image_url": "/images/products/...",
      "best_total_price": 12.99,
      "best_price_per_unit": 0.0026,
      "available_retailers": ["iHerb", "Amazon"],
      "price_count": 2,
      "supplement_slug": "ashwagandha",
      "supplement_name": "Ashwagandha"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 96,
    "totalPages": 10
  }
}
```

**Response Fields**:
- `best_price_per_unit` (number | null) - Lowest price per unit (mg/mcg) across all retailers. Calculated as `price / amount_per_serving`. Returns `null` if `amount_per_serving` is not available.

**Cache**: 30 minutes

**Error Responses**:
- `404` - Supplement not found

---

### 4. GET /products/[id]

Get single product with all prices and retailer info.

**Path Parameters**:
- `id` (string, required) - Product UUID or json_id

**Example Request**:
```bash
# By UUID
GET /api/products/550e8400-e29b-41d4-a716-446655440000

# By json_id (backward compatibility)
GET /api/products/57173_organic%20traditions_ashwagandha%20root%20powder_5000.0_mg_standard
```

**Example Response**:
```json
{
  "product": {
    "id": "uuid",
    "json_id": "57173_organic traditions_...",
    "dsld_id": "57173",
    "brand": "Organic Traditions",
    "product_name": "Ashwagandha Root Powder",
    "display_name": null,
    "dsld_product_name": "Organic Ashwagandha Root Powder",
    "dsld_brand": "Organic Traditions",
    "serving_size": "5000 mg",
    "servings_per_container": "30",
    "net_quantity": "150g",
    "label_data": {},
    "ingredients": ["Organic Ashwagandha Root"],
    "product_image_url": "/images/products/...",
    "is_active": true,
    "third_party_tested": false,
    "certifications": ["organic", "non-gmo"],
    "supplement": {
      "id": "uuid",
      "slug": "ashwagandha",
      "name": "Ashwagandha",
      "display_name": "Ashwagandha"
    },
    "prices": [
      {
        "id": "uuid",
        "price": 12.99,
        "currency": "USD",
        "product_url": "https://iherb.com/...",
        "affiliate_url": "https://iherb.com/...",
        "in_stock": true,
        "last_checked_at": "2025-11-26T12:00:00Z",
        "retailer": {
          "id": "uuid",
          "slug": "iherb",
          "name": "iHerb",
          "display_name": "iHerb",
          "logo_url": "/logos/iherb.png",
          "is_active": true
        }
      },
      {
        "id": "uuid",
        "price": 14.99,
        "currency": "USD",
        "product_url": "https://amazon.com/...",
        "affiliate_url": "https://amazon.com/...",
        "in_stock": true,
        "last_checked_at": "2025-11-26T12:00:00Z",
        "retailer": {
          "id": "uuid",
          "slug": "amazon",
          "name": "Amazon",
          "display_name": "Amazon",
          "logo_url": "/logos/amazon.png",
          "is_active": true
        }
      }
    ],
    "created_at": "2025-11-26T00:00:00Z",
    "updated_at": "2025-11-26T00:00:00Z"
  }
}
```

**Cache**: 1 hour

**Error Responses**:
- `404` - Product not found

---

### 5. GET /products/search

Full-text search across all products with advanced filtering.

**Query Parameters**:
- `q` (string, **required**, min 2 chars) - Search query
- `supplement` (string, optional) - Filter by supplement slug
- `brand` (string, optional) - Filter by brand (partial match, case-insensitive)
- `retailer` (string, optional) - Filter by retailer availability
- `min_price` (number, optional) - Minimum price filter
- `max_price` (number, optional) - Maximum price filter
- `third_party_tested` (boolean, optional) - Filter by testing status
- `in_stock` (boolean, default: true) - Only show in-stock products
- `sort` (string, default: 'relevance') - Sort order
  - Options: `relevance`, `price_asc`, `price_desc`, `brand_asc`, `brand_desc`
- `page` (number, default: 1) - Page number
- `limit` (number, default: 20, max: 100) - Results per page

**Example Request**:
```bash
GET /api/products/search?q=ashwagandha+extract&supplement=ashwagandha&brand=now&min_price=10&max_price=30&third_party_tested=true&sort=price_asc&limit=20
```

**Example Response**:
```json
{
  "results": [
    {
      "id": "uuid",
      "json_id": "12345_now_...",
      "brand": "NOW Foods",
      "product_name": "Ashwagandha Extract 450mg",
      "product_image_url": "/images/products/...",
      "best_total_price": 12.99,
      "available_retailers": ["iHerb", "Amazon", "Vitacost"],
      "third_party_tested": true,
      "supplement": {
        "slug": "ashwagandha",
        "name": "Ashwagandha"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  },
  "query": {
    "q": "ashwagandha extract",
    "filters": {
      "supplement": "ashwagandha",
      "brand": "now",
      "retailer": null,
      "min_price": "10",
      "max_price": "30",
      "third_party_tested": "true",
      "in_stock": true,
      "sort": "price_asc"
    }
  }
}
```

**Cache**: 10 minutes

**Error Responses**:
- `400` - Search query too short (< 2 characters)

---

## Common Response Codes

- `200` - Success
- `400` - Bad Request (invalid parameters)
- `404` - Not Found
- `500` - Internal Server Error

---

## Rate Limiting

Rate limits are enforced by Vercel/Supabase:
- **Anonymous users**: ~100 requests/minute
- **Authenticated users**: Higher limits (future)

---

## Caching

All endpoints use HTTP caching headers:
- `Cache-Control: public, s-maxage=X, stale-while-revalidate=Y`
- Supplements: 1 hour cache, 24 hour stale
- Products: 30 minutes - 1 hour cache
- Search: 10 minutes cache

---

## Examples

### Get all supplements in navigation
```bash
curl "https://www.suppl.me/api/supplements?show_in_nav=true"
```

### Get ashwagandha products sorted by price
```bash
curl "https://www.suppl.me/api/supplements/ashwagandha/products?sort=price_asc&limit=10"
```

### Search for NOW brand products
```bash
curl "https://www.suppl.me/api/products/search?q=vitamin&brand=now&sort=price_asc"
```

### Get products from iHerb only
```bash
curl "https://www.suppl.me/api/supplements/vitamin-d/products?retailer=iHerb"
```

### Search with multiple filters
```bash
curl "https://www.suppl.me/api/products/search?q=protein&supplement=whey&min_price=20&max_price=50&third_party_tested=true&retailer=iHerb"
```

### Subscribe to newsletter
```bash
curl -X POST "https://www.suppl.me/api/subscribe" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","source":"test"}'
```

### Submit partner application
```bash
curl -X POST "https://www.suppl.me/api/partner-lead" \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","network":"shareasale","category":"Omega-3"}'
```

### List glossary terms
```bash
curl "https://www.suppl.me/api/glossary?limit=10"
```

### Search glossary
```bash
curl "https://www.suppl.me/api/glossary?search=clinical"
```

---

## TypeScript Types

```typescript
interface Supplement {
  id: string;
  slug: string;
  name: string;
  display_name: string;
  subcategory: string;
  description: string;
  hero_description: string;
  hero_image_url: string;
  show_in_nav: boolean;
  sort_order: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  // Extended content fields (v0.5.0)
  quick_overview: string | null;
  extended_overview: string | null;
  science_snapshot: string | null;
  key_benefits: string[];
  ideal_for: string[];
  timing_tips: string[];
  quality_markers: string[];
  safety_considerations: string[];
  what_to_expect_summary: string[];
  typical_dosage_min: number | null;
  typical_dosage_max: number | null;
  typical_dosage_unit: string | null;
  form_notes: Record<string, string> | null;
  what_to_expect: {
    primaryOutcome?: { label: string; timeframe: string; intensity: string };
    secondaryOutcome?: { label: string; timeframe: string; intensity: string };
  } | null;
  synergy_notes: string | null;
  // Computed fields
  product_count?: number;
  avg_price?: number;
  min_price?: number;
  max_price?: number;
  created_at: string;
  updated_at: string;
}

interface Product {
  id: string;
  json_id: string;
  dsld_id: string | null;
  brand: string;
  product_name: string;
  display_name: string | null;
  dsld_product_name: string | null;
  dsld_brand: string | null;
  serving_size: string | null;
  servings_per_container: string | null;
  net_quantity: string | null;
  label_data: object;
  ingredients: string[];
  product_image_url: string | null;
  is_active: boolean;
  third_party_tested: boolean;
  certifications: string[];
  supplement?: {
    id: string;
    slug: string;
    name: string;
    display_name: string;
  };
  prices?: Price[];
  created_at: string;
  updated_at: string;
}

interface Price {
  id: string;
  price: number;
  currency: string;
  product_url: string | null;
  affiliate_url: string | null;
  in_stock: boolean;
  last_checked_at: string;
  retailer: Retailer;
}

interface Retailer {
  id: string;
  slug: string;
  name: string;
  display_name: string;
  logo_url: string | null;
  is_active: boolean;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  subscribed_at: string;
  unsubscribed_at: string | null;
  ip_address: string | null;
  user_agent: string | null;
  confirmed: boolean;
  confirmation_token: string | null;
  metadata: object;
  created_at: string;
  updated_at: string;
}

interface PartnerLead {
  id: string;
  name: string;
  email: string;
  network: string;
  category: string;
  message: string | null;
  status: 'new' | 'contacted' | 'approved' | 'rejected' | 'archived';
  priority: 'low' | 'medium' | 'high';
  ip_address: string | null;
  user_agent: string | null;
  contacted_at: string | null;
  responded_at: string | null;
  notes: string | null;
  metadata: object;
  created_at: string;
  updated_at: string;
}

interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  abbreviation: string | null;
  pronunciation: string | null;
  definition: string;
  expanded_explanation: string | null;
  why_it_matters: string | null;
  simple_explanation: string | null;
  technical_explanation: string | null;
  real_world_context: string | null;
  examples: string[];
  key_points: object[];
  common_misconceptions: string[];
  related_terms: string[];
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}
```

---

**Support**: For API issues, contact via GitHub issues or email.
