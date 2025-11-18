import axios from 'axios'
import * as cheerio from 'cheerio'

async function fetchProduct(url: string) {
  try {
    console.log('Fetching', url)
    const resp = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36', 'Accept-Language': 'en-US,en;q=0.9' }, timeout: 20000 })
    const $ = cheerio.load(resp.data)

    // Try JSON-LD first (also capture currency if present)
    let price: number | null = null
    let detectedCurrency: string | null = null
    const ld = $('script[type="application/ld+json"]').map((i, el) => $(el).html()).get().join('\n')
    try {
      const docs = JSON.parse(ld)
      const arr = Array.isArray(docs) ? docs : [docs]
      for (const d of arr) {
        if (d && d['@type'] && /product/i.test(d['@type'])) {
          if (d.offers) {
            const offer = Array.isArray(d.offers) ? d.offers[0] : d.offers
            if (offer && offer.price) { price = Number(offer.price); if (offer.priceCurrency) detectedCurrency = String(offer.priceCurrency).toUpperCase(); break }
          }
        }
      }
    } catch (e) {
      // ignore
    }

    // Prefer explicit iHerb discounted price selector, otherwise fall back to list-price selector, otherwise common selectors
    const discountedSel = '#product-price > div > div > div.discount-price-content > b'
    const listSel = '#product-price > section.see-price-in-cart-wrapper.see-price-in-cart-config.hide > div.list-price'
    const tryParse = (raw: any) => {
      if (!raw) return null
      const s = String(raw).trim()
      // some iHerb uses data attributes with numeric values
      const numericAttr = String(raw).match(/\d+[.,]?\d*/)
      const cleaned = s.replace(/[^0-9.,]/g, '').replace(/,/g, '')
      const v = parseFloat(cleaned)
      if (!isNaN(v) && v > 0) return v
      if (numericAttr) {
        const v2 = parseFloat(numericAttr[0].replace(/,/g, ''))
        if (!isNaN(v2) && v2 > 0) return v2
      }
      return null
    }

    if (price == null) {
      // discounted price (preferred)
      const discNode = $(discountedSel).first()
      const discVal = discNode ? (discNode.attr('data-numeric-discounted-price') || discNode.attr('data-price') || discNode.text()) : null
      price = tryParse(discVal)
      // fallback to list price
      if (price == null) {
        const listNode = $(listSel).first()
        const listVal = listNode ? (listNode.attr('data-numeric-price') || listNode.attr('data-price') || listNode.text()) : null
        price = tryParse(listVal)
      }
      // fallback to a set of common selectors
      if (price == null) {
        const selectors = ['.price', '.product-price', '.price-sale', '.productPrice', '.product_price', '.price__value', '.price-final_price', '.productPrice__price', '.productPrice__current', '.product-price__price']
        for (const sel of selectors) {
          const node = $(sel).first()
          if (!node || node.length === 0) continue
          const t = node.text() || node.attr('data-price') || node.attr('data-price-amount') || node.attr('data-numeric-price')
          const v = tryParse(t)
          if (v) { price = v; break }
        }
      }
    }

    // As a last resort, search the page for a small decimal like 1.23 or 17.08
    if (price == null) {
      const body = $.text()
      const jsonPriceMatch = resp.data.match(/"price"\s*:\s*"?(\d+[.,]\d{1,2})"?/i) || resp.data.match(/"price":\s*(\d+[.,]\d{1,2})/i)
      if (jsonPriceMatch) {
        const v = parseFloat(String(jsonPriceMatch[1]).replace(/,/g, '.'))
        if (!isNaN(v) && v > 0) price = v
      }
      if (price == null) {
        const metaPrice = $('meta[itemprop="price"]').attr('content') || $('meta[property="og:price:amount"]').attr('content') || $('meta[name="twitter:data1"]').attr('content')
        if (metaPrice) {
          const v = parseFloat(String(metaPrice).replace(/,/g, '.').replace(/[^0-9.]/g, ''))
          if (!isNaN(v) && v > 0) price = v
        }
      }
      if (price == null) {
        const m = body.match(/\b\d{1,3}[.,]\d{2}\b/)
        if (m) {
          const v = parseFloat(m[0].replace(/,/g, '.'))
          if (!isNaN(v) && v > 0) price = v
        }
      }
    }

  // Detect currency hints in page HTML (won symbol or currency codes) and include JSON-LD currency where possible
  let currency: string | null = detectedCurrency
  if (!currency) {
    if (/\u20A9|&#x20A9;|₩/.test(resp.data)) currency = 'KRW'
    if (/\bUSD\b|\$/.test(resp.data) && !currency) currency = 'USD'
    if (/\bEUR\b|€/.test(resp.data) && !currency) currency = 'EUR'
  }
  console.log('Resolved price:', price, 'currency:', currency)
    if (process.env.DEBUG_PRICE_MATCHES) {
      const allMatches = resp.data.match(/(\d{1,6}[.,]\d{1,2}|\d{5,})/g) || []
      console.log('Debug numeric matches (first 40):', allMatches.slice(0, 40))
      const idx = resp.data.indexOf('25355')
      if (idx >= 0) {
        const snippet = resp.data.slice(Math.max(0, idx - 200), Math.min(resp.data.length, idx + 200))
        console.log('Snippet around 25355:\n', snippet)
      }
    }
    // If we detected a non-USD currency and the URL host is not the US host, try fetching the canonical www.iherb.com product URL once
    if (currency && currency !== 'USD') {
      try {
        const u = new URL(url)
        if (!u.hostname.startsWith('www.iherb.com')) {
          const usUrl = `https://www.iherb.com${u.pathname}${u.search}`
          console.log('Attempting US-domain re-fetch for USD price:', usUrl)
          try {
            const resp2 = await axios.get(usUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36', 'Accept-Language': 'en-US,en;q=0.9' }, timeout: 20000 })
            const $2 = cheerio.load(resp2.data)
            // attempt same selector parse on US page
            const discNode2 = $2(discountedSel).first()
            const discVal2 = discNode2 ? (discNode2.attr('data-numeric-discounted-price') || discNode2.attr('data-price') || discNode2.text()) : null
            const parsed2 = tryParse(discVal2)
            let price2 = parsed2
            if (!price2) {
              const listNode2 = $2(listSel).first()
              const listVal2 = listNode2 ? (listNode2.attr('data-numeric-price') || listNode2.attr('data-price') || listNode2.text()) : null
              price2 = tryParse(listVal2)
            }
            if (!price2) {
              // meta price fallback
              const metaPrice2 = $2('meta[itemprop="price"]').attr('content') || $2('meta[property="og:price:amount"]').attr('content')
              if (metaPrice2) {
                const v2 = parseFloat(String(metaPrice2).replace(/,/g, '.').replace(/[^0-9.]/g, ''))
                if (!isNaN(v2) && v2 > 0) price2 = v2
              }
            }
            if (price2) {
              console.log('US-page price found, overriding detected currency result with USD page price', price2)
              return { url: usUrl, price: price2, currency: 'USD' }
            }
          } catch (e) {
            const msg = e && (e as any).message ? (e as any).message : e
            console.warn('US-domain fetch failed or did not yield USD price', msg)
          }
        }
      } catch (e) {
        // ignore URL parsing errors
      }
    }

    return { url, price, currency }
  } catch (err: any) {
    console.error('Fetch failed', err && err.message ? err.message : err)
    return { url, price: null }
  }
}

const main = async () => {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.error('Usage: ts-node fetch-iherb-product.ts <product-url>')
    process.exit(2)
  }
  const res = await fetchProduct(args[0])
  console.log(JSON.stringify(res, null, 2))
}

if (process.argv[1] && process.argv[1].endsWith('fetch-iherb-product.ts')) {
  main().catch(e => { console.error(e); process.exit(1) })
}

export { fetchProduct }
