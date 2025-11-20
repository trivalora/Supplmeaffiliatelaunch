// Scrape all Ashwagandha products from iHerb and save to SQLite database
import { scrapeIherbPricesWithScraperAPI } from './scrapers/iherb-price-scrape-scraperapi.js';
import Database from 'better-sqlite3';
import { writeFileSync } from 'fs';

async function main() {
  console.log('='.repeat(60));
  console.log('🔍 Scraping ALL Ashwagandha Products from iHerb');
  console.log('='.repeat(60));
  
  const startTime = Date.now();
  
  // Scrape all pages (set maxPages high to get everything)
  console.log('\n📊 Starting scrape with ScraperAPI...');
  const products = await scrapeIherbPricesWithScraperAPI('Ashwagandha', {
    maxPages: 50 // High number to ensure we get all products
  });
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  
  console.log('\n' + '='.repeat(60));
  console.log('📦 SCRAPING COMPLETE');
  console.log('='.repeat(60));
  console.log(`⏱️  Duration: ${duration}s`);
  console.log(`✅ Total products: ${products.length}`);
  console.log(`💰 Products with prices: ${products.filter(p => p.price).length}`);
  
  // Save to JSON backup
  const jsonFile = 'ashwagandha-all-products.json';
  writeFileSync(jsonFile, JSON.stringify(products, null, 2));
  console.log(`\n📁 JSON backup saved: ${jsonFile}`);
  
  // Save to SQLite database
  console.log('\n💾 Saving to SQLite database...');
  const db = new Database('products.db');
  
  // Create table if it doesn't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS iherb_products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT UNIQUE,
      product_name TEXT NOT NULL,
      brand TEXT,
      price_cents INTEGER,
      url TEXT NOT NULL,
      supplement_type TEXT,
      scraped_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  // Create index on product_id for faster lookups
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_product_id ON iherb_products(product_id);
    CREATE INDEX IF NOT EXISTS idx_supplement_type ON iherb_products(supplement_type);
  `);
  
  // Prepare insert/update statement
  const upsert = db.prepare(`
    INSERT INTO iherb_products (product_id, product_name, brand, price_cents, url, supplement_type, updated_at)
    VALUES (@product_id, @product_name, @brand, @price_cents, @url, @supplement_type, CURRENT_TIMESTAMP)
    ON CONFLICT(product_id) DO UPDATE SET
      product_name = excluded.product_name,
      brand = excluded.brand,
      price_cents = excluded.price_cents,
      url = excluded.url,
      updated_at = CURRENT_TIMESTAMP
  `);
  
  // Insert products
  let inserted = 0;
  let updated = 0;
  
  const insertMany = db.transaction((products) => {
    for (const product of products) {
      // Extract product ID from URL (e.g., /pr/brand-name/89863 -> 89863)
      const productId = product.url.match(/\/pr\/[^/]+\/(\d+)/)?.[1] || null;
      
      if (!productId) {
        console.warn(`⚠️  Could not extract product ID from: ${product.url}`);
        continue;
      }
      
      try {
        const result = upsert.run({
          product_id: productId,
          product_name: product.productName,
          brand: product.brand || null,
          price_cents: product.price,
          url: product.url,
          supplement_type: 'ashwagandha'
        });
        
        if (result.changes > 0) {
          inserted++;
        }
      } catch (err) {
        console.error(`Error inserting product ${productId}:`, err);
      }
    }
  });
  
  insertMany(products);
  
  console.log(`✅ Database updated: ${inserted} products saved`);
  
  // Query stats
  const stats = db.prepare(`
    SELECT 
      COUNT(*) as total,
      COUNT(CASE WHEN price_cents IS NOT NULL THEN 1 END) as with_price,
      MIN(price_cents) / 100.0 as min_price,
      MAX(price_cents) / 100.0 as max_price,
      AVG(price_cents) / 100.0 as avg_price
    FROM iherb_products
    WHERE supplement_type = 'ashwagandha'
  `).get();
  
  console.log('\n📊 DATABASE STATISTICS:');
  console.log(`   Total Ashwagandha products: ${stats.total}`);
  console.log(`   Products with prices: ${stats.with_price}`);
  console.log(`   Price range: $${stats.min_price?.toFixed(2)} - $${stats.max_price?.toFixed(2)}`);
  console.log(`   Average price: $${stats.avg_price?.toFixed(2)}`);
  
  // Show top 10 products by price
  console.log('\n💎 TOP 10 MOST EXPENSIVE:');
  const topExpensive = db.prepare(`
    SELECT product_name, brand, price_cents / 100.0 as price
    FROM iherb_products
    WHERE supplement_type = 'ashwagandha' AND price_cents IS NOT NULL
    ORDER BY price_cents DESC
    LIMIT 10
  `).all();
  
  topExpensive.forEach((p, i) => {
    console.log(`   ${i + 1}. $${p.price.toFixed(2)} - ${p.product_name}`);
  });
  
  console.log('\n💰 TOP 10 BEST VALUE:');
  const topCheap = db.prepare(`
    SELECT product_name, brand, price_cents / 100.0 as price
    FROM iherb_products
    WHERE supplement_type = 'ashwagandha' AND price_cents IS NOT NULL
    ORDER BY price_cents ASC
    LIMIT 10
  `).all();
  
  topCheap.forEach((p, i) => {
    console.log(`   ${i + 1}. $${p.price.toFixed(2)} - ${p.product_name}`);
  });
  
  db.close();
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ COMPLETE! Database: products.db');
  console.log('='.repeat(60));
}

main().catch(console.error);
