import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rdraqlnxypwlhkhngyjk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE1NDgzNCwiZXhwIjoyMDc5NzMwODM0fQ.FtKlSITzItpRbsZo6jASuWwgmsiYHWpN8jXuqH2fHAw',
  { db: { schema: 'api' }}
);

console.log('Testing database connection...\n');

// Test 1: Count supplements
const { data: supplements, error: suppErr } = await supabase
  .from('supplements')
  .select('*', { count: 'exact' });

console.log(`1. Supplements: ${supplements?.length || 0} rows`);
if (suppErr) console.error('Error:', suppErr);

// Test 2: Count products
const { data: products, error: prodErr } = await supabase
  .from('products')
  .select('*', { count: 'exact' });

console.log(`2. Products: ${products?.length || 0} rows`);
if (prodErr) console.error('Error:', prodErr);

// Test 3: Count prices
const { data: prices, error: priceErr } = await supabase
  .from('prices')
  .select('*', { count: 'exact' });

console.log(`3. Prices: ${prices?.length || 0} rows`);
if (priceErr) console.error('Error:', priceErr);

// Test 4: Check view
const { data: view, error: viewErr } = await supabase
  .from('supplement_summary_view')
  .select('*')
  .limit(1);

console.log(`4. supplement_summary_view: ${view ? 'Working ✅' : 'Error ❌'}`);
if (viewErr) console.error('Error:', viewErr);

// Test 5: Sample query
const { data: sample, error: sampleErr } = await supabase
  .from('supplements')
  .select('slug, name')
  .limit(5);

console.log('\n5. Sample supplements:');
sample?.forEach(s => console.log(`   - ${s.slug}: ${s.name}`));
