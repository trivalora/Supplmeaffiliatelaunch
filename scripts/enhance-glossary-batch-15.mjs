/**
 * Batch 15: Enhance glossary terms 141-150 (alphabetically)
 * Terms: Osteoporosis, Oxalates, Oxidative Damage, Oxidative Stress, Oxidized LDL,
 *        Pancreatitis, PEDro Scale, Peer-reviewed, Peptide YY, Pharmacokinetics
 *
 * Run: node scripts/enhance-glossary-batch-15.mjs
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
    slug: "osteoporosis",
    why_it_matters: `Osteoporosis—the "silent thief" of bone—affects over 200 million people worldwide and is a primary reason people take calcium, vitamin D, and magnesium supplements. For supplement shoppers, understanding osteoporosis is essential because it's the condition most bone health products claim to prevent or treat. However, the evidence for supplements is more nuanced than marketing suggests: vitamin D and calcium help prevent deficiency-related bone loss but may not dramatically reduce fracture risk in people who aren't deficient. Knowing your risk factors (age, sex, family history, hormonal status) and whether you're actually deficient helps you make informed choices rather than blindly taking bone supplements.`,
    simple_explanation: `Osteoporosis literally means "porous bones"—your bones become less dense and more fragile, like a sponge with bigger holes. Bones aren't static; they're constantly being broken down and rebuilt. When breakdown exceeds rebuilding, you lose bone mass. After age 30, everyone gradually loses bone, but osteoporosis is when this loss becomes severe enough that bones fracture easily—sometimes from minor falls or even sneezing. Women are especially vulnerable after menopause because estrogen (which protects bones) drops dramatically. Risk factors include being female, older age, small frame, family history, smoking, excessive alcohol, and inadequate calcium/vitamin D intake. The tricky part is that osteoporosis has no symptoms until a fracture occurs—hence "silent thief."`,
    key_points: `### Key Facts About Osteoporosis

- **Silent condition**: No symptoms until fracture; bone density testing (DEXA scan) is needed for diagnosis before fractures occur
- **Gender disparity**: Women lose bone faster after menopause; 1 in 3 women over 50 will experience osteoporotic fracture vs 1 in 5 men
- **Modifiable factors**: Weight-bearing exercise, adequate protein, calcium, vitamin D, and avoiding smoking/excess alcohol help maintain bone density
- **Supplements role**: Calcium and vitamin D help when intake is inadequate but don't dramatically reduce fractures in people with sufficient levels
- **Beyond calcium**: Vitamin K2, magnesium, and protein also play roles in bone health; calcium alone isn't the complete picture`,
    common_misconceptions: [
      `**Myth:** Taking calcium supplements guarantees you won't get osteoporosis.\n**Fact:** Calcium helps but isn't a guarantee. Genetics, hormones, exercise, and overall nutrition matter too. Some studies show calcium supplements have modest effects on fracture prevention.`,
      `**Myth:** Osteoporosis only affects elderly women.\n**Fact:** While postmenopausal women are highest risk, men get osteoporosis too (about 20% of cases). Young people with eating disorders, hormonal issues, or certain medications can also develop it.`,
      `**Myth:** If you have osteoporosis, you shouldn't exercise because bones might break.\n**Fact:** Weight-bearing and resistance exercise actually stimulates bone formation and is recommended for osteoporosis prevention and management. Avoiding exercise accelerates bone loss.`,
    ],
    examples: [
      "A 65-year-old postmenopausal woman gets a DEXA scan showing T-score of -2.8 (osteoporosis range); her doctor recommends vitamin D, calcium, weight-bearing exercise, and possibly medication",
      "Someone taking 1500mg calcium daily but never exercises may have worse bone density than someone taking 800mg who does regular strength training",
      "A woman with celiac disease develops osteoporosis at 45 due to poor calcium and vitamin D absorption—underlying conditions affect bone health",
      "Vitamin K2 (MK-7, 100-200mcg) directs calcium into bones rather than arteries; often recommended alongside calcium and D3 for bone health",
    ],
  },
  {
    slug: "oxalates",
    why_it_matters: `Oxalates are naturally occurring compounds that can bind minerals and contribute to kidney stones—making them relevant for supplement shoppers considering calcium, magnesium, or dealing with kidney stone risk. For those taking calcium supplements, timing matters: calcium taken WITH high-oxalate meals actually reduces oxalate absorption by binding it in the gut. However, calcium taken between meals could theoretically increase kidney stone risk. Understanding oxalates also explains why spinach (high oxalate) isn't as good a calcium source as its numbers suggest—most of that calcium is bound and unabsorbable. If you have kidney stone history, oxalate awareness becomes critical for supplement and diet choices.`,
    simple_explanation: `Oxalates (or oxalic acid) are compounds found naturally in many plant foods—spinach, rhubarb, beets, nuts, chocolate, tea, and many others contain significant amounts. Here's why they matter: oxalates bind to minerals like calcium and magnesium, forming crystals. In your gut, this binding reduces mineral absorption (spinach calcium is only ~5% absorbed vs ~30% from dairy). In your kidneys, calcium oxalate crystals can accumulate into kidney stones—the most common type. Your body also produces oxalates as a metabolic waste product. Most people handle dietary oxalates fine, but those prone to kidney stones or with certain gut conditions (causing hyperoxaluria) may need to moderate high-oxalate foods.`,
    key_points: `### Key Facts About Oxalates

- **Mineral binding**: Oxalates bind calcium, magnesium, and iron in the gut, reducing absorption; this is why spinach's calcium is poorly bioavailable
- **Kidney stone connection**: ~75% of kidney stones are calcium oxalate; high urinary oxalate increases stone risk in susceptible individuals
- **Dietary sources**: Highest in spinach, rhubarb, beets, Swiss chard, nuts (especially almonds), chocolate, tea, and sweet potatoes
- **Calcium timing trick**: Taking calcium WITH high-oxalate meals binds oxalate in the gut, reducing absorption and actually protecting against kidney stones
- **Individual variation**: Most people tolerate normal dietary oxalates; those with kidney stone history, gut disorders, or genetic hyperoxaluria need more caution`,
    common_misconceptions: [
      `**Myth:** You should avoid all high-oxalate foods.\n**Fact:** For most people, moderate consumption of oxalate-rich foods is fine and these foods offer valuable nutrients. Only those with recurrent kidney stones or hyperoxaluria need strict limitation.`,
      `**Myth:** Calcium supplements increase kidney stone risk.\n**Fact:** Calcium taken WITH meals actually reduces oxalate absorption and kidney stone risk. It's calcium supplements taken between meals on an empty stomach that may increase risk.`,
      `**Myth:** Spinach is an excellent calcium source for vegans.\n**Fact:** While spinach contains calcium, oxalates bind most of it. Only ~5% is absorbed compared to ~30% from low-oxalate sources like kale, bok choy, or fortified foods.`,
    ],
    examples: [
      "Someone takes calcium supplement with dinner containing spinach salad—the calcium binds dietary oxalate in the gut, reducing both absorption but also reducing kidney stone risk",
      "A kidney stone patient is advised to reduce oxalate intake: switching from almonds to macadamias, spinach to kale, and drinking lemon water (citrate inhibits stone formation)",
      "A vegan relying on spinach for calcium discovers poor absorption; switches to fortified plant milk, kale, and bok choy for better calcium bioavailability",
      "Taking magnesium citrate may help prevent calcium oxalate stones by binding oxalate and increasing urinary citrate (a stone inhibitor)",
    ],
  },
  {
    slug: "oxidativedamage",
    why_it_matters: `Oxidative damage is the cellular harm caused by free radicals—and it's the core concept behind antioxidant supplements. For supplement shoppers, understanding oxidative damage explains why vitamin C, vitamin E, CoQ10, and countless "antioxidant" products are marketed. When free radicals steal electrons from your cell membranes, DNA, and proteins, they cause oxidative damage that contributes to aging, heart disease, cancer, and neurodegeneration. However, the story is complicated: clinical trials of antioxidant supplements often fail to show benefits, and some (high-dose vitamin E, beta-carotene in smokers) showed harm. The body has sophisticated antioxidant systems; flooding it with supplemental antioxidants may not add much—or may even interfere with beneficial oxidative signaling.`,
    simple_explanation: `Oxidative damage is what happens when unstable molecules called free radicals attack your cells. Free radicals have unpaired electrons, making them desperately "steal" electrons from nearby molecules—your cell membranes, proteins, and DNA. This electron theft damages the victim molecule, which may then become a free radical itself, creating a chain reaction. Your body constantly produces free radicals during normal metabolism (especially in mitochondria), from immune function, exercise, and from external sources (pollution, UV radiation, smoking). Small amounts of oxidative damage are normal and even useful for signaling. The problem is when oxidative damage exceeds your antioxidant defenses—this imbalance (oxidative stress) contributes to aging and disease.`,
    key_points: `### Key Facts About Oxidative Damage

- **Chain reaction**: One free radical can damage many molecules as it triggers chain reactions; antioxidants stop chains by donating electrons without becoming reactive
- **Multiple targets**: Oxidative damage affects lipids (cell membranes), proteins (enzymes, structure), and DNA (mutations, aging)—contributing to nearly every chronic disease
- **Measurable markers**: F2-isoprostanes, 8-OHdG, and protein carbonyls are biomarkers that measure oxidative damage in research studies
- **Defense systems**: Your body has enzymatic antioxidants (SOD, catalase, glutathione peroxidase) that are far more powerful than dietary antioxidants
- **Supplement paradox**: Despite strong theory, antioxidant supplement trials often fail to prevent disease—the system is more complex than "more antioxidants = less damage"`,
    common_misconceptions: [
      `**Myth:** More antioxidant supplements mean less oxidative damage.\n**Fact:** Your body regulates antioxidant levels. Flooding it with supplements may not increase protection and could interfere with beneficial oxidative signaling needed for exercise adaptation and immune function.`,
      `**Myth:** All oxidative damage is harmful.\n**Fact:** Some oxidative damage is a normal signaling mechanism. Exercise causes temporary oxidative stress that triggers beneficial adaptations. Immune cells use free radicals to kill pathogens.`,
      `**Myth:** Antioxidant supplements prevent aging and disease.\n**Fact:** Large clinical trials of vitamin E, beta-carotene, and other antioxidants failed to show disease prevention benefits—some showed harm. Whole foods work; isolated supplements often don't.`,
    ],
    examples: [
      "Mitochondria produce free radicals during energy production—this is why mitochondrial DNA accumulates more damage than nuclear DNA and why CoQ10 (in mitochondria) is popular",
      "A smoker has massively elevated F2-isoprostanes (oxidative damage marker); quitting smoking reduces this more effectively than any antioxidant supplement",
      "Taking antioxidants immediately after exercise may blunt training adaptations—the oxidative stress from exercise triggers beneficial cellular responses",
      "Vitamin E at 400 IU+ daily increased mortality in meta-analyses; this challenged the assumption that more antioxidants equals better health",
    ],
  },
  {
    slug: "oxidativestress",
    why_it_matters: `Oxidative stress is the imbalance between free radical production and antioxidant defenses—understanding this concept helps you evaluate antioxidant supplements critically. For supplement shoppers, oxidative stress is what every "antioxidant" product claims to combat. It's implicated in aging, cardiovascular disease, cancer, diabetes, and neurodegeneration. The appeal of antioxidant supplements is logical: if oxidative stress causes disease, antioxidants should help. However, clinical trials tell a different story—supplemental antioxidants often don't prevent disease. The body's antioxidant system is complex and self-regulating. Activating your internal antioxidant systems (via Nrf2 activators like sulforaphane) may be more effective than taking antioxidants directly.`,
    simple_explanation: `Oxidative stress happens when your body produces more free radicals than your antioxidant defenses can handle. Think of it like a battle: free radicals are the attackers, antioxidants are the defenders. Normally, they're balanced. But when free radical production increases (from pollution, smoking, poor diet, chronic inflammation) or antioxidant defenses decrease (poor nutrition, aging, illness), the balance tips and oxidative stress occurs. This damages cells, accelerates aging, and contributes to chronic diseases. Your body has powerful built-in antioxidant systems—enzymes like superoxide dismutase and glutathione peroxidase. Dietary antioxidants (vitamin C, E, polyphenols) support these systems, but the internal enzymes do most of the heavy lifting.`,
    key_points: `### Key Facts About Oxidative Stress

- **Balance concept**: Oxidative stress isn't about free radicals existing—it's about them exceeding antioxidant capacity, causing net damage
- **Disease link**: Elevated oxidative stress is found in virtually every chronic disease—cardiovascular, cancer, diabetes, Alzheimer's, Parkinson's
- **Major sources**: Smoking, pollution, chronic inflammation, excessive alcohol, high-sugar diets, obesity, and intense exercise increase free radical production
- **Antioxidant defense layers**: Enzymatic (SOD, catalase, glutathione) + small molecule (vitamin C, E, uric acid) + dietary (polyphenols) all contribute
- **Lifestyle trumps supplements**: Reducing oxidative stress sources (quit smoking, reduce inflammation, exercise moderately) is more effective than adding antioxidant supplements`,
    common_misconceptions: [
      `**Myth:** You can eliminate oxidative stress with enough antioxidants.\n**Fact:** Some oxidative stress is normal and necessary—for immune function, cell signaling, and exercise adaptation. The goal is balance, not elimination.`,
      `**Myth:** Blood antioxidant levels indicate protection from oxidative stress.\n**Fact:** The relationship is complex. High blood vitamin C doesn't guarantee low oxidative stress. Tissue levels, enzyme function, and free radical production rates all matter.`,
      `**Myth:** Antioxidant supplements are the best way to combat oxidative stress.\n**Fact:** Reducing sources of oxidative stress (smoking, inflammation, poor diet) and activating internal antioxidant systems (exercise, Nrf2 activators) are often more effective.`,
    ],
    examples: [
      "A smoker has high oxidative stress markers; taking 1000mg vitamin C daily doesn't normalize them—quitting smoking would be far more effective",
      "Chronic inflammation creates ongoing oxidative stress; addressing the inflammatory condition (omega-3s, anti-inflammatory diet) reduces oxidative burden",
      "Athletes in heavy training have temporarily elevated oxidative stress—this is actually a training signal, and blocking it with antioxidants may impair adaptation",
      "Sulforaphane from broccoli sprouts activates Nrf2, upregulating your body's own antioxidant enzymes—potentially more effective than taking antioxidant vitamins",
    ],
  },
  {
    slug: "oxidizedldl",
    why_it_matters: `Oxidized LDL is a key player in heart disease development—understanding it explains why antioxidants are marketed for cardiovascular health and why LDL cholesterol alone doesn't tell the whole story. For supplement shoppers, oxidized LDL is what makes "bad" cholesterol actually bad. Regular LDL particles become harmful when they're oxidized in artery walls, triggering inflammation and plaque formation. This is why antioxidants were theorized to prevent heart disease (preventing LDL oxidation) and why this theory mostly failed in trials. It also explains interest in vitamin E, CoQ10, polyphenols, and omega-3s for heart health. Knowing oxidized LDL helps you understand cardiovascular claims beyond simple "lower cholesterol" messaging.`,
    simple_explanation: `LDL cholesterol is often called "bad cholesterol," but it's not inherently harmful—the problem is when LDL particles become oxidized. Here's what happens: LDL particles carry cholesterol through your bloodstream. When they enter artery walls and encounter free radicals, they become oxidized. Oxidized LDL is recognized as foreign by your immune system. Macrophages (immune cells) engulf oxidized LDL, becoming "foam cells" that accumulate in artery walls. This triggers inflammation and builds atherosclerotic plaques that narrow arteries and can rupture, causing heart attacks. The oxidation step is crucial—this is why antioxidants were thought to prevent heart disease by preventing LDL oxidation. Unfortunately, supplemental antioxidants haven't proven as protective as hoped.`,
    key_points: `### Key Facts About Oxidized LDL

- **Atherosclerosis driver**: Oxidized LDL initiates and promotes plaque formation; it's the oxidation, not just LDL levels, that drives damage
- **Inflammatory trigger**: Oxidized LDL activates inflammatory pathways, attracting immune cells that become foam cells and create plaques
- **Measurable marker**: Blood tests for oxidized LDL exist and predict cardiovascular risk beyond standard LDL cholesterol
- **Small dense LDL vulnerability**: Small, dense LDL particles are more easily oxidized than large, fluffy particles—particle size matters
- **Antioxidant theory limits**: Despite logical theory, antioxidant supplements haven't consistently reduced heart disease in trials—the system is more complex`,
    common_misconceptions: [
      `**Myth:** All LDL is equally harmful.\n**Fact:** Oxidized LDL and small, dense LDL particles are more atherogenic than large, fluffy LDL. Particle quality matters as much as quantity.`,
      `**Myth:** Taking vitamin E prevents LDL oxidation and heart disease.\n**Fact:** While vitamin E prevents LDL oxidation in test tubes, clinical trials failed to show heart disease prevention—and high doses may increase risk.`,
      `**Myth:** If you have low LDL, you don't need to worry about oxidized LDL.\n**Fact:** Even moderate LDL levels can be harmful if highly oxidized. Inflammation, smoking, and high blood sugar increase LDL oxidation regardless of total levels.`,
    ],
    examples: [
      "A smoker with LDL of 110 mg/dL may have more arterial damage than a non-smoker with LDL of 140 because smoking dramatically increases LDL oxidation",
      "Olive oil's polyphenols may protect against LDL oxidation—one reason Mediterranean diets are associated with lower heart disease despite moderate fat intake",
      "Someone with insulin resistance/prediabetes has more small, dense LDL particles that are easily oxidized, increasing cardiovascular risk beyond what LDL number suggests",
      "CoQ10 is a fat-soluble antioxidant that travels with LDL particles and may help protect them from oxidation—a theoretical basis for CoQ10's cardiovascular marketing",
    ],
  },
  {
    slug: "pancreatitis",
    why_it_matters: `Pancreatitis—inflammation of the pancreas—is a serious condition with dietary and supplement implications that shoppers should understand. For supplement shoppers, pancreatitis relates to supplements in several ways: very high triglycerides (which some supplements address) can cause pancreatitis; digestive enzyme supplements are used by chronic pancreatitis patients; and certain supplements may need caution in pancreatitis history. Understanding pancreatitis helps you appreciate why doctors monitor triglycerides carefully and why digestive enzyme supplements exist. If you have pancreatitis history, knowing which supplements support pancreatic function and which to avoid becomes personally important.`,
    simple_explanation: `Your pancreas is an organ behind your stomach that does two crucial jobs: producing digestive enzymes that break down food in your intestines, and producing hormones (insulin, glucagon) that regulate blood sugar. Pancreatitis is when the pancreas becomes inflamed—and it's extremely painful. Acute pancreatitis is sudden and severe; chronic pancreatitis is ongoing and progressive. The most common causes are gallstones and heavy alcohol use. Very high triglycerides (>500 mg/dL) can also trigger pancreatitis. When the pancreas is damaged, you may not produce enough digestive enzymes (requiring enzyme supplements) or may develop diabetes (pancreas can't make enough insulin).`,
    key_points: `### Key Facts About Pancreatitis

- **Dual function organ**: Pancreas produces digestive enzymes (exocrine) and hormones like insulin (endocrine); pancreatitis can impair both functions
- **Common causes**: Gallstones (~40%), alcohol (~40%), high triglycerides, medications, infections, and sometimes unknown (idiopathic)
- **Triglyceride threshold**: Blood triglycerides >500 mg/dL significantly increase pancreatitis risk; >1000 mg/dL is a common trigger
- **Enzyme replacement**: Chronic pancreatitis often requires prescription pancreatic enzyme supplements (lipase, protease, amylase) with meals
- **Dietary changes**: Low-fat diets reduce pancreatic workload; MCT oil may be tolerated better than regular fats in chronic pancreatitis`,
    common_misconceptions: [
      `**Myth:** Pancreatitis only affects heavy drinkers.\n**Fact:** While alcohol is a major cause, gallstones cause equally many cases. High triglycerides, medications, and other factors can cause pancreatitis in non-drinkers.`,
      `**Myth:** Digestive enzyme supplements are only for pancreatitis patients.\n**Fact:** While prescription-strength enzymes treat pancreatic insufficiency, milder OTC enzymes are marketed for general digestive support—though evidence for healthy people is limited.`,
      `**Myth:** If you've had pancreatitis, you can never drink alcohol again.\n**Fact:** For alcohol-induced pancreatitis, complete abstinence is strongly recommended. For other causes, moderate or no alcohol is advised depending on severity and ongoing risk.`,
    ],
    examples: [
      "Someone with triglycerides of 800 mg/dL is prescribed high-dose omega-3s (4g EPA+DHA) specifically to reduce triglycerides and pancreatitis risk",
      "A chronic pancreatitis patient takes prescription pancreatic enzyme capsules (like Creon) with every meal to digest fats and proteins properly",
      "After acute pancreatitis, the doctor recommends a very low-fat diet initially (20-30g fat/day) to minimize pancreatic stimulation during healing",
      "MCT oil is sometimes recommended for chronic pancreatitis because medium-chain triglycerides absorb without requiring pancreatic lipase",
    ],
  },
  {
    slug: "pedro",
    why_it_matters: `The PEDro scale is a tool for evaluating clinical trial quality—understanding it helps you assess the reliability of supplement research. For supplement shoppers, knowing that studies have quality scores helps you distinguish rigorous research from weak studies. The PEDro scale rates trials on 11 criteria including randomization, blinding, and statistical analysis. A study scoring 8/10 is much more trustworthy than one scoring 3/10. When supplement companies cite "clinical studies," knowing to ask about study quality helps you separate genuinely supported claims from those based on poorly designed research. High PEDro scores indicate robust methodology; low scores suggest the results may be biased or unreliable.`,
    simple_explanation: `The PEDro scale (Physiotherapy Evidence Database scale) is a checklist that rates how well a clinical trial was designed and conducted. Originally developed for physical therapy research, it's used broadly for evaluating randomized controlled trials. The scale has 11 items covering things like: Was randomization truly random? Were participants blind to treatment? Were all participants accounted for? Did they use proper statistics? Each item is scored yes or no, giving trials a score from 0 to 10 (one item is about eligibility criteria and doesn't count in the total). Higher scores mean more rigorous methodology and more trustworthy results. When reading about supplement research, a high-quality study (PEDro 7+) provides stronger evidence than a low-quality study (PEDro <5).`,
    key_points: `### Key Facts About PEDro Scale

- **Quality assessment**: 11-item scale scoring methodology rigor of randomized controlled trials; higher scores = more reliable results
- **Key criteria**: Randomization, allocation concealment, baseline comparability, blinding (subject, therapist, assessor), complete data, intention-to-treat analysis
- **Scoring range**: 0-10 (criterion 1 not counted); scores ≥6 generally considered "high quality"; <5 is "low quality"
- **Limitation recognition**: PEDro assesses internal validity (methodology) not external validity (applicability to real world) or importance of findings
- **Systematic review use**: Meta-analyses often stratify results by PEDro score, giving more weight to higher-quality trials`,
    common_misconceptions: [
      `**Myth:** A study with positive results is automatically high quality.\n**Fact:** Positive results can come from poorly designed studies with biased methodology. PEDro score tells you about design quality, not just outcomes.`,
      `**Myth:** High PEDro score means the treatment definitely works.\n**Fact:** PEDro measures methodology quality, not effect size or clinical importance. A high-quality study can show no effect or small effects—good methodology with null results is valuable.`,
      `**Myth:** All published studies are high quality.\n**Fact:** Journal publication doesn't guarantee rigor. Many published supplement studies have PEDro scores of 3-5, indicating methodological weaknesses that could bias results.`,
    ],
    examples: [
      "A curcumin trial scores PEDro 8/10 (proper randomization, double-blinding, complete follow-up)—its findings are more reliable than a study scoring 4/10",
      "Meta-analysis of magnesium for blood pressure gives more weight to studies with PEDro ≥6, finding smaller effects than when including all studies",
      "A supplement company cites three clinical studies; checking reveals they're all PEDro 3/10 with no blinding and high dropout—weak evidence despite multiple studies",
      "Reviewing a fish oil trial: randomized (yes), allocation concealed (no), double-blind (yes), complete data (no), intention-to-treat (yes)—mixed quality affects reliability",
    ],
  },
  {
    slug: "peerreviewed",
    why_it_matters: `Peer review is the quality control process for scientific research—understanding it helps supplement shoppers evaluate claims. When a study is "peer-reviewed," it means other experts scrutinized it before publication. For supplement shoppers, this matters because non-peer-reviewed claims (company websites, press releases, preprints) haven't undergone independent verification. Peer review isn't perfect—flawed studies get published—but it's a minimum quality standard. When supplement marketing cites "studies," asking whether they're peer-reviewed in reputable journals helps separate credible research from preliminary findings, in-house data, or outright fabrication.`,
    simple_explanation: `Peer review is how scientific research gets quality-checked before publication. When researchers complete a study, they submit it to a journal. The journal editor sends it to other experts in the field ("peers") who anonymously evaluate it. These reviewers look for flaws: Is the methodology sound? Are conclusions justified by data? Is it original and important? They may reject the paper, request revisions, or approve it. This process typically takes months. Peer-reviewed publications aren't guaranteed to be correct—reviewers can miss problems and fraud happens—but they've at least been scrutinized by experts. Non-peer-reviewed sources (company websites, news articles, preprints) skip this quality check.`,
    key_points: `### Key Facts About Peer Review

- **Quality filter**: Peer review catches methodological errors, unsupported conclusions, and obvious problems before publication—imperfect but valuable
- **Expert evaluation**: Reviewers are typically other scientists in the same field who evaluate the work anonymously (single or double-blind)
- **Not infallible**: Peer review misses problems; fraudulent and flawed studies do get published. It's a filter, not a guarantee
- **Journal hierarchy**: High-impact journals (Nature, JAMA, NEJM) have rigorous review; lower-tier journals may have weaker standards
- **Preprints caution**: Preprint servers (bioRxiv, medRxiv) publish before peer review; useful for speed but not peer-vetted—treat cautiously`,
    common_misconceptions: [
      `**Myth:** If it's peer-reviewed, it must be true.\n**Fact:** Peer review is a quality filter, not truth verification. Reviewers can miss errors, bias, or fraud. Studies can be retracted years later. It's necessary but not sufficient.`,
      `**Myth:** All scientific-sounding publications are peer-reviewed.\n**Fact:** Many journals are "predatory"—they look legitimate but publish anything for a fee with minimal review. Company-sponsored "journals" may not have independent review.`,
      `**Myth:** Peer review means unbiased review.\n**Fact:** Reviewers have their own biases and conflicts of interest. They may favor studies that confirm their own work or reject competing ideas. The system has limitations.`,
    ],
    examples: [
      "A supplement company cites a study on their website—checking reveals it's only on their site, not published in any peer-reviewed journal—low credibility",
      "A preprint shows exciting results for a new supplement; media reports it widely, but peer review later reveals fatal methodological flaws—premature hype",
      "Research in 'Journal of Nutritional Supplements' sounds credible but the journal charges $3000 to publish anything—it's a predatory journal with minimal review",
      "A study in the New England Journal of Medicine has gone through rigorous peer review and editorial oversight—high credibility even if not perfect",
    ],
  },
  {
    slug: "pyy",
    why_it_matters: `Peptide YY (PYY) is a satiety hormone—understanding it explains how your body regulates appetite and why protein and fiber help you feel full. For supplement shoppers, PYY is part of the gut-brain communication system that weight management supplements try to influence. When you eat, especially protein and fiber, your gut releases PYY which signals your brain to reduce hunger. This is why high-protein diets help with satiety and weight control. Some appetite suppressant supplements claim to increase PYY or mimic its effects. Understanding PYY helps you evaluate these claims and appreciate why protein, fiber, and certain gut-supporting interventions might genuinely help with appetite control.`,
    simple_explanation: `Peptide YY is a hormone released by cells in your intestines after you eat—especially after eating protein, fat, and fiber. Its job is to tell your brain "we've got food, you can stop being hungry now." PYY travels through your bloodstream to the brain's appetite center (hypothalamus) and reduces hunger. This is part of why meals high in protein and fiber keep you feeling full longer than high-carb, low-fiber meals—they trigger more PYY release. PYY levels rise after eating and gradually fall as food moves through your system. People with obesity sometimes have reduced PYY responses, contributing to persistent hunger. Weight loss surgery often increases PYY, helping explain its appetite-reducing effects.`,
    key_points: `### Key Facts About Peptide YY

- **Satiety signal**: PYY tells your brain to reduce hunger; it's part of the gut-brain axis controlling appetite after meals
- **Protein effect**: Protein is the most potent stimulator of PYY release, contributing to protein's superior satiety compared to carbohydrates
- **Release timing**: PYY is released 15-30 minutes after eating and peaks 1-2 hours later; levels depend on meal size and composition
- **Obesity connection**: People with obesity may have blunted PYY responses; this could contribute to reduced satiety and overeating
- **Fiber matters**: Fiber increases PYY release, partly explaining why high-fiber diets help with appetite control and weight management`,
    common_misconceptions: [
      `**Myth:** You can directly supplement with PYY to reduce appetite.\n**Fact:** PYY is a peptide that would be digested if taken orally. Injectable PYY reduces appetite but isn't practical as a supplement. Focus on foods that naturally increase PYY.`,
      `**Myth:** All foods stimulate PYY equally.\n**Fact:** Protein is the strongest PYY stimulator, followed by fat and fiber. Simple carbohydrates produce weaker PYY responses, which is why they're less satiating.`,
      `**Myth:** PYY is the only satiety hormone that matters.\n**Fact:** Appetite involves multiple hormones: PYY, GLP-1, CCK (reduce hunger), and ghrelin (increases hunger). No single hormone controls the whole system.`,
    ],
    examples: [
      "Eating eggs for breakfast (high protein) produces stronger PYY release than cereal, keeping you fuller until lunch",
      "After gastric bypass surgery, PYY levels increase dramatically—partly explaining reduced appetite and weight loss beyond just smaller stomach size",
      "A fiber supplement (psyllium) with water before meals may increase PYY release and reduce subsequent food intake",
      "Someone with persistent hunger despite adequate calories may have blunted PYY response; increasing protein and fiber at each meal can help",
    ],
  },
  {
    slug: "pharmacokinetics",
    why_it_matters: `Pharmacokinetics is how your body handles substances—absorption, distribution, metabolism, excretion. For supplement shoppers, pharmacokinetics explains why some supplements work and others don't, why timing and form matter, and why studies must account for these factors. Curcumin has poor pharmacokinetics (barely absorbed)—which is why enhanced absorption formulations exist. Caffeine has excellent pharmacokinetics (quickly absorbed, predictable). Understanding that "absorption" is just one step helps you appreciate why liposomal, phytosomal, or other enhanced delivery systems are marketed—and evaluate whether they actually solve pharmacokinetic problems for specific supplements.`,
    simple_explanation: `Pharmacokinetics is the study of what your body does to substances—often abbreviated ADME: Absorption (getting into bloodstream), Distribution (traveling to tissues), Metabolism (breaking down), and Excretion (eliminating). For supplements, this determines whether they actually work. A compound might be incredibly effective in a test tube but useless if your body can't absorb it or destroys it immediately. For example: curcumin is powerful in cell studies but barely absorbs (2-3%) and is rapidly metabolized. That's poor pharmacokinetics. Caffeine absorbs quickly and completely—excellent pharmacokinetics. Understanding these concepts helps you evaluate claims about supplement absorption and bioavailability.`,
    key_points: `### Key Facts About Pharmacokinetics

- **ADME framework**: Absorption (entering bloodstream), Distribution (reaching target tissues), Metabolism (breakdown by liver enzymes), Excretion (removal via kidneys/bile)
- **Half-life concept**: How long until blood levels drop by half; short half-life means frequent dosing needed; long half-life allows once-daily dosing
- **First-pass metabolism**: Oral supplements go through the liver before reaching general circulation; many are significantly reduced—called "first-pass effect"
- **Bioavailability**: Percentage that reaches systemic circulation unchanged; varies dramatically (curcumin ~2%, caffeine ~100%)
- **Enhanced delivery**: Liposomes, nanoparticles, phospholipid complexes try to overcome poor pharmacokinetics—success varies by compound`,
    common_misconceptions: [
      `**Myth:** If you swallow a supplement, it gets into your blood.\n**Fact:** Many compounds are poorly absorbed, destroyed by stomach acid, or eliminated by first-pass liver metabolism. Bioavailability varies from <1% to 100% depending on the compound.`,
      `**Myth:** Higher doses overcome poor absorption.\n**Fact:** Sometimes, but often absorption saturates—doubling the dose doesn't double blood levels. This is why enhanced absorption technologies exist.`,
      `**Myth:** All absorption-enhanced formulations work as claimed.\n**Fact:** Some enhanced delivery systems (BCM-95 curcumin, phospholipid forms) have evidence. Others are marketing claims without pharmacokinetic data to back them up.`,
    ],
    examples: [
      "Standard curcumin powder has ~2% bioavailability; formulations with piperine (BioPerine) increase it to ~20%; phospholipid forms (Meriva) increase it further",
      "Magnesium oxide is cheap but has ~4% absorption; magnesium glycinate absorbs much better and causes less GI upset—pharmacokinetics explains the price difference",
      "Vitamin D is fat-soluble; taking it with a fat-containing meal improves absorption vs. taking on empty stomach",
      "Caffeine's half-life is 5-6 hours in most people; this is why afternoon coffee can affect sleep—it's still at half-strength at bedtime",
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
  console.log("=== BATCH 15: Enhancing Glossary Terms 141-150 ===\n");

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
