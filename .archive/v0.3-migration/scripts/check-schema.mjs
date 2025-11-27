import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rdraqlnxypwlhkhngyjk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE1NDgzNCwiZXhwIjoyMDc5NzMwODM0fQ.FtKlSITzItpRbsZo6jASuWwgmsiYHWpN8jXuqH2fHAw',
  { db: { schema: 'api' }}
);

console.log('=== DATABASE SCHEMA CHECK ===\n');

// Check products table structure
const { data: product, error: prodErr } = await supabase
  .from('products')
  .select('*')
  .limit(1)
  .single();

if (product) {
  console.log('Products table columns:');
  console.log(Object.keys(product).sort().join(', '));
  console.log('\nSample product:');
  console.log(JSON.stringify(product, null, 2));
}

// Check prices table with retailer join
const { data: prices, error: priceErr } = await supabase
  .from('prices')
  .select(`
    *,
    retailer:retailers (
      name,
      slug
    )
  `)
  .limit(1);

if (prices && prices.length > 0) {
  console.log('\n\nPrices table columns:');
  console.log(Object.keys(prices[0]).sort().join(', '));
  console.log('\nSample price:');
  console.log(JSON.stringify(prices[0], null, 2));
}

// Check supplement_summary_view
const { data: view, error: viewErr } = await supabase
  .from('supplement_summary_view')
  .select('*')
  .limit(1);

if (view && view.length > 0) {
  console.log('\n\nsupplement_summary_view columns:');
  console.log(Object.keys(view[0]).sort().join(', '));
}
