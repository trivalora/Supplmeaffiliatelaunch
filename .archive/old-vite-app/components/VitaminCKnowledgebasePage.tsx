'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Activity, AlertCircle, Apple, Brain, CheckCircle2, Clock, Droplet, FlaskConical, Heart, Pill, Shield, Users, Zap
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '@/lib/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function VitaminCKnowledgebasePage({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('vitamincv2');
  const benefits = ['immune support', 'antioxidant protection', 'collagen synthesis', 'iron absorption', 'skin health'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Vitamin C",
    currentPage: "vitamincv2",
    heroDescription: "Evidence-based overview of an essential antioxidant vitamin with meta-analytic support for immune function, cardiovascular health, and critical illness outcomes.",
    heroImageUrl: getSupplementImage('vitamincv2'),
    
    overviewTitle: "What is Vitamin C?",
    overviewContent: (
      <p>
        Vitamin C (ascorbic acid) is an <span className="font-medium">essential water-soluble vitamin</span> that acts as a powerful antioxidant and plays crucial roles in immune function, collagen synthesis, and iron absorption. Unlike most animals, humans cannot synthesize vitamin C and must obtain it through diet or supplementation.
      </p>
    ),
    dietarySources: [
      {
        icon: Droplet,
        title: "Citrus fruits",
        description: "Oranges, lemons, grapefruits, and limes"
      },
      {
        icon: Activity,
        title: "Vegetables",
        description: "Bell peppers, broccoli, Brussels sprouts, kale, tomatoes"
      },
      {
        icon: FlaskConical,
        title: "Supplements",
        description: "Oral tablets/capsules or intravenous (IV) for clinical use"
      }
    ],
    additionalOverviewContent: (
      <p>
        Meta-analytic evidence supports vitamin C's role in reducing common cold duration (though not incidence in general populations), improving outcomes in critically ill patients, and supporting cardiovascular health through blood pressure reduction and endothelial function improvements. High-dose intravenous vitamin C shows promise in critical care settings, while oral supplementation provides immune support and antioxidant protection.
      </p>
    ),
    
    benefits: [
      {
        icon: Zap,
        title: "Immune Support",
        description: "Enhances immune function and reduces common cold duration"
      },
      {
        icon: Heart,
        title: "Cardiovascular & Endothelial Function",
        description: "Significant improvements in endothelial function (SMD 0.50 overall, 0.84 in atherosclerosis) and blood pressure reduction in type 2 diabetes"
      },
      {
        icon: Shield,
        title: "Critical Illness Outcomes",
        description: "Intravenous vitamin C associated with reduced hospital mortality (OR 0.81) and shorter ICU stays in critically ill patients"
      },
      {
        icon: Zap,
        title: "Metabolic Health",
        description: "Modest improvements in glycemic control (HbA1c -0.54%) and lipid profiles in adults with type 2 diabetes"
      },
      {
        icon: Apple,
        title: "Skin Health",
        description: "Supports collagen synthesis and skin health"
      }
    ],
    
    drawbacksIntro: "Generally safe with no age-specific safety concerns, but note:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Digestive Upset",
        description: "High doses (>2000mg) may cause diarrhea, nausea, or abdominal cramps in some individuals"
      },
      {
        icon: FlaskConical,
        title: "Limited Prevention Benefit",
        description: "Only 3-4% reduction in common cold incidence in general population; not recommended for routine cold prevention except in physically stressed individuals"
      },
      {
        icon: Activity,
        title: "Kidney Stone Risk",
        description: "Very high chronic doses (>1000mg daily) may increase oxalate excretion and kidney stone risk in susceptible individuals"
      },
      {
        icon: Droplet,
        title: "Condition-Specific Benefits",
        description: "Cardiovascular and metabolic benefits most pronounced in high-risk populations rather than healthy adults"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Common Cold Duration",
        subtitle: "Population: Children",
        description: "Strong consistent evidence showing 13-14% reduction in cold duration in children across multiple large meta-analyses.[1][2][3] Three Cochrane reviews[1][2][3] (Hemilä & Chalker 2013, Douglas et al. 2007, Hemilä et al. 2004) with large sample sizes show consistent benefits. Effect is dose-dependent and greater in children than adults (8% reduction)."
      },
      {
        letter: 'B',
        title: "Endothelial Function & Cardiovascular Health",
        description: "Good evidence for cardiovascular benefits, especially in high-risk populations.[4][5] Meta-analysis[4] (Ashor et al. 2014) shows improved endothelial function, with greater effects in atherosclerosis patients. Type 2 diabetes meta-analysis[5] shows systolic BP reduction of 6.27 mmHg and diastolic reduction of 3.77 mmHg."
      },
      {
        letter: 'B',
        title: "Critical Illness Mortality & ICU Outcomes",
        description: "Good evidence from multiple meta-analyses of intravenous vitamin C in critically ill patients.[6] Hospital mortality reduced and ICU stay decreased by 0.76 days. High-dose regimens show stronger effects. No increase in adverse events, acute kidney injury, or need for renal replacement therapy."
      },
      {
        letter: 'C',
        title: "Common Cold Prevention (General Population)",
        description: "Limited benefit for routine cold prevention in general population.[1][2][3] Incidence reduction only 3-4% across three Cochrane reviews. However, substantially more effective in physically active individuals under stress (marathon runners, soldiers, skiers). Not recommended for general prophylaxis."
      },
      {
        letter: 'C',
        title: "Glycemic Control in Type 2 Diabetes",
        description: "Promising but limited evidence for metabolic benefits.[7] Meta-analysis[7] (Mason et al. 2021) shows HbA1c reduction of 0.54% and triglyceride reduction, but certainty rated as very low due to short study durations (2 weeks to <6 months) and small sample sizes. Long-term effects unclear."
      }
    ],
    
    buyingGuideIntro: "When selecting vitamin C supplements:",
    buyingGuideItems: [
      {
        icon: FlaskConical,
        title: "Form selection",
        description: "Ascorbic acid is effective and most economical. Buffered forms (calcium ascorbate, sodium ascorbate) may be gentler on stomach. Liposomal vitamin C claims better absorption but evidence is mixed and cost is higher."
      },
      {
        icon: Pill,
        title: "Dosage considerations",
        description: "Check elemental vitamin C content. For immune support during colds: 1-2g daily in divided doses. For general health: 200-500mg daily. Avoid megadoses (>2000mg) unless supervised, as excess is excreted and may cause GI upset."
      },
      {
        icon: Shield,
        title: "Quality & testing",
        description: "Choose products with third-party testing (USP, ConsumerLab) to verify potency and purity. Vitamin C is relatively stable but check expiration dates."
      },
      {
        icon: CheckCircle2,
        title: "Whole food sources",
        description: "Dietary sources (citrus fruits, bell peppers, broccoli) provide vitamin C with additional beneficial phytonutrients. One medium orange provides ~70mg. Supplements are useful for therapeutic doses or when dietary intake is inadequate."
      }
    ],
    
    references: [
      {
        authors: "Hemilä, H., Chalker, E.",
        year: "2013",
        title: "Vitamin C for preventing and treating the common cold",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD000980.pub4"
      },
      {
        authors: "Ashor, A.W., Lara, J., Mathers, J.C., Siervo, M.",
        year: "2014",
        title: "Effect of vitamin C on endothelial function in health and disease: a systematic review and meta-analysis of randomised controlled trials",
        journal: "Atherosclerosis",
        link: "https://doi.org/10.1016/j.atherosclerosis.2014.04.004"
      },
      {
        authors: "Mason, S.A., Keske, M.A., Wadley, G.D.",
        year: "2021",
        title: "Effects of Vitamin C Supplementation on Glycemic Control and Cardiovascular Risk Factors in People With Type 2 Diabetes: A GRADE-Assessed Systematic Review and Meta-analysis of Randomized Controlled Trials",
        journal: "Diabetes Care",
        link: "https://doi.org/10.2337/dc20-1893"
      },
      {
        authors: "Douglas, R.M., Hemilä, H., Chalker, E., Treacy, B.",
        year: "2007",
        title: "Vitamin C for preventing and treating the common cold",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD000980.pub3"
      },
      {
        authors: "Shrestha, D.B., Budhathoki, P., Sedhai, Y.R., Mandal, S.K., et al.",
        year: "2021",
        title: "Vitamin C in Critically Ill Patients: An Updated Systematic Review and Meta-Analysis",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu13093564"
      },
      {
        authors: "Patel, J.J., Ortiz-Reyes, A., Dhaliwal, R., et al.",
        year: "2021",
        title: "IV Vitamin C in Critically Ill Patients: A Systematic Review and Meta-Analysis",
        journal: "Critical Care Medicine",
        link: "https://doi.org/10.1097/CCM.0000000000005045"
      },
      {
        authors: "Sharma, Y., Sumanadasa, S., Shahi, R., et al.",
        year: "2024",
        title: "Efficacy and safety of vitamin C supplementation in the treatment of community-acquired pneumonia: a systematic review and meta-analysis with trial sequential analysis",
        journal: "Scientific Reports",
        link: "https://doi.org/10.1038/s41598-024-51862-x"
      },
      {
        authors: "Ashor, A.W., Siervo, M., van der Velde, F., et al.",
        year: "2016",
        title: "Systematic review and meta-analysis of randomised controlled trials testing the effects of vitamin C supplementation on blood lipids",
        journal: "Clinical Nutrition",
        link: "https://doi.org/10.1016/j.clnu.2016.03.008"
      },
      {
        authors: "Hemilä, H., Chalker, E., Treacy, B., Douglas, B.",
        year: "2004",
        title: "Vitamin C for preventing and treating the common cold",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD000980.pub2"
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Common cold duration reduced by 8% in adults and 13-14% in children when taken regularly. Physically active individuals under stress show greater cold prevention benefits. Endothelial function improvements and blood pressure reductions (systolic -6.27 mmHg, diastolic -3.77 mmHg) observed in high-risk cardiovascular populations within 2 weeks to 6 months. Critically ill patients receiving IV vitamin C show reduced mortality and shorter ICU stays. No age-specific safety concerns; adverse events generally mild (GI upset at high doses). Not recommended for routine cold prevention in general population (only 3-4% incidence reduction). Individual responses vary based on baseline vitamin C status, age group, and health condition.",
      outcomes: [
        {
          icon: Shield,
          iconLabel: "Immune Support",
          usage: "1-2g",
          bestTime: "Morning or Evening",
          resultsWeeks: "Ongoing",
          intensity: "Moderate" as const
        },
        {
          icon: Heart,
          iconLabel: "Cardiovascular",
          usage: "500mg-2g",
          bestTime: "with food",
          resultsWeeks: "2-24",
          intensity: "Moderate" as const
        },
        {
          icon: Activity,
          iconLabel: "Exercise Recovery",
          usage: "200mg-1g",
          bestTime: "Post-workout",
          resultsWeeks: "Immediate-ongoing",
          intensity: "Moderate" as const
        },
        {
          icon: Zap,
          iconLabel: "Metabolic Health",
          usage: "500mg-2g",
          bestTime: "with food",
          resultsWeeks: "2-24",
          intensity: "Low to Moderate" as const
        }
      ]
    },
    
    furtherReading: [
      {
        title: "Vitamin C - Health Professional Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/",
        source: "NIH Office of Dietary Supplements"
      },
      {
        title: "Vitamin C: Benefits, Deficiency, and Food Sources",
        url: "https://www.healthline.com/nutrition/vitamin-c-benefits",
        source: "Healthline.com"
      },
      {
        title: "Vitamin C Research Analysis",
        url: "https://examine.com/supplements/vitamin-c/",
        source: "Examine.com"
      },
      {
        title: "Vitamin C Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/vitamin-c-supplements-review/vitamin-c/",
        source: "ConsumerLab.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Vitamin C', benefits, '/vitamin-c')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}