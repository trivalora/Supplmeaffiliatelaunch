// Glossary DefinedTerm JSON-LD endpoint
// GET /api/structured-data/glossary?term=rct
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GLOSSARY_ROUTES } from '../../src/routes.config';
import { getPathForKey } from '../../src/utils/routePaths';
import { sendError, sendSuccess } from '../_lib/respond';

function findTerm(slug: string) {
  return GLOSSARY_ROUTES.find(r => r.key.toLowerCase() === slug.toLowerCase());
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const term = String(req.query.term || '').trim();
  if (!term) return sendError(res, 'Missing term parameter', 'MISSING_PARAM');
  const route = findTerm(term);
  if (!route) return sendError(res, `Unknown glossary term: ${term}`, 'NOT_FOUND', 404);

  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.VITE_CANONICAL_BASE_URL || 'https://suppl.me');
  const path = getPathForKey(route.key as any);
  const url = `${baseUrl.replace(/\/$/, '')}${path}`;
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: route.title,
    termCode: route.abbreviation || route.key,
    description: route.description,
    url,
    inDefinedTermSet: `${baseUrl.replace(/\/$/, '')}/glossary`
  };

  return sendSuccess(res, { term: route.key, jsonld }, { generatedAt: new Date().toISOString(), ttlSeconds: 86400 });
}
