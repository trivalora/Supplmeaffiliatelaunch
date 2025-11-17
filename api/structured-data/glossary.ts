// Glossary DefinedTerm JSON-LD endpoint (redirects to static JSON)
// GET /api/structured-data/glossary?term=rct
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const termRaw = req.query.term;
  const term = Array.isArray(termRaw) ? termRaw[0] : String(termRaw || '').trim();
  if (!term) {
    res.status(400).json({ ok: false, error: { message: 'Missing term parameter', code: 'MISSING_PARAM' } });
    return;
  }

  // Allow only safe slugs: lowercase letters, numbers, hyphen
  if (!/^[a-z0-9\-]+$/.test(term)) {
    res.status(400).json({ ok: false, error: { message: 'Invalid term format', code: 'INVALID_PARAM' } });
    return;
  }

  const location = `/structured-data/glossary/${term}.json`;
  // 307 preserves method; cache redirect lightly
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.setHeader('Location', location);
  res.status(307).end();
}
