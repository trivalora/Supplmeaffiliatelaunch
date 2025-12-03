import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve('/Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: 'api' } }
);

// Read first 10 lines of CSV
const csvContent = readFileSync('/Users/roxyjune/Downloads/input/webdev_product_image_complete_mapping.csv', 'utf-8');
const lines = csvContent.split('\n').slice(0, 11);

console.log('📊 CSV Sample (first 10 rows):');
lines.forEach((line, i) => {
  if (i === 0) console.log('HEADERS:', line);
  else console.log(`Row ${i}:`, line.substring(0, 150));
});

// Check database structure
const { data: sample, error } = await supabase
  .from('products')
  .select('id, json_id, dsld_id, brand, product_name, product_image_url')
  .limit(3);

console.log('\n📦 Database Sample:');
console.log(JSON.stringify(sample, null, 2));

// Check for sku_id or json_id patterns
console.log('\n🔍 Checking if sku_id matches json_id pattern...');
const testSkuIds = ['5754', '5755', '5756'];
for (const skuId of testSkuIds) {
  const { data } = await supabase
    .from('products')
    .select('id, json_id, brand, product_name')
    .ilike('json_id', `%${skuId}%`)
    .limit(1);
  
  if (data && data.length > 0) {
    console.log(`✅ Found match for SKU ${skuId}:`, data[0].json_id);
  } else {
    console.log(`❌ No match for SKU ${skuId}`);
  }
}

console.log('\n✨ Analysis complete!');
process.exit(0);
