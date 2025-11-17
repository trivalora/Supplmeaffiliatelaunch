// Cron endpoint to refresh mock price data (scheduled via Vercel cron later)
// GET /api/cron/prices-refresh  (protected with optional API key if set)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendError, sendSuccess } from '../_lib/respond';
import { query, safeQuery } from '../_lib/db';

function authOk(req: VercelRequest) {
  const provided = req.headers['x-api-key'];
  const expected = process.env.API_KEY_FAVORITES; // reuse same key for now
  return expected && provided === expected;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!authOk(req)) return sendError(res, 'Unauthorized', 'UNAUTHORIZED', 401);

  // In real logic: fetch external retailers & update prices table.
  // For now: upsert a couple of mock rows for magnesiumv2.
  try {
    await query('INSERT INTO supplements(slug, title, category) VALUES($1,$2,$3) ON CONFLICT DO NOTHING', ['magnesiumv2', 'Magnesium', 'Minerals']);
    await query("INSERT INTO prices(supplement_slug, retailer, product_name, brand, price, currency, url) VALUES($1,$2,$3,$4,$5,$6,$7)", ['magnesiumv2', 'RetailerA', 'Chelated Magnesium 200mg', 'NutraLabs', 14.99, 'USD', 'https://example.com/product/chelated-magnesium']);
    await query("INSERT INTO prices(supplement_slug, retailer, product_name, brand, price, currency, url) VALUES($1,$2,$3,$4,$5,$6,$7)", ['magnesiumv2', 'RetailerB', 'Magnesium Glycinate 400mg', 'PureHealth', 21.50, 'USD', 'https://example.com/product/magnesium-glycinate']);
  } catch (e) {
    console.error(e);
    return sendError(res, 'Price refresh failed', 'DB_ERROR', 500);
  }

  const rows = await safeQuery('SELECT count(*)::int AS count FROM prices WHERE supplement_slug = $1', ['magnesiumv2']);
  return sendSuccess(res, { refreshed: true, supplement: 'magnesiumv2', priceCount: rows?.[0]?.count || 0 }, { generatedAt: new Date().toISOString() });
}
