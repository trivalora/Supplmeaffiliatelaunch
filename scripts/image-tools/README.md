# Image Tools

Scripts for managing product images, migrations, and image data workflows.

## Contents (9 scripts)

### Image Migration (v0.6.6)
- `update-remaining-iherb-images.mjs` - Migrate iHerb images to local storage
- `update-vitacost-images.mjs` - Migrate Vitacost images to local storage
- `migrate-images-batch-[n].mjs` - Various batch migration scripts

### Image Data Management
- `extract-product-images.mjs` - Extract product image URLs from database
- `export-external-urls.mjs` - Export products still using external image URLs
- `list-external-images.mjs` - List products with external image links

### Debugging
- `debug-matching.mjs` - Debug image URL matching logic

## Usage

Most image tools are one-time migration scripts already executed:

```bash
node scripts/image-tools/[script-name].mjs
```

## Image Migration Project

**Status:** ✅ COMPLETE (v0.6.6.6 - Dec 2, 2025)

- **Total Products**: 1,663 in database
- **Local Images**: 748 products (45%) - migrated to `/public/images/products/`
- **External URLs**: 194 products (12%) - still using retailer CDN
- **Result**: 73% of products with images now served locally

### Migration Process

1. Downloaded images from retailer CDNs
2. Saved to `/public/images/products/[retailer]/[product-id].jpg`
3. Updated `product_image_url` in database to local paths
4. Verified image availability and quality

## File Locations

**Input:**
- CSV mappings in project root or `~/Downloads/input/`
- External URLs from database

**Output:**
- Images: `/public/images/products/[retailer]/`
- Updated database: `api.products.product_image_url`

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx
```

## Notes

- Image migration scripts were one-time operations
- Most scripts archived in `.archive/v0.6.6-image-migration/`
- These tools remain for reference and future migrations
