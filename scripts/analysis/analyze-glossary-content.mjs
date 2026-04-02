import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

async function analyze() {
  // Get all terms with content
  const { data: terms, error } = await supabase
    .from("glossary_terms")
    .select(
      "slug, term, definition, expanded_explanation, why_it_matters, simple_explanation, technical_explanation, real_world_context, examples, key_points, common_misconceptions",
    )
    .order("term");

  if (error) {
    console.error("Error fetching terms:", error);
    return;
  }

  // Analyze content length for each term
  const analysis = terms.map((t) => {
    const allContent = [
      t.definition,
      t.expanded_explanation,
      t.why_it_matters,
      t.simple_explanation,
      t.technical_explanation,
      t.real_world_context,
      t.key_points,
      ...(t.examples || []),
      ...(t.common_misconceptions || []),
    ]
      .filter(Boolean)
      .join(" ");

    const totalWords = allContent
      .split(/\s+/)
      .filter((w) => w.length > 0).length;

    return {
      slug: t.slug,
      term: t.term,
      words: totalWords,
      hasExpanded: !!t.expanded_explanation,
      hasWhyMatters: !!t.why_it_matters,
      hasSimple: !!t.simple_explanation,
      hasTechnical: !!t.technical_explanation,
      hasRealWorld: !!t.real_world_context,
      hasExamples: (t.examples || []).length > 0,
      hasKeyPoints: !!t.key_points,
      hasMisconceptions: (t.common_misconceptions || []).length > 0,
    };
  });

  // Summary stats
  const under300 = analysis.filter((a) => a.words < 300);
  const under500 = analysis.filter((a) => a.words < 500);
  const over500 = analysis.filter((a) => a.words >= 500);
  const over800 = analysis.filter((a) => a.words >= 800);

  console.log("=== GLOSSARY CONTENT ANALYSIS ===\n");
  console.log("Total terms:", analysis.length);
  console.log(
    "Under 300 words:",
    under300.length,
    `(${((under300.length / analysis.length) * 100).toFixed(1)}%)`,
  );
  console.log("300-499 words:", under500.length - under300.length);
  console.log("500-799 words:", over500.length - over800.length);
  console.log("800+ words:", over800.length);
  console.log("");

  // Content field coverage
  const hasExpanded = analysis.filter((a) => a.hasExpanded).length;
  const hasWhyMatters = analysis.filter((a) => a.hasWhyMatters).length;
  const hasSimple = analysis.filter((a) => a.hasSimple).length;
  const hasTechnical = analysis.filter((a) => a.hasTechnical).length;
  const hasRealWorld = analysis.filter((a) => a.hasRealWorld).length;
  const hasExamples = analysis.filter((a) => a.hasExamples).length;
  const hasKeyPoints = analysis.filter((a) => a.hasKeyPoints).length;
  const hasMisconceptions = analysis.filter((a) => a.hasMisconceptions).length;

  console.log("=== CONTENT FIELD COVERAGE ===\n");
  console.log(
    `expanded_explanation: ${hasExpanded}/${analysis.length} (${(
      (hasExpanded / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `why_it_matters: ${hasWhyMatters}/${analysis.length} (${(
      (hasWhyMatters / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `simple_explanation: ${hasSimple}/${analysis.length} (${(
      (hasSimple / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `technical_explanation: ${hasTechnical}/${analysis.length} (${(
      (hasTechnical / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `real_world_context: ${hasRealWorld}/${analysis.length} (${(
      (hasRealWorld / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `examples: ${hasExamples}/${analysis.length} (${(
      (hasExamples / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `key_points: ${hasKeyPoints}/${analysis.length} (${(
      (hasKeyPoints / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(
    `common_misconceptions: ${hasMisconceptions}/${analysis.length} (${(
      (hasMisconceptions / analysis.length) *
      100
    ).toFixed(1)}%)`,
  );
  console.log("");

  console.log("=== TERMS UNDER 300 WORDS (Need Most Work) ===\n");
  under300
    .sort((a, b) => a.words - b.words)
    .forEach((t) => {
      console.log(`  ${t.term}: ${t.words} words`);
    });
  console.log("");

  console.log("=== TOP 10 BEST POPULATED TERMS ===\n");
  analysis
    .sort((a, b) => b.words - a.words)
    .slice(0, 10)
    .forEach((t) => {
      console.log(`  ${t.term}: ${t.words} words`);
    });
  console.log("");

  // Output JSON for further processing
  console.log("=== SAVING ANALYSIS TO JSON ===");
  const fs = await import("fs");
  fs.writeFileSync(
    "scripts/glossary-analysis.json",
    JSON.stringify(
      {
        summary: {
          total: analysis.length,
          under300: under300.length,
          under500: under500.length,
          over500: over500.length,
          over800: over800.length,
        },
        fieldCoverage: {
          expanded_explanation: hasExpanded,
          why_it_matters: hasWhyMatters,
          simple_explanation: hasSimple,
          technical_explanation: hasTechnical,
          real_world_context: hasRealWorld,
          examples: hasExamples,
          key_points: hasKeyPoints,
          common_misconceptions: hasMisconceptions,
        },
        terms: analysis.sort((a, b) => a.words - b.words),
      },
      null,
      2,
    ),
  );
  console.log("Saved to scripts/glossary-analysis.json");
}

analyze().catch(console.error);
