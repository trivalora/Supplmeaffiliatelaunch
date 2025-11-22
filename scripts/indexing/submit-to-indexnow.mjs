#!/usr/bin/env node
/**
 * Submit URLs to IndexNow API for fast indexing
 * Works with Bing, Yandex, and other search engines
 */
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const keyFile = path.join(projectRoot, 'public', 'indexnow-key.txt');
const key = fs.readFileSync(keyFile, 'utf8').trim();

const baseUrl = process.env.VITE_CANONICAL_BASE_URL || 'https://www.suppl.me';

// Priority URLs to submit (top pages)
const priorityUrls = [
  '/',
  '/ashwagandha',
  '/omega-3',
  '/vitamin-d',
  '/magnesium',
  '/probiotics',
  '/creatine',
  '/vitamin-c',
  '/collagen',
  '/iron',
  '/curcumin',
  '/multivitamin',
  '/prebiotics',
  '/whey-protein',
  '/bcaa',
  '/calcium',
  '/casein-protein',
  '/zinc',
  '/knowledgebase',
  '/glossary',
  '/about'
];

async function submitToIndexNow(urls) {
  const payload = {
    host: 'www.suppl.me',
    key: key,
    keyLocation: `${baseUrl}/indexnow-key.txt`,
    urlList: urls.map(u => `${baseUrl}${u}`)
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`[IndexNow] Status: ${response.status}`);
    
    if (response.status === 200) {
      console.log(`✅ Successfully submitted ${urls.length} URLs to IndexNow`);
    } else if (response.status === 202) {
      console.log(`✅ URLs received and will be processed (${urls.length} URLs)`);
    } else {
      const text = await response.text().catch(() => '');
      console.log(`⚠️  Response: ${text || 'No response body'}`);
    }
  } catch (error) {
    console.error(`❌ IndexNow submission failed:`, error.message);
  }
}

console.log('[IndexNow] Submitting priority URLs...');
await submitToIndexNow(priorityUrls);
console.log('[IndexNow] Done!');
