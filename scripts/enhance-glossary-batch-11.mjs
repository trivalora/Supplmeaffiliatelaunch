/**
 * Batch 11: Enhance glossary terms 101-110 (alphabetically)
 * Terms: Insulin, Insulin Resistance, Interleukin-1, Interleukin-6, Inulin-type Fructans,
 *        Irritable Bowel Syndrome, Isoleucine, Joint Health, Lactobacillus, LDL Cholesterol
 *
 * Run: node scripts/enhance-glossary-batch-11.mjs
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
    slug: "insulin",
    why_it_matters: `Insulin is the master hormone of metabolism—understanding it illuminates blood sugar control, weight management, and metabolic health. For supplement shoppers, insulin is relevant because many supplements target insulin-related pathways: berberine and chromium improve insulin sensitivity, cinnamon may enhance insulin signaling, alpha-lipoic acid supports glucose uptake. However, insulin's role is often oversimplified. It's not just about lowering blood sugar—insulin signals cells to store energy, build protein, and inhibit fat breakdown. Understanding insulin helps you see why improving insulin sensitivity (not just lowering glucose) is the real goal, and why lifestyle factors (exercise, sleep, weight) affect insulin far more than any supplement.`,
    simple_explanation: `Insulin is a hormone your pancreas releases after eating to help cells absorb glucose (blood sugar) for energy or storage. Think of insulin as a key that unlocks cell doors—without it, glucose stays stuck in your bloodstream even as your cells starve for fuel. When you eat carbohydrates, blood sugar rises, triggering insulin release. Insulin then signals muscle cells to absorb glucose for energy, liver cells to store glucose as glycogen, and fat cells to store excess energy as fat. Between meals, insulin levels drop, allowing your body to release stored energy. In type 1 diabetes, the pancreas can't make insulin. In type 2 diabetes and prediabetes, cells become resistant to insulin's signal, requiring more and more insulin to do the same job—until the system eventually fails.`,
    key_points: `### Key Facts About Insulin

- **Storage hormone**: Insulin promotes energy storage—glucose into glycogen (muscles/liver), glucose and fatty acids into fat tissue, amino acids into muscle protein
- **Pancreatic origin**: Produced by beta cells in pancreatic islets; type 1 diabetes destroys these cells; type 2 diabetes involves resistance to insulin's signal
- **Fasting vs. fed states**: High insulin (fed state) = storage mode; low insulin (fasted state) = release mode—this switch is fundamental to metabolism
- **Beyond glucose**: Insulin affects protein synthesis, fat metabolism, cell growth, and even brain function—it's not just a "blood sugar hormone"
- **Insulin resistance epidemic**: An estimated 40% of US adults have some degree of insulin resistance, often years before diabetes diagnosis`,
    common_misconceptions: [
      `**Myth:** Insulin is "bad" and should be minimized.\n**Fact:** Insulin is essential for life and has important anabolic functions (building muscle, storing nutrients). The problem is chronically elevated insulin from resistance and overconsumption—not insulin itself.`,
      `**Myth:** Only carbs affect insulin levels.\n**Fact:** Protein also stimulates insulin release (though less than carbs), which is necessary for amino acid uptake into cells. Fat has minimal direct insulin effect but affects overall metabolic context.`,
      `**Myth:** Taking insulin-sensitizing supplements eliminates the need for lifestyle changes.\n**Fact:** Supplements like berberine have modest effects on insulin sensitivity. Exercise and weight loss have far larger effects—resistance training can improve insulin sensitivity by 20-40% on its own.`,
    ],
    examples: [
      "After eating 50g of carbohydrates, a healthy person's insulin spikes, clears glucose in 1-2 hours, then returns to baseline; an insulin-resistant person needs more insulin and takes longer",
      "Resistance training improves insulin sensitivity by increasing muscle glucose transporters (GLUT4)—muscles become more responsive to insulin's signal",
      "Someone on a ketogenic diet has low insulin levels most of the time, keeping their body in a fat-releasing rather than fat-storing mode",
      "Berberine (500mg 2-3x daily) improves insulin sensitivity partly through AMPK activation—mimicking some cellular effects of exercise",
    ],
  },
  {
    slug: "insulinresistance",
    why_it_matters: `Insulin resistance is the metabolic dysfunction underlying prediabetes, type 2 diabetes, metabolic syndrome, and much of cardiovascular disease. For supplement shoppers, understanding insulin resistance is crucial because it's what blood sugar supplements should actually target—not just lowering glucose numbers, but improving how cells respond to insulin. Berberine, chromium, alpha-lipoic acid, and magnesium all have evidence for improving insulin sensitivity. But here's the key insight: lifestyle interventions (weight loss, exercise, sleep) improve insulin resistance far more than any supplement. Understanding this helps you set realistic expectations and prioritize the most effective interventions first.`,
    simple_explanation: `Insulin resistance means your cells don't respond properly to insulin's signal to absorb glucose. Imagine insulin as a key and cell receptors as locks—in insulin resistance, the locks become rusty and don't open easily. Your pancreas compensates by making more insulin (bigger keys), keeping blood sugar normal for years while insulin levels creep higher. Eventually, even massive amounts of insulin can't force the locks open, and blood sugar rises—that's type 2 diabetes. What causes the locks to rust? Excess body fat (especially visceral fat around organs), chronic inflammation, lack of exercise, poor sleep, and genetics all contribute. The good news is that insulin resistance is largely reversible—weight loss, exercise, and even modest lifestyle changes can significantly improve insulin sensitivity.`,
    key_points: `### Key Facts About Insulin Resistance

- **Hidden problem**: Insulin resistance often exists 5-10 years before blood sugar becomes abnormal—fasting insulin and HOMA-IR can detect it earlier
- **Compensation phase**: The pancreas produces extra insulin to overcome resistance, keeping glucose normal while insulin levels rise—this masks the underlying problem
- **Beyond diabetes**: Insulin resistance links to heart disease, fatty liver, PCOS, certain cancers, and cognitive decline—it's a systemic metabolic dysfunction
- **Visceral fat connection**: Fat around internal organs (visceral fat) is particularly inflammatory and insulin-resistance-promoting; belly fat is a key driver
- **Reversibility**: Insulin resistance can improve dramatically with weight loss (especially 5-10%), regular exercise, quality sleep, and stress management`,
    common_misconceptions: [
      `**Myth:** Insulin resistance only matters if you have diabetes.\n**Fact:** Insulin resistance precedes diabetes by years and drives many chronic diseases even without elevated glucose. Addressing it early prevents diabetes and reduces cardiovascular risk.`,
      `**Myth:** Thin people can't be insulin resistant.\n**Fact:** "Metabolically obese normal weight" individuals exist—thin but with visceral fat, poor diet, and sedentary lifestyle causing insulin resistance. It's about fat distribution and metabolic health, not just weight.`,
      `**Myth:** Low-carb diets cure insulin resistance.\n**Fact:** Low-carb diets lower insulin levels and may improve symptoms, but don't necessarily fix underlying resistance. Exercise and body composition changes have more lasting effects on cellular insulin sensitivity.`,
    ],
    examples: [
      "A person with fasting glucose of 95 mg/dL (normal) but fasting insulin of 20 μIU/mL (high) has hidden insulin resistance—HOMA-IR reveals what glucose misses",
      "10% weight loss typically improves insulin sensitivity by 30-50%—more effective than any supplement for reversing insulin resistance",
      "Walking for 30 minutes after meals improves insulin sensitivity acutely; muscle contraction activates glucose uptake independent of insulin",
      "Berberine improves insulin resistance partly by activating AMPK, the same pathway exercise stimulates—but effects are smaller than actual exercise",
    ],
  },
  {
    slug: "il1",
    why_it_matters: `Interleukin-1 (IL-1) is a key pro-inflammatory cytokine involved in the body's initial response to injury and infection—but also in chronic inflammatory diseases. For supplement shoppers, IL-1 matters because it's part of the inflammatory cascade that anti-inflammatory supplements claim to target. Some supplements (curcumin, omega-3s, specialized pro-resolving mediators) may reduce IL-1 production or activity. Understanding IL-1 helps you appreciate that inflammation is complex—IL-1 is essential for fighting infections, but chronically elevated IL-1 contributes to conditions like gout, rheumatoid arthritis, and atherosclerosis. The goal isn't eliminating IL-1 but keeping inflammatory responses appropriate.`,
    simple_explanation: `Interleukin-1 (IL-1) is one of the first alarm signals your immune system sounds when it detects danger. When cells are damaged or pathogens invade, IL-1 is released to recruit immune cells, cause fever (which helps fight infection), and ramp up inflammation. There are two main forms: IL-1α (mostly stays in tissues) and IL-1β (released into blood and circulates). IL-1 is like a fire alarm—essential when there's a real fire (infection, injury), but problematic when it keeps going off unnecessarily. In chronic inflammatory diseases, IL-1 is overproduced or not properly shut off, driving ongoing inflammation that damages tissues. Some biologic drugs block IL-1 directly (like anakinra for rheumatoid arthritis and gout), and certain supplements aim to reduce IL-1 more gently.`,
    key_points: `### Key Facts About Interleukin-1

- **Two forms**: IL-1α stays mostly in cells/tissues; IL-1β is secreted and circulates—both trigger inflammatory responses
- **Inflammasome activation**: IL-1β is activated by NLRP3 inflammasome, which responds to cellular stress signals—a key checkpoint for inflammation
- **Fever inducer**: IL-1 acts on the hypothalamus to raise body temperature—fever is an IL-1-mediated immune response
- **Gout connection**: Uric acid crystals strongly activate NLRP3 inflammasome and IL-1, which is why IL-1 blockers are effective for gout
- **Supplement targets**: Omega-3s, curcumin, and other anti-inflammatory compounds may reduce IL-1 production, though effects are modest compared to biologic drugs`,
    common_misconceptions: [
      `**Myth:** All IL-1 activity is harmful.\n**Fact:** IL-1 is essential for fighting infections and initiating tissue repair. Problems occur when IL-1 is chronically elevated or not properly resolved—appropriate IL-1 response is protective.`,
      `**Myth:** Supplements can block IL-1 as effectively as drugs.\n**Fact:** Biologic IL-1 blockers (anakinra, canakinumab) are highly specific and potent. Supplements may modestly reduce IL-1 production but can't match drug-level effects for serious inflammatory conditions.`,
      `**Myth:** Measuring IL-1 levels is routine.\n**Fact:** IL-1 is rarely measured clinically because it has a very short half-life and fluctuates rapidly. CRP and ESR are more stable inflammatory markers commonly used.`,
    ],
    examples: [
      "A gout flare is driven by IL-1β released when immune cells encounter uric acid crystals; IL-1 blockers can abort flares when other treatments fail",
      "Omega-3 fatty acids (EPA/DHA) reduce IL-1β production from macrophages in cell studies and may contribute to their anti-inflammatory effects in humans",
      "The NLRP3 inflammasome (which activates IL-1β) responds to various stress signals including saturated fats, potentially linking diet to inflammation",
      "Fever during infection is largely an IL-1-mediated response; suppressing fever with NSAIDs may slightly prolong illness by reducing this beneficial effect",
    ],
  },
  {
    slug: "il6",
    why_it_matters: `Interleukin-6 (IL-6) is one of the most commonly measured inflammatory markers in research—making it highly relevant for evaluating supplement anti-inflammatory claims. For supplement shoppers, IL-6 appears frequently in clinical trials of curcumin, omega-3s, and other anti-inflammatory compounds. However, IL-6 has a dual nature: it's pro-inflammatory when released by fat tissue and immune cells (chronic low-grade inflammation), but anti-inflammatory and beneficial when released by muscles during exercise. This complexity means "lowering IL-6" isn't always the goal—context matters. Understanding IL-6 helps you interpret supplement research more accurately.`,
    simple_explanation: `Interleukin-6 (IL-6) is an immune signaling molecule (cytokine) with a split personality. In chronic inflammation—from obesity, aging, or disease—IL-6 from fat tissue and immune cells drives harmful inflammatory processes linked to heart disease, diabetes, and depression. This is "bad IL-6." But during exercise, muscles release IL-6 in large amounts, and this "good IL-6" actually has anti-inflammatory effects, improves insulin sensitivity, and helps burn fat. Same molecule, opposite effects depending on context. IL-6 is commonly measured in blood as an inflammatory marker; levels above 2-3 pg/mL may indicate chronic inflammation. Reducing chronically elevated IL-6 is beneficial, but blocking the acute IL-6 release from exercise would be counterproductive.`,
    key_points: `### Key Facts About Interleukin-6

- **Context-dependent**: Chronic IL-6 (from fat, immune cells) is pro-inflammatory and harmful; acute IL-6 (from exercising muscle) is anti-inflammatory and beneficial
- **Commonly measured**: IL-6 is a frequent endpoint in supplement inflammation studies; it's more specific than CRP for some research questions
- **Obesity connection**: Visceral fat tissue produces IL-6 chronically, contributing to the inflammatory state that links obesity to metabolic disease
- **Exercise paradox**: A single exercise session can increase IL-6 100-fold from muscles, but regular exercise reduces baseline chronic IL-6—acute and chronic effects differ
- **Brain effects**: IL-6 crosses the blood-brain barrier and may contribute to inflammation-related depression and cognitive effects`,
    common_misconceptions: [
      `**Myth:** IL-6 is always bad and should be reduced.\n**Fact:** Exercise-induced IL-6 from muscles has anti-inflammatory and metabolic benefits. The goal is reducing chronic low-grade IL-6 from fat tissue and immune activation, not blocking all IL-6 activity.`,
      `**Myth:** High IL-6 after exercise means exercise causes inflammation.\n**Fact:** Post-exercise IL-6 spikes are beneficial—they stimulate anti-inflammatory responses and improve insulin sensitivity. This is fundamentally different from chronic inflammatory IL-6 elevation.`,
      `**Myth:** CRP and IL-6 always move together.\n**Fact:** IL-6 helps stimulate CRP production in the liver, but their levels don't always correlate. IL-6 changes faster and may reflect different aspects of inflammation than CRP.`,
    ],
    examples: [
      "A sedentary obese person has chronically elevated IL-6 from fat tissue; regular exercise reduces this baseline inflammation even as each workout transiently spikes IL-6",
      "Curcumin supplementation reduces IL-6 levels in meta-analyses of inflammatory conditions—one measure of its anti-inflammatory effect",
      "IL-6 blocking drugs (tocilizumab) are used for rheumatoid arthritis and cytokine storm—demonstrating IL-6's role in serious inflammatory conditions",
      "Someone with depression has elevated IL-6; anti-inflammatory interventions (omega-3s, exercise) that lower IL-6 may contribute to mood improvement",
    ],
  },
  {
    slug: "inulintypefructans",
    why_it_matters: `Inulin-type fructans (including inulin and FOS) are the most researched and commonly used prebiotics in supplements. For supplement shoppers, understanding inulin-type fructans helps navigate the prebiotic market—these are the fibers that actually have evidence for increasing beneficial bacteria, especially Bifidobacteria. However, they're also FODMAPs that cause significant gas and bloating in many people. Knowing that inulin and FOS are essentially the same thing (just different chain lengths), that they're high-FODMAP, and that doses above 10g commonly cause GI symptoms helps you use these supplements appropriately—starting low, increasing slowly, and avoiding them if you're FODMAP-sensitive.`,
    simple_explanation: `Inulin-type fructans are chains of fructose molecules linked together in a way your digestive enzymes can't break apart—so they pass through to your colon intact where bacteria ferment them. Inulin is the longer-chain version (up to 60 fructose units); fructo-oligosaccharides (FOS) are shorter chains (3-9 units). Both are considered prebiotics because they selectively feed beneficial bacteria, especially Bifidobacteria. As these bacteria ferment the fructans, they produce beneficial short-chain fatty acids (like butyrate) and gas—which is why these prebiotics commonly cause bloating. Inulin-type fructans are naturally found in chicory root, Jerusalem artichokes, garlic, onions, and asparagus. In supplements, they appear as "inulin," "chicory root fiber," "FOS," or "oligofructose."`,
    key_points: `### Key Facts About Inulin-type Fructans

- **Bifidogenic effect**: Consistently and reliably increase Bifidobacteria populations—one of the best-proven prebiotic effects
- **Short-chain fatty acids**: Fermentation produces acetate, propionate, and butyrate—beneficial for colon health, immunity, and metabolism
- **FODMAP status**: Inulin and FOS are high-FODMAP and contraindicated for IBS patients and others with FODMAP sensitivity
- **Dose tolerance**: 2-5g typically well-tolerated; 10-15g causes GI symptoms in most people; start low and increase gradually
- **Label terms**: "Inulin," "chicory root fiber," "FOS," "fructo-oligosaccharides," and "oligofructose" all refer to inulin-type fructans`,
    common_misconceptions: [
      `**Myth:** Inulin and FOS are different things with different effects.\n**Fact:** Inulin and FOS are both inulin-type fructans—same basic chemistry, just different chain lengths. Effects are very similar; FOS may ferment slightly faster due to shorter chains.`,
      `**Myth:** Prebiotic fiber supplements are universally beneficial.\n**Fact:** Inulin-type fructans are high-FODMAP and can significantly worsen symptoms in IBS and FODMAP-sensitive individuals. They're contraindicated for a substantial portion of the population.`,
      `**Myth:** If a prebiotic causes gas, it's not working or you're intolerant.\n**Fact:** Gas production indicates fermentation IS happening. Some gas is normal and expected. Excessive, painful gas suggests too-high doses or genuine intolerance requiring dose reduction or avoidance.`,
    ],
    examples: [
      "A gut health supplement contains 6g 'chicory root fiber' per serving—this is inulin that may cause significant bloating if you're not accustomed to it",
      "Someone with IBS takes a probiotic containing added FOS and experiences worsening symptoms—the FOS, not the probiotics, is the culprit",
      "Starting with 2g inulin and increasing by 1g weekly allows gut bacteria to adapt, minimizing bloating compared to jumping to full doses",
      "Garlic and onions cause gas in FODMAP-sensitive people because they contain inulin-type fructans—natural sources of the same compounds in prebiotic supplements",
    ],
  },
  {
    slug: "ibs",
    why_it_matters: `Irritable bowel syndrome (IBS) affects 10-15% of the population—making it extremely relevant for supplement shoppers seeking digestive relief. For IBS sufferers, understanding the condition helps evaluate the many supplements marketed for gut health. Evidence exists for peppermint oil, certain probiotics (Bifidobacterium infantis 35624, Lactobacillus plantarum 299v), soluble fiber, and some herbal formulas. However, the low-FODMAP diet often provides more relief than any supplement. Knowing that IBS is a functional disorder (symptoms without visible damage) helps distinguish it from inflammatory bowel disease (IBD) and explains why treatment focuses on symptom management rather than healing damaged tissue.`,
    simple_explanation: `Irritable bowel syndrome (IBS) is a chronic condition where the gut and brain miscommunicate, causing abdominal pain, bloating, and altered bowel habits (diarrhea, constipation, or both) without any visible damage to the intestines. Think of it as the gut's alarm system being too sensitive—it overreacts to normal signals like gas or food, causing pain and disruption. Unlike inflammatory bowel disease (IBD), which involves visible inflammation and tissue damage, IBS is "functional"—the gut looks normal under examination but doesn't function normally. Triggers include certain foods (especially FODMAPs), stress, hormones, and disrupted gut bacteria. IBS is diagnosed based on symptoms (Rome IV criteria) after ruling out other conditions. It's not dangerous but significantly impacts quality of life.`,
    key_points: `### Key Facts About Irritable Bowel Syndrome

- **Gut-brain disorder**: IBS involves dysfunction in how the gut and brain communicate—heightened gut sensitivity and abnormal gut-brain signaling
- **Subtypes**: IBS-D (diarrhea-predominant), IBS-C (constipation-predominant), IBS-M (mixed)—different subtypes may respond to different treatments
- **Low-FODMAP diet**: The most effective dietary intervention, with 70%+ of patients improving—reduces fermentable carbohydrates that trigger symptoms
- **Evidence-based supplements**: Peppermint oil (enteric-coated), specific probiotic strains, and soluble fiber have clinical evidence; most "gut health" supplements don't
- **Not IBD**: IBS causes symptoms but no tissue damage; inflammatory bowel disease (Crohn's, ulcerative colitis) involves visible inflammation—different conditions despite similar names`,
    common_misconceptions: [
      `**Myth:** IBS is "just stress" or psychological.\n**Fact:** IBS has real physiological components—altered gut motility, visceral hypersensitivity, microbiome changes, and gut-brain axis dysfunction. Stress can trigger symptoms, but IBS is not imaginary.`,
      `**Myth:** Fiber always helps IBS.\n**Fact:** Insoluble fiber (wheat bran) can worsen IBS symptoms. Soluble fiber (psyllium) is generally better tolerated. Prebiotic fibers (inulin, FOS) are high-FODMAP and often make IBS worse.`,
      `**Myth:** Any probiotic will help IBS.\n**Fact:** Most probiotics haven't been tested specifically for IBS. Only certain strains (B. infantis 35624, L. plantarum 299v, VSL#3) have clinical evidence. Generic "probiotic blends" may or may not help.`,
    ],
    examples: [
      "Someone with IBS-D finds 70% symptom reduction on low-FODMAP diet within 4 weeks—dietary change more effective than most medications or supplements",
      "Peppermint oil (enteric-coated, 0.2-0.4mL 3x daily) reduces IBS symptoms through smooth muscle relaxation in the gut",
      "A person takes a 'gut health' probiotic with added inulin; bloating worsens because inulin is high-FODMAP despite being 'prebiotic'",
      "IBS symptoms worsen during stressful periods and improve on vacation—demonstrating the gut-brain connection without meaning symptoms are imaginary",
    ],
  },
  {
    slug: "isoleucine",
    why_it_matters: `Isoleucine is one of the three branched-chain amino acids (BCAAs), alongside leucine and valine, that are heavily marketed for muscle building and exercise performance. For supplement shoppers, isoleucine appears in BCAA supplements, EAA supplements, and protein powders. While leucine gets most of the muscle-building attention, isoleucine has unique roles in glucose uptake and energy metabolism during exercise. Understanding that BCAAs are most beneficial when total protein intake is inadequate—and that whole protein foods provide all essential amino acids together—helps you evaluate whether BCAA supplements are worth the cost or whether protein-rich foods serve you better.`,
    simple_explanation: `Isoleucine is an essential amino acid—your body can't make it, so you must get it from food or supplements. It's one of three "branched-chain" amino acids (BCAAs), named for their chemical structure. Isoleucine has special roles in muscle energy metabolism and glucose regulation. During exercise, muscles can burn isoleucine directly for fuel. Isoleucine also enhances glucose uptake into muscles, helping with blood sugar control. In the BCAA trio, leucine is the star for muscle protein synthesis, but isoleucine and valine have supporting roles in energy and nitrogen balance. Isoleucine is found in meat, fish, eggs, dairy, and legumes. BCAA supplements provide concentrated isoleucine (usually in a 2:1:1 ratio with leucine and valine), but whether these outperform whole protein foods for most people is debatable.`,
    key_points: `### Key Facts About Isoleucine

- **Essential amino acid**: Cannot be synthesized by the body; must come from diet—found abundantly in animal proteins and combined plant proteins
- **Branched-chain structure**: One of three BCAAs (with leucine and valine) that share a branched molecular structure and metabolic pathways
- **Glucose uptake**: Isoleucine specifically enhances glucose uptake into muscle cells, potentially supporting blood sugar control during and after exercise
- **Energy substrate**: Unlike most amino acids, BCAAs including isoleucine can be directly oxidized in muscles for energy during prolonged exercise
- **BCAA ratios**: Typical BCAA supplements use 2:1:1 ratio (leucine:isoleucine:valine); some use higher leucine ratios, though optimal ratio is debated`,
    common_misconceptions: [
      `**Myth:** BCAA supplements are essential for muscle building.\n**Fact:** If you eat adequate protein (especially from complete sources), you already get plenty of BCAAs including isoleucine. BCAA supplements mainly benefit people with inadequate protein intake or training fasted.`,
      `**Myth:** Isoleucine is interchangeable with leucine and valine.\n**Fact:** Each BCAA has unique functions. Leucine primarily drives muscle protein synthesis; isoleucine influences glucose metabolism; valine is less characterized but contributes to energy and nitrogen balance.`,
      `**Myth:** Taking BCAAs is better than eating protein.\n**Fact:** Whole protein sources provide all 20 amino acids in balanced proportions. Isolated BCAAs lack other essential amino acids needed for complete muscle protein synthesis. EAAs or whole proteins are generally superior.`,
    ],
    examples: [
      "A BCAA supplement with 2:1:1 ratio provides 2.5g leucine, 1.25g isoleucine, and 1.25g valine per serving—isoleucine providing energy and glucose-uptake support",
      "Someone training fasted takes BCAAs to provide energy substrates and prevent muscle breakdown when no food-derived amino acids are available",
      "A 6oz chicken breast contains about 1.5g isoleucine plus all other essential amino acids—complete nutrition that BCAA supplements can't fully replicate",
      "During prolonged endurance exercise, muscles oxidize BCAAs for fuel; isoleucine contributes to both energy production and maintaining blood glucose",
    ],
  },
  {
    slug: "jointhealth",
    why_it_matters: `Joint health is a massive supplement category—glucosamine, chondroitin, collagen, MSM, hyaluronic acid, and omega-3s all target joints. For supplement shoppers, understanding what "joint health" actually means helps evaluate these products. Joints involve cartilage (cushioning), synovial fluid (lubrication), ligaments and tendons (stability), and bone interfaces. Different supplements target different components: collagen and chondroitin for cartilage matrix, hyaluronic acid for synovial fluid, omega-3s for inflammation. Evidence varies widely—collagen peptides and omega-3s have reasonable support; glucosamine's benefits are controversial. Understanding joint anatomy and that supplements work best for maintenance rather than reversing severe damage helps set realistic expectations.`,
    simple_explanation: `Joint health refers to how well your joints—where bones meet—function for smooth, pain-free movement. A healthy joint has cartilage (a smooth, slippery cushion covering bone ends), synovial fluid (lubricating fluid in the joint capsule), strong ligaments and tendons (connective tissues holding bones together), and good blood supply to surrounding tissues. Joint problems occur when cartilage wears down (osteoarthritis), inflammation develops (inflammatory arthritis), or structures become injured. Age, overuse, obesity, and genetics all affect joint health. Supplements aim to support cartilage maintenance (glucosamine, chondroitin, collagen), reduce inflammation (omega-3s, curcumin), or improve lubrication (hyaluronic acid). While some supplements may help maintain joints and reduce pain, they can't rebuild significantly damaged cartilage.`,
    key_points: `### Key Facts About Joint Health

- **Cartilage is key**: Healthy joints depend on intact cartilage; once significantly damaged, cartilage doesn't regenerate well—supplements work best for maintenance
- **Multiple components**: Joints involve cartilage, synovial fluid, bone, ligaments, and tendons; different supplements target different components
- **Inflammation matters**: Even in osteoarthritis (traditionally seen as "wear and tear"), inflammation plays a significant role; anti-inflammatory approaches can help
- **Weight impact**: Every pound of body weight = 4 pounds of force on knees during walking; weight loss is one of the most effective joint interventions
- **Evidence spectrum**: Collagen peptides and omega-3s have reasonable evidence; glucosamine/chondroitin evidence is mixed and controversial; many joint supplements lack rigorous testing`,
    common_misconceptions: [
      `**Myth:** Joint supplements can rebuild damaged cartilage.\n**Fact:** No supplement has been proven to regenerate significantly worn cartilage. Supplements may slow degradation, reduce pain, and support remaining cartilage—but can't reverse severe arthritis.`,
      `**Myth:** Glucosamine and chondroitin are proven joint treatments.\n**Fact:** Large clinical trials (GAIT study, LEGS study) showed mixed results. Some subgroups may benefit, but overall evidence doesn't strongly support these supplements for most people with knee osteoarthritis.`,
      `**Myth:** All joint pain comes from cartilage damage.\n**Fact:** Joint pain can arise from inflammation, muscle weakness, ligament issues, bone changes, or nerve sensitization. Accurate diagnosis matters—not all joint pain is the same or responds to the same treatments.`,
    ],
    examples: [
      "Collagen peptides (10g daily) reduced joint pain in athletes in several studies—supporting cartilage maintenance in active, younger populations",
      "Losing 10 pounds reduces knee joint force by 40 pounds with each step—weight loss is more effective than most supplements for knee osteoarthritis",
      "Omega-3 fatty acids (2-3g EPA+DHA) reduce joint inflammation and may allow reduction in NSAID use for some people with inflammatory joint conditions",
      "Someone with severe knee osteoarthritis (bone-on-bone) is unlikely to experience significant improvement from supplements—management focuses on pain control and considering surgery",
    ],
  },
  {
    slug: "lactobacillus",
    why_it_matters: `Lactobacillus is the most recognizable probiotic genus—you'll see it in virtually every probiotic supplement, yogurt, and fermented food. For supplement shoppers, understanding Lactobacillus helps navigate the probiotic market. But here's the key insight: Lactobacillus is a genus containing hundreds of different species, and each species contains different strains with different effects. "Lactobacillus" alone tells you almost nothing—it's like saying "dog" without specifying the breed. Lactobacillus rhamnosus GG has strong evidence for preventing antibiotic-associated diarrhea; Lactobacillus plantarum 299v helps IBS; other strains may do nothing useful. Strain specificity is everything in probiotics.`,
    simple_explanation: `Lactobacillus is a family (genus) of beneficial bacteria that produce lactic acid as their main metabolic byproduct—that's where the name comes from. These bacteria naturally live in your gut, mouth, and urogenital tract, and are abundant in fermented foods like yogurt, kefir, sauerkraut, and kimchi. Lactobacillus bacteria help crowd out harmful microbes, support immune function, and may produce beneficial compounds. In supplements, you'll see species names like Lactobacillus acidophilus, L. rhamnosus, L. plantarum, and L. casei, often followed by strain designations (like "GG" or "299v"). These details matter because different strains have different evidence and effects. A Lactobacillus rhamnosus for antibiotic diarrhea isn't the same as one for vaginal health—strain-specific research determines appropriate use.`,
    key_points: `### Key Facts About Lactobacillus

- **Genus, not species**: Lactobacillus contains many species (acidophilus, rhamnosus, plantarum, etc.), each containing many strains—strain specificity matters
- **Lactic acid producers**: All Lactobacillus species produce lactic acid, creating an acidic environment that inhibits harmful bacteria
- **Not colonizers**: Most Lactobacillus strains don't permanently colonize the gut—they pass through, providing benefits while present but requiring continued intake
- **Evidence varies by strain**: L. rhamnosus GG (antibiotic diarrhea), L. plantarum 299v (IBS), L. reuteri DSM 17938 (infant colic)—strain matters more than species
- **Taxonomic changes**: Some former Lactobacillus species have been reclassified (L. reuteri is now Limosilactobacillus reuteri)—older names may still be used`,
    common_misconceptions: [
      `**Myth:** All Lactobacillus probiotics are basically the same.\n**Fact:** Different Lactobacillus strains have completely different effects. Evidence for L. rhamnosus GG preventing diarrhea doesn't apply to L. acidophilus strains—you need strain-specific research.`,
      `**Myth:** Lactobacillus probiotics colonize your gut permanently.\n**Fact:** Most Lactobacillus strains are transient—they provide benefits while you take them but don't establish permanent residence. Your native microbiome is remarkably stable.`,
      `**Myth:** Higher CFU counts mean better probiotics.\n**Fact:** 10 billion CFU of a well-researched strain beats 100 billion CFU of untested strains. The right strain at an effective dose matters more than maximizing bacterial counts.`,
    ],
    examples: [
      "Lactobacillus rhamnosus GG (10 billion CFU) reduces antibiotic-associated diarrhea risk by about 50%—one of the best-studied probiotic uses",
      "A yogurt label says 'contains Lactobacillus acidophilus' but doesn't specify strain or count—impossible to know if it matches any clinical evidence",
      "Lactobacillus plantarum 299v specifically reduces IBS symptoms in clinical trials; generic L. plantarum may not have the same effect",
      "Someone takes a 50-billion CFU 'Lactobacillus blend' but can't find research on any of the included strains—quantity doesn't guarantee quality or efficacy",
    ],
  },
  {
    slug: "ldlcholesterol",
    why_it_matters: `LDL cholesterol is the primary target of cardiovascular disease prevention—understanding it helps evaluate the many supplements claiming to support "heart health" and "healthy cholesterol levels." For supplement shoppers, LDL matters because reducing it is causally linked to reduced heart disease risk, making it a meaningful outcome. Some supplements genuinely reduce LDL: plant sterols/stanols (10-15% reduction), soluble fiber (5-10%), red yeast rice (contains natural statins), and berberine (15-20%). Others have minimal effect despite marketing claims. Understanding that LDL particles (not just LDL-C concentration) and particle size may matter helps you interpret newer testing and appreciate that cholesterol management is evolving beyond simple LDL-C numbers.`,
    simple_explanation: `LDL (low-density lipoprotein) is the "bad cholesterol" because it carries cholesterol INTO artery walls, contributing to atherosclerosis (plaque buildup). Think of LDL particles as delivery trucks bringing cholesterol to places it shouldn't accumulate. When LDL particles enter artery walls and become oxidized, they trigger inflammation and plaque formation that eventually restricts blood flow and can rupture, causing heart attacks and strokes. Higher LDL-C (LDL cholesterol concentration) is strongly associated with cardiovascular disease risk. Every 1 mmol/L (39 mg/dL) reduction in LDL-C reduces cardiovascular events by about 22%. That's why statins, which lower LDL-C, are among the most prescribed medications worldwide. The target for high-risk individuals is LDL-C below 70 mg/dL; for lower-risk, below 100-130 mg/dL.`,
    key_points: `### Key Facts About LDL Cholesterol

- **Causal relationship**: High LDL is not just associated with heart disease—it's a direct cause. Mendelian randomization studies prove lifelong lower LDL means less atherosclerosis
- **Particle count vs. concentration**: LDL-C (standard test) measures cholesterol CARRIED in LDL particles; LDL-P measures NUMBER of particles—both matter
- **Particle size debate**: Small, dense LDL particles may be more atherogenic than large, buoyant LDL; but total LDL burden is still the primary driver
- **Oxidation matters**: LDL becomes dangerous when it's oxidized in artery walls, triggering inflammation—antioxidants may theoretically help (though vitamin E trials disappointed)
- **Supplement options**: Plant sterols (2g/day), soluble fiber, red yeast rice, and berberine have evidence for modest LDL reduction; most "heart health" supplements don't meaningfully lower LDL`,
    common_misconceptions: [
      `**Myth:** High LDL doesn't matter if HDL is high.\n**Fact:** While HDL provides some protection, high LDL is harmful regardless of HDL levels. High LDL with high HDL is still worse than low LDL. LDL is the primary driver of atherosclerosis.`,
      `**Myth:** Only saturated fat raises LDL.\n**Fact:** Genetics strongly influences LDL levels. Some people have high LDL despite perfect diets (familial hypercholesterolemia). Diet matters but isn't the only factor—medications or aggressive supplementation may be needed.`,
      `**Myth:** Supplements can replace statins for LDL reduction.\n**Fact:** Statins reduce LDL by 30-50%; most supplements achieve 5-20% reduction. For high-risk individuals needing large LDL reductions, statins are usually necessary. Supplements may help mild elevations or complement medications.`,
    ],
    examples: [
      "Plant sterols (2g daily in margarine or capsules) reduce LDL-C by 10-15%—blocking cholesterol absorption in the gut",
      "Soluble fiber (5-10g daily from oats, psyllium) reduces LDL by 5-10% by binding bile acids and increasing cholesterol excretion",
      "Red yeast rice contains monacolin K (natural lovastatin); effective for LDL but carries statin-like risks and should be medically supervised",
      "Berberine (500mg 2-3x daily) reduces LDL by 15-20% through PCSK9 pathway—one of the more potent natural options with multiple mechanisms",
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
  console.log("=== BATCH 11: Enhancing Glossary Terms 101-110 ===\n");

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
