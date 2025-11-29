/**
 * Migration Script: Migrate product-context-data.ts to Supabase
 *
 * This script reads the SUPPLEMENT_PRODUCT_CONTEXT data and generates
 * SQL UPDATE statements to populate the new columns in api.supplements
 *
 * Usage: npx tsx scripts/migration/migrate-supplement-content-to-db.mts
 */

import { SUPPLEMENT_PRODUCT_CONTEXT } from "../../src/lib/product-context-data";

// Helper to escape single quotes for SQL
function escapeSql(str: string | undefined | null): string {
  if (!str) return "NULL";
  return `'${str.replace(/'/g, "''")}'`;
}

// Helper to format array for PostgreSQL
function formatArray(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return "'{}'::text[]";
  const escaped = arr.map((s) => s.replace(/'/g, "''")).join("','");
  return `ARRAY['${escaped}']`;
}

// Helper to format JSONB
function formatJsonb(obj: object | undefined): string {
  if (!obj || Object.keys(obj).length === 0) return "'{}'::jsonb";
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
}

function generateMigrationSQL(): string {
  const statements: string[] = [];

  statements.push(
    `-- Auto-generated migration: Populate supplement content from product-context-data.ts`
  );
  statements.push(`-- Generated: ${new Date().toISOString()}`);
  statements.push(
    `-- Total supplements: ${Object.keys(SUPPLEMENT_PRODUCT_CONTEXT).length}`
  );
  statements.push("");
  statements.push("BEGIN;");
  statements.push("");

  for (const [key, data] of Object.entries(SUPPLEMENT_PRODUCT_CONTEXT)) {
    statements.push(`-- ===== ${data.name} (${data.slug}) =====`);

    const updateParts: string[] = [];

    // Core content
    if (data.quickOverview) {
      updateParts.push(`  quick_overview = ${escapeSql(data.quickOverview)}`);
    }
    if (data.extendedOverview) {
      updateParts.push(
        `  extended_overview = ${escapeSql(data.extendedOverview)}`
      );
    }
    if (data.scienceSnapshot) {
      updateParts.push(
        `  science_snapshot = ${escapeSql(data.scienceSnapshot)}`
      );
    }

    // Arrays
    if (data.keyBenefits && data.keyBenefits.length > 0) {
      updateParts.push(`  key_benefits = ${formatArray(data.keyBenefits)}`);
    }
    if (data.idealFor && data.idealFor.length > 0) {
      updateParts.push(`  ideal_for = ${formatArray(data.idealFor)}`);
    }
    if (data.timingTips && data.timingTips.length > 0) {
      updateParts.push(`  timing_tips = ${formatArray(data.timingTips)}`);
    }
    if (data.qualityMarkers && data.qualityMarkers.length > 0) {
      updateParts.push(
        `  quality_markers = ${formatArray(data.qualityMarkers)}`
      );
    }
    if (data.safetyConsiderations && data.safetyConsiderations.length > 0) {
      updateParts.push(
        `  safety_considerations = ${formatArray(data.safetyConsiderations)}`
      );
    }
    if (data.whatToExpectSummary && data.whatToExpectSummary.length > 0) {
      updateParts.push(
        `  what_to_expect_summary = ${formatArray(data.whatToExpectSummary)}`
      );
    }

    // Dosage
    if (data.typicalDosageRange) {
      updateParts.push(`  typical_dosage_min = ${data.typicalDosageRange.min}`);
      updateParts.push(`  typical_dosage_max = ${data.typicalDosageRange.max}`);
      updateParts.push(
        `  typical_dosage_unit = ${escapeSql(data.typicalDosageRange.unit)}`
      );
    }

    // JSONB fields
    if (data.formNotes && Object.keys(data.formNotes).length > 0) {
      updateParts.push(`  form_notes = ${formatJsonb(data.formNotes)}`);
    }
    if (data.whatToExpect) {
      updateParts.push(`  what_to_expect = ${formatJsonb(data.whatToExpect)}`);
    }

    // Synergy notes
    if (data.synergyNotes) {
      updateParts.push(`  synergy_notes = ${escapeSql(data.synergyNotes)}`);
    }

    if (updateParts.length > 0) {
      statements.push(`UPDATE api.supplements SET`);
      statements.push(updateParts.join(",\n"));
      statements.push(`WHERE slug = '${data.slug}';`);
      statements.push("");
    }
  }

  statements.push("COMMIT;");
  statements.push("");
  statements.push(
    `-- Migration complete: ${
      Object.keys(SUPPLEMENT_PRODUCT_CONTEXT).length
    } supplements updated`
  );

  return statements.join("\n");
}

// Generate and output the SQL
const sql = generateMigrationSQL();
console.log(sql);

// Also write to a file
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(
  __dirname,
  "../../supabase/migrations/20251129000002_seed_supplement_content.sql"
);
writeFileSync(outputPath, sql);
console.log(`\n\n✅ SQL written to: ${outputPath}`);
