import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  { db: { schema: "api" } },
);

// Add expanded explanations for the 4 missing terms
const updates = [
  {
    slug: "fos",
    expanded_explanation: `Fructooligosaccharides are chains of fructose molecules linked together, typically containing 2-10 units. They occur naturally in many plants including onions, garlic, asparagus, and Jerusalem artichokes, where they serve as energy storage molecules.

As a prebiotic fiber, FOS resists digestion in the upper gastrointestinal tract and reaches the colon intact, where beneficial bacteria ferment it. This fermentation produces short-chain fatty acids (SCFAs) like butyrate, acetate, and propionate, which provide energy for colon cells and have anti-inflammatory effects.

FOS specifically promotes the growth of Bifidobacteria and Lactobacilli species while potentially reducing harmful bacteria populations. This selective fermentation is what defines FOS as a prebiotic - it feeds the good bacteria you want to cultivate.

The typical supplemental dose ranges from 2-10 grams daily, though some people experience digestive discomfort at higher doses. Starting with smaller amounts and gradually increasing allows your gut microbiome to adapt. FOS is often combined with inulin or other prebiotics for synergistic effects, and it's found in many prebiotic supplements and functional foods.

Unlike probiotics which add new bacteria, FOS provides food for your existing beneficial bacteria, helping them thrive and multiply. This makes FOS particularly useful when combined with probiotic supplements or as a standalone approach to supporting gut health through dietary means.`,
  },
  {
    slug: "halflife",
    expanded_explanation: `Half-life determines how long a substance remains active in your body and influences dosing frequency. A compound with a 4-hour half-life loses half its concentration every 4 hours, while one with a 24-hour half-life maintains therapeutic levels throughout the day with once-daily dosing.

Understanding half-life helps explain why some supplements require multiple daily doses (short half-life) while others work with single daily administration (long half-life). For example, immediate-release caffeine has a half-life of 3-7 hours, which is why afternoon coffee can affect sleep, but morning consumption typically clears by bedtime.

Half-life varies significantly between individuals based on factors like liver function, kidney function, age, genetics, and concurrent medications. Someone with impaired kidney function may have a longer half-life for supplements eliminated through urine, potentially requiring dose adjustments.

The concept of "steady state" occurs after taking a supplement regularly for about 5 half-lives - at this point, the amount you're taking each dose equals the amount being eliminated, creating a stable concentration. This is why some supplements take several days or weeks to show full effects.

For fat-soluble vitamins (A, D, E, K), half-life can extend to weeks or months because they're stored in body tissues rather than being quickly eliminated. This storage capability explains both why deficiency takes time to develop and why excessive intake can accumulate to toxic levels. Understanding half-life helps optimize supplement timing and explains why consistency matters more than perfect timing for many compounds.`,
  },
  {
    slug: "loadingphase",
    expanded_explanation: `A loading phase rapidly saturates tissue stores of a supplement, achieving therapeutic concentrations faster than standard dosing would allow. This front-loading approach is common with creatine, where taking 20 grams daily for 5-7 days fills muscle creatine stores within a week, compared to 3-4 weeks with standard 5-gram daily dosing.

The physiological basis for loading phases relates to how supplements distribute in body tissues. Compounds that accumulate in specific tissues (like creatine in muscle or vitamin D in fat) take time to reach optimal levels with standard dosing. Loading temporarily increases intake to accelerate this saturation process.

Not all supplements benefit from or require loading phases. Water-soluble vitamins like vitamin C and B-complex don't accumulate in tissues, so excess is simply excreted. However, compounds like creatine, beta-alanine, and sometimes vitamin D show faster results with initial loading.

Loading phases typically involve 2-4 times the maintenance dose for a period of 5-14 days, though exact protocols vary by supplement. The higher temporary dose is safe because it's short-term and followed by a lower maintenance dose. Some people skip loading phases entirely, accepting the longer timeline to reach full efficacy in exchange for avoiding the higher daily doses.

The main consideration with loading is gastrointestinal tolerance - higher doses of some supplements can cause digestive discomfort. Splitting the loading dose throughout the day often improves tolerance. For supplements like creatine, loading is optional but beneficial for those wanting faster results, such as athletes preparing for competition.`,
  },
  {
    slug: "maintenancedose",
    expanded_explanation: `A maintenance dose sustains the therapeutic levels achieved during initial supplementation or a loading phase. Once tissue stores are saturated or steady-state blood levels are reached, you can reduce to a lower daily amount that replaces what's naturally eliminated or used by the body.

The transition to maintenance dosing acknowledges that building up levels requires more supplement than maintaining them. For example, after loading creatine at 20 grams daily for a week, 3-5 grams daily maintains full muscle saturation. This maintenance amount matches the roughly 2 grams of creatine naturally degraded and excreted daily, plus the amount needed to keep muscles saturated.

Maintenance doses vary widely depending on the supplement, individual metabolism, body weight, activity level, and health status. Someone with higher muscle mass may require a higher creatine maintenance dose, while an athlete who sweats heavily might need more electrolytes than a sedentary person.

For some supplements, particularly those with long half-lives or extensive tissue storage, maintenance dosing can be less frequent than daily. Vitamin D, for instance, can be taken as a larger weekly dose rather than daily, due to its storage in fat tissue and long half-life of 2-3 weeks.

The concept of maintenance dosing also applies when managing deficiencies - initial therapeutic doses correct the deficiency, then lower maintenance doses prevent it from recurring. Iron supplementation often follows this pattern: higher doses restore depleted stores, then lower doses maintain adequate levels. Understanding the difference between corrective and maintenance dosing helps avoid taking unnecessarily high amounts long-term while ensuring you maintain optimal status.`,
  },
];

// Update GRADE term to include full phrase
const gradeUpdate = {
  slug: "grade",
  definition: `GRADE (Grading of Recommendations Assessment, Development and Evaluation) is a systematic approach for rating the quality (or certainty) of evidence and the strength of recommendations in healthcare and clinical practice. It provides a transparent framework for moving from evidence to recommendations, taking into account the balance of benefits and harms, patient values and preferences, and resource use.`,
};

console.log("Updating glossary terms...\n");

// Update the 4 terms with expanded explanations
for (const update of updates) {
  const { data, error } = await supabase
    .from("glossary_terms")
    .update({ expanded_explanation: update.expanded_explanation })
    .eq("slug", update.slug)
    .select();

  if (error) {
    console.error(`❌ Error updating ${update.slug}:`, error);
  } else {
    console.log(
      `✅ Updated ${update.slug} with expanded explanation (${update.expanded_explanation.length} chars)`,
    );
  }
}

// Update GRADE term definition to include full phrase
const { data: gradeData, error: gradeError } = await supabase
  .from("glossary_terms")
  .update({ definition: gradeUpdate.definition })
  .eq("slug", "grade")
  .select();

if (gradeError) {
  console.error(`❌ Error updating GRADE:`, gradeError);
} else {
  console.log(`✅ Updated GRADE definition to include full phrase`);
}

console.log("\n✅ All glossary term updates complete!");
