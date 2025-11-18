// Debug script to find correct selectors for search results page
import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';
import * as fs from 'fs';

puppeteerExtra.use(StealthPlugin());

async function debugSearchPage() {
  const browser = await (puppeteerExtra as any).launch({ 
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    puppeteer 
  });
  
  const page = await browser.newPage();
  const ua = new UserAgents();
  await page.setUserAgent(ua.toString());
  await page.setViewport({ width: 1400, height: 900 });
  
  // Load cookies
  const cookiesPath = './iherb-cookies.json';
  if (fs.existsSync(cookiesPath)) {
    const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf8'));
    await page.setCookie(...cookies);
    console.log('✅ Loaded cookies');
  }
  
  const url = 'https://www.iherb.com/search?kw=Ashwagandha&ccode=US';
  console.log(`Loading: ${url}`);
  
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  await new Promise(res => setTimeout(res, 3000));
  
  // Save HTML
  const html = await page.content();
  fs.writeFileSync('search-page-debug.html', html);
  console.log('✅ HTML saved to search-page-debug.html');
  
  // Try to find products with various selectors
  const selectors = await page.evaluate(() => {
    const results: any = {};
    
    // Try different product container selectors
    const containerSelectors = [
      '.product-cell',
      '[class*="product-cell"]',
      '[class*="product-card"]',
      '[class*="product-inner"]',
      '[class*="product-item"]',
      '[data-qa*="product"]',
      'article',
      '[role="article"]'
    ];
    
    containerSelectors.forEach(sel => {
      const found = document.querySelectorAll(sel);
      if (found.length > 0) {
        results[sel] = {
          count: found.length,
          sample: found[0]?.className || found[0]?.tagName
        };
      }
    });
    
    // Also check all class names on page
    const allElements = document.querySelectorAll('*');
    const productClasses = new Set<string>();
    allElements.forEach(el => {
      const classes = el.className;
      if (typeof classes === 'string' && classes.toLowerCase().includes('product')) {
        classes.split(' ').forEach(c => {
          if (c.toLowerCase().includes('product')) {
            productClasses.add(c);
          }
        });
      }
    });
    
    results['_allProductClasses'] = Array.from(productClasses);
    
    return results;
  });
  
  console.log('\n=== SELECTOR DEBUG INFO ===');
  console.log(JSON.stringify(selectors, null, 2));
  
  console.log('\n⏳ Browser will stay open for 20 seconds for manual inspection...');
  await new Promise(res => setTimeout(res, 20000));
  
  await browser.close();
}

debugSearchPage().catch(console.error);
