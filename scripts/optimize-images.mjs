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
const widths = [640, 1280, 1920];

function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function isImage(file) {
    return /\.(png|jpe?g)$/i.test(file);
}

async function processImage(filePath) {
    const rel = path.relative(sourceDir, filePath);
    const base = path.basename(rel).replace(/\.(png|jpe?g)$/i, '');
    const name = base; // keep original hashed base (no extension)

    const img = sharp(filePath, { failOn: 'none' });
    const meta = await img.metadata();

    const generated = { webp: [], avif: [] };

    for (const w of widths) {
        if (meta.width && meta.width < w) continue; // don’t upscale
        const webpOut = path.join(outDir, `${name}-${w}.webp`);
        const avifOut = path.join(outDir, `${name}-${w}.avif`);
        await img.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpOut);
        await img.clone().resize({ width: w, withoutEnlargement: true }).avif({ quality: 60 }).toFile(avifOut);
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
