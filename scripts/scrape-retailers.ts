// Puppeteer-based scraper utilities for Amazon and iHerb
// Implements puppeteer-extra with stealth plugin and random user-agent rotation

import axios from 'axios';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import UserAgents from 'user-agents';

puppeteerExtra.use(StealthPlugin());

// Helper: robust ScraperAPI fetch with retries and logging
async function scraperApiFetch(targetUrl: string, maxRetries = 3, timeout = 60000) {
  const apiUrl = 'http://api.scraperapi.com';
  const key = process.env.SCRAPERAPI_KEY;
  if (!key) throw new Error('SCRAPERAPI_KEY not set');
  let attempt = 0;
  let lastErr: any = null;
  while (attempt < maxRetries) {
    attempt++;
    try {
      console.info(`[ScraperAPI] attempt ${attempt} -> ${targetUrl}`);
      const resp = await axios.get(apiUrl, { params: { api_key: key, url: targetUrl, render: true }, timeout });
      console.info(`[ScraperAPI] success ${resp.status} for ${targetUrl} (attempt ${attempt})`);
      return resp.data;
    } catch (err: any) {
      lastErr = err;
      const status = err?.response?.status;
      const bodySnippet = err?.response?.data ? String(err.response.data).slice(0, 800) : '';
      console.warn(`[ScraperAPI] error (attempt ${attempt}) status=${status} message=${err.message}`);
      if (bodySnippet) console.debug(`[ScraperAPI] bodySnippet (first 800 chars):\n${bodySnippet}`);
      // exponential backoff
      const backoff = 500 * Math.pow(2, attempt - 1);
      await new Promise(res => setTimeout(res, backoff));
    }
  }
  throw lastErr || new Error('ScraperAPI unknown error');
}

async function launchBrowser() {
  const launchOpts: any = { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  if (process.env.SCRAPER_PROXY) launchOpts.args.push(`--proxy-server=${process.env.SCRAPER_PROXY}`);
  // Let puppeteer find its bundled Chromium; pass through executable path if set
  if (process.env.PUPPETEER_EXECUTABLE_PATH) launchOpts.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  // Use puppeteerExtra which wraps puppeteer
  return await (puppeteerExtra as any).launch({ ...launchOpts, puppeteer });
}

function randomUserAgent() {
  const ua = new UserAgents();
  return ua.toString();
}

export async function scrapeAmazon(productName: string, brand: string) {
  const query = encodeURIComponent(`${brand} ${productName}`.trim());
  const url = `https://www.amazon.com/s?k=${query}`;

  if (process.env.SCRAPERAPI_KEY) {
    try {
      const html = await scraperApiFetch(url, 3, 60000);
      const $ = cheerio.load(html as string);
      const items: any[] = [];
      $('[data-component-type="s-search-result"]').each((_, el) => {
        const node = $(el);
        const asin = node.attr('data-asin') || undefined;
        const title = node.find('h2 a span').first().text()?.trim();
        const link = node.find('h2 a.a-link-normal').attr('href');
        const priceText = node.find('.a-offscreen').first().text()?.trim();
        const img = node.find('img.s-image').attr('src') || node.find('img.s-image').attr('data-src');
        if (title && link) {
          const urlFull = new URL(link, 'https://www.amazon.com').toString();
          const price = priceText ? parseFloat(priceText.replace(/[^\d.,]/g, '').replace(/,/g, '')) : null;
          items.push({ retailer: 'Amazon', productName: title, price, url: urlFull, image: img, container: { asin } });
        }
      });
      return items;
    } catch (err: any) {
      console.error('[scrapeAmazon] ScraperAPI fetch failed after retries, falling back to puppeteer', err && err.message ? err.message : err);
    }
  }

  // fallback to puppeteer if ScraperAPI not available or failed
  const browser = await launchBrowser();
  const page = await browser.newPage();
  // set human-like viewport
  await page.setViewport({ width: 1200 + Math.floor(Math.random() * 200), height: 800 + Math.floor(Math.random() * 200) });
  await page.setUserAgent(randomUserAgent());
  await page.setExtraHTTPHeaders({ 'accept-language': 'en-US,en;q=0.9' });

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  try { await page.waitForSelector('[data-component-type="s-search-result"]', { timeout: 6000 }); } catch (e) { /* continue */ }
  // Scroll a bit to simulate human behavior and give lazy-loaded elements time to appear
  await page.evaluate(() => window.scrollBy(0, window.innerHeight / 2));
  await new Promise(res => setTimeout(res, 800 + Math.random() * 1200));

  // Collect result links (top 8) and then open product pages to get canonical price info
  const links: string[] = await page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll('[data-component-type="s-search-result"]'));
    const hrefs: string[] = [];
    for (let i = 0; i < nodes.length && hrefs.length < 8; i++) {
      const el = nodes[i] as HTMLElement;
      const a = el.querySelector('h2 a.a-link-normal') as HTMLAnchorElement | null;
      const href = a?.getAttribute('href');
      if (href) hrefs.push(new URL(href, 'https://www.amazon.com').toString());
    }
    return hrefs;
  });

  const results: any[] = [];
  for (const link of links) {
    try {
      // attempt product-specific ScraperAPI fetch using ASIN (if present in link) for more reliable Amazon product HTML
      const asinMatch = link.match(/\/dp\/(\w{10})/) || link.match(/\/gp\/product\/(\w{10})/);
      const asinFromLink = asinMatch ? asinMatch[1] : null;
      if (asinFromLink && process.env.SCRAPERAPI_KEY) {
        try {
          const productUrl = `https://www.amazon.com/dp/${asinFromLink}`;
          const html = await scraperApiFetch(productUrl, 3, 60000);
          const $ = cheerio.load(html as string);
          const title = $('#productTitle').text().trim() || $('h1').text().trim();
          const priceText = $('#priceblock_ourprice').text().trim() || $('#priceblock_dealprice').text().trim() || $('.a-offscreen').first().text().trim();
          const primaryImg = $('#landingImage').attr('src') || $('#imgBlkFront').attr('src') || $('img.s-image').first().attr('src') || null;
          const images: string[] = [];
          $('#altImages img').each((i, el) => { const s = $(el).attr('src') || $(el).attr('data-src'); if (s) images.push(s); });
          const bullets: string[] = [];
          $('#feature-bullets li span').each((i, el) => { const t = $(el).text().trim(); if (t) bullets.push(t); });
          const pageText = $('body').text().toLowerCase();
          const dietaryKeywords = ['vegan', 'gluten-free', 'gluten free', 'non-gmo', 'non gmo', 'sugar-free', 'dairy-free', 'organic', 'kosher', 'vegetarian'];
          const dietary_flags = dietaryKeywords.filter(k => pageText.includes(k));
          let flavor = null;
          const flavorMatch = (title || '').match(/Flavor[:\-]\s*([^,\(\n]+)/i) || pageText.match(/flavor[:\-]\s*([^,\n]+)/i);
          if (flavorMatch) flavor = flavorMatch[1].trim();
          const pkgMatch = (title || '').match(/(\d+\s*(?:count|capsule|capsules|tablet|tablets|gummy|gummies|oz|ounce|gram|g|mg|kg|ml|milliliter|fluid ounce|fl oz))/i) || pageText.match(/(\d+\s*(?:count|capsule|capsules|tablet|tablets|gummy|gummies|oz|ounce|gram|g|mg|kg|ml|milliliter|fluid ounce|fl oz))/i);
          const package_info = pkgMatch ? pkgMatch[0] : null;
          const price = priceText ? parseFloat(priceText.replace(/[^\d.,]/g, '').replace(/,/g, '')) : null;
          results.push({
            retailer: 'Amazon', productName: title || null, price, url: productUrl, image: primaryImg || (images[0] || null), images, container: { asin: asinFromLink }, bullets, dietary_flags, flavor, package_info
          });
          // small delay and continue to next link
          await new Promise(res => setTimeout(res, 300 + Math.random() * 600));
          continue;
        } catch (err) {
          // if ScraperAPI product fetch fails, fall back to opening the page with puppeteer below
        }
      }
      const p = await browser.newPage();
      await p.setUserAgent(randomUserAgent());
      await p.setExtraHTTPHeaders({ 'accept-language': 'en-US,en;q=0.9' });
      await p.setViewport({ width: 1100 + Math.floor(Math.random() * 300), height: 800 + Math.floor(Math.random() * 300) });
      await p.goto(link, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // Wait a little for dynamic price elements
      try { await p.waitForSelector('#priceblock_ourprice, #priceblock_dealprice, .a-offscreen', { timeout: 4000 }); } catch {}
        const item = await p.evaluate(() => {
          const title = document.querySelector('#productTitle')?.textContent?.trim() || document.querySelector('h1')?.textContent?.trim();
          const priceEl = document.querySelector('#priceblock_ourprice') || document.querySelector('#priceblock_dealprice') || document.querySelector('.a-offscreen');
          const priceText = priceEl ? (priceEl as HTMLElement).textContent?.trim() : null;
          const primaryImg = (document.querySelector('#landingImage') as HTMLImageElement)?.src || (document.querySelector('img#imgBlkFront') as HTMLImageElement)?.src || null;
          const images: string[] = [];
          Array.from(document.querySelectorAll('#altImages img')).forEach((img) => {
            const src = (img as HTMLImageElement).src || (img as HTMLImageElement).getAttribute('data-src');
            if (src) images.push(src as string);
          });
          if (primaryImg && images.indexOf(primaryImg) === -1) images.unshift(primaryImg as string);
          const asinFromAttr = document.querySelector('[data-asin]')?.getAttribute('data-asin');
          const asinFromUrlMatch = location.pathname.match(/\/dp\/(\w{10})/) || location.pathname.match(/\/gp\/product\/(\w{10})/);
          const asin = asinFromAttr || (asinFromUrlMatch ? asinFromUrlMatch[1] : null);
          const bullets = Array.from(document.querySelectorAll('#feature-bullets li span')).map(b => (b as HTMLElement).innerText?.trim()).filter(Boolean);
          const detailsSections: string[] = [];
          const details1 = document.querySelector('#productDetails_techSpec_section_1');
          if (details1) detailsSections.push(details1.textContent || '');
          const details2 = document.querySelector('#productDetails_detailBullets_sections1');
          if (details2) detailsSections.push(details2.textContent || '');
          const bulletsSection = document.querySelector('#detailBullets_feature_div');
          if (bulletsSection) detailsSections.push(bulletsSection.textContent || '');
          const productSpecText = detailsSections.join('\n').trim();
          const variations: string[] = [];
          Array.from(document.querySelectorAll('select[id^="variation_"] option, select[id*="size"] option, select[name*="size"] option')).forEach(opt => {
            const txt = (opt as HTMLOptionElement).innerText?.trim(); if (txt) variations.push(txt);
          });
          const pageText = (document.body && document.body.innerText) ? document.body.innerText.toLowerCase() : '';
          const dietaryKeywords = ['vegan', 'gluten-free', 'gluten free', 'non-gmo', 'non gmo', 'sugar-free', 'dairy-free', 'organic', 'kosher', 'vegetarian'];
          const dietary_flags = dietaryKeywords.filter(k => pageText.includes(k));
          let flavor = null;
          const flavorMatch = title?.match(/Flavor[:\-]\s*([^,\(\n]+)/i) || pageText.match(/flavor[:\-]\s*([^,\n]+)/i);
          if (flavorMatch) flavor = flavorMatch[1].trim();
          let package_info = null;
          const pkgMatch = (title || '').match(/(\d+\s*(?:count|capsule|capsules|tablet|tablets|gummy|gummies|oz|ounce|gram|g|mg|kg|ml|milliliter|fluid ounce|fl oz))/i) || pageText.match(/(\d+\s*(?:count|capsule|capsules|tablet|tablets|gummy|gummies|oz|ounce|gram|g|mg|kg|ml|milliliter|fluid ounce|fl oz))/i);
          if (pkgMatch) package_info = pkgMatch[0];
          return { title, priceText, primaryImg, images, asin, url: location.href, bullets, productSpecText, variations, dietary_flags, flavor, package_info };
        });
        if (item && item.title) {
          const price = item.priceText ? parseFloat(item.priceText.replace(/[^\d.,]/g, '').replace(/,/g, '')) : null;
          results.push({
            retailer: 'Amazon',
            productName: item.title,
            price,
            url: link,
            image: item.primaryImg || (item.images && item.images[0]) || null,
            images: item.images || [],
            container: { asin: item.asin },
            bullets: item.bullets || [],
            productSpecText: item.productSpecText || null,
            variations: item.variations || [],
            dietary_flags: item.dietary_flags || [],
            flavor: item.flavor || null,
            package_info: item.package_info || null
          });
      }
      await p.close();
      // small delay between page visits
      await new Promise(res => setTimeout(res, 500 + Math.random() * 1000));
    } catch (err) {
      // ignore single product failures
    }
  }

  await browser.close();
  return results;
}

function stripBrandFromTitle(title: string | undefined, brand: string | undefined) {
  if (!title) return title;
  if (!brand) return title.trim();
  try {
    const re = new RegExp('\\b' + brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    let out = title.replace(re, '').replace(/[-–—:\s]+$/, '').replace(/^[-–—:\s]+/, '').trim();
    // Collapse multiple spaces
    out = out.replace(/\s{2,}/g, ' ').trim();
    return out || title.trim();
  } catch (e) {
    return title.trim();
  }
}

export async function scrapeIherb(productName: string, brand: string) {
  const query = encodeURIComponent(`${brand} ${productName}`.trim());
  // Force US site by using www.iherb.com with explicit country parameter
  const url = `https://www.iherb.com/search?kw=${query}&ccode=US`;

  if (process.env.SCRAPERAPI_KEY) {
    try {
      const html = await scraperApiFetch(url, 3, 60000);
      const $ = cheerio.load(html as string);
      const items: any[] = [];
      $('.product, .search-product, .product-inner').each((_, el) => {
        const node = $(el);
        const rawTitle = node.find('.product-title, .name').first().text();
        // remove brand text from the title if brand provided
        const title = stripBrandFromTitle(rawTitle ? rawTitle.trim() : undefined, brand);
        // price text in search results may be in various selectors; keep existing logic but normalize later
        const priceText = node.find('.price, .product-price, .price-sale').first().text()?.trim();
        const link = node.find('a').first().attr('href');
        const img = node.find('img').first().attr('src') || node.find('img').first().attr('data-src');
        const id = node.attr('data-product-id') || node.attr('data-id') || undefined;
        if (title && link) {
          const full = (() => {
            try { return new URL(link, 'https://www.iherb.com').toString(); } catch { return link; }
          })();
          // Normalize price: strip currency symbols and thousands separators
          let price: number | null = null
          if (priceText) {
            const cleaned = String(priceText).replace(/[^0-9.,]/g, '').replace(/,/g, '')
            const v = parseFloat(cleaned)
            price = isFinite(v) ? v : null
          }
          items.push({ retailer: 'iHerb', productName: title, price, url: full, image: img, container: { id } });
        }
      });
      return items;
    } catch (err: any) {
      console.error('[scrapeIherb] ScraperAPI fetch failed, falling back to puppeteer', err && err.message ? err.message : err);
    }
  }

  // fallback to puppeteer
  const browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setUserAgent(randomUserAgent());
  await page.setViewport({ width: 1400, height: 900 });
  
  console.log(`[iHerb] Loading search page: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
  
  // Wait for dynamic content to load - iHerb uses JS to render products
  await new Promise(res => setTimeout(res, 3000));
  
  // Scroll to trigger lazy loading
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await new Promise(res => setTimeout(res, 2000));

  // Collect product links - iHerb uses /pr/ URLs for products
  const productLinks: string[] = await page.evaluate(() => {
    const links: string[] = [];
    // Find all links that point to product pages (contain /pr/)
const allLinks = Array.from(document.querySelectorAll('a[href*="/pr/"]'));
    
    allLinks.forEach(el => {
      const href = (el as HTMLAnchorElement).getAttribute('href');
      if (href && href.includes('/pr/')) {
        try {
          const full = new URL(href, window.location.href).toString();
          // Deduplicate
          if (!links.includes(full)) {
            links.push(full);
          }
        } catch { /* ignore */ }
      }
    });
    
    return links.slice(0, 20); // Limit to first 20 products
  });

  console.log(`[iHerb] Found ${productLinks.length} product links`);

  const results: any[] = [];
  
  // Visit each product page to get accurate price data
  for (const productUrl of productLinks) {
    try {
      const productPage = await browser.newPage();
      await productPage.setUserAgent(randomUserAgent());
      await productPage.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Wait for price element and dynamic content to load
      try {
        await productPage.waitForSelector('#product-price', { timeout: 5000 });
      } catch (e) { /* continue */ }
      
      // Wait for specifications section to load
      try {
        await productPage.waitForSelector('.product-specifications, .product-description-specifications, #product-specs', { timeout: 3000 });
      } catch (e) { /* continue */ }

      // Additional wait for JS-rendered content
      await new Promise(res => setTimeout(res, 2000));

      const productData = await productPage.evaluate((brandParam: string | null) => {
        // Extract title
        let title = (document.querySelector('h1') as HTMLElement)?.innerText?.trim?.() || 
                    (document.querySelector('.product-title') as HTMLElement)?.innerText?.trim?.() || null;
        
        // Remove brand from title if provided
        if (title && brandParam) {
          try {
            const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp('\\b' + esc(brandParam) + '\\b', 'i');
            title = title.replace(re, '').replace(/[-–—:\s]+$/, '').replace(/^[-–—:\s]+/, '').replace(/\s{2,}/g, ' ').trim();
          } catch (e) { /* ignore */ }
        }

        // Extract price using exact user-provided selector
        let priceText: string | null = null;
        
        // Try discount price selector first (user-provided exact path)
        const discountedPrice = document.querySelector('#product-price > div > div > div.discount-price-content > b');
        if (discountedPrice) {
          priceText = (discountedPrice as HTMLElement).innerText?.trim?.();
        }
        
        // Try broader price selectors as fallbacks
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

        // Extract product ID and UPC from specs using user-provided selector #product-specs-list
        let id: string | null = null;
        let upc: string | null = null;
        
        const specsSection = document.querySelector('#product-specs-list') || 
                            document.querySelector('.product-description-specifications') ||
                            document.querySelector('#product-specs');
        
        if (specsSection) {
          const specsText = specsSection.textContent || '';
          
          // Extract UPC using regex - pattern: "UPC:" followed by 12-14 digits
          const upcMatch = specsText.match(/UPC[:\s]+(\d{12,14})/i);
          if (upcMatch) upc = upcMatch[1];
          
          // Extract Product Code using regex - pattern: "Product Code:" or "Item Code:" followed by digits
          const productCodeMatch = specsText.match(/Product\s+Code[:\s]+(\d+)/i) || 
                                   specsText.match(/Item\s+Code[:\s]+(\d+)/i);
          if (productCodeMatch) id = productCodeMatch[1];
        }
        
        // Fallback: extract from URL or data attribute if not found in specs
        if (!id) {
          const urlMatch = location.pathname.match(/\/pr\/[^/]+\/(\d+)/);
          if (urlMatch) id = urlMatch[1];
        }
        if (!id) {
          id = (document.querySelector('[data-product-id]') as HTMLElement)?.getAttribute('data-product-id') || null;
        }

        // Extract dietary/quality badges from #product-overview using user-provided selector
        const dietary_flags: string[] = [];
        const overviewSection = document.querySelector('#product-overview');
        
        if (overviewSection) {
          const overviewText = overviewSection.textContent?.toLowerCase() || '';
          
          // Check for explicit dietary keywords
          const dietaryKeywords = ['vegan', 'non-gmo', 'non gmo', 'gluten free', 'gluten-free', 'dairy free', 'dairy-free', 'halal', 'kosher', 'organic', 'vegetarian', 'soy free', 'soy-free'];
          dietaryKeywords.forEach(keyword => {
            if (overviewText.includes(keyword.toLowerCase())) {
              const normalized = keyword.replace(/\s+/g, ' ').replace(/-/g, ' ');
              if (!dietary_flags.some(f => f.toLowerCase() === normalized)) {
                dietary_flags.push(normalized.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
              }
            }
          });
          
          // Parse allergen statements like "Not manufactured with milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soy, sesame, or gluten."
          // Extract standardized "-free" flags
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
          
          // Look for "not manufactured with" or "free from" patterns
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

        // Check for iTested badge - look for "Verified by an independent lab" in product-description-specifications
        let iTested = false;
        const specsDescSection = document.querySelector('.product-description-specifications');
        if (specsDescSection) {
          const specsDescText = specsDescSection.textContent?.toLowerCase() || '';
          iTested = specsDescText.includes('verified by an independent lab') ||
                    specsDescText.includes('itested') ||
                    specsDescText.includes('i-tested');
        }
        // Fallback: check overview section and DOM for iTested classes
        if (!iTested) {
          iTested = (overviewSection?.textContent?.toLowerCase() || '').includes('itested') || 
                    (overviewSection?.textContent?.toLowerCase() || '').includes('i-tested') ||
                    !!document.querySelector('[class*="itested"], [class*="i-tested"]');
        }

        // Extract product variants/sizes (dropdown options)
        const variants: Array<{size: string, price?: string}> = [];
        const sizeSelectors = document.querySelectorAll('select[id*="size"] option, select[name*="size"] option, select[class*="size"] option');
        sizeSelectors.forEach(opt => {
          const text = (opt as HTMLOptionElement).innerText?.trim();
          if (text && text !== 'Select Size' && text !== 'Choose Size') {
            variants.push({ size: text });
          }
        });

        // Also check for size buttons/links
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
        // Parse price
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

        console.log(`[iHerb] Scraped: ${productData.title} - $${price} | UPC: ${productData.upc || 'N/A'} | Dietary: ${(productData.dietary_flags || []).join(', ') || 'None'} | iTested: ${productData.iTested} | Variants: ${productData.variants?.length || 0}`);
      }

      await productPage.close();
      
      // Small delay between requests to avoid rate limiting
      await new Promise(res => setTimeout(res, 500 + Math.random() * 1000));
    } catch (err) {
      console.warn(`[iHerb] Failed to scrape product: ${productUrl}`, err);
      // Continue to next product
    }
  }

  await browser.close();
  return results;
}
