// Lazy PostgreSQL pool (optional dependency)
let _pool: any | null = null;
let _pg: any = null;

// Try to import pg if available
try {
  _pg = require('pg');
} catch (e) {
  console.warn('[db] pg module not available, database features disabled');
}

export function getPool() {
  if (!_pg) return null;
  if (_pool) return _pool;
  const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, PGSSL } = process.env;
  if (!PGHOST || !PGUSER || !PGPASSWORD || !PGDATABASE) {
    console.warn('[db] Missing PG connection env vars, database features disabled');
    return null;
  }
  _pool = new _pg.Pool({
    host: PGHOST,
    port: PGPORT ? parseInt(PGPORT, 10) : 5432,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    ssl: PGSSL === 'true' ? { rejectUnauthorized: false } : false,
    max: 4,
    idleTimeoutMillis: 30000,
  });
  return _pool;
}

export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  const pool = getPool();
  if (!pool) throw new Error('DB not configured');
  const res = await pool.query(text, params);
  return res.rows as T[];
}

export async function safeQuery<T = any>(text: string, params?: any[]): Promise<T[] | null> {
  try { return await query<T>(text, params); } catch (e) { console.error('[db] query error', e); return null; }
}
