import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Dumbbell, Moon, TrendingUp, Activity, Shield, Heart,
  AlertCircle, Droplet, FlaskConical, Apple, Users, TrendingDown, Pill, CheckCircle2,
  Scale, FileText
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function CaseinProteinPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const benefits = ['sustained protein release', 'muscle preservation', 'overnight recovery', 'satiety', 'lean muscle growth'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Casein Protein",
    onNavigate,
    currentPage: "caseinproteinv2",
    heroDescription: "Evidence-based overview of casein protein supplementation with meta-analytic evidence from 6 systematic reviews covering blood pressure, body composition, and inflammatory outcomes across diverse adult populations.",
    heroImageUrl: getSupplementImage('caseinproteinv2'),
    
    overviewTitle: "What is Casein Protein?",
    overviewContent: (
      <>
        <p>
          Casein protein is a <strong>complete protein derived from milk</strong>, making up approximately 80% of total milk protein. Unlike rapidly absorbed whey protein, casein forms a gel in the stomach that results in slow, sustained amino acid release over several hours, making it particularly popular as a nighttime protein supplement.
        </p>
        <p style={{ marginTop: 'var(--space-md)' }}>
          <strong>Meta-analytic evidence</strong> from 6 systematic reviews demonstrates consistent benefits for blood pressure reduction and modest improvements in muscle mass when combined with resistance training. However, <strong>most studies did not isolate casein from other dairy proteins</strong>, limiting the ability to attribute effects specifically to casein.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Apple,
        title: "Casein Hydrolysate",
        description: "Pre-digested casein; fastest absorption; demonstrated blood pressure benefits in trials"
      },
      {
        icon: Activity,
        title: "Micellar Casein",
        description: "Undenatured casein; slowest digestion (6-8 hours); optimal for overnight muscle recovery"
      },
      {
        icon: FlaskConical,
        title: "Calcium Caseinate",
        description: "Moderately digesting form; higher calcium content; often used in protein blends"
      },
      {
        icon: Droplet,
        title: "Dietary Sources",
        description: "Milk, cottage cheese, Greek yogurt, cheese—whole food sources provide additional nutrients"
      }
    ],
    additionalOverviewContent: (
      <p>
        Casein protein's slow-release properties make it uniquely suited for sustained amino acid delivery, particularly during fasting periods like overnight sleep. Meta-analyses show that cardiovascular benefits are <strong>most consistent with casein hydrolysate</strong>, while muscle mass benefits require <strong>concurrent resistance training</strong> and adequate duration (12-24 weeks).
      </p>
    ),
    
    benefits: [
      {
        icon: Heart,
        title: "Blood Pressure Reduction (Grade A)",
        description: "Two meta-analyses demonstrate consistent reductions: systolic blood pressure by 3.20-4.10 mmHg and diastolic blood pressure by 1.50 mmHg with casein hydrolysate supplementation"
      },
      {
        icon: Dumbbell,
        title: "Muscle Mass in Older Adults (Grade B)",
        description: "Meta-analysis of dairy protein interventions shows modest increase in appendicular muscle mass (0.13 kg) in middle-aged to older adults; broader protein studies show larger gains (0.69 kg fat-free mass)"
      },
      {
        icon: TrendingDown,
        title: "Anti-Inflammatory Effects (Grade C)",
        description: "One meta-analysis of milk proteins shows small but significant reduction in interleukin-6 (0.25 pg/mL), though effect cannot be attributed to casein alone"
      },
      {
        icon: AlertCircle,
        title: "Limited Effect on Muscle Strength (Grade D)",
        description: "Casein-inclusive dairy protein studies show no significant strength improvements; broader protein studies demonstrate benefits but cannot be attributed specifically to casein"
      }
    ],
    
    drawbacksIntro: "Notable limitations in current evidence base:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Limited Casein-Specific Evidence",
        description: "Most studies combined casein with whey or other dairy proteins, making it difficult to isolate casein-specific effects from general dairy protein benefits"
      },
      {
        icon: Moon,
        title: "Short-Term Data Only",
        description: "Most interventions lasted less than 6 months; long-term safety and efficacy beyond 24 weeks are not well established"
      },
      {
        icon: Shield,
        title: "Minor Gastrointestinal Effects",
        description: "One meta-analysis reported minor GI side effects including satiety, diarrhea, flatulence, or nausea; no serious adverse events were documented"
      },
      {
        icon: Scale,
        title: "Modest Effect Sizes",
        description: "Blood pressure reductions (3-4 mmHg) and muscle mass gains (0.13 kg) are statistically significant but clinically modest; effects on inflammatory markers are small"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Blood Pressure Reduction",
        subtitle: "Population: Adults with Normal or Elevated Blood Pressure",
        description: "Strong evidence from two meta-analyses. Zhou et al. (2022) reported systolic blood pressure reduction of 3.20 mmHg and diastolic reduction of 1.50 mmHg with casein hydrolysate. Zhou et al. (2024) found systolic reduction of 4.10 mmHg in metabolic disease patients. Effects consistent across age groups and health conditions."
      },
      {
        letter: 'B',
        title: "Muscle Mass",
        subtitle: "Population: Middle-Aged to Older Adults",
        description: "Moderate evidence from dairy protein meta-analyses. Hanach et al. (2019) showed appendicular muscle mass increase of 0.13 kg in middle-aged to older adults with dairy protein supplementation. Broader protein meta-analyses (Cermak et al. 2012, Liao et al. 2017) demonstrated larger gains (0.69 kg fat-free mass) but cannot be attributed specifically to casein. Requires concurrent resistance training."
      },
      {
        letter: 'C',
        title: "Inflammatory Markers",
        subtitle: "Population: General Adult Populations",
        description: "Limited evidence from milk protein studies. Mohammadi et al. (2025) reported interleukin-6 reduction of 0.25 pg/mL with milk protein supplementation (casein, whey, or both). Effect cannot be isolated to casein alone. No significant effects on C-reactive protein, tumor necrosis factor alpha, adiponectin, or leptin."
      },
      {
        letter: 'D',
        title: "Muscle Strength",
        subtitle: "Population: Older Adults",
        description: "Insufficient evidence for casein-specific strength benefits. Hanach et al. (2019) found no significant effect on handgrip strength or leg press in dairy protein studies. Broader protein supplementation studies showed strength gains but cannot be attributed to casein specifically."
      }
    ],
    
    effectivenessTitle: "Evidence Summary",
    
    researchItems: [
      {
        icon: FileText,
        label: "Meta-Analyses Analyzed",
        value: "6",
        subtext: "Systematic reviews of RCTs"
      },
      {
        icon: Users,
        label: "Study Populations",
        value: "Diverse",
        subtext: "Healthy adults to metabolic disease patients"
      },
      {
        icon: TrendingDown,
        label: "Blood Pressure Reduction",
        value: "-3.2 to -4.1",
        subtext: "mmHg systolic (2 meta-analyses)"
      },
      {
        icon: Dumbbell,
        label: "Muscle Mass Increase",
        value: "+0.13 to 0.69",
        subtext: "kg (3 meta-analyses)"
      },
      {
        icon: Shield,
        label: "Safety Profile",
        value: "Good",
        subtext: "Minor GI effects only"
      },
      {
        icon: Moon,
        label: "Study Duration",
        value: "6-24",
        subtext: "weeks (typical range)"
      }
    ],
    
    detailedFindings: [
      {
        category: "Cardiovascular Effects",
        outcomes: [
          {
            outcome: "Systolic Blood Pressure",
            details: [
              { finding: "Zhou et al. (2022) reported a reduction of 3.20 mmHg with casein hydrolysate in adults with normal or elevated blood pressure" },
              { finding: "Zhou et al. (2024) observed a reduction of 4.10 mmHg in individuals with metabolic diseases" },
              { finding: "Effects were consistent across different age groups (under 50 and over 50 years) and health conditions" }
            ]
          },
          {
            outcome: "Diastolic Blood Pressure",
            details: [
              { finding: "Zhou et al. (2022) reported a reduction of 1.50 mmHg with casein hydrolysate" }
            ]
          },
          {
            outcome: "Lipid Profile",
            details: [
              { finding: "Zhou et al. (2022) found no effect on total cholesterol, LDL cholesterol, HDL cholesterol, or triglycerides" }
            ]
          }
        ]
      },
      {
        category: "Body Composition & Muscle Function",
        outcomes: [
          {
            outcome: "Muscle Mass",
            details: [
              { finding: "Hanach et al. (2019) found a modest increase in appendicular muscle mass of 0.13 kg in middle-aged to older adults supplementing with dairy proteins including casein" },
              { finding: "Cermak et al. (2012) reported broader protein supplementation (not casein-specific) increased fat-free mass by 0.69 kg" },
              { finding: "Liao et al. (2017) documented a standardized mean difference of 0.58 for lean mass in overweight/obese older adults with protein supplementation" }
            ]
          },
          {
            outcome: "Muscle Strength",
            details: [
              { finding: "Hanach et al. (2019) found no significant effect on handgrip strength (0.84 kg) or leg press (0.37 kg) in casein-inclusive dairy protein studies" },
              { finding: "Cermak et al. (2012) showed protein supplementation (not casein-specific) increased one-repetition maximum leg press by 13.5 kg" },
              { finding: "Liao et al. (2017) reported a standardized mean difference of 0.69 for leg strength with protein supplementation" }
            ]
          }
        ]
      },
      {
        category: "Inflammatory Markers",
        outcomes: [
          {
            outcome: "Interleukin-6",
            details: [
              { finding: "Mohammadi et al. (2025) found a small but significant reduction of 0.25 pg/mL with milk protein supplementation (casein, whey, or both)" },
              { finding: "The clinical significance of this reduction is uncertain, and the effect cannot be attributed to casein alone" }
            ]
          },
          {
            outcome: "Other Inflammatory Markers",
            details: [
              { finding: "Mohammadi et al. (2025) reported no effect on C-reactive protein, tumor necrosis factor alpha, adiponectin, or leptin" }
            ]
          }
        ]
      },
      {
        category: "Safety & Tolerability",
        outcomes: [
          {
            outcome: "Adverse Events",
            details: [
              { finding: "Zhou et al. (2022) reported no adverse reactions with casein hydrolysate, describing it as a safe alternative to angiotensin-converting enzyme inhibitors" },
              { finding: "Hanach et al. (2019) documented only minor gastrointestinal side effects including satiety, diarrhea, flatulence, or nausea" },
              { finding: "No serious adverse events were reported in any meta-analysis" }
            ]
          },
          {
            outcome: "Long-Term Safety",
            details: [
              { finding: "Long-term safety beyond 24 weeks is not well established; Hanach et al. (2019) specifically noted a lack of long-term follow-up" }
            ]
          }
        ]
      }
    ],
    
    keyInsights: [
      {
        title: "Blood Pressure Benefits Are Most Consistent",
        description: "Reductions in systolic blood pressure (3-4 mmHg) with casein hydrolysate were observed across different populations and were statistically significant in both studies reporting this outcome. Effects were seen in both healthy individuals and those with elevated blood pressure or metabolic disease."
      },
      {
        title: "Muscle Mass vs. Strength Disconnect",
        description: "Increases in muscle mass did not consistently translate to improvements in muscle strength in casein-inclusive studies. This suggests that casein's benefits for muscle outcomes may be primarily compositional rather than functional, or that longer durations or higher doses are needed for strength gains."
      },
      {
        title: "Dairy Protein Attribution Challenge",
        description: "Most studies combined casein with whey or other dairy proteins, making it difficult to isolate casein-specific effects. The one study using casein hydrolysate specifically (Zhou et al., 2022) focused on cardiovascular outcomes, leaving muscle-related benefits less well-defined for casein alone."
      },
      {
        title: "Population-Specific Responses",
        description: "Blood pressure benefits were observed across age groups (under 50 and over 50 years) and health conditions (normal, elevated blood pressure, metabolic disease). Muscle mass benefits were most evident in middle-aged to older adults, particularly when combined with resistance training."
      }
    ],
    
    buyingGuideIntro: "When selecting casein protein (based on clinical evidence):",
    buyingGuideItems: [
      {
        icon: Apple,
        title: "Form & Type",
        description: "Casein Hydrolysate: pre-digested for faster absorption; demonstrated blood pressure benefits in clinical trials. Micellar Casein: undenatured, slowest-digesting form (6-8 hours); optimal for overnight muscle protein synthesis. Calcium Caseinate: moderately digesting; higher calcium content. Choose based on your goal: hydrolysate for blood pressure support; micellar for sustained amino acid delivery."
      },
      {
        icon: Activity,
        title: "Protein Content & Purity",
        description: "Look for 20-30g protein per serving to support muscle protein synthesis. Higher-quality products contain 80-90% protein by weight. Ensure complete amino acid profile with all essential amino acids. At least 2-3g leucine per serving to optimize muscle protein synthesis."
      },
      {
        icon: Shield,
        title: "Third-Party Testing",
        description: (
          <>
            Look for <a href="https://www.usp.org" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">USP</a>, <a href="https://www.consumerlab.com" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">ConsumerLab</a>, or <a href="https://www.nsf.org" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">NSF</a> certification for purity and label accuracy. Verify absence of heavy metal contamination (lead, cadmium, mercury, arsenic). For athletes: NSF Certified for Sport or Informed-Sport certifications important.
          </>
        )
      },
      {
        icon: AlertCircle,
        title: "Allergen Information",
        description: "Casein is a milk protein; unsuitable for those with milk allergies or vegan diets. Casein naturally contains lactose; may cause digestive discomfort in lactose-intolerant individuals—choose hydrolyzed forms if sensitive. Check for additional allergens or contaminants."
      },
      {
        icon: CheckCircle2,
        title: "Manufacturing Standards",
        description: "Look for GMP (Good Manufacturing Practice) certified facilities. Cold-processed or low-temperature processing preserves protein integrity. Sealed container with moisture barrier to prevent degradation. Check expiration date and store in cool, dry place."
      }
    ],

    usageConsiderationsTitle: "How to use Casein Protein?",
    usageConsiderationsContent: (
      <>
        <div className="space-y-6">
          <div>
            <h3 className="form-section-heading">Dosing</h3>
            <ul className="checklist">
              <li><strong>Blood Pressure Support:</strong> Studies used casein hydrolysate doses ranging from lactotripeptides to protein servings providing bioactive peptides</li>
              <li><strong>Muscle Mass/Recovery:</strong> 20-40g per serving, particularly before bed for overnight muscle protein synthesis</li>
              <li><strong>Daily Protein Needs:</strong> Factor into total daily protein intake (1.6-2.2 g/kg body weight for muscle building)</li>
              <li><strong>Timing Considerations:</strong> Evening/bedtime dosing leverages slow-release properties during overnight fast</li>
            </ul>
          </div>

          <div>
            <h3 className="form-section-heading">Safety & Contraindications</h3>
            <ul className="checklist">
              <li><strong>Milk Allergy:</strong> Casein is a major milk allergen; avoid if allergic to dairy proteins</li>
              <li><strong>Lactose Intolerance:</strong> Contains lactose; may cause digestive discomfort in sensitive individuals</li>
              <li><strong>Kidney Disease:</strong> Consult healthcare provider before high protein intake with existing kidney conditions</li>
              <li><strong>Medication Interactions:</strong> May interact with antibiotics (particularly quinolones and tetracyclines) due to calcium content</li>
            </ul>
          </div>

          <div>
            <h3 className="form-section-heading">Combination Strategies</h3>
            <ul className="checklist">
              <li><strong>With Resistance Training:</strong> Meta-analyses show muscle benefits require concurrent resistance exercise</li>
              <li><strong>With Whey Protein:</strong> Combining fast (whey) and slow (casein) proteins may optimize 24-hour muscle protein synthesis</li>
              <li><strong>With Calorie Restriction:</strong> May help preserve lean mass during weight loss (similar to whey protein)</li>
              <li><strong>With Creatine:</strong> Can be combined with creatine for enhanced strength and muscle outcomes</li>
            </ul>
          </div>
        </div>
      </>
    ),

    retailerButtonsTitle: "Where to buy Casein Protein?",

    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Modest blood pressure reductions (3-4 mmHg systolic, 1.5 mmHg diastolic) measurable via monitoring—most consistent with casein hydrolysate. Small increases in muscle mass (0.13 kg appendicular mass in older adults) require concurrent resistance training for 12-24 weeks. Sustained amino acid release overnight supports muscle protein synthesis during sleep and reduces muscle breakdown. Minor reduction in inflammatory marker IL-6 (0.25 pg/mL) though clinical significance uncertain. Benefits most evident in older adults (61-81 years) and those with elevated blood pressure or metabolic conditions. Effects are gradual and require consistent supplementation over 4-24 weeks. Blood pressure effects emerge within 4-8 weeks. Muscle mass improvements become measurable after 12-16 weeks of combined supplementation and resistance training.",
      outcomes: [
        {
          icon: Heart,
          iconLabel: "Blood Pressure",
          usage: "Casein hydrolysate as studied",
          bestTime: "Anytime",
          resultsWeeks: "4-8",
          intensity: "Moderate" as const
        },
        {
          icon: Dumbbell,
          iconLabel: "Muscle Mass (Older Adults)",
          usage: "Part of balanced protein intake",
          bestTime: "Evening or post-workout",
          resultsWeeks: "12-24",
          intensity: "Low to Moderate" as const
        },
        {
          icon: Moon,
          iconLabel: "Overnight Recovery",
          usage: "20-40g",
          bestTime: "Evening",
          resultsWeeks: "Ongoing",
          intensity: "Moderate" as const
        }
      ]
    },

    studyReferences: [
      {
        authors: "Zhou S, Xu T, Zhang X, Luo J, An P, et al.",
        year: "2022",
        title: "Effect of Casein Hydrolysate on Cardiovascular Risk Factors: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
        journal: "Nutrients"
      },
      {
        authors: "Mohammadi S, Ashtary-Larky D, Mehrbod M, Kouhi Sough N, Salehi Omran H, et al.",
        year: "2025",
        title: "Impacts of supplementation with milk proteins on inflammation: a systematic review and meta-analysis",
        journal: "InflammoPharmacology"
      },
      {
        authors: "Zhou S, Cheng F, He J, Xu T, Zhang X, et al.",
        year: "2024",
        title: "Effects of high-quality protein supplementation on cardiovascular risk factors in individuals with metabolic diseases: A systematic review and meta-analysis of randomized controlled trials",
        journal: "Clinical Nutrition"
      },
      {
        authors: "Hanach NI, McCullough F, Avery A",
        year: "2019",
        title: "The Impact of Dairy Protein Intake on Muscle Mass, Muscle Strength, and Physical Performance in Middle-Aged to Older Adults with or without Existing Sarcopenia: A Systematic Review and Meta-Analysis",
        journal: "Advances in Nutrition"
      },
      {
        authors: "Cermak NM, Res PT, de Groot LC, Saris WH, van Loon LJ",
        year: "2012",
        title: "Protein supplementation augments the adaptive response of skeletal muscle to resistance-type exercise training: a meta-analysis",
        journal: "American Journal of Clinical Nutrition"
      },
      {
        authors: "Liao CD, Tsauo JY, Wu YT, Cheng CP, Chen HC, et al.",
        year: "2017",
        title: "Effects of protein supplementation combined with resistance exercise on body composition and physical function in older adults: a systematic review and meta-analysis",
        journal: "American Journal of Clinical Nutrition"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Casein Protein', benefits, '/casein-protein')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} onContactClick={onContactClick} onLegalClick={onLegalClick} />
    </>
  );
}