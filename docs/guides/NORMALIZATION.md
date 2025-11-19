# Unified Data Normalization Guide

## Overview

The **Unified Data Normalization Pipeline** (`scripts/normalize-all-data.ts`) is a comprehensive system that processes all supplement product data through a single, standardized pipeline with DSLD (Dietary Supplement Label Database) enrichment.

## Features

✅ **Single Source of Truth** - One script processes all data sources  
✅ **DSLD Enrichment** - Matches products with DSLD database for accurate supplement information  
✅ **Dietary Flags** - Extracts vegan, gluten-free, organic, and other dietary preferences  
✅ **Price Metrics** - Calculates $/mg, $/g, and $/serving for easy comparison  
✅ **Quality Control** - Tracks match confidence and data quality issues  
✅ **Multiple Outputs** - JSON, CSV, and statistics for different use cases

## Data Sources Processed

### 1. Scraped Retailer Data
Location: `scraper-results/all-supplements/latest/*.json`

Files like:
- `ashwagandha.json`
- `bcaa.json`
- `creatine.json`
- etc.

### 2. Existing Product Data
Location: `../input/product_data/`

Files processed:
- `Vitacost.json`
- `iHerb_ashwaghanda_to_iron.json`
- `iHerb_Iron_to_zinc.json`

**Note:** GNC data is excluded per user request.

## Quick Start

### Prerequisites

1. **DSLD Database** must be available at:
   ```
   ../input/Supplement Databases (trivalora)/DSLD db/dsld.sqlite
   ```
   Or set environment variable: `DSLD_DB_PATH`

2. **Node.js dependencies** installed:
   ```bash
   npm install
   ```

### Running the Script

```bash
# Basic usage
cd /path/to/suppl.me_Affiliate_Launch_v0.2
npx tsx scripts/normalize-all-data.ts

# With custom DSLD path
DSLD_DB_PATH=/custom/path/dsld.sqlite npx tsx scripts/normalize-all-data.ts
```

## Output Files

All outputs are saved to: `normalized-results/unified/`

### 1. JSON Output (Full Data)
- **`all-products-latest.json`** - Latest normalized dataset with all fields
- **`all-products-{timestamp}.json`** - Time-stamped archive

Structure:
```json
{
  "generated_at": "2025-01-18T10:00:00.000Z",
  "config": {
    "minMatchScore": 40,
    "brandBonus": 15,
    "ingredientBonus": 15
  },
  "statistics": { ... },
  "products": [
    {
      "id": "Vitacost_Ashwagandha_Extract_...",
      "data_source": "existing",
      "retailer": "Vitacost",
      "product_name": "Ashwagandha Extract 300mg",
      "dsld_id": "12345",
      "match_score": 85,
      "match_quality": "high",
      "amount_per_serving_mg": 300,
      "price_usd": 12.99,
      "price_per_mg": 0.000433,
      "is_vegan": true,
      "is_gluten_free": true,
      ...
    }
  ]
}
```

### 2. CSV Output (Spreadsheet Analysis)
- **`all-products-latest.csv`** - Latest data in CSV format
- **`all-products-{timestamp}.csv`** - Time-stamped archive

Columns include:
- Product identifiers (ID, retailer, name, brand, URL)
- DSLD match info (ID, score, quality)
- Supplement details (ingredient, serving size, package count)
- Pricing (USD, per serving, per mg, per unit)
- Dietary flags (Vegan, Vegetarian, GlutenFree, NonGMO, etc.)
- Quality flags

### 3. Statistics Summary
- **`statistics-{timestamp}.json`** - Match quality metrics and data insights

```json
{
  "total_products": 1500,
  "by_source": {
    "scraped": 800,
    "existing": 700
  },
  "by_retailer": {
    "Vitacost": 400,
    "iHerb": 300,
    "GNC": 250,
    ...
  },
  "by_match_quality": {
    "high": 900,
    "medium": 300,
    "low": 150,
    "none": 150
  },
  "with_dietary_flags": {
    "vegan": 350,
    "vegetarian": 500,
    "gluten_free": 800,
    ...
  },
  "quality_issues": {
    "no_dsld_match": 150,
    "missing_price": 50,
    ...
  }
}
```

## Data Schema

### NormalizedProduct Interface

```typescript
{
  // Identifiers
  id: string                          // Unique product ID
  data_source: 'scraped' | 'existing' // Origin of data
  retailer: string                    // Retailer name
  
  // Product Info
  product_name: string
  product_url: string
  brand: string
  
  // DSLD Match
  dsld_id: string | null              // DSLD database ID
  dsld_product_name: string | null
  dsld_brand: string | null
  dsld_ingredient: string | null
  match_score: number | null          // 0-100 confidence score
  match_quality: 'high' | 'medium' | 'low' | 'none'
  
  // Supplement Details
  amount_per_serving_mg: number | null
  servings_per_container: number | null
  total_active_ingredient_mg: number | null
  
  // Product Form & Package
  product_type: string | null         // "Dietary Supplement", etc.
  supplement_form: string | null      // "Capsules", "Powder", etc.
  net_contents: string | null
  weight_value: number | null
  weight_unit: string | null
  package_count: number | null
  suggested_use: string | null
  
  // Pricing
  price_usd: number | null
  price_per_mg: number | null         // Price per milligram
  price_per_unit: number | null       // Price per unit (mg or g)
  price_per_unit_label: string | null // "$/mg" or "$/g"
  price_per_serving: number | null
  
  // Dietary Flags (extracted from DSLD label statements)
  is_vegan: boolean
  is_vegetarian: boolean
  is_gluten_free: boolean
  is_non_gmo: boolean
  is_organic: boolean
  is_kosher: boolean
  is_dairy_free: boolean
  is_soy_free: boolean
  is_sugar_free: boolean
  
  // Label Information
  formulation_statements: string[]    // e.g., "No Artificial Colors"
  seals_symbols: string[]             // e.g., "USDA Organic"
  
  // Metadata
  normalized_at: string               // ISO timestamp
  data_quality_flags: string[]        // Quality issues
}
```

## Match Quality Scoring

### How Matching Works

1. **Keyword Search** - Searches DSLD for products matching supplement terms
2. **Jaccard Similarity** - Compares product title tokens with DSLD product name
3. **Bonuses Applied**:
   - Brand match: +15 points
   - Ingredient match: +15 points
4. **Best Match Selected** - Highest scoring DSLD product is chosen

### Match Quality Thresholds

| Quality | Score Range | Description |
|---------|-------------|-------------|
| **High** | 70-100 | Very confident match, safe to use |
| **Medium** | 55-69 | Good match, review recommended |
| **Low** | 40-54 | Weak match, manual verification needed |
| **None** | 0-39 | No reliable match found |

### Configuration

Edit `CONFIG` object in `normalize-all-data.ts`:

```typescript
const CONFIG = {
  minMatchScore: 40,      // Minimum score to accept (default: 40)
  brandBonus: 15,         // Bonus for brand match (default: 15)
  ingredientBonus: 15,    // Bonus for ingredient match (default: 15)
};
```

## Quality Flags

Products may have quality flags indicating data issues:

| Flag | Meaning |
|------|---------|
| `no_dsld_match` | No DSLD products found in search |
| `below_threshold` | Match score below minimum threshold |
| `match_quality_low` | Low confidence match (40-54) |
| `match_quality_medium` | Medium confidence match (55-69) |
| `missing_price` | No price data available |

## Use Cases

### 1. Price Comparison API
Filter products by supplement type and match quality:

```javascript
const products = require('./normalized-results/unified/all-products-latest.json');

// Get high-quality ashwagandha products with prices
const ashwagandha = products.products
  .filter(p => p.dsld_ingredient?.toLowerCase().includes('ashwagandha'))
  .filter(p => p.match_quality === 'high')
  .filter(p => p.price_usd && p.price_per_mg)
  .sort((a, b) => a.price_per_mg - b.price_per_mg);
```

### 2. Dietary Filtering
Find vegan, gluten-free supplements:

```javascript
const veganGlutenFree = products.products
  .filter(p => p.is_vegan && p.is_gluten_free)
  .filter(p => p.match_quality === 'high');
```

### 3. Retailer Comparison
Compare prices across retailers for same supplement:

```javascript
const creatineByRetailer = products.products
  .filter(p => p.dsld_ingredient?.toLowerCase().includes('creatine'))
  .reduce((acc, p) => {
    if (!acc[p.retailer]) acc[p.retailer] = [];
    acc[p.retailer].push(p);
    return acc;
  }, {});
```

## Troubleshooting

### Issue: "Error: ENOENT: no such file or directory"

**Solution:** Ensure DSLD database exists at the expected path:
```bash
ls -la "../input/Supplement Databases (trivalora)/DSLD db/dsld.sqlite"
```

Or set custom path:
```bash
export DSLD_DB_PATH=/path/to/dsld.sqlite
```

### Issue: Low match rates

**Possible causes:**
1. Product names don't match DSLD naming conventions
2. Match threshold too high
3. Limited DSLD coverage for specific supplements

**Solutions:**
- Lower `minMatchScore` in CONFIG (try 30-35)
- Check `statistics.json` for quality_issues breakdown
- Review `no_dsld_match` products manually

### Issue: Memory errors with large datasets

**Solution:** Process data in batches or increase Node.js memory:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npx tsx scripts/normalize-all-data.ts
```

## Integration with Existing Systems

### Replace Current Normalization

The unified script replaces these individual scripts:
- ❌ `normalize-existing-data.ts`
- ❌ `normalize-existing-data-v2.ts`
- ❌ `normalize-all-supplements.ts`
- ❌ `normalize-dsld-and-join.ts`
- ✅ `normalize-all-data.ts` (use this instead)

### API Integration

To use normalized data in your price comparison API:

1. **Load normalized data:**
   ```typescript
   import normalizedData from './normalized-results/unified/all-products-latest.json';
   ```

2. **Filter by quality:**
   ```typescript
   const highQuality = normalizedData.products.filter(
     p => p.match_quality === 'high' && p.price_usd
   );
   ```

3. **Group by supplement:**
   ```typescript
   const byIngredient = groupBy(highQuality, 'dsld_ingredient');
   ```

## Next Steps

1. **Run the script** on your data
2. **Review statistics** to understand match quality
3. **Inspect CSV** in Excel/Google Sheets for manual review
4. **Adjust CONFIG** if needed to improve match rates
5. **Integrate JSON output** into your price comparison system

## Support

For issues or questions:
1. Check `statistics-{timestamp}.json` for quality metrics
2. Review quality_flags in CSV output
3. Examine low-quality matches manually
4. Adjust CONFIG thresholds as needed

---

**Last Updated:** January 2025  
**Script Version:** 1.0  
**Maintained By:** suppl.me Data Team
