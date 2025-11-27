import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const csvPath = '/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/scripts/migration/data/products.csv';
const content = fs.readFileSync(csvPath, 'utf8');
const products = parse(content, {
  columns: true,
  skip_empty_lines: true,
  cast: (value, context) => {
    if (value === '' || value === 'null' || value === 'undefined') {
      return null;
    }
    return value;
  }
});

console.log('Total products:', products.length);
console.log('\nFirst product:');
console.log(JSON.stringify(products[0], null, 2));
console.log('\nFields in first product:');
console.log(Object.keys(products[0]));

// Check for null supplement_slug
const nullSlugs = products.filter(p => !p.supplement_slug);
console.log(`\nProducts with null supplement_slug: ${nullSlugs.length}`);
if (nullSlugs.length > 0) {
  console.log('First null slug product:');
  console.log(JSON.stringify(nullSlugs[0], null, 2));
}
