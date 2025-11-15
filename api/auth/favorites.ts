// Favorites management (simple auth stub via API_KEY_FAVORITES shared secret)
// GET /api/auth/favorites?user=abc  -> list favorites
// POST /api/auth/favorites  body { user: string; supplement: string }

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendError, sendSuccess } from '../_lib/respond';
import { query, safeQuery } from '../_lib/db';

function authOk(req: VercelRequest) {
  const provided = req.headers['x-api-key'];
  const expected = process.env.API_KEY_FAVORITES;
  return expected && provided === expected;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!authOk(req)) return sendError(res, 'Unauthorized', 'UNAUTHORIZED', 401);

  if (req.method === 'GET') {
    const user = String(req.query.user || '').trim();
    if (!user) return sendError(res, 'Missing user', 'MISSING_USER');
    const rows = await safeQuery('SELECT supplement_slug FROM favorites WHERE user_id = $1 ORDER BY created_at DESC', [user]);
    return sendSuccess(res, { user, favorites: rows?.map(r => r.supplement_slug) || [] }, { generatedAt: new Date().toISOString(), ttlSeconds: 30 });
  }

  if (req.method === 'POST') {
    let body: any = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch { /* ignore */ } }
    const user = String(body?.user || '').trim();
    const supplement = String(body?.supplement || '').trim();
    if (!user || !supplement) return sendError(res, 'Missing user or supplement', 'MISSING_FIELDS');
    try {
      await query('INSERT INTO favorites(user_id, supplement_slug) VALUES($1,$2) ON CONFLICT DO NOTHING', [user, supplement]);
    } catch (e) {
      console.error(e);
      return sendError(res, 'DB insert failed', 'DB_ERROR');
    }
    return sendSuccess(res, { user, supplement, added: true });
  }

  return sendError(res, 'Method not allowed', 'METHOD_NOT_ALLOWED', 405);
}
