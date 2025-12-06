#!/usr/bin/env node

/**
 * Extract knowledgebase content from TSX files for v0.7.0 migration
 *
 * This script:
 * 1. Reads all 17 supplement knowledgebase TSX files
 * 2. Extracts overviewContent and additionalOverviewContent text
 * 3. Strips JSX markup (p tags, span tags, className attributes)
 * 4. Generates SQL UPDATE statements for database migration
 *
 * Usage: node scripts/extract-knowledgebase-content.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// All supplement slugs (17 total)
const SUPPLEMENTS = [
  { slug: "ashwagandha", file: "Ashwagandha" },
  { slug: "bcaa", file: "Bcaa" },
  { slug: "calcium", file: "Calcium" },
  { slug: "casein-protein", file: "CaseinProtein" },
  { slug: "collagen", file: "Collagen" },
  { slug: "creatine", file: "Creatine" },
  { slug: "curcumin", file: "Curcumin" },
  { slug: "iron", file: "Iron" },
  { slug: "magnesium", file: "Magnesium" },
  { slug: "multivitamin", file: "Multivitamin" },
  { slug: "omega-3", file: "Omega3" },
  { slug: "prebiotics", file: "Prebiotics" },
  { slug: "probiotics", file: "Probiotics" },
  { slug: "sulforaphane", file: "Sulforaphane" },
  { slug: "vitamin-c", file: "VitaminC" },
  { slug: "vitamin-d", file: "VitaminD" },
  { slug: "whey-protein", file: "WheyProtein" },
];

/**
 * Extract text content from JSX markup
 * Handles: <p>text</p>, <span className="...">text</span>, nested elements, React fragments
 */
function extractTextFromJSX(jsxString) {
  if (!jsxString) return "";

  let text = jsxString;

  // Remove React fragments
  text = text.replace(/<>\s*/g, "").replace(/<\/>\s*/g, "");

  // Remove JSX event handlers and props (onClick, href, className, etc.)
  text = text.replace(/\w+\s*=\s*{[^}]*}/g, "");
  text = text.replace(/\w+\s*=\s*"[^"]*"/g, "");

  // Remove curly braces with string interpolation {" "}
  text = text.replace(/{[^}]*}/g, " ");

  // Remove HTML/JSX tags
  text = text.replace(/<[^>]+>/g, " ");
  text = text.replace(/<\/[^>]+>/g, " ");

  // Clean up whitespace
  text = text.replace(/\s+/g, " ").trim();

  return text;
}
/**
 * Extract overviewContent from TSX file using regex
 */
function extractOverviewContent(fileContent) {
  // Match: overviewContent: dbOverviewContent || ( ... ), or overviewContent: ( ... ),
  const match = fileContent.match(
    /overviewContent:\s*(?:dbOverviewContent\s*\|\|\s*)?\(([\s\S]*?)\),?\s*(?:dietarySources|additionalOverviewContent)/
  );
  if (!match) return null;

  const jsxContent = match[1].trim();
  return extractTextFromJSX(jsxContent);
}

/**
 * Extract additionalOverviewContent from TSX file using regex
 */
function extractAdditionalOverviewContent(fileContent) {
  // Match: additionalOverviewContent: dbAdditionalContent || ( ... ), or additionalOverviewContent: ( ... ),
  const match = fileContent.match(
    /additionalOverviewContent:\s*(?:dbAdditionalContent\s*\|\|\s*)?\(([\s\S]*?)\),?\s*(?:benefits|drawbacksIntro|$)/
  );
  if (!match) return null;

  const jsxContent = match[1].trim();
  return extractTextFromJSX(jsxContent);
}

/**
 * Escape single quotes for SQL
 */
function escapeSQLString(str) {
  if (!str) return "";
  return str.replace(/'/g, "''");
}

/**
 * Main extraction logic
 */
function main() {
  console.log("🔍 Extracting knowledgebase content from TSX files...\n");

  const results = [];
  const sqlStatements = [];
  let successCount = 0;
  let errorCount = 0;

  for (const supplement of SUPPLEMENTS) {
    const filePath = join(
      __dirname,
      "..",
      "src",
      "components",
      "pages",
      "supplements",
      `${supplement.file}KnowledgebasePage.tsx`
    );

    try {
      const fileContent = readFileSync(filePath, "utf-8");

      const overviewContent = extractOverviewContent(fileContent);
      const additionalOverviewContent =
        extractAdditionalOverviewContent(fileContent);

      if (!overviewContent && !additionalOverviewContent) {
        console.log(`⚠️  ${supplement.slug}: No content found`);
        errorCount++;
        continue;
      }

      results.push({
        slug: supplement.slug,
        overviewContent: overviewContent || null,
        additionalOverviewContent: additionalOverviewContent || null,
        overviewLength: overviewContent?.length || 0,
        additionalLength: additionalOverviewContent?.length || 0,
      });

      // Generate SQL UPDATE statement
      const sqlParts = [];
      if (overviewContent) {
        sqlParts.push(
          `overview_content = '${escapeSQLString(overviewContent)}'`
        );
      }
      if (additionalOverviewContent) {
        sqlParts.push(
          `additional_overview_content = '${escapeSQLString(
            additionalOverviewContent
          )}'`
        );
      }

      if (sqlParts.length > 0) {
        const sql = `-- ${
          supplement.slug
        }\nUPDATE api.supplements\nSET ${sqlParts.join(
          ",\n    "
        )}\nWHERE slug = '${supplement.slug}';\n`;
        sqlStatements.push(sql);

        console.log(
          `✅ ${supplement.slug}: ${overviewContent?.length || 0} + ${
            additionalOverviewContent?.length || 0
          } chars`
        );
        successCount++;
      }
    } catch (error) {
      console.error(`❌ ${supplement.slug}: ${error.message}`);
      errorCount++;
    }
  }

  // Write SQL file
  const outputPath = join(__dirname, "generated-content-migration.sql");
  const sqlContent = `-- Generated knowledgebase content migration SQL
-- Date: ${new Date().toISOString()}
-- Source: extract-knowledgebase-content.mjs
-- Total supplements: ${successCount}

BEGIN;

${sqlStatements.join("\n")}

COMMIT;

-- Validation query (run after migration)
-- SELECT slug, 
--        CASE WHEN overview_content IS NOT NULL THEN '✅' ELSE '❌' END as overview,
--        CASE WHEN additional_overview_content IS NOT NULL THEN '✅' ELSE '❌' END as additional,
--        length(overview_content) as overview_length,
--        length(additional_overview_content) as additional_length
-- FROM api.supplements 
-- WHERE slug IN (${SUPPLEMENTS.map((s) => `'${s.slug}'`).join(", ")})
-- ORDER BY slug;
`;

  writeFileSync(outputPath, sqlContent, "utf-8");

  // Write JSON report
  const reportPath = join(__dirname, "extraction-report.json");
  const report = {
    timestamp: new Date().toISOString(),
    totalSupplements: SUPPLEMENTS.length,
    successCount,
    errorCount,
    results: results.sort((a, b) => a.slug.localeCompare(b.slug)),
  };
  writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf-8");

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 EXTRACTION SUMMARY");
  console.log("=".repeat(60));
  console.log(`✅ Success: ${successCount}/${SUPPLEMENTS.length} supplements`);
  console.log(`❌ Errors: ${errorCount}/${SUPPLEMENTS.length} supplements`);
  console.log(`\n📄 SQL output: ${outputPath}`);
  console.log(`📄 JSON report: ${reportPath}`);
  console.log("\n📋 Next steps:");
  console.log("1. Review generated SQL file");
  console.log(
    "2. Test on dev database: psql $DEV_DATABASE_URL -f scripts/generated-content-migration.sql"
  );
  console.log("3. Verify in Supabase dashboard");
  console.log("4. Deploy via: npx supabase db push --linked\n");
}

// Run extraction
main();
