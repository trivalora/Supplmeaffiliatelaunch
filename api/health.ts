// Simple Vercel serverless function for health checks
// Vercel will build this TypeScript file automatically.
// Endpoint: /api/health

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendSuccess } from './_lib/respond';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  return sendSuccess(res, { status: 'ok', version: '0.0.1' }, { generatedAt: new Date().toISOString(), ttlSeconds: 30 });
}
