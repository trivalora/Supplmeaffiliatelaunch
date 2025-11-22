import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Activity, AlertCircle, Apple, Brain, CheckCircle2, Droplet, Flame, FlaskConical, Heart, Leaf, Shield, Users
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function SulforaphanePageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const benefits = ['antioxidant support', 'detoxification', 'inflammation reduction', 'neuroprotection', 'cellular health'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Sulforaphane",
    onNavigate,
    currentPage: "sulforaphanev2",
    heroDescription: "Evidence-based overview of a powerful phytochemical from cruciferous vegetables, with meta-analytic support for autism spectrum disorder symptoms and cardiovascular health.",
    heroImageUrl: getSupplementImage('sulforaphanev2'),
    
    overviewTitle: "What is Sulforaphane?",
    overviewContent: (
      <>
        <p>
          Sulforaphane is a <span className="font-medium">sulfur-containing compound</span> formed when the enzyme myrosinase transforms glucoraphanin found in cruciferous vegetables. It's most abundant in broccoli sprouts, containing 10-100 times more than mature broccoli.
        </p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>
          Sulforaphane activates the Nrf2 pathway, a master regulator of antioxidant and detoxification enzymes.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Leaf,
        title: "Broccoli sprouts",
        description: "Highest concentration; 10-100x more than mature broccoli"
      },
      {
        icon: Activity,
        title: "Cruciferous vegetables",
        description: "Broccoli, Brussels sprouts, cabbage, kale, cauliflower"
      },
      {
        icon: FlaskConical,
        title: "Supplements",
        description: "Broccoli sprout extract or glucoraphanin + myrosinase combinations"
      }
    ],
    additionalOverviewContent: (
      <p>
        Meta-analytic evidence demonstrates notable benefits for autism spectrum disorder symptoms and cardiovascular risk markers, with emerging evidence for metabolic and cancer-related outcomes. The compound's mechanism centers on Nrf2 activation, driving cellular antioxidant and detoxification responses that may underlie its diverse health effects.
      </p>
    ),
    
    benefits: [
      {
        icon: Brain,
        title: "Autism Spectrum Disorder Symptoms",
        description: "Meta-analytic evidence shows modest improvements in total symptoms, aberrant behavior, hyperactivity, and social interaction"
      },
      {
        icon: Heart,
        title: "Blood Pressure Reduction",
        description: "Significant reductions in systolic (10.9 mmHg) and diastolic (6.95 mmHg) blood pressure in adults with cardiometabolic syndrome"
      },
      {
        icon: Shield,
        title: "Antioxidant & Detoxification",
        description: "Activates Nrf2 pathway, boosting the body's own antioxidant and detox enzyme production"
      },
      {
        icon: Flame,
        title: "Metabolic Health",
        description: "Promising effects on blood sugar control and inflammation markers in cardiometabolic conditions"
      },
      {
        icon: Apple,
        title: "Neuroprotection",
        description: "Preclinical evidence suggests protective effects on brain cells from oxidative damage"
      }
    ],
    
    drawbacksIntro: "Generally well-tolerated with no serious safety concerns reported in meta-analyses, but note:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Digestive Upset",
        description: "High doses may cause gas, bloating, or nausea in some individuals"
      },
      {
        icon: Activity,
        title: "Thyroid Considerations",
        description: "Very high intake of raw cruciferous vegetables may affect thyroid function in susceptible individuals; typical supplement doses appear safe"
      },
      {
        icon: Shield,
        title: "Age-Specific Data Limited",
        description: "Most ASD studies did not specify age ranges; cardiovascular studies focused on middle-aged adults (46-58 years)"
      },
      {
        icon: Users,
        title: "Individual Variability",
        description: "Response to sulforaphane varies by individual; not everyone may experience the same benefits"
      }
    ],
    
    researchGrades: [
      {
        letter: 'B',
        title: "Autism Spectrum Disorder",
        description: "Good evidence from meta-analyses showing modest but consistent improvements.[1] Total symptoms, aberrant behavior, hyperactivity, and social interaction all showed statistically significant benefits. Six randomized controlled trials included. Adverse events were similar between sulforaphane and control groups."
      },
      {
        letter: 'B',
        title: "Blood Pressure & Cardiovascular",
        description: "Good evidence for meaningful blood pressure reductions in adults with cardiometabolic syndrome.[2] Meta-analysis[2] of 10 trials (579 participants) showed systolic BP reduction of 10.9 mmHg and diastolic reduction of 6.95 mmHg. Studies used broccoli sprouts providing 112-225 µmol sulforaphane daily for 1-12 weeks."
      },
      {
        letter: 'B',
        title: "Antioxidant Activation",
        description: "Good evidence showing activation of Nrf2 pathway and increased antioxidant enzyme expression in humans.[3] This mechanism underlies many protective effects against oxidative stress and cellular damage."
      },
      {
        letter: 'C',
        title: "Cancer Prevention",
        description: "Strong mechanistic rationale and animal data, but human clinical evidence remains limited and ongoing.[4] More long-term studies needed to establish preventive benefits."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "For cardiovascular benefits: measurable blood pressure reductions (systolic ~11 mmHg, diastolic ~7 mmHg in middle-aged adults). For ASD: improvements in aberrant behavior, hyperactivity, and social interaction. Most benefits are internal (cellular protection) and may not produce immediately noticeable effects. This is primarily a long-term preventive and supportive strategy. Blood pressure benefits observed within 1-12 weeks in cardiometabolic syndrome studies. Autism spectrum disorder improvements may take several weeks of consistent use. Nrf2 activation occurs within hours to days, but clinical benefits manifest over weeks to months.",
      outcomes: [
        {
          icon: Heart,
          iconLabel: "Blood Pressure",
          usage: "112-225 µmol",
          bestTime: "with food",
          resultsWeeks: "1-12",
          intensity: "Moderate to High" as const
        },
        {
          icon: Brain,
          iconLabel: "ASD Symptoms",
          usage: "not reported",
          bestTime: "Anytime",
          resultsWeeks: "4-12",
          intensity: "Low to Moderate" as const
        },
        {
          icon: Shield,
          iconLabel: "Antioxidant Activity",
          usage: "10-30mg",
          bestTime: "with food",
          resultsWeeks: "1-4",
          intensity: "Moderate" as const
        },
        {
          icon: Flame,
          iconLabel: "Metabolic Markers",
          usage: "112-225 µmol",
          bestTime: "with food",
          resultsWeeks: "4-12",
          intensity: "Moderate" as const
        }
      ]
    },
    
    buyingGuideIntro: "When selecting sulforaphane supplements:",
    buyingGuideItems: [
      {
        icon: FlaskConical,
        title: "Active form",
        description: "Look for stabilized sulforaphane or glucoraphanin + myrosinase combination. Meta-analyses used broccoli sprout preparations in various forms (powder, capsules, fresh/dried)."
      },
      {
        icon: Shield,
        title: "Dosage clarity",
        description: "Check for actual sulforaphane content (mg) or sulforaphane yield (µmol), not just broccoli extract weight. Studies showing benefits used 112-225 µmol or equivalent to 5-10g broccoli sprouts daily."
      },
      {
        icon: Shield,
        title: "Quality & testing",
        description: "Choose reputable brands with third-party testing to ensure sulforaphane content and purity. Stability varies by formulation."
      },
      {
        icon: CheckCircle2,
        title: "Whole food option",
        description: "Fresh or frozen broccoli sprouts are a potent, cost-effective source used in many studies. 1-2 oz (30-60g) daily provides substantial sulforaphane comparable to supplement doses."
      }
    ],
    
    references: [
      {
        authors: "Wang, R., Ren, Z., Li, Y.",
        year: "2025",
        title: "The effect of sulforaphane on autism spectrum disorder: systematic review and meta-analysis",
        journal: "EXCLI Journal: Experimental and Clinical Sciences",
        link: "https://doi.org/10.17179/excli2024-7892"
      },
      {
        authors: "Guo, J., Wang, Y., He, W., Lou, M., Peng, Y.",
        year: "2025",
        title: "Effects of sulforaphane on ABC and SRS scales in patients with autism spectrum disorder: a meta-analysis",
        journal: "Brain & Development",
        link: "https://doi.org/10.1016/j.braindev.2024.12.003"
      },
      {
        authors: "Houshialsadat, Z., Mirmiran, P., Zare-Javid, A., Bahadoran, Z., Houghton, C.",
        year: "2022",
        title: "Beneficial Effects of Sulforaphane-Yielding Broccoli Sprout on Cardiometabolic Health: A Systematic Review and Meta-Analysis",
        journal: "Jundishapur Journal of Natural Pharmaceutical Products",
        link: "https://doi.org/10.5812/jjnpp-130289"
      },
      {
        authors: "Fahey, J.W., Talalay, P.",
        year: "1999",
        title: "Antioxidant functions of sulforaphane: a potent inducer of Phase II detoxication enzymes",
        journal: "Food and Chemical Toxicology",
        link: "https://doi.org/10.1016/S0278-6915(99)00082-4"
      },
      {
        authors: "Yagishita, Y., Fahey, J.W., Dinkova-Kostova, A.T., Kensler, T.W.",
        year: "2019",
        title: "Broccoli or Sulforaphane: Is It the Source or Dose That Matters?",
        journal: "Molecules",
        link: "https://doi.org/10.3390/molecules24193593"
      }
    ],
    
    furtherReading: [
      {
        title: "Sulforaphane: Benefits, Side Effects, and Food Sources",
        url: "https://www.healthline.com/nutrition/sulforaphane",
        source: "Healthline.com"
      },
      {
        title: "Sulforaphane Research Analysis",
        url: "https://examine.com/supplements/sulforaphane/",
        source: "Examine.com"
      },
      {
        title: "Dr. Rhonda Patrick on Sulforaphane",
        url: "https://www.foundmyfitness.com/topics/sulforaphane",
        source: "FoundMyFitness.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Sulforaphane', benefits, '/sulforaphane')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}