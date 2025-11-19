# Current Matching Analysis

## DSLD Database Structure

### Tables Used:
1. **`product_overview` (alias: `po`)** - Main product table
2. **`dietary_supplement_facts` (alias: `dsf`)** - Ingredient details

### Current SQL Query:
```sql
SELECT DISTINCT 
  po.dsld_id,              -- Unique identifier for DSLD product
  po.product_name,         -- Product name from DSLD
  po.brand_name,           -- Brand name from DSLD ⭐ KEY FIELD
  po.net_contents,         -- Container size (e.g., "60 capsules")
  po.serving_size AS overview_serving_size,
  dsf.ingredient,          -- Ingredient name (e.g., "Ashwagandha")
  dsf.amount_per_serving,  -- Dosage amount
  dsf.amount_per_serving_unit -- Unit (mg, g, etc.)
FROM product_overview po
LEFT JOIN dietary_supplement_facts dsf ON dsf.dsld_id = po.dsld_id
```

**Result:** Loads 1,943,900 rows (all DSLD products)

---

## Current Matching Algorithm

### Input Variables:
**From Scraped Product:**
- `productName` - Example: "Optimum Nutrition Micronized Creatine Powder 120 Servings"
- `brand` - Usually empty or incorrect ❌
- `price` - In cents (e.g., 1999 = $19.99)
- `url` - Product URL

**From DSLD (each row):**
- `r.product_name` - Example: "Micronized Creatine Monohydrate Powder"
- `r.brand_name` - Example: "Optimum Nutrition" ⭐
- `r.ingredient` - Example: "Creatine"
- `r.net_contents` - Example: "120 servings"

### Matching Function:
```typescript
function scoreMatch(
  itemTitle: string,      // Scraped product name
  dsldName: string,       // DSLD product_name
  brand: string,          // DSLD brand_name
  ingredient: string      // DSLD ingredient
): number
```

### How Scoring Works:

**Step 1: Tokenization**
```typescript
const it = "optimum nutrition micronized creatine powder 120 servings".toLowerCase();
const target = "micronized creatine monohydrate powder optimum nutrition creatine".toLowerCase();
```

**Step 2: Jaccard Similarity**
- Creates unique token sets from both strings
- Calculates: `intersection / union`
- Base score: `jacc * 70` (max 70 points)

**Step 3: Bonus Points**
- If `brand_name` found in product name: +15 points
- If `ingredient` found in product name: +15 points
- Max total score: 100

**Step 4: Select Best Match**
```typescript
for (const r of dsldRows) {  // All 1.9M rows!
  const score = scoreMatch(productName, r.product_name, r.brand_name, r.ingredient);
  
  if (score > bestScore) {
    bestScore = score;
    bestMatch = r;
  }
}
```

---

## Problems with Current Approach

### ❌ Problem 1: **No Exact Brand Matching First**
- Current: Treats brand as just another token
- Should: Filter to exact brand first, THEN match within that brand

**Example Issue:**
```
Scraped: "NOW Foods Ashwagandha 450mg 90 Capsules"
Could match: "Garden of Life Ashwagandha 450mg 90 Capsules"  ❌ Wrong brand!
```

### ❌ Problem 2: **Extremely Slow**
- Loops through ALL 1.9M DSLD rows for EACH scraped product
- With 5000 products: 5000 × 1,943,900 = 9.7 billion comparisons!

### ❌ Problem 3: **Scrapers Not Extracting Brand**
Looking at scraped data structure:
```json
{
  "productName": "Optimum Nutrition Micronized Creatine...",
  "price": 1999,
  "url": "...",
  "brand": ""  ❌ EMPTY!
}
```

The scrapers need to extract brand separately.

### ❌ Problem 4: **Fuzzy Matching Too Fuzzy**
- Token-based matching doesn't understand product semantics
- No consideration for container size exact matching
- No special handling for brand + product type combinations

---

## DSLD Unique Identifiers

From the schema:

1. **`dsld_id`** - Primary unique identifier (INTEGER)
   - Used to join product_overview with other tables
   - Should be stored once we find a match

2. **`brand_name + product_name + net_contents`** - Composite key
   - More reliable for matching retail products
   - Example: "NOW Foods" + "Ashwagandha Extract" + "90 Vcaps"

3. **No UPC/Barcode** - DSLD doesn't have retail identifiers ❌

---

## Recommended Improvements

### 1. **Add Brand Extraction to Scrapers**

Scrapers should extract brand separately:
```typescript
{
  "productName": "Optimum Nutrition Micronized Creatine Powder",
  "brand": "Optimum Nutrition",  // ⭐ Extract this!
  "price": 1999,
  "url": "..."
}
```

### 2. **Two-Phase Matching Algorithm**

**Phase 1: Exact Brand Filter**
```typescript
// Filter DSLD to exact brand match first
const brandMatches = dsldCache.filter(r => 
  r.brand_name && 
  productBrand &&
  r.brand_name.toLowerCase() === productBrand.toLowerCase()
);

// If no exact brand matches, try fuzzy brand matching
if (brandMatches.length === 0) {
  brandMatches = dsldCache.filter(r =>
    r.brand_name &&
    productBrand &&
    (r.brand_name.toLowerCase().includes(productBrand.toLowerCase()) ||
     productBrand.toLowerCase().includes(r.brand_name.toLowerCase()))
  );
}
```

**Phase 2: Match Within Brand**
```typescript
// Now ONLY compare against same-brand products
for (const r of brandMatches) {  // Much smaller set!
  const score = scoreProductMatch(
    productName,
    r.product_name,
    r.net_contents,
    supplementCategory
  );
  
  if (score > bestScore) {
    bestScore = score;
    bestMatch = r;
  }
}
```

### 3. **Improved Scoring**

```typescript
function scoreProductMatch(
  productName: string,
  dsldProductName: string,
  dsldNetContents: string,
  category: string
): number {
  let score = 0;
  
  // Token overlap (base score)
  const tokenScore = calculateJaccardSimilarity(productName, dsldProductName);
  score += tokenScore * 50;
  
  // Container size exact match (+30)
  if (containerSizesMatch(productName, dsldNetContents)) {
    score += 30;
  }
  
  // Category/ingredient match (+20)
  if (productName.toLowerCase().includes(category.toLowerCase())) {
    score += 20;
  }
  
  return Math.min(100, score);
}
```

### 4. **Performance Optimization**

Create brand index:
```typescript
// Build once at startup
const dsldByBrand: Map<string, any[]> = new Map();
for (const product of dsldCache) {
  const brand = product.brand_name?.toLowerCase() || 'unknown';
  if (!dsldByBrand.has(brand)) {
    dsldByBrand.set(brand, []);
  }
  dsldByBrand.get(brand)!.push(product);
}

// Fast lookup during matching
const candidateMatches = dsldByBrand.get(extractedBrand.toLowerCase()) || [];
// Now only compare against ~100-500 products instead of 1.9M!
```

---

## Next Steps

1. **Update scrapers** to extract brand field
2. **Implement two-phase matching** (brand filter → product match)
3. **Add container size comparison** for better accuracy
4. **Index DSLD by brand** for 1000x performance improvement
5. **Test with sample data** to validate improvements

---

## Example: What Should Happen

**Input (Scraped):**
```json
{
  "productName": "NOW Foods Ashwagandha Extract 450mg 90 Veg Capsules",
  "brand": "NOW Foods",
  "price": 1299
}
```

**Matching Process:**
1. Filter DSLD to `brand_name = "NOW Foods"` → ~500 products
2. Within NOW Foods products, find best match:
   - Product name similarity: "Ashwagandha Extract"
   - Dosage match: 450mg
   - Container match: 90 capsules
3. Return match with high confidence score (90+)

**Output:**
```json
{
  "product_name": "NOW Foods Ashwagandha Extract 450mg 90 Veg Capsules",
  "dsld_id": "12345",
  "dsld_product_name": "Ashwagandha Root Extract",
  "dsld_brand": "NOW Foods",
  "match_score": 92,
  "match_quality": "high"
}
```
