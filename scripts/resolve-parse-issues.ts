import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { fetchProduct } from './fetch-iherb-product.ts'

async function main() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const root = path.resolve(__dirname, '..')
  const issuesPath = path.join(root, 'ashwagandha-price-parse-issues.json')
  const outPath = path.join(root, 'ashwagandha-price-parse-issues.resolved.json')
  const text = await fs.readFile(issuesPath, 'utf-8')
  const data = JSON.parse(text)
  const items = data.items || []

  const exchange = {
    KRW: Number(process.env.EXCHANGE_KRW_TO_USD || 1485)
  }

  const resolved: any[] = []
  for (const it of items) {
    const url = it.url
    if (!url) { resolved.push({ ...it, resolved: null }); continue }
    console.log('Resolving', url)
    const res = await fetchProduct(url)
    let resolved_price_usd = null
    if (res.price != null) {
      if (res.currency === 'KRW') {
        resolved_price_usd = Number((res.price / exchange.KRW).toFixed(2))
      } else if (res.currency === 'USD' || !res.currency) {
        resolved_price_usd = Number(Number(res.price).toFixed(2))
      } else {
        // unknown currency: we keep raw price and null USD
        resolved_price_usd = null
      }
    }
    resolved.push({ ...it, resolved_price: res.price, resolved_currency: res.currency, resolved_price_usd })
  }

  await fs.writeFile(outPath, JSON.stringify({ generated_at: new Date().toISOString(), count: resolved.length, items: resolved }, null, 2), 'utf-8')
  console.log('Wrote resolved parse issues to', outPath)
}

main().catch(e => { console.error(e); process.exit(1) })
