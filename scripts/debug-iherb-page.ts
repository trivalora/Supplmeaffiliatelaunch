// Debug script to save iHerb page HTML for inspection
import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';
import * as fs from 'fs';

puppeteerExtra.use(StealthPlugin());

async function debugPage() {
  const browser = await (puppeteerExtra as any).launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    puppeteer 
  });
  
  const page = await browser.newPage();
  const ua = new UserAgents();
  await page.setUserAgent(ua.toString());
  await page.setViewport({ width: 1400, height: 900 });
  
  // Test with California Gold Nutrition product that was returning nulls
  const url = 'https://www.iherb.com/pr/california-gold-nutrition-ashwagandha-450-mg-180-veggie-capsules/89863';
  
  console.log(`Loading: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  
  // Wait for dynamic content
  await new Promise(res => setTimeout(res, 3000));
  
  // Get the HTML
  const html = await page.content();
  
  // Save to file
  fs.writeFileSync('/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/debug-page.html', html);
  console.log('✅ HTML saved to debug-page.html');
  
  // Also extract and log specific elements
  const extracted = await page.evaluate(() => {
    return {
      priceHTML: document.querySelector('#product-price')?.outerHTML || 'NOT FOUND',
      specsHTML: document.querySelector('#product-specs-list')?.outerHTML || 
                 document.querySelector('.product-description-specifications')?.outerHTML || 'NOT FOUND',
      overviewHTML: document.querySelector('#product-overview')?.outerHTML?.substring(0, 500) || 'NOT FOUND',
      title: document.querySelector('h1')?.innerText || 'NOT FOUND'
    };
  });
  
  console.log('\n=== EXTRACTED ELEMENTS ===');
  console.log('Title:', extracted.title);
  console.log('\nPrice Section HTML (first 300 chars):', extracted.priceHTML.substring(0, 300));
  console.log('\nSpecs Section HTML (first 300 chars):', extracted.specsHTML.substring(0, 300));
  console.log('\nOverview Section HTML (first 300 chars):', extracted.overviewHTML.substring(0, 300));
  
  await browser.close();
}

debugPage().catch(console.error);
