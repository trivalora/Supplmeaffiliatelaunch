#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { KNOWLEDGEBASE_ROUTES } from '../src/routes.config.ts';

// Pre-generate JSON-LD files for supplement pages for static inclusion / prefetch.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '../public/structured-data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function baseUrl() {
  return process.env.VITE_CANONICAL_BASE_URL || 'https://suppl.me';
}

function build(route) {
  const pageUrl = `${baseUrl()}/${route.key}`;
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

for (const r of KNOWLEDGEBASE_ROUTES.filter(r => r.category === 'v2')) {
  const jsonld = build(r);
  fs.writeFileSync(path.join(outDir, `${r.key}.json`), JSON.stringify(jsonld, null, 2));
}

console.log('Structured data build complete');
