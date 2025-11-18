// Debug script to find correct price selectors
import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';

puppeteerExtra.use(StealthPlugin());

async function debugPriceSelectors() {
  const browser = await (puppeteerExtra as any).launch({ 
    headless: false,  // Visible browser
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    puppeteer 
  });
  
  const page = await browser.newPage();
  const ua = new UserAgents();
  await page.setUserAgent(ua.toString());
  await page.setViewport({ width: 1400, height: 900 });
  
  // Test with a specific product
  const url = 'https://www.iherb.com/pr/jarrow-formulas-ashwagandha-300-mg-120-veggie-capsules/3302';
  
  console.log(`Loading: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  
  await new Promise(res => setTimeout(res, 3000));
  
  // Extract ALL price-related elements
  const priceInfo = await page.evaluate(() => {
    const results: any = {};
    
    // Try different selectors
    const selectors = [
      '#product-price',
      '#product-price b',
      '#product-price > div > div > div.discount-price-content > b',
      '.discount-price-content b',
      '.product-price',
      '[class*="price"]',
      'b[class*="price"]',
      'span[class*="price"]'
    ];
    
    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        results[sel] = {
          text: el.textContent?.trim(),
          innerHTML: el.innerHTML.substring(0, 200),
          className: el.className
        };
      }
    });
    
    // Also get ALL elements in #product-price
    const priceSection = document.querySelector('#product-price');
    if (priceSection) {
      results['#product-price_full'] = priceSection.innerHTML.substring(0, 500);
      
      // Find all <b> tags
      const allBTags = priceSection.querySelectorAll('b');
      results['all_b_tags'] = Array.from(allBTags).map((b, i) => ({
        index: i,
        text: b.textContent?.trim(),
        class: b.className
      }));
    }
    
    return results;
  });
  
  console.log('\n=== PRICE INFORMATION ===');
  console.log(JSON.stringify(priceInfo, null, 2));
  
  console.log('\n⏳ Browser will stay open for 10 seconds...');
  await new Promise(res => setTimeout(res, 10000));
  
  await browser.close();
}

debugPriceSelectors().catch(console.error);
