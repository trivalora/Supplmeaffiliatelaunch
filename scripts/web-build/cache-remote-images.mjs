#!/usr/bin/env node
/**
 * cache-remote-images.mjs
 * Fetches remote product images (Amazon / Cloudinary iHerb) referenced in supplementProductsData.ts
 * Generates resized AVIF + WebP variants (240,360,480,640) using Sharp.
 * Writes them to public/optimized/remote/ as <hash>-<width>.<ext>
 * Emits manifest TypeScript file at src/optimized/remoteManifest.ts for SmartImage consumption.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const projectRoot = path.resolve(process.cwd());
const dataFile = path.join(projectRoot, 'src', 'utils', 'supplementProductsData.ts');
const outputDir = path.join(projectRoot, 'public', 'optimized', 'remote');
const manifestTs = path.join(projectRoot, 'src', 'optimized', 'remoteManifest.ts');

// Match SmartImage default widths: [240, 360, 480, 640]
const widths = process.env.WIDTHS ? process.env.WIDTHS.split(',').map(n => parseInt(n.trim(), 10)).filter(Boolean) : [240, 360, 480, 640];

async function main() {
    console.log('[cache-remote-images] Starting');
    if (!fs.existsSync(dataFile)) {
        console.error('Data file not found:', dataFile);
        process.exit(1);
    }
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    const optimizedSrcDir = path.dirname(manifestTs);
    if (!fs.existsSync(optimizedSrcDir)) fs.mkdirSync(optimizedSrcDir, { recursive: true });

    const content = fs.readFileSync(dataFile, 'utf8');

    // Load existing manifest (if present) to enable skip logic
    let existingManifest = {};
    if (fs.existsSync(manifestTs)) {
        try {
            const mfRaw = fs.readFileSync(manifestTs, 'utf8');
            const jsonMatch = mfRaw.match(/export const REMOTE_IMAGE_MANIFEST[^=]*= (\{[\s\S]*\});/);
            if (jsonMatch) {
                existingManifest = JSON.parse(jsonMatch[1]);
            }
        } catch (e) {
            console.warn('[cache-remote-images] Could not parse existing manifest:', e.message);
        }
    }

    // Extract only the image property values to avoid matching non-image Amazon links
    const imagePropRegex = /image\s*:\s*["'](https:\/\/(?:m\.media-amazon\.com|cloudinary\.images-iherb\.com)[^"']+\.(?:jpg|jpeg|png|webp))["']/g;
    const urls = new Set();
    let match;
    while ((match = imagePropRegex.exec(content))) {
        urls.add(match[1]);
    }
    console.log(`[cache-remote-images] Found URLs -> total: ${urls.size}, amazon: ${[...urls].filter(u => u.includes('m.media-amazon.com')).length}, cloudinary: ${[...urls].filter(u => u.includes('cloudinary.images-iherb.com')).length}`);

    const manifest = {};

    // Basic fetch with headers suitable for CDN endpoints
    const fetchWithHeaders = async (url, attempt = 1) => {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
                'Referer': 'https://suppl.me/'
            }
        });
        if ((res.status === 429 || res.status === 403) && attempt < 3) {
            const backoff = 300 * attempt;
            await new Promise(r => setTimeout(r, backoff));
            return fetchWithHeaders(url, attempt + 1);
        }
        return res;
    };

    for (const url of urls) {
        const hash = crypto.createHash('sha1').update(url).digest('hex').slice(0, 12);
        const already = existingManifest[url];
        // Determine if we can skip: existing entry with same hash (recompute ensures deterministic), all width/format files exist
        let canSkip = false;
        if (already && already.hash === hash) {
            const expectedFiles = [];
            for (const w of widths) {
                expectedFiles.push(path.join(outputDir, `${hash}-${w}.avif`));
                expectedFiles.push(path.join(outputDir, `${hash}-${w}.webp`));
            }
            canSkip = expectedFiles.every(f => fs.existsSync(f));
        }
        if (canSkip) {
            // Reuse existing manifest entry but update widths/formats if they changed
            manifest[url] = { hash, widths, formats: ['avif', 'webp'] };
            console.log(`  Skip (cached) ${url}`);
            continue;
        }
        console.log(`  Processing ${url} -> ${hash}`);
        try {
            const res = await fetchWithHeaders(url);
            if (!res.ok) {
                console.warn('   ! Failed fetch', res.status, url);
                continue;
            }
            const buffer = Buffer.from(await res.arrayBuffer());

            // For each width generate avif + webp
            for (const w of widths) {
                const base = `${hash}-${w}`;
                const avifOut = path.join(outputDir, `${base}.avif`);
                const webpOut = path.join(outputDir, `${base}.webp`);
                if (!fs.existsSync(avifOut)) {
                    await sharp(buffer).resize({ width: w }).avif({ quality: 45 }).toFile(avifOut);
                }
                if (!fs.existsSync(webpOut)) {
                    await sharp(buffer).resize({ width: w }).webp({ quality: 50 }).toFile(webpOut);
                }
            }

            manifest[url] = { hash, widths, formats: ['avif', 'webp'] };
        } catch (err) {
            console.error('   ! Error processing', url, err);
        }
    }

    const ts = `// Auto-generated by cache-remote-images.mjs
// Mapping of original remote URL to local optimized asset hash + widths
export const REMOTE_IMAGE_MANIFEST: Record<string, { hash: string; widths: number[]; formats: string[] }> = ${JSON.stringify(manifest, null, 2)};\n`;
    fs.writeFileSync(manifestTs, ts, 'utf8');
    const total = Object.keys(manifest).length;
    const skipped = Object.keys(existingManifest).filter(u => manifest[u]?.hash === existingManifest[u].hash).length;
    console.log(`[cache-remote-images] Done. Images in manifest: ${total} (skipped: ${skipped})`);
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
