import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { db: { schema: "api" } }
);

/**
 * Enhanced content for the first 10 glossary terms (alphabetically)
 * Each term includes:
 * - why_it_matters: Practical relevance for supplement buyers
 * - simple_explanation: ELI5 version
 * - key_points: Quick facts in markdown format
 * - common_misconceptions: Myth vs fact (array of strings)
 * - examples: Updated/expanded examples if needed
 */
const enhancedTerms = [
  // 1. 8-OHdG (603 words - just needs new fields)
  {
    slug: "eightohdg",
    why_it_matters: `For supplement shoppers interested in antioxidants, 8-OHdG levels indicate whether your body is experiencing oxidative DNA damage—the kind of cellular wear-and-tear that antioxidant supplements aim to combat. If you're taking antioxidants like vitamin C, vitamin E, CoQ10, or NAC, researchers often measure 8-OHdG in urine to see if these supplements are actually reducing oxidative stress. Lower 8-OHdG levels suggest your antioxidant strategy may be working. This biomarker is particularly relevant when comparing antioxidant products or deciding whether to increase your intake.`,
    simple_explanation: `Think of 8-OHdG as a "damage receipt" from your cells. When harmful molecules called free radicals attack your DNA, they leave behind 8-OHdG as evidence. Your body repairs the damage and flushes out the 8-OHdG in your urine. More 8-OHdG in your urine means more DNA damage is happening. Antioxidants are like a security team that intercepts free radicals before they can cause damage—so if antioxidants are working, you'd expect to see less 8-OHdG over time.`,
    key_points: `### Quick Facts About 8-OHdG

- **What it is**: A damaged DNA building block that gets expelled in urine after cellular repair
- **Why it matters**: Higher levels indicate more oxidative stress and DNA damage in your body
- **What it measures**: The effectiveness of your antioxidant defenses (diet + supplements)
- **Normal range**: Typically 2-20 ng/mg creatinine in healthy adults
- **How to lower it**: Antioxidant-rich diet, supplements like vitamin C/E, CoQ10, and reducing oxidative stress sources (smoking, pollution, excessive exercise)`,
    common_misconceptions: [
      "**Myth**: High 8-OHdG means you have cancer or serious disease.\n**Fact**: Elevated 8-OHdG indicates oxidative stress, not disease. Your body repairs most oxidative DNA damage successfully. It's a risk indicator, not a diagnosis.",
      "**Myth**: You can easily test 8-OHdG levels at home.\n**Fact**: Accurate 8-OHdG testing requires specialized laboratory analysis (ELISA or mass spectrometry). Home tests aren't reliable for this biomarker.",
      "**Myth**: Taking more antioxidants always lowers 8-OHdG.\n**Fact**: The relationship isn't linear. Some studies show benefits plateau, and extremely high-dose antioxidants may even have pro-oxidant effects.",
    ],
  },

  // 2. Absolute Risk Reduction (441 words - needs boost)
  {
    slug: "arr",
    why_it_matters: `When evaluating supplement research, understanding Absolute Risk Reduction (ARR) helps you see through marketing hype. A supplement might claim a "50% reduction in risk" (relative risk), but if the actual risk drops from 2% to 1%, that's only a 1% absolute difference. ARR tells you the real-world impact: how many people actually benefit. This helps you decide if the price and commitment of a daily supplement is worth it for a small but meaningful benefit, or if you're paying for statistical spin.`,
    simple_explanation: `Imagine 100 people are standing in a room, and 10 of them will get sick. If a supplement reduces that to 5 people getting sick, the Absolute Risk Reduction is 5 out of 100, or 5%. That's the actual number of people who avoided illness. Companies might say "50% fewer people got sick!" (which sounds huge), but the absolute difference—5 people out of 100—gives you the real picture. ARR answers: "How many people actually benefit from this?"`,
    key_points: `### Quick Facts About Absolute Risk Reduction

- **What it is**: The actual percentage point difference in outcomes between treatment and control groups
- **Formula**: Control group risk minus Treatment group risk = ARR
- **Why it matters**: Shows real-world benefit, not inflated percentages
- **Related term**: NNT (Number Needed to Treat) = 100 ÷ ARR — how many people need to take a supplement for one person to benefit
- **Red flag**: If a study only reports "relative risk reduction" without ARR, the absolute benefit may be tiny`,
    common_misconceptions: [
      "**Myth**: A 50% risk reduction means half of all users benefit.\n**Fact**: Relative risk can be misleading. If risk drops from 4% to 2%, that's a 50% relative reduction but only 2% absolute reduction—meaning 2 out of 100 people benefit.",
      "**Myth**: Bigger percentages always mean better supplements.\n**Fact**: ARR is what matters for practical decisions. A supplement with 3% ARR provides meaningful benefit; one with 0.1% ARR probably isn't worth the cost.",
      "**Myth**: ARR applies the same to everyone.\n**Fact**: Your personal baseline risk matters. High-risk individuals often see larger absolute benefits from interventions than low-risk individuals.",
    ],
    examples: [
      "A vitamin D study shows 15% of the placebo group developed respiratory infections vs. 10% in the vitamin D group. ARR = 15% - 10% = 5%. NNT = 20, meaning 20 people need to take vitamin D for 1 to avoid infection.",
      "An omega-3 trial reports a 25% relative reduction in heart events, but if events dropped from 8% to 6%, the ARR is just 2%—meaning 50 people need supplementation for one to benefit.",
      "A CoQ10 study in heart failure patients showed hospitalization rates of 14% (CoQ10) vs 25% (placebo). ARR = 11%, which is clinically significant with NNT of just 9.",
    ],
  },

  // 3. Absorption (278 words - needs significant boost)
  {
    slug: "absorption",
    why_it_matters: `Absorption is the reason why not all supplements are created equal—even with identical ingredients. A cheap magnesium oxide tablet might only deliver 4% of its magnesium to your bloodstream, while magnesium glycinate could deliver 80%+. Understanding absorption helps you avoid wasting money on supplements your body can't actually use. Look for forms with proven bioavailability, take fat-soluble vitamins with meals containing fat, and consider whether factors like stomach acid levels or other medications might affect how much you actually absorb.`,
    simple_explanation: `Absorption is like getting through airport security for nutrients. Just because a vitamin is in your stomach doesn't mean it reaches your bloodstream where it can actually help. Some nutrients breeze through easily (like simple sugars), while others face multiple checkpoints. The vitamin has to dissolve, survive your stomach acid, cross through your intestinal wall, and enter your blood. If any step fails, the nutrient passes right through you unused. That's why the "form" of a supplement matters so much—some forms are VIP travelers while others get stuck in line.`,
    key_points: `### Quick Facts About Absorption

- **Where it happens**: Primarily in the small intestine (duodenum, jejunum, ileum)
- **Fat-soluble vitamins** (A, D, E, K): Require dietary fat for absorption—take with meals
- **Water-soluble vitamins** (B, C): Absorb more easily but excess is excreted in urine
- **Minerals vary widely**: Magnesium oxide ~4% absorbed vs glycinate ~80%+
- **Timing matters**: Some supplements compete for absorption (iron and calcium, zinc and copper)
- **Enhancers**: Vitamin C boosts iron absorption; black pepper (piperine) enhances curcumin`,
    common_misconceptions: [
      "**Myth**: Higher doses compensate for poor absorption.\n**Fact**: Absorption often has a saturation point. Taking 1000mg of vitamin C doesn't absorb 10x better than 100mg—bioavailability drops significantly at higher doses.",
      "**Myth**: Liquid supplements always absorb better than pills.\n**Fact**: The delivery form matters less than the chemical form. A well-formulated tablet with enhanced bioavailability can outperform a basic liquid.",
      "**Myth**: An empty stomach is best for all supplements.\n**Fact**: Fat-soluble vitamins absorb poorly without fat. Some supplements (like iron) absorb better on empty stomachs, but others need food.",
      "**Myth**: If you don't feel a supplement working, you're not absorbing it.\n**Fact**: Most nutrient absorption is silent. You don't 'feel' vitamin D or magnesium working, but blood tests confirm absorption.",
    ],
    examples: [
      "Curcumin alone has less than 1% bioavailability—but combined with piperine (black pepper extract), absorption increases by up to 2000%.",
      "Taking iron supplements with coffee or tea reduces absorption by 60-90% due to tannins binding to iron.",
      "Vitamin D absorption is 32% higher when taken with the largest meal of the day compared to taking it on an empty stomach.",
      "Enteric-coated fish oil capsules that bypass stomach acid show 3x better omega-3 absorption in people with low stomach acid.",
    ],
  },

  // 4. Acetate (481 words - just needs new fields)
  {
    slug: "acetate",
    why_it_matters: `If you're taking fiber supplements or probiotics for gut health, acetate is one of the key end products you're trying to produce. As the most abundant short-chain fatty acid (SCFA) in your gut, acetate influences appetite, energy metabolism, and even cholesterol levels. Understanding acetate helps explain why fermentable fibers (like inulin, beta-glucan, and resistant starch) have benefits beyond just "regularity." When your gut bacteria produce acetate from fiber, you're essentially getting an extra metabolic benefit that no vitamin pill can replicate.`,
    simple_explanation: `Your gut bacteria are like tiny fermentation factories. When you feed them fiber, they produce useful chemicals—and acetate is their main product, making up about 60-70% of output. Acetate then travels through your body helping to control appetite, provide energy to your organs, and even influence cholesterol production in your liver. It's one reason why "eating more fiber" does more than just help you stay regular—the fermentation byproducts are doing important work throughout your body.`,
    key_points: `### Quick Facts About Acetate

- **What it is**: The most abundant short-chain fatty acid produced by gut bacteria from fiber
- **Production**: ~60-70% of all SCFAs made in the colon come as acetate
- **Food sources**: Produced when bacteria ferment inulin, resistant starch, beta-glucan, and other fibers
- **Key functions**: Appetite regulation, energy for muscles/heart, cholesterol synthesis regulation
- **Travel range**: Unlike other SCFAs, acetate enters systemic circulation and reaches distant organs
- **Daily production**: A fiber-rich diet produces ~300-400 mmol of SCFAs daily, mostly acetate`,
    common_misconceptions: [
      "**Myth**: Acetate is just vinegar and doesn't do much in the body.\n**Fact**: While vinegar contains acetate, the acetate produced by gut bacteria has profound metabolic effects, influencing everything from appetite hormones to fat storage.",
      "**Myth**: You can supplement acetate directly instead of eating fiber.\n**Fact**: Acetate supplements don't provide the same benefits. The process of bacterial fermentation and the location of SCFA production in the colon are crucial for the health effects.",
      "**Myth**: All fiber produces the same amount of acetate.\n**Fact**: Different fibers produce different SCFA ratios. Resistant starch favors butyrate production, while inulin and pectin produce more acetate.",
    ],
    examples: [
      "Consuming 20g of inulin daily for 4 weeks increased fasting acetate levels by 30% and was associated with reduced appetite ratings between meals.",
      "Studies show that colonic acetate production from fiber fermentation provides approximately 5-10% of daily energy requirements.",
      "Acetate infusion studies demonstrate it can cross the blood-brain barrier and directly influence appetite-regulating neurons in the hypothalamus.",
      "People with obesity tend to have higher blood acetate levels but lower butyrate—suggesting the SCFA ratio matters as much as total production.",
    ],
  },

  // 5. Adaptogen (276 words - needs significant boost)
  {
    slug: "adaptogen",
    why_it_matters: `Adaptogens are among the most popular—and most misunderstood—supplement categories. When shopping for stress support, knowing what qualifies as a true adaptogen helps you avoid overhyped products. Genuine adaptogens like ashwagandha, rhodiola, and ginseng have clinical research showing they help normalize stress hormones and improve resilience. But the term gets slapped on everything from basic B-vitamins to caffeine blends. Understanding the criteria helps you identify products with real adaptogenic activity versus those borrowing the buzzword for marketing.`,
    simple_explanation: `Imagine your body's stress response as a thermostat. Normally it adjusts automatically—ramping up when you need energy and calming down when you don't. But chronic stress can break this thermostat, leaving you stuck on "high" (anxious, wired) or "low" (exhausted, burned out). Adaptogens work like a thermostat repairman—they don't force your body up or down, but help restore its natural ability to self-regulate. That's why the same adaptogen can help one person feel more energized and another feel calmer: it's normalizing function in both directions.`,
    key_points: `### Quick Facts About Adaptogens

- **Definition criteria**: Must (1) reduce stress harm, (2) be non-toxic at normal doses, (3) have normalizing effects regardless of the direction of imbalance
- **True adaptogens**: Ashwagandha, Rhodiola rosea, Panax ginseng, Eleuthero, Schisandra
- **Mechanism**: Modulate the HPA axis (hypothalamic-pituitary-adrenal) and stress hormones like cortisol
- **Time to work**: Typically 4-12 weeks of consistent use for noticeable effects
- **Not adaptogens**: Caffeine (stimulant), kava (sedative), melatonin (hormone)—these push in one direction only`,
    common_misconceptions: [
      "**Myth**: Adaptogens give you instant energy like caffeine.\n**Fact**: Adaptogens work gradually over weeks by improving stress resilience, not by stimulating you acutely. Immediate 'energy' from an adaptogen product likely comes from added caffeine or stimulants.",
      "**Myth**: More adaptogens stacked together = better results.\n**Fact**: There's limited research on combining multiple adaptogens. Some may work synergistically, but others might compete or cancel effects. Single, well-dosed adaptogens often outperform random 'adaptogen blends.'",
      "**Myth**: Adaptogens are safe for everyone since they're natural.\n**Fact**: Adaptogens can interact with medications (especially for thyroid, blood pressure, blood sugar) and may not be suitable during pregnancy. 'Natural' doesn't mean universally safe.",
      "**Myth**: If you feel something immediately, the adaptogen is working.\n**Fact**: True adaptogenic effects develop over time. Immediate sensations usually indicate other ingredients or a placebo response.",
    ],
    examples: [
      "Ashwagandha (KSM-66, 300mg twice daily) reduced cortisol levels by 27.9% and perceived stress by 44% over 60 days in a randomized controlled trial.",
      "Rhodiola rosea (400mg daily) improved fatigue, attention, and cognitive function in physicians during night shifts within 2 weeks of use.",
      "Panax ginseng (200-400mg daily) demonstrated anti-fatigue effects and improved mental performance during sustained mental activity in multiple studies.",
      "Eleuthero (Siberian ginseng) helped athletes maintain immune function during intensive training periods when 800mg was taken daily.",
    ],
  },

  // 6. Adverse Effects (833 words - just needs new fields)
  {
    slug: "adverseeffects",
    why_it_matters: `Every supplement has potential adverse effects—even "natural" ones. Understanding how to evaluate and report side effects helps you make safer choices and contribute to supplement safety monitoring. Before starting any supplement, research its known adverse effects, check for interactions with your medications, and know the warning signs that warrant stopping. Supplements aren't regulated like drugs, so much of the safety data comes from user reports and post-market surveillance. Being an informed consumer protects you and helps the broader community.`,
    simple_explanation: `Adverse effects are the unwanted things that can happen when you take a supplement—anything from minor annoyances like an upset stomach to serious problems like liver damage. Think of them as the fine print on a contract: you're getting the main benefit you signed up for, but there may be some conditions attached. Not everyone experiences them, and severity varies widely. The key is knowing what to watch for, when to be concerned, and when to stop.`,
    key_points: `### Quick Facts About Adverse Effects

- **Types**: Mild (headache, nausea) → Moderate (rashes, sleep disruption) → Severe (organ damage, allergic reactions)
- **Frequency terms**: Common (>1%), Uncommon (0.1-1%), Rare (<0.1%), Very rare (<0.01%)
- **Report to**: FDA MedWatch (US), supplement manufacturer, your healthcare provider
- **High-risk supplements**: High-dose fat-soluble vitamins, weight loss products, bodybuilding supplements, multi-ingredient formulas
- **Red flags**: Jaundice, severe fatigue, dark urine, chest pain, difficulty breathing—stop immediately and seek medical help`,
    common_misconceptions: [
      "**Myth**: Natural supplements don't have adverse effects.\n**Fact**: Natural doesn't mean safe. Ephedra (natural) caused heart attacks and strokes. Kava (natural) has caused liver failure. Nature produces plenty of toxic compounds.",
      "**Myth**: If I don't feel side effects immediately, the supplement is safe for me.\n**Fact**: Some adverse effects develop slowly over time (like liver damage from excess vitamin A) or only appear under certain conditions (like interactions with new medications).",
      "**Myth**: Adverse effects listed are guaranteed to happen.\n**Fact**: Listed adverse effects show what's possible, not what's probable. Many people take supplements without experiencing any adverse effects.",
      "**Myth**: Doubling the dose just doubles any side effects proportionally.\n**Fact**: Adverse effects often follow non-linear patterns. Doubling iron intake, for instance, can dramatically increase GI side effects and toxicity risk—not just double them.",
    ],
  },

  // 7. Akkermansia muciniphila (645 words - just needs new fields)
  {
    slug: "akkermansia",
    why_it_matters: `Akkermansia muciniphila has emerged as a star player in gut health research, linked to everything from metabolic health to healthy body weight. While you can't easily buy Akkermansia supplements yet (it's oxygen-sensitive and hard to manufacture), you can support its growth through diet. Polyphenol-rich foods, pomegranate, cranberries, and certain fibers act as "Akkermansia fertilizers." Understanding this bacterium helps explain why diverse, plant-rich diets support metabolic health—and helps you evaluate emerging Akkermansia-based products entering the market.`,
    simple_explanation: `Akkermansia is a beneficial gut bacteria that lives in the mucus layer of your intestines—like a microscopic groundskeeper maintaining the protective barrier between your gut contents and your body. It feeds on mucus (which sounds gross but is actually helpful), and in doing so, stimulates your body to produce more fresh, healthy mucus. People with more Akkermansia tend to have better blood sugar control, healthier weight, and lower inflammation. You can't take it as a typical probiotic yet, but you can feed the Akkermansia you already have.`,
    key_points: `### Quick Facts About Akkermansia muciniphila

- **What it is**: A mucin-degrading bacterium comprising 1-5% of a healthy gut microbiome
- **Why it matters**: Strongly associated with metabolic health, healthy BMI, and blood sugar control
- **Location**: Lives in the intestinal mucus layer, not free-floating in the gut
- **Feeds on**: Mucin (intestinal mucus glycoproteins)—this stimulates mucus renewal
- **How to increase it**: Polyphenols (pomegranate, cranberries, berries), omega-3s, caloric restriction, metformin
- **Supplement status**: Pasteurized Akkermansia products are emerging; live versions are technically challenging`,
    common_misconceptions: [
      "**Myth**: You need to take Akkermansia as a probiotic supplement.\n**Fact**: Most people already have Akkermansia—the goal is supporting its growth through diet. Polyphenols and certain fibers are more practical than supplementation for most people.",
      "**Myth**: More Akkermansia is always better.\n**Fact**: Extremely high levels may actually indicate mucus layer problems. The gut microbiome is about balance, not maximizing any single species.",
      "**Myth**: Akkermansia eats away your protective mucus layer.\n**Fact**: While it consumes mucin, this actually stimulates your body to produce more fresh mucus—it's a renewal cycle, not destruction.",
      "**Myth**: If you're overweight, you have no Akkermansia.\n**Fact**: Overweight individuals often have lower levels but not zero. The bacterium is present in most people; abundance is what varies.",
    ],
    examples: [
      "A study found that pomegranate extract increased Akkermansia levels 47-fold in mice, linked to reduced body weight gain on a high-fat diet.",
      "Metformin, the diabetes drug, significantly increases Akkermansia abundance—which may contribute to some of its metabolic benefits beyond blood sugar control.",
      "Intermittent fasting and caloric restriction both increase Akkermansia populations, potentially explaining some of their metabolic benefits.",
      "Postmenopausal women with higher Akkermansia levels showed better insulin sensitivity and lower inflammatory markers in observational studies.",
    ],
  },

  // 8. ALA (Alpha-Linolenic Acid) (390 words - needs boost)
  {
    slug: "ala",
    why_it_matters: `ALA is the plant-based omega-3 that's essential to get from food—your body cannot make it. However, here's the catch: your body is quite poor at converting ALA into the omega-3s you really need (EPA and DHA). Conversion rates are typically 5-10% for EPA and under 1% for DHA. This means relying solely on flaxseed or chia for omega-3 benefits leaves most people short. ALA is still valuable for heart health, but if you're vegetarian/vegan or avoiding fish oil, understanding ALA's limitations helps you choose appropriate supplements (like algae-based EPA/DHA).`,
    simple_explanation: `ALA is like omega-3 currency in plant form—found in flaxseeds, chia seeds, and walnuts. Your body can convert it into EPA and DHA (the omega-3s found in fish), but it's a very inefficient exchange rate: roughly 5-10% of ALA becomes EPA, and less than 1% becomes DHA. So eating flaxseeds is good (ALA has its own benefits), but if you're trying to match the EPA/DHA levels from eating fish, you'd need an unrealistic amount. That's why vegans often supplement with algae oil, which provides EPA/DHA directly.`,
    key_points: `### Quick Facts About ALA (Alpha-Linolenic Acid)

- **What it is**: An essential 18-carbon omega-3 fatty acid your body cannot produce
- **Best food sources**: Flaxseeds (23g/100g), chia seeds (18g/100g), walnuts (9g/100g), hemp seeds
- **Conversion to EPA**: ~5-10% (varies by individual, higher in women)
- **Conversion to DHA**: <1% (extremely inefficient)
- **AI (Adequate Intake)**: 1.6g/day men, 1.1g/day women
- **Unique benefits**: Heart health, anti-inflammatory effects independent of conversion`,
    common_misconceptions: [
      "**Myth**: Flaxseed oil provides all the omega-3 benefits of fish oil.\n**Fact**: ALA has its own benefits, but doesn't efficiently convert to EPA/DHA. For brain health and anti-inflammatory effects requiring EPA/DHA, flaxseed oil is not equivalent to fish oil.",
      "**Myth**: Taking more ALA will produce more EPA/DHA.\n**Fact**: Conversion rates plateau. Flooding your system with ALA doesn't proportionally increase conversion—the enzymatic pathway has limits.",
      "**Myth**: Vegetarians/vegans get enough omega-3s from plant sources alone.\n**Fact**: While ALA is adequate, EPA/DHA are often deficient in plant-based diets. Algae-based omega-3 supplements are recommended for vegans.",
      "**Myth**: ALA is just a lesser omega-3 with no direct benefits.\n**Fact**: ALA itself has cardiovascular benefits, reduces inflammation, and is associated with lower heart disease risk—independent of its conversion to EPA/DHA.",
    ],
    examples: [
      "1 tablespoon of flaxseed oil provides ~7g of ALA, meeting several days' worth of adequate intake—but only converting to about 350-700mg EPA and minimal DHA.",
      "Women convert ALA to EPA/DHA at roughly 2.5x the rate of men, possibly due to estrogen's effect on the conversion enzymes.",
      "The PREDIMED trial found that higher ALA intake from walnuts was associated with 50% lower risk of cardiovascular death.",
      "1 oz of walnuts (14 halves) provides 2.5g of ALA—more than a full day's adequate intake.",
    ],
  },

  // 9. Amino Acids (546 words - just needs new fields)
  {
    slug: "aminoacids",
    why_it_matters: `Amino acids are the foundation of protein supplements, muscle builders, and many "recovery" products. Understanding essential vs. non-essential amino acids helps you evaluate products. The 9 essential amino acids (EAAs) must come from diet—your body can't make them. Leucine is the "trigger" for muscle protein synthesis. BCAAs (branched-chain amino acids) were popular but research shows full EAA spectrum works better. Free-form amino acids absorb faster than whole protein, which matters for timing around workouts. This knowledge helps you choose between whey, EAA supplements, and BCAA products.`,
    simple_explanation: `Amino acids are the LEGO bricks that build proteins. Your body needs 20 different types to construct all its proteins—from muscle fibers to enzymes to antibodies. Nine of these are "essential," meaning you must eat them because your body can't manufacture them. When you digest protein from chicken, eggs, or a protein shake, you're breaking it down into individual amino acids, which then get reassembled into whatever proteins your body needs. Supplement-form amino acids skip the digestion step—they're pre-broken-down LEGO pieces ready to use.`,
    key_points: `### Quick Facts About Amino Acids

- **Total types**: 20 standard amino acids make all human proteins
- **Essential (9)**: Histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine—must come from diet
- **Conditionally essential**: Become essential during illness, stress, or rapid growth (glutamine, arginine, cysteine)
- **Leucine**: Key trigger for muscle protein synthesis; ~2.5-3g per meal optimizes MPS
- **Complete protein**: Contains all 9 EAAs in adequate amounts (animal proteins, soy, quinoa)
- **BCAAs vs EAAs**: Full EAA supplements outperform BCAAs alone for muscle building`,
    common_misconceptions: [
      "**Myth**: More protein/amino acids automatically means more muscle.\n**Fact**: Muscle protein synthesis maxes out around 25-40g protein per meal. Excess amino acids are oxidized for energy or converted to glucose/fat—not stored as extra muscle.",
      "**Myth**: BCAA supplements are essential for muscle growth.\n**Fact**: BCAAs (leucine, isoleucine, valine) can't build muscle alone—you need all 9 EAAs. If you eat adequate protein, BCAA supplements provide no additional benefit.",
      "**Myth**: Non-essential amino acids don't matter.\n**Fact**: Non-essential means your body CAN make them, not that they're unimportant. Glycine, for example, is critical for collagen synthesis and may become limiting on very high-protein diets.",
      "**Myth**: Animal protein is always superior to plant protein.\n**Fact**: While many plant proteins are 'incomplete,' combining plant sources (beans + rice) or eating varied plants throughout the day easily provides all EAAs.",
    ],
    examples: [
      "Whey protein is ~25% BCAAs and ~45% EAAs by weight, making it one of the richest sources of leucine for triggering muscle protein synthesis.",
      "The leucine 'threshold' for maximal MPS is about 2.5-3g—found in ~25g whey protein, ~30g chicken, or ~40g of most plant proteins.",
      "Collagen protein is incomplete—it lacks tryptophan entirely—so it can't serve as your only protein source for muscle building.",
      "Free-form EAA supplements reach peak blood levels in ~30 minutes vs ~60-90 minutes for whole protein, making them useful immediately post-workout.",
    ],
  },

  // 10. Anabolic Resistance (452 words - needs boost)
  {
    slug: "anabolicresistance",
    why_it_matters: `If you're over 50 (or buying supplements for aging parents), anabolic resistance explains why protein needs increase with age. Young adults build muscle efficiently with 20-25g protein per meal, but older adults may need 35-40g+ to achieve the same response. This isn't just about muscle size—it affects strength, mobility, fall risk, and metabolic health. Understanding anabolic resistance helps you select appropriate protein amounts and types (leucine-rich, fast-digesting) and explains why "senior formulas" often contain higher protein with added leucine.`,
    simple_explanation: `As we age, our muscles become harder to convince to grow. Think of it like a stubborn lock that needs a bigger key. In your 20s, a small protein meal sends a strong "build muscle" signal. By your 60s, that same meal barely registers—your muscle is "resistant" to the anabolic (building) signal. The solution isn't just more total protein, but more protein per meal, with an emphasis on leucine (the amino acid that triggers muscle building). It's why older adults benefit from higher-protein meals rather than spreading small amounts throughout the day.`,
    key_points: `### Quick Facts About Anabolic Resistance

- **What it is**: Reduced muscle response to protein/exercise in older adults (typically 65+)
- **Young adult threshold**: ~20-25g protein maximally stimulates muscle protein synthesis
- **Older adult threshold**: ~35-40g+ protein needed for equivalent response
- **Key trigger**: Leucine—older adults need ~3-4g per meal vs ~2-2.5g for young adults
- **Contributors**: Lower muscle mass, reduced blood flow, chronic inflammation, physical inactivity
- **Best protein sources**: Fast-digesting, leucine-rich: whey protein, eggs, dairy, lean meats`,
    common_misconceptions: [
      "**Myth**: Anabolic resistance means older adults can't build muscle at all.\n**Fact**: Older adults absolutely can build muscle—they just need larger protein doses and consistent resistance training. The response is diminished, not absent.",
      "**Myth**: Spreading protein evenly throughout the day is best for seniors.\n**Fact**: Due to anabolic resistance, older adults benefit more from fewer, larger protein doses (30-40g per meal) rather than small frequent portions that don't reach the threshold.",
      "**Myth**: Only elite athletes need to worry about anabolic resistance.\n**Fact**: Age-related muscle loss (sarcopenia) affects everyone and is a major driver of frailty, falls, and loss of independence. Addressing anabolic resistance is relevant for all aging adults.",
      "**Myth**: Any protein source works equally well for older adults.\n**Fact**: Fast-digesting, leucine-rich proteins (whey, eggs) trigger muscle protein synthesis more effectively than slow-digesting or leucine-poor options in older adults.",
    ],
    examples: [
      "A study found that 40g of whey protein stimulated muscle protein synthesis 20% more than 20g in older adults, while young adults showed no difference between doses.",
      "Adding 3g of free leucine to a meal increased the muscle protein synthesis response in 70-year-olds to match that of 25-year-olds.",
      "Resistance training partially overcomes anabolic resistance—trained older adults need less protein than sedentary older adults to achieve the same muscle response.",
      "Older adults who consumed 1.2-1.6g protein/kg body weight daily preserved significantly more muscle mass over 3 years than those at the RDA of 0.8g/kg.",
    ],
  },
];

// Execute updates
async function updateTerms() {
  console.log("=== UPDATING FIRST 10 GLOSSARY TERMS ===\n");

  for (const termData of enhancedTerms) {
    const { slug, ...updates } = termData;

    console.log(`Updating: ${slug}...`);

    const { error } = await supabase
      .from("glossary_terms")
      .update(updates)
      .eq("slug", slug);

    if (error) {
      console.error(`  ❌ Error updating ${slug}:`, error.message);
    } else {
      console.log(`  ✅ Updated ${slug}`);
    }
  }

  console.log("\n=== VERIFYING UPDATES ===\n");

  // Verify word counts
  for (const termData of enhancedTerms) {
    const { data: term } = await supabase
      .from("glossary_terms")
      .select(
        "term, definition, expanded_explanation, why_it_matters, simple_explanation, key_points, examples, common_misconceptions"
      )
      .eq("slug", termData.slug)
      .single();

    if (term) {
      const totalWords = [
        term.definition,
        term.expanded_explanation,
        term.why_it_matters,
        term.simple_explanation,
        term.key_points,
        ...(term.examples || []),
        ...(term.common_misconceptions || []),
      ]
        .filter(Boolean)
        .join(" ")
        .split(/\s+/)
        .filter((w) => w.length > 0).length;

      const status = totalWords >= 500 ? "✅" : "⚠️ ";
      console.log(`${status} ${term.term}: ${totalWords} words`);
    }
  }
}

updateTerms().catch(console.error);
