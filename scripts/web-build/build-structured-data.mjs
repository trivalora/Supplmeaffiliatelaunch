#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Pre-generate JSON-LD files for supplement and glossary pages for static inclusion / prefetch.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// CRITICAL FIX: Project root is two levels up from scripts/web-build/
const projectRoot = path.join(__dirname, '..', '..');
const outDir = path.join(projectRoot, 'public', 'structured-data');
const glossaryOutDir = path.join(outDir, 'glossary');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(glossaryOutDir)) fs.mkdirSync(glossaryOutDir, { recursive: true });

function baseUrl() {
  return process.env.VITE_CANONICAL_BASE_URL || process.env.SITE_BASE_URL || 'https://suppl.me';
}

function buildSupplementSchemas(route) {
  const prettyKey = route.key.replace(/v2$/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const pageUrl = `${baseUrl()}/${prettyKey}`;
  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: route.title,
    description: route.description,
    category: route.subcategory || 'Supplement'
  };
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: route.title,
    description: route.description,
    about: route.title,
    url: pageUrl
  };
  return [product, medicalWebPage];
}

function buildGlossarySchemas(route) {
  const slug = route.key; // use key directly for /glossary/${key}
  const url = `${baseUrl()}/glossary/${slug}`;
  const term = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: route.title,
    description: route.description || route.title,
    url,
    inDefinedTermSet: `${baseUrl()}/glossary`,
    ...(route.abbreviation ? { alternateName: route.abbreviation } : {})
  };
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description || route.title,
    url
  };
  return [term, webPage];
}

// Parse a routes array export from routes.config.ts by balancing brackets/braces
function parseRoutesArrayFromTS(tsPath, exportName) {
  try {
    const src = fs.readFileSync(tsPath, 'utf8');
    const start = src.indexOf(`export const ${exportName}`);
    if (start === -1) return [];
    const eq = src.indexOf('=', start);
    const arrayStart = src.indexOf('[', eq !== -1 ? eq : start);
    if (arrayStart === -1) return [];
    let i = arrayStart;
    let depth = 0;
    let end = -1;
    while (i < src.length) {
      const ch = src[i];
      if (ch === '[') depth++;
      if (ch === ']') {
        depth--;
        if (depth === 0) { end = i; break; }
      }
      i++;
    }
    if (end === -1) return [];
    const arrayText = src.slice(arrayStart, end + 1);

    const routes = [];
    let j = 0;
    while (j < arrayText.length) {
      if (arrayText[j] === '{') {
        let k = j;
        let bDepth = 0;
        while (k < arrayText.length) {
          const c = arrayText[k];
          if (c === '{') bDepth++;
          if (c === '}') { bDepth--; if (bDepth === 0) { k++; break; } }
          k++;
        }
        const objText = arrayText.slice(j, k);
        const key = (objText.match(/\bkey\s*:\s*'([^']+)'/) || [])[1];
        const title = (objText.match(/\btitle\s*:\s*'([^']+)'/) || [])[1];
        const description = (objText.match(/\bdescription\s*:\s*'([^']+)'/) || [])[1];
        const category = (objText.match(/\bcategory\s*:\s*'([^']+)'/) || [])[1];
        const subcategory = (objText.match(/\bsubcategory\s*:\s*'([^']+)'/) || [])[1];
        const abbreviation = (objText.match(/\babbreviation\s*:\s*'([^']+)'/) || [])[1];
        routes.push({ key, title, description, category, subcategory, abbreviation });
        j = k;
      } else {
        j++;
      }
    }
    return routes;
  } catch (e) {
    console.warn(`[structured-data] Failed to parse ${exportName} from routes.config.ts:`, e.message);
    return [];
  }
}

async function loadKnowledgebaseRoutes() {
  // Try dynamic import first (will likely fail on .ts under plain Node)
  try {
    const mod = await import(path.join(projectRoot, 'src', 'routes.config.ts'));
    if (mod && mod.KNOWLEDGEBASE_ROUTES) return mod.KNOWLEDGEBASE_ROUTES;
  } catch { }

  // Fallback: parse the TS file as text
  // CRITICAL FIX: Use projectRoot instead of __dirname/../.. for correct path resolution
  const tsPath = path.join(projectRoot, '..', 'src', 'routes.config.ts');
  const parsed = parseRoutesArrayFromTS(tsPath, 'KNOWLEDGEBASE_ROUTES');
  const filtered = parsed
    .filter(r => r && r.category === 'v2' && r.key && r.title)
    .map(r => ({ key: r.key, title: r.title, description: r.description || r.title, subcategory: r.subcategory }));
  return filtered;
}

(async () => {
  // Supplements (v2)
  const v2 = await loadKnowledgebaseRoutes();
  if (v2.length === 0) {
    console.warn('[structured-data] No v2 routes found.');
  }
  for (const r of v2) {
    const jsonld = buildSupplementSchemas(r);
    fs.writeFileSync(path.join(outDir, `${r.key}.json`), JSON.stringify(jsonld, null, 2));
  }
  console.log('[structured-data] Wrote', v2.length, 'files to public/structured-data');

  // Glossary
  // Use the correct path to routes.config.ts
  const tsPath = path.join(projectRoot, 'src', 'routes.config.ts');
  const glossaryParsed = parseRoutesArrayFromTS(tsPath, 'GLOSSARY_ROUTES').filter(r => r.key && r.title);
  if (glossaryParsed.length) {
    for (const g of glossaryParsed) {
      const jsonld = buildGlossarySchemas({
        key: g.key,
        title: g.title,
        description: g.description || g.title,
        abbreviation: g.abbreviation
      });
      fs.writeFileSync(path.join(glossaryOutDir, `${g.key}.json`), JSON.stringify(jsonld, null, 2));
    }
    // Also write a DefinedTermSet index for the glossary
    const set = {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'Suppl.me Glossary',
      url: `${baseUrl()}/glossary`,
      hasDefinedTerm: glossaryParsed.map(g => ({
        '@type': 'DefinedTerm',
        name: g.title,
        url: `${baseUrl()}/glossary/${g.key}`
      }))
    };
    fs.writeFileSync(path.join(glossaryOutDir, `index.json`), JSON.stringify(set, null, 2));
    console.log('[structured-data] Wrote', glossaryParsed.length, 'glossary files and glossary index');
  } else {
    console.warn('[structured-data] No glossary routes parsed.');
  }
})();
