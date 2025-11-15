#!/usr/bin/env node
/**
 * Sitemap generator
 * Builds public/sitemap.xml from route configuration and PAGE_PATHS.
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

// Dynamically import route config & path mapping (best-effort; TS may not load under plain Node)
async function loadConfigs() {
  let routesConfig = null;
  let pathMapping = null;
  try { routesConfig = await import(path.join(srcDir, 'routes.config.ts')); } catch { }
  try { pathMapping = await import(path.join(srcDir, 'utils', 'routePaths.ts')); } catch { }
  return { routesConfig, pathMapping };
}

function buildUrl(baseUrl, p) {
  if (!p || p === '/') return baseUrl;
  return `${baseUrl}${p.startsWith('/') ? p : '/' + p}`;
}

/**
 * Build canonical path list from route config instead of just PAGE_PATHS.
 * Ensures we only include current (v2) supplement pages and all glossary pages.
 */
function buildCanonicalPaths(KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, PAGE_PATHS) {
  const paths = new Set();
  paths.add('/');

  const staticPages = ['/knowledgebase', '/glossary', '/about', '/methodology', '/privacy', '/terms', '/legal', '/cookies', '/partner'];
  staticPages.forEach(p => paths.add(p));

  if (KNOWLEDGEBASE_ROUTES && KNOWLEDGEBASE_ROUTES.length && PAGE_PATHS) {
    // Prefer v2 from route config when available
    KNOWLEDGEBASE_ROUTES.filter(r => r.category === 'v2').forEach(r => {
      paths.add(PAGE_PATHS[r.key] || `/${r.key}`);
    });
  } else if (PAGE_PATHS && Object.keys(PAGE_PATHS).length) {
    // Fallback: include any non-v1 and non-archived paths + glossary
    Object.values(PAGE_PATHS).forEach(p => {
      if (typeof p === 'string') {
        // Exclude archived v1 pages (convention: ends with -v1)
        if (p.endsWith('-v1')) return;
        paths.add(p);
      }
    });
  }

  if (GLOSSARY_ROUTES && GLOSSARY_ROUTES.length && PAGE_PATHS) {
    GLOSSARY_ROUTES.forEach(r => {
      paths.add(PAGE_PATHS[r.key] || `/glossary/${r.key}`);
    });
  } else {
    // Fallback: ensure top-level glossary index is present (term pages likely covered by PAGE_PATHS above)
    paths.add('/glossary');
  }

  return Array.from(paths).sort();
}

(async () => {
  const baseUrl = process.env.VITE_CANONICAL_BASE_URL || process.env.SITE_BASE_URL || 'https://www.suppl.me';
  const { routesConfig, pathMapping } = await loadConfigs();
  if (!routesConfig && !pathMapping) {
    console.warn('[sitemap] Could not import TS configs; falling back to PAGE_PATHS inference and static pages.');
  }

  const { KNOWLEDGEBASE_ROUTES = [], GLOSSARY_ROUTES = [] } = routesConfig || {};
  const { PAGE_PATHS = {} } = pathMapping || {};

  const urls = buildCanonicalPaths(KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, PAGE_PATHS);
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(p => `  <url>\n    <loc>${buildUrl(baseUrl, p)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${p === '/' ? 'daily' : 'weekly'}</changefreq>\n    <priority>${p === '/' ? '1.0' : p.split('/').length === 2 ? '0.8' : '0.6'}</priority>\n  </url>`).join('\n') +
    `\n</urlset>`;

  const publicDir = path.join(projectRoot, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`[sitemap] Generated ${urls.length} URLs to public/sitemap.xml`);
})();
