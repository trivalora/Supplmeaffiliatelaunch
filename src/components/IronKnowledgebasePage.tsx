'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Heart, Activity, Droplet, Zap, AlertCircle, Shield,
  Pill, FlaskConical, Apple, Users, Brain
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '@/lib/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function IronKnowledgebasePage({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('ironv2');
  const benefits = ['energy levels', 'oxygen transport', 'anemia prevention', 'cognitive function', 'immune support'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Iron",
    currentPage: "ironv2",
    heroDescription: "Evidence-based overview of an essential mineral with meta-analytic support for treating iron deficiency, anemia across all ages, and improving outcomes in heart failure and chronic kidney disease.",
    heroImageUrl: getSupplementImage("iron"),
    
    overviewTitle: "What is Iron?",
    overviewContent: (
      <>
        <p>
          Iron is an <span className="font-medium">essential mineral</span> critical for oxygen transport, energy production, and immune function. It's a key component of hemoglobin in red blood cells and myoglobin in muscles.
        </p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>
          Iron deficiency is the most common nutritional deficiency worldwide, affecting children, women of reproductive age, and individuals with chronic conditions.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Droplet,
        title: "Heme iron (animal sources)",
        description: "Red meat, poultry, fish—better absorbed (15-35%)"
      },
      {
        icon: Activity,
        title: "Non-heme iron (plant sources)",
        description: "Spinach, lentils, fortified cereals—lower absorption (2-20%)"
      },
      {
        icon: FlaskConical,
        title: "Supplements",
        description: "Oral (ferrous sulfate, bisglycinate) or intravenous formulations for clinical use"
      }
    ],
    additionalOverviewContent: (
      <p>
        Meta-analytic evidence demonstrates iron supplementation's effectiveness in treating anemia across all ages, with particular benefits in children, pregnant women, heart failure patients, and chronic kidney disease populations. Oral supplementation is effective for most deficiencies, while intravenous forms provide rapid correction in severe cases or when oral absorption is compromised.
      </p>
    ),
    
    benefits: [
      {
        icon: Apple,
        title: "Anemia Prevention in Children",
        description: "Meta-analyses show oral iron reduces anemia risk by 39% (RR 0.61), iron deficiency by 70% (RR 0.30), and iron deficiency anemia by 80-86% (RR 0.14) in children aged 4 months to 20 years"
      },
      {
        icon: Heart,
        title: "Heart Failure Outcomes",
        description: "In heart failure patients with iron deficiency, supplementation (oral or IV) reduces hospitalization risk by 72% (OR 0.28) without affecting mortality"
      },
      {
        icon: Users,
        title: "Chronic Kidney Disease",
        description: "Intravenous iron shows 1.6-2.1 times greater hemoglobin response than oral iron in CKD stages 3-5 and dialysis patients"
      },
      {
        icon: Zap,
        title: "Fatigue Reduction",
        description: "In non-anemic, iron-deficient adults (mostly women), supplementation improves subjective fatigue (SMD -0.38) with modest hemoglobin increases (~4 g/L)"
      },
      {
        icon: Shield,
        title: "Transfusion Reduction",
        description: "Intravenous iron in acute care reduces transfusion needs by 26% (RR 0.74) and increases hemoglobin by ~6.5 g/L"
      }
    ],
    
    drawbacksIntro: "Generally safe when appropriately dosed, but consider:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Gastrointestinal Side Effects",
        description: "Oral iron commonly causes nausea, constipation, or dark stools. Lower doses or chelated forms (e.g., bisglycinate) may reduce GI distress"
      },
      {
        icon: Droplet,
        title: "Intravenous Iron Risks",
        description: "IV formulations increase infection risk (RR 1.33) and hypotension risk (RR 3.71 in CKD), though serious adverse events are uncommon. Anaphylaxis risk is low (8/2186 in one meta-analysis)"
      },
      {
        icon: Pill,
        title: "Age-Specific Considerations",
        description: "Infants (4-23 months) show higher rates of vomiting (RR 1.38) and fever (RR 1.16) with oral iron. Children in malaria-endemic areas require prevention/surveillance services alongside supplementation"
      },
      {
        icon: Activity,
        title: "Limited Physical Capacity Benefit",
        description: "Despite improving hemoglobin and reducing fatigue in non-anemic iron-deficient adults, no measurable effect on objective physical capacity was observed"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Anemia and Iron Deficiency",
        subtitle: "Population: Children",
        description: "Robust evidence from large meta-analyses.[1][2] Andersen et al. (2023)[1] (129 RCTs) and Pasricha et al. (2013)[2] (35 RCTs) found daily oral iron consistently reduces anemia by 39%, iron deficiency by 70%, and iron deficiency anemia by 80-86% in children aged 4 months to 20 years. Hemoglobin increases by 6.3-7 g/L and ferritin by 11.6-18.5 ng/mL. Effects consistent across populations."
      },
      {
        letter: 'B',
        title: "Heart Failure with Iron Deficiency",
        subtitle: "Population: Heart Failure Patients",
        description: "Good evidence from systematic review of 5 RCTs.[3] Qian et al. (2016)[3] found iron supplementation (oral or IV) reduces heart failure hospitalization by 72%. Mortality not significantly affected. Intravenous iron (ferric carboxymaltose, iron isomaltose) preferred for efficacy and tolerability."
      },
      {
        letter: 'B',
        title: "Chronic Kidney Disease",
        subtitle: "Population: Chronic Kidney Disease (CKD)",
        description: "Strong comparative evidence from meta-analysis of 24 RCTs.[4] Shepshelovich et al. (2008)[4] found IV iron shows superior hemoglobin response in CKD stages 3-5 and dialysis (CKD 5D). Increased hypotension risk but fewer GI adverse events. Mortality and serious adverse events similar between routes."
      },
      {
        letter: 'B',
        title: "Acute Care",
        subtitle: "Population: Surgical and Critically Ill Patients",
        description: "Meta-analysis of 75 RCTs shows IV iron reduces transfusion requirements and increases hemoglobin by 6.5 g/L.[5] Litton et al. (2013)[5] found increased infection risk. Formulations include iron sucrose, gluconate, carboxymaltose, and dextran. Careful monitoring warranted."
      },
      {
        letter: 'C',
        title: "Fatigue Reduction",
        subtitle: "Population: Non-Anemic, Iron-Deficient Adults",
        description: "Moderate evidence from 20 RCTs showing subjective fatigue improvement in mostly healthy women aged 17-55.[6] Houston et al. (2018)[6] found hemoglobin increased by only 4 g/L. No measurable effect on objective physical capacity. Sparse reporting of adverse events limits conclusions. Clinical significance of fatigue improvement unclear."
      },
      {
        letter: 'C',
        title: "Malaria-Endemic Areas",
        subtitle: "Population: Children in Malaria Regions",
        description: "Evidence from two meta-analyses shows oral iron does not increase clinical malaria or death when given with malaria prevention or surveillance services.[7][8] Neuberger et al. (2016)[7] (35 RCTs) and Okebe et al. (2011)[8] (71 RCTs) found severe malaria may even be reduced. Screening for anemia not necessary in these settings if prevention services are available."
      }
    ],
    
    buyingGuideIntro: "When selecting iron supplements:",
    buyingGuideItems: [
      {
        icon: Pill,
        title: "Form selection",
        description: "Ferrous sulfate is effective and economical but may cause GI upset. Ferrous bisglycinate (chelated) is gentler on the stomach with comparable absorption. Ferrous fumarate and ferrous gluconate are alternatives. Avoid time-release formulas as they may release iron past optimal absorption sites."
      },
      {
        icon: FlaskConical,
        title: "Dosage considerations",
        description: "Check elemental iron content (not total weight). For adults: 50-100 mg elemental iron daily for prevention; 100-200 mg for treatment of deficiency. For children: follow pediatrician guidance (typically 1-2 mg/kg elemental iron daily). Higher doses increase GI side effects without proportional benefit."
      },
      {
        icon: Shield,
        title: "Absorption enhancers",
        description: "Vitamin C (ascorbic acid) significantly boosts iron absorption. Some supplements combine iron with vitamin C. Avoid taking iron with calcium, coffee, tea, or high-fiber foods which inhibit absorption. Space doses at least 2 hours apart from these."
      },
      {
        icon: Activity,
        title: "Quality & testing",
        description: "Choose products with third-party testing (USP, ConsumerLab, NSF) for purity and potency. Iron is stable but check expiration dates. Liquid formulas can stain teeth—use a straw and rinse mouth after. Store away from children as iron overdose is dangerous in young children."
      }
    ],
    
    references: [
      {
        authors: "Andersen, C.T., Marsden, D.M., Duggan, C.P., Liu, E., Mozaffarian, D.",
        year: "2023",
        title: "Oral iron supplementation and anaemia in children according to schedule, duration, dose and cosupplementation: a systematic review and meta-analysis of 129 randomised trials",
        journal: "BMJ Global Health",
        link: "https://doi.org/10.1136/bmjgh-2023-012952"
      },
      {
        authors: "Pasricha, S.R., Hayes, E., Kalumba, K., Biggs, B.A.",
        year: "2013",
        title: "Effect of daily iron supplementation on health in children aged 4-23 months: a systematic review and meta-analysis of randomised controlled trials",
        journal: "Lancet Global Health",
        link: "https://doi.org/10.1016/S2214-109X(13)70046-9"
      },
      {
        authors: "Qian, C., Wei, B., Ding, J., Wu, H., Wang, Y.",
        year: "2016",
        title: "The Efficacy and Safety of Iron Supplementation in Patients With Heart Failure and Iron Deficiency: A Systematic Review and Meta-analysis",
        journal: "Canadian Journal of Cardiology",
        link: "https://doi.org/10.1016/j.cjca.2015.11.009"
      },
      {
        authors: "Shepshelovich, D., Rozen-Zvi, B., Avni, T., Gafter, U., Gafter-Gvili, A.",
        year: "2016",
        title: "Intravenous Versus Oral Iron Supplementation for the Treatment of Anemia in CKD: An Updated Systematic Review and Meta-analysis",
        journal: "American Journal of Kidney Diseases",
        link: "https://doi.org/10.1053/j.ajkd.2015.12.006"
      },
      {
        authors: "Litton, E., Xiao, J., Ho, K.M.",
        year: "2013",
        title: "Safety and efficacy of intravenous iron therapy in reducing requirement for allogeneic blood transfusion: systematic review and meta-analysis of randomised clinical trials",
        journal: "BMJ",
        link: "https://doi.org/10.1136/bmj.f4822"
      },
      {
        authors: "Houston, B.L., Hurrie, D., Graham, J., et al.",
        year: "2018",
        title: "Efficacy of iron supplementation on fatigue and physical capacity in non-anaemic iron-deficient adults: a systematic review of randomised controlled trials",
        journal: "BMJ Open",
        link: "https://doi.org/10.1136/bmjopen-2018-019240"
      },
      {
        authors: "Neuberger, A., Okebe, J., Yahav, D., Paul, M.",
        year: "2016",
        title: "Oral iron supplements for children in malaria-endemic areas",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD006589.pub4"
      },
      {
        authors: "Okebe, J., Yahav, D., Shbita, R., Paul, M.",
        year: "2011",
        title: "Oral iron supplements for children in malaria-endemic areas",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD006589.pub3"
      },
      {
        authors: "Thompson, J., Biggs, B.A., Pasricha, S.R.",
        year: "2013",
        title: "Effects of Daily Iron Supplementation in 2- to 5-Year-Old Children: Systematic Review and Meta-analysis",
        journal: "Pediatrics",
        link: "https://doi.org/10.1542/peds.2012-2256"
      },
      {
        authors: "Gurusamy, K.S., Nagendran, M., Broadhurst, J.F., et al.",
        year: "2014",
        title: "Iron therapy in anaemic adults without chronic kidney disease",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD010640.pub2"
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "For anemia: increased hemoglobin (6-7 g/L in children, 4-6.5 g/L in adults) and improved energy levels within 4-12 weeks. For heart failure: reduced symptoms and fewer hospitalizations over months. For fatigue in iron-deficient non-anemic adults: subjective improvement in tiredness (though objective physical capacity unchanged). Lab tests (hemoglobin, ferritin, transferrin saturation) confirm iron repletion. Dark stools are common with oral iron and not a safety concern.",
      outcomes: [
        {
          icon: Apple,
          iconLabel: "Child Anemia",
          usage: "1-2mg/kg",
          bestTime: "Morning",
          resultsWeeks: "4-12",
          intensity: "High" as const
        },
        {
          icon: Heart,
          iconLabel: "Heart Failure",
          usage: "IV or oral",
          bestTime: "Medical setting",
          resultsWeeks: "8-24",
          intensity: "Moderate to High" as const
        },
        {
          icon: Users,
          iconLabel: "CKD Anemia",
          usage: "IV preferred",
          bestTime: "Medical setting",
          resultsWeeks: "2-8",
          intensity: "High" as const
        },
        {
          icon: Zap,
          iconLabel: "Fatigue (Non-Anemic)",
          usage: "80-100mg",
          bestTime: "Morning",
          resultsWeeks: "4-12",
          intensity: "Low to Moderate" as const
        }
      ]
    },
    
    furtherReading: [
      {
        title: "Iron - Health Professional Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/",
        source: "NIH Office of Dietary Supplements"
      },
      {
        title: "Iron Deficiency Anemia: Symptoms and Causes",
        url: "https://www.healthline.com/health/iron-deficiency-anemia",
        source: "Healthline.com"
      },
      {
        title: "Iron Research Analysis",
        url: "https://examine.com/supplements/iron/",
        source: "Examine.com"
      },
      {
        title: "Iron Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/iron-supplements-review/iron/",
        source: "ConsumerLab.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Iron', benefits, '/iron')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}