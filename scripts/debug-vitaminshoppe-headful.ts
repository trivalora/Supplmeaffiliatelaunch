import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

async function debug() {
    const outDir = path.resolve(__dirname, '../build/debug');
    try { fs.mkdirSync(outDir, { recursive: true }); } catch (e) { }

    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');
    const searchTerm = 'ashwagandha';
    const url = `https://www.vitaminshoppe.com/search?query=${encodeURIComponent(searchTerm)}`;

    console.log('Navigating to', url);
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log('Response status:', res?.status());

    // Wait for some time to allow client-side rendering
    await page.waitForTimeout(8000);

    const html = await page.content();
    const ts = Date.now();
    const htmlPath = path.join(outDir, `vitaminshoppe-search-${ts}.html`);
    const screenshotPath = path.join(outDir, `vitaminshoppe-search-${ts}.png`);

    fs.writeFileSync(htmlPath, html, 'utf8');
    await page.screenshot({ path: screenshotPath, fullPage: true });

    console.log('Saved debug HTML to', htmlPath);
    console.log('Saved screenshot to', screenshotPath);

    await browser.close();
}

debug().catch(err => { console.error(err); process.exit(1); });
