/**
 * Batch 7: Enhance glossary terms 61-70 (alphabetically)
 * Terms: Enterocytes, EPA, ESR, Essential Amino Acids, Faecalibacterium prausnitzii,
 *        Ferric Iron, Ferrous Iron, Fibrinogen, Flavonoids, Flow-Mediated Dilation
 *
 * Run: node scripts/enhance-glossary-batch-7.mjs
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
    slug: "enterocytes",
    why_it_matters: `Enterocytes are the gatekeepers of nutrient absorption—the specialized cells lining your small intestine that determine what gets into your body and what passes through. For supplement shoppers, understanding enterocytes is crucial because supplement absorption depends entirely on these cells functioning properly. Conditions that damage enterocytes (celiac disease, Crohn's, intestinal infections, NSAIDs) dramatically reduce absorption of even well-formulated supplements. Enterocyte health also explains why certain supplement forms work better than others—some bypass typical absorption pathways, while others require healthy enterocytes with adequate enzymes. If your gut is compromised, fixing enterocyte health may be more important than choosing premium supplements.`,
    simple_explanation: `Enterocytes are the absorptive cells lining your small intestine—imagine them as millions of tiny gatekeepers deciding what nutrients from your food and supplements get into your bloodstream. Each enterocyte has finger-like projections called microvilli (the "brush border") that massively increase surface area and contain enzymes for final digestion. When you take a vitamin, it must pass through an enterocyte to reach your blood. These cells aren't passive—they actively transport some nutrients, require carriers for others, and reject potential toxins. Enterocytes live fast and die young, completely replacing themselves every 3-5 days. This rapid turnover means gut health can improve quickly with proper nutrition, but also means ongoing damage (from inflammation, celiac, or irritants) constantly compromises absorption.`,
    key_points: `### Key Facts About Enterocytes

- **Rapid turnover**: Enterocytes completely replace themselves every 3-5 days—among the fastest-regenerating cells in your body, making them responsive to nutritional interventions
- **Brush border enzymes**: The microvilli contain enzymes (lactase, sucrase, peptidases) that complete final digestion—damage here causes malabsorption
- **Tight junctions**: Enterocytes connect via tight junctions that regulate intestinal permeability; dysfunction contributes to "leaky gut" and systemic inflammation
- **Active transport**: Many nutrients (amino acids, glucose, vitamins) require specific transporters in enterocytes—these can be saturated, explaining dose-dependent absorption limits
- **Zinc dependence**: Enterocyte health particularly depends on zinc; deficiency impairs intestinal barrier function and absorption capacity`,
    common_misconceptions: [
      `**Myth:** Supplement absorption is just about the supplement formula.\n**Fact:** Even the best-formulated supplement is only as good as your enterocytes. Gut inflammation, damage from celiac or Crohn's, or NSAID use can reduce absorption by 50% or more regardless of supplement quality.`,
      `**Myth:** "Leaky gut" is pseudoscience.\n**Fact:** Increased intestinal permeability (tight junction dysfunction between enterocytes) is well-documented in medical literature. What's debated is whether it causes systemic diseases or results from them. The phenomenon itself is real and measurable.`,
      `**Myth:** You can't improve enterocyte health through supplements.\n**Fact:** Glutamine, zinc, vitamin A, and butyrate (from fiber fermentation) all support enterocyte health and tight junction integrity. Addressing gut health can meaningfully improve nutrient absorption.`,
    ],
    examples: [
      "Someone with celiac disease has damaged enterocytes and may be deficient in iron, B12, folate, and vitamin D despite adequate dietary intake—the absorption machinery is broken",
      "Lactose intolerance results from enterocyte brush border enzymes lacking lactase—the cells exist but miss a specific digestive enzyme",
      "L-glutamine at 5-10g daily can support enterocyte health and tight junctions, often used during gut healing protocols",
      "Chronic NSAID use damages enterocytes and tight junctions, explaining why long-term ibuprofen users often develop nutrient deficiencies",
    ],
  },
  {
    slug: "epa",
    why_it_matters: `EPA (eicosapentaenoic acid) is one of the two main omega-3 fatty acids from fish oil, and understanding its distinct role helps supplement shoppers choose the right product. While DHA is structural (building brain and eye tissue), EPA is functional—it's the primary anti-inflammatory omega-3, competing with arachidonic acid to produce less inflammatory signaling molecules. For cardiovascular health, mood support, and managing inflammation, EPA-dominant formulas are often more effective than balanced or DHA-dominant ones. The landmark REDUCE-IT trial showed that high-dose pure EPA (4g/day) reduced cardiovascular events by 25%—a result not replicated with EPA+DHA combinations. Knowing EPA's specific benefits helps you match supplements to goals.`,
    simple_explanation: `EPA is an omega-3 fat found in fatty fish that your body uses mainly to reduce inflammation. Think of omega-3s and omega-6s as competing for the same machinery in your cells. When EPA is abundant, your cells make more anti-inflammatory messengers and fewer pro-inflammatory ones. This is different from DHA (the other main omega-3), which is more about building structure—especially in the brain and eyes. While both are beneficial, they have different strengths: EPA for dampening inflammation and supporting cardiovascular health; DHA for brain structure and neurological function. Most fish oil contains both, but ratios vary. If your goal is reducing inflammation (joint pain, cardiovascular protection, mood), an EPA-dominant product may work better than a generic fish oil.`,
    key_points: `### Key Facts About EPA

- **Anti-inflammatory primary**: EPA competes with arachidonic acid to produce less inflammatory eicosanoids (prostaglandins, leukotrienes)—this is its main mechanism
- **Cardiovascular powerhouse**: The REDUCE-IT trial showed 4g/day pure EPA (Vascepa) reduced major cardiovascular events by 25% in high-risk patients
- **Mental health evidence**: EPA, not DHA, shows more consistent benefits for depression in meta-analyses—EPA-dominant formulas are preferred for mood
- **Triglyceride reduction**: EPA effectively lowers triglycerides by 20-30% at doses of 2-4g daily; it also improves triglyceride-to-HDL ratios
- **Conversion from ALA**: The body can convert plant omega-3 (ALA) to EPA, but conversion is only 5-10%—preformed EPA from fish or algae is far more efficient`,
    common_misconceptions: [
      `**Myth:** All omega-3s are interchangeable—EPA and DHA do the same thing.\n**Fact:** EPA and DHA have distinct functions. EPA is primarily anti-inflammatory and cardiovascular-focused; DHA is structural, concentrated in the brain and retina. Products with different EPA:DHA ratios serve different purposes.`,
      `**Myth:** Higher total omega-3 dose is always better.\n**Fact:** For some outcomes (like triglyceride reduction), dose-response exists up to 4g/day. But for mood/depression, moderate doses of EPA specifically (1-2g) may be optimal. More isn't always better—the right omega-3 composition matters.`,
      `**Myth:** Plant-based omega-3s from flax or chia provide adequate EPA.\n**Fact:** ALA from plants converts to EPA at only 5-10% efficiency. To get 1g of EPA, you'd need 10-20g of ALA—impractical amounts. Algae-derived EPA is the effective vegetarian option.`,
    ],
    examples: [
      "Someone with high triglycerides takes 3g EPA daily and sees triglycerides drop from 300 to 180 mg/dL over 3 months—a clinically significant reduction",
      "A person with mild depression takes an EPA-dominant fish oil (1,200mg EPA, 200mg DHA) and notices mood improvement after 6-8 weeks",
      "An athlete with joint inflammation switches from generic fish oil to 2g pure EPA and experiences reduced post-workout soreness",
      "Prescription Vascepa (icosapent ethyl) is pure EPA used at 4g/day for cardiovascular risk reduction in statin-treated patients with elevated triglycerides",
    ],
  },
  {
    slug: "esr",
    why_it_matters: `ESR (erythrocyte sedimentation rate) is one of the oldest and cheapest tests for systemic inflammation, and for supplement shoppers interested in tracking inflammation, it provides a simple monitoring option. While less specific than newer markers like CRP or IL-6, ESR captures a different aspect of inflammation—particularly useful for autoimmune conditions and chronic infections where it may remain elevated even when CRP normalizes. Understanding ESR helps you interpret inflammation-related blood work and track whether anti-inflammatory supplements or lifestyle changes are actually working. It's not the most precise marker, but it's widely available, inexpensive, and provides useful trends over time.`,
    simple_explanation: `ESR measures how fast your red blood cells settle to the bottom of a test tube in one hour. Normally, red cells settle slowly because they repel each other. But when you have inflammation, your liver produces more proteins (like fibrinogen) that make red cells clump together and sink faster—like adding weight to a boat. Higher ESR means more inflammation somewhere in your body. It doesn't tell you WHERE the inflammation is—just that it exists. Think of it as a smoke detector: it tells you there's fire somewhere but not which room. ESR is slower to rise and fall than CRP, making it useful for tracking chronic inflammation over weeks and months rather than acute changes. It's affected by age and sex (women and older people have higher normal values), so interpretation requires context.`,
    key_points: `### Key Facts About ESR

- **Non-specific marker**: ESR indicates inflammation exists but doesn't identify the source—elevated in infections, autoimmune diseases, cancers, and many other conditions
- **Normal ranges**: Roughly 0-15 mm/hr for men under 50, 0-20 mm/hr for women under 50; values increase with age (add age/2 for men, (age+10)/2 for women)
- **Slow kinetics**: ESR rises and falls slowly (days to weeks), unlike CRP which changes within hours—better for chronic monitoring than acute assessment
- **Autoimmune utility**: ESR is particularly useful for tracking rheumatoid arthritis, lupus, and polymyalgia rheumatica where it correlates with disease activity
- **Affected by red cells**: Anemia, polycythemia, and abnormal red cell shapes affect ESR independent of inflammation—false readings possible`,
    common_misconceptions: [
      `**Myth:** ESR directly measures inflammation levels.\n**Fact:** ESR is an indirect measure—it detects proteins that increase during inflammation and make red cells settle faster. It's a proxy, not a direct inflammatory measurement like measuring cytokines.`,
      `**Myth:** A normal ESR means no inflammation.\n**Fact:** ESR can be normal in localized inflammation or early infection. Some inflammatory conditions don't elevate ESR. It's most useful for systemic, chronic inflammation—not ruling out all inflammation.`,
      `**Myth:** ESR is outdated and useless now that we have CRP.\n**Fact:** ESR and CRP measure different aspects of inflammation and can be complementary. ESR may remain elevated in conditions where CRP normalizes, especially in chronic autoimmune diseases. Both have clinical utility.`,
    ],
    examples: [
      "Someone with rheumatoid arthritis tracks ESR monthly—a rising ESR from 25 to 60 mm/hr suggests a disease flare, even before symptoms worsen",
      "A person taking curcumin for chronic inflammation sees ESR drop from 35 to 18 mm/hr over 3 months—objective evidence the supplement may be helping",
      "An 80-year-old woman has ESR of 30 mm/hr; this is normal for her age (upper limit ≈45), not necessarily indicating pathology",
      "ESR remains elevated at 55 mm/hr in a polymyalgia rheumatica patient even after CRP normalized—demonstrating ESR's slower kinetics",
    ],
  },
  {
    slug: "essentialaminoacids",
    why_it_matters: `Essential amino acids (EAAs) are the building blocks of protein that your body cannot make—you must consume them. For supplement shoppers, especially athletes and older adults, understanding EAAs is crucial because protein quality is defined by EAA content, and supplemental EAAs can stimulate muscle protein synthesis more efficiently than whole protein in some contexts. Not all protein sources are equal: animal proteins contain all EAAs in optimal ratios; most plant proteins are low in one or more (lysine, methionine). EAA supplements, particularly leucine-enriched formulas, can maximize muscle-building stimulus with fewer calories than equivalent protein doses—useful for anyone optimizing body composition.`,
    simple_explanation: `Your body needs 20 amino acids to build proteins, but it can only manufacture 11 of them internally. The other 9—the essential amino acids—must come from food or supplements. These nine are like irreplaceable parts in a factory: if even one is missing or too low, protein production slows down. This is called the "limiting amino acid" concept—your body can only build as much protein as the scarcest essential amino acid allows. Animal proteins (meat, eggs, dairy, fish) contain all 9 EAAs in roughly the right proportions. Most plant proteins are low in at least one (beans are low in methionine; grains are low in lysine), which is why vegetarians benefit from combining protein sources. For muscle building specifically, leucine is the key EAA that triggers protein synthesis.`,
    key_points: `### Key Facts About Essential Amino Acids

- **The nine essentials**: Histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine—must come from diet
- **Leucine is king**: Leucine triggers mTOR, the master switch for muscle protein synthesis; 2-3g leucine per meal optimally stimulates muscle building
- **Complete vs. incomplete**: Animal proteins are "complete" (contain all EAAs); most plant proteins are "incomplete" (low in one or more EAAs)
- **BCAAs are subset**: Branched-chain amino acids (leucine, isoleucine, valine) are three of the nine EAAs—popular for muscle but less effective alone than full EAA spectrum
- **Age-related needs**: Older adults need more leucine per meal (40-50g protein or 3g+ leucine) to overcome anabolic resistance and maintain muscle`,
    common_misconceptions: [
      `**Myth:** BCAA supplements are as effective as EAA supplements for muscle building.\n**Fact:** BCAAs alone provide only 3 of the 9 EAAs. Without all 9, the body can't build complete proteins. Studies show full EAA supplements stimulate muscle protein synthesis more than BCAAs alone.`,
      `**Myth:** If I eat enough total protein, I don't need to worry about individual amino acids.\n**Fact:** Protein quality matters. If your protein sources are low in one EAA (like lysine in wheat), that amino acid limits protein synthesis. Variety or strategic supplementation ensures complete EAA profiles.`,
      `**Myth:** Plant proteins can never match animal proteins for muscle building.\n**Fact:** Combining plant proteins (beans + rice, for example) or using plant EAA supplements can provide complete amino acid profiles. Higher total plant protein intake can compensate for lower quality.`,
    ],
    examples: [
      "An older adult takes 10g EAA supplement between meals to boost leucine intake to 3g+, overcoming age-related anabolic resistance",
      "A vegan athlete combines rice protein with pea protein to balance methionine (high in rice) with lysine (high in pea) for a complete profile",
      "Someone trying to build muscle while cutting calories uses 15g EAAs instead of 40g whey protein—similar muscle stimulus with fewer calories",
      "Eggs contain approximately 6.5g of complete protein with excellent EAA ratios, including 500mg leucine—a near-perfect natural amino acid source",
    ],
  },
  {
    slug: "faecalibacterium",
    why_it_matters: `Faecalibacterium prausnitzii is the most abundant beneficial bacterium in the healthy human gut and one of the most important butyrate producers. For supplement shoppers, understanding this species explains why fiber is so critical for gut health—and why no probiotic supplement currently contains it. F. prausnitzii is extremely oxygen-sensitive; it dies within minutes of air exposure, making it impossible to include in current probiotic formulations. Instead of trying to supplement it directly, you feed it with prebiotic fiber. Low F. prausnitzii levels are found in IBD, IBS, colorectal cancer, and metabolic diseases, making it a key marker of gut health that responds to dietary intervention rather than pills.`,
    simple_explanation: `Faecalibacterium prausnitzii (pronounced FEE-ka-lee-bak-TEER-ee-um prow-SNIT-zee-eye) is a superstar bacterium in your colon. It makes up 5-15% of your total gut bacteria when you're healthy, and it produces butyrate—the primary fuel for your colon cells and a powerful anti-inflammatory compound. When F. prausnitzii populations drop, inflammation tends to rise, and conditions like Crohn's disease, ulcerative colitis, and metabolic disorders become more likely. The catch: you can't buy F. prausnitzii in a probiotic because it dies immediately when exposed to oxygen. It's an "obligate anaerobe"—oxygen is toxic to it. So instead of swallowing it in a capsule, you cultivate it by eating what IT eats: fermentable fiber from vegetables, fruits, whole grains, and resistant starches. Feed your gut garden properly, and this beneficial species flourishes.`,
    key_points: `### Key Facts About Faecalibacterium prausnitzii

- **Abundance indicator**: Makes up 5-15% of gut bacteria in healthy individuals; low levels correlate with IBD, IBS, obesity, and metabolic syndrome
- **Butyrate producer**: One of the most important producers of butyrate, which feeds colonocytes, reduces inflammation, and strengthens the gut barrier
- **Oxygen intolerant**: An obligate anaerobe—dies within minutes of oxygen exposure, explaining why it's not in any current probiotic supplements
- **Fiber dependent**: Thrives on fermentable fiber, resistant starch, and prebiotics; declines on low-fiber, high-processed diets
- **Biomarker potential**: Low F. prausnitzii is being explored as a biomarker for inflammatory bowel disease risk and treatment response`,
    common_misconceptions: [
      `**Myth:** You can take F. prausnitzii as a probiotic supplement.\n**Fact:** No current commercial probiotic contains F. prausnitzii because it's extremely oxygen-sensitive and dies during manufacturing. Companies are developing specialized encapsulation, but nothing is available yet.`,
      `**Myth:** If F. prausnitzii is so important, low-fiber diets must be obviously harmful immediately.\n**Fact:** Effects are gradual. F. prausnitzii populations decline over weeks on low-fiber diets, slowly shifting gut ecology toward inflammation. Damage accumulates silently before symptoms appear.`,
      `**Myth:** All butyrate-producing bacteria are equivalent.\n**Fact:** Different species produce varying amounts of butyrate with different metabolic characteristics. F. prausnitzii is particularly important because of its abundance and strong anti-inflammatory properties beyond just butyrate production.`,
    ],
    examples: [
      "Someone with Crohn's disease has F. prausnitzii at 1% of gut bacteria (vs. 10% normal); targeted dietary intervention aims to restore populations",
      "A person starts eating 30-40g fiber daily from vegetables, beans, and whole grains; stool testing shows F. prausnitzii increases over 6-8 weeks",
      "Resistant starch from cooled potatoes or green bananas specifically feeds F. prausnitzii and other butyrate producers",
      "Researchers are developing oxygen-protected encapsulation technologies to create true F. prausnitzii probiotics—not commercially available yet",
    ],
  },
  {
    slug: "ferriciron",
    why_it_matters: `Ferric iron (Fe³⁺) is the oxidized form of iron found in most plant foods and many supplements, but it's NOT directly absorbable—it must be converted to ferrous iron first. For supplement shoppers, this distinction is crucial because not all iron supplements are equal. Ferric iron forms (like ferric pyrophosphate) are gentler on the stomach but less bioavailable. You're essentially paying for iron that your body has to work harder to absorb. Understanding ferric vs. ferrous helps you choose between tolerability and absorption based on your needs. If you struggle with iron supplement side effects, ferric forms might help; if absorption is your priority, ferrous forms are generally superior.`,
    simple_explanation: `Iron comes in two chemical forms: ferric (Fe³⁺, like a "full" iron that's given away 3 electrons) and ferrous (Fe²⁺, with only 2 electrons given away). Your intestines can only absorb ferrous iron—so any ferric iron you consume must be converted first. This conversion happens in your stomach with the help of acid and vitamin C. Think of ferric iron as locked iron that needs a key (reduction) to enter your body. Most plant foods contain ferric iron (called "non-heme iron"), which is why vegetarians often have lower iron absorption. Meat contains ferrous iron in hemoglobin form (already absorbable). Many gentle iron supplements use ferric forms to reduce stomach upset, but the trade-off is that less actually gets absorbed.`,
    key_points: `### Key Facts About Ferric Iron

- **Requires conversion**: Ferric iron (Fe³⁺) must be reduced to ferrous iron (Fe²⁺) before intestinal absorption—this requires stomach acid and reducing agents like vitamin C
- **Plant iron form**: Non-heme iron in plants is predominantly ferric; this partly explains the 2-5% absorption rate vs. 15-35% for meat-based iron
- **Supplement forms**: Ferric pyrophosphate and ferric citrate are gentler on stomachs but have lower bioavailability than ferrous sulfate or gluconate
- **Stomach acid dependency**: People with low stomach acid (elderly, PPI users) have particular difficulty absorbing ferric iron without vitamin C
- **Reduction enhancers**: Vitamin C (ascorbic acid) powerfully enhances ferric iron absorption by converting it to ferrous form in the stomach`,
    common_misconceptions: [
      `**Myth:** All iron supplements provide the same amount of absorbable iron.\n**Fact:** Ferric iron forms have significantly lower bioavailability than ferrous forms. A 100mg ferric iron supplement might deliver less absorbable iron than a 50mg ferrous iron supplement.`,
      `**Myth:** If a supplement causes fewer side effects, it must be better.\n**Fact:** Ferric iron supplements cause fewer GI side effects because less iron is being absorbed. Tolerability isn't efficacy—gentle supplements that aren't absorbed don't help iron deficiency.`,
      `**Myth:** Vegetarians absorb plant iron just as well as meat iron.\n**Fact:** Plant (ferric/non-heme) iron absorption is 2-5% vs. 15-35% for meat (heme) iron. Vegetarians often need 1.8x the RDA for iron to achieve the same absorbed amount.`,
    ],
    examples: [
      "Someone taking ferric pyrophosphate for iron deficiency sees minimal ferritin improvement; switching to ferrous sulfate with vitamin C significantly raises levels",
      "A vegetarian consumes 18mg plant iron daily but absorbs only 0.5-1mg; an omnivore eating 10mg (mostly from meat) absorbs 2-3mg",
      "Taking vitamin C (100-200mg) with plant foods or ferric iron supplements can increase absorption 2-6 fold by converting ferric to ferrous iron",
      "PPI (proton pump inhibitor) users often become iron deficient because reduced stomach acid impairs ferric-to-ferrous conversion",
    ],
  },
  {
    slug: "ferrousiron",
    why_it_matters: `Ferrous iron (Fe²⁺) is the bioavailable form of iron that your intestines can actually absorb, making it the most effective form for treating iron deficiency. For supplement shoppers, choosing ferrous iron supplements (ferrous sulfate, ferrous gluconate, ferrous fumarate) means choosing efficiency over comfort. These forms are well-absorbed but can cause GI side effects—constipation, nausea, stomach upset—because free iron in the gut is irritating. The key is finding the right balance: enough ferrous iron to correct deficiency without intolerable side effects. Strategies like alternate-day dosing, taking with vitamin C, and specific timing can maximize absorption while minimizing discomfort.`,
    simple_explanation: `Ferrous iron is iron in its "reduced" form (Fe²⁺)—the form your intestinal cells can directly absorb. Think of it as iron with the right key to unlock intestinal transporters. When you eat meat, the iron in hemoglobin is already ferrous (or rapidly becomes so), which is why meat iron is absorbed so efficiently (15-35%). Most iron supplements aim to deliver ferrous iron: ferrous sulfate, ferrous gluconate, and ferrous fumarate are all ferrous compounds with about 20-30% elemental iron. The downside? Ferrous iron is chemically reactive and can irritate your GI tract, causing the infamous iron supplement side effects: constipation, nausea, and stomach cramps. Interestingly, recent research shows that taking iron every OTHER day may work as well as daily—and with fewer side effects.`,
    key_points: `### Key Facts About Ferrous Iron

- **Directly absorbable**: Ferrous (Fe²⁺) iron is the form that intestinal DMT1 transporters recognize and absorb—no conversion needed
- **Common supplements**: Ferrous sulfate (~20% elemental), ferrous gluconate (~12% elemental), ferrous fumarate (~33% elemental)—percentage is actual iron content
- **Superior absorption**: 10-30% of ferrous iron is absorbed on an empty stomach, vs. 2-5% for ferric iron forms
- **Alternate-day dosing**: Recent research shows every-other-day dosing may be as effective as daily with fewer side effects due to hepcidin regulation
- **GI side effects**: Ferrous iron is reactive and causes constipation, nausea, and stomach upset in many people—the main drawback of effective iron supplements`,
    common_misconceptions: [
      `**Myth:** Taking more iron means absorbing more iron.\n**Fact:** Iron absorption is tightly regulated by hepcidin. High doses trigger hepcidin release, which blocks absorption for 24-48 hours. Alternate-day dosing of 50-100mg may work as well as higher daily doses.`,
      `**Myth:** Iron supplements should always be taken with food to reduce stomach upset.\n**Fact:** Food reduces iron absorption by 40-70%. If you can tolerate iron on an empty stomach (or with only vitamin C), absorption is significantly better. Finding the balance between tolerability and absorption is individual.`,
      `**Myth:** All ferrous iron supplements are equally absorbed.\n**Fact:** While ferrous sulfate, gluconate, and fumarate are all ferrous, they differ in elemental iron content and individual tolerability. Ferrous fumarate delivers more iron per pill; ferrous gluconate may be gentler for some people.`,
    ],
    examples: [
      "A woman with iron-deficiency anemia takes 325mg ferrous sulfate (65mg elemental iron) every other day with 200mg vitamin C; ferritin rises from 8 to 45 ng/mL in 3 months",
      "Someone experiences severe constipation on daily ferrous sulfate; switching to alternate-day dosing eliminates side effects while maintaining efficacy",
      "Taking ferrous iron with orange juice (vitamin C) enhances absorption by 30-50%; taking with coffee reduces absorption by 40%",
      "A patient on PPIs for acid reflux has poor response to ferrous sulfate because reduced stomach acid impairs iron dissolution and absorption",
    ],
  },
  {
    slug: "fibrinogen",
    why_it_matters: `Fibrinogen is a clotting protein that doubles as an inflammatory marker—elevated levels indicate both increased clotting risk and systemic inflammation. For supplement shoppers interested in cardiovascular health, fibrinogen provides information beyond standard cholesterol panels. High fibrinogen predicts heart attack and stroke risk even when LDL is normal, because it contributes to blood viscosity and plaque formation. Some supplements—particularly omega-3s, nattokinase, and niacin—have evidence for reducing fibrinogen levels. Understanding this marker helps you evaluate whether your cardiovascular interventions are working on multiple levels, not just lipids.`,
    simple_explanation: `Fibrinogen is a protein made by your liver that's essential for blood clotting. When you get a cut, fibrinogen gets converted to fibrin—the mesh that forms scabs and stops bleeding. But fibrinogen is also a marker of inflammation: when your body is inflamed, your liver produces more fibrinogen (it's an "acute phase reactant"). High fibrinogen means two bad things for your heart: (1) your blood is thicker and more prone to clotting, and (2) you have ongoing inflammation damaging your vessels. It's like your cardiovascular system is on high alert. Normal fibrinogen is 200-400 mg/dL; above 400 is associated with significantly increased heart attack and stroke risk. Unlike cholesterol, which gets all the attention, fibrinogen directly affects how "sticky" your blood is.`,
    key_points: `### Key Facts About Fibrinogen

- **Dual role**: Fibrinogen is essential for clotting AND a marker of inflammation—elevated levels indicate both increased clotting tendency and systemic inflammation
- **Cardiovascular predictor**: High fibrinogen (>400 mg/dL) is an independent risk factor for heart attack and stroke, even when cholesterol is normal
- **Blood viscosity**: Fibrinogen is the main determinant of blood viscosity/thickness—high levels mean thicker blood that flows more slowly
- **Acute phase reactant**: Levels rise during infection, inflammation, surgery, trauma—a single high reading might reflect temporary inflammation, not chronic elevation
- **Lifestyle responsive**: Exercise, fish oil, niacin, and weight loss can reduce fibrinogen; smoking and obesity raise it`,
    common_misconceptions: [
      `**Myth:** If cholesterol is normal, cardiovascular risk is low.\n**Fact:** Fibrinogen, CRP, homocysteine, and Lp(a) are independent cardiovascular risk factors. Someone with perfect cholesterol but fibrinogen of 500 mg/dL has significant risk that lipids alone don't reveal.`,
      `**Myth:** Blood thinners like aspirin reduce fibrinogen.\n**Fact:** Aspirin inhibits platelet aggregation but doesn't lower fibrinogen levels. They work on different parts of the clotting cascade. Fibrinogen reduction requires different interventions (omega-3s, niacin, fibrinolytic enzymes like nattokinase).`,
      `**Myth:** High fibrinogen means you definitely have blood clots.\n**Fact:** Elevated fibrinogen indicates increased RISK and tendency to clot, not existing clots. It's a risk factor that can be monitored and modified, not a diagnosis of thrombosis.`,
    ],
    examples: [
      "Someone with fibrinogen of 450 mg/dL starts 3g/day omega-3 fish oil; after 3 months, fibrinogen drops to 340 mg/dL—reducing clotting risk",
      "A smoker has fibrinogen of 500 mg/dL; quitting smoking alone can reduce fibrinogen by 10-15% over 6-12 months",
      "Nattokinase (2000 FU/day), an enzyme from fermented soy, has shown modest fibrinogen-lowering effects in some studies",
      "Post-surgical patients have temporarily elevated fibrinogen as part of normal healing—not the same as chronic elevation indicating cardiovascular risk",
    ],
  },
  {
    slug: "flavonoids",
    why_it_matters: `Flavonoids are the largest class of polyphenols, found abundantly in colorful plant foods, and responsible for many of the health benefits attributed to fruits, vegetables, tea, wine, and chocolate. For supplement shoppers, understanding flavonoids helps you navigate the crowded antioxidant market intelligently. Not all flavonoid supplements are equal—quercetin, hesperidin, and cocoa flavanols have meaningfully different effects and evidence bases. Some flavonoids are well-absorbed; others barely make it into your bloodstream. The science is clear that food-based flavonoids provide consistent health benefits; supplemental forms are more variable and should be chosen based on specific, evidence-backed applications rather than general "antioxidant" claims.`,
    simple_explanation: `Flavonoids are plant compounds that give fruits and vegetables their vibrant colors and provide many of their health benefits. They're the reason nutritionists say to "eat the rainbow"—each color represents different flavonoids with different effects. There are over 6,000 known flavonoids, grouped into subclasses: flavonols (quercetin in onions), flavanols (catechins in tea), flavanones (hesperidin in citrus), anthocyanins (blue/purple in berries), and isoflavones (in soy). Flavonoids work through multiple mechanisms: they're antioxidants, but they also reduce inflammation, improve blood vessel function, and interact with cell signaling pathways. The key insight is that isolated flavonoid supplements don't always replicate whole food benefits—the synergy of multiple flavonoids together often matters.`,
    key_points: `### Key Facts About Flavonoids

- **Six main subclasses**: Flavonols (quercetin), flavanols (catechins, EGCG), flavanones (hesperidin), flavones (apigenin), anthocyanins (berry pigments), isoflavones (soy)
- **Food sources beat supplements**: Population studies consistently show flavonoid-rich diets reduce cardiovascular and cancer risk; supplement trials are more mixed
- **Bioavailability varies**: Some flavonoids are well-absorbed (citrus flavanones); others have <5% absorption (quercetin, anthocyanins) and may work locally in the gut
- **Cocoa flavanols are special**: Dark chocolate/cocoa flavanols have the strongest cardiovascular evidence—COSMOS trial showed 27% reduction in cardiovascular death
- **Synergy matters**: Flavonoids work synergistically with each other and with other food compounds; isolated supplements may lose this matrix effect`,
    common_misconceptions: [
      `**Myth:** Flavonoids are just antioxidants—any antioxidant supplement is equivalent.\n**Fact:** Flavonoids have effects far beyond antioxidation: they modulate gene expression, improve endothelial function, reduce inflammation, and affect gut bacteria. These mechanisms explain health benefits that simple antioxidant activity doesn't.`,
      `**Myth:** Low bioavailability means flavonoids don't work.\n**Fact:** Many flavonoids are transformed by gut bacteria into bioactive metabolites, or exert local effects in the intestine even without significant absorption. Blood levels don't tell the whole story.`,
      `**Myth:** More is better with flavonoid supplements.\n**Fact:** Some flavonoids (like quercetin) can interfere with thyroid function or interact with medications at high supplemental doses. Amounts obtainable from food are safe; megadose supplements may not be.`,
    ],
    examples: [
      "Cocoa flavanols (200-500mg daily) have shown blood pressure reduction of 3-5 mmHg and improved endothelial function in clinical trials—strong cardiovascular evidence",
      "Quercetin (500-1000mg) is used for allergies based on mast cell stabilization; evidence is modest but some people report meaningful benefit",
      "Someone switching from low-flavonoid diet to berry-rich diet sees improvements in vascular function within weeks—whole food flavonoid effects",
      "Green tea catechins (EGCG) at 300-500mg have been studied for metabolism; effects are real but modest (maybe 100 calories/day extra burn)",
    ],
  },
  {
    slug: "fmd",
    why_it_matters: `Flow-mediated dilation (FMD) is the clinical gold standard for measuring endothelial function—how well your blood vessels relax and expand. For supplement shoppers interested in cardiovascular health, FMD is the most direct way to measure whether "blood flow" or "circulation" supplements actually work. Many supplements claim to improve vascular function, but FMD testing provides objective evidence. Studies show that cocoa flavanols, beetroot juice, and omega-3s genuinely improve FMD, while many other products marketed for circulation show no measurable effect. Understanding FMD helps you separate evidence-backed interventions from marketing claims.`,
    simple_explanation: `Flow-mediated dilation measures how well your arteries expand when blood flow increases. Here's how it works: a blood pressure cuff on your arm is inflated for 5 minutes, cutting off blood flow. When released, blood rushes back and the artery should dilate (expand) to accommodate the increased flow. An ultrasound measures how much the artery diameter increases—healthy arteries expand 7-10% or more; impaired endothelium shows less than 5% dilation. This test reveals endothelial function: the ability of blood vessel lining cells to produce nitric oxide and relax vessel walls. Poor FMD predicts future heart attacks and strokes, often years before they happen. It's like a stress test for your blood vessels rather than your heart.`,
    key_points: `### Key Facts About Flow-Mediated Dilation

- **Endothelial function test**: FMD specifically measures the endothelium's ability to produce nitric oxide and dilate arteries—the earliest detectable cardiovascular dysfunction
- **Cardiovascular predictor**: Each 1% decrease in FMD is associated with approximately 10-13% increased risk of cardiovascular events
- **Normal values**: Healthy FMD is typically 7-10%+ dilation; <5% suggests endothelial dysfunction; <3% indicates significant impairment
- **Rapidly responsive**: FMD changes within hours to weeks in response to diet, supplements, exercise, smoking, and stress—useful for tracking interventions
- **Not widely available**: FMD is primarily a research tool; most clinicians don't have access or training for routine FMD testing`,
    common_misconceptions: [
      `**Myth:** FMD testing is a standard part of cardiac checkups.\n**Fact:** FMD is primarily a research measure, not a routine clinical test. It requires specialized ultrasound equipment and trained technicians. Most cardiologists don't offer it, though some integrative medicine practices do.`,
      `**Myth:** Good FMD means your cardiovascular system is healthy.\n**Fact:** FMD measures one aspect—endothelial function. You can have good FMD and still have high cholesterol, high blood pressure, or other risk factors. It's an important piece, not the whole picture.`,
      `**Myth:** Any supplement claiming to improve blood flow will improve FMD.\n**Fact:** Many "circulation" supplements show no effect on FMD in controlled studies. Cocoa flavanols, beetroot juice/nitrates, and omega-3s have consistent FMD evidence; many others don't despite marketing claims.`,
    ],
    examples: [
      "Cocoa flavanols (400-900mg) improve FMD by 2-3% within 2 hours of consumption—acute and reproducible effect on endothelial function",
      "Beetroot juice providing 300-500mg nitrates increases FMD by 1-2% and lowers blood pressure 4-10 mmHg—nitric oxide pathway activation",
      "A smoker has FMD of 3%; quitting smoking improves FMD to 6% over 6 months as endothelium repairs",
      "Someone with type 2 diabetes has impaired FMD (4%); intensive lifestyle intervention (diet, exercise, weight loss) improves it to 7%",
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
  console.log("=== BATCH 7: Enhancing Glossary Terms 61-70 ===\n");

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
}

main().catch(console.error);
