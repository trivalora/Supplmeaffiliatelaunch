#!/usr/bin/env node
/**
 * Image optimization pipeline using sharp.
 * - Scans src/assets for PNG/JPG
 * - Emits AVIF and WebP variants at multiple widths to public/optimized
 * - Writes a manifest for reference
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'src', 'assets');
const outDir = path.join(projectRoot, 'public', 'optimized');
// Include small sizes for icons/logos/thumbnails to avoid over-downloading on mobile
// Include 2560 for large desktop displays and full-width hero images
const widths = [48, 64, 96, 128, 256, 640, 1280, 1920, 2560];

function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function isImage(file) {
    return /\.(png|jpe?g)$/i.test(file);
}

// Logo hash to exclude from optimization (deliver original)
const LOGO_HASH = '7157caff66020adbe0e259d3e2f8312044fb4dd5';

// Hero image hashes that should be optimized even if upscaling required
const HERO_IMAGES = [
    'adaa5958638ef58a10a2b5b182d161d011abc01a', // Landing page hero
    'e5cf0235b0f882bf01162ab58a79301b0c1e2ebe', // Ashwagandha hero
    '9fbd70fb8a08832d09270e0c8c82b965dba78e14', // Vitamin C
    '4d2531edd86e143eba53b8d5876aeca2213a89ac', // Iron
    'fa234369467197e9b56f625112dd7dc3646b9390', // Magnesium
    '263c76911b591012bda0eb5ac65dfd4bdd80d41c', // Prebiotics
    '18c64e97e21456adcb24d0a8830ad3d468ea88a0', // Omega-3
    '1da3617add8298349943f08e186ec104f4d371b6', // Probiotics
    '1190aa29547438ef3022304f83675c1776b73eba', // Calcium
    'd9613b248b7739504ad488bcad08a8b825476e6d', // Curcumin
    '81ced6d15eb50ecd24f0f123cdb610ead8120fcb', // Multivitamin
    '629f0f2a4c5cd2a6e05360929c29e55faa21686e', // Collagen Peptides
    '4675dac44316999df50eb2a1005b9f75eef05c35', // Sulforaphane
    'b3917561a3bb6c6074bbc72f129209bf7ef30940', // Vitamin D
    '2c636f20bdcff7a630196b66f4ec7adb7e282afe', // Whey Protein
    '483f4770e75da46945f591fc87a26943caf5f1d1', // Casein Protein
    'c8cc68ad5913aaa59d2366606700691661101c3e', // BCAAs
    '8611a9337d5a61d564cf0a15cb51569ba3ba4b80', // Creatine
];

async function processImage(filePath) {
    const rel = path.relative(sourceDir, filePath);
    const base = path.basename(rel).replace(/\.(png|jpe?g)$/i, '');
    const name = base; // keep original hashed base (no extension)

    // Skip logo - it will be delivered as original file
    if (name === LOGO_HASH) {
        console.log(`[images] Skipping logo ${name} (will use original)`);
        return { name, generated: { webp: [], avif: [] } };
    }

    const isHero = HERO_IMAGES.includes(name);
    
    // Check if all expected files already exist (caching)
    const expectedFiles = [];
    for (const w of widths) {
        // For hero images, all widths; for others, only up to source width
        expectedFiles.push({ width: w, webp: path.join(outDir, `${name}-${w}.webp`), avif: path.join(outDir, `${name}-${w}.avif`) });
    }
    
    // Quick check: if first expected file exists, assume all exist (fast path)
    const allExist = expectedFiles.length > 0 && expectedFiles.every(f => fs.existsSync(f.webp) && fs.existsSync(f.avif));
    if (allExist) {
        console.log(`[images] Cached ${name} (${expectedFiles.length * 2} files)`);
        const generated = { webp: [], avif: [] };
        expectedFiles.forEach(f => {
            generated.webp.push(`${name}-${f.width}.webp`);
            generated.avif.push(`${name}-${f.width}.avif`);
        });
        return { name, generated };
    }

    const img = sharp(filePath, { failOn: 'none' });
    const meta = await img.metadata();

    const generated = { webp: [], avif: [] };

    for (const w of widths) {
        // Allow upscaling for hero images, prevent for others
        if (!isHero && meta.width && meta.width < w) continue;
        const webpOut = path.join(outDir, `${name}-${w}.webp`);
        const avifOut = path.join(outDir, `${name}-${w}.avif`);
        // Skip if files already exist
        if (fs.existsSync(webpOut) && fs.existsSync(avifOut)) {
            generated.webp.push(`${name}-${w}.webp`);
            generated.avif.push(`${name}-${w}.avif`);
            continue;
        }
        // Allow enlargement for hero images to ensure all sizes available
        await img.clone().resize({ width: w, withoutEnlargement: !isHero }).webp({ quality: 75 }).toFile(webpOut);
        await img.clone().resize({ width: w, withoutEnlargement: !isHero }).avif({ quality: 50 }).toFile(avifOut);
        generated.webp.push(`${name}-${w}.webp`);
        generated.avif.push(`${name}-${w}.avif`);
    }

    // Also generate a single medium fallback if no sizes applied
    if (generated.webp.length === 0) {
        const target = widths[Math.floor(widths.length / 2)];
        const webpOut = path.join(outDir, `${name}-${target}.webp`);
        const avifOut = path.join(outDir, `${name}-${target}.avif`);
        await img.clone().resize({ width: target, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpOut);
        await img.clone().resize({ width: target, withoutEnlargement: true }).avif({ quality: 60 }).toFile(avifOut);
        generated.webp.push(`${name}-${target}.webp`);
        generated.avif.push(`${name}-${target}.avif`);
    }

    return { name, generated };
}

async function main() {
    ensureDir(outDir);
    const manifest = {};
    if (!fs.existsSync(sourceDir)) {
        console.warn('[images] No src/assets directory; skipping optimization');
        return;
    }

    const files = fs.readdirSync(sourceDir).filter(isImage).map(f => path.join(sourceDir, f));
    for (const f of files) {
        try {
            const { name, generated } = await processImage(f);
            manifest[name] = generated;
            console.log(`[images] Optimized ${path.basename(f)} -> ${generated.webp.length + generated.avif.length} files`);
        } catch (e) {
            console.error('[images] Failed to process', f, e.message);
        }
    }
    fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`[images] Wrote manifest with ${Object.keys(manifest).length} entries`);
}

main();
