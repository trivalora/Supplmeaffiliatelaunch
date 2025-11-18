// Save HTML from ScraperAPI to debug price selectors
import 'dotenv/config';
import * as fs from 'fs';

async function debugHTML() {
  const apiKey = process.env.SCRAPERAPI_KEY;
  if (!apiKey) {
    console.error('SCRAPERAPI_KEY not found in .env');
    process.exit(1);
  }
  
  const targetUrl = 'https://www.iherb.com/search?kw=Ashwagandha&p=1&ccode=US';
  const scraperApiUrl = `http://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(targetUrl)}`;
  
  console.log('Fetching HTML from ScraperAPI...');
  const response = await fetch(scraperApiUrl);
  const html = await response.text();
  
  fs.writeFileSync('scraperapi-debug.html', html);
  console.log('✅ Saved to scraperapi-debug.html');
  
  // Extract a sample product-cell to see structure
  const match = html.match(/<div[^>]*class="[^"]*product-cell[^"]*"[^>]*>([\s\S]{1,2000}?)<\/div>/);
  if (match) {
    fs.writeFileSync('scraperapi-sample-product.html', match[0]);
    console.log('✅ Saved sample product to scraperapi-sample-product.html');
  }
}

debugHTML().catch(console.error);
