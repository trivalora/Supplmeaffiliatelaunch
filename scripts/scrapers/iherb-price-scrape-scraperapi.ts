// iHerb price scraper using ScraperAPI to bypass bot detection
// ScraperAPI handles all anti-bot measures including PerimeterX
import * as cheerio from 'cheerio';
import 'dotenv/config';

export interface IherbPriceScraperOptions {
  maxPages?: number;
  apiKey?: string; // ScraperAPI key (or use SCRAPERAPI_KEY env var)
}

export async function scrapeIherbPricesWithScraperAPI(
  searchTerm: string, 
  options: IherbPriceScraperOptions = {}
) {
  const { maxPages = 10, apiKey = process.env.SCRAPERAPI_KEY } = options;
  
  if (!apiKey) {
    throw new Error('ScraperAPI key required! Set SCRAPERAPI_KEY in .env or pass as option');
  }
  
  const allProducts: Array<{
    productName: string;
    price: number | null;
    url: string;
    brand?: string;
  }> = [];
  
  let currentPage = 1;
  let hasMorePages = true;
  
  while (hasMorePages && currentPage <= maxPages) {
    const targetUrl = `https://www.iherb.com/search?kw=${encodeURIComponent(searchTerm)}&p=${currentPage}&ccode=US`;
    
    // ScraperAPI URL format: http://api.scraperapi.com?api_key=YOUR_KEY&url=TARGET_URL
    const scraperApiUrl = `http://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(targetUrl)}`;
    
    console.log(`\n[iHerb] Scraping page ${currentPage} via ScraperAPI...`);
    console.log(`[iHerb] Target: ${targetUrl}`);
    
    try {
      const response = await fetch(scraperApiUrl);
      
      if (!response.ok) {
        console.error(`[iHerb] ScraperAPI error: ${response.status} ${response.statusText}`);
        break;
      }
      
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // Find all product cards
      const productCards = $('.product-cell');
      
      console.log(`[iHerb] Found ${productCards.length} products on page ${currentPage}`);
      
      if (productCards.length === 0) {
        console.log('[iHerb] No products found - stopping pagination');
        hasMorePages = false;
        break;
      }
      
      // Extract product data
      productCards.each((_, card) => {
        try {
          const $card = $(card);
          
          // Get product link
          const linkEl = $card.find('.product-link');
          const relativeUrl = linkEl.attr('href');
          if (!relativeUrl) return;
          
          const url = new URL(relativeUrl, 'https://www.iherb.com').toString();
          
          // Get product name
          const nameEl = $card.find('.product-title');
          const productName = nameEl.text().trim();
          if (!productName) return;
          
          // Get brand from product name (usually "Brand, Product Name")
          let brand: string | undefined;
          const nameParts = productName.split(',');
          if (nameParts.length > 1) {
            brand = nameParts[0].trim();
          }
          
          // Get price from data attribute (most reliable method)
          let price: number | null = null;
          
          // Primary source: data-ga-discount-price attribute on product link
          const priceAttr = linkEl.attr('data-ga-discount-price');
          if (priceAttr) {
            const parsed = parseFloat(priceAttr);
            if (Number.isFinite(parsed) && parsed > 0) {
              price = Math.round(parsed * 100); // Convert to cents
            }
          }
          
          allProducts.push({
            productName,
            price,
            url,
            brand
          });
        } catch (err) {
          // Skip problematic products
        }
      });
      
      // Check for next page - look for pagination
      const hasNextPage = $('a[rel="next"]').length > 0 || 
                         $('.pagination a.next:not(.disabled)').length > 0;
      
      if (!hasNextPage) {
        console.log('[iHerb] No more pages found');
        hasMorePages = false;
      } else {
        currentPage++;
        // Small delay to be respectful to ScraperAPI
        await new Promise(res => setTimeout(res, 1000));
      }
      
    } catch (err) {
      console.error(`[iHerb] Error on page ${currentPage}:`, err);
      hasMorePages = false;
    }
  }
  
  console.log(`\n[iHerb] ✅ Total products scraped: ${allProducts.length}`);
  console.log(`[iHerb] Products with prices: ${allProducts.filter(p => p.price !== null).length}`);
  
  return allProducts;
}
