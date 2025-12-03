/**
 * Batch 19: Enhance glossary terms 181-190 (alphabetically)
 * Terms: Sublingual Administration, Superoxide Dismutase, Synergistic Effect,
 *        Systematic Review, Systolic Blood Pressure, Therapeutic Dose,
 *        Third-Party Testing, Thyroid Function, Tolerable Upper Intake Level,
 *        Total Antioxidant Capacity
 *
 * Run: node scripts/enhance-glossary-batch-19.mjs
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
    slug: "sublingual",
    why_it_matters: `Sublingual administration—dissolving supplements under the tongue—bypasses digestive destruction and first-pass liver metabolism. For supplement shoppers, sublingual is marketed as "better absorption" for B12, melatonin, CBD, and other compounds. Understanding when sublingual actually helps (compounds destroyed by stomach acid or heavily metabolized by liver) versus when it's marketing hype (compounds that absorb fine orally) helps you evaluate whether paying more for sublingual products makes sense. For B12, sublingual may help those with absorption issues; for most supplements, it's unnecessary.`,
    simple_explanation: `Sublingual means "under the tongue." When you place a tablet or drops under your tongue, the compound absorbs directly through the thin mucous membrane into blood vessels, bypassing the digestive system entirely. This has two advantages: you avoid stomach acid (which destroys some compounds) and you avoid first-pass metabolism (the liver processing everything absorbed from the gut before it reaches general circulation). The area under the tongue is rich in blood vessels and the tissue is thin, allowing rapid absorption. This is why nitroglycerin for heart patients is given sublingually—fast action. For supplements, sublingual makes sense when compounds are poorly absorbed orally or heavily metabolized; for others, it's mainly marketing.`,
    key_points: `### Key Facts About Sublingual Administration

- **Bypasses GI tract**: Absorption through oral mucosa avoids stomach acid, digestive enzymes, and intestinal barriers
- **Avoids first-pass metabolism**: Compounds enter bloodstream directly without liver processing, potentially increasing bioavailability
- **Speed advantage**: Sublingual absorption is faster than oral (minutes vs 30-60 minutes)—useful when rapid effect is desired
- **Limited capacity**: Only small doses work sublingually; large doses would need to be swallowed anyway
- **Not always better**: For compounds that absorb well orally and aren't heavily metabolized, sublingual offers no real advantage`,
    common_misconceptions: [
      `**Myth:** Sublingual is always better than swallowing.\n**Fact:** Sublingual only helps when a compound is destroyed in the GI tract or heavily metabolized by the liver. Many supplements absorb fine orally; sublingual just adds cost without benefit.`,
      `**Myth:** Sublingual B12 is necessary for everyone.\n**Fact:** People with healthy digestion absorb oral B12 well. Sublingual may help those with pernicious anemia, atrophic gastritis, or on acid-blocking medications—not everyone.`,
      `**Myth:** If you swallow a sublingual tablet, it doesn't work.\n**Fact:** Swallowing still allows absorption through the digestive tract—you just lose the sublingual advantages. It's not wasted, just slower and potentially less complete for certain compounds.`,
    ],
    examples: [
      "B12 sublingual tablets dissolve under the tongue, useful for those with intrinsic factor deficiency who can't absorb B12 from food or regular supplements",
      "Sublingual melatonin acts faster (15-20 minutes) than swallowed tablets (30-60 minutes), potentially useful for sleep onset issues",
      "CBD sublingual oils absorb better than swallowed CBD oil because CBD undergoes significant first-pass metabolism when swallowed",
      "Someone takes sublingual vitamin D, but this offers no advantage—vitamin D absorbs well orally and isn't destroyed in the gut",
    ],
  },
  {
    slug: "superoxidedismutase",
    why_it_matters: `Superoxide dismutase (SOD) is your body's first-line antioxidant enzyme—understanding it helps you appreciate why internal antioxidant systems matter more than supplemental antioxidants. For supplement shoppers, SOD is sometimes marketed as an oral supplement, but there's a catch: protein enzymes like SOD are digested when swallowed and don't reach tissues intact. Your body makes its own SOD; what matters is having the cofactors (zinc, copper, manganese) for your SOD to work. Understanding this helps you evaluate antioxidant claims and appreciate that boosting your own enzyme production (via Nrf2 activators) may be more effective than taking antioxidant enzymes directly.`,
    simple_explanation: `Superoxide dismutase is an enzyme your cells produce to neutralize superoxide radicals—one of the most damaging reactive oxygen species. SOD converts superoxide into hydrogen peroxide, which is then handled by catalase and glutathione peroxidase. Your body has three types of SOD: one in cell cytoplasm (uses copper and zinc), one in mitochondria (uses manganese), and one outside cells (uses copper and zinc). SOD is incredibly efficient—it neutralizes superoxide faster than any other known enzyme. The catch for supplements: SOD is a protein that gets digested if swallowed. Oral SOD supplements may not meaningfully increase your tissue SOD levels. What helps: ensuring adequate zinc, copper, and manganese for your own SOD production, and not overwhelming your SOD capacity with excessive oxidative stress.`,
    key_points: `### Key Facts About Superoxide Dismutase

- **First-line defense**: SOD is the first enzyme to handle superoxide radicals, converting them to hydrogen peroxide for further neutralization
- **Three forms**: SOD1 (cytoplasm, Cu/Zn), SOD2 (mitochondria, Mn), SOD3 (extracellular, Cu/Zn)—each protects different cellular compartments
- **Cofactor dependent**: SOD requires zinc, copper, or manganese as cofactors; deficiency in these minerals impairs SOD function
- **Oral supplement limitations**: SOD is a protein; oral supplements are digested before absorption. Coated or specialized forms claim to survive, but evidence is limited
- **Nrf2 connection**: Nrf2 activators (sulforaphane, curcumin) can upregulate SOD production—potentially more effective than taking SOD directly`,
    common_misconceptions: [
      `**Myth:** You can boost SOD by taking SOD supplements.\n**Fact:** SOD is a protein that's digested in the gut. While some enteric-coated products claim to deliver intact SOD, evidence for tissue-level increases is limited. Supporting your own SOD production is more practical.`,
      `**Myth:** More antioxidant supplements compensate for low SOD.\n**Fact:** SOD is vastly more efficient than small-molecule antioxidants. One SOD molecule can neutralize millions of superoxide radicals. Supplements can't match enzyme efficiency.`,
      `**Myth:** SOD only matters for athletes or high-oxidative-stress situations.\n**Fact:** SOD is essential for everyone—it's constantly protecting cells from normal metabolic oxidative stress. SOD-deficient mice die early with severe oxidative damage.`,
    ],
    examples: [
      "A zinc-deficient person has impaired SOD1 function; correcting zinc status restores antioxidant enzyme capacity",
      "Melon-derived SOD supplements (GliSODin) use gliadin coating to protect SOD from digestion; some studies show increased antioxidant capacity, but evidence is mixed",
      "Sulforaphane from broccoli sprouts activates Nrf2, which upregulates SOD production—a dietary way to boost endogenous antioxidant enzymes",
      "SOD2 (mitochondrial) deficiency is lethal; SOD1 mutations are linked to some forms of ALS—these enzymes are essential, not optional",
    ],
  },
  {
    slug: "synergisticeffect",
    why_it_matters: `Synergistic effects occur when combined supplements produce greater effects than their sum—understanding this concept helps you evaluate combination product claims. For supplement shoppers, "synergy" is a common marketing claim: vitamin D + K2, curcumin + piperine, calcium + magnesium. Some combinations have genuine synergy (piperine dramatically increases curcumin absorption). Others are theoretical or overstated. Knowing that true synergy requires evidence beyond "these work on related pathways" helps you distinguish validated combinations from marketing bundling. Real synergy is valuable; claimed synergy is often just selling more products.`,
    simple_explanation: `Synergy means the combined effect is greater than adding individual effects together. If compound A produces 10% improvement and compound B produces 10%, synergy would mean A+B produces more than 20%—say, 35%. This contrasts with additive effects (A+B = 20%) or even antagonism (A+B < 20%). True synergy happens when compounds enhance each other's absorption, reduce each other's metabolism, or affect complementary parts of a pathway. In supplements, curcumin + piperine is a genuine synergy: piperine blocks enzymes that metabolize curcumin, increasing its levels 20-fold. But many "synergy" claims are theoretical—ingredients work on related systems, so they're sold together, but true synergy hasn't been demonstrated.`,
    key_points: `### Key Facts About Synergistic Effects

- **Beyond additive**: True synergy means combined effect exceeds the sum of individual effects—not just "both do something good"
- **Mechanisms vary**: Synergy can occur through enhanced absorption, reduced metabolism, complementary pathway effects, or protective effects
- **Evidence required**: Marketing claims synergy, but it should be demonstrated in actual studies comparing combined vs individual effects
- **Well-documented examples**: Curcumin + piperine (absorption), vitamin D + K2 (calcium metabolism), vitamin C + iron (absorption enhancement)
- **Potential for antagonism**: Some combinations interfere with each other—zinc and copper compete for absorption; calcium blocks iron absorption`,
    common_misconceptions: [
      `**Myth:** If two supplements work on the same system, they're synergistic.\n**Fact:** Working on the same system doesn't guarantee synergy. They could be additive, redundant, or even antagonistic. Synergy needs to be demonstrated, not assumed.`,
      `**Myth:** More ingredients mean better results.\n**Fact:** Kitchen-sink formulas with 20+ ingredients often contain subtherapeutic doses of each. Fewer well-dosed ingredients often outperform shotgun approaches.`,
      `**Myth:** All marketed combinations have synergy.\n**Fact:** Many combinations are bundled for marketing convenience, not proven synergy. "Complete formulas" often lack evidence that combined delivery outperforms separate supplementation.`,
    ],
    examples: [
      "Curcumin + piperine: piperine inhibits glucuronidation enzymes, increasing curcumin bioavailability 20-fold—well-documented synergy",
      "Vitamin D + K2: D increases calcium absorption, K2 directs calcium to bones rather than arteries—complementary actions, though full synergy data is limited",
      "Vitamin C + iron: vitamin C reduces iron to absorbable form and keeps it soluble; taking together increases non-heme iron absorption 2-6x",
      "Zinc + copper: high zinc interferes with copper absorption—an antagonistic interaction that's the opposite of synergy",
    ],
  },
  {
    slug: "systematicreview",
    why_it_matters: `Systematic reviews comprehensively analyze all available research on a topic—making them the highest level of evidence for supplement decisions. For supplement shoppers, a systematic review or meta-analysis provides more reliable conclusions than any single study. When evaluating a supplement, looking for systematic reviews (often in Cochrane Database) gives you the best summary of what's actually known. Understanding that systematic reviews have defined methods, search for all studies (not just positive ones), assess study quality, and synthesize findings helps you appreciate why they're more trustworthy than cherry-picked individual studies.`,
    simple_explanation: `A systematic review is a comprehensive, methodical summary of all research on a specific question. Unlike a narrative review (where an author selects studies to discuss), systematic reviews follow strict protocols: they define the research question precisely, search multiple databases for all relevant studies, assess study quality, extract data systematically, and synthesize findings—often statistically through meta-analysis. This process minimizes bias from selective citation and gives a more complete picture than any single study. Systematic reviews are considered the highest level of evidence because they aggregate multiple studies, balance conflicting results, and weight better-designed studies more heavily.`,
    key_points: `### Key Facts About Systematic Reviews

- **Comprehensive search**: Systematic reviews search multiple databases to find all relevant studies, not just convenient ones—reducing selection bias
- **Quality assessment**: Each included study is rated for methodological quality; results are interpreted considering study limitations
- **Transparent methods**: Search strategy, inclusion criteria, and analysis methods are documented and reproducible
- **Meta-analysis option**: When studies are similar enough, results can be statistically pooled (meta-analysis) for an overall effect estimate
- **Cochrane standard**: Cochrane systematic reviews are considered gold standard; they're rigorous, regularly updated, and cover many supplement topics`,
    common_misconceptions: [
      `**Myth:** All reviews are systematic reviews.\n**Fact:** Many published "reviews" are narrative—author selects studies to discuss without systematic search or quality assessment. Only reviews with explicit systematic methods qualify.`,
      `**Myth:** Systematic reviews always give definitive answers.\n**Fact:** They give the best available answer, but if underlying studies are weak, heterogeneous, or few, conclusions may be tentative: "insufficient evidence" is a valid conclusion.`,
      `**Myth:** If a systematic review says something works, all studies agreed.\n**Fact:** Systematic reviews often synthesize conflicting studies. The conclusion represents overall balance of evidence, which may include negative studies outweighed by positive ones.`,
    ],
    examples: [
      "Cochrane review of omega-3s for cardiovascular disease includes 86 trials with 162,796 participants—far more informative than any single study",
      "A systematic review of melatonin for sleep identifies 12 RCTs, rates their quality, and concludes melatonin modestly reduces sleep latency (time to fall asleep)",
      "Searching for vitamin D and depression, finding a systematic review synthesizing 25 trials is more valuable than finding individual positive or negative studies",
      "Systematic reviews that find 'insufficient evidence' are also valuable—they reveal where claims outpace data and where more research is needed",
    ],
  },
  {
    slug: "systolic",
    why_it_matters: `Systolic blood pressure is the higher number in blood pressure readings and a primary target for cardiovascular health—understanding it helps you evaluate blood pressure supplement claims. For supplement shoppers, many products claim to "support healthy blood pressure" targeting systolic reduction. Knowing that even 5-10 mmHg systolic reduction can be clinically meaningful helps you set realistic expectations. Supplements like beetroot (nitrates), hibiscus tea, omega-3s, and magnesium show modest systolic reductions of 2-8 mmHg in studies—helpful for borderline cases or as adjuncts, but not replacements for medication when needed.`,
    simple_explanation: `Blood pressure is measured as two numbers: systolic (top number) and diastolic (bottom number). Systolic pressure is the force on artery walls when your heart contracts and pumps blood—the peak pressure. Diastolic is the pressure between beats when your heart relaxes. Normal is <120/<80 mmHg; elevated is 120-129/<80; hypertension starts at 130/80. Systolic pressure tends to increase with age as arteries stiffen and is the better predictor of cardiovascular risk, especially in older adults. This is why blood pressure supplements focus on systolic reduction—even modest decreases are associated with reduced stroke and heart attack risk.`,
    key_points: `### Key Facts About Systolic Blood Pressure

- **Peak pressure**: Systolic is the maximum arterial pressure during heart contraction; it's the first (higher) number in blood pressure readings
- **Risk predictor**: Elevated systolic is a stronger predictor of cardiovascular events than diastolic, especially after age 50
- **Age-related increase**: Systolic tends to rise with age due to arterial stiffening, even if diastolic stays stable or decreases
- **Treatment target**: Current guidelines emphasize systolic control; reducing systolic by 10 mmHg lowers cardiovascular event risk by ~20%
- **Supplement potential**: Modest systolic reductions (2-8 mmHg) from beetroot, hibiscus, omega-3s, magnesium—meaningful for borderline hypertension`,
    common_misconceptions: [
      `**Myth:** Only the bottom number (diastolic) matters.\n**Fact:** Systolic is actually the better predictor of cardiovascular risk, especially in older adults. Both matter, but isolated systolic hypertension is particularly common and dangerous in the elderly.`,
      `**Myth:** Small systolic reductions don't matter.\n**Fact:** Even 2-5 mmHg population-wide systolic reduction significantly decreases stroke and heart attack rates. For individuals, these small reductions contribute to cumulative risk reduction.`,
      `**Myth:** Supplements can replace blood pressure medication.\n**Fact:** Supplements produce modest reductions (2-8 mmHg typically). For significant hypertension, medication reduces systolic by 10-20+ mmHg. Supplements may help borderline cases or support medication, not replace it.`,
    ],
    examples: [
      "Beetroot juice (containing ~400mg nitrates) reduces systolic blood pressure by 4-8 mmHg for several hours—meaningful for borderline hypertension",
      "A meta-analysis shows magnesium supplementation reduces systolic by ~2-4 mmHg in hypertensive individuals—modest but real effect",
      "Someone with systolic 135 mmHg (elevated) uses diet changes and beetroot extract to reduce to 128 mmHg—now in normal range without medication",
      "DASH diet reduces systolic by 8-14 mmHg—more than most supplements, showing lifestyle has larger effects than any single supplement",
    ],
  },
  {
    slug: "therapeuticdose",
    why_it_matters: `Therapeutic dose is the amount needed to produce a beneficial effect—understanding this helps you avoid underdosed supplements. For supplement shoppers, many products contain "fairy dust" doses—amounts that look good on labels but are too low to work. Curcumin needs 500-1000mg; many products contain 50mg. Omega-3s need 1000-3000mg EPA+DHA; some products provide 300mg. Knowing that research establishes effective doses and that lower amounts may not work helps you read labels critically and choose products that actually contain therapeutic amounts, even if they cost more.`,
    simple_explanation: `A therapeutic dose is the amount of a substance needed to produce the desired beneficial effect. Below this threshold, you may get no benefit; at or above it, you achieve the intended effect. This is established through dose-response research—testing different amounts to find where effects begin and maximize. For supplements, the therapeutic dose often differs significantly from minimum doses or amounts in poorly formulated products. For example, clinical trials of curcumin use 500-2000mg of enhanced-absorption curcumin; products with 50mg turmeric powder won't achieve therapeutic effects. Knowing therapeutic doses for supplements you're considering helps you evaluate whether products contain enough to work.`,
    key_points: `### Key Facts About Therapeutic Dose

- **Efficacy threshold**: Below therapeutic dose, effects may be absent or minimal; at therapeutic dose, intended benefits occur
- **Research-established**: Therapeutic doses come from clinical trials testing dose-response; not from manufacturer convenience or minimum detectable amounts
- **Varies by compound**: Each supplement has its own therapeutic range—what works for one (fish oil: 2-4g) differs from another (melatonin: 0.5-3mg)
- **Form matters**: Enhanced absorption forms may achieve therapeutic effects at lower doses (curcumin with piperine vs plain curcumin)
- **Safety margin**: Therapeutic dose should be well below toxic dose; responsible formulations stay within studied, safe ranges`,
    common_misconceptions: [
      `**Myth:** Any amount of a beneficial ingredient helps.\n**Fact:** Below therapeutic threshold, many compounds have no measurable effect. Subtherapeutic "fairy dust" doses are marketing tools, not medicine.`,
      `**Myth:** More is always better.\n**Fact:** Beyond therapeutic dose, additional amounts may not increase benefit and can increase risks. There's often a sweet spot, not linear benefit.`,
      `**Myth:** Label claims guarantee therapeutic amounts.\n**Fact:** Products can claim benefits while containing subtherapeutic amounts. Compare label doses to research doses before assuming a product will work.`,
    ],
    examples: [
      "Omega-3 research uses 2-4g EPA+DHA for cardiovascular effects; a product with 1000mg fish oil (300mg EPA+DHA) is below therapeutic dose",
      "Curcumin trials use 500-2000mg enhanced-absorption curcumin; standard turmeric powder at 500mg provides ~15mg curcumin—vastly subtherapeutic",
      "Magnesium for sleep/relaxation typically needs 200-400mg elemental magnesium; products with 100mg may be insufficient",
      "Ashwagandha research uses 300-600mg of extract standardized to 5% withanolides; unstandardized root powder at this dose may not be equivalent",
    ],
  },
  {
    slug: "thirdpartytesting",
    why_it_matters: `Third-party testing means an independent lab verified a supplement's contents—crucial for quality assurance in an under-regulated industry. For supplement shoppers, third-party testing addresses a real problem: FDA doesn't pre-approve supplements, so products can contain more, less, or different ingredients than labeled—or contaminants. Look for certifications like USP, NSF, ConsumerLab, or Informed Sport. These independent organizations test products and certify they contain what's claimed without harmful contaminants. Third-party tested products cost more but provide assurance you're getting what you paid for.`,
    simple_explanation: `Third-party testing means an independent laboratory—not the supplement company itself—has analyzed a product to verify it contains what the label claims, in the amounts claimed, without harmful contaminants. This matters because the FDA doesn't test supplements before they're sold. Without third-party verification, you're trusting the manufacturer's word. Independent certifications include USP (United States Pharmacopeia), NSF International, ConsumerLab, and Informed Sport (for banned substance screening). These labs test for accuracy of ingredients and doses, absence of heavy metals and contaminants, and proper manufacturing practices. Finding a third-party verified seal indicates higher quality standards.`,
    key_points: `### Key Facts About Third-Party Testing

- **Independence**: Testing by labs with no financial interest in the product passing; they have no reason to overlook problems
- **Content verification**: Confirms products contain labeled ingredients in labeled amounts—addresses underdosing and mislabeling
- **Contaminant screening**: Tests for heavy metals (lead, arsenic, mercury), pesticides, microbes, and sometimes banned substances (for athletes)
- **Major certifiers**: USP, NSF International, ConsumerLab, Informed Sport each have slightly different focus and rigor
- **Not FDA replacement**: Third-party testing is voluntary; uncertified products aren't necessarily bad, but you have less assurance`,
    common_misconceptions: [
      `**Myth:** FDA approval means a supplement is tested.\n**Fact:** FDA doesn't approve supplements before sale. It can only act after problems are reported. Third-party testing fills this gap.`,
      `**Myth:** All third-party certifications are equal.\n**Fact:** Rigor varies. USP and NSF are highly regarded. Some "certifications" are pay-for-logo arrangements with minimal testing. Look for recognized organizations.`,
      `**Myth:** Third-party testing guarantees the supplement works.\n**Fact:** Third-party testing confirms contents and purity, not efficacy. A tested product accurately contains what's claimed—whether that ingredient works is a separate question.`,
    ],
    examples: [
      "A USP-verified fish oil has been tested to contain labeled EPA and DHA amounts, meet purity standards for oxidation, and be free from heavy metal contamination",
      "ConsumerLab found 30% of multivitamins tested failed to contain labeled amounts—highlighting why third-party testing matters",
      "An athlete chooses Informed Sport certified products to avoid risk of testing positive for banned substances from contaminated supplements",
      "A supplement has no certification but costs half as much; the savings may not be worth the uncertainty about what's actually inside",
    ],
  },
  {
    slug: "thyroidfunction",
    why_it_matters: `Thyroid function affects metabolism, energy, weight, and mood—understanding it helps you evaluate supplements marketed for metabolic support and recognize when symptoms need medical evaluation. For supplement shoppers, thyroid-related supplements include iodine, selenium, zinc, and adaptogenic herbs like ashwagandha. Some genuinely support thyroid health (selenium in autoimmune thyroiditis); others are overhyped. Importantly, thyroid symptoms (fatigue, weight changes, mood issues) have many causes—supplementing for "sluggish thyroid" without testing can mask or worsen problems. Understanding thyroid basics helps you know when to test rather than just supplement.`,
    simple_explanation: `Your thyroid is a butterfly-shaped gland in your neck that produces hormones (T3 and T4) controlling your metabolic rate—essentially how fast your body runs. Thyroid hormones affect nearly every system: energy, body temperature, weight, heart rate, mood, digestion. Hypothyroidism (underactive) causes fatigue, weight gain, cold intolerance, depression, dry skin. Hyperthyroidism (overactive) causes anxiety, weight loss, heat intolerance, rapid heartbeat. Thyroid function is tested via blood tests: TSH (thyroid-stimulating hormone, from pituitary), free T4, and sometimes free T3. The thyroid needs iodine to make hormones and selenium to convert T4 to active T3. Autoimmune diseases (Hashimoto's, Graves') are common causes of dysfunction.`,
    key_points: `### Key Facts About Thyroid Function

- **Metabolic master**: Thyroid hormones regulate metabolic rate, affecting energy, weight, body temperature, and virtually every organ system
- **Key hormones**: TSH (pituitary signal), T4 (main thyroid output), T3 (active hormone)—blood tests measure these for diagnosis
- **Nutrient requirements**: Iodine (for hormone synthesis), selenium (for T4→T3 conversion), zinc and iron (for proper function)
- **Autoimmune common**: Hashimoto's (hypothyroid) and Graves' (hyperthyroid) are autoimmune conditions—the most common thyroid disorders in developed countries
- **Test before supplementing**: Thyroid symptoms are nonspecific; testing confirms dysfunction before blindly supplementing—excess iodine can worsen autoimmune thyroid disease`,
    common_misconceptions: [
      `**Myth:** Fatigue and weight gain mean you have a thyroid problem.\n**Fact:** Many conditions cause these symptoms. Thyroid dysfunction is possible but not assumed. Blood tests (TSH at minimum) determine if thyroid is actually the issue.`,
      `**Myth:** Iodine supplements fix sluggish thyroid.\n**Fact:** Iodine deficiency is rare in developed countries with iodized salt. Excess iodine can worsen autoimmune thyroiditis. Don't supplement without knowing your iodine status.`,
      `**Myth:** Natural thyroid supplements are safer than medication.\n**Fact:** "Thyroid support" supplements with glandular tissue contain unpredictable hormone amounts. If you need thyroid hormone, prescription medications (levothyroxine) are standardized and monitored.`,
    ],
    examples: [
      "A person with fatigue gets thyroid testing: TSH normal (2.5 mIU/L), free T4 normal—thyroid not the cause; supplementing thyroid support would be misguided",
      "Someone with Hashimoto's thyroiditis takes selenium (200mcg) which may reduce thyroid antibodies and support T4 to T3 conversion—evidence-based adjunct",
      "Excessive iodine from kelp supplements triggers thyroiditis flare in someone with underlying autoimmune susceptibility—too much can be harmful",
      "Ashwagandha may modestly increase T3 and T4 in subclinical hypothyroidism, but effects are subtle and shouldn't replace medical treatment when needed",
    ],
  },
  {
    slug: "tolerableupperintakelevel",
    why_it_matters: `The Tolerable Upper Intake Level (UL) is the maximum daily intake unlikely to cause harm—knowing it helps you avoid supplement overdose. For supplement shoppers, UL is a safety guardrail. Exceeding it occasionally is usually fine, but chronic intake above UL increases risk of adverse effects. Some supplements are commonly taken above UL (vitamin D, niacin for specific purposes) under medical supervision. Others have narrow safety margins where UL is close to therapeutic dose. Understanding UL helps you evaluate dosing recommendations and recognize when a protocol exceeds standard safety limits—which may be justified in some cases but requires awareness.`,
    simple_explanation: `The Tolerable Upper Intake Level is a science-based estimate of the highest daily intake of a nutrient that's likely to pose no risk of adverse health effects to almost all individuals in the general population. It's set by analyzing all available toxicity data and adding safety margins. For example, vitamin D's UL is 4000 IU/day; above this, risk of hypercalcemia increases over time. Vitamin C's UL is 2000mg/day; above this, GI distress and kidney stone risk increase. UL isn't where harm definitely occurs—it's where the safety cushion ends and you're in uncertain territory. Most people should stay below UL unless supervised by a healthcare provider for specific reasons.`,
    key_points: `### Key Facts About Tolerable Upper Intake Level

- **Safety threshold**: UL is the highest daily intake that's probably safe for nearly everyone; exceeding it increases (but doesn't guarantee) adverse effect risk
- **Includes all sources**: UL covers food, supplements, and fortified foods combined—not just supplements
- **Varies by nutrient**: Some nutrients have high ULs relative to typical doses (vitamin C: 2000mg); others have low margins (vitamin A: 3000mcg)
- **Not a target**: UL is a ceiling, not a goal. Optimal intake is usually well below UL. Don't interpret UL as recommended intake
- **Chronic vs acute**: UL applies to regular daily intake over time; occasional single doses above UL are usually not concerning`,
    common_misconceptions: [
      `**Myth:** If a dose is below the UL, it's definitely safe.\n**Fact:** UL is set for general healthy population. Individuals with specific conditions, medications, or genetic variants may experience problems below UL.`,
      `**Myth:** Exceeding UL once causes toxicity.\n**Fact:** UL applies to chronic intake. Occasionally exceeding it is unlikely to cause harm. Toxicity risk increases with sustained intake above UL over weeks to months.`,
      `**Myth:** Supplements can't exceed UL if they're sold over the counter.\n**Fact:** Supplement regulation doesn't enforce UL. Many products contain doses above UL (high-dose B vitamins, vitamin D protocols). It's legal but buyer-beware.`,
    ],
    examples: [
      "Vitamin D UL is 4000 IU/day, but many doctors recommend 5000+ IU to correct deficiency—acceptable under supervision with monitoring",
      "Vitamin A UL is 3000mcg (10,000 IU); exceeding this chronically causes liver damage, bone issues, and birth defects during pregnancy—narrow safety margin",
      "Zinc UL is 40mg/day; high-dose zinc (80mg+) during colds may be used short-term, but chronic intake at this level causes copper deficiency",
      "Vitamin C UL is 2000mg/day; above this, GI distress and kidney stone risk increase—but massive doses for short periods are often tolerated",
    ],
  },
  {
    slug: "tac",
    why_it_matters: `Total Antioxidant Capacity measures overall antioxidant power—but understanding its limitations helps you evaluate "antioxidant" product claims. For supplement shoppers, TAC is sometimes used to claim one product is "more powerful" than another. However, test-tube TAC doesn't predict in-body effects. A food or supplement with high TAC may not increase your body's antioxidant status after you eat it—absorption, metabolism, and distribution all intervene. Understanding that TAC is a laboratory measure with weak translation to health outcomes helps you avoid being impressed by dramatic TAC numbers in marketing.`,
    simple_explanation: `Total Antioxidant Capacity is a laboratory measurement of how well a substance neutralizes free radicals in a test tube. Various assays exist: ORAC (Oxygen Radical Absorbance Capacity), FRAP (Ferric Reducing Antioxidant Power), TEAC (Trolox Equivalent Antioxidant Capacity). These measure the combined antioxidant activity of all compounds in a food or supplement. High-TAC foods include berries, dark chocolate, and spices—they neutralize free radicals effectively in lab tests. The problem: test-tube TAC doesn't reliably predict what happens in your body. Compounds may not be absorbed, may be metabolized to inactive forms, or may not reach tissues where they're needed. TAC is interesting but not a reliable guide to health effects.`,
    key_points: `### Key Facts About Total Antioxidant Capacity

- **Test-tube measurement**: TAC assays measure antioxidant activity in controlled laboratory conditions—not inside living systems
- **Multiple methods**: ORAC, FRAP, TEAC, and others measure different aspects of antioxidant activity; results aren't directly comparable
- **Poor predictor**: High TAC of a food doesn't reliably predict increased antioxidant status in the body or reduced disease risk
- **ORAC discontinued**: The USDA removed its ORAC database because TAC data was being misused in marketing without health significance
- **Marketing tool**: High TAC numbers are impressive in ads but don't mean the product provides meaningful antioxidant benefits in your body`,
    common_misconceptions: [
      `**Myth:** Higher TAC means better antioxidant protection.\n**Fact:** Test-tube TAC doesn't translate to in-body effects. Absorption, metabolism, and tissue distribution determine actual antioxidant impact—not raw TAC numbers.`,
      `**Myth:** ORAC scores guide food choices.\n**Fact:** ORAC has been largely abandoned by scientists because it doesn't predict health outcomes. Marketing still uses ORAC, but it's not a useful health guide.`,
      `**Myth:** Antioxidant supplements with high TAC prevent disease.\n**Fact:** Clinical trials of high-TAC antioxidant supplements have generally failed to show disease prevention. The TAC-to-health leap is not supported by evidence.`,
    ],
    examples: [
      "Açaí has impressive ORAC scores, but no clinical evidence shows açaí supplements improve health outcomes compared to other berries or fruits",
      "A supplement claims 10x the TAC of blueberries; this says nothing about whether consuming it provides 10x the health benefit",
      "The USDA stopped publishing ORAC values because supplement companies were misusing them in marketing without scientific validity",
      "Coffee has higher dietary antioxidant contribution than most foods in Western diets—not because of high TAC per serving, but because people drink so much",
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
  console.log("=== BATCH 19: Enhancing Glossary Terms 181-190 ===\n");

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
