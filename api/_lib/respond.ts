import type { VercelResponse } from '@vercel/node';
import { makeSuccess, makeError, ApiMeta } from '../../src/shared/apiTypes';
import crypto from 'crypto';

export function sendSuccess<T>(res: VercelResponse, data: T, meta?: ApiMeta, status = 200) {
  const body = makeSuccess(data, meta);
  const etag = crypto.createHash('sha1').update(JSON.stringify(body)).digest('hex');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', meta?.ttlSeconds ? `public, max-age=${meta.ttlSeconds}` : 'no-store');
  res.setHeader('ETag', etag);
  res.status(status).json(body);
}

export function sendError(res: VercelResponse, message: string, code?: string, status = 400, meta?: ApiMeta) {
  const body = makeError(message, code, meta);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(body);
}
