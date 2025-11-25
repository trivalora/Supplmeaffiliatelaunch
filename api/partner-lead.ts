import type { VercelRequest, VercelResponse } from '@vercel/node';

let _pool: any = null;
let _pg: any = null;

try {
  _pg = require('pg');
} catch (e) {
  console.warn('[partner-lead] pg module not available');
}
function getPool() {
    if (!_pg) return null;
    if (!_pool) {
        const connectionString = process.env.DATABASE_URL;
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
        res.status(500).send(JSON.stringify({ ok: false, error: 'DATABASE_URL not configured' }));
        return;
    }

    const body = (req.body || {}) as Record<string, any>;
    if (body.hp) {
        // Honeypot triggered – pretend success
        res.status(200).send(JSON.stringify({ ok: true }));
        return;
    }
    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim().toLowerCase();
    const network = (body.network || '').toString().trim();
    const category = (body.category || '').toString().trim();
    const message = (body.message || '').toString().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !emailRegex.test(email) || !network || !category) {
        res.status(400).send(JSON.stringify({ ok: false, error: 'Missing or invalid fields' }));
        return;
    }

    const userAgent = (req.headers['user-agent'] as string) || '';
    const referer = (req.headers['referer'] as string) || '';
    const ipHeader = (req.headers['x-forwarded-for'] as string) || '';
    const ip = ipHeader.split(',')[0].trim() || (req.socket?.remoteAddress || '');

    try {
        const db = getPool();
        const client = await db.connect();
        try {
            await client.query(`
        CREATE TABLE IF NOT EXISTS partner_leads (
          id BIGSERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          network TEXT NOT NULL,
          category TEXT NOT NULL,
          message TEXT,
          user_agent TEXT,
          referer TEXT,
          ip TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS partner_leads_email_created_idx ON partner_leads (email, created_at DESC);
      `);

            await client.query(
                `INSERT INTO partner_leads (name, email, network, category, message, user_agent, referer, ip)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [name, email, network, category, message || null, userAgent, referer, ip]
            );
        } finally {
            client.release();
        }
        res.status(200).send(JSON.stringify({ ok: true }));
    } catch (err: any) {
        console.error('partner-lead error', err);
        res.status(500).send(JSON.stringify({ ok: false, error: 'Internal error' }));
    }
}
