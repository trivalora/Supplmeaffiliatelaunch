#!/usr/bin/env node
/**
 * Script to add structured data hook calls and SEOHead updates to remaining V2 pages
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const pages = [
  { file: 'IronPageNewV2.tsx', key: 'ironv2', name: 'Iron', path: '/iron', benefits: "['anemia prevention', 'energy production', 'oxygen transport', 'immune function', 'cognitive support']" },
  { file: 'MagnesiumPageNewV2.tsx', key: 'magnesiumv2', name: 'Magnesium', path: '/magnesium', benefits: "['muscle relaxation', 'sleep quality', 'bone health', 'energy production', 'blood pressure']" },
  { file: 'Omega3PageNewV2.tsx', key: 'omega3v2', name: 'Omega-3', path: '/omega-3', benefits: "['heart health', 'brain function', 'inflammation reduction', 'eye health', 'mood support']" },
  { file: 'PrebioticsPageNewV2.tsx', key: 'prebioticsv2', name: 'Prebiotics', path: '/prebiotics', benefits: "['gut health', 'microbiome support', 'digestive regularity', 'calcium absorption', 'immune function']" },
  { file: 'SulforaphanePageNewV2.tsx', key: 'sulforaphanev2', name: 'Sulforaphane', path: '/sulforaphane', benefits: "['antioxidant support', 'detoxification', 'cancer prevention', 'brain health', 'anti-inflammatory']" },
  { file: 'VitaminCPageNewV2.tsx', key: 'vitamincv2', name: 'Vitamin C', path: '/vitamin-c', benefits: "['immune support', 'collagen synthesis', 'antioxidant protection', 'iron absorption', 'wound healing']" },
  { file: 'VitaminDPageNewV2.tsx', key: 'vitamindv2', name: 'Vitamin D', path: '/vitamin-d', benefits: "['bone health', 'immune function', 'mood support', 'muscle strength', 'calcium absorption']" },
  { file: 'BCAAsPageNewV2.tsx', key: 'bcaasv2', name: 'BCAAs', path: '/bcaas', benefits: "['muscle recovery', 'reduced muscle soreness', 'protein synthesis', 'endurance', 'fatigue reduction']" },
  { file: 'CurcuminPageNewV2.tsx', key: 'curcuminv2', name: 'Curcumin', path: '/curcumin', benefits: "['anti-inflammatory', 'antioxidant', 'joint health', 'brain function', 'heart health']" },
  { file: 'MultivitaminPageNewV2.tsx', key: 'multivitaminv2', name: 'Multivitamin', path: '/multivitamin', benefits: "['nutrient coverage', 'energy support', 'immune function', 'overall health', 'convenience']" },
  { file: 'WheyProteinPageNewV2.tsx', key: 'wheyproteinv2', name: 'Whey Protein', path: '/whey-protein', benefits: "['muscle growth', 'post-workout recovery', 'protein synthesis', 'weight management', 'satiety']" },
  { file: 'CaseinProteinPageNewV2.tsx', key: 'caseinproteinv2', name: 'Casein Protein', path: '/casein-protein', benefits: "['slow-release protein', 'overnight recovery', 'muscle preservation', 'satiety', 'muscle growth']" }
];

for (const page of pages) {
  const filePath = path.join(projectRoot, 'src', 'components', page.file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add hook call after benefits line
  const benefitsPattern = new RegExp(`(const benefits = ${page.benefits.replace('[', '\\[').replace(']', '\\]')};)`);
  if (benefitsPattern.test(content) && !content.includes(`useStructuredData('${page.key}')`)) {
    content = content.replace(benefitsPattern, `$1\n  const structuredData = useStructuredData('${page.key}');`);
  }
  
  // Update SEOHead call
  const seoHeadPattern = new RegExp(`<SEOHead \\{\\.\\.\\.getSupplementSEO\\('${page.name}', benefits\\)\\} />`);
  if (seoHeadPattern.test(content)) {
    content = content.replace(seoHeadPattern, `<SEOHead {...getSupplementSEO('${page.name}', benefits, '${page.path}')} structuredData={structuredData} />`);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Updated ${page.file}`);
}

console.log('\n✅ All pages updated with structured data!');
