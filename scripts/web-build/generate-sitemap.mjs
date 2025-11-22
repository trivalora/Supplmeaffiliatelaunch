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
  const url = `${baseUrl}${p.startsWith('/') ? p : '/' + p}`;
  // XML-escape special characters in URLs
  return url
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Build canonical path list from route config and PAGE_PATHS.
 * Ensures we only include current (v2) supplement pages with clean URLs and all glossary pages.
 */
function buildCanonicalPaths(KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, PAGE_PATHS) {
  const paths = new Set();
  paths.add('/');

  const staticPages = ['/knowledgebase', '/glossary', '/about', '/methodology', '/privacy', '/terms', '/legal', '/cookies', '/partner', '/contact', '/product-comparison'];
  staticPages.forEach(p => paths.add(p));

  // Add all 17 supplement comparison pages
  const comparisonPages = [
    '/ashwagandha-comparison',
    '/calcium-comparison',
    '/collagen-comparison',
    '/creatine-comparison',
    '/iron-comparison',
    '/magnesium-comparison',
    '/omega-3-comparison',
    '/prebiotics-comparison',
    '/probiotics-comparison',
    '/vitamin-c-comparison',
    '/vitamin-d-comparison',
    '/bcaa-comparison',
    '/curcumin-comparison',
    '/multivitamin-comparison',
    '/whey-protein-comparison',
    '/casein-protein-comparison',
    '/zinc-comparison'
  ];
  comparisonPages.forEach(p => paths.add(p));

  // Add product pages by reading JSON files
  const supplementsDir = path.join(projectRoot, 'public', 'api', 'products', 'supplements');
  if (fs.existsSync(supplementsDir)) {
    const files = fs.readdirSync(supplementsDir).filter(f => f.endsWith('.json'));
    files.forEach(file => {
      try {
        const supplementName = file.replace('.json', '');
        const data = JSON.parse(fs.readFileSync(path.join(supplementsDir, file), 'utf-8'));
        if (data.products && Array.isArray(data.products)) {
          data.products.forEach(product => {
            // URL-encode product IDs to handle spaces and special characters
            const encodedId = encodeURIComponent(product.id);
            paths.add(`/${supplementName}/product/${encodedId}`);
          });
        }
      } catch (err) {
        console.warn(`[sitemap] Could not read ${file}:`, err.message);
      }
    });
  }

  if (KNOWLEDGEBASE_ROUTES && KNOWLEDGEBASE_ROUTES.length && PAGE_PATHS) {
    // CRITICAL FIX: Map v2 route keys to clean URLs from PAGE_PATHS
    // This ensures /ashwagandha instead of /ashwagandhav2
    KNOWLEDGEBASE_ROUTES.filter(r => r.category === 'v2').forEach(r => {
      const cleanPath = PAGE_PATHS[r.key];
      if (cleanPath) {
        paths.add(cleanPath);
      }
    });
  } else if (PAGE_PATHS && Object.keys(PAGE_PATHS).length) {
    // Fallback when TS import fails: include v2 supplement pages and glossary pages
    Object.entries(PAGE_PATHS).forEach(([key, path]) => {
      if (typeof path === 'string') {
        // Include v2 supplements (keys ending with v2 → clean URLs like /ashwagandha)
        if (key.endsWith('v2')) {
          paths.add(path);
        }
        // Include glossary pages (paths starting with /glossary/)
        else if (path.startsWith('/glossary/')) {
          paths.add(path);
        }
        // Skip v1 archived pages (URLs ending with -v1)
        // All other static pages already added above
      }
    });
  }

  if (GLOSSARY_ROUTES && GLOSSARY_ROUTES.length && PAGE_PATHS) {
    GLOSSARY_ROUTES.forEach(r => {
      const cleanPath = PAGE_PATHS[r.key];
      if (cleanPath) {
        paths.add(cleanPath);
      }
    });
  } else if (PAGE_PATHS && Object.keys(PAGE_PATHS).length) {
    // Fallback: add all glossary paths from PAGE_PATHS
    Object.values(PAGE_PATHS).forEach(path => {
      if (typeof path === 'string' && path.startsWith('/glossary/')) {
        paths.add(path);
      }
    });
  }

  return Array.from(paths).sort();
}

(async () => {
  if (process.env.SKIP_SITEMAP === 'true') {
    console.log('[sitemap] SKIP_SITEMAP=true – skipping sitemap generation to preserve manual edits.');
    return;
  }
  const baseUrl = process.env.VITE_CANONICAL_BASE_URL || process.env.SITE_BASE_URL || 'https://www.suppl.me';
  const { routesConfig, pathMapping } = await loadConfigs();
  
  const { KNOWLEDGEBASE_ROUTES = [], GLOSSARY_ROUTES = [] } = routesConfig || {};
  const { PAGE_PATHS = {} } = pathMapping || {};

  // If imports failed, log warning but continue with PAGE_PATHS
  if (!routesConfig && !pathMapping) {
    console.warn('[sitemap] Could not import TS configs; using PAGE_PATHS from fallback.');
  }
  
  // Even if route config import failed, we should have PAGE_PATHS
  if (Object.keys(PAGE_PATHS).length === 0) {
    console.error('[sitemap] No PAGE_PATHS available - sitemap will be incomplete!');
  }

  const urls = buildCanonicalPaths(KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, PAGE_PATHS);
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(p => `  <url>\n    <loc>${buildUrl(baseUrl, p)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${p === '/' ? 'daily' : 'weekly'}</changefreq>\n    <priority>${p === '/' ? '1.0' : p.split('/').length === 2 ? '0.8' : '0.6'}</priority>\n  </url>`).join('\n') +
    `\n</urlset>`;

  // Write to both public/ (for dev) and build/ (for production)
  const publicDir = path.join(projectRoot, 'public');
  const buildDir = path.join(projectRoot, 'build');
  
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`[sitemap] Generated ${urls.length} URLs to public/sitemap.xml`);
  
  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), xml, 'utf8');
    console.log(`[sitemap] Copied sitemap to build/sitemap.xml`);
  }
})();
