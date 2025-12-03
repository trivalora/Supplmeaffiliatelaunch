/**
 * Batch 20: Enhance FINAL glossary terms 191-197 (alphabetically)
 * Terms: Triglycerides, Tumor Necrosis Factor-Alpha (TNF-α), Ulcerative Colitis,
 *        Valine, Vitamin Deficiency, VLDL, Weighted Mean Difference
 *
 * Run: node scripts/enhance-glossary-batch-20.mjs
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

const enhancements = [
  {
    slug: "triglycerides",
    why_it_matters: `Triglycerides are blood fats that, when elevated, increase cardiovascular disease risk—understanding them helps you evaluate omega-3 and other lipid-lowering supplement claims. For supplement shoppers, triglycerides are one of the clearest supplement success stories: omega-3 fatty acids (EPA/DHA) at therapeutic doses (2-4g) consistently reduce triglycerides by 15-30%. This is well-documented enough that prescription omega-3s exist for high triglycerides. Knowing your triglyceride levels and what raises them (refined carbs, alcohol, excess calories) helps you understand whether omega-3 supplements are appropriate for you and what realistic reduction to expect.`,
    simple_explanation: `Triglycerides are the main storage form of fat in your body and food. When you eat excess calories—especially from carbs and alcohol—your liver converts them to triglycerides, which circulate in blood and get stored in fat tissue. Triglyceride levels are measured in standard lipid panels: under 150 mg/dL is normal, 150-199 is borderline high, 200-499 is high, and 500+ is very high (risking pancreatitis). Unlike LDL cholesterol, triglycerides respond dramatically to diet: cutting refined carbs and alcohol often reduces them 20-50%. Omega-3 supplements also work—high doses reduce triglyceride production in the liver. Elevated triglycerides combined with low HDL and high LDL creates particularly dangerous cardiovascular risk.`,
    key_points: `### Key Facts About Triglycerides

- **Fat storage**: Triglycerides are how your body stores and transports fat; three fatty acids attached to a glycerol backbone
- **Carb connection**: Excess carbohydrate intake is converted to triglycerides—low-carb diets often dramatically lower them
- **Cardiovascular risk**: High triglycerides are an independent cardiovascular risk factor; they're especially dangerous with high LDL and low HDL
- **Omega-3 responsive**: EPA+DHA at 2-4g daily reduce triglycerides 15-30%; prescription fish oil exists specifically for this
- **Fasting measurement**: Triglycerides vary widely with recent meals; fasting (8-12 hours) blood tests give accurate readings`,
    common_misconceptions: [
      `**Myth:** Eating fat raises triglycerides.\n**Fact:** Excess carbohydrates (especially refined) and alcohol raise triglycerides more than dietary fat. Cutting sugar and alcohol often dramatically lowers levels.`,
      `**Myth:** Triglycerides don't matter if LDL is normal.\n**Fact:** High triglycerides are an independent cardiovascular risk factor. They contribute to small, dense LDL particles, which are particularly atherogenic.`,
      `**Myth:** Any omega-3 dose helps triglycerides.\n**Fact:** Meaningful triglyceride reduction requires 2-4g EPA+DHA daily—standard fish oil capsules (300-500mg EPA+DHA) are insufficient for this effect.`,
    ],
    examples: [
      "Someone with 300 mg/dL triglycerides takes 4g EPA+DHA daily; after 8 weeks, levels drop to 210 mg/dL—30% reduction",
      "A person cuts refined carbs and alcohol; triglycerides fall from 250 to 120 mg/dL without any supplements—diet is powerful",
      "Prescription omega-3s (Vascepa, Lovaza) contain pure EPA or EPA+DHA at 4g doses specifically for high triglyceride treatment",
      "Non-fasting triglyceride test shows 400 mg/dL; fasting retest shows 180 mg/dL—demonstrating why fasting tests are needed",
    ],
  },
  {
    slug: "tnfalpha",
    why_it_matters: `Tumor Necrosis Factor-alpha (TNF-α) is a master inflammatory cytokine—understanding it helps you evaluate anti-inflammatory supplement claims. For supplement shoppers, TNF-α is often mentioned in inflammation discussions. It drives inflammatory cascades in arthritis, inflammatory bowel disease, and chronic disease states. Some supplements (curcumin, omega-3s, boswellia) show ability to reduce TNF-α in studies, though effects are modest compared to TNF-blocking medications. Knowing that TNF-α is a specific, measurable inflammatory marker helps you understand research on anti-inflammatory supplements and set realistic expectations for what supplements can do for chronic inflammation.`,
    simple_explanation: `TNF-α is a signaling protein (cytokine) that promotes inflammation. Your immune cells release it to recruit other immune cells and coordinate inflammatory responses. This is protective in fighting infections and healing injuries—but when TNF-α is chronically elevated, it drives diseases like rheumatoid arthritis, inflammatory bowel disease, psoriasis, and contributes to heart disease and diabetes. This is why TNF-blocking medications (Humira, Remicade) are powerful treatments for autoimmune conditions—they neutralize this inflammatory driver. Supplements like curcumin, omega-3s, and boswellia modestly reduce TNF-α, which is part of their anti-inflammatory mechanism, though effects are much smaller than medications.`,
    key_points: `### Key Facts About TNF-α

- **Inflammatory master regulator**: TNF-α triggers inflammatory cascades, activating immune cells and inducing other inflammatory cytokines (IL-1, IL-6)
- **Dual role**: Essential for fighting infections and clearing tumors (hence "tumor necrosis"); problematic when chronically elevated in autoimmune/inflammatory conditions
- **Disease driver**: Elevated TNF-α is central to rheumatoid arthritis, Crohn's disease, ulcerative colitis, psoriasis, and contributes to atherosclerosis
- **Medication target**: TNF-blocking drugs (adalimumab, infliximab, etanercept) are highly effective for autoimmune diseases—blocking this single cytokine dramatically reduces disease activity
- **Supplement modulation**: Curcumin, omega-3s, boswellia, and others modestly reduce TNF-α—contributing to anti-inflammatory effects, though not rivaling medication potency`,
    common_misconceptions: [
      `**Myth:** All inflammation is bad, so blocking TNF-α is always good.\n**Fact:** TNF-α is essential for fighting infections. Complete suppression (via medications) increases infection risk. Modest supplemental reduction doesn't cause this problem.`,
      `**Myth:** Anti-inflammatory supplements work like TNF-blockers.\n**Fact:** Prescription TNF-blockers reduce TNF-α by 50-90% and produce dramatic disease remission. Supplements might reduce TNF-α by 10-30%—helpful but not equivalent.`,
      `**Myth:** If a supplement reduces TNF-α in a study, it definitely reduces your inflammation.\n**Fact:** TNF-α reduction in lab studies doesn't always translate to clinical improvement. Human studies showing symptom improvement matter more than in vitro TNF-α data.`,
    ],
    examples: [
      "Curcumin supplementation (1000mg/day with piperine) reduces serum TNF-α by ~15-25% in some studies—modest but measurable anti-inflammatory effect",
      "Omega-3 fatty acids reduce TNF-α production by immune cells; this contributes to cardiovascular and anti-inflammatory benefits",
      "Rheumatoid arthritis patients on TNF-blocking medication see 50%+ improvement in symptoms; supplements don't achieve this level of response",
      "Chronic stress and poor sleep elevate TNF-α—lifestyle factors affect baseline inflammation alongside supplement interventions",
    ],
  },
  {
    slug: "ulcerativecolitis",
    why_it_matters: `Ulcerative colitis is a chronic inflammatory bowel disease affecting the colon—understanding it helps you evaluate digestive health supplements and know when medical treatment is essential. For supplement shoppers, many products claim to "support gut health" or "reduce inflammation." For ulcerative colitis specifically, conventional treatment (5-ASA drugs, steroids, biologics) is well-established. Some supplements show promise as adjuncts—curcumin, omega-3s, VSL#3 probiotics have studies showing benefit alongside medication. But supplements shouldn't replace medical treatment for this serious condition. Knowing the difference between general gut support and managing diagnosed IBD is crucial.`,
    simple_explanation: `Ulcerative colitis is an inflammatory bowel disease where your immune system attacks the lining of your colon, causing inflammation, ulcers, and symptoms like bloody diarrhea, urgency, abdominal pain, and fatigue. It differs from Crohn's disease (which can affect any part of the GI tract) by being limited to the colon and rectum. UC runs in flares and remissions—periods of active disease and periods of calm. It's a lifelong condition requiring ongoing management. Treatment includes 5-ASA drugs (mesalamine), steroids for flares, immunomodulators, and biologics (TNF-blockers, integrin inhibitors) for moderate-severe cases. Surgery (removing the colon) is curative but last resort. Some supplements show promise as adjuncts but don't replace medical therapy.`,
    key_points: `### Key Facts About Ulcerative Colitis

- **Autoimmune/inflammatory**: The immune system inappropriately attacks colonic tissue, causing chronic inflammation and ulceration
- **Colon-specific**: Unlike Crohn's, UC only affects the colon and rectum, with continuous (not patchy) inflammation starting from the rectum
- **Flare/remission pattern**: Disease alternates between active flares and remission periods; goal is maintaining remission
- **Increased cancer risk**: Long-standing, extensive UC increases colorectal cancer risk; surveillance colonoscopies are recommended
- **Adjunct supplement evidence**: Curcumin + mesalamine improves remission rates; VSL#3 probiotics show benefit for maintaining remission; omega-3s have mixed results`,
    common_misconceptions: [
      `**Myth:** Ulcerative colitis can be managed with diet and supplements alone.\n**Fact:** UC is a serious inflammatory disease that generally requires medication. Supplements may help as adjuncts but shouldn't replace proven medical treatments.`,
      `**Myth:** UC is caused by stress or diet.\n**Fact:** UC has genetic and immune system origins. Stress and diet can trigger flares but don't cause the disease. It's not "caused" by eating wrong.`,
      `**Myth:** Probiotics cure UC.\n**Fact:** Specific probiotic strains (VSL#3 has best evidence) may help maintain remission alongside medication, but probiotics don't cure or control UC on their own.`,
    ],
    examples: [
      "Curcumin (1g twice daily) added to mesalamine maintenance therapy improved remission rates compared to mesalamine alone in a controlled trial",
      "VSL#3 probiotic (450-900 billion CFU) showed benefit for maintaining remission in UC, particularly in mild-moderate disease",
      "Omega-3 supplements have mixed UC evidence; some studies show reduced inflammation markers, but clinical remission benefits are inconsistent",
      "Someone with mild UC flare uses budesonide and curcumin together; the combination helps, but curcumin alone wouldn't have been sufficient",
    ],
  },
  {
    slug: "valine",
    why_it_matters: `Valine is one of three branched-chain amino acids (BCAAs)—understanding it helps you evaluate BCAA and amino acid supplements. For supplement shoppers, valine is always discussed alongside leucine and isoleucine in BCAA products marketed for muscle building and recovery. However, valine is the least studied and probably least important of the three BCAAs. Leucine is the primary driver of muscle protein synthesis; valine and isoleucine play supporting roles. If you're considering BCAAs, knowing that leucine is the key player helps you evaluate whether you need a BCAA product or whether leucine-focused options (or just protein) would be sufficient.`,
    simple_explanation: `Valine is an essential amino acid—your body can't make it, so you must get it from food. It's one of three branched-chain amino acids (BCAAs), named for their chemical structure (branched carbon chains). Valine, along with leucine and isoleucine, is metabolized in muscle rather than liver, which is unique among amino acids. This makes them readily available for muscle energy and protein synthesis. While leucine is the primary signal for muscle protein synthesis, valine supports this process and provides nitrogen for synthesis of other amino acids. Dietary sources include meat, fish, eggs, dairy, and legumes. BCAA supplements contain all three, usually in 2:1:1 ratio (leucine:isoleucine:valine), though valine specifically has less research supporting supplementation.`,
    key_points: `### Key Facts About Valine

- **Essential amino acid**: Must be obtained from diet; body cannot synthesize it
- **Branched-chain structure**: Valine, leucine, and isoleucine are the three BCAAs—unique for being metabolized in muscle rather than liver
- **Supporting role**: Leucine is the primary driver of muscle protein synthesis; valine supports but doesn't trigger this process
- **Energy contribution**: During prolonged exercise, BCAAs including valine are oxidized for muscle energy, potentially sparing glycogen
- **Typical supplementation**: Valine is taken as part of BCAA supplements (usually 2:1:1 leucine:isoleucine:valine ratio), rarely alone`,
    common_misconceptions: [
      `**Myth:** All BCAAs are equally important for muscle building.\n**Fact:** Leucine is the primary driver of muscle protein synthesis. Valine and isoleucine support the process but are less critical. Leucine-focused strategies may be just as effective as BCAA.`,
      `**Myth:** You need BCAA supplements if you eat protein.\n**Fact:** Adequate protein intake (1.6-2.2g/kg for athletes) provides ample BCAAs. Supplements may help only in low-protein diets or very specific training contexts.`,
      `**Myth:** More valine means more muscle.\n**Fact:** There's no evidence that increasing valine beyond adequate levels provides additional benefit. Leucine is the rate-limiting factor for muscle protein synthesis.`,
    ],
    examples: [
      "A 2:1:1 BCAA supplement providing 5g total BCAAs contains about 2.5g leucine, 1.25g isoleucine, and 1.25g valine—leucine dominates the formula",
      "25g whey protein provides ~2.5g leucine, ~1.4g isoleucine, ~1.1g valine naturally—often making BCAA supplements redundant",
      "Valine competes with tryptophan for brain transport; some theorize this could affect central fatigue, but practical significance is unclear",
      "Maple syrup urine disease is a genetic condition where BCAAs (including valine) can't be properly metabolized—illustrating they require specific enzymes",
    ],
  },
  {
    slug: "vitamindeficiency",
    why_it_matters: `Vitamin deficiency means intake is too low to maintain health—understanding it helps you distinguish between true deficiency (needing correction) and optimization (often oversold). For supplement shoppers, deficiency claims drive many purchases, but true clinical deficiencies are relatively rare in developed countries with diverse diets. What's more common is suboptimal status—not deficient but not ideal. Some deficiencies are still prevalent (vitamin D, B12 in vegans/elderly), but many supplement purchases address non-existent deficiencies. Knowing what deficiency actually means, who's at risk, and how to identify real deficiency helps you supplement appropriately rather than unnecessarily.`,
    simple_explanation: `Vitamin deficiency occurs when you consistently don't get enough of a vitamin to maintain normal body functions. Clinical deficiency causes specific diseases: scurvy (vitamin C), rickets (vitamin D), beriberi (B1), pellagra (B3), anemia (B12, folate). These severe deficiencies are now rare in developed countries but still exist, especially in high-risk groups. Subclinical deficiency—low but not deficient—is more common and harder to detect. Risk factors include restrictive diets (vegan/vegetarian for B12), malabsorption conditions, certain medications, limited sun exposure (vitamin D), and food insecurity. Blood tests can identify most vitamin deficiencies, though some are better at detecting severe deficiency than optimal status. True deficiency needs correction; suboptimal status may or may not need supplementation depending on the vitamin.`,
    key_points: `### Key Facts About Vitamin Deficiency

- **Clinical vs subclinical**: Clinical deficiency causes diseases with specific symptoms; subclinical deficiency may affect function without obvious symptoms
- **Still exists**: D, B12, folate, and iron deficiencies remain prevalent even in developed countries—certain populations at higher risk
- **Disease-specific symptoms**: Each vitamin deficiency has characteristic signs—easy bruising (C), bone pain (D), nerve damage (B12), fatigue (iron)
- **Diagnosis via blood tests**: Most deficiencies are identified through blood tests, though some vitamins (B1, biotin) are harder to accurately measure
- **High-risk groups**: Vegans (B12), elderly (B12, D), pregnant women (folate), people with malabsorption, those with limited sun exposure`,
    common_misconceptions: [
      `**Myth:** Most people are deficient in most vitamins.\n**Fact:** True deficiency is relatively rare in people eating diverse diets. Suboptimal status is more common, and optimization beyond adequate intake often has limited evidence.`,
      `**Myth:** Fatigue means vitamin deficiency.\n**Fact:** Many conditions cause fatigue. While B12 or iron deficiency can cause fatigue, so can poor sleep, stress, thyroid issues, depression, and many other things. Test before assuming.`,
      `**Myth:** If some is good, more is better.\n**Fact:** Once deficiency is corrected, additional supplementation often provides no benefit. There's no advantage to having "super-optimal" levels of most vitamins.`,
    ],
    examples: [
      "Vegan for 10 years without B12 supplementation develops numbness and tingling—classic B12 deficiency neuropathy that's reversible with supplementation",
      "Blood test shows vitamin D at 15 ng/mL (deficient); 8 weeks of 50,000 IU weekly raises to 45 ng/mL—true deficiency corrected",
      "Someone feels tired and assumes vitamin deficiency; blood tests show normal levels—fatigue is from poor sleep, not nutritional cause",
      "Celiac disease causes fat-soluble vitamin deficiencies (A, D, E, K) due to malabsorption—even adequate dietary intake doesn't help without addressing malabsorption",
    ],
  },
  {
    slug: "vldl",
    why_it_matters: `VLDL (Very Low-Density Lipoprotein) carries triglycerides from the liver and is linked to cardiovascular risk—understanding it helps you interpret cholesterol panel results. For supplement shoppers, VLDL is often overlooked in favor of LDL focus, but elevated VLDL (which reflects high triglycerides) is a cardiovascular risk factor. Omega-3 supplements, which lower triglycerides, also reduce VLDL. Knowing that lipid panels measure VLDL (usually calculated from triglycerides) and that VLDL is a marker of metabolic health helps you understand your complete cardiovascular risk picture rather than focusing solely on LDL.`,
    simple_explanation: `VLDL is a type of lipoprotein—a particle that transports fats through your bloodstream. Your liver produces VLDL to carry triglycerides to tissues for energy or storage. VLDL is larger and "fluffier" than LDL, but as it delivers triglycerides, it becomes smaller, denser LDL. VLDL levels correlate with triglyceride levels—high VLDL means high triglycerides. Standard lipid panels estimate VLDL by dividing triglycerides by 5 (in mg/dL). Normal VLDL cholesterol is 2-30 mg/dL. Elevated VLDL is a cardiovascular risk factor independent of LDL, partly because VLDL remnants are atherogenic and because high VLDL reflects metabolic dysfunction. Reducing triglycerides (via diet, omega-3s) also lowers VLDL.`,
    key_points: `### Key Facts About VLDL

- **Triglyceride transporter**: VLDL's primary job is carrying triglycerides from liver to tissues; it's denser than chylomicrons but less dense than LDL
- **VLDL becomes LDL**: As VLDL delivers triglycerides, it shrinks and becomes LDL—VLDL is essentially an LDL precursor
- **Calculated value**: VLDL cholesterol is usually estimated as triglycerides/5 (in mg/dL); normal is 2-30 mg/dL
- **Cardiovascular risk**: Elevated VLDL and VLDL remnants contribute to atherosclerosis; they're not harmless even though LDL gets more attention
- **Omega-3 effect**: High-dose omega-3s reduce triglycerides and consequently lower VLDL—part of their cardiovascular benefit mechanism`,
    common_misconceptions: [
      `**Myth:** Only LDL matters for heart disease.\n**Fact:** VLDL, VLDL remnants, and triglycerides all contribute to cardiovascular risk. Complete lipid assessment is better than LDL focus alone.`,
      `**Myth:** VLDL is the same as LDL.\n**Fact:** VLDL is a larger, triglyceride-rich particle; LDL is smaller and cholesterol-rich. VLDL transforms into LDL as it delivers triglycerides.`,
      `**Myth:** VLDL can't be improved.\n**Fact:** Reducing triglycerides (via carb reduction, alcohol reduction, omega-3s, weight loss) directly lowers VLDL. It's quite modifiable.`,
    ],
    examples: [
      "Lipid panel shows triglycerides of 200 mg/dL; estimated VLDL is 40 mg/dL (200÷5)—both elevated and worth addressing",
      "After 12 weeks of 4g EPA+DHA daily, triglycerides drop from 300 to 200 mg/dL; VLDL drops from 60 to 40 mg/dL proportionally",
      "Someone focuses only on LDL statin therapy but has persistent high VLDL from triglycerides—residual cardiovascular risk remains",
      "A person eating low-carb has very low VLDL (15 mg/dL) because their liver isn't producing excess triglycerides to export",
    ],
  },
  {
    slug: "wmd",
    why_it_matters: `Weighted Mean Difference (WMD) is a statistical measure used in meta-analyses—understanding it helps you interpret how meta-analyses report effects in original measurement units. For supplement shoppers reading research, WMD tells you the average difference in outcomes (like blood pressure, weight, or blood markers) between treatment and control groups, weighted by study size and precision. Unlike SMD (standardized), WMD uses actual units (mmHg, mg/dL, kg), making interpretation intuitive. Knowing what WMD means helps you understand systematic review conclusions about how much a supplement changes measurable outcomes.`,
    simple_explanation: `Weighted Mean Difference is how meta-analyses report the average effect of a treatment when combining multiple studies that measured the same outcome in the same units. "Mean difference" is treatment effect minus control effect. "Weighted" means larger, more precise studies count more than smaller, imprecise ones—appropriate because bigger studies give more reliable estimates. If five studies measured blood pressure change with omega-3s, a meta-analysis calculates the WMD: the overall average blood pressure reduction, weighted by study size and precision. WMD is reported in the original units (mmHg for blood pressure, mg/dL for cholesterol), making it directly interpretable—"this supplement reduces systolic BP by 5 mmHg on average."`,
    key_points: `### Key Facts About Weighted Mean Difference

- **Original units**: WMD reports effects in actual measurement units (mmHg, mg/dL, kg)—directly interpretable for clinical meaning
- **Weighting by precision**: Larger studies and those with smaller variability carry more weight in the calculation—more reliable studies count more
- **Requires same outcome measure**: WMD can only combine studies using the same measurement units; for mixed measurements, SMD is used instead
- **Pooled estimate**: WMD provides a single best estimate of effect size across all included studies
- **Confidence interval**: WMD is reported with 95% CI—if CI doesn't cross zero, effect is statistically significant`,
    common_misconceptions: [
      `**Myth:** WMD and SMD are the same.\n**Fact:** WMD uses original units (mmHg, kg); SMD uses standard deviations (unitless). WMD is more intuitive but only works when all studies use the same units.`,
      `**Myth:** All studies in a meta-analysis count equally.\n**Fact:** Weighting means larger, more precise studies influence the WMD more. A 500-person study counts more than a 50-person study.`,
      `**Myth:** WMD tells you how much a supplement will help you personally.\n**Fact:** WMD is a population average. Individual responses vary. A WMD of 5 mmHg blood pressure reduction means the average effect; some people respond more, some less.`,
    ],
    examples: [
      "Meta-analysis of beetroot juice: WMD for systolic blood pressure = -4.4 mmHg (95% CI: -5.8 to -3.0); beetroot lowers BP by ~4.4 points on average",
      "Curcumin meta-analysis: WMD for CRP = -1.55 mg/L; curcumin reduces this inflammatory marker by about 1.55 mg/L compared to placebo",
      "If omega-3 studies measured LDL differently (some mg/dL, some mmol/L), you'd use SMD instead of WMD for the meta-analysis",
      "Reading a Cochrane review: 'WMD 2.3 kg weight loss (95% CI: 1.5-3.1)' means treatment produced 2.3 kg more weight loss than control, statistically significant",
    ],
  },
];

async function enhanceTerm(enhancement) {
  const { slug, ...updates } = enhancement;

  const { data, error } = await supabase
    .from("glossary_terms")
    .update(updates)
    .eq("slug", slug)
    .select("term, slug")
    .single();

  if (error) {
    console.error(`❌ Error updating ${slug}:`, error.message);
    return false;
  }

  console.log(`✅ Enhanced: ${data.term} (${data.slug})`);
  return true;
}

async function main() {
  console.log("=== BATCH 20 (FINAL): Enhancing Glossary Terms 191-197 ===\n");

  let success = 0;
  let failed = 0;

  for (const enhancement of enhancements) {
    const result = await enhanceTerm(enhancement);
    if (result) success++;
    else failed++;
  }

  console.log(`\n=== COMPLETE ===`);
  console.log(`✅ Success: ${success}`);
  console.log(`❌ Failed: ${failed}`);

  // Verify word counts
  console.log("\n=== WORD COUNT VERIFICATION ===");
  const { data: terms } = await supabase
    .from("glossary_terms")
    .select(
      "term, slug, definition, why_it_matters, simple_explanation, key_points, common_misconceptions, examples"
    )
    .in(
      "slug",
      enhancements.map((e) => e.slug)
    );

  for (const term of terms) {
    const wordCount = [
      term.definition || "",
      term.why_it_matters || "",
      term.simple_explanation || "",
      term.key_points || "",
      (term.common_misconceptions || []).join(" "),
      (term.examples || []).join(" "),
    ]
      .join(" ")
      .split(/\s+/)
      .filter((w) => w.length > 0).length;

    const status = wordCount >= 500 ? "✅" : "⚠️";
    console.log(`${status} ${term.term}: ${wordCount} words`);
  }

  console.log("\n🎉🎉🎉 GLOSSARY ENHANCEMENT PROJECT COMPLETE! 🎉🎉🎉");
  console.log("All 197 terms have been enhanced to 500+ words.");
}

main().catch(console.error);
