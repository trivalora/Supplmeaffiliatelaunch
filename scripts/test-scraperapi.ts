// Test script for ScraperAPI-based iHerb price scraper
import { scrapeIherbPricesWithScraperAPI } from './scrapers/iherb-price-scrape-scraperapi.js';
import * as fs from 'fs';

async function main() {
  console.log('=== Testing iHerb Price Scraper with ScraperAPI ===\n');
  console.log('✨ ScraperAPI handles all bot detection (PerimeterX, etc.)');
  console.log('📊 No browser required - pure HTTP requests\n');
  
  if (!process.env.SCRAPERAPI_KEY) {
    console.error('❌ ERROR: SCRAPERAPI_KEY not found in .env file');
    console.log('\n📝 To fix:');
    console.log('1. Sign up at https://www.scraperapi.com/signup');
    console.log('2. Get your API key from dashboard');
    console.log('3. Add to .env file: SCRAPERAPI_KEY=your_key_here\n');
    console.log('💡 Free tier includes 5,000 requests/month');
    process.exit(1);
  }
  
  console.log('✅ ScraperAPI key found');
  console.log('🔍 Searching for: Ashwagandha');
  console.log('📄 Max pages: 3 (for testing)\n');
  
  const startTime = Date.now();
  
  try {
    const results = await scrapeIherbPricesWithScraperAPI('Ashwagandha', {
      maxPages: 3
    });
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    
    console.log(`\n⏱️  Completed in ${duration}s`);
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
        
        console.log(`\n💰 Price Stats:`);
        console.log(`  Average: $${(avgPrice / 100).toFixed(2)}`);
        console.log(`  Min: $${(minPrice / 100).toFixed(2)}`);
        console.log(`  Max: $${(maxPrice / 100).toFixed(2)}`);
      }
    }
    
    // Save results
    const outputFile = 'iherb-scraperapi-results.json';
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
    console.log(`\n✅ Results saved to ${outputFile}`);
    
    // Show sample
    console.log(`\n=== SAMPLE DATA (first 5 products) ===`);
    results.slice(0, 5).forEach((r, i) => {
      console.log(`\n${i + 1}. ${r.productName}`);
      if (r.brand) console.log(`   Brand: ${r.brand}`);
      console.log(`   Price: ${r.price ? '$' + (r.price / 100).toFixed(2) : 'N/A'}`);
      console.log(`   URL: ${r.url}`);
    });
    
    // Cost estimation
    const requestsUsed = 3; // Number of pages scraped
    console.log(`\n💵 ScraperAPI Usage:`);
    console.log(`   Requests used: ~${requestsUsed} (1 per page)`);
    console.log(`   Free tier remaining: ~${5000 - requestsUsed}/5000`);
    
  } catch (error: any) {
    console.error('\n❌ Error:', error.message);
    console.error('\nFull error:', error);
    process.exit(1);
  }
}

main().catch(console.error);
