import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Zap, Activity, Brain, TrendingUp, Dumbbell, Heart,
  AlertCircle, Droplet, FlaskConical, Apple,
  Clock, CheckCircle2, Users
} from 'lucide-react';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';

export function CreatinePageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const benefits = ['muscle strength', 'exercise performance', 'muscle mass', 'cognitive function', 'power output'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Creatine",
    onNavigate,
    currentPage: "creatinev2",
    heroDescription: "Evidence-based overview of one of the most researched and effective supplements for improving exercise performance, muscle mass, and strength, with comprehensive meta-analytic evidence from 10 systematic reviews.",
    heroImageUrl: getSupplementImage('creatinev2'),
    
    overviewTitle: "What is Creatine?",
    overviewContent: (
      <>
        <p>
          Creatine is a <strong>compound made from amino acids</strong> (glycine, arginine, methionine), naturally found in human muscles and the brain. Dietary sources include meat and fish. It's one of the most researched and effective supplements for improving exercise performance, mainly by boosting energy availability during high-intensity exercise.
        </p>
        <p style={{ marginTop: 'var(--space-md)' }}>
          <strong>Meta-analytic evidence</strong> from 10 systematic reviews demonstrates favorable safety and efficacy outcomes across varied age groups (from 11 to 76 years) and health conditions. Studies included healthy adults, older populations, trained athletes, and patients with specific diseases including fibromyalgia, Parkinson's disease, schizophrenia, and muscle disorders.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Apple,
        title: "Creatine monohydrate",
        description: "Most researched and cheapest form—gold standard across all meta-analyses"
      },
      {
        icon: Activity,
        title: "Micronized creatine",
        description: "Dissolves more easily but no efficacy advantage"
      },
      {
        icon: FlaskConical,
        title: "Other marketed forms",
        description: "Buffered, ethyl ester, etc.; no advantage over monohydrate in clinical trials"
      }
    ],
    additionalOverviewContent: (
      <p>
        Creatine raises muscle phosphocreatine stores, allowing rapid ATP energy regeneration during intense activity. It supports muscle recovery, cell hydration, and increases in protein synthesis. Meta-analyses confirm that cognitive effects appear linked to supporting energy metabolism in brain tissue, with <strong>age-dependent benefits</strong> most pronounced in older adults (66-76 years) for memory performance.
      </p>
    ),
    
    benefits: [
      {
        icon: Dumbbell,
        title: "Strength & Power (Grade A)",
        description: "Meta-analyses of 53+ RCTs show consistent increases in strength, power output, and high-intensity exercise performance across all age groups"
      },
      {
        icon: TrendingUp,
        title: "Muscle Mass in Older Adults (Grade A)",
        description: "22 RCTs in adults aged 57-70 years (n=721) demonstrate significant increases in lean mass and chest/leg press strength"
      },
      {
        icon: Users,
        title: "Muscle Disorders (Grade A)",
        description: "13 RCTs (n=303) show improved muscle strength and activities of daily living in muscular dystrophies and inflammatory myopathies"
      },
      {
        icon: Brain,
        title: "Memory in Older Adults (Grade B)",
        description: "Memory benefits statistically significant in adults 66-76 years; little to no effect in younger populations (11-31 years)"
      },
      {
        icon: Zap,
        title: "Exercise Recovery (Grade B)",
        description: "23 studies show chronic creatine use increases muscle recovery markers and reduces delayed onset muscle soreness"
      },
      {
        icon: Brain,
        title: "Attention & Processing Speed (Grade C)",
        description: "Benefits on attention and processing speed reported, with greater effects in diseased populations vs. healthy individuals"
      },
      {
        icon: Shield,
        title: "Cognitive Benefits in Disease (Grade C)",
        description: "Greater cognitive benefit observed in diseased populations; attention improved in ill patients but not healthy controls"
      }
    ],
    
    drawbacksIntro: "Very safe across 29 safety studies, but note:",
    drawbacks: [
      {
        icon: Droplet,
        title: "Water Weight Gain",
        description: "Meta-analysis confirms mean weight increase of 1.24-1.37 kg (2.7-3 lbs), primarily from intracellular water and muscle mass"
      },
      {
        icon: AlertCircle,
        title: "Gastrointestinal Effects",
        description: "Risk ratio of 1.09 for GI complaints (not statistically significant); high doses on empty stomach may cause mild discomfort"
      },
      {
        icon: Activity,
        title: "Muscle Pain (Specific Condition)",
        description: "One trial found increased muscle pain in glycogenosis V patients at high doses; no effect in other muscle disorders"
      },
      {
        icon: Shield,
        title: "Overall Safety Profile",
        description: "Risk ratio 1.24 for all adverse events (not statistically significant); no severe adverse events reported across studies"
      },
      {
        icon: Activity,
        title: "Kidney & Liver Function",
        description: "Safety meta-analysis of renal and hepatic function found no significant adverse effects in healthy individuals or diseased populations"
      },
      {
        icon: Pill,
        title: "Hair Loss Concerns",
        description: "One older study suggested increased DHT; limited follow-up in meta-analyses, but remains a theoretical concern for some"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Strength & Power",
        description: "Extensive meta-analytic evidence (53 RCTs, n=1,138 participants) showing consistent improvements.[1] Lanhers et al. (2016)[1] found significant effects on upper limb strength with 70% of trials rated >50% quality on CONSORT criteria."
      },
      {
        letter: 'A',
        title: "Muscle Mass",
        subtitle: "Population: Older Adults",
        description: "Strong meta-analytic evidence (22 RCTs, n=721) in adults aged 57-70.[2] Chilibeck et al. (2017)[2] demonstrated significant increases in lean mass and leg/chest press strength over 7-52 weeks."
      },
      {
        letter: 'A',
        title: "Muscle Disorders",
        description: "High-quality evidence (13 RCTs, n=303) showing improvements in muscular dystrophies and inflammatory myopathies.[3] Kley et al. (2010)[3] found benefits for strength and activities of daily living, though not in metabolic myopathies."
      },
      {
        letter: 'B',
        title: "Memory (Age-Dependent)",
        subtitle: "Population: Older Adults",
        description: "Moderate GRADE evidence from multiple meta-analyses.[4][5][6] Memory benefits statistically significant in older adults (66-76 years) but not younger populations (11-31 years). Prokopidis et al. (2022, 2023)[4][5] and Xu et al. (2024)[6] analyzed 10 RCTs with Cochrane Risk of Bias 2.0 showing low-to-moderate risk."
      },
      {
        letter: 'B',
        title: "Exercise Recovery",
        description: "Good evidence (23 studies, n=469, PEDro quality rating fair-to-excellent).[7] Doma et al. (2022)[7] found acute reduction but chronic increase in muscle damage markers and reduced DOMS."
      },
      {
        letter: 'C',
        title: "Attention & Processing Speed",
        description: "Preliminary evidence (low GRADE rating).[6] Xu et al. (2024)[6] reported improvements in adults aged 18-60, with greater effects compared to those over 60. Benefits more pronounced in diseased vs. healthy populations."
      },
      {
        letter: 'D',
        title: "Endurance Performance",
        description: "Limited evidence.[8] Fernández-Landa et al. (2023)[8] meta-analysis of 13 studies in trained populations found no significant effect on endurance performance."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Increased muscle strength and mass, improved high-intensity exercise performance, faster recovery between sets. Older adults (66-76): expect significant memory improvements and muscle/strength gains. Younger adults: expect muscle and strength benefits but minimal to no cognitive effects. Expect 1.24-1.37 kg weight gain (mostly water/muscle). Performance benefits appear within 1-2 weeks with loading, 3-4 weeks without. Memory benefits in older adults observed with dosing from 5 days to 24 weeks. Minimal adverse events overall—low risk of GI discomfort. Renal and hepatic function remain normal in healthy individuals.",
      outcomes: [
        {
          icon: Activity,
          iconLabel: "Muscle Strength",
          usage: "3-5g or 15-30g loading",
          bestTime: "Anytime",
          resultsWeeks: "1-4",
          intensity: "High" as const
        },
        {
          icon: Brain,
          iconLabel: "Memory (Older Adults)",
          usage: "5-20g",
          bestTime: "Anytime",
          resultsWeeks: "1-24",
          intensity: "Moderate" as const
        },
        {
          icon: Zap,
          iconLabel: "High-Intensity Performance",
          usage: "3-5g",
          bestTime: "Pre/Post workout",
          resultsWeeks: "1-4",
          intensity: "High" as const
        }
      ]
    },
    
    buyingGuideIntro: "When shopping for creatine (based on clinical evidence):",
    buyingGuideItems: [
      {
        icon: Apple,
        title: "Form",
        description: "Creatine monohydrate is the gold standard—all 10 meta-analyses used monohydrate. Micronized versions dissolve better but show no efficacy advantage in trials."
      },
      {
        icon: Shield,
        title: "Purity & Testing",
        description: "Look for Creapure® or third-party tested brands. Safety meta-analyses included studies with standardized creatine monohydrate preparations showing consistent purity."
      },
      {
        icon: FlaskConical,
        title: "Dose Range",
        description: "Studies used 2.2-30g/day. Standard maintenance of 3-5g/day is supported by evidence. Loading (20g/day for 5-7 days) speeds saturation but isn't required for long-term benefits."
      },
      {
        icon: CheckCircle2,
        title: "Value & Cost",
        description: "No added benefit from expensive forms. Meta-analyses found no advantage for buffered, ethyl ester, or other marketed variants over basic monohydrate. A year's supply should cost under $30."
      },
      {
        icon: Users,
        title: "Population Considerations",
        description: "Older adults (65+): evidence strongest for both cognitive and physical benefits. Younger adults: focus on muscle/strength outcomes. Muscle disorder patients: consult physician, but evidence supports use in dystrophies and inflammatory myopathies."
      },
      {
        icon: FileText,
        title: "Evidence-Based Duration",
        description: "Most studies showing benefits used 3 weeks to 12 months of continuous supplementation. No evidence suggests cycling is necessary; consistent daily use appears safe and effective long-term."
      }
    ],
    
    references: [
      {
        authors: "Xu, C., Bi, S., Zhang, W., Luo, L.",
        year: "2024",
        title: "The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis",
        journal: "Frontiers in Nutrition",
        link: "https://doi.org/10.3389/fnut.2024.xxxxx"
      },
      {
        authors: "Prokopidis, K., Giannos, P., Triantafyllidis, K., Kechagias, K., Forbes, S.C., Candow, D.G.",
        year: "2023",
        title: "Effects of creatine supplementation on memory in healthy individuals: a systematic review and meta-analysis of randomized controlled trials",
        journal: "Nutrition Reviews",
        link: "https://doi.org/10.1093/nutrit/nuac064"
      },
      {
        authors: "Doma, K., Ramachandran, A., Boullosa, D., Connor, J.",
        year: "2022",
        title: "The Paradoxical Effect of Creatine Monohydrate on Muscle Damage Markers: A Systematic Review and Meta-Analysis",
        journal: "Sports Medicine",
        link: "https://doi.org/10.1007/s40279-022-01672-5"
      },
      {
        authors: "de Guingand, D.D., Palmer, K., Snow, R., Davies-Tuck, M., Ellery, S.",
        year: "2020",
        title: "Risk of Adverse Outcomes in Females Taking Oral Creatine Monohydrate: A Systematic Review and Meta-Analysis",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu12061780"
      },
      {
        authors: "Chilibeck, P., Kaviani, M., Candow, D., Zello, G.",
        year: "2017",
        title: "Effect of creatine supplementation during resistance training on lean tissue mass and muscular strength in older adults: a meta-analysis",
        journal: "Open Access Journal of Sports Medicine",
        link: "https://doi.org/10.2147/OAJSM.S123529"
      },
      {
        authors: "Lanhers, C., Pereira, B., Naughton, G., Trousselard, M., Lesage, F., Dutheil, F.",
        year: "2016",
        title: "Creatine Supplementation and Upper Limb Strength Performance: A Systematic Review and Meta-Analysis",
        journal: "Sports Medicine",
        link: "https://doi.org/10.1007/s40279-016-0571-4"
      },
      {
        authors: "Fernández-Landa, J., Santibañez-Gutierrez, A., Todorović, N., Štajer, V., Ostojić, S.",
        year: "2023",
        title: "Effects of Creatine Monohydrate on Endurance Performance in a Trained Population: A Systematic Review and Meta-analysis",
        journal: "Sports Medicine",
        link: "https://doi.org/10.1007/s40279-023-01825-x"
      },
      {
        authors: "Kley, R., Tarnopolsky, M., Vorgerd, M.",
        year: "2010",
        title: "Creatine for treating muscle disorders: meta-analysis of randomised controlled trials",
        journal: "Neuromuscular Disorders",
        link: "https://doi.org/10.1016/j.nmd.2010.06.005"
      },
      {
        authors: "Prokopidis, K., Giannos, P., Triantafyllidis, K., Kechagias, K.",
        year: "2022",
        title: "Effectiveness of creatine supplementation on memory in healthy individuals: a systematic review and meta-analysis",
        journal: "Age and Ageing",
        link: "https://doi.org/10.1093/ageing/afac064"
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Loading phase (20g/day for 5-7 days) produces faster results but isn't necessary—maintenance dose (3-5g/day) works within 3-4 weeks. Effects consistent across age groups. Water weight gain (1-2kg) normal. Can be taken with or without food. Muscle mass benefits particularly strong in older adults (57-70 years). Consult healthcare provider if kidney concerns.",
      outcomes: [
        {
          icon: Zap,
          iconLabel: "Strength & Power",
          usage: "3-5g",
          bestTime: "Anytime",
          resultsWeeks: "1-4",
          intensity: "High" as const
        },
        {
          icon: Dumbbell,
          iconLabel: "Muscle Mass (Older Adults)",
          usage: "3-5g",
          bestTime: "Anytime",
          resultsWeeks: "4-12",
          intensity: "High" as const
        },
        {
          icon: Brain,
          iconLabel: "Memory (Age 66-76)",
          usage: "5g",
          bestTime: "Anytime",
          resultsWeeks: "4-12",
          intensity: "Moderate" as const
        },
        {
          icon: Activity,
          iconLabel: "Exercise Recovery",
          usage: "3-5g",
          bestTime: "Anytime",
          resultsWeeks: "2-4",
          intensity: "Moderate" as const
        }
      ]
    },
    
    furtherReading: [
      {
        title: "Creatine: What It Is, What It Does, and Its Side Effects",
        url: "https://www.healthline.com/nutrition/what-is-creatine",
        source: "Healthline.com"
      },
      {
        title: "Creatine Research Analysis",
        url: "https://examine.com/supplements/creatine/",
        source: "Examine.com"
      },
      {
        title: "Creatine Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/creatine-supplements/creatine/",
        source: "ConsumerLab.com"
      },
      {
        title: "Dr. Rhonda Patrick on Creatine",
        url: "https://www.foundmyfitness.com/topics/creatine",
        source: "FoundMyFitness.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Creatine', benefits)} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}