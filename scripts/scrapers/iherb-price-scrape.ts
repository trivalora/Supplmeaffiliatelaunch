// Simplified iHerb price scraper - search results only
// Avoids individual product pages to minimize bot detection
// Use DSLD data for dietary info, UPCs, etc.

import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';
import * as fs from 'fs';

puppeteerExtra.use(StealthPlugin());

async function launchBrowser(headless: boolean = false) {
  const launchOpts: any = { 
    headless, // PerimeterX blocks headless browsers - must use visible browser
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  if (process.env.SCRAPER_PROXY) launchOpts.args.push(`--proxy-server=${process.env.SCRAPER_PROXY}`);
  if (process.env.PUPPETEER_EXECUTABLE_PATH) launchOpts.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  return await (puppeteerExtra as any).launch({ ...launchOpts, puppeteer });
}

export interface IherbPriceScraperOptions {
  cookiesPath?: string;
  maxPages?: number; // Max search result pages to scrape
  headless?: boolean; // Run in headless mode (default: false, as PerimeterX blocks headless)
}

export async function scrapeIherbPrices(searchTerm: string, options: IherbPriceScraperOptions = {}) {
  const { cookiesPath, maxPages = 10, headless = false } = options;
  const browser = await launchBrowser(headless);
  const page = await browser.newPage();
  
  const ua = new UserAgents();
  await page.setUserAgent(ua.toString());
  await page.setViewport({ width: 1400, height: 900 });
  
  // Load cookies if provided
  if (cookiesPath && fs.existsSync(cookiesPath)) {
    try {
      console.log(`[iHerb] Loading cookies from ${cookiesPath}...`);
      const cookiesString = fs.readFileSync(cookiesPath, 'utf8');
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
      console.log(`[iHerb] ✅ Loaded ${cookies.length} cookies`);
    } catch (err) {
      console.warn('[iHerb] ⚠️ Failed to load cookies:', err);
    }
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
    const searchUrl = `https://www.iherb.com/search?kw=${encodeURIComponent(searchTerm)}&p=${currentPage}&ccode=US`;
    console.log(`\n[iHerb] Scraping page ${currentPage}: ${searchUrl}`);
    
    try {
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise(res => setTimeout(res, 2000));
      
      // Check for PerimeterX modal and handle it
      const perimeterXModal = await page.$('ugc-perimeterx-modal');
      if (perimeterXModal) {
        console.log('[iHerb] ⚠️  PerimeterX verification detected - attempting to solve...');
        try {
          // Find the press-and-hold button
          const button = await page.$('ugc-perimeterx-modal ugc-drawer div.modal-content-wrap div.modal-content div');
          if (button) {
            console.log('[iHerb] Pressing and holding verification button...');
            await button.click({ delay: 3500 }); // Hold for 3.5 seconds
            await new Promise(res => setTimeout(res, 2000)); // Wait for modal to close
            console.log('[iHerb] ✅ PerimeterX verification completed');
          }
        } catch (err) {
          console.warn('[iHerb] ⚠️  Could not solve PerimeterX:', err);
        }
      }
      
      // Extract products from search results
      const pageProducts = await page.evaluate(() => {
        const products: Array<{
          productName: string;
          price: number | null;
          url: string;
          brand?: string;
        }> = [];
        
        // Find all product cards - use exact selector from debug
        const productCards = document.querySelectorAll('.product-cell');
        
        productCards.forEach(card => {
          try {
            // Get product link from .product-link
            const linkEl = card.querySelector('.product-link') as HTMLAnchorElement;
            if (!linkEl) return;
            
            const url = new URL(linkEl.href, window.location.href).toString();
            
            // Get product name from .product-title
            const nameEl = card.querySelector('.product-title');
            const productName = nameEl?.textContent?.trim() || '';
            if (!productName) return;
            
            // Get brand from product name (usually "Brand, Product Name")
            let brand: string | undefined;
            const nameParts = productName.split(',');
            if (nameParts.length > 1) {
              brand = nameParts[0].trim();
            }
            
            // Get price from .product-price
            let price: number | null = null;
            const priceEl = card.querySelector('.product-price');
            if (priceEl) {
              const priceText = priceEl.textContent?.trim();
              if (priceText && /[$€£¥][\d,\.]+/.test(priceText)) {
                // Extract numeric value
                const cleaned = priceText.replace(/[^0-9.,]/g, '').replace(/,/g, '');
                const parsed = parseFloat(cleaned);
                if (Number.isFinite(parsed) && parsed > 0) {
                  price = Math.round(parsed * 100); // Convert to cents
                }
              }
            }
            
            products.push({
              productName,
              price,
              url,
              brand
            });
          } catch (err) {
            // Skip problematic products
          }
        });
        
        return products;
      });
      
      console.log(`[iHerb] Found ${pageProducts.length} products on page ${currentPage}`);
      allProducts.push(...pageProducts);
      
      // Check if there's a next page
      const hasNextPage = await page.evaluate(() => {
        const nextButton = document.querySelector('a[rel="next"], button[class*="next"]:not([disabled]), [class*="pagination"] a[class*="next"]');
        return !!nextButton;
      });
      
      if (!hasNextPage) {
        console.log(`[iHerb] No more pages found`);
        hasMorePages = false;
      } else {
        currentPage++;
        // Random delay between pages
        await new Promise(res => setTimeout(res, 1500 + Math.random() * 1500));
      }
      
    } catch (err) {
      console.error(`[iHerb] Error on page ${currentPage}:`, err);
      hasMorePages = false;
    }
  }
  
  await browser.close();
  
  console.log(`\n[iHerb] ✅ Total products scraped: ${allProducts.length}`);
  console.log(`[iHerb] Products with prices: ${allProducts.filter(p => p.price !== null).length}`);
  
  return allProducts;
}
