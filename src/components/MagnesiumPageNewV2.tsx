import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Heart, Activity, Droplet, TrendingDown, Flame, Shield,
  Pill, Zap, Apple, FlaskConical, User, Users, BarChart3
} from './iconExports';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function MagnesiumPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: string) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('magnesiumv2');
  const benefits = ['blood pressure reduction', 'glucose metabolism', 'sleep quality', 'muscle function', 'bone health'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Magnesium",
    onNavigate,
    currentPage: "magnesiumv2",
    heroDescription: "Evidence-based overview of an essential mineral with meta-analytic support for modest improvements in blood pressure, glucose metabolism, inflammation, and biomarker response in specific populations.",
    heroImageUrl: getSupplementImage('magnesiumv2'),
    
    overviewTitle: "What is Magnesium?",
    overviewContent: (
      <>
        <p>
          Magnesium is an <span className="font-medium">essential mineral</span> involved in over 300 enzymatic reactions, critical for muscle and nerve function, blood glucose control, blood pressure regulation, and protein synthesis. It's the fourth most abundant mineral in the body and plays key roles in energy production, bone health, and cardiovascular function.
        </p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>
          Meta-analytic evidence demonstrates modest but consistent benefits for blood pressure reduction, glucose metabolism in diabetes or high-risk populations, and inflammation marker improvements, with dose- and time-dependent increases in circulating magnesium and urinary excretion. Inorganic forms are more effective at raising serum magnesium but may cause more gastrointestinal symptoms than organic forms.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Apple,
        title: "Plant-based sources",
        description: "Dark leafy greens, nuts (almonds, cashews), seeds (pumpkin, chia), legumes, whole grains"
      },
      {
        icon: Droplet,
        title: "Other sources",
        description: "Hard water, fortified foods, dark chocolate"
      },
      {
        icon: FlaskConical,
        title: "Supplements",
        description: "Magnesium oxide, citrate, chloride, glycinate, and other organic/inorganic forms"
      }
    ],
    
    benefits: [
      {
        icon: Heart,
        title: "Blood Pressure Reduction",
        description: "Meta-analysis shows modest reductions in both systolic (~2.0 mmHg) and diastolic (~1.78 mmHg) blood pressure in normotensive and hypertensive adults with at least 300 mg/day for 1+ month"
      },
      {
        icon: TrendingDown,
        title: "Glucose Metabolism",
        description: "In people with diabetes or high metabolic risk, supplementation improves fasting plasma glucose (SMD -0.40 to -0.426) and insulin resistance (WMD -0.67) with at least 12 weeks of use"
      },
      {
        icon: Flame,
        title: "Inflammation Reduction",
        description: "Reduces serum C-reactive protein (SMD -0.356) and increases nitric oxide (SMD 0.321) in individuals with elevated baseline CRP (>3 mg/L), suggesting anti-inflammatory effects"
      },
      {
        icon: Activity,
        title: "Metabolic Benefits",
        description: "Small reductions in BMI (WMD -0.21 kg/m²) observed in subgroups with magnesium deficiency, insulin resistance, obesity, or females taking 48-450 mg/day for 6-24 weeks"
      },
      {
        icon: Droplet,
        title: "Biomarker Response",
        description: "Increases circulating magnesium by ~0.04 mmol/L and urinary excretion by 1.52 mmol/24h in a dose- and time-dependent manner, with steady-state at ~20 weeks (serum) and ~40 weeks (urine)"
      }
    ],
    
    drawbacksIntro: "Generally safe with minimal side effects, but consider:",
    drawbacks: [
      {
        icon: Droplet,
        title: "Gastrointestinal Effects",
        description: "Most common adverse effect is diarrhea, especially at higher doses. No serious adverse events reported in meta-analyses. Symptoms are dose-dependent for some individuals"
      },
      {
        icon: User,
        title: "Limited Benefit in Healthy Populations",
        description: "Healthy, athletic, and younger individuals show little to no benefit for metabolic, inflammatory, or anthropometric outcomes. Effects most pronounced in those with baseline abnormalities"
      },
      {
        icon: Activity,
        title: "Modest Effect Sizes",
        description: "While statistically significant, clinical improvements are modest (e.g., 2 mmHg BP reduction, 0.21 kg/m² BMI decrease). Benefits accumulate over time and may be more preventive than therapeutic"
      },
      {
        icon: Zap,
        title: "No Muscle Fitness Benefit in Athletes",
        description: "Meta-analysis found no significant improvement in muscle fitness for athletes or healthy young adults. Benefits for muscle fitness observed only in elderly and alcoholics"
      }
    ],
    
    researchGrades: [
      {
        letter: 'B',
        title: "Blood Pressure Reduction",
        description: "Good evidence from meta-analysis of 2,028 adults (normotensive and hypertensive).[1] Median dose 368 mg/day for median 3 months reduces systolic BP by 2.0 mmHg and diastolic BP by 1.78 mmHg. At least 300 mg/day for 1+ month needed. Effects more pronounced in higher-quality studies with lower dropout rates."
      },
      {
        letter: 'B',
        title: "Glucose Metabolism",
        subtitle: "Population: Diabetes/High-Risk",
        description: "Strong evidence from multiple meta-analyses (336-447 magnesium vs 334-442 placebo).[2][3] Reduces fasting plasma glucose and insulin resistance in diabetes or high-risk populations with median 12-14 weeks supplementation. Magnesium oxide most studied; effects greater with longer duration (≥4 months) and higher serum magnesium."
      },
      {
        letter: 'B',
        title: "Inflammation Markers",
        description: "Good evidence from meta-analyses (447 magnesium vs 442 placebo).[4] Reduces serum CRP and increases nitric oxide in individuals with baseline CRP >3 mg/L. 250 mg/day magnesium oxide for median 12 weeks (range 4-26). Other inflammatory markers (fibrinogen, IL-1) also improved. No effects on IL-6, TAC, glutathione, TNF-α, or MDA."
      },
      {
        letter: 'C',
        title: "Body Mass Index Reduction",
        description: "Moderate evidence showing small BMI reduction with 48-450 mg/day for 6-24 weeks.[5] Effects most evident in subgroups with magnesium deficiency, insulin resistance, obesity, hypertension, or females. No significant changes in body weight, waist circumference, or body fat percentage overall. Clinical significance unclear."
      },
      {
        letter: 'C',
        title: "Magnesium Biomarker Response",
        description: "Evidence from meta-analysis (1,105 magnesium vs 1,026 placebo, ages 17-85, median 47 years).[6] Increases circulating magnesium and urinary excretion. Dose- and time-dependent (197-994 mg/day, median 365 mg; 3 weeks-5 years, median 12 weeks). Inorganic forms more effective than organic. Steady-state at ~20 weeks (serum) and ~40 weeks (urine). Higher baseline status → smaller serum increase, greater urinary excretion."
      },
      {
        letter: 'D',
        title: "Vascular Function & Muscle Fitness",
        description: "Limited evidence for vascular benefits (FMD, PWV) overall, though some suggestion of benefit in unhealthy, overweight, or older individuals with longer durations (≥6 months).[7] Muscle fitness showed benefit in elderly/alcoholics but neutral effects in athletes and healthy adults. More research needed for these outcomes."
      }
    ],
    
    buyingGuideIntro: "When selecting magnesium supplements:",
    buyingGuideItems: [
      {
        icon: Pill,
        title: "Form selection",
        description: "Magnesium oxide is most studied in trials but has lower bioavailability and higher laxative effect. Magnesium citrate has better absorption and tolerability. Magnesium glycinate is highly bioavailable and gentle on stomach. Magnesium chloride is well-absorbed. Avoid magnesium sulfate (Epsom salt) for oral use. Inorganic forms (oxide, chloride) raise serum magnesium more effectively but may cause GI upset."
      },
      {
        icon: FlaskConical,
        title: "Dosage considerations",
        description: "Check elemental magnesium content (not total compound weight). For general health: 300-400 mg elemental magnesium daily. For blood pressure support: 300-368 mg/day. For glucose/metabolic support: 250-368 mg/day. For inflammation: 250 mg/day. Upper limit: 350 mg/day from supplements (plus dietary intake) to avoid diarrhea. Divide doses to improve tolerance."
      },
      {
        icon: Shield,
        title: "Timing and interactions",
        description: "Take with meals to reduce GI side effects. Space apart from calcium supplements (compete for absorption). Avoid taking with antibiotics (tetracyclines, quinolones), bisphosphonates, or proton pump inhibitors—space by 2-4 hours. May enhance effects of blood pressure medications—consult healthcare provider if taking antihypertensives."
      },
      {
        icon: Activity,
        title: "Quality & testing",
        description: "Choose products with third-party testing (USP, ConsumerLab, NSF) for purity and potency. Check for absence of fillers and allergens. Magnesium is stable but check expiration dates. Start with lower doses and gradually increase to assess tolerance. Monitor for GI symptoms (diarrhea). Lab testing (serum magnesium, RBC magnesium) can confirm deficiency but serum levels don't always reflect body stores."
      }
    ],
    
    references: [
      {
        authors: "Zhang, X., Li, Y., Del Gobbo, L.C., Rosanoff, A., Wang, J., et al.",
        year: "2016",
        title: "Effects of Magnesium Supplementation on Blood Pressure: A Meta-Analysis of Randomized Double-Blind Placebo-Controlled Trials",
        journal: "Hypertension",
        link: "https://doi.org/10.1161/HYPERTENSIONAHA.116.07664"
      },
      {
        authors: "Veronese, N., Watutantrige-Fernando, S., Luchini, C., Solmi, M., Sartore, G., et al.",
        year: "2016",
        title: "Effect of magnesium supplementation on glucose metabolism in people with or at risk of diabetes: a systematic review and meta-analysis of double-blind randomized controlled trials",
        journal: "European Journal of Clinical Nutrition",
        link: "https://doi.org/10.1038/ejcn.2016.154"
      },
      {
        authors: "Veronese, N., Pizzol, D., Smith, L., Dominguez, L., Barbagallo, M.",
        year: "2022",
        title: "Effect of Magnesium Supplementation on Inflammatory Parameters: A Meta-Analysis of Randomized Controlled Trials",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu14030679"
      },
      {
        authors: "Veronese, N., Dominguez, L.J., Pizzol, D., Demurtas, J., Smith, L., et al.",
        year: "2021",
        title: "Oral Magnesium Supplementation for Treating Glucose Metabolism Parameters in People with or at Risk of Diabetes: A Systematic Review and Meta-Analysis of Double-Blind Randomized Controlled Trials",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu13113074"
      },
      {
        authors: "Simental-Mendía, L.E., Sahebkar, A., Rodríguez-Morán, M., Guerrero-Romero, F.",
        year: "2016",
        title: "A systematic review and meta-analysis of randomized controlled trials on the effects of magnesium supplementation on insulin sensitivity and glucose control",
        journal: "Pharmacological Research",
        link: "https://doi.org/10.1016/j.phrs.2016.01.002"
      },
      {
        authors: "Simental-Mendía, L.E., Sahebkar, A., Rodríguez-Morán, M., Zambrano-Galván, G., Guerrero-Romero, F.",
        year: "2017",
        title: "Effect of Magnesium Supplementation on Plasma C-reactive Protein Concentrations: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
        journal: "Current Pharmaceutical Design",
        link: "https://doi.org/10.2174/1381612823666170525153605"
      },
      {
        authors: "Askari, M., Mozaffari, H., Jafari, A., Ghanbari, M., Darooghegi Mofrad, M.",
        year: "2020",
        title: "The effects of magnesium supplementation on obesity measures in adults: a systematic review and dose-response meta-analysis of randomized controlled trials",
        journal: "Critical Reviews in Food Science and Nutrition",
        link: "https://doi.org/10.1080/10408398.2020.1790498"
      },
      {
        authors: "Zhang, X., Del Gobbo, L.C., Hruby, A., Rosanoff, A., He, K., et al.",
        year: "2016",
        title: "The Circulating Concentration and 24-h Urine Excretion of Magnesium Dose- and Time-Dependently Respond to Oral Magnesium Supplementation in a Meta-Analysis of Randomized Controlled Trials",
        journal: "Journal of Nutrition",
        link: "https://doi.org/10.3945/jn.116.231571"
      },
      {
        authors: "Marques, B.C.A.A., Klein, M.R.S.T., da Cunha, M.R., et al.",
        year: "2019",
        title: "Effects of Oral Magnesium Supplementation on Vascular Function: A Systematic Review and Meta-analysis of Randomized Controlled Trials",
        journal: "High Blood Pressure & Cardiovascular Prevention",
        link: "https://doi.org/10.1007/s40292-019-00355-z"
      },
      {
        authors: "Wang, R., Chen, C., Liu, W., Zhou, T., Xun, P., et al.",
        year: "2017",
        title: "The effect of magnesium supplementation on muscle fitness: a meta-analysis and systematic review",
        journal: "Magnesium Research",
        link: "https://doi.org/10.1684/mrh.2017.0417"
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "For blood pressure: modest reductions (2 mmHg systolic, 1.78 mmHg diastolic) measurable via monitoring. For glucose control: lab tests showing reduced fasting glucose and HOMA-IR in those with diabetes/metabolic risk. For inflammation: reduced CRP levels (especially if baseline >3 mg/L). For biomarkers: increased serum magnesium (~0.04 mmol/L) and urinary excretion. Effects are subtle and accumulate over weeks to months. Greatest benefits seen in older adults and those with preexisting metabolic, inflammatory, or magnesium deficiency conditions.",
      outcomes: [
        {
          icon: Heart,
          iconLabel: "Blood Pressure",
          usage: "300-368mg",
          bestTime: "with food",
          resultsWeeks: "4-12",
          intensity: "Low to Moderate" as const
        },
        {
          icon: Activity,
          iconLabel: "Glucose Control",
          usage: "250-368mg",
          bestTime: "with food",
          resultsWeeks: "12-16+",
          intensity: "Moderate" as const
        },
        {
          icon: TrendingDown,
          iconLabel: "Inflammation",
          usage: "250mg",
          bestTime: "with food",
          resultsWeeks: "4-26",
          intensity: "Low to Moderate" as const
        },
        {
          icon: BarChart3,
          iconLabel: "Biomarker Response",
          usage: "300-400mg",
          bestTime: "with food",
          resultsWeeks: "20-40",
          intensity: "Moderate" as const
        }
      ]
    },
    
    furtherReading: [
      {
        title: "Magnesium - Health Professional Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
        source: "NIH Office of Dietary Supplements"
      },
      {
        title: "Magnesium: Benefits, Deficiency, Dosage, and More",
        url: "https://www.healthline.com/nutrition/magnesium-benefits",
        source: "Healthline.com"
      },
      {
        title: "Magnesium Research Analysis",
        url: "https://examine.com/supplements/magnesium/",
        source: "Examine.com"
      },
      {
        title: "Magnesium Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/magnesium-supplements-review/magnesium/",
        source: "ConsumerLab.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Magnesium', benefits, '/magnesium')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}