// Debug script to save current HTML from ScraperAPI
import 'dotenv/config';
import { writeFileSync } from 'fs';

async function debugHTML() {
  const apiKey = process.env.SCRAPERAPI_KEY;
  const targetUrl = `https://www.iherb.com/search?kw=Ashwagandha&p=1&ccode=US`;
  const scraperApiUrl = `http://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(targetUrl)}`;

  console.log('Fetching current HTML from ScraperAPI...');
  console.log('Target:', targetUrl);

  const response = await fetch(scraperApiUrl);
  const html = await response.text();

  writeFileSync('current-html.html', html);
  console.log('✅ Saved to current-html.html');
  console.log(`HTML length: ${html.length} characters`);

  // Check for price elements
  const priceCount = (html.match(/class="price discount-red"/g) || []).length;
  const priceCount2 = (html.match(/class='product-price/g) || []).length;
  console.log(`\nFound price.discount-red: ${priceCount}`);
  console.log(`Found product-price: ${priceCount2}`);
}

debugHTML();
