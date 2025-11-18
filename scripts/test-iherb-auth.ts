// Test script for authenticated iHerb scraping with cookie support
import { scrapeIherb } from './scrapers/scrape-iherb.js';
import 'dotenv/config';
import * as fs from 'fs';

async function main() {
  console.log('=== Testing iHerb Cookie-Based Authenticated Scraper ===\n');
  
  const cookiesPath = './iherb-cookies.json';
  const email = process.env.IHERB_EMAIL;
  const password = process.env.IHERB_PASSWORD;
  
  if (fs.existsSync(cookiesPath)) {
    console.log(`✅ Found cookies file: ${cookiesPath}`);
    console.log('   Will use cookie-based authentication (RECOMMENDED)\n');
  } else if (email && password) {
    console.log(`✅ Found credentials for: ${email}`);
    console.log('   Will attempt email/password authentication\n');
  } else {
    console.log('⚠️  No cookies or credentials found');
    console.log('   Scraping without authentication (some prices may be hidden)\n');
  }

  console.log('Scraping iHerb for Ashwagandha...\n');
  
  const results = await scrapeIherb('Ashwagandha', '', {
    cookiesPath: fs.existsSync(cookiesPath) ? cookiesPath : undefined,
    email,
    password,
    maxProducts: 20
  });

  console.log(`\n=== RESULTS ===`);
  console.log(`Total products found: ${results.length}`);
  
  const withPrice = results.filter(r => r.price !== null).length;
  const withUPC = results.filter(r => r.container?.upc).length;
  const withDietary = results.filter(r => r.dietary_flags && r.dietary_flags.length > 0).length;
  
  console.log(`Products with price: ${withPrice}/${results.length} (${Math.round(withPrice/results.length*100)}%)`);
  console.log(`Products with UPC: ${withUPC}/${results.length} (${Math.round(withUPC/results.length*100)}%)`);
  console.log(`Products with dietary flags: ${withDietary}/${results.length} (${Math.round(withDietary/results.length*100)}%)`);
  
  // Save results
  fs.writeFileSync(
    'iherb-auth-test-results.json',
    JSON.stringify(results, null, 2)
  );
  
  console.log(`\n✅ Results saved to iherb-auth-test-results.json`);
  
  // Show sample
  console.log(`\n=== SAMPLE DATA (first 3 products) ===`);
  results.slice(0, 3).forEach((r, i) => {
    console.log(`\n${i + 1}. ${r.productName}`);
    console.log(`   Price: $${r.price ? (r.price / 100).toFixed(2) : 'HIDDEN (see price in cart)'}`);
    console.log(`   UPC: ${r.container?.upc || 'N/A'}`);
    console.log(`   Dietary: ${r.dietary_flags?.join(', ') || 'None'}`);
    console.log(`   iTested: ${r.iTested}`);
    console.log(`   URL: ${r.url}`);
  });
}

main().catch(console.error);
