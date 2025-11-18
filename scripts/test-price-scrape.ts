// Test script for iHerb price-only scraper
import { scrapeIherbPrices } from './scrapers/iherb-price-scrape.js';
import * as fs from 'fs';

async function main() {
  console.log('=== Testing iHerb Price-Only Scraper ===\n');
  console.log('Strategy: Scrape search results only (avoids individual product page detection)');
  console.log('PerimeterX handling: Automated press-and-hold if modal appears\n');
  
  const cookiesPath = './iherb-cookies.json';
  
  if (fs.existsSync(cookiesPath)) {
    console.log(`✅ Using cookies from: ${cookiesPath}\n`);
  } else {
    console.log('⚠️  No cookies found - continuing without authentication\n');
  }
  
  console.log('Searching for: Ashwagandha');
  console.log('Max pages: 3 (to test pagination)\n');
  
  const results = await scrapeIherbPrices('Ashwagandha', {
    cookiesPath: fs.existsSync(cookiesPath) ? cookiesPath : undefined,
    maxPages: 3  // Test with 3 pages
  });
  
  console.log('\n=== RESULTS ===');
  console.log(`Total products scraped: ${results.length}`);
  
  const withPrice = results.filter(r => r.price !== null).length;
  const pricePercentage = results.length > 0 ? Math.round(withPrice / results.length * 100) : 0;
  
  console.log(`Products with price: ${withPrice}/${results.length} (${pricePercentage}%)`);
  
  if (results.length > 0) {
    const prices = results.filter(r => r.price !== null).map(r => r.price!);
    if (prices.length > 0) {
      const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      
      console.log(`\nPrice Stats:`);
      console.log(`  Average: $${(avgPrice / 100).toFixed(2)}`);
      console.log(`  Min: $${(minPrice / 100).toFixed(2)}`);
      console.log(`  Max: $${(maxPrice / 100).toFixed(2)}`);
    }
  }
  
  // Save results
  const outputFile = 'iherb-price-scrape-results.json';
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\n✅ Results saved to ${outputFile}`);
  
  // Show sample
  console.log(`\n=== SAMPLE DATA (first 5 products) ===`);
  results.slice(0, 5).forEach((r, i) => {
    console.log(`\n${i + 1}. ${r.productName}`);
    if (r.brand) console.log(`   Brand: ${r.brand}`);
    console.log(`   Price: ${r.price ? '$' + (r.price / 100).toFixed(2) : 'HIDDEN'}`);
    console.log(`   URL: ${r.url}`);
  });
  
  // Show products without prices for debugging
  const noPriceProducts = results.filter(r => r.price === null);
  if (noPriceProducts.length > 0 && noPriceProducts.length < results.length) {
    console.log(`\n=== PRODUCTS WITHOUT PRICES (${noPriceProducts.length}) ===`);
    noPriceProducts.slice(0, 3).forEach((r, i) => {
      console.log(`${i + 1}. ${r.productName}`);
    });
  }
}

main().catch(console.error);
