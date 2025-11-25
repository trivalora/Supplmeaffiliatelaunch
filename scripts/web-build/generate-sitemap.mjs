#!/usr/bin/env node
/**
 * Sitemap generator
 * Builds public/sitemap.xml from route configuration and PAGE_PATHS.
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

// Dynamically import route config using tsx for TypeScript support
async function loadConfigs() {
  try {
    // Use tsx to load TypeScript files
    const { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } = await import(path.join(srcDir, 'routes.config.ts'));
    return { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES };
  } catch (error) {
    console.warn('[sitemap] Could not load routes.config.ts:', error.message);
    return { KNOWLEDGEBASE_ROUTES: null, GLOSSARY_ROUTES: null };
  }
}

function buildUrl(baseUrl, p) {
  if (!p || p === '/') return baseUrl;
  const url = `${baseUrl}${p.startsWith('/') ? p : '/' + p}`;
  // XML-escape special characters EXCEPT apostrophes in URLs
  // Apostrophes in URL paths are already URL-encoded as %27
  // Using &apos; creates invalid URLs that SEO tools can't parse
  return url
    .replace(/&/g, '&amp;')  // Must be first!
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Build canonical path list from route config.
 * Generates URLs for all supplements, glossary pages, and products.
 */
function buildCanonicalPaths(KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES) {
  const paths = new Set();
  paths.add('/');

  const staticPages = ['/knowledgebase', '/glossary', '/about', '/methodology', '/privacy-policy', '/terms-of-service', '/legal-notice', '/cookie-policy', '/partner', '/contact'];
  staticPages.forEach(p => paths.add(p));

  // Add supplement pages from KNOWLEDGEBASE_ROUTES
  if (KNOWLEDGEBASE_ROUTES && KNOWLEDGEBASE_ROUTES.length) {
    KNOWLEDGEBASE_ROUTES
      .filter(r => r.category === 'knowledgebase' && r.path)
      .forEach(r => paths.add(r.path));
    
    // Add comparison pages
    KNOWLEDGEBASE_ROUTES
      .filter(r => r.category === 'comparison')
      .forEach(r => {
        const supplementId = r.key.replace('-comparison', '');
        paths.add(`/comparison/${supplementId}`);
      });
  }

  // Add glossary pages from GLOSSARY_ROUTES
  if (GLOSSARY_ROUTES && GLOSSARY_ROUTES.length) {
    GLOSSARY_ROUTES.forEach(r => {
      paths.add(`/glossary/${r.key}`);
    });
  }

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
            const encodedId = encodeURIComponent(product.id);
            paths.add(`/${supplementName}/product/${encodedId}`);
          });
        }
      } catch (err) {
        console.warn(`[sitemap] Could not read ${file}:`, err.message);
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
  const { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } = await loadConfigs();
  
  // Log import status
  if (!KNOWLEDGEBASE_ROUTES || !GLOSSARY_ROUTES) {
    console.error('[sitemap] Failed to load route configs - sitemap will be incomplete!');
    console.error('[sitemap] Please ensure routes.config.ts is accessible.');
    return;
  }

  console.log(`[sitemap] Loaded ${KNOWLEDGEBASE_ROUTES.length} knowledgebase routes, ${GLOSSARY_ROUTES.length} glossary routes`);

  const urls = buildCanonicalPaths(KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES);
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
