import type { VercelRequest, VercelResponse } from '@vercel/node';

let _pool: any = null;
let _pg: any = null;

try {
  _pg = require('pg');
} catch (e) {
  console.warn('[subscribe] pg module not available');
}
function getPool() {
    if (!_pg) return null;
    if (!_pool) {
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
            // Will throw later in handler with clear error; keep constructor simple
            // but avoid creating pool with undefined connection string
            // The handler will respond 500 with guidance
        }
        _pool = new _pg.Pool({
            connectionString,
            ssl: process.env.PGSSL === 'disable' ? undefined : { rejectUnauthorized: false },
            max: 3,
            idleTimeoutMillis: 5_000,
            connectionTimeoutMillis: 5_000,
        });
    }
    return _pool!;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'POST') {
        res.status(405).send(JSON.stringify({ ok: false, error: 'Method not allowed' }));
        return;
    }

    if (!process.env.DATABASE_URL) {
        res.status(500).send(JSON.stringify({
            ok: false,
            error: 'DATABASE_URL not configured',
            hint: 'Set DATABASE_URL in your environment to enable subscription storage.'
        }));
        return;
    }

    try {
        const { email, source, hp } = (req.body || {}) as { email?: string; source?: string; hp?: string };
        if (hp) {
            // Honeypot triggered – pretend success without storing
            res.status(200).send(JSON.stringify({ ok: true }));
            return;
        }
        const normalizedEmail = (email || '').trim().toLowerCase();

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!normalizedEmail || !emailRegex.test(normalizedEmail)) {
            res.status(400).send(JSON.stringify({ ok: false, error: 'Invalid email' }));
            return;
        }

        const userAgent = (req.headers['user-agent'] as string) || '';
        const referer = (req.headers['referer'] as string) || '';
        const ipHeader = (req.headers['x-forwarded-for'] as string) || '';
        const ip = ipHeader.split(',')[0].trim() || (req.socket?.remoteAddress || '');

        const db = getPool();
        const client = await db.connect();
        try {
            await client.query(`
        CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
          id BIGSERIAL PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          source TEXT,
          user_agent TEXT,
          referer TEXT,
          ip TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

            await client.query(
                `INSERT INTO newsletter_subscriptions (email, source, user_agent, referer, ip)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (email) DO NOTHING`,
                [normalizedEmail, source || null, userAgent, referer, ip]
            );
        } finally {
            client.release();
        }

        res.status(200).send(JSON.stringify({ ok: true }));
    } catch (err: any) {
        console.error('subscribe error', err);
        res.status(500).send(JSON.stringify({ ok: false, error: 'Internal error' }));
    }
}
