// Debug script to inspect iHerb login page structure
import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';
import * as fs from 'fs';

puppeteerExtra.use(StealthPlugin());

async function debugLoginPage() {
  const browser = await (puppeteerExtra as any).launch({ 
    headless: false,  // Run in visible mode to see what's happening
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    puppeteer 
  });
  
  const page = await browser.newPage();
  const ua = new UserAgents();
  await page.setUserAgent(ua.toString());
  await page.setViewport({ width: 1400, height: 900 });
  
  console.log('Loading iHerb login page...');
  await page.goto('https://www.iherb.com/myaccount/signin', { 
    waitUntil: 'networkidle2', 
    timeout: 30000 
  });
  
  await new Promise(res => setTimeout(res, 3000));
  
  // Save HTML
  const html = await page.content();
  fs.writeFileSync('/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.2/debug-login-page.html', html);
  console.log('✅ HTML saved to debug-login-page.html');
  
  // Try to find form elements
  const formInfo = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('input'));
    const buttons = Array.from(document.querySelectorAll('button, input[type="submit"]'));
    
    return {
      inputs: inputs.map(inp => ({
        type: inp.type,
        name: inp.name,
        id: inp.id,
        placeholder: inp.placeholder,
        className: inp.className
      })),
      buttons: buttons.map(btn => ({
        type: btn.type || 'button',
        text: btn.innerText || btn.value,
        className: btn.className
      })),
      forms: Array.from(document.querySelectorAll('form')).map(form => ({
        action: form.action,
        method: form.method,
        id: form.id,
        className: form.className
      }))
    };
  });
  
  console.log('\n=== LOGIN PAGE STRUCTURE ===');
  console.log('\nFORMS FOUND:', JSON.stringify(formInfo.forms, null, 2));
  console.log('\nINPUT FIELDS:', JSON.stringify(formInfo.inputs, null, 2));
  console.log('\nBUTTONS:', JSON.stringify(formInfo.buttons, null, 2));
  
  console.log('\n⏳ Browser will stay open for 30 seconds for manual inspection...');
  await new Promise(res => setTimeout(res, 30000));
  
  await browser.close();
}

debugLoginPage().catch(console.error);
