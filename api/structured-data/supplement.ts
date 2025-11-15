// Generates JSON-LD structured data for a supplement page.
// Endpoint: /api/structured-data/supplement?supplement=magnesiumv2
// This implementation redirects to the prebuilt static JSON written by scripts/build-structured-data.mjs
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const raw = req.query.supplement;
  const slug = Array.isArray(raw) ? raw[0] : String(raw || '').trim();
  if (!slug) {
    res.status(400).json({ ok: false, error: { message: 'Missing supplement parameter', code: 'MISSING_PARAM' } });
    return;
  }
  // Allow safe keys like magnesiumv2, creatinev2, etc.
  if (!/^[a-z0-9\-]+$/.test(slug)) {
    res.status(400).json({ ok: false, error: { message: 'Invalid supplement format', code: 'INVALID_PARAM' } });
    return;
  }

  const location = `/structured-data/${slug}.json`;
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.setHeader('Location', location);
  res.status(307).end();
}
