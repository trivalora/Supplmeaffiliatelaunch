#!/usr/bin/env node

/**
 * Critical CSS Extraction Script
 *
 * Manually extracts critical above-the-fold CSS for inline injection
 * Target: <14KB for immediate render (header, hero, layout, typography)
 *
 * Usage: node scripts/extract-critical-css.mjs
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Critical CSS - Only what's needed for above-the-fold render
 * Priority order:
 * 1. CSS Variables (design tokens)
 * 2. Reset/Base styles (html, body)
 * 3. Header (fixed, visible immediately)
 * 4. Hero section (above fold on all pages)
 * 5. Typography (headings, body text)
 * 6. Layout utilities (container, flex, grid basics)
 */
const CRITICAL_CSS = `
/* === CSS VARIABLES (Design Tokens) === */
:root {
  /* Fluid Typography */
  --fluid-h1: clamp(2rem, 5vw + 1rem, 4rem);
  --fluid-h2: clamp(1.5rem, 3vw + 0.75rem, 2.5rem);
  --fluid-h3: clamp(1.125rem, 2vw + 0.5rem, 1.75rem);
  --fluid-body: clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem);
  
  /* Fluid Spacing */
  --space-sm: clamp(1rem, 2vw, 1.5rem);
  --space-md: clamp(1.5rem, 3vw, 2rem);
  --space-lg: clamp(2rem, 4vw, 3rem);
  --space-xl: clamp(3rem, 5vw, 4rem);
  
  /* Layout */
  --page-padding-inline: clamp(1.5rem, 3vw, 6rem);
  --page-padding-block: clamp(2rem, 4vh, 4rem);
  --header-height: 80px;
  
  /* Fonts */
  --font-heading: "Lora", serif;
  --font-body: "Lato", sans-serif;
  
  /* Colors */
  --color-primary-dark: #162f1c;
  --color-secondary: #e0cba8;
  --color-tertiary: #f5f8f6;
  --color-text: #2d2d2d;
  
  /* Header Colors */
  --header-bg: #162f1c;
  --header-text: #f7f7f3;
  --header-secondary: #e0cba8;
  --header-hover: #1e4028;
  
  /* Z-Index */
  --z-sticky: 100;
  --z-fixed: 1000;
  
  /* Border & Radius */
  --radius-md: 12px;
  --border-subtle: rgba(224, 203, 168, 0.3);
}

/* === BASE RESET === */
html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  font-size: var(--fluid-body);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-tertiary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* === TYPOGRAPHY (Above-Fold Only) === */
h1, h2, h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
}

h1 {
  font-size: var(--fluid-h1);
  margin-bottom: var(--space-md);
}

h2 {
  font-size: var(--fluid-h2);
  margin-bottom: var(--space-sm);
}

h3 {
  font-size: var(--fluid-h3);
}

/* === LAYOUT UTILITIES (Critical Only) === */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: var(--page-padding-inline);
}

/* === HEADER (Fixed, Always Visible) === */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--header-bg);
  color: var(--header-text);
  z-index: var(--z-fixed);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* === HERO SECTION (Above Fold) === */
.hero {
  padding-top: calc(var(--header-height) + var(--space-xl));
  padding-bottom: var(--space-xl);
  min-height: 60vh;
}

/* === UTILITY CLASSES (Critical Only) === */
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.hidden { display: none; }

/* Mobile: Show menu button, hide nav */
@media (max-width: 768px) {
  .md\\:flex { display: none !important; }
  .md\\:hidden { display: block !important; }
}

/* Desktop: Show nav, hide menu button */
@media (min-width: 769px) {
  .md\\:flex { display: flex !important; }
  .md\\:hidden { display: none !important; }
}
`;

async function extractCriticalCSS() {
  console.log("🎨 Extracting Critical CSS...\n");

  // Calculate size
  const cssSize = Buffer.byteLength(CRITICAL_CSS, "utf8");
  const MAX_SIZE = 14 * 1024; // 14KB

  console.log(
    `📊 Critical CSS Size: ${cssSize} bytes (${(cssSize / 1024).toFixed(2)} KB)`
  );

  if (cssSize > MAX_SIZE) {
    console.warn(
      `⚠️  Warning: Critical CSS exceeds 14KB limit (${(cssSize / 1024).toFixed(
        2
      )} KB)`
    );
    console.warn(`   Consider further optimization.`);
  } else {
    console.log(
      `✅ Critical CSS is within 14KB limit! (${Math.round(
        (cssSize / MAX_SIZE) * 100
      )}% of limit)`
    );
  }

  // Write to file
  const outputPath = path.join(__dirname, "../src/styles/critical.css");
  await fs.writeFile(outputPath, CRITICAL_CSS.trim());
  console.log(`\n💾 Saved to: src/styles/critical.css`);

  console.log(`\n📋 Critical CSS includes:`);
  console.log(`   ✅ CSS Variables (design tokens)`);
  console.log(`   ✅ Base reset (html, body)`);
  console.log(`   ✅ Typography (h1, h2, h3)`);
  console.log(`   ✅ Layout utilities (container, flex)`);
  console.log(`   ✅ Header (fixed, always visible)`);
  console.log(`   ✅ Hero section (above-fold)`);
  console.log(`   ✅ Responsive utilities (md:flex, md:hidden)`);

  return {
    size: cssSize,
    path: outputPath,
  };
}

// Run extraction
extractCriticalCSS()
  .then(({ size }) => {
    console.log("\n🎉 Critical CSS extraction complete!");
    console.log(`   Size: ${(size / 1024).toFixed(2)} KB / 14 KB`);
    console.log(`   Next Step: Inline this CSS in app/layout.tsx\n`);
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Critical CSS extraction failed:", error);
    process.exit(1);
  });
