/**
 * Batch 12: Enhance glossary terms 111-120 (alphabetically)
 * Terms: Leucine, Lipid Peroxidation, Loading Phase, Lycopene, Macromineral,
 *        Magnesium Citrate, Magnesium Oxide, Maintenance Dose, Malondialdehyde, Meta-Analysis
 *
 * Run: node scripts/enhance-glossary-batch-12.mjs
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
    slug: "leucine",
    why_it_matters: `Leucine is the king of amino acids for muscle building—it's the primary trigger for muscle protein synthesis. For supplement shoppers, leucine is central to understanding protein quality, BCAA supplements, and optimal post-workout nutrition. The "leucine threshold" concept suggests that a meal needs 2.5-3g of leucine to maximally stimulate muscle building; this is why whey protein (high in leucine) beats plant proteins gram-for-gram for muscle synthesis. Leucine also explains why elderly individuals may need more total protein—they become "anabolically resistant" and require higher leucine to trigger the same response. Understanding leucine helps you evaluate protein sources and decide whether BCAA or leucine supplements add value beyond whole protein.`,
    simple_explanation: `Leucine is an essential amino acid—one you must get from food because your body can't make it. What makes leucine special is that it directly activates mTOR, the master switch for muscle protein synthesis. Think of leucine as the ignition key for muscle building; without enough leucine, the muscle-building machinery doesn't fully turn on, even if other amino acids are present. This is why leucine is called the most "anabolic" amino acid. It's abundant in animal proteins (whey, eggs, meat, fish) and less so in plant proteins (which is why vegans may need more total protein). After exercise, leucine levels in blood signal your muscles to start rebuilding. About 2.5-3g of leucine per meal is considered the threshold for maximal muscle protein synthesis in most adults.`,
    key_points: `### Key Facts About Leucine

- **mTOR activator**: Leucine directly activates the mTOR pathway, the master regulator of muscle protein synthesis—no other amino acid has this effect as strongly
- **Threshold concept**: About 2.5-3g leucine per meal (~25-30g animal protein) is needed to maximally stimulate muscle protein synthesis
- **BCAA leader**: Leucine is the most important of the three BCAAs (leucine, isoleucine, valine) for muscle building; the others play supporting roles
- **Age-related resistance**: Elderly individuals need more leucine (3-4g) per meal to overcome "anabolic resistance" and trigger muscle synthesis
- **Food sources**: Whey protein has ~11% leucine; eggs ~8.5%; beef ~8%; plant proteins typically 6-7%—explaining whey's muscle-building superiority`,
    common_misconceptions: [
      `**Myth:** More leucine is always better for muscle growth.\n**Fact:** Once you hit the 2.5-3g threshold, additional leucine doesn't further increase muscle protein synthesis. Mega-dosing leucine provides no extra benefit and may interfere with other amino acid absorption.`,
      `**Myth:** Leucine supplements are necessary for muscle building.\n**Fact:** If you're eating adequate protein from quality sources (25-30g per meal), you're already getting enough leucine. Supplements mainly help if total protein is inadequate or you're using low-leucine plant proteins.`,
      `**Myth:** BCAAs are just as good as complete protein for muscle building.\n**Fact:** BCAAs provide leucine but lack the other essential amino acids needed to actually BUILD muscle. Leucine turns on the machinery, but you need all amino acids to complete the job.`,
    ],
    examples: [
      "A 30g serving of whey protein provides ~3.3g leucine, exceeding the threshold for maximal muscle protein synthesis—why whey is so popular post-workout",
      "An elderly person eating 20g protein per meal may not trigger full muscle synthesis due to anabolic resistance; increasing to 35-40g (4g+ leucine) overcomes this",
      "Someone eating 30g of rice protein (lower leucine) may not hit the leucine threshold; adding leucine powder or eating more total protein compensates",
      "BCAA supplements during fasted training provide leucine to stimulate muscle building, but complete protein post-workout is still needed for actual muscle repair",
    ],
  },
  {
    slug: "lipidperoxidation",
    why_it_matters: `Lipid peroxidation is why antioxidants matter—it's the specific type of oxidative damage that destroys cell membranes and produces toxic byproducts. For supplement shoppers interested in antioxidants (vitamin E, astaxanthin, CoQ10), understanding lipid peroxidation reveals what these supplements actually protect against. Your cell membranes are made of fats (lipids); when free radicals attack these fats, a chain reaction begins that spreads damage from molecule to molecule. This produces harmful compounds like malondialdehyde (MDA) and 4-HNE that are measured as biomarkers of oxidative stress. Fat-soluble antioxidants (vitamin E, astaxanthin) embed in membranes and break this chain reaction, which is why they're specifically protective against lipid peroxidation.`,
    simple_explanation: `Lipid peroxidation is a chain reaction where free radicals attack the fats in your cell membranes, causing progressive damage. Imagine a row of dominoes: when a free radical "pushes" one fat molecule by stealing an electron, that fat becomes unstable and attacks the next one, and so on. This chain reaction can damage hundreds of fat molecules from a single initiating event. Cell membranes, which are made largely of polyunsaturated fats, are especially vulnerable. The damage produces toxic aldehydes like MDA and 4-HNE that can damage proteins and DNA too—spreading the harm beyond the original membrane. Antioxidants like vitamin E sit in membranes and break the chain by neutralizing radicals before they spread. This is why fat-soluble antioxidants are specifically important for membrane protection.`,
    key_points: `### Key Facts About Lipid Peroxidation

- **Chain reaction**: One free radical can damage many lipid molecules through a self-propagating chain reaction—amplifying initial damage
- **Membrane damage**: Cell membranes are rich in polyunsaturated fatty acids (PUFAs), making them primary targets; damaged membranes lose function
- **Toxic products**: Lipid peroxidation produces reactive aldehydes (MDA, 4-HNE) that damage proteins, DNA, and other cellular components
- **Biomarker use**: MDA, 4-HNE, F2-isoprostanes, and lipid hydroperoxides are measured as markers of oxidative stress in research and clinical settings
- **Fat-soluble antioxidants**: Vitamin E, CoQ10, and astaxanthin embed in membranes to break lipid peroxidation chain reactions—water-soluble antioxidants (vitamin C) can't do this directly`,
    common_misconceptions: [
      `**Myth:** All antioxidants equally protect against lipid peroxidation.\n**Fact:** Fat-soluble antioxidants (vitamin E, astaxanthin) embed in membranes where lipid peroxidation occurs. Water-soluble antioxidants (vitamin C) work in different compartments and can't directly break membrane lipid chain reactions.`,
      `**Myth:** Eating more polyunsaturated fats increases lipid peroxidation risk.\n**Fact:** While PUFAs are vulnerable to oxidation, dietary PUFAs (especially omega-3s) have net benefits. Increased intake should be paired with adequate vitamin E to maintain membrane protection.`,
      `**Myth:** Lipid peroxidation only matters for cell membranes.\n**Fact:** The toxic products of lipid peroxidation (MDA, 4-HNE) spread throughout the cell, damaging proteins and DNA. Membrane damage is the starting point but not the only consequence.`,
    ],
    examples: [
      "Vitamin E (alpha-tocopherol) breaks lipid peroxidation chain reactions by donating an electron without becoming a harmful radical itself",
      "Astaxanthin spans the entire cell membrane, protecting both the inside and outside layers from peroxidation—explaining its exceptional antioxidant potency",
      "High-dose omega-3 supplementation without adequate vitamin E can theoretically increase membrane peroxidation risk—why some fish oil supplements include vitamin E",
      "Athletes after exhausting exercise have elevated MDA levels, indicating lipid peroxidation; antioxidant supplementation may or may not be beneficial depending on timing",
    ],
  },
  {
    slug: "loadingphase",
    why_it_matters: `Loading phases are a common supplement strategy—especially for creatine—but are often misunderstood or unnecessarily applied to supplements that don't need them. For supplement shoppers, understanding loading phases helps you decide when they're worth the higher initial doses (and potential side effects) versus when steady daily dosing works fine. Creatine is the classic example: loading (20g/day for 5-7 days) saturates muscles in a week, while regular dosing (3-5g/day) takes 3-4 weeks to reach the same saturation. If you need results fast, load. If not, regular dosing is gentler on the stomach and works equally well long-term. Most other supplements don't need loading.`,
    simple_explanation: `A loading phase is when you take a higher dose of a supplement for a short period to quickly fill up your body's stores, then drop to a lower maintenance dose to keep them full. Think of it like filling a swimming pool: you can blast it with high-pressure hoses (loading) to fill it fast, then use a garden hose (maintenance) to keep it topped up. Creatine is the prime example—loading with 20g/day for a week saturates muscles quickly, then 3-5g/day maintains those levels. Without loading, 3-5g/day still works but takes 3-4 weeks to reach full saturation. Loading makes sense when the supplement accumulates slowly and you want faster results. It doesn't make sense for supplements that don't accumulate (like caffeine or most herbs) or that reach peak levels quickly anyway.`,
    key_points: `### Key Facts About Loading Phases

- **Creatine classic**: 20g/day for 5-7 days saturates muscles; 3-5g/day maintains—but 3-5g/day without loading reaches same saturation in 3-4 weeks
- **Faster saturation**: Loading shortens time to peak levels; useful when you need performance benefits quickly rather than waiting weeks
- **Not universally needed**: Most supplements don't benefit from loading; it's mainly useful for compounds that accumulate in tissues slowly (creatine, carnosine)
- **Side effects trade-off**: Loading doses often cause more GI discomfort (creatine causes bloating, osmotic diarrhea at high doses); gradual dosing is gentler
- **Same endpoint**: Loading and non-loading approaches reach the same muscle saturation eventually; loading is about speed, not higher ultimate levels`,
    common_misconceptions: [
      `**Myth:** Loading phases are necessary for creatine to work.\n**Fact:** Loading is optional—it just gets you to saturation faster. Taking 3-5g/day from the start works perfectly well; it just takes 3-4 weeks instead of 1 week to fully saturate muscles.`,
      `**Myth:** Most supplements benefit from loading phases.\n**Fact:** Loading only makes sense for supplements that accumulate slowly in tissues. Most supplements (vitamins, herbs, stimulants) don't benefit from loading and just cause more side effects at high doses.`,
      `**Myth:** Higher loading doses mean better long-term results.\n**Fact:** Loading doses accelerate the time to reach saturation but don't create higher ultimate levels. Someone who loads and someone who doesn't will have the same muscle creatine after 4 weeks.`,
    ],
    examples: [
      "Creatine loading: 5g 4x/day for 5-7 days saturates muscles in a week; alternatively, 3-5g/day reaches same saturation in 3-4 weeks without GI side effects",
      "Beta-alanine: some protocols use 4-6g/day loading for faster carnosine elevation, but 3g/day for 4+ weeks achieves similar results with less tingling",
      "Vitamin D: while high initial doses can rapidly raise blood levels, this is more 'correcting deficiency' than traditional loading—long-term maintenance is still needed",
      "Caffeine: loading makes no sense because caffeine doesn't accumulate—each dose works independently based on current blood levels",
    ],
  },
  {
    slug: "lycopene",
    why_it_matters: `Lycopene is the powerful red carotenoid that makes tomatoes red—and it's one of the most researched antioxidants for prostate health, cardiovascular protection, and skin defense. For supplement shoppers, lycopene is relevant because it's the carotenoid with the strongest evidence for prostate cancer risk reduction, and it appears in many "men's health" and cardiovascular formulas. Unlike beta-carotene, lycopene has no vitamin A activity, so it's valued purely for its antioxidant effects. Cooking increases lycopene absorption (tomato sauce > raw tomatoes), and it's fat-soluble, so taking it with fat enhances uptake. Understanding lycopene helps you evaluate prostate support and antioxidant supplements.`,
    simple_explanation: `Lycopene is the pigment that makes tomatoes, watermelons, and pink grapefruits red. It's a carotenoid (same family as beta-carotene) but with a twist: unlike beta-carotene, your body can't convert lycopene into vitamin A. Instead, lycopene is valued as one of the most powerful antioxidants in the carotenoid family, particularly effective at quenching singlet oxygen (a type of reactive oxygen). Lycopene concentrates in certain tissues, especially the prostate gland, skin, and adipose tissue. Observational studies consistently link higher lycopene intake with lower prostate cancer risk, though intervention trials show mixed results. Interestingly, cooking tomatoes increases lycopene availability because heat breaks cell walls, and adding fat (like olive oil) dramatically improves absorption since lycopene is fat-soluble.`,
    key_points: `### Key Facts About Lycopene

- **No vitamin A activity**: Unlike beta-carotene, lycopene cannot convert to vitamin A—its value is purely as an antioxidant
- **Prostate concentration**: Lycopene accumulates preferentially in prostate tissue, which may explain the epidemiological link to prostate health
- **Cooking enhances absorption**: Processed tomatoes (sauce, paste, cooked) provide more bioavailable lycopene than raw tomatoes due to cell wall breakdown
- **Fat improves uptake**: As a fat-soluble compound, lycopene absorption increases 2-3x when consumed with dietary fat (olive oil, cheese)
- **Singlet oxygen quencher**: Lycopene is one of the most effective singlet oxygen scavengers among carotenoids—10x more potent than beta-carotene`,
    common_misconceptions: [
      `**Myth:** Raw tomatoes are the best lycopene source.\n**Fact:** Cooking tomatoes dramatically increases lycopene bioavailability by breaking down cell walls. Tomato paste and sauce provide more absorbable lycopene than raw tomatoes.`,
      `**Myth:** Lycopene supplements are proven to prevent prostate cancer.\n**Fact:** Observational studies strongly link lycopene intake with lower prostate cancer risk, but randomized controlled trials show mixed results. The association is promising but not definitively proven.`,
      `**Myth:** Since lycopene is a carotenoid, it provides vitamin A.\n**Fact:** Lycopene has no vitamin A activity whatsoever. Its chemical structure prevents conversion to retinol. It's valued only as an antioxidant, not as a vitamin A precursor.`,
    ],
    examples: [
      "Two tablespoons of tomato paste provide about 10mg lycopene with high bioavailability; you'd need several raw tomatoes to match this absorption",
      "Taking lycopene supplements with a fat-containing meal increases absorption 2-3 fold compared to taking on an empty stomach",
      "The Mediterranean diet is rich in lycopene from cooked tomatoes with olive oil—combining cooking and fat for optimal absorption",
      "A men's prostate health supplement contains lycopene based on observational studies showing 30-40% lower prostate cancer risk with highest lycopene intake",
    ],
  },
  {
    slug: "macromineral",
    why_it_matters: `Understanding the difference between macrominerals and trace minerals helps supplement shoppers grasp why certain minerals come in gram-sized doses while others are measured in micrograms. Macrominerals—calcium, magnesium, phosphorus, potassium, sodium, chloride, and sulfur—are needed in amounts over 100mg daily, sometimes over 1,000mg. This has practical implications: calcium and magnesium supplements can be large tablets because you need substantial amounts. Potassium supplements are limited to 99mg per pill (by FDA regulation for safety) despite needing 4,700mg daily. Knowing which minerals are macros helps you understand dosing and why getting some minerals from food is more practical than pills.`,
    simple_explanation: `Macrominerals are the "big" essential minerals—the ones your body needs in relatively large amounts (more than 100 milligrams per day). There are seven: calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur. Compare this to trace minerals (like iron, zinc, copper) that are needed in tiny amounts, often just milligrams or even micrograms. The "macro" prefix means large—it's about quantity needed, not importance. All essential minerals are important; macrominerals just happen to be needed in larger amounts because of their widespread roles. Calcium for bones, magnesium for 300+ enzymes, potassium and sodium for nerve and muscle function—these roles require substantial mineral presence. This is why a calcium supplement might be 500-600mg while a zinc supplement is 15mg.`,
    key_points: `### Key Facts About Macrominerals

- **The seven macros**: Calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur—needed in amounts >100mg/day
- **Quantity, not importance**: "Macro" refers to the amount needed, not superiority over trace minerals; all essential minerals matter
- **Supplement size implications**: Macromineral supplements are often large pills because you need significant amounts; trace minerals come in smaller doses
- **Food often better**: Getting 4,700mg potassium or 1,000mg calcium from pills is impractical; food sources become especially important for macrominerals
- **Electrolyte minerals**: Sodium, potassium, and chloride are the main electrolytes; magnesium and calcium also have electrolyte functions`,
    common_misconceptions: [
      `**Myth:** Macrominerals are more important than trace minerals.\n**Fact:** All essential minerals are critical for health. "Macro" refers to the amount needed, not the mineral's importance. Iron deficiency (a trace mineral) is the world's most common nutrient deficiency.`,
      `**Myth:** You can easily supplement all macrominerals with pills.\n**Fact:** Getting adequate potassium (4,700mg) or calcium (1,000mg+) from pills alone is impractical. Macromineral needs often require food sources; supplements help fill gaps.`,
      `**Myth:** Americans consume too much of all macrominerals.\n**Fact:** While sodium intake is excessive, most Americans fall short on potassium, magnesium, and calcium. Macromineral intake is imbalanced, not universally excessive.`,
    ],
    examples: [
      "A calcium supplement is 500-600mg per tablet because the RDA is 1,000-1,200mg—you need large pills or multiple tablets for macrominerals",
      "Potassium supplements are limited to 99mg per pill by FDA regulation, despite the 4,700mg daily recommendation—you can't supplement your way to adequate potassium",
      "The average American consumes 3,400mg sodium (too much) but only 2,600mg potassium (too little)—macromineral balance is off",
      "Magnesium deficiency affects 50% of Americans partly because it's a macromineral needing 400-420mg daily—harder to meet than trace mineral needs",
    ],
  },
  {
    slug: "magnesiumcitrate",
    why_it_matters: `Magnesium citrate is one of the most popular magnesium forms in supplements—and for good reason. For supplement shoppers, understanding magnesium citrate helps navigate the confusing landscape of magnesium supplements. Citrate is well-absorbed (better than oxide, similar to other organic forms), well-tolerated, and cost-effective. It's a solid all-purpose choice for addressing magnesium deficiency. The citrate also adds mild laxative effects, making it particularly useful if you're constipation-prone—though this is a side effect to manage if you have loose stools. Knowing that magnesium citrate is a reliable middle-ground option helps you cut through marketing claims for fancier forms.`,
    simple_explanation: `Magnesium citrate is magnesium bound to citric acid (the acid in citrus fruits). This binding affects how well your body absorbs the magnesium and how it behaves in your gut. Citrate-bound magnesium dissolves well in water and is absorbed efficiently—much better than magnesium oxide, about equal to other well-absorbed forms like glycinate or malate. The citrate portion also draws water into the intestines, giving magnesium citrate a mild laxative effect. This is helpful if you're constipated but potentially bothersome if you're not. Magnesium citrate is available as tablets, capsules, or liquid (the liquid form is used for bowel preparation before colonoscopies). For everyday supplementation, capsules or tablets work well; liquid is more for therapeutic laxative use.`,
    key_points: `### Key Facts About Magnesium Citrate

- **Good absorption**: Well-absorbed (~25-30% bioavailability), significantly better than oxide; comparable to glycinate and other organic forms
- **Laxative effect**: The citrate draws water into intestines, providing mild laxative action—beneficial for constipation, potentially problematic for those with loose stools
- **Cost-effective**: Less expensive than specialized forms like threonate or glycinate while still providing good absorption
- **Elemental magnesium**: About 16% elemental magnesium by weight; a 400mg magnesium citrate supplement provides ~64mg of actual magnesium
- **Versatile**: Good all-purpose form for general magnesium supplementation; particularly suited for those with constipation tendencies`,
    common_misconceptions: [
      `**Myth:** Magnesium citrate is the best-absorbed magnesium form.\n**Fact:** Absorption is similar among organic forms (citrate, glycinate, malate, taurate). Citrate is well-absorbed but not superior to these alternatives—it's just more cost-effective.`,
      `**Myth:** Higher doses of magnesium citrate are always better.\n**Fact:** Higher doses increase laxative effects and may cause diarrhea. Splitting doses through the day or switching to a less laxative form (glycinate) may be needed for high-dose supplementation.`,
      `**Myth:** Liquid magnesium citrate is for regular supplementation.\n**Fact:** Liquid magnesium citrate (Citroma, etc.) is primarily for bowel preparation before colonoscopies—a very high dose with strong laxative effect. Capsules/tablets are for daily supplementation.`,
    ],
    examples: [
      "Someone with constipation takes 400mg magnesium citrate at bedtime and achieves regular bowel movements—the laxative effect becomes a benefit",
      "A person with loose stools switches from magnesium citrate to glycinate to avoid the laxative effect while still getting absorbable magnesium",
      "Magnesium citrate provides about 16% elemental magnesium; a 500mg pill contains ~80mg actual magnesium—check labels for elemental content",
      "For constipation relief, 200-400mg magnesium citrate at bedtime often produces a morning bowel movement without the urgency of stimulant laxatives",
    ],
  },
  {
    slug: "magnesiumoxide",
    why_it_matters: `Magnesium oxide is everywhere in cheap supplements—but it's one of the worst-absorbed forms of magnesium. For supplement shoppers, understanding magnesium oxide's poor bioavailability (4%) explains why some people take magnesium supplements without feeling any benefit. A 500mg magnesium oxide tablet might deliver only 20mg of absorbable magnesium—less than what you'd get from 200mg of citrate. Oxide's main legitimate use is as an antacid or laxative, where low absorption is actually the point. If you want systemic magnesium benefits (muscle relaxation, sleep, blood pressure), oxide is a poor choice; citrate, glycinate, or malate are worth the extra cost.`,
    simple_explanation: `Magnesium oxide is magnesium bound to oxygen—a simple, inexpensive compound that's been used for decades in supplements and antacids. The problem? Your body only absorbs about 4% of magnesium oxide, compared to 25-30% for forms like citrate or glycinate. This happens because magnesium oxide doesn't dissolve well in your intestines, and what doesn't dissolve can't be absorbed. Manufacturers like oxide because it contains 60% elemental magnesium by weight (highest of any form), so they can print big numbers on labels. A "400mg magnesium" from oxide sounds impressive but delivers less actual magnesium to your body than a 150mg dose of citrate. Oxide does work well as an antacid and laxative—but for systemic magnesium benefits, it's a poor choice.`,
    key_points: `### Key Facts About Magnesium Oxide

- **Poor bioavailability**: Only ~4% absorption (some studies say 4-10%), compared to 25-30% for organic forms like citrate or glycinate
- **High elemental content**: Contains 60% magnesium by weight—the highest of any form—which is why manufacturers use it despite poor absorption
- **Antacid/laxative use**: Works as an antacid (neutralizes stomach acid) and osmotic laxative (draws water into intestines)—uses where low absorption is acceptable
- **Common in cheap supplements**: Low cost makes oxide popular in budget supplements, but it delivers less bioavailable magnesium per pill
- **Stool effects**: Strong osmotic laxative effect; often causes loose stools at higher doses, which indicates most magnesium passed through unabsorbed`,
    common_misconceptions: [
      `**Myth:** The "400mg magnesium" on an oxide supplement means you absorb 400mg.\n**Fact:** With 4% bioavailability, a 400mg magnesium oxide pill delivers roughly 16mg of absorbable magnesium. The label shows total magnesium in the pill, not what you actually absorb.`,
      `**Myth:** Magnesium oxide is just as good as other forms if you take more.\n**Fact:** Taking more oxide just causes more laxative effect as unabsorbed magnesium draws water into the colon. You can't compensate for poor absorption by mega-dosing.`,
      `**Myth:** Since magnesium oxide has the highest elemental magnesium, it's the best value.\n**Fact:** Absorption matters more than content. 200mg of magnesium citrate delivers more absorbable magnesium than 400mg of oxide, often at similar cost.`,
    ],
    examples: [
      "Someone takes 400mg magnesium oxide for muscle cramps but sees no improvement; switching to 300mg magnesium glycinate resolves the cramps due to better absorption",
      "Milk of Magnesia (magnesium hydroxide) and magnesium oxide work as laxatives precisely because they're poorly absorbed—the unabsorbed magnesium draws water into the bowel",
      "A budget supplement provides '500mg magnesium' from oxide; doing the math: 500mg × 60% elemental × 4% absorption = only 12mg actually absorbed",
      "Magnesium oxide effectively neutralizes stomach acid (antacid use), where systemic absorption isn't the goal—low bioavailability is actually fine here",
    ],
  },
  {
    slug: "maintenancedose",
    why_it_matters: `Understanding maintenance dosing helps supplement shoppers plan long-term supplementation effectively. After achieving optimal levels (sometimes through a loading phase), the maintenance dose keeps you there with the minimum effective amount—saving money and reducing side effect risk. For supplements like creatine (3-5g/day), vitamin D (1,000-2,000 IU/day after correcting deficiency), or omega-3s (1-2g/day), the maintenance dose is what you'll take indefinitely. Knowing this helps you budget for ongoing costs and understand that consistency at the maintenance dose matters more than occasional high doses. It's the tortoise-and-hare principle: steady maintenance beats sporadic high dosing.`,
    simple_explanation: `A maintenance dose is the ongoing daily amount of a supplement that keeps your blood or tissue levels optimal after they've been established. Think of it like maintaining a full gas tank: once the tank is full, you just need to replace what you use each day, not fill it from empty again. If a supplement accumulates in your body (like creatine or vitamin D), you might use a higher loading dose initially, then drop to a lower maintenance dose. If it doesn't accumulate (like most water-soluble vitamins or herbs), there's no loading phase and you just take the maintenance dose from the start. The maintenance dose is designed to match what your body uses or excretes daily, keeping levels stable without excessive buildup.`,
    key_points: `### Key Facts About Maintenance Dose

- **Replaces daily use/loss**: The maintenance dose matches your body's daily consumption or elimination of the supplement, maintaining stable levels
- **Lower than loading dose**: When loading is used, maintenance is typically 1/3 to 1/5 of the loading dose (e.g., creatine: 20g load → 3-5g maintain)
- **Long-term perspective**: Maintenance dosing is indefinite; consistency over months and years matters more than any single dose
- **Cost efficiency**: Lower maintenance doses save money compared to continued high dosing; calculate monthly costs based on maintenance, not loading
- **Individual variation**: Optimal maintenance dose varies between people based on body size, diet, absorption, and activity level`,
    common_misconceptions: [
      `**Myth:** Higher doses are always better, even for maintenance.\n**Fact:** Once you reach optimal levels, higher doses don't provide additional benefit and may increase side effects or waste money. Maintenance doses are calibrated to sustain, not exceed, optimal levels.`,
      `**Myth:** You can skip maintenance doses if you loaded properly.\n**Fact:** Loading just gets you to peak levels faster. Without maintenance dosing, levels decline back toward baseline over days to weeks, losing the benefits you established.`,
      `**Myth:** The maintenance dose is the same for everyone.\n**Fact:** Body size, activity level, diet, and individual absorption all affect optimal maintenance. Athletes may need more creatine maintenance; darker-skinned individuals may need more vitamin D.`,
    ],
    examples: [
      "After creatine loading (20g/day × 7 days), maintenance of 3-5g/day sustains muscle saturation indefinitely; skipping maintenance causes levels to decline over 4-6 weeks",
      "After correcting vitamin D deficiency with 50,000 IU weekly for 8 weeks, maintenance of 1,000-2,000 IU daily maintains healthy blood levels year-round",
      "Fish oil has no loading phase; 1-2g EPA+DHA daily is the maintenance dose from day one, though full membrane incorporation takes weeks",
      "Someone larger (220 lbs) may need 5g creatine maintenance; someone smaller (130 lbs) may maintain on 3g—body mass affects requirements",
    ],
  },
  {
    slug: "mda",
    why_it_matters: `Malondialdehyde (MDA) is the most commonly measured marker of oxidative stress in supplement research—making it essential for understanding antioxidant supplement studies. When you see a study claiming an antioxidant "reduced oxidative stress," they often measured MDA. For supplement shoppers, understanding MDA helps you interpret research on vitamin E, CoQ10, astaxanthin, and other antioxidants. High MDA indicates lipid peroxidation is occurring—cell membrane fats are being damaged. Supplements that lower MDA are genuinely reducing oxidative damage, though whether this translates to clinical benefits is a separate question. Knowing MDA gives you a tool to evaluate antioxidant claims beyond marketing speak.`,
    simple_explanation: `Malondialdehyde (MDA) is a toxic molecule produced when polyunsaturated fats in your cell membranes are attacked by free radicals—a process called lipid peroxidation. Think of MDA as the "smoke" from a fire: when oxidative damage is happening to your cell membranes, MDA is released as a byproduct. Scientists measure MDA in blood or urine to assess how much oxidative damage is occurring in your body. High MDA levels suggest significant lipid peroxidation and oxidative stress. Antioxidant supplements that reduce MDA are genuinely decreasing oxidative damage. MDA itself is also harmful—it can bind to proteins and DNA, causing additional damage. This makes MDA both a marker of oxidative stress AND a contributor to it.`,
    key_points: `### Key Facts About Malondialdehyde

- **Lipid peroxidation marker**: MDA is produced when polyunsaturated fats in membranes are oxidized; high MDA indicates ongoing lipid damage
- **TBARS test**: MDA is often measured using the TBARS (thiobarbituric acid reactive substances) assay—common in antioxidant research
- **Toxic product**: Beyond being a marker, MDA itself is harmful—it forms adducts with proteins and DNA, contributing to cellular dysfunction
- **Antioxidant studies**: Most antioxidant supplement studies measure MDA as a primary endpoint for oxidative stress reduction
- **Context dependent**: Elevated MDA occurs in exercise, aging, chronic disease, and environmental toxin exposure—it reflects many forms of oxidative stress`,
    common_misconceptions: [
      `**Myth:** Low MDA means you're completely protected from oxidative damage.\n**Fact:** MDA specifically reflects lipid peroxidation. Other types of oxidative damage (protein oxidation, DNA damage) require different markers. MDA is one piece of the oxidative stress picture.`,
      `**Myth:** Reducing MDA guarantees health benefits.\n**Fact:** While high MDA is associated with disease, trials lowering MDA with antioxidants haven't consistently shown clinical benefits. MDA may be a marker of damage rather than a treatment target.`,
      `**Myth:** MDA levels are stable and reliable.\n**Fact:** MDA levels fluctuate with diet, exercise, and time of day. The TBARS assay also has limitations in specificity. Single measurements should be interpreted cautiously.`,
    ],
    examples: [
      "An astaxanthin study shows 40% reduction in MDA after 12 weeks—evidence that the antioxidant is reducing lipid peroxidation in participants",
      "Intense exercise temporarily elevates MDA as muscles produce free radicals; this is normal and may even signal beneficial adaptation",
      "Smokers have chronically elevated MDA levels, reflecting the ongoing oxidative stress from cigarette smoke—one measurable way smoking damages health",
      "A vitamin E study measures MDA, F2-isoprostanes, and 8-OHdG to assess different types of oxidative damage—comprehensive oxidative stress assessment",
    ],
  },
  {
    slug: "metaanalysis",
    why_it_matters: `Meta-analyses are the highest level of evidence in supplement research—understanding them helps you evaluate "what the science really shows" beyond individual studies. For supplement shoppers, meta-analyses matter because single studies can be misleading (too small, poorly designed, or just statistical flukes). When you see claims like "studies show vitamin D reduces infection risk," a meta-analysis pooling 20+ trials is far more reliable than any single study. However, meta-analyses have limitations: garbage in, garbage out (if included studies are flawed, the meta-analysis is too), and combining different populations or doses can obscure important differences. Knowing how to interpret meta-analyses makes you a more informed consumer.`,
    simple_explanation: `A meta-analysis is a statistical method that combines results from multiple independent studies to reach a stronger conclusion than any single study could provide. Imagine you want to know if vitamin D prevents colds. One study with 100 people might show a benefit; another with 200 people might show nothing. A meta-analysis combines these (and more) to ask: "What does ALL the evidence, taken together, suggest?" By pooling data from thousands of participants across many studies, meta-analyses increase statistical power and reliability. They can detect real effects that single studies miss and identify when apparent effects are just noise. Meta-analyses typically report pooled effect sizes (like relative risk or standardized mean difference) and assess heterogeneity (whether studies agree or disagree).`,
    key_points: `### Key Facts About Meta-Analyses

- **Pooled power**: Combining many studies increases sample size and statistical power, making small but real effects detectable
- **Highest evidence level**: In evidence hierarchies, systematic reviews with meta-analyses rank above individual RCTs for determining "what works"
- **Heterogeneity matters**: If included studies show conflicting results (high heterogeneity), the pooled result may be misleading—consistency strengthens conclusions
- **Garbage in, garbage out**: Meta-analyses are only as good as the included studies; pooling flawed studies produces flawed conclusions
- **Publication bias risk**: Studies with positive results are more likely to be published; meta-analyses may overestimate effects if negative studies are missing`,
    common_misconceptions: [
      `**Myth:** Meta-analyses are always more reliable than individual studies.\n**Fact:** A meta-analysis of poorly designed studies isn't better than a single well-designed trial. Quality of included studies and consistency of results matter as much as the pooled result.`,
      `**Myth:** If a meta-analysis shows an effect, the supplement definitely works.\n**Fact:** Meta-analyses have limitations—publication bias, heterogeneity, and combining different populations/doses can lead to misleading conclusions. Critical appraisal is still needed.`,
      `**Myth:** Meta-analyses definitively settle scientific questions.\n**Fact:** Different meta-analyses on the same topic often reach different conclusions depending on inclusion criteria and statistical methods. Science evolves; meta-analyses are snapshots, not final verdicts.`,
    ],
    examples: [
      "A single RCT of 200 people shows omega-3s reduce heart disease by 20% (p=0.08, not significant); a meta-analysis of 20 RCTs with 68,000 people finds a 9% reduction (p<0.01, significant)",
      "A meta-analysis of vitamin E and heart disease shows overall no effect, but subgroup analysis reveals benefit in people with existing heart disease—heterogeneity masked the finding",
      "Two meta-analyses of the same supplement reach opposite conclusions because one included observational studies while the other only included RCTs—methods matter",
      "A Cochrane review (high-quality systematic review) includes only low-risk-of-bias RCTs; a journal meta-analysis includes weaker studies and shows larger effects",
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
  console.log("=== BATCH 12: Enhancing Glossary Terms 111-120 ===\n");

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
