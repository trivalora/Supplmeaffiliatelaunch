#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getSEOContent, getCleanSupplementName } from './seo-content-map.mjs';

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
  return process.env.VITE_CANONICAL_BASE_URL || process.env.SITE_BASE_URL || 'https://www.suppl.me';
}

function buildSupplementSchemas(route) {
  const prettyKey = route.key.replace(/v2$/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const pageUrl = `${baseUrl()}/${prettyKey}`;
  
  // Get SEO-optimized content
  const seoContent = getSEOContent(route.key);
  const supplementName = seoContent ? seoContent.name : getCleanSupplementName(route.key);
  const seoTitle = seoContent ? seoContent.title : route.title;
  const seoDescription = seoContent ? seoContent.description : route.description;
  const category = seoContent ? seoContent.category : (route.subcategory || 'Supplement');
  
  // Enhanced Product schema with more detail
  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${supplementName} - Scientific Evidence & Price Comparison`,
    description: seoDescription,
    category: category,
    brand: {
      '@type': 'Brand',
      name: 'suppl.me'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '5.00',
      highPrice: '150.00',
      offerCount: 50,
      availability: 'https://schema.org/InStock',
      url: pageUrl
    }
  };
  
  // Enhanced MedicalWebPage with audience and reviewedBy
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: seoTitle,
    description: seoDescription,
    about: {
      '@type': 'Thing',
      name: supplementName,
      description: seoDescription
    },
    url: pageUrl,
    lastReviewed: new Date().toISOString().split('T')[0],
    reviewedBy: {
      '@type': 'Organization',
      name: 'suppl.me Research Team'
    },
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient'
    },
    mainEntity: {
      '@type': 'Drug',
      name: supplementName,
      description: seoDescription,
      drugClass: 'Dietary Supplement'
    }
  };
  
  // Add Organization schema for brand
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'suppl.me',
    url: baseUrl(),
    logo: `${baseUrl()}/logo.png`,
    description: 'Evidence-based supplement information and price comparison'
  };
  
  return [product, medicalWebPage, organization];
}

function buildComparisonSchemas(route) {
  const slug = route.key;
  const pageUrl = `${baseUrl()}/${slug}`;
  const supplementName = route.title.replace(' Price Comparison | Best Deals at iHerb & Amazon', '');
  
  // ItemList schema for product comparison
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${supplementName} Products`,
    description: route.description,
    url: pageUrl,
    numberOfItems: 100,
    itemListElement: []
  };
  
  // CollectionPage for the comparison page
  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: route.title,
    description: route.description,
    url: pageUrl,
    about: {
      '@type': 'Thing',
      name: supplementName,
      description: `Price comparison and reviews for ${supplementName} supplements`
    },
    mainEntity: {
      '@type': 'ItemList',
      name: `${supplementName} Products`,
      description: `Comprehensive list of ${supplementName} supplements with prices and certifications`
    }
  };
  
  // WebSite with SearchAction
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'suppl.me',
    url: baseUrl(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl()}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
  
  return [itemList, collectionPage, website];
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
    if (mod && mod.KNOWLEDGEBASE_ROUTES) {
      // Filter for knowledgebase routes only
      const filtered = mod.KNOWLEDGEBASE_ROUTES
        .filter(r => r && r.category === 'knowledgebase' && r.key && r.title)
        .map(r => ({ key: r.key, title: r.title, description: r.description || r.title, subcategory: r.subcategory }));
      console.log(`[structured-data] Dynamic import loaded ${mod.KNOWLEDGEBASE_ROUTES.length} total, filtered to ${filtered.length} knowledgebase routes`);
      return filtered;
    }
  } catch { }

  // Fallback: parse the TS file as text
  // FIXED: Use correct path relative to projectRoot
  const tsPath = path.join(projectRoot, 'src', 'routes.config.ts');
  const parsed = parseRoutesArrayFromTS(tsPath, 'KNOWLEDGEBASE_ROUTES');
  console.log(`[structured-data] Parsed ${parsed.length} total routes from KNOWLEDGEBASE_ROUTES`);
  const filtered = parsed
    .filter(r => r && r.category === 'knowledgebase' && r.key && r.title)
    .map(r => ({ key: r.key, title: r.title, description: r.description || r.title, subcategory: r.subcategory }));
  console.log(`[structured-data] Filtered to ${filtered.length} knowledgebase routes`);
  return filtered;
}

(async () => {
  // Supplements (v2)
  const v2 = await loadKnowledgebaseRoutes();
  console.log(`[structured-data] Loaded ${v2.length} v2 routes`);
  if (v2.length === 0) {
    console.warn('[structured-data] No v2 routes found.');
  }
  // Debug: show first 3 routes
  if (v2.length > 0) {
    console.log('[structured-data] Sample routes:', v2.slice(0, 3).map(r => r.key));
  }
  for (const r of v2) {
    const jsonld = buildSupplementSchemas(r);
    // Use clean filename without v2 suffix
    const prettyKey = r.key.replace(/v2$/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    fs.writeFileSync(path.join(outDir, `${prettyKey}.json`), JSON.stringify(jsonld, null, 2));
  }
  console.log('[structured-data] Wrote', v2.length, 'files to public/structured-data');

  // Comparison pages (from KNOWLEDGEBASE_ROUTES with category === 'comparison')
  const tsPath = path.join(projectRoot, 'src', 'routes.config.ts');
  const comparisonParsed = parseRoutesArrayFromTS(tsPath, 'KNOWLEDGEBASE_ROUTES')
    .filter(r => r.key && r.title && r.category === 'comparison');
  
  if (comparisonParsed.length) {
    for (const c of comparisonParsed) {
      const jsonld = buildComparisonSchemas({
        key: c.key,
        title: c.title,
        description: c.description || c.title
      });
      // Keep original key for comparison pages (already clean)
      fs.writeFileSync(path.join(outDir, `${c.key}.json`), JSON.stringify(jsonld, null, 2));
    }
    console.log('[structured-data] Wrote', comparisonParsed.length, 'comparison page files');
  } else {
    console.warn('[structured-data] No comparison routes found.');
  }

  // Glossary
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
