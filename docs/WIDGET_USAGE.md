# Supplement Product Comparison Widget

Embeddable product comparison module with search, filtering, and price per unit sorting for 17 supplement categories.

## Features

- ✅ **17 Supplement Categories**: Vitamin D, C, Magnesium, Omega-3, Zinc, Calcium, B12, Iron, Probiotics, Collagen, Creatine, Ashwagandha, Turmeric, Multivitamin, Protein Powder, Melatonin, CoQ10
- ✅ **Price Per Unit Sorting**: Find the best value by comparing standardized price per active ingredient
- ✅ **40+ Filters**: Dietary preferences (vegan, gluten-free, etc.), formulations (micronized, liposomal, etc.)
- ✅ **Real-time Search**: Search by product name, brand, or retailer
- ✅ **3,039 Products**: Only products with valid price per unit data (excludes 145 without)
- ✅ **Multiple Retailers**: Compare prices across iHerb, Amazon, and other platforms
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile

## Quick Start

### 1. Generate Module Data

Run the data pipeline script to create embeddable JSON files:

```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/data-pipeline/scripts/step9-create-module
python3 create_embeddable_module.py
```

This creates:
- `output/step9-embeddable-module/product-comparison-module.json` - Full dataset
- `output/step9-embeddable-module/supplements/*.json` - Per-supplement files
- `output/step9-embeddable-module/module-config.json` - Configuration

### 2. Serve Data Files

Copy JSON files to your web server's API endpoint:

```bash
# Example: Copy to public API directory
cp -r output/step9-embeddable-module /path/to/your/website/public/api/products/
```

Or set up API routes in your backend to serve these files.

### 3. Install React Component

Copy the component files to your React project:

```bash
cp src/components/SupplementComparisonWidget.tsx /path/to/your/project/src/components/
cp src/components/SupplementComparisonWidget.css /path/to/your/project/src/components/
```

## Usage Examples

### Basic Usage (User Selects Supplement)

```tsx
import SupplementComparisonWidget from './components/SupplementComparisonWidget';

function ProductComparison() {
  return <SupplementComparisonWidget />;
}
```

### Pre-selected Supplement

```tsx
<SupplementComparisonWidget supplement="vitamin-d" />
```

### Custom Configuration

```tsx
<SupplementComparisonWidget 
  supplement="magnesium"
  apiEndpoint="/api/products"
  defaultLimit={50}
  showSearch={true}
  showFilters={true}
  compact={false}
/>
```

### Embedded in Article/Blog Post

```tsx
function Article() {
  return (
    <article>
      <h1>Best Vitamin D Supplements for 2025</h1>
      <p>Based on our analysis...</p>
      
      {/* Embed widget mid-article */}
      <SupplementComparisonWidget 
        supplement="vitamin-d" 
        compact={true}
        defaultLimit={10}
      />
      
      <p>Continue reading...</p>
    </article>
  );
}
```

### Multiple Widgets on One Page

```tsx
function ComparisonPage() {
  return (
    <div>
      <section>
        <h2>Best Vitamin D Deals</h2>
        <SupplementComparisonWidget supplement="vitamin-d" defaultLimit={10} />
      </section>
      
      <section>
        <h2>Best Magnesium Deals</h2>
        <SupplementComparisonWidget supplement="magnesium" defaultLimit={10} />
      </section>
    </div>
  );
}
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `supplement` | `string` | `undefined` | Pre-select supplement category (e.g., "vitamin-d") |
| `apiEndpoint` | `string` | `/api/products` | Base URL for API requests |
| `defaultLimit` | `number` | `20` | Number of products to show initially |
| `showSearch` | `boolean` | `true` | Show/hide search input |
| `showFilters` | `boolean` | `true` | Show/hide filter buttons |
| `compact` | `boolean` | `false` | Use compact layout (smaller max-width) |

## Available Supplements

```typescript
const supplements = [
  'vitamin-d',      // Vitamin D
  'vitamin-c',      // Vitamin C
  'magnesium',      // Magnesium
  'omega-3',        // Omega-3
  'zinc',           // Zinc
  'calcium',        // Calcium
  'vitamin-b12',    // Vitamin B12
  'iron',           // Iron
  'probiotics',     // Probiotics
  'collagen',       // Collagen
  'creatine',       // Creatine
  'ashwagandha',    // Ashwagandha
  'turmeric',       // Turmeric
  'multivitamin',   // Multivitamin
  'protein-powder', // Protein Powder
  'melatonin',      // Melatonin
  'coq10'           // CoQ10
];
```

## Filter Categories

### Dietary Preferences (15)
- Vegan, Vegetarian, Kosher, Halal, Organic
- Non-GMO, Grass-Fed, Wild-Caught, Fermented, Raw

### Free-From (13)
- Gluten-Free, Dairy-Free, Lactose-Free, Soy-Free
- Wheat-Free, Yeast-Free, Sugar-Free, Sodium-Free
- Alcohol-Free, No Artificial Colors/Flavors/Sweeteners
- No Preservatives

### Formulation (12)
- Micronized, Buffered, Chelated, Liposomal
- Sustained Release, Enteric Coated, Hydrolyzed, Isolate
- Pharmaceutical Grade, Fast Acting, Maximum Strength, Ultra Pure

## API Endpoints

### Full Dataset
```
GET /api/products/product-comparison-module.json
```

Returns complete module data with all supplements and filters.

**Response:**
```json
{
  "version": "1.0",
  "metadata": {
    "total_products": 3039,
    "excluded_products": 145,
    "supplement_categories": 17,
    "available_filters": 40
  },
  "supplements": { ... },
  "filters": { ... },
  "products_by_supplement": { ... }
}
```

### Per-Supplement Data
```
GET /api/products/supplements/{supplement}.json
```

Returns data for specific supplement (faster loading).

**Example:**
```
GET /api/products/supplements/vitamin-d.json
```

**Response:**
```json
{
  "supplement": "vitamin-d",
  "metadata": {
    "name": "Vitamin D",
    "product_count": 243,
    "price_range": { "min": 3.99, "max": 89.95 },
    "retailers": ["iHerb", "Amazon"]
  },
  "filters": { ... },
  "products": [ ... ]
}
```

## Data Structure

### Product Object
```typescript
interface Product {
  id: string;                    // Unique identifier
  dsld_id: string;               // DSLD database ID
  supplement_category: string;   // "vitamin-d", etc.
  
  product_name: string;          // Full product name
  brand: string;                 // Brand name
  retailer: string;              // Retailer name
  product_url: string;           // Affiliate link
  
  price: number;                 // Total price in USD
  price_per_unit: number;        // Price per unit (mg/IU/CFU)
  unit: string;                  // "mg", "IU", "CFU", etc.
  primary_ingredient: string;    // Main active ingredient
  amount_per_serving: number;    // Amount per serving in unit
  
  filters: string[];             // Active filter keys
  rating?: number;               // Product rating (1-5)
  reviews?: number;              // Number of reviews
}
```

## Customization

### Custom Styling

Override CSS classes to match your brand:

```css
/* Custom primary color */
.supp-filter-btn.active,
.supp-buy-btn {
  background: #your-brand-color;
}

/* Custom fonts */
.supp-widget {
  font-family: 'Your Font', sans-serif;
}

/* Custom card styling */
.supp-product-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### Theming

The widget supports CSS custom properties:

```css
.supp-widget {
  --primary-color: #4CAF50;
  --border-radius: 8px;
  --spacing-unit: 20px;
}
```

### Custom Sort Options

Modify the component to add custom sorting:

```tsx
const sortOptions = [
  { value: 'price_per_unit', label: 'Best Value' },
  { value: 'price', label: 'Lowest Price' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'reviews', label: 'Most Reviews' }  // Add custom
];
```

## Performance Optimization

### Lazy Loading

Load supplement data only when needed:

```tsx
import { lazy, Suspense } from 'react';

const SupplementWidget = lazy(() => 
  import('./components/SupplementComparisonWidget')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupplementWidget supplement="vitamin-d" />
    </Suspense>
  );
}
```

### CDN Caching

Serve JSON files from CDN for faster loading:

```tsx
<SupplementComparisonWidget 
  apiEndpoint="https://cdn.yoursite.com/api/products"
/>
```

### Pagination

Limit initial load and add "Load More":

```tsx
<SupplementComparisonWidget 
  defaultLimit={20}
/>
```

## Integration Examples

### Next.js

```tsx
// pages/supplements/[slug].tsx
import SupplementComparisonWidget from '@/components/SupplementComparisonWidget';

export default function SupplementPage({ params }) {
  return (
    <main>
      <h1>Best {params.slug} Supplements</h1>
      <SupplementComparisonWidget supplement={params.slug} />
    </main>
  );
}

export async function generateStaticParams() {
  return supplements.map(s => ({ slug: s }));
}
```

### WordPress (via React Plugin)

```javascript
// Shortcode usage
[supplement_widget supplement="vitamin-d" limit="10"]

// Or in React block
<SupplementComparisonWidget supplement="magnesium" />
```

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/css/supplement-widget.css">
</head>
<body>
  <div id="supplement-widget"></div>
  
  <script type="module">
    import { SupplementComparisonWidget } from './components/SupplementComparisonWidget.js';
    import { createRoot } from 'react-dom/client';
    
    const root = createRoot(document.getElementById('supplement-widget'));
    root.render(
      <SupplementComparisonWidget supplement="vitamin-d" />
    );
  </script>
</body>
</html>
```

## Troubleshooting

### Products Not Loading

1. Check API endpoint configuration
2. Verify JSON files are accessible
3. Check browser console for CORS errors
4. Ensure supplement slug is correct

### Filters Not Working

1. Verify filter keys match data structure
2. Check that products have `filters` array populated
3. Ensure filter data is loaded from API

### Styling Issues

1. Import CSS file in your component
2. Check for CSS conflicts with existing styles
3. Use `.supp-widget` namespace to scope styles

## Data Updates

To update product data:

1. Re-run the data pipeline (Steps 1-8)
2. Run Step 9 to regenerate module data
3. Deploy updated JSON files to production
4. Clear CDN cache if applicable

```bash
# Full pipeline
cd data-pipeline/scripts
./run_full_pipeline.sh

# Step 9 only
cd step9-create-module
python3 create_embeddable_module.py
```

## License

This module is part of the Suppl.me Affiliate Launch project.

## Support

For issues or questions, contact the development team.
