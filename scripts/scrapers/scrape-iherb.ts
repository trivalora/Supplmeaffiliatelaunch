// iHerb-specific scraper with authentication support
// Implements puppeteer-extra with stealth plugin and optional login

import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';
import * as fs from 'fs';

puppeteerExtra.use(StealthPlugin());

async function launchBrowser() {
  const launchOpts: any = { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  if (process.env.SCRAPER_PROXY) launchOpts.args.push(`--proxy-server=${process.env.SCRAPER_PROXY}`);
  if (process.env.PUPPETEER_EXECUTABLE_PATH) launchOpts.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  return await (puppeteerExtra as any).launch({ ...launchOpts, puppeteer });
}

function randomUserAgent() {
  const ua = new UserAgents();
  return ua.toString();
}

function stripBrandFromTitle(title: string | undefined, brand: string | undefined) {
  if (!title) return title;
  if (!brand) return title.trim();
  try {
    const re = new RegExp('\\b' + brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    let out = title.replace(re, '').replace(/[-–—:\s]+$/, '').replace(/^[-–—:\s]+/, '').trim();
    out = out.replace(/\s{2,}/g, ' ').trim();
    return out || title.trim();
  } catch (e) {
    return title.trim();
  }
}

export interface IherbScraperOptions {
  email?: string;
  password?: string;
  cookiesPath?: string;
  maxProducts?: number;
}

export async function scrapeIherb(productName: string, brand: string, options: IherbScraperOptions = {}) {
  const { email, password, cookiesPath, maxProducts = 20 } = options;
  const query = encodeURIComponent(`${brand} ${productName}`.trim());
  const url = `https://www.iherb.com/search?kw=${query}&ccode=US`;

  const browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setUserAgent(randomUserAgent());
  await page.setViewport({ width: 1400, height: 900 });
  
  // LOAD COOKIES if provided (recommended method)
  if (cookiesPath && fs.existsSync(cookiesPath)) {
    try {
      console.log('[iHerb] Loading cookies from file...');
      const cookiesString = fs.readFileSync(cookiesPath, 'utf8');
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
      console.log(`[iHerb] ✅ Loaded ${cookies.length} cookies`);
    } catch (err) {
      console.warn('[iHerb] ⚠️ Failed to load cookies:', err);
    }
  }
  
  // AUTHENTICATE with email/password (less reliable, cookies recommended)
  else if (email && password) {
    console.log('[iHerb] Logging in...');
    try {
      await page.goto('https://www.iherb.com/myaccount/signin', { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(res => setTimeout(res, 3000));
      
      // Step 1: Enter email
      console.log('[iHerb] Entering email...');
      await page.waitForSelector('#username-input', { timeout: 10000 });
      await page.type('#username-input', email);
      
      // Click continue
      await page.click('#auth-continue-button');
      await new Promise(res => setTimeout(res, 2000));
      
      // Step 2: Enter password
      console.log('[iHerb] Entering password...');
      await page.waitForSelector('#password-input', { timeout: 10000 });
      await page.type('#password-input', password);
      
      // Click sign in
      await Promise.all([
        page.click('#auth-sign-in-button'),
        page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {})
      ]);
      
      await new Promise(res => setTimeout(res, 3000));
      console.log('[iHerb] ✅ Logged in successfully');
    } catch (err) {
      console.warn('[iHerb] ⚠️ Login failed, continuing without auth:', err);
    }
  }
  
  console.log(`[iHerb] Loading search page: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  
  // Wait for dynamic content to load
  await new Promise(res => setTimeout(res, 3000));
  
  // Scroll to trigger lazy loading
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await new Promise(res => setTimeout(res, 2000));

  // Collect product links
  const productLinks: string[] = await page.evaluate(() => {
    const links: string[] = [];
    const allLinks = Array.from(document.querySelectorAll('a[href*="/pr/"]'));
    
    allLinks.forEach(el => {
      const href = (el as HTMLAnchorElement).getAttribute('href');
      if (href && href.includes('/pr/')) {
        try {
          const full = new URL(href, window.location.href).toString();
          if (!links.includes(full)) {
            links.push(full);
          }
        } catch { /* ignore */ }
      }
    });
    
    return links;
  });

  const limitedLinks = productLinks.slice(0, maxProducts);
  console.log(`[iHerb] Found ${productLinks.length} products, scraping first ${limitedLinks.length}`);

  const results: any[] = [];
  
  for (const productUrl of limitedLinks) {
    try {
      const productPage = await browser.newPage();
      await productPage.setUserAgent(randomUserAgent());
      await productPage.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Wait for dynamic content
      try {
        await productPage.waitForSelector('#product-price', { timeout: 5000 });
      } catch (e) { /* continue */ }
      
      try {
        await productPage.waitForSelector('.product-specifications, .product-description-specifications, #product-specs', { timeout: 3000 });
      } catch (e) { /* continue */ }

      await new Promise(res => setTimeout(res, 2000));

      const productData = await productPage.evaluate((brandParam: string | null) => {
        // Extract title
        let title = (document.querySelector('h1') as HTMLElement)?.innerText?.trim?.() || 
                    (document.querySelector('.product-title') as HTMLElement)?.innerText?.trim?.() || null;
        
        // Remove brand from title
        if (title && brandParam) {
          try {
            const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp('\\b' + esc(brandParam) + '\\b', 'i');
            title = title.replace(re, '').replace(/[-–—:\s]+$/, '').replace(/^[-–—:\s]+/, '').replace(/\s{2,}/g, ' ').trim();
          } catch (e) { /* ignore */ }
        }

        // Extract price - try exact selector first, then fallbacks
        let priceText: string | null = null;
        
        const discountedPrice = document.querySelector('#product-price > div > div > div.discount-price-content > b');
        if (discountedPrice) {
          priceText = (discountedPrice as HTMLElement).innerText?.trim?.();
        }
        
        if (!priceText) {
          const altSelectors = [
            '#product-price b',
            '#product-price .price',
            '#product-price .discount-price',
            '.product-price',
            '[class*="price"] b'
          ];
          for (const sel of altSelectors) {
            const el = document.querySelector(sel);
            if (el) {
              const txt = (el as HTMLElement).innerText?.trim?.();
              if (txt && /[\d,.]/.test(txt)) {
                priceText = txt;
                break;
              }
            }
          }
        }

        // Extract image
        const img = (document.querySelector('#iherb-product-image') as HTMLImageElement)?.src ||
                    (document.querySelector('.product-image img') as HTMLImageElement)?.src || null;

        // Extract UPC and Product Code from specs
        let id: string | null = null;
        let upc: string | null = null;
        
        const specsSection = document.querySelector('#product-specs-list') || 
                            document.querySelector('.product-description-specifications') ||
                            document.querySelector('#product-specs');
        
        if (specsSection) {
          const specsText = specsSection.textContent || '';
          const upcMatch = specsText.match(/UPC[:\s]+(\d{12,14})/i);
          if (upcMatch) upc = upcMatch[1];
          
          const productCodeMatch = specsText.match(/Product\s+Code[:\s]+(\d+)/i) || 
                                   specsText.match(/Item\s+Code[:\s]+(\d+)/i);
          if (productCodeMatch) id = productCodeMatch[1];
        }
        
        // Fallbacks for ID
        if (!id) {
          const urlMatch = location.pathname.match(/\/pr\/[^/]+\/(\d+)/);
          if (urlMatch) id = urlMatch[1];
        }
        if (!id) {
          id = (document.querySelector('[data-product-id]') as HTMLElement)?.getAttribute('data-product-id') || null;
        }

        // Extract dietary flags from #product-overview
        const dietary_flags: string[] = [];
        const overviewSection = document.querySelector('#product-overview');
        
        if (overviewSection) {
          const overviewText = overviewSection.textContent?.toLowerCase() || '';
          
          const dietaryKeywords = ['vegan', 'non-gmo', 'non gmo', 'gluten free', 'gluten-free', 'dairy free', 'dairy-free', 'halal', 'kosher', 'organic', 'vegetarian', 'soy free', 'soy-free'];
          dietaryKeywords.forEach(keyword => {
            if (overviewText.includes(keyword.toLowerCase())) {
              const normalized = keyword.replace(/\s+/g, ' ').replace(/-/g, ' ');
              if (!dietary_flags.some(f => f.toLowerCase() === normalized)) {
                dietary_flags.push(normalized.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
              }
            }
          });
          
          // Parse allergen statements
          const allergenMapping: {[key: string]: string} = {
            'gluten': 'Gluten Free',
            'wheat': 'Gluten Free',
            'milk': 'Dairy Free',
            'dairy': 'Dairy Free',
            'soy': 'Soy Free',
            'eggs': 'Egg Free',
            'fish': 'Fish Free',
            'shellfish': 'Shellfish Free',
            'tree nuts': 'Tree Nut Free',
            'peanuts': 'Peanut Free',
            'sesame': 'Sesame Free'
          };
          
          const patterns = [
            /not\s+manufactured\s+with[:\s]+([^.]+)/i,
            /free\s+from[:\s]+([^.]+)/i,
            /does\s+not\s+contain[:\s]+([^.]+)/i
          ];
          
          for (const pattern of patterns) {
            const match = overviewText.match(pattern);
            if (match) {
              const allergenList = match[1].toLowerCase();
              for (const [allergen, flag] of Object.entries(allergenMapping)) {
                if (allergenList.includes(allergen) && !dietary_flags.includes(flag)) {
                  dietary_flags.push(flag);
                }
              }
            }
          }
        }

        // Check for iTested badge
        let iTested = false;
        const specsDescSection = document.querySelector('.product-description-specifications');
        if (specsDescSection) {
          const specsDescText = specsDescSection.textContent?.toLowerCase() || '';
          iTested = specsDescText.includes('verified by an independent lab') ||
                    specsDescText.includes('itested') ||
                    specsDescText.includes('i-tested');
        }
        if (!iTested) {
          iTested = (overviewSection?.textContent?.toLowerCase() || '').includes('itested') || 
                    (overviewSection?.textContent?.toLowerCase() || '').includes('i-tested') ||
                    !!document.querySelector('[class*="itested"], [class*="i-tested"]');
        }

        // Extract product variants
        const variants: Array<{size: string, price?: string}> = [];
        const sizeSelectors = document.querySelectorAll('select[id*="size"] option, select[name*="size"] option, select[class*="size"] option');
        sizeSelectors.forEach(opt => {
          const text = (opt as HTMLOptionElement).innerText?.trim();
          if (text && text !== 'Select Size' && text !== 'Choose Size') {
            variants.push({ size: text });
          }
        });

        const sizeButtons = document.querySelectorAll('[class*="size-option"], [class*="variant"], button[data-size]');
        sizeButtons.forEach(btn => {
          const text = (btn as HTMLElement).innerText?.trim();
          if (text) {
            variants.push({ size: text });
          }
        });

        return { 
          title, 
          priceText, 
          image: img, 
          id, 
          upc,
          dietary_flags,
          iTested,
          variants: variants.length > 0 ? variants : null,
          url: location.href 
        };
      }, brand || null);

      if (productData.title) {
        let price: number | null = null;
        if (productData.priceText) {
          const cleaned = String(productData.priceText).replace(/[^0-9.,]/g, '').replace(/,/g, '');
          const v = parseFloat(cleaned);
          price = Number.isFinite(v) && v > 0 ? v : null;
        }

        results.push({
          retailer: 'iHerb',
          productName: productData.title,
          price,
          url: productData.url,
          image: productData.image,
          container: { 
            id: productData.id,
            upc: productData.upc 
          },
          dietary_flags: productData.dietary_flags || [],
          iTested: productData.iTested || false,
          variants: productData.variants || null
        });

        console.log(`[iHerb] ✅ ${productData.title} - $${price} | UPC: ${productData.upc || 'N/A'} | Dietary: ${(productData.dietary_flags || []).join(', ') || 'None'} | iTested: ${productData.iTested}`);
      }

      await productPage.close();
      await new Promise(res => setTimeout(res, 500 + Math.random() * 1000));
    } catch (err) {
      console.warn(`[iHerb] ⚠️ Failed to scrape: ${productUrl}`, err);
    }
  }

  await browser.close();
  return results;
}
