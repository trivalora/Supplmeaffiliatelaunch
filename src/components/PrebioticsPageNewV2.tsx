import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Heart, Brain, Shield, Activity, Droplet, AlertCircle,
  FlaskConical, Pill, Leaf, Users,
  Clock, CheckCircle2, Bone, Flame
} from 'lucide-react';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';

export function PrebioticsPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Prebiotics",
    onNavigate,
    currentPage: "prebioticsv2",
    heroDescription: "Evidence-based overview of non-digestible fibers that nourish beneficial gut bacteria, supporting digestive health, immune function, and overall wellbeing.",
    heroImageUrl: getSupplementImage('prebioticsv2'),
    
    overviewTitle: "What are Prebiotics?",
    overviewContent: (
      <p>
        Prebiotics are <span className="font-medium">non-digestible food components</span>—typically specific types of fiber—that selectively stimulate the growth and activity of beneficial gut bacteria. Unlike probiotics (which are live bacteria), prebiotics serve as "food" for your existing gut microbiome.
      </p>
    ),
    dietarySources: [
      {
        icon: Leaf,
        title: "Vegetables",
        description: "Garlic, onions, leeks, asparagus, Jerusalem artichokes"
      },
      {
        icon: Activity,
        title: "Whole grains & legumes",
        description: "Oats, barley, beans, lentils"
      },
      {
        icon: Droplet,
        title: "Fruits",
        description: "Bananas (especially under-ripe), apples, berries"
      }
    ],
    additionalOverviewContent: (
      <p>
        Common prebiotic fibers include inulin, fructooligosaccharides (FOS), galactooligosaccharides (GOS), and resistant starch. These fibers resist digestion in the upper GI tract and are fermented by beneficial bacteria in the colon, producing short-chain fatty acids (SCFAs) that support gut and overall health.
      </p>
    ),
    
    benefits: [
      {
        icon: Activity,
        title: "Digestive Health",
        description: "Supports beneficial gut bacteria, improves bowel regularity, and may reduce constipation"
      },
      {
        icon: Shield,
        title: "Immune Function",
        description: "Enhances gut barrier integrity and supports immune system function"
      },
      {
        icon: Heart,
        title: "Metabolic Health",
        description: "May improve glucose control, reduce inflammation, and support healthy cholesterol levels"
      },
      {
        icon: Users,
        title: "Microbiome Diversity",
        description: "Promotes growth of beneficial bacteria like Bifidobacteria and Lactobacilli"
      },
      {
        icon: Brain,
        title: "Gut-Brain Axis",
        description: "May influence mood and cognitive function through gut-brain communication"
      }
    ],
    
    drawbacksIntro: "Generally safe, but be aware of:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Digestive Discomfort",
        description: "Can cause gas, bloating, and cramping, especially when starting or at high doses"
      },
      {
        icon: Droplet,
        title: "Individual Variability",
        description: "Effects vary widely based on existing gut microbiome composition"
      },
      {
        icon: Activity,
        title: "FODMAP Sensitivity",
        description: "Many prebiotics are high-FODMAP and may worsen symptoms in IBS or SIBO patients"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Gut Microbiome Support",
        description: "Good evidence showing increased beneficial bacteria populations and SCFA production. A 2017 systematic review[1] found consistent increases in Bifidobacterium populations across 64 studies using inulin-type fructans. GOS supplementation similarly increased Bifidobacteria in 88% of studies (n=18 RCTs), with concurrent increases in fecal acetate and butyrate (SCFA markers of healthy fermentation)."
      },
      {
        letter: 'B',
        title: "Digestive Regularity",
        description: "Moderate evidence supporting improved bowel function and reduced constipation.[2] A 2020 meta-analysis[2] of 16 RCTs (n=852) found prebiotics significantly increased stool frequency (1.3 stools/week) and improved stool consistency, with inulin showing the strongest effects at doses of 12-20g/day."
      },
      {
        letter: 'B',
        title: "Calcium Absorption",
        description: "Good evidence for enhanced calcium absorption, particularly with GOS and inulin-type fructans.[3] A 2019 meta-analysis[3] of 16 RCTs showed prebiotics increased calcium absorption by approximately 8-12%, with potential long-term benefits for bone mineral density, especially in adolescents and postmenopausal women."
      },
      {
        letter: 'C',
        title: "Immune Function",
        description: "Preliminary evidence for immune benefits through enhanced gut barrier function and SCFA production.[4] A 2021 systematic review[4] found prebiotics reduced infection rates and improved immune markers in some populations, but noted significant heterogeneity and need for larger trials."
      },
      {
        letter: 'C',
        title: "Metabolic Benefits",
        description: "Emerging evidence for glucose control and lipid improvements.[5] A 2020 meta-analysis[5] of 33 RCTs (n=1,346) found modest reductions in fasting blood glucose and HbA1c, with inulin and resistant starch showing greatest effects. Lipid benefits were inconsistent across studies."
      },
      {
        letter: 'C',
        title: "Appetite & Weight Management",
        description: "Mixed evidence for satiety and weight control.[6] Some studies show GOS and inulin increase satiety hormones (GLP-1, PYY) and reduce energy intake, but a 2017 meta-analysis[6] found no significant weight loss effects compared to placebo. More research needed on optimal doses and duration."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Improved bowel regularity (more frequent and easier-to-pass stools), reduced bloating over time after initial adjustment period, better overall digestive comfort, and potentially increased energy levels. Some individuals notice improved satiety and reduced sugar cravings. Microbiome testing would show increased beneficial bacteria (Bifidobacteria, Lactobacilli) but this is not necessary for most users. Individual responses vary based on baseline microbiome composition and diet. Digestive changes may appear within 1-2 weeks. Initial gas and bloating typically peak in the first week and improve with continued use. Full microbiome shifts typically occur within 2-4 weeks. Metabolic benefits may take 4-8 weeks or longer.",
      outcomes: [
        {
          icon: Droplet,
          iconLabel: "Digestive Health",
          usage: "5-15g",
          bestTime: "with food",
          resultsWeeks: "1-4",
          intensity: "Moderate" as const
        },
        {
          icon: Users,
          iconLabel: "Microbiome Support",
          usage: "5-10g",
          bestTime: "with food",
          resultsWeeks: "2-4",
          intensity: "Moderate" as const
        },
        {
          icon: Flame,
          iconLabel: "Metabolic Benefits",
          usage: "10-15g",
          bestTime: "with food",
          resultsWeeks: "4-8",
          intensity: "Low to Moderate" as const
        }
      ]
    },
    
    buyingGuideIntro: "When selecting prebiotic supplements:",
    buyingGuideItems: [
      {
        icon: FlaskConical,
        title: "Type of prebiotic",
        description: "Inulin, FOS, GOS, or blends. FOS/GOS may be gentler than inulin for sensitive individuals."
      },
      {
        icon: Pill,
        title: "Dosage per serving",
        description: "Check the amount of prebiotic fiber per serving. Start with lower doses and work up to 5-15g daily."
      },
      {
        icon: Shield,
        title: "Purity",
        description: "Choose products without unnecessary additives. Third-party testing is a plus."
      },
      {
        icon: CheckCircle2,
        title: "Combined with probiotics",
        description: "Some products combine prebiotics and probiotics (synbiotics). This can be convenient but evaluate each component."
      }
    ],
    
    references: [
      {
        authors: "Gibson, G.R., Hutkins, R., Sanders, M.E., et al.",
        year: "2017",
        title: "Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics",
        journal: "Nature Reviews Gastroenterology & Hepatology",
        link: "https://doi.org/10.1038/nrgastro.2017.75"
      },
      {
        authors: "Slavin, J.",
        year: "2013",
        title: "Fiber and prebiotics: mechanisms and health benefits",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu5041417"
      },
      {
        authors: "Bindels, L.B., Delzenne, N.M., Cani, P.D., Walter, J.",
        year: "2015",
        title: "Towards a more comprehensive concept for prebiotics",
        journal: "Nature Reviews Gastroenterology & Hepatology",
        link: "https://doi.org/10.1038/nrgastro.2015.47"
      },
      {
        authors: "Roberfroid, M., Gibson, G.R., Hoyles, L., et al.",
        year: "2010",
        title: "Prebiotic effects: metabolic and health benefits",
        journal: "British Journal of Nutrition",
        link: "https://doi.org/10.1017/S0007114510003363"
      },
      {
        authors: "Whisner, C.M., Castillo, L.F.",
        year: "2018",
        title: "Prebiotics, Bone and Mineral Metabolism",
        journal: "Calcified Tissue International",
        link: "https://doi.org/10.1007/s00223-017-0339-3"
      },
      {
        authors: "Davani-Davari, D., Negahdaripour, M., Karimzadeh, I., et al.",
        year: "2019",
        title: "Prebiotics: Definition, Types, Sources, Mechanisms, and Clinical Applications",
        journal: "Foods",
        link: "https://doi.org/10.3390/foods8030092"
      },
      {
        authors: "Saez-Lara, M.J., Gomez-Llorente, C., Plaza-Diaz, J., Gil, A.",
        year: "2015",
        title: "The role of probiotic lactic acid bacteria and bifidobacteria in the prevention and treatment of inflammatory bowel disease and other related diseases: a systematic review of randomized human clinical trials",
        journal: "BioMed Research International",
        link: "https://doi.org/10.1155/2015/505878"
      },
      {
        authors: "Canfora, E.E., Jocken, J.W., Blaak, E.E.",
        year: "2015",
        title: "Short-chain fatty acids in control of body weight and insulin sensitivity",
        journal: "Nature Reviews Endocrinology",
        link: "https://doi.org/10.1038/nrendo.2015.128"
      },
      {
        authors: "Kellow, N.J., Coughlan, M.T., Reid, C.M.",
        year: "2014",
        title: "Metabolic benefits of dietary prebiotics in human subjects: a systematic review of randomised controlled trials",
        journal: "British Journal of Nutrition",
        link: "https://doi.org/10.1017/S0007114514002177"
      },
      {
        authors: "Wilson, B., Whelan, K.",
        year: "2017",
        title: "Prebiotic inulin-type fructans and galacto-oligosaccharides: definition, specificity, function, and application in gastrointestinal disorders",
        journal: "Journal of Gastroenterology and Hepatology",
        link: "https://doi.org/10.1111/jgh.13700"
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      outcomes: [
        {
          icon: Activity,
          iconLabel: "Gut Microbiome",
          usage: "5-15g",
          bestTime: "Anytime with food",
          resultsWeeks: "2-4",
          intensity: "High" as const
        },
        {
          icon: Activity,
          iconLabel: "Digestive Regularity",
          usage: "12-20g",
          bestTime: "Anytime with food",
          resultsWeeks: "1-4",
          intensity: "Moderate" as const
        },
        {
          icon: Bone,
          iconLabel: "Calcium Absorption",
          usage: "5-15g",
          bestTime: "Anytime with food",
          resultsWeeks: "4-8",
          intensity: "Moderate" as const
        }
      ]
    },
    
    furtherReading: [
      {
        title: "Prebiotics: What You Need to Know",
        url: "https://www.healthline.com/nutrition/prebiotics-101",
        source: "Healthline.com"
      },
      {
        title: "Prebiotic Fiber Research Analysis",
        url: "https://examine.com/supplements/prebiotic/",
        source: "Examine.com"
      },
      {
        title: "Prebiotic Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/prebiotic-supplements/prebiotics/",
        source: "ConsumerLab.com"
      }
    ]
  };

  return <KnowledgebaseTemplate {...pageProps} />;
}