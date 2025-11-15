#!/usr/bin/env node
/**
 * Bundle size reporter for Vite build output.
 *
 * Usage: npm run analyze
 * - Runs `vite build` then parses manifest and physical asset files.
 * - Outputs raw + gzip sizes sorted descending.
 */
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const projectRoot = process.cwd();
// Support custom outDir 'build' as configured in vite.config.ts
const primaryOutDir = path.join(projectRoot, 'build');
const fallbackOutDir = path.join(projectRoot, 'dist');
const distDir = fs.existsSync(primaryOutDir) ? primaryOutDir : fallbackOutDir;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB','MB','GB'];
  let i = -1;
  let v = bytes;
  do { v = v / 1024; i++; } while (v >= 1024 && i < units.length - 1);
  return `${v.toFixed(v < 10 ? 2 : 1)} ${units[i]}`;
}

function findManifest() {
  const candidates = [
    path.join(distDir, 'manifest.json'),
    path.join(distDir, '.vite', 'manifest.json')
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  console.error(`[analyze] No manifest.json found in ${distDir}. Did the build succeed with manifest: true?`);
  process.exit(1);
}

function collectAssets(manifestPath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const assets = [];
  // Vite manifest entries values may include file + css.
  for (const [entry, info] of Object.entries(manifest)) {
    const files = [];
    if (info.file) files.push(info.file);
    if (Array.isArray(info.css)) files.push(...info.css);
    if (Array.isArray(info.assets)) files.push(...info.assets);
    files.forEach(f => assets.push(f));
  }
  // Deduplicate
  return Array.from(new Set(assets));
}

function readAssetStats(assetRel) {
  const assetPath = path.join(distDir, assetRel);
  if (!fs.existsSync(assetPath)) return null;
  const content = fs.readFileSync(assetPath);
  const gzipSize = zlib.gzipSync(content).length;
  return {
    file: assetRel,
    raw: content.length,
    gzip: gzipSize,
    ext: path.extname(assetRel),
    isJS: assetRel.endsWith('.js'),
    isCSS: assetRel.endsWith('.css'),
    isMap: assetRel.endsWith('.map')
  };
}

function categorize(a) {
  if (a.isMap) return 'sourcemap';
  if (a.isCSS) return 'css';
  if (a.isJS) {
    if (/vendor|node_modules|react|radix|lucide|motion/i.test(a.file)) return 'vendor';
    return 'app';
  }
  return 'other';
}

function main() {
  const manifestPath = findManifest();
  const assets = collectAssets(manifestPath)
    .map(readAssetStats)
    .filter(Boolean);

  const table = assets.map(a => ({
    file: a.file,
    raw: a.raw,
    gzip: a.gzip,
    category: categorize(a)
  })).sort((a,b) => b.gzip - a.gzip);

  const totals = table.reduce((acc, a) => {
    acc.totalRaw += a.raw; acc.totalGzip += a.gzip; acc.categories[a.category] = (acc.categories[a.category] || 0) + a.gzip; return acc;
  }, { totalRaw: 0, totalGzip: 0, categories: {} });

  console.log('\n=== Bundle Size Report ===');
  console.log(`Manifest: ${path.relative(projectRoot, manifestPath)}`);
  console.log(`Total Raw: ${formatBytes(totals.totalRaw)} | Total Gzip: ${formatBytes(totals.totalGzip)}`);
  console.log('\nBy Category (gzip):');
  Object.entries(totals.categories).sort((a,b)=>b[1]-a[1]).forEach(([cat, size]) => {
    console.log(`  ${cat.padEnd(10)} ${formatBytes(size)}`);
  });

  console.log('\nAssets (sorted by gzip size):');
  const header = `${'Gzip'.padEnd(10)}${'Raw'.padEnd(10)}${'Type'.padEnd(10)}File`;
  console.log(header);
  console.log('-'.repeat(header.length));
  table.forEach(r => {
    const warn = r.gzip > 200 * 1024 ? ' ⚠️' : '';
    console.log(`${formatBytes(r.gzip).padEnd(10)}${formatBytes(r.raw).padEnd(10)}${r.category.padEnd(10)}${r.file}${warn}`);
  });

  const large = table.filter(r => r.gzip > 200 * 1024 && r.category === 'app');
  if (large.length) {
    console.log('\nSuggestions:');
    large.forEach(r => {
      console.log(` - ${r.file} is large (${formatBytes(r.gzip)}). Consider code-splitting, lazy loading, or moving shared deps to a vendor chunk.`);
    });
  } else {
    console.log('\nNo oversized application chunks (>200KB gzip).');
  }
  console.log('\n[analyze] Done.');
}

main();
