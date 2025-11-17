// Test script to scrape Amazon and iHerb for Ashwagandha prices
import { scrapeAmazon, scrapeIherb } from './scrape-retailers.ts';
import { writeFileSync } from 'fs';

async function test() {
  const productName = 'Ashwagandha';
  const brand = '';
  console.log('Scraping Amazon for Ashwagandha...');
  const amazonResults = await scrapeAmazon(productName, brand);
  console.log('Amazon results:', amazonResults);

  console.log('Scraping iHerb for Ashwagandha...');
  const iherbResults = await scrapeIherb(productName, brand);
  console.log('iHerb results:', iherbResults);

  // Save results to JSON file
  const output = {
    amazon: amazonResults,
    iherb: iherbResults
  };
  writeFileSync('ashwagandha-scrape-results.json', JSON.stringify(output, null, 2));
  console.log('Results saved to ashwagandha-scrape-results.json');
}

test().catch(console.error);
