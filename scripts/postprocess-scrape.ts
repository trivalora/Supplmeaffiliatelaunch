import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

type RawProduct = any

function parsePrice(raw: string | number | null | undefined) {
  if (raw == null) return { price: null, currency: null, raw: null, ambiguous: false }
  // If already a number, apply heuristics
  if (typeof raw === 'number') {
    if (!isFinite(raw)) return { price: null, currency: null, raw, ambiguous: true }
    // Reject obviously invalid huge values
    if (raw > 1e12) return { price: null, currency: null, raw, ambiguous: true }
    // Common pattern: large integer likely cents (e.g. 11746 -> $117.46)
    if (raw >= 1000 && raw < 1e9) return { price: raw / 100, currency: 'USD', raw, ambiguous: false }
    // Otherwise treat as dollars
    return { price: raw, currency: 'USD', raw, ambiguous: false }
  }

  const s = String(raw).trim()
  const cleaned = s.replace(/\u00A0/g, ' ').trim()

  // Capture currency symbols or codes
  const currencyMatch = cleaned.match(/(USD|US\$|\$|GBP|£|EUR|€|CAD|C\$|AUD|A\$|KRW|¥)/i)
  let currency = currencyMatch ? currencyMatch[0] : null

  // Extract the first contiguous number-like token (allowing thousands separators and decimals)
  // Examples matched: 1,234.56  1234.56  123456  1.234,56
  const numTokenMatch = cleaned.match(/[-+]?\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?|[-+]?\d+/)
  if (!numTokenMatch) return { price: null, currency, raw: cleaned, ambiguous: true }
  let numToken = numTokenMatch[0]

  // Heuristics to normalize token into JS float
  // If token contains both '.' and ',', decide which is decimal by position
  if (numToken.includes('.') && numToken.includes(',')) {
    // If last separator is comma, treat comma as decimal (1.234,56)
    if (numToken.lastIndexOf(',') > numToken.lastIndexOf('.')) {
      numToken = numToken.replace(/\./g, '').replace(',', '.')
    } else {
      // 1,234.56 typical en format
      numToken = numToken.replace(/,/g, '')
    }
  } else if (numToken.includes(',')) {
    // ambiguous: could be decimal or thousands. If there are 3-digit groups, treat as thousands
    if (/^\d{1,3}(,\d{3})+(,\d{1,2})?$/.test(numToken)) {
      numToken = numToken.replace(/,/g, '')
    } else if (/^\d+,\d{1,2}$/.test(numToken)) {
      // e.g. 12,34 -> treat as decimal
      numToken = numToken.replace(',', '.')
    } else {
      // fallback: remove commas
      numToken = numToken.replace(/,/g, '')
    }
  }

  // Remove any remaining non-digit/decimal chars
  numToken = numToken.replace(/[^\n\d.\-+]/g, '')
  let n = Number(numToken)
  if (!isFinite(n) || isNaN(n) || n <= 0) return { price: null, currency, raw: cleaned, ambiguous: true }

  // Sanity cap: reject absurdly large values
  if (n > 1e9) return { price: null, currency, raw: cleaned, ambiguous: true }

  // If token had no decimal point and is an integer that's plausibly cents, convert
  const hadDecimal = /[.,]\d+$/.test(numTokenMatch[0])
  const isInteger = Number.isInteger(n)
  let ambiguous = false
  if (!hadDecimal && isInteger && n >= 1000 && n <= 10000000) {
    // Heuristic: integers between 1,000 and 10,000,000 probably represent cents -> dollars
    n = n / 100
    ambiguous = true
  }

  // Log ambiguous parses to console for later inspection
  if (ambiguous) {
    console.warn('Ambiguous price parsed:', { raw: cleaned, parsed: n, currency })
  }

  return { price: n, currency: (currency || 'USD'), raw: cleaned, ambiguous }
}

function canonicalizeUrl(rawUrl: string | undefined | null) {
  if (!rawUrl) return null
  try {
    const u = new URL(rawUrl, 'https://example.invalid')
    // Only keep host + pathname (drop search + hash)
    const host = u.hostname.toLowerCase()
    let pathname = u.pathname.replace(/\/+$/, '')
    if (pathname === '') pathname = '/'
    return `${host}${pathname}`
  } catch (e) {
    return rawUrl.trim().toLowerCase()
  }
}

function extractPackageInfo(p: RawProduct) {
  // Try several fields for package info
  const candidates: string[] = []
  if (p.package_info) candidates.push(String(p.package_info))
  if (p.net_contents) candidates.push(String(p.net_contents))
  if (p.productName) candidates.push(String(p.productName))
  if (p.title) candidates.push(String(p.title))
  if (p.name) candidates.push(String(p.name))

  const joined = candidates.join(' | ')
  // Look for count-style: 60, 90, 120 etc
  const countMatch = joined.match(/(\b\d{1,4})\s*(?:ct\b|count\b|capsule|capsules|gummy|gummies|tablet|tablets|softgel|serving|caps\b|bottle|pack)/i)
  if (countMatch) {
    return { package_count: Number(countMatch[1]), package_unit: 'count', raw: countMatch[0] }
  }

  // Look for net weight like '500 mg', '1,000 mg', '1 g', '30 g'
  const weightMatch = joined.match(/(\b[\d.,]{1,7})\s*(mg|g|kg|oz|ml|l)\b/i)
  if (weightMatch) {
    return { package_count: null, package_unit: weightMatch[2].toLowerCase(), raw: weightMatch[0], package_weight: weightMatch[1] }
  }

  // Look for patterns like '60 Vegan Gummy(ies)'
  const genericCount = joined.match(/(\b\d{1,4})\b/)
  if (genericCount) return { package_count: Number(genericCount[1]), package_unit: 'count', raw: genericCount[0] }

  return { package_count: null, package_unit: null, raw: null }
}

function extractCodes(item: any) {
  // product_code: prefer container.id, otherwise try to extract trailing numeric id from URL (/.../12345)
  let product_code: string | null = null
  try {
    if (item && item.container && item.container.id) product_code = String(item.container.id)
  } catch (e) { }
  if (!product_code && item && item.url) {
    try {
      const m = String(item.url).match(/\/(\d+)(?:$|[^\d])/)
      if (m) product_code = m[1]
    } catch (e) {}
  }

  // Try to find a UPC/GTIN (12 or 13 digits) somewhere in the raw object
  let upc: string | null = null
  try {
    const s = JSON.stringify(item)
    const match = s.match(/\b(\d{12,13})\b/)
    if (match) upc = match[1]
  } catch (e) {}

  return { product_code, upc }
}

async function postprocess() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const root = path.resolve(__dirname, '..')
  const inPath = path.join(root, 'ashwagandha-scrape-results.json')
  const outPath = path.join(root, 'ashwagandha-scrape-results.cleaned.json')

  let rawText: string
  try {
    rawText = await fs.readFile(inPath, 'utf-8')
  } catch (err) {
    console.error('Could not read', inPath, err)
    process.exit(1)
  }

  let raw: any
  try {
    raw = JSON.parse(rawText)
  } catch (err) {
    console.error('JSON parse error for', inPath, err)
    process.exit(1)
  }

  const sites = ['amazon', 'iherb']
  const cleaned: any[] = []
  const seen = new Map<string, number>() // canonical -> index

  const parseIssues: any[] = []

  for (const site of sites) {
    const list = Array.isArray(raw[site]) ? raw[site] : []
    for (const item of list) {
      const title = item.title || item.productName || item.name || null
      const url = item.url || item.link || item.productUrl || null
      const canonical = canonicalizeUrl(url) || null
      const priceRaw = item.price || item.price_raw || item.priceText || item.displayPrice || null
  const { price, currency, raw: price_clean, ambiguous } = parsePrice(priceRaw)
      const container = item.container || item.siteContainer || null
      const asin = container && container.asin ? container.asin : null

  const pkg = extractPackageInfo(item)
  const codes = extractCodes(item)

      const obj: any = {
        site,
        title,
        url,
        canonical,
        asin,
        product_code: codes.product_code || null,
        upc: codes.upc || null,
        price_raw: priceRaw,
        price: price,
        currency,
        price_clean,
        price_parse_ambiguous: ambiguous || false,
        package_count: pkg.package_count,
        package_unit: pkg.package_unit,
        package_raw: pkg.raw || null,
        package_weight: pkg.package_weight || null,
        images: item.images || item.image || item.imageUrl || null,
        container,
        source_raw: item,
      }

      // Compute price per item if possible
      if (obj.price != null && obj.package_count && obj.package_count > 0) {
        obj.price_per_item = Number((obj.price / obj.package_count).toFixed(6))
      } else {
        obj.price_per_item = null
      }

      // Dedupe: prefer same ASIN or same canonical URL, keep the lower price
      const dedupeKey = asin ? `asin:${asin}` : canonical ? `url:${canonical}` : `site:${site}:${title}`
      if (seen.has(dedupeKey)) {
        const existingIdx = seen.get(dedupeKey) as number
        const existing = cleaned[existingIdx]
        // If new item has price and is lower, replace
        if (obj.price != null && (existing.price == null || obj.price < existing.price)) {
          cleaned[existingIdx] = obj
        }
      } else {
        seen.set(dedupeKey, cleaned.length)
        cleaned.push(obj)
      }
      // Collect parse issues for auditing: ambiguous flag OR price could not be parsed but there is a raw token
      if (ambiguous || (price == null && price_clean)) {
        parseIssues.push({
          site,
          title,
          url,
          price_raw: priceRaw,
          price_clean,
          parsed_price: price,
          currency,
          ambiguous: Boolean(ambiguous),
          container,
          asin,
          canonical,
        })
      }
    }
  }

  // Sort by price ascending (nulls last)
  cleaned.sort((a, b) => {
    if (a.price == null && b.price == null) return 0
    if (a.price == null) return 1
    if (b.price == null) return -1
    return a.price - b.price
  })

  await fs.writeFile(outPath, JSON.stringify({ generated_at: new Date().toISOString(), count: cleaned.length, items: cleaned }, null, 2), 'utf-8')
  console.log('Wrote cleaned results to', outPath)
  console.log(`Input counts: amazon=${(Array.isArray(raw.amazon)?raw.amazon.length:0)} iherb=${(Array.isArray(raw.iherb)?raw.iherb.length:0)}`)
  console.log('Cleaned items:', cleaned.length)
  const priced = cleaned.filter((c) => c.price != null).length
  console.log('With numeric price:', priced)

  // Write parse issues file for manual audit
  try {
    const issuesPath = path.join(root, 'ashwagandha-price-parse-issues.json')
    await fs.writeFile(issuesPath, JSON.stringify({ generated_at: new Date().toISOString(), count: parseIssues.length, items: parseIssues }, null, 2), 'utf-8')
    console.log('Wrote price parse issues to', issuesPath, 'items:', parseIssues.length)
  } catch (err) {
    console.warn('Failed to write parse issues file', err)
  }
}

postprocess().catch((err) => {
  console.error('Postprocess failed', err)
  process.exit(1)
})
