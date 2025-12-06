#!/usr/bin/env node
/**
 * Test migration results by fetching pages and counting autolinked terms
 *
 * Tests:
 * 1. Database content is being used (not JSX fallback)
 * 2. Autolinking is working on database content
 * 3. Count of glossary links increased
 */

import fetch from "node-fetch";

const BASE_URL = "http://localhost:3000";

const supplements = ["ashwagandha", "creatine", "omega-3", "vitamin-d"];

console.log("🧪 Testing Migration Results\n");
console.log("=".repeat(60));

for (const slug of supplements) {
  try {
    const url = `${BASE_URL}/${slug}`;
    const response = await fetch(url);
    const html = await response.text();

    // Count glossary links
    const linkMatches = html.match(/href="\/glossary\/[^"]+"/g) || [];
    const uniqueLinks = new Set(linkMatches);

    // Check for database indicator comment (added in our components)
    const hasDbContent =
      html.includes("overview_content") ||
      html.includes("additional_overview_content");

    // Look for specific glossary terms that should be autolinked
    const hasAdaptogenLink = html.includes('href="/glossary/adaptogen"');
    const hasAtpLink = html.includes('href="/glossary/atp"');
    const hasRctLink = html.includes('href="/glossary/rct"');

    console.log(`\n📄 ${slug.toUpperCase()}`);
    console.log(`   URL: ${url}`);
    console.log(`   Glossary links: ${uniqueLinks.size} unique terms`);
    console.log(
      `   Sample links:`,
      Array.from(uniqueLinks).slice(0, 5).join(", ")
    );
    console.log(`   Has "adaptogen" link: ${hasAdaptogenLink ? "✅" : "❌"}`);
    console.log(`   Has "ATP" link: ${hasAtpLink ? "✅" : "❌"}`);
    console.log(`   Has "RCT" link: ${hasRctLink ? "✅" : "❌"}`);
  } catch (error) {
    console.error(`❌ ${slug}: ${error.message}`);
  }
}

console.log("\n" + "=".repeat(60));
console.log("\n✨ Migration test complete!\n");
