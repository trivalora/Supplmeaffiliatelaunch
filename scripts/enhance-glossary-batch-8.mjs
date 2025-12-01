/**
 * Batch 8: Enhance glossary terms 71-80 (alphabetically)
 * Terms: FODMAP, Folic Acid, Free Radicals, FOS, GOS,
 *        Glucagon, GLP-1, Glucose Metabolism, Glutathione, Glutathione Peroxidase
 *
 * Run: node scripts/enhance-glossary-batch-8.mjs
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
    slug: "fodmap",
    why_it_matters: `FODMAPs are a game-changer for anyone with IBS or chronic digestive issues—understanding them can transform quality of life. For supplement shoppers, FODMAPs matter because many supplements contain high-FODMAP ingredients that can trigger symptoms: inulin, chicory root fiber, sugar alcohols (sorbitol, mannitol, xylitol), fructose-based sweeteners, and even some probiotic prebiotics. A "gut health" supplement loaded with inulin might actually worsen symptoms for FODMAP-sensitive individuals. Knowing which ingredients to avoid—and recognizing that prebiotic supplements aren't one-size-fits-all—helps you choose products that support rather than sabotage your digestion.`,
    simple_explanation: `FODMAP stands for Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols—basically, specific types of carbohydrates that some people can't digest well. When these compounds reach your large intestine undigested, bacteria ferment them rapidly, producing gas. They also draw water into the intestine. The result: bloating, gas, cramping, diarrhea, or constipation. Common high-FODMAP foods include onions, garlic, wheat, apples, and dairy (lactose). About 70% of IBS sufferers improve significantly on a low-FODMAP diet. The tricky part is that sensitivity is individual—one person might tolerate garlic but not apples, while another is the opposite. A structured elimination and reintroduction process identifies personal triggers.`,
    key_points: `### Key Facts About FODMAPs

- **The FODMAP categories**: Oligosaccharides (fructans in wheat, GOS in beans), Disaccharides (lactose), Monosaccharides (excess fructose), Polyols (sugar alcohols)
- **IBS connection**: The low-FODMAP diet has the strongest evidence of any dietary intervention for IBS—about 70% of patients experience significant improvement
- **Temporary elimination**: Low-FODMAP isn't meant to be permanent; it's a 2-6 week elimination followed by systematic reintroduction to identify personal triggers
- **Gut microbiome effects**: Long-term strict FODMAP restriction can reduce beneficial Bifidobacteria (they eat FODMAPs)—why reintroduction is important
- **Supplement ingredients to watch**: Inulin, chicory root, FOS, sugar alcohols, and high-lactose ingredients can trigger symptoms in sensitive individuals`,
    common_misconceptions: [
      `**Myth:** FODMAPs are bad for everyone.\n**Fact:** FODMAPs are only problematic for people with specific digestive sensitivities (mainly IBS). For most people, FODMAPs are beneficial prebiotics that feed healthy gut bacteria. Healthy individuals shouldn't avoid FODMAPs.`,
      `**Myth:** Low-FODMAP means gluten-free.\n**Fact:** Wheat is restricted on low-FODMAP due to fructans (a carbohydrate), not gluten (a protein). Some gluten-containing foods are low-FODMAP; some gluten-free foods are high-FODMAP. They're separate concepts.`,
      `**Myth:** If a food is high-FODMAP, I can never eat it again.\n**Fact:** FODMAP tolerance is dose-dependent and individual. Most people can tolerate moderate amounts of their trigger foods. The goal is finding YOUR threshold, not permanent elimination of all high-FODMAP foods.`,
    ],
    examples: [
      "A person with IBS takes an inulin-based prebiotic supplement and experiences severe bloating—switching to a low-FODMAP prebiotic like partially hydrolyzed guar gum resolves symptoms",
      "Someone notices sugar-free gum (containing sorbitol and mannitol) triggers digestive issues—sugar alcohols are polyols, a FODMAP category",
      "A low-FODMAP elimination diet identifies garlic and onion as primary triggers; the person can still eat moderate amounts of tomatoes and berries (low-FODMAP)",
      "Lactose-free dairy is low-FODMAP because the problematic sugar (lactose) has been pre-digested—same nutrition without the digestive trigger",
    ],
  },
  {
    slug: "folicacid",
    why_it_matters: `Folic acid is one of the most important prenatal supplements—preventing neural tube defects—but its synthetic nature creates important considerations for supplement shoppers. About 40% of the population has MTHFR gene variants that impair conversion of folic acid to its active form (methylfolate). For these individuals, folic acid can accumulate unconverted in the blood, potentially causing problems while providing less actual benefit. This has driven interest in methylfolate (5-MTHF) supplements that bypass the conversion bottleneck. Understanding the difference between folic acid and methylfolate helps you choose the most effective form for your genetics—especially critical during pregnancy.`,
    simple_explanation: `Folic acid is the synthetic version of folate (vitamin B9) used in supplements and fortified foods. Your body can't use folic acid directly—it must convert it to methylfolate through several enzymatic steps. The first step requires an enzyme called DHFR, which works slowly in humans. About 40% of people also have variants in the MTHFR gene that further slow the final conversion step. Think of folic acid as a locked-up form of the vitamin that requires your body to have the right keys (enzymes) to unlock it. For people with normal enzyme function, this works fine. For those with MTHFR variants, folic acid may accumulate while the body remains functionally deficient in usable folate. Methylfolate supplements skip these conversion steps entirely.`,
    key_points: `### Key Facts About Folic Acid

- **Synthetic vs. natural**: Folic acid is synthetic (supplements, fortified foods); folate is natural (leafy greens, legumes); methylfolate is the active, usable form
- **MTHFR variants**: About 40% of people have MTHFR C677T or A1298C variants that reduce conversion of folic acid to methylfolate by 20-70%
- **Pregnancy critical**: 400-800mcg folic acid (or methylfolate) before and during early pregnancy reduces neural tube defects by 50-70%—one of the most proven supplement benefits
- **Unmetabolized folic acid**: High-dose folic acid can accumulate unconverted in blood; some research (controversial) suggests this may have negative effects
- **Methylfolate alternative**: 5-MTHF (methylfolate) supplements bypass conversion issues and may be preferred for MTHFR carriers and those with absorption concerns`,
    common_misconceptions: [
      `**Myth:** Folic acid and folate are exactly the same thing.\n**Fact:** Folic acid is synthetic and requires enzymatic conversion; folate is the natural form in foods; methylfolate is the active form cells use. These distinctions matter for people with genetic variants affecting conversion.`,
      `**Myth:** If you have an MTHFR variant, you can't use any folic acid.\n**Fact:** Even with MTHFR variants, some conversion still occurs. Many people with variants do fine on folic acid. Methylfolate may be preferable, but MTHFR isn't an absolute contraindication to folic acid.`,
      `**Myth:** Taking more folic acid is always better for pregnancy.\n**Fact:** Doses above 1mg (1000mcg) may be excessive and counterproductive, especially for MTHFR carriers. The recommended 400-800mcg provides neural tube protection without potential downsides of mega-dosing.`,
    ],
    examples: [
      "A woman planning pregnancy with known MTHFR C677T variant chooses a prenatal with 800mcg methylfolate instead of folic acid for optimal utilization",
      "Someone taking high-dose folic acid (5mg for methotrexate side effects) may benefit from adding methylfolate to ensure active vitamin reaches cells",
      "Fortified bread and cereals contain folic acid (not methylfolate) due to stability and cost—beneficial for population-wide neural tube defect prevention",
      "A person with persistently elevated homocysteine despite folic acid supplementation may have conversion issues; switching to methylfolate often helps",
    ],
  },
  {
    slug: "freeradicals",
    why_it_matters: `Free radicals are central to the entire antioxidant supplement category—understanding them helps you evaluate marketing claims critically. The "free radical theory of aging" drove decades of antioxidant supplement enthusiasm, but the science has become more nuanced. Yes, excessive free radicals cause oxidative damage. But your body also USES free radicals for immune function, cell signaling, and exercise adaptation. High-dose antioxidant supplements can actually interfere with beneficial free radical signaling—like blocking the fitness benefits of exercise. Smart supplementation isn't about eliminating all free radicals; it's about supporting your body's natural antioxidant systems while avoiding excess.`,
    simple_explanation: `Free radicals are molecules with an unpaired electron—think of them as unstable "singles" desperately looking to pair up. They grab electrons from nearby molecules (proteins, fats, DNA), damaging them in the process and creating a chain reaction. Your body produces free radicals normally through metabolism, immune function, and energy production. Small amounts are actually useful—they help kill bacteria and signal cells. Problems occur when free radical production exceeds your body's antioxidant defenses, causing "oxidative stress." This imbalance contributes to aging, inflammation, and chronic diseases. Antioxidants donate electrons to neutralize free radicals without becoming unstable themselves—they break the chain reaction.`,
    key_points: `### Key Facts About Free Radicals

- **Normal byproduct**: Free radicals are produced during normal metabolism, especially in mitochondria during energy production—you can't eliminate them entirely
- **Dual role**: Free radicals have beneficial functions (immune defense, cell signaling, exercise adaptation) and harmful effects (oxidative damage when excessive)
- **Oxidative stress**: When free radical production exceeds antioxidant defenses, oxidative stress occurs—linked to aging, cardiovascular disease, neurodegeneration, and cancer
- **Endogenous defenses**: Your body has powerful antioxidant systems (glutathione, SOD, catalase) that are more important than dietary antioxidants for most people
- **Exercise paradox**: Exercise temporarily increases free radicals, but this triggers beneficial adaptations; high-dose antioxidants during exercise can block these benefits`,
    common_misconceptions: [
      `**Myth:** All free radicals are bad and should be eliminated.\n**Fact:** Free radicals have essential signaling roles. Your immune system uses them to kill pathogens. Exercise benefits partly depend on free radical signaling. The goal is BALANCE, not elimination.`,
      `**Myth:** More antioxidant supplements are always better.\n**Fact:** High-dose antioxidant supplements (vitamin E, beta-carotene) have shown no benefit—and sometimes harm—in large clinical trials. Moderate amounts from food are beneficial; megadoses may disrupt normal signaling.`,
      `**Myth:** Antioxidants prevent aging by neutralizing free radicals.\n**Fact:** The "free radical theory of aging" has been largely debunked as oversimplified. Aging is multifactorial. While oxidative damage contributes, simply loading up on antioxidants doesn't extend lifespan in studies.`,
    ],
    examples: [
      "Taking 1000 IU vitamin E before workouts has been shown to blunt some exercise adaptations by neutralizing the free radical signals that trigger beneficial changes",
      "Smokers produce excessive free radicals; their oxidative stress levels are measurably higher than non-smokers—one reason smoking accelerates aging",
      "Your body's glutathione system neutralizes far more free radicals than any supplement; supporting glutathione production (with NAC, for example) may be more effective than taking direct antioxidants",
      "Hydrogen peroxide, a type of reactive oxygen species, is used by white blood cells to kill bacteria—eliminating all oxidative species would cripple immunity",
    ],
  },
  {
    slug: "fos",
    why_it_matters: `Fructooligosaccharides (FOS) are one of the most common prebiotic fibers in supplements—understanding them helps you choose gut health products wisely. FOS selectively feeds beneficial bacteria, particularly Bifidobacteria, and increases short-chain fatty acid production. However, FOS is also a FODMAP that can cause significant gas, bloating, and discomfort in sensitive individuals. The dose matters enormously: 2-5g may be well-tolerated and beneficial, while 15g+ commonly causes GI distress even in healthy people. Knowing that FOS appears as "chicory root fiber," "oligofructose," or "inulin" on labels helps you identify products that might help or harm your gut.`,
    simple_explanation: `FOS (fructooligosaccharides) are short chains of fructose molecules that you can't digest—but your gut bacteria love them. When FOS reaches your colon, beneficial bacteria (especially Bifidobacteria) feast on it, multiplying and producing beneficial short-chain fatty acids like butyrate. This is the essence of prebiotics: feeding the good bacteria. The catch is that this fermentation produces gas. For most people, moderate amounts (3-5g) cause mild, temporary gas. For people with IBS or FODMAP sensitivity, even small amounts can trigger significant symptoms. FOS appears in many supplements and foods—sometimes labeled as "chicory root fiber" or "inulin" (a longer-chain relative). Starting with low doses and gradually increasing allows your gut to adapt.`,
    key_points: `### Key Facts About FOS

- **Bifidogenic**: FOS specifically increases Bifidobacteria populations—one of the most reliable effects of any prebiotic
- **Short-chain fatty acids**: Fermentation of FOS produces acetate, propionate, and butyrate—beneficial compounds that feed colon cells and reduce inflammation
- **Dose-dependent tolerance**: 2-5g daily is typically well-tolerated; >10-15g causes GI symptoms in most people. FODMAP-sensitive individuals may not tolerate even small amounts
- **Label names**: FOS appears as "fructooligosaccharides," "oligofructose," "chicory root fiber," or "chicory root extract" on supplement and food labels
- **Inulin relationship**: Inulin is the longer-chain version; FOS is shorter. Both are fermentable fructans with similar effects and tolerance considerations`,
    common_misconceptions: [
      `**Myth:** If a prebiotic causes gas, it's not working.\n**Fact:** Gas production indicates fermentation IS happening—the prebiotic is feeding bacteria. Some temporary gas is normal when starting prebiotics. Severe, persistent symptoms suggest intolerance or too-high doses.`,
      `**Myth:** More FOS is better for gut health.\n**Fact:** Benefits plateau and side effects increase at higher doses. 3-8g is the typical therapeutic range. Mega-doses cause GI distress without additional benefit and can actually feed problematic bacteria in some people.`,
      `**Myth:** FOS is safe for everyone since it's just fiber.\n**Fact:** FOS is a high-FODMAP ingredient that can significantly worsen symptoms in IBS patients and others with FODMAP sensitivity. It's not universally beneficial despite being "natural fiber."`,
    ],
    examples: [
      "A gut health supplement contains 6g chicory root fiber per serving—this is FOS/inulin and may cause significant gas if taken at full dose initially",
      "Someone with IBS tries a probiotic with added FOS and experiences worsening symptoms—the FOS, not the probiotic bacteria, is the likely culprit",
      "Starting with 2g FOS and increasing by 1g weekly allows gut bacteria to gradually adapt, minimizing gas and bloating",
      "Asparagus, garlic, and onions are natural FOS sources—explaining why these foods cause gas even in people without diagnosed IBS",
    ],
  },
  {
    slug: "gos",
    why_it_matters: `Galacto-oligosaccharides (GOS) are prebiotics naturally found in breast milk that powerfully stimulate Bifidobacteria growth. For supplement shoppers, GOS is worth knowing because it may be better tolerated than FOS/inulin for some people, and it has specific evidence for infant gut development, IBS symptom improvement, and even anxiety reduction via the gut-brain axis. GOS is less commonly used in supplements than FOS but deserves consideration, especially for individuals who react poorly to fructan-based prebiotics. Understanding that different prebiotics feed different bacteria—and that GOS specifically targets Bifidobacteria—helps in selecting personalized gut support.`,
    simple_explanation: `GOS (galacto-oligosaccharides) are chains of galactose molecules that work as prebiotic fiber—food for beneficial gut bacteria. What makes GOS special is its presence in human breast milk, where it helps establish a healthy infant microbiome dominated by Bifidobacteria. Supplemental GOS mimics this effect in adults, selectively feeding Bifidobacteria and Lactobacilli. Like all prebiotics, GOS is fermented in your colon, producing beneficial short-chain fatty acids and some gas. GOS may be better tolerated than FOS/inulin by some people because it's a different type of carbohydrate (galactose-based vs. fructose-based). Research shows GOS can reduce IBS symptoms, improve calcium absorption, and even reduce anxiety—likely through gut-brain axis effects.`,
    key_points: `### Key Facts About GOS

- **Breast milk component**: GOS (along with HMOs) are abundant in human breast milk, shaping infant microbiome development—nature's original prebiotic
- **Bifidobacterium selective**: GOS particularly promotes Bifidobacteria growth—one of the most consistently beneficial bacterial genera
- **Tolerance profile**: May be better tolerated than inulin/FOS by some individuals, possibly due to different fermentation characteristics
- **Calcium absorption**: GOS improves calcium absorption in the colon—a benefit beyond typical prebiotic effects, potentially relevant for bone health
- **Gut-brain evidence**: GOS has shown anxiety-reducing effects in human studies, likely mediated through microbiome-gut-brain axis signaling`,
    common_misconceptions: [
      `**Myth:** All prebiotics are the same—just pick the cheapest one.\n**Fact:** Different prebiotics feed different bacteria and have distinct effects. GOS preferentially feeds Bifidobacteria; resistant starch feeds butyrate producers; each has unique clinical evidence.`,
      `**Myth:** Adults don't need GOS since it's for infant gut development.\n**Fact:** While GOS is critical in breast milk for infants, adult supplementation also benefits Bifidobacteria populations, which often decline with age. GOS remains effective across the lifespan.`,
      `**Myth:** GOS is completely interchangeable with FOS.\n**Fact:** GOS is galactose-based while FOS is fructose-based. Some people tolerate one better than the other. GOS may have unique effects on calcium absorption and anxiety that FOS doesn't share.`,
    ],
    examples: [
      "A person who bloats severely with inulin tries GOS at 3g daily and tolerates it well—different carbohydrate chemistry, different tolerance",
      "Infant formula is often supplemented with GOS to mimic the prebiotic content of breast milk and support Bifidobacteria colonization",
      "A study using 5.5g GOS daily reduced anxiety symptoms and lowered waking cortisol levels—gut-brain axis effects in action",
      "Postmenopausal women taking GOS showed improved calcium absorption, potentially beneficial for bone density maintenance",
    ],
  },
  {
    slug: "glucagon",
    why_it_matters: `Glucagon is insulin's counterpart—while insulin lowers blood sugar, glucagon raises it. For supplement shoppers interested in blood sugar management, metabolic health, or weight, understanding glucagon clarifies how the body maintains glucose balance and why certain strategies work. When you fast or go low-carb, glucagon rises to release stored glucose and signal fat burning. When you eat, insulin rises and glucagon falls. This glucagon-insulin balance determines whether you're storing or burning fuel. Some supplements and dietary strategies work partly through glucagon effects—amino acids stimulate glucagon, which may explain some protein-related satiety effects.`,
    simple_explanation: `Glucagon is a hormone from your pancreas that raises blood sugar—the opposite of insulin. Think of insulin and glucagon as a see-saw: when one goes up, the other goes down. After eating, insulin rises to store the incoming glucose. Between meals and overnight, glucagon rises to release stored glucose from your liver, keeping blood sugar stable even when you're not eating. This is called gluconeogenesis and glycogenolysis—fancy terms for making new glucose and releasing stored glucose. Glucagon also signals your body to burn fat. When you fast or eat very low-carb, glucagon dominates, which is why those strategies tap into fat stores. In diabetics, this balance is disrupted—glucagon may not suppress properly after meals, contributing to high blood sugar.`,
    key_points: `### Key Facts About Glucagon

- **Counter-regulatory hormone**: Glucagon opposes insulin—it raises blood sugar by signaling the liver to release glucose (glycogenolysis) and make new glucose (gluconeogenesis)
- **Fasting hormone**: Glucagon rises during fasting, overnight, and between meals to maintain blood sugar; it's the reason you don't become hypoglycemic while sleeping
- **Fat burning signal**: Elevated glucagon promotes lipolysis (fat breakdown) and ketone production—part of why fasting and low-carb diets tap into fat stores
- **Protein paradox**: Protein stimulates BOTH insulin AND glucagon, which is why high-protein meals don't crash blood sugar like high-carb meals can
- **Diabetes relevance**: Type 2 diabetes involves not just insulin resistance but also inappropriate glucagon secretion—glucagon stays elevated when it should suppress after meals`,
    common_misconceptions: [
      `**Myth:** Blood sugar is only controlled by insulin.\n**Fact:** Glucagon is equally important for blood sugar regulation. It prevents hypoglycemia during fasting and between meals. Diabetes involves dysfunction of BOTH insulin and glucagon signaling.`,
      `**Myth:** Eating stimulates only insulin.\n**Fact:** Protein strongly stimulates glucagon release alongside insulin. This dual stimulation is why protein doesn't spike blood sugar the way carbohydrates do—glucagon counterbalances the insulin effect.`,
      `**Myth:** You want to minimize glucagon for metabolic health.\n**Fact:** Healthy glucagon response is essential. You WANT glucagon to rise during fasting (to prevent hypoglycemia) and suppress after meals. Problems occur when this regulation is impaired, not from glucagon itself.`,
    ],
    examples: [
      "During an overnight fast, glucagon keeps blood sugar stable at 80-100 mg/dL by signaling the liver to release glucose from glycogen stores",
      "A high-protein meal stimulates both insulin and glucagon; blood sugar remains stable while amino acids are stored—protein's unique metabolic signature",
      "GLP-1 agonists (Ozempic, Wegovy) work partly by suppressing inappropriate glucagon secretion, reducing the liver's glucose output",
      "In severe hypoglycemia, injectable glucagon is life-saving emergency medicine—it rapidly raises blood sugar by releasing liver glycogen",
    ],
  },
  {
    slug: "glp1",
    why_it_matters: `GLP-1 (glucagon-like peptide-1) has gone from obscure gut hormone to household name thanks to drugs like Ozempic and Wegovy. For supplement shoppers, understanding GLP-1 matters because it's now the target of numerous "natural" supplements claiming to boost GLP-1 for weight loss and blood sugar control. GLP-1 promotes satiety, slows digestion, and enhances insulin release—powerful effects that explain why GLP-1 drug users lose significant weight. But do supplements really boost GLP-1 meaningfully? The evidence is limited. Some compounds (berberine, certain fibers, protein) modestly affect GLP-1, but nowhere near the potency of injectable drugs. Understanding GLP-1 biology helps you evaluate these claims realistically.`,
    simple_explanation: `GLP-1 is a hormone released by your gut after eating that tells your body: "We just ate—slow down digestion, feel full, and release insulin." It's like a satiety messenger that travels from your intestines to your brain, saying "enough food." GLP-1 does several things: (1) tells your brain you're full, (2) slows stomach emptying so food satisfies you longer, (3) helps your pancreas release insulin, and (4) reduces glucagon to lower blood sugar. Naturally, GLP-1 only lasts a few minutes before enzymes break it down. The revolutionary GLP-1 drugs (semaglutide/Ozempic, tirzepatide/Mounjaro) are modified versions that resist breakdown and last a week, providing constant appetite suppression. Natural ways to boost GLP-1 include eating protein and fiber, but effects are much more modest.`,
    key_points: `### Key Facts About GLP-1

- **Incretin hormone**: GLP-1 is released from intestinal L-cells after eating; it enhances insulin secretion in a glucose-dependent way (only when blood sugar is elevated)
- **Satiety signal**: GLP-1 acts on brain appetite centers (hypothalamus, brainstem) to reduce hunger and increase fullness—the main driver of weight loss with GLP-1 drugs
- **Gastric slowing**: GLP-1 delays stomach emptying, prolonging satiety and flattening post-meal blood sugar spikes
- **Short half-life**: Natural GLP-1 is degraded by DPP-4 enzymes within minutes; GLP-1 drugs are modified to last days to weeks
- **Natural stimulators**: Protein, fiber, and certain compounds (berberine, bitter melon) modestly increase GLP-1, but effects are far weaker than pharmaceutical GLP-1 agonists`,
    common_misconceptions: [
      `**Myth:** Supplements can replicate the effects of GLP-1 drugs like Ozempic.\n**Fact:** GLP-1 drugs provide constant, high-level receptor activation for a week. Supplements may modestly boost natural GLP-1 for minutes to hours. The magnitude of effect isn't comparable—drugs produce 15-20% weight loss; supplements produce minimal weight loss.`,
      `**Myth:** GLP-1 only matters for diabetics.\n**Fact:** GLP-1's satiety effects are why these drugs are revolutionary for weight loss in non-diabetics. The hormone is central to appetite regulation in everyone, not just blood sugar control for diabetics.`,
      `**Myth:** Natural GLP-1 release provides the same benefits as GLP-1 drugs.\n**Fact:** Natural GLP-1 lasts minutes and fluctuates with meals. Modified drug versions provide steady, continuous signaling at much higher levels. The difference in magnitude and duration explains dramatically different clinical effects.`,
    ],
    examples: [
      "A high-protein meal increases GLP-1 release, contributing to protein's superior satiety compared to carbohydrates or fats",
      "Berberine (500mg 2-3x daily) modestly increases GLP-1 secretion and has blood sugar-lowering effects, though much weaker than GLP-1 drugs",
      "Semaglutide (Ozempic/Wegovy) is a GLP-1 analog that's 94% similar to human GLP-1 but modified to last 7 days instead of 2 minutes",
      "Soluble fiber (psyllium, beta-glucan) increases GLP-1 release, partly explaining fiber's effects on satiety and blood sugar control",
    ],
  },
  {
    slug: "glucosemetabolism",
    why_it_matters: `Glucose metabolism—how your body processes blood sugar—is central to metabolic health, energy levels, weight management, and chronic disease prevention. For supplement shoppers, this is relevant because an entire category of supplements targets glucose metabolism: berberine, chromium, cinnamon, alpha-lipoic acid, and many others claim to improve blood sugar control. Understanding how glucose metabolism actually works helps you evaluate these claims. The key insight is that insulin sensitivity (how well cells respond to insulin) and glucose disposal (where glucose goes) matter more than simply lowering blood sugar numbers. Effective supplements improve metabolic health, not just glucose readings.`,
    simple_explanation: `Glucose metabolism is everything your body does to manage blood sugar—the fuel your cells need for energy. When you eat carbohydrates, they're broken down into glucose, which enters your bloodstream. Your pancreas releases insulin, which acts like a key unlocking cell doors to let glucose in. Muscles and the liver store glucose as glycogen; fat cells can convert excess glucose to fat. Between meals, the liver releases stored glucose to maintain blood sugar levels. The goal is keeping blood sugar stable—not too high (damaging blood vessels) or too low (starving your brain). When this system works well, you have steady energy. When it breaks down (insulin resistance, diabetes), blood sugar swings cause fatigue, weight gain, and eventually serious health problems.`,
    key_points: `### Key Facts About Glucose Metabolism

- **Insulin is the master regulator**: Insulin allows cells to take up glucose, suppresses liver glucose production, and promotes storage—insulin resistance disrupts all of these
- **Muscle is the primary destination**: Skeletal muscle takes up 70-80% of glucose after meals; muscle mass and activity level strongly influence glucose metabolism
- **Liver dual role**: The liver stores glucose as glycogen after meals and releases it during fasting—improper regulation causes both high and low blood sugar
- **Fat cell involvement**: In insulin resistance, excess glucose that can't enter muscle is converted to fat—explaining the obesity-diabetes connection
- **HbA1c measures average**: Hemoglobin A1c reflects average blood sugar over 2-3 months, providing a better metabolic picture than single glucose measurements`,
    common_misconceptions: [
      `**Myth:** Avoiding sugar is all that matters for healthy glucose metabolism.\n**Fact:** Glucose metabolism depends more on insulin sensitivity (how well cells respond) than just sugar intake. Muscle mass, exercise, sleep, stress, and body fat all affect glucose handling more than carbohydrate amount for most people.`,
      `**Myth:** If my fasting blood sugar is normal, my glucose metabolism is fine.\n**Fact:** Fasting glucose is just one snapshot. Many people have normal fasting glucose but impaired post-meal glucose handling or developing insulin resistance. HbA1c and post-meal glucose patterns provide more complete pictures.`,
      `**Myth:** Supplements can replace lifestyle changes for glucose metabolism.\n**Fact:** Exercise and body composition changes have far larger effects on glucose metabolism than any supplement. Berberine and chromium have modest effects; walking after meals and building muscle have substantial effects.`,
    ],
    examples: [
      "A 10-minute walk after meals can reduce post-meal glucose spikes by 20-30%—muscles actively taking up glucose during movement",
      "Berberine (500mg with meals) works partly by activating AMPK, improving glucose uptake into cells—mimicking some effects of exercise at the cellular level",
      "Someone with insulin resistance has normal fasting glucose (95 mg/dL) but post-meal glucose hits 180 mg/dL—early dysfunction the fasting test misses",
      "Building 5 lbs of muscle increases glucose storage capacity and improves metabolism even without dietary changes—muscle is a metabolic organ",
    ],
  },
  {
    slug: "glutathione",
    why_it_matters: `Glutathione is called the "master antioxidant" because it's the most abundant antioxidant inside cells and regenerates other antioxidants like vitamin C and E. For supplement shoppers, glutathione is intriguing but complicated. Your body makes it from three amino acids (cysteine, glutamine, glycine), and levels decline with age, chronic illness, and toxic exposure. However, directly supplementing glutathione has bioavailability challenges—standard oral glutathione is largely destroyed in digestion. This has driven interest in precursors like NAC (N-acetyl cysteine), liposomal glutathione, and newer reduced forms. Understanding what actually raises cellular glutathione levels helps you choose effective products.`,
    simple_explanation: `Glutathione is a small molecule made of three amino acids that serves as your cells' primary internal defense system. Think of it as the "cleanup crew" inside every cell, neutralizing toxins, free radicals, and waste products. Glutathione is special because it recycles itself and other antioxidants—after neutralizing a free radical, it can be regenerated and used again thousands of times. It's also crucial for liver detoxification, immune function, and protein repair. Your body constantly makes glutathione, but production declines with age and is depleted by alcohol, medications, pollution, and chronic stress. The challenge with supplements is that glutathione is broken down in the gut before absorption. That's why precursor supplements (like NAC, which provides cysteine) or specialized delivery forms (liposomal) are often more effective than plain glutathione.`,
    key_points: `### Key Facts About Glutathione

- **Most abundant cellular antioxidant**: Glutathione exists in millimolar concentrations inside cells—far higher than any dietary antioxidant you could supplement
- **Reduced vs. oxidized**: Active glutathione (GSH) neutralizes threats and becomes oxidized (GSSG); healthy cells maintain a high GSH:GSSG ratio
- **Precursor strategy**: NAC (N-acetyl cysteine) provides rate-limiting cysteine for glutathione synthesis; it may be more effective than direct glutathione supplementation
- **Liver detox essential**: Phase II liver detoxification relies heavily on glutathione to conjugate and eliminate toxins—glutathione depletion impairs detox capacity
- **Liposomal advantage**: Liposomal glutathione and S-acetyl glutathione show better absorption than standard reduced glutathione, though evidence is still developing`,
    common_misconceptions: [
      `**Myth:** Taking glutathione pills directly raises cellular glutathione levels.\n**Fact:** Standard oral glutathione is largely broken down in the digestive tract before absorption. Precursors (NAC, glycine, whey protein), liposomal forms, or IV administration are more effective strategies.`,
      `**Myth:** Glutathione is just another antioxidant like vitamin C.\n**Fact:** Glutathione is qualitatively different—it's the primary intracellular antioxidant, recycles other antioxidants, and is essential for detoxification. You can't compensate for low glutathione by taking more vitamin C.`,
      `**Myth:** Healthy people don't need to worry about glutathione.\n**Fact:** Glutathione naturally declines with age. Chronic stress, poor sleep, alcohol, medications, and environmental toxins all deplete it. Even healthy adults may benefit from supporting glutathione production.`,
    ],
    examples: [
      "NAC (600-1200mg daily) provides cysteine, the rate-limiting precursor for glutathione synthesis—often more effective than direct glutathione supplementation",
      "Someone with chronic alcohol exposure has depleted glutathione; NAC is used clinically to restore glutathione for acetaminophen overdose treatment",
      "Whey protein is rich in cysteine and has been shown to raise glutathione levels—food-based support for the antioxidant system",
      "Liposomal glutathione (250-500mg) shows better absorption than standard glutathione in limited studies, though more research is needed",
    ],
  },
  {
    slug: "glutathioneperoxidase",
    why_it_matters: `Glutathione peroxidase (GPx) enzymes are where selenium's antioxidant benefits actually happen—they use glutathione to neutralize the most damaging types of free radicals. For supplement shoppers, understanding GPx explains why selenium is considered an antioxidant even though it's a mineral, not a typical free radical-scavenging molecule. Selenium doesn't directly neutralize free radicals; it's required for GPx enzymes that do the actual work. This means selenium supplementation only provides antioxidant benefits if your GPx enzymes weren't already fully saturated—excessive selenium doesn't enhance GPx activity further and can become toxic. Knowing this helps you understand appropriate selenium dosing.`,
    simple_explanation: `Glutathione peroxidase is a family of enzymes that protect cells from oxidative damage by neutralizing hydrogen peroxide and lipid peroxides—some of the most damaging types of free radicals. These enzymes require selenium to function; each GPx enzyme has selenium atoms at its active site. Think of GPx as specialized security guards that use glutathione as their weapon to neutralize dangerous oxidants. The enzyme converts toxic hydrogen peroxide into harmless water, with glutathione providing the electrons for this reaction. Different GPx forms protect different areas: GPx1 protects inside cells, GPx4 specifically protects cell membranes from lipid damage. Without adequate selenium, these protective enzymes can't form properly, leaving cells vulnerable to oxidative damage.`,
    key_points: `### Key Facts About Glutathione Peroxidase

- **Selenium-dependent**: All GPx enzymes contain selenium (as selenocysteine); selenium deficiency directly reduces GPx activity and antioxidant protection
- **Multiple forms**: GPx1-8 exist with different locations and substrates; GPx4 is unique in protecting membrane lipids from peroxidation
- **Uses glutathione**: GPx enzymes use reduced glutathione (GSH) to neutralize peroxides; both selenium AND adequate glutathione are needed for optimal function
- **Saturation effect**: GPx activity plateaus once selenium needs are met; extra selenium doesn't increase GPx activity and may cause toxicity
- **Aging and disease**: GPx activity declines with age and is reduced in many diseases; low activity is associated with cardiovascular disease and cancer`,
    common_misconceptions: [
      `**Myth:** Selenium is a direct antioxidant that neutralizes free radicals.\n**Fact:** Selenium doesn't directly scavenge free radicals. It's a cofactor for GPx enzymes that do the actual antioxidant work. Selenium supports antioxidant capacity indirectly through enzyme function.`,
      `**Myth:** More selenium means more antioxidant protection.\n**Fact:** GPx activity plateaus once selenium is sufficient (around 55-200mcg daily). Taking 400-800mcg selenium doesn't double GPx activity—it just risks toxicity without additional benefit.`,
      `**Myth:** Taking glutathione supplements fully compensates for low GPx activity.\n**Fact:** GPx needs both selenium (to function) and glutathione (as substrate). Adequate glutathione can't compensate for selenium deficiency; the enzyme itself won't form properly without selenium.`,
    ],
    examples: [
      "Brazil nuts contain extremely high selenium (~70-90mcg per nut); 2-3 daily can optimize GPx activity without supplements",
      "Someone with low selenium status (common in certain regions) increases GPx activity by 40% after 3 months of 100mcg selenium supplementation",
      "GPx4 specifically protects sperm cell membranes; selenium deficiency impairs male fertility partly through reduced GPx4 activity",
      "People living in selenium-poor soil regions (parts of China, New Zealand) historically had higher rates of Keshan disease—a cardiomyopathy linked to low GPx activity",
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
  console.log("=== BATCH 8: Enhancing Glossary Terms 71-80 ===\n");

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
