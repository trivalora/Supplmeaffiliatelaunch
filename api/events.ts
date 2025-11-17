// Simple event ingestion endpoint.
// POST /api/events  { event: string; payload?: any }
// For now, echoes back and could be wired to external analytics later.
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendError, sendSuccess } from './_lib/respond';
import { query } from './_lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return sendError(res, 'Method not allowed', 'METHOD_NOT_ALLOWED', 405);

  let body: any = req.body;
  // If body is a raw string try to parse
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { /* ignore */ }
  }
  if (!body || typeof body.event !== 'string') {
    return sendError(res, 'Missing event field', 'MISSING_EVENT');
  }

  // Persist to PostgreSQL if configured
  try {
    await query('INSERT INTO events(event_name, payload) VALUES($1,$2)', [body.event, body.payload || null]);
  } catch (e) {
    console.error('[events] DB insert failed', e);
  }

  return sendSuccess(res, { received: true, event: body.event }, { generatedAt: new Date().toISOString() }, 202);
}
