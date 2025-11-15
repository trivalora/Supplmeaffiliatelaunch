#!/usr/bin/env node
/**
 * Sitemap generator
 * Builds public/sitemap.xml from route configuration and PAGE_PATHS.
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

// Dynamically import route config & path mapping
async function loadConfigs() {
  const routesConfig = await import(path.join(srcDir, 'routes.config.ts')).catch(() => null);
  const pathMapping = await import(path.join(srcDir, 'utils', 'routePaths.ts')).catch(() => null);
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
  // v2 supplements only
  KNOWLEDGEBASE_ROUTES.filter(r => r.category === 'v2').forEach(r => {
    paths.add(PAGE_PATHS[r.key] || `/${r.key}`);
  });
  // Glossary
  GLOSSARY_ROUTES.forEach(r => {
    paths.add(PAGE_PATHS[r.key] || `/glossary/${r.key}`);
  });
  // Static pages
  ['/knowledgebase','/glossary','/about','/methodology','/privacy','/terms','/legal','/cookies','/partner'].forEach(p => paths.add(p));
  return Array.from(paths).sort();
}

(async () => {
  const baseUrl = process.env.VITE_CANONICAL_BASE_URL || process.env.SITE_BASE_URL || 'https://www.suppl.me';
  const { routesConfig, pathMapping } = await loadConfigs();
  if (!routesConfig || !pathMapping) {
    console.error('[sitemap] Failed to load route configs.');
    process.exit(1);
  }

  const { KNOWLEDGEBASE_ROUTES = [], GLOSSARY_ROUTES = [] } = routesConfig;
  const { PAGE_PATHS = {} } = pathMapping;

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
