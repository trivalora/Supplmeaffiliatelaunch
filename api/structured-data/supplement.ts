// Generates JSON-LD structured data for a supplement page.
// Endpoint: /api/structured-data/supplement?supplement=magnesiumv2
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { KNOWLEDGEBASE_ROUTES } from '../../src/routes.config';
import { sendError, sendSuccess } from '../_lib/respond';

interface JsonLd {
  '@context': 'https://schema.org';
  '@type': string;
  [k: string]: any;
}

function findSupplement(slug: string) {
  return KNOWLEDGEBASE_ROUTES.find(r => r.key.toLowerCase() === slug.toLowerCase());
}

function buildJsonLd(route: { key: string; title: string; description: string; subcategory?: string; }) : JsonLd[] {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://suppl.me';
  const pageUrl = `${baseUrl}/${route.key}`;
  const product: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: route.title,
    description: route.description,
    category: route.subcategory || 'Supplement',
    // Placeholder brand and offers; replace with dynamic retailer aggregation later.
    brand: { '@type': 'Brand', name: 'Generic' },
  };

  const medicalWebPage: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: route.title,
    description: route.description,
    about: route.title,
    url: pageUrl,
  };

  // AggregateOffer placeholder if route.key matches mock priced supplement
  if (route.key.startsWith('magnesium')) {
    product.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '14.99',
      highPrice: '21.50',
      offerCount: 2,
      offers: [
        { '@type': 'Offer', price: '14.99', priceCurrency: 'USD', url: `${pageUrl}#retailerA`, availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', price: '21.50', priceCurrency: 'USD', url: `${pageUrl}#retailerB`, availability: 'https://schema.org/InStock' },
      ]
    };
  }

  return [product, medicalWebPage];
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const slug = String(req.query.supplement || '').trim();
  if (!slug) return sendError(res, 'Missing supplement parameter', 'MISSING_PARAM', 400);

  const route = findSupplement(slug);
  if (!route) return sendError(res, `Unknown supplement slug: ${slug}`, 'NOT_FOUND', 404);

  const jsonld = buildJsonLd(route);
  return sendSuccess(res, { slug, jsonld }, { generatedAt: new Date().toISOString(), ttlSeconds: 3600 });
}
