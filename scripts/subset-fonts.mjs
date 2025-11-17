#!/usr/bin/env node
/**
 * subset-fonts.mjs
 * Generates Latin subset WOFF2 versions of Lato Regular & Bold.
 */
import fs from 'node:fs';
import path from 'node:path';
import subsetFont from 'subset-font';

const fontsDir = path.join(process.cwd(), 'public', 'fonts');
const targets = [
    { file: 'Lato-Regular.ttf', weight: 400 },
    { file: 'Lato-Bold.ttf', weight: 700 }
];

// Build subset text covering Basic Latin (0x20-0x7E) and Latin-1 Supplement (0xA0-0xFF)
const basicLatin = Array.from({ length: 0x7F - 0x20 }, (_, i) => String.fromCharCode(i + 0x20)).join('');
const latin1 = Array.from({ length: 0xFF - 0xA0 + 1 }, (_, i) => String.fromCharCode(i + 0xA0)).join('');
const subsetText = basicLatin + latin1;

async function run() {
    console.log('[subset-fonts] Starting');
    for (const t of targets) {
        const fullPath = path.join(fontsDir, t.file);
        if (!fs.existsSync(fullPath)) {
            console.warn('[subset-fonts] Missing', t.file);
            continue;
        }
        const buffer = fs.readFileSync(fullPath);
        const resultBuffer = await subsetFont(buffer, subsetText, { targetFormat: 'woff2' });
        const outName = t.file.replace('.ttf', '-subset.woff2');
        fs.writeFileSync(path.join(fontsDir, outName), resultBuffer);
        console.log(`[subset-fonts] Wrote ${outName}`);
    }
    console.log('[subset-fonts] Done');
}

run().catch(e => {
    console.error(e);
    process.exit(1);
});
