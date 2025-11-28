'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from '@/components/templates/KnowledgebaseTemplate';
import { 
  Bone, Heart, Activity, Shield, Zap, AlertCircle,
  Pill, FlaskConical, Apple, Users, Droplet
} from '@/components/iconExports';
import { PageKey } from '@/routes.config';
import { getSupplementImage } from '@/lib/supplementImages';

export function CalciumKnowledgebasePage({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  
  const pageProps: KnowledgebasePageProps = {
    // Hero Section
    supplementName: "Calcium",
    currentPage: "calcium",
    heroDescription: "Evidence-based overview of the most abundant mineral in the human body, essential for bone health, nerve function, muscle contraction, and various physiological processes.",
    heroImageUrl: getSupplementImage('calcium'),
    
    // Overview Section
    overviewTitle: "What is Calcium?",
    overviewContent: (
      <>
        <p>
          Calcium is a <span className="font-medium">macromineral</span> and the most abundant mineral in the human body. It is critical for <span className="font-medium">bone and teeth structure</span>, nerve transmission, muscle contraction, blood clotting, and enzyme activity.
        </p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>
          Meta-analytic evidence demonstrates calcium's role in bone health, pre-eclampsia risk reduction, blood pressure management, and PMS symptom improvement, with the strongest evidence in populations at risk of deficiency or specific conditions.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Droplet,
        title: "Dairy Products",
        description: "Milk, cheese, yogurt"
      },
      {
        icon: Activity,
        title: "Plant Sources",
        description: "Some leafy greens, fortified plant-based products"
      }
    ],
    additionalOverviewContent: (
      <p>
        Approximately 99% of calcium in the body is stored in bones and teeth. The remaining 1% plays vital roles in muscle function, nerve transmission, vascular contraction and vasodilation, and hormone secretion.
      </p>
    ),
    
    // Benefits
    benefits: [
      {
        icon: Bone,
        title: "Bone health",
        description: "Core role in skeletal structure and small but significant increases in bone mineral density"
      },
      {
        icon: Shield,
        title: "Osteoporosis prevention",
        description: "Essential for preventing bone loss, especially in elderly and postmenopausal populations"
      },
      {
        icon: Apple,
        title: "Pre-eclampsia risk",
        description: "Strong evidence for reduced pre-eclampsia risk in pregnancy, particularly in at-risk groups"
      },
      {
        icon: Heart,
        title: "Blood pressure",
        description: "Small reduction in blood pressure; potential benefit for hypertension"
      },
      {
        icon: Users,
        title: "PMS symptoms",
        description: "Multiple RCTs show improvement in pre-menstrual symptoms"
      }
    ],
    
    // Drawbacks
    drawbacksIntro: "Generally safe within recommended doses, but be aware of:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Gastrointestinal issues",
        description: "Mild side effects like bloating or constipation possible at high doses"
      },
      {
        icon: Pill,
        title: "Kidney stones",
        description: "High calcium intake may increase risk in susceptible individuals; consult a healthcare provider if you have a history of kidney stones"
      },
      {
        icon: Activity,
        title: "Interaction with medications",
        description: "Can interfere with absorption of certain medications (e.g., antibiotics, thyroid hormones)"
      },
      {
        icon: Heart,
        title: "Cardiovascular concerns",
        description: "Some studies suggest very high supplemental calcium may be associated with increased cardiovascular risk (evidence mixed)"
      }
    ],
    
    // Research Grades (Optional)
    researchGrades: [
      {
        letter: 'A',
        title: "Bone Health & Osteoporosis",
        description: "Strong, consistent evidence from multiple high-quality RCTs showing calcium's critical role in bone mineral density and fracture prevention.[1] A 2017 meta-analysis[1] of 33 RCTs (n=51,145) found calcium supplementation (with or without vitamin D) increased bone mineral density by 0.7-1.8% at various skeletal sites and reduced total fracture risk by 12%. Effects are most pronounced when combined with vitamin D and in populations with low baseline calcium intake."
      },
      {
        letter: 'A',
        title: "Pre-eclampsia Prevention",
        description: "Robust evidence from systematic reviews demonstrating significant reduction in pre-eclampsia risk, especially in low-calcium populations.[2] A 2018 Cochrane systematic review[2] of 27 RCTs (n=18,587 women) found calcium supplementation (≥1g/day) reduced pre-eclampsia risk by 55%, with greatest benefits in women with low baseline calcium intake and those at high risk of pre-eclampsia. Also reduced preterm birth risk."
      },
      {
        letter: 'B',
        title: "Blood Pressure Reduction",
        description: "Moderate evidence showing small but meaningful reductions in blood pressure, particularly in those with low baseline calcium intake.[3] A 2015 meta-analysis[3] of 18 RCTs found calcium supplementation (1,000-2,000mg/day) reduced systolic blood pressure by 1.43 mmHg and diastolic by 0.98 mmHg. Effects were larger in participants with low baseline calcium intake and hypertension."
      },
      {
        letter: 'B',
        title: "PMS Symptom Relief",
        description: "Good evidence from multiple RCTs showing improvement in premenstrual syndrome symptoms with calcium supplementation.[4] A 2017 systematic review[4] of 10 studies found 1,000-1,200mg/day calcium significantly reduced PMS symptoms, including mood disturbances, water retention, and pain, with effects typically emerging after 2-3 menstrual cycles."
      },
      {
        letter: 'C',
        title: "Colorectal Cancer Prevention",
        description: "Mixed evidence for potential protective effects.[5] A 2020 meta-analysis[5] of 15 cohort studies found modest inverse associations between calcium intake and colorectal cancer risk, but supplementation trials showed inconsistent results. More research needed to establish optimal dosing and target populations."
      },
      {
        letter: 'C',
        title: "Weight Management",
        description: "Preliminary evidence suggests calcium may play a role in fat metabolism and weight regulation.[6] A 2016 meta-analysis[6] found modest weight loss effects with dairy calcium but limited evidence for supplemental calcium alone. Mechanisms remain under investigation."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Effects are mostly internal and not immediately noticeable—bone health and cellular functions improve gradually. Some people report reduced muscle cramps, especially nocturnal leg cramps. Women may experience reduced PMS symptoms (mood swings, bloating, cramping) after 2-3 months. Blood pressure reductions are typically small (1-2 mmHg) and would require monitoring to detect. Long-term benefits include maintained bone density and reduced fracture risk, best assessed through DEXA scans after 1-2 years. Bone density improvements may take 6-12 months of consistent supplementation to become measurable, with continued benefits over years of use. Blood pressure reductions may be observed within 8-12 weeks. PMS symptom improvements typically emerge after 2-3 menstrual cycles.",
      outcomes: [
        {
          icon: Bone,
          iconLabel: "Bone Health",
          usage: "1000-1200mg",
          bestTime: "Morning or Evening",
          resultsWeeks: "24-52",
          intensity: "High" as const
        },
        {
          icon: Users,
          iconLabel: "Pre-eclampsia Prevention",
          usage: "≥1000mg",
          bestTime: "Anytime",
          resultsWeeks: "During pregnancy",
          intensity: "High" as const
        },
        {
          icon: Heart,
          iconLabel: "Blood Pressure",
          usage: "1000-2000mg",
          bestTime: "Anytime",
          resultsWeeks: "8-12",
          intensity: "Low to Moderate" as const
        },
        {
          icon: Users,
          iconLabel: "PMS Symptoms",
          usage: "1000-1200mg",
          bestTime: "Anytime",
          resultsWeeks: "8-12",
          intensity: "Moderate" as const
        }
      ]
    },
    
    // Buying Guide (Optional)
    buyingGuideIntro: "When shopping for calcium supplements, consider these key factors:",
    buyingGuideItems: [
      {
        icon: Pill,
        title: "Form of calcium",
        description: "Calcium citrate (better absorbed, can take without food) vs. calcium carbonate (requires food, less expensive, higher elemental calcium)"
      },
      {
        icon: Zap,
        title: "Elemental calcium content",
        description: "Check the label for 'elemental calcium' not just total compound weight. Aim for 500-600mg elemental calcium per dose."
      },
      {
        icon: Shield,
        title: "Third-party testing",
        description: "Look for USP, NSF, or ConsumerLab certification to ensure purity and accurate labeling"
      },
      {
        icon: Activity,
        title: "Added nutrients",
        description: "Many formulas include vitamin D (enhances absorption) and magnesium (works synergistically with calcium)"
      }
    ],
    
    references: [
      {
        authors: "Weaver, C.M., Alexander, D.D., Boushey, C.J., et al.",
        year: "2016",
        title: "Calcium plus vitamin D supplementation and risk of fractures: an updated meta-analysis from the National Osteoporosis Foundation",
        journal: "Osteoporosis International",
        link: "https://doi.org/10.1007/s00198-015-3386-5"
      },
      {
        authors: "Bolland, M.J., Leung, W., Tai, V., et al.",
        year: "2015",
        title: "Calcium intake and risk of fracture: systematic review",
        journal: "BMJ",
        link: "https://doi.org/10.1136/bmj.h4580"
      },
      {
        authors: "Ross, A.C., Manson, J.E., Abrams, S.A., et al.",
        year: "2011",
        title: "The 2011 report on dietary reference intakes for calcium and vitamin D from the Institute of Medicine: what clinicians need to know",
        journal: "Journal of Clinical Endocrinology & Metabolism",
        link: "https://doi.org/10.1210/jc.2010-2704"
      },
      {
        authors: "Harvey, N.C., Biver, E., Kaufman, J.M., et al.",
        year: "2017",
        title: "The role of calcium supplementation in healthy musculoskeletal ageing",
        journal: "Osteoporosis International",
        link: "https://doi.org/10.1007/s00198-017-3974-5"
      },
      {
        authors: "Hofmeyr, G.J., Lawrie, T.A., Atallah, Á.N., Torloni, M.R.",
        year: "2018",
        title: "Calcium supplementation during pregnancy for preventing hypertensive disorders and related problems",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD001059.pub5"
      },
      {
        authors: "Cormick, G., Ciapponi, A., Cafferata, M.L., Belizán, J.M.",
        year: "2021",
        title: "Calcium supplementation for prevention of primary hypertension",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD010037.pub4"
      },
      {
        authors: "Zhao, J.G., Zeng, X.T., Wang, J., Liu, L.",
        year: "2017",
        title: "Association Between Calcium or Vitamin D Supplementation and Fracture Incidence in Community-Dwelling Older Adults: A Systematic Review and Meta-analysis",
        journal: "JAMA",
        link: "https://doi.org/10.1001/jama.2017.19344"
      },
      {
        authors: "Pereira, M.A., Jacobs, D.R., Van Horn, L., Slattery, M.L., Kartashov, A.I., Ludwig, D.S.",
        year: "2002",
        title: "Dairy consumption, obesity, and the insulin resistance syndrome in young adults: the CARDIA Study",
        journal: "JAMA",
        link: "https://doi.org/10.1001/jama.287.16.2081"
      },
      {
        authors: "Abedi, P., Bovarzadeh, S., Fakhri, A., Najafi, M.N.",
        year: "2018",
        title: "The relationship between premenstrual syndrome and food patterns in university student girls",
        journal: "Journal of Family Medicine and Primary Care",
        link: "https://doi.org/10.4103/jfmpc.jfmpc_93_18"
      },
      {
        authors: "Bristow, S.M., Bolland, M.J., MacLennan, G.S., et al.",
        year: "2013",
        title: "Calcium supplements and cancer risk: a meta-analysis of randomised controlled trials",
        journal: "British Journal of Nutrition",
        link: "https://doi.org/10.1017/S0007114513001050"
      }
    ],
    
    furtherReading: [
      {
        title: "Calcium - Health Professional Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/",
        source: "NIH Office of Dietary Supplements"
      },
      {
        title: "Calcium: Health Benefits, Foods, and Deficiency",
        url: "https://www.healthline.com/nutrition/calcium-benefits",
        source: "Healthline.com"
      },
      {
        title: "Calcium Supplements: Should You Take Them?",
        url: "https://examine.com/supplements/calcium/",
        source: "Examine.com"
      },
      {
        title: "Calcium Product Review",
        url: "https://www.consumerlab.com/reviews/calcium-supplements-review/calcium/",
        source: "ConsumerLab.com"
      }
    ]
  };

  return (
    <>
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}