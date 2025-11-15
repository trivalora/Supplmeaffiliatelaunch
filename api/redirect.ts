// Affiliate redirect endpoint.
// Usage: /api/redirect?url=https://example.com&supplement=magnesiumv2&platform=amazon
// Performs lightweight validation and issues a 302 redirect.
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendError } from './_lib/respond';

function isValidUrl(u: string) {
  try { new URL(u); return true; } catch { return false; }
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { url, supplement, platform } = req.query;
  if (!url) return sendError(res, 'Missing url', 'MISSING_PARAM');
  const target = String(url);
  if (!isValidUrl(target)) return sendError(res, 'Invalid url', 'INVALID_URL');

  // Basic anti-open-redirect: allow only https
  if (!target.startsWith('https://')) return sendError(res, 'Only https targets allowed', 'INVALID_URL');

  // TODO: record click event (supplement/platform) to analytics datastore.
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Location', target);
  res.status(302).end();
}
