import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

function parseNumber(s: any): number | null {
  if (s == null) return null
  const t = String(s).trim().replace(/[,\u00A0]/g, '')
  const n = Number(t)
  return isFinite(n) ? n : null
}

function unitToMg(amount: number | null, unit: string | null): number | null {
  if (amount == null) return null
  if (!unit) return amount
  const u = unit.toLowerCase()
  if (u.startsWith('mg')) return amount
  if (u.startsWith('g')) return amount * 1000
  if (u.startsWith('kg')) return amount * 1_000_000
  if (u.startsWith('mcg') || u.startsWith('µg') || u.startsWith('ug')) return amount / 1000
  return null
}

function extractCountFromNetContents(s: string | null): number | null {
  if (!s) return null
  const m = s.match(/(\d{1,4})\s*(?:ct|count|capsule|capsules|gummy|gummies|tablet|tablets|softgel|serving|pkg|pack)/i)
  if (m) return Number(m[1])
  const m2 = s.match(/^(\d{1,4})\b/)
  if (m2) return Number(m2[1])
  return null
}

async function main() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const root = path.resolve(__dirname, '..')
  const dbPath = process.env.DSLD_DB_PATH || path.join(root, '..', 'input', 'Supplement Databases (trivalora)', 'DSLD db', 'dsld.sqlite')
  const cleanedPath = path.join(root, 'ashwagandha-scrape-results.cleaned.json')
  const outPath = path.join(root, 'ashwagandha-joined.json')

  const db = await open({ filename: dbPath, driver: sqlite3.Database })
  console.log('Using DSLD DB:', dbPath)

  // Get rows with Ashwagandha as ingredient or in product name
  const rows = await db.all(`SELECT po.dsld_id, po.product_name, po.brand_name, po.net_contents, po.serving_size AS overview_serving_size,
    dsf.ingredient, dsf.amount_per_serving, dsf.amount_per_serving_unit
    FROM product_overview po
    LEFT JOIN dietary_supplement_facts dsf ON dsf.dsld_id = po.dsld_id
    WHERE LOWER(dsf.ingredient) LIKE '%ashwagandha%' OR LOWER(po.product_name) LIKE '%ashwagandha%'`)

  console.log('Found DSLD rows:', rows.length)

  // Normalize DSLD rows
  const norm: any[] = []
  for (const r of rows) {
    const amt = parseNumber(r.amount_per_serving)
    const amt_mg = unitToMg(amt, r.amount_per_serving_unit)
    const package_count = extractCountFromNetContents(r.net_contents)
    const servings_per_container = (() => {
      // Try to parse overview_serving_size like '1 Vegan Gummy(ies)' or '2 Quick Release Capsule(s)'
      if (!r.overview_serving_size) return null
      const m = String(r.overview_serving_size).match(/(\d{1,4})/)
      return m ? Number(m[1]) : null
    })()

    norm.push({
      dsld_id: r.dsld_id,
      product_name: r.product_name,
      brand_name: r.brand_name,
      net_contents: r.net_contents,
      package_count: package_count,
      overview_serving_size: r.overview_serving_size,
      servings_per_container: servings_per_container,
      ingredient: r.ingredient,
      amount_per_serving_raw: r.amount_per_serving,
      amount_per_serving_unit: r.amount_per_serving_unit,
      amount_per_serving_mg: amt_mg,
    })
  }

  // Read cleaned scrape results
  const cleanedText = await fs.readFile(cleanedPath, 'utf-8')
  const cleaned = JSON.parse(cleanedText)
  const items: any[] = cleaned.items || []

  // Optionally load resolved parse issues (from targeted re-scrape) to correct prices
  const resolvedPath = path.join(root, 'ashwagandha-price-parse-issues.resolved.json')
  let resolvedMap = new Map<string, any>()
  try {
    const rp = await fs.readFile(resolvedPath, 'utf-8')
    const rj = JSON.parse(rp)
    for (const it of rj.items || []) {
      if (it.canonical) resolvedMap.set(it.canonical, it)
      if (it.product_code) resolvedMap.set(String(it.product_code), it)
    }
    console.log('Loaded resolved parse issues:', (rj.items || []).length)
  } catch (e) {
    // ignore if not present
  }

  // For each scraped item, try to match to a DSLD product
  function scoreMatch(itemTitle: string, dsldName: string, brand: string) {
    // Simple token-set scoring + heuristics
    const it = (itemTitle || '').toLowerCase()
    const target = ((dsldName || '') + ' ' + (brand || '')).toLowerCase()
    // tokenize (keep alphanum tokens)
    const tokenize = (s: string) => Array.from(new Set(s.replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter(Boolean)))
    const a = tokenize(it)
    const b = tokenize(target)
    if (a.length === 0 || b.length === 0) return 0
    const setA = new Set(a)
    const setB = new Set(b)
    let inter = 0
    for (const t of setA) if (setB.has(t)) inter++
    const union = new Set([...setA, ...setB]).size
    // Jaccard-like ratio scaled to 0-80
    const jacc = inter / union
    let score = Math.round(jacc * 80)
    // Bonus if brand appears verbatim
    if (brand && it.includes(String(brand).toLowerCase())) score += 10
    // Bonus if dsldName appears verbatim
    if (dsldName && it.includes(String(dsldName).toLowerCase())) score += 10
    // Cap at 100
    return Math.min(100, score)
  }

  const joined: any[] = []
  for (const it of items) {
    let best: any = null
    let bestScore = 0
    for (const d of norm) {
      const s = scoreMatch(it.title || it.productName || it.name, d.product_name, d.brand_name)
      if (s > bestScore) {
        bestScore = s
        best = d
      }
    }

    const entry: any = { ...it, matched_dsld: best || null }
    // If we have a resolved parse issue for this canonical or product_code, prefer that USD price
    const key1 = entry.canonical
    const key2 = entry.product_code ? String(entry.product_code) : null
    const resolved = (key1 && resolvedMap.has(key1)) ? resolvedMap.get(key1) : (key2 && resolvedMap.has(key2) ? resolvedMap.get(key2) : null)
    if (resolved && resolved.resolved_price_usd != null) {
      entry.price = Number(resolved.resolved_price_usd)
      entry.currency = 'USD'
      entry._price_overridden_by_resolve = true
    }

    // If matched and both price and amount info available, compute price per mg: price / (amount_per_serving_mg * servings_per_container)
    if (entry.price != null && entry.matched_dsld) {
      const ds = entry.matched_dsld
      // Determine servings per container: if ds.servings_per_container available, use it; otherwise if package_count and amount_per_serving_mg then assume 1 serving per capsule/tablet
      let servingsPerContainer = ds.servings_per_container
      if (!servingsPerContainer) {
        if (ds.package_count) servingsPerContainer = ds.package_count
        else if (entry.package_count) servingsPerContainer = entry.package_count
      }

      if (ds.amount_per_serving_mg && servingsPerContainer) {
        const total_mg = ds.amount_per_serving_mg * servingsPerContainer
        if (total_mg > 0) {
          const ppmg = entry.price / total_mg // $ per mg
          entry.price_per_mg = Number(ppmg.toFixed(9))
          // Choose a human-friendly unit for display
          // If total >= 1000 mg, show $ per gram
          if (total_mg >= 1000) {
            const perGram = ppmg * 1000
            entry.price_per_unit = Number(perGram.toFixed(6))
            entry.price_per_unit_label = '$/g'
          } else {
            // For very small totals, stick with $/mg
            entry.price_per_unit = Number(ppmg.toFixed(9))
            entry.price_per_unit_label = '$/mg'
          }
          // Also provide price per serving
          if (servingsPerContainer > 0) {
            entry.price_per_serving = Number((entry.price / servingsPerContainer).toFixed(6))
          } else entry.price_per_serving = null
        } else {
          entry.price_per_mg = null
          entry.price_per_unit = null
          entry.price_per_unit_label = null
          entry.price_per_serving = null
        }
      } else {
        entry.price_per_mg = null
        entry.price_per_unit = null
        entry.price_per_unit_label = null
        entry.price_per_serving = null
      }
    } else {
      entry.price_per_mg = null
    }

    joined.push(entry)
  }

  // Collapse variants: group by product_code if present, otherwise by normalized base title
  function normalizeBaseTitle(t: string | null) {
    if (!t) return ''
    let s = String(t).toLowerCase()
    // remove common size tokens like '450 mg', '180 veggie capsules', '60 capsules', '120 tablets', '7 oz', etc.
    s = s.replace(/\b\d+[\s-]*(mg|g|kg|mcg|µg|ug|oz|fl oz|ml|capsule|capsules|caplet|caplets|tablet|tablets|gummies|gummy|count|ct|veggie|veg|vegetarian|per capsule|per tablet)\b/gi, ' ')
    // remove remaining numbers
    s = s.replace(/\b\d+\b/g, ' ')
    // remove punctuation and collapse spaces
    s = s.replace(/[^a-z0-9]+/g, ' ').trim()
    return s
  }

  const groups = new Map<string, any[]>()
  for (const e of joined) {
    const key = e.product_code || normalizeBaseTitle(e.title || e.productName || e.name)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(e)
  }

  const collapsed: any[] = []
  for (const [k, variants] of groups.entries()) {
    if (variants.length === 1) {
      const v = variants[0]
      const singleOut = {
        title: v.title || v.productName || v.name,
        url: v.url,
        image: v.images || v.image || null,
        price: v.price,
        product_code: v.product_code || null,
        price_per_mg: v.price_per_mg || null,
        price_per_unit: v.price_per_unit || null,
        price_per_unit_label: v.price_per_unit_label || null,
        price_per_serving: v.price_per_serving || null,
        matched_dsld: v.matched_dsld ? { dsld_id: v.matched_dsld.dsld_id, product_name: v.matched_dsld.product_name } : null,
        variants: [{ title: v.title || v.productName || v.name, url: v.url, price: v.price, package_count: v.package_count, package_unit: v.package_unit, product_code: v.product_code || null }],
        variant_count: 1
      }
      collapsed.push(singleOut)
      continue
    }
    // choose best variant: prefer lowest price_per_mg (cheapest per active unit), otherwise lowest absolute price
    let best = variants[0]
    for (const v of variants.slice(1)) {
      const a = (v.price_per_mg != null) ? v.price_per_mg : (v.price != null ? v.price : Number.POSITIVE_INFINITY)
      const b = (best.price_per_mg != null) ? best.price_per_mg : (best.price != null ? best.price : Number.POSITIVE_INFINITY)
      if (a < b) best = v
    }
    const out = {
      title: best.title || best.productName || best.name,
      url: best.url,
      image: best.images || best.image || null,
      price: best.price,
      product_code: best.product_code || null,
      price_per_mg: best.price_per_mg || null,
      price_per_unit: best.price_per_unit || null,
      price_per_unit_label: best.price_per_unit_label || null,
      price_per_serving: best.price_per_serving || null,
      matched_dsld: best.matched_dsld ? { dsld_id: best.matched_dsld.dsld_id, product_name: best.matched_dsld.product_name } : null,
      variants: variants.map(v => ({ title: v.title || v.productName || v.name, url: v.url, price: v.price, package_count: v.package_count, package_unit: v.package_unit, product_code: v.product_code || null })),
      variant_count: variants.length
    }
    collapsed.push(out)
  }

  await fs.writeFile(outPath, JSON.stringify({ generated_at: new Date().toISOString(), count: collapsed.length, items: collapsed }, null, 2), 'utf-8')
  console.log('Wrote joined output to', outPath, 'collapsed items:', collapsed.length)

  await db.close()
}

main().catch((e) => { console.error(e); process.exit(1) })
