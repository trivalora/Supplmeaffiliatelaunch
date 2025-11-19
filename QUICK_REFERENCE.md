# 🚀 Quick Reference: Embeddable Product Comparison Widget

## One-Liner Usage

```tsx
<SupplementComparisonWidget supplement="vitamin-d" />
```

## File Locations

```
📁 Data Files
├── output/step9-embeddable-module/
│   ├── product-comparison-module.json    (Full dataset - 3,039 products)
│   ├── module-config.json                (Configuration)
│   └── supplements/
│       ├── vitamin-d.json                (187 products)
│       ├── magnesium.json                (191 products)
│       ├── omega-3.json                  (380 products)
│       └── ... (14 more)

📁 Component Files
├── src/components/
│   ├── SupplementComparisonWidget.tsx    (React component)
│   └── SupplementComparisonWidget.css    (Styling)

📁 Documentation
├── docs/
│   ├── WIDGET_USAGE.md                   (Complete guide)
│   ├── widget-demo.html                  (Interactive demo)
│   └── vanilla-example.html              (JS example)
```

## 3-Step Setup

### Step 1: Deploy Data
```bash
cp -r output/step9-embeddable-module /your-website/public/api/products/
```

### Step 2: Install Component
```bash
cp src/components/SupplementComparisonWidget.* /your-project/src/components/
```

### Step 3: Use It
```tsx
import SupplementComparisonWidget from './components/SupplementComparisonWidget';

<SupplementComparisonWidget supplement="vitamin-d" />
```

## Common Use Cases

### 1. Let User Choose
```tsx
<SupplementComparisonWidget />
```
Shows supplement selector, user picks category.

### 2. Pre-Selected Product
```tsx
<SupplementComparisonWidget supplement="magnesium" defaultLimit={20} />
```
Directly shows Magnesium products.

### 3. Compact Embed
```tsx
<SupplementComparisonWidget 
  supplement="zinc"
  compact={true}
  defaultLimit={10}
  showFilters={false}
/>
```
Smaller layout, fewer products, no filters.

### 4. Search Only
```tsx
<SupplementComparisonWidget 
  supplement="omega-3"
  showSearch={true}
  showFilters={false}
/>
```
Search enabled, filters hidden.

## Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `supplement` | string | - | Pre-select supplement (see list below) |
| `apiEndpoint` | string | `/api/products` | API base URL |
| `defaultLimit` | number | 20 | Products to show (10, 20, 50, 100) |
| `showSearch` | boolean | true | Show/hide search |
| `showFilters` | boolean | true | Show/hide filters |
| `compact` | boolean | false | Use compact layout |

## Available Supplements (17)

```
vitamin-d        Vitamin D        (187 products)
vitamin-c        Vitamin C        (219 products)
magnesium        Magnesium        (191 products)
omega-3          Omega-3          (380 products)
zinc             Zinc             (38 products)
calcium          Calcium          (267 products)
iron             Iron             (231 products)
probiotics       Probiotics       (144 products)
collagen         Collagen         (390 products)
creatine         Creatine         (102 products)
ashwagandha      Ashwagandha      (187 products)
curcumin         Turmeric         (157 products)
multivitamin     Multivitamin     (281 products)
whey             Protein Powder   (125 products)
prebiotics       Prebiotics       (90 products)
bcaa             BCAA             (46 products)
casein           Casein           (4 products)
```

## Data Structure

### API Response
```json
{
  "supplement": "vitamin-d",
  "metadata": {
    "product_count": 187,
    "price_range": { "min": 3.99, "max": 109.44 }
  },
  "filters": { /* 40 filter definitions */ },
  "products": [
    {
      "product_name": "NOW Foods Vitamin D-3 5000 IU",
      "brand": "NOW Foods",
      "retailer": "iHerb",
      "price": 9.99,
      "price_per_unit": 0.0004,
      "unit": "IU",
      "amount_per_serving": 5000,
      "filters": ["gluten_free", "non_gmo"],
      "product_url": "https://..."
    }
  ]
}
```

## Filter Categories (40)

### Dietary (15)
vegan, vegetarian, kosher, halal, organic, non_gmo, grass_fed, wild_caught, fermented, raw, certified_organic

### Free-From (13)
gluten_free, dairy_free, lactose_free, soy_free, wheat_free, yeast_free, sugar_free, sodium_free, alcohol_free, no_artificial_colors, no_artificial_flavors, no_artificial_sweeteners, no_preservatives

### Formulation (12)
micronized, buffered, chelated, liposomal, sustained_release, enteric_coated, hydrolyzed, isolate, pharmaceutical_grade, fast_acting, maximum_strength, ultra_pure

## Customization

### Change Colors
```css
.supp-widget {
  --primary-color: #your-brand-color;
}

.supp-filter-btn.active,
.supp-buy-btn {
  background: #your-brand-color;
}
```

### Custom API URL
```tsx
<SupplementComparisonWidget 
  apiEndpoint="https://cdn.yoursite.com/api/products"
/>
```

### Add Affiliate Tracking
```python
# In create_embeddable_module.py
product['product_url'] = f"{url}?ref=your-affiliate-id"
```

## Update Data

```bash
# Re-run pipeline to get latest data
cd data-pipeline/scripts/step9-create-module
python3 create_embeddable_module.py

# Deploy new files
cp -r ../../output/step9-embeddable-module /your-website/public/api/products/
```

## Performance Tips

1. **Use Per-Supplement Files**: Faster than full module (100-300KB vs 3.2MB)
2. **Enable CDN**: Serve JSON from CDN for global speed
3. **Gzip Compression**: Reduce transfer size by ~70%
4. **Lazy Loading**: Load component only when needed
5. **Pagination**: Start with 20 products, add "Load More"

## Statistics

- ✅ **3,039 products** with price per unit
- ✅ **17 supplement categories**
- ✅ **40 filter options**
- ✅ **95.4% data coverage**
- ✅ **Multiple retailers** (iHerb, Amazon, etc.)
- ✅ **Mobile responsive**
- ✅ **TypeScript support**

## Need Help?

- 📚 Full Documentation: `docs/WIDGET_USAGE.md`
- 🌐 Live Demo: `docs/widget-demo.html`
- 💻 JS Example: `docs/vanilla-example.html`
- 📝 Summary: `output/step9-embeddable-module/STEP9_SUMMARY.md`

---

**Quick Test:**
```bash
# Open vanilla example in browser
open docs/vanilla-example.html
```

**Module Version:** 1.0  
**Last Updated:** 2025-11-19
