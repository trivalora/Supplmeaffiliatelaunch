"use client";
import {
  KnowledgebaseTemplate,
  KnowledgebasePageProps,
} from "@/components/templates/KnowledgebaseTemplate";
import {
  Bone,
  Sun,
  Heart,
  Shield,
  Brain,
  Activity,
  AlertCircle,
  Droplet,
  Zap,
  Users,
  Clock,
  Pill,
  CheckCircle2,
} from "@/components/iconExports";
import { PageKey } from "@/routes.config";
import { getSupplementImage } from "@/lib/supplementImages";

interface VitaminDPageProps {
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void;
  onLegalClick?: () => void;
  overviewContent?: string;
  additionalOverviewContent?: string;
}

export function VitaminDKnowledgebasePage({
  onNavigate,
  onContactClick,
  onLegalClick,
  overviewContent: dbOverviewContent,
  additionalOverviewContent: dbAdditionalContent,
}: VitaminDPageProps = {}) {
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Vitamin D",
    currentPage: "vitamind",
    heroDescription:
      "Evidence-based overview of the sunshine vitamin essential for bone health, immune function, mood regulation, and overall wellbeing.",
    heroImageUrl: getSupplementImage("vitamind"),

    overviewTitle: "What is Vitamin D?",
    overviewContent: dbOverviewContent || (
      <p>
        Vitamin D is a <span className="font-medium">fat-soluble vitamin</span>{" "}
        and hormone precursor. Your skin produces it when exposed to UVB
        sunlight, but most people don't get enough sun exposure to maintain
        optimal levels, making supplementation or fortified foods necessary.
      </p>
    ),
    dietarySources: [
      {
        icon: Sun,
        title: "Sunlight exposure",
        description:
          "10-30 minutes midday sun (varies by skin tone, latitude, season)",
      },
      {
        icon: Droplet,
        title: "Fatty fish",
        description: "Salmon, mackerel, sardines",
      },
      {
        icon: Activity,
        title: "Fortified foods",
        description: "Milk, orange juice, cereals, plant-based milks",
      },
    ],
    additionalOverviewContent: dbAdditionalContent || (
      <p>
        Vitamin D regulates calcium absorption, supports bone mineralization,
        modulates immune function, and influences gene expression. Deficiency is
        extremely common, particularly in northern latitudes, during winter, and
        in darker-skinned individuals.
      </p>
    ),

    benefits: [
      {
        icon: Bone,
        title: "Bone Health",
        description:
          "Essential for calcium absorption and bone mineralization; prevents rickets in children and osteomalacia in adults",
      },
      {
        icon: Shield,
        title: "Immune Function",
        description:
          "Supports immune system; may reduce risk of respiratory infections, especially in deficient individuals",
      },
      {
        icon: Brain,
        title: "Mood Support",
        description:
          "May reduce risk of depression and support mental health, particularly in those with low levels",
      },
      {
        icon: Heart,
        title: "Cardiovascular Health",
        description:
          "Observational links to heart health, though causal relationship not fully established",
      },
      {
        icon: Zap,
        title: "Muscle Function",
        description:
          "Supports muscle strength and function; reduces fall risk in older adults",
      },
    ],

    drawbacksIntro: "Very safe at recommended doses, but note:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Toxicity at High Doses",
        description:
          "Prolonged intake above 4000 IU/day can cause hypercalcemia (elevated blood calcium)",
      },
      {
        icon: Droplet,
        title: "Kidney Stones",
        description:
          "Excessive vitamin D increases calcium absorption, potentially raising kidney stone risk",
      },
      {
        icon: Pill,
        title: "Medication Interactions",
        description:
          "Can interact with certain medications (e.g., steroids, weight loss drugs, cholesterol-lowering drugs)",
      },
    ],

    researchGrades: [
      {
        letter: "A",
        title: "Bone Health",
        description:
          "Strong evidence for preventing rickets, osteomalacia, and supporting bone density when combined with calcium.[1] A 2018 meta-analysis[1] of 81 RCTs (n=53,537) found vitamin D plus calcium reduced fracture risk by 15% and hip fracture risk by 30% in older adults, particularly at doses ≥800 IU/day. Vitamin D alone showed weaker effects.",
      },
      {
        letter: "A",
        title: "Deficiency Prevention",
        description:
          "Robust evidence showing supplementation effectively raises and maintains vitamin D levels.[2] A 2014 systematic review[2] found 800-1,000 IU/day reliably achieves serum 25(OH)D levels >20 ng/mL (50 nmol/L) in most adults, with 1,500-2,000 IU/day needed to reach optimal levels (>30 ng/mL or 75 nmol/L) in vitamin D-deficient individuals. Higher doses (4,000-5,000 IU/day) may be needed in severe deficiency, obesity, or malabsorption.",
      },
      {
        letter: "B",
        title: "Immune Function & Respiratory Infections",
        description:
          "Good evidence for reduced respiratory infections in vitamin D-deficient individuals.[3] A 2017 meta-analysis[3] of 25 RCTs (n=11,321) found vitamin D supplementation reduced acute respiratory infection risk by 12% overall, with protective effects strongest in those with baseline deficiency (<25 nmol/L) receiving daily or weekly supplementation.",
      },
      {
        letter: "B",
        title: "Fall Prevention",
        subtitle: "Population: Older Adults",
        description:
          "Good evidence for reduced fall risk with vitamin D supplementation in elderly populations.[4] A 2018 meta-analysis[4] of 20 RCTs (n=29,535) found vitamin D (700-1,000 IU/day) reduced falls by 12%, with greatest benefits in those with low baseline levels and when combined with calcium.",
      },
      {
        letter: "C",
        title: "Mood & Depression",
        description:
          "Mixed evidence; some benefit seen in deficient populations, but not consistent across all studies.[5] A 2020 meta-analysis[5] of 41 RCTs found vitamin D improved depressive symptoms compared to placebo, but effects were small and varied by baseline vitamin D status, depression severity, and supplementation dose. Larger trials (VITAL, D-Health) found no significant effects on depression in general populations.",
      },
      {
        letter: "C",
        title: "Cardiovascular Disease",
        description:
          "Observational studies show associations between vitamin D deficiency and cardiovascular risk, but large RCTs (VITAL, D-Health) found no significant effects of vitamin D supplementation on cardiovascular events in general populations. May have modest benefits in deficient individuals, but more research needed.",
      },
      {
        letter: "C",
        title: "Cancer Prevention",
        description:
          "Observational links exist, but RCTs show limited evidence for cancer prevention. The VITAL trial (n=25,871) found no significant reduction in total cancer incidence, though some secondary analyses suggested potential benefits for cancer mortality. Evidence remains insufficient for cancer prevention recommendations.",
      },
    ],

    whatToExpectData: {
      disclaimer:
        "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness:
        "Most benefits are internal and not immediately noticeable. Blood testing for 25-hydroxyvitamin D is the best way to confirm adequate levels—aim for 30-50 ng/mL (75-125 nmol/L) for optimal health. Some individuals with severe deficiency may notice improved energy, mood, or reduced muscle aches after correction, though these effects are variable. Reduced frequency of colds or respiratory infections may be observed over the fall/winter months, particularly in those previously deficient. Long-term benefits include maintained bone density, reduced fracture and fall risk, and potentially improved immune resilience. Blood levels typically normalize within 2-3 months of daily supplementation. Skeletal benefits accumulate over months to years. Immune benefits may emerge within 2-4 months. Muscle strength improvements typically require 3-6 months.",
      outcomes: [
        {
          icon: Bone,
          iconLabel: "Bone Health",
          usage: "1000-2000 IU",
          bestTime: "With fat-containing meal",
          resultsWeeks: "12-52",
          intensity: "Moderate to High" as const,
        },
        {
          icon: Shield,
          iconLabel: "Immune Support",
          usage: "1000-2000 IU",
          bestTime: "With fat-containing meal",
          resultsWeeks: "8-16",
          intensity: "Moderate" as const,
        },
        {
          icon: Activity,
          iconLabel: "Muscle Strength",
          usage: "800-2000 IU",
          bestTime: "With fat-containing meal",
          resultsWeeks: "12-24",
          intensity: "Moderate" as const,
        },
      ],
    },

    buyingGuideIntro: "When selecting vitamin D supplements:",
    buyingGuideItems: [
      {
        icon: Pill,
        title: "D3 vs. D2",
        description:
          "Choose vitamin D3 (cholecalciferol) over D2 (ergocalciferol). D3 is more effective at raising and maintaining blood levels.",
      },
      {
        icon: Droplet,
        title: "Dosage",
        description:
          "Check IU per serving. Common doses are 1000, 2000, or 5000 IU. Don't exceed 4000 IU daily long-term without medical supervision.",
      },
      {
        icon: Shield,
        title: "Third-party testing",
        description:
          "Look for USP, NSF, or ConsumerLab verification to ensure potency and purity.",
      },
      {
        icon: CheckCircle2,
        title: "Get tested",
        description:
          "Consider testing your vitamin D levels (25-hydroxyvitamin D) to determine appropriate dosage for your needs.",
      },
    ],

    references: [
      {
        authors: "Holick, M.F.",
        year: "2007",
        title: "Vitamin D deficiency",
        journal: "New England Journal of Medicine",
        link: "https://doi.org/10.1056/NEJMra070553",
      },
      {
        authors: "Scragg, R., Stewart, A.W., Waayer, D., et al.",
        year: "2017",
        title:
          "Effect of Monthly High-Dose Vitamin D Supplementation on Cardiovascular Disease in the Vitamin D Assessment Study: A Randomized Clinical Trial",
        journal: "JAMA Cardiology",
        link: "https://doi.org/10.1001/jamacardio.2017.0175",
      },
      {
        authors: "Manson, J.E., Cook, N.R., Lee, I.M., et al.",
        year: "2019",
        title:
          "Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease",
        journal: "New England Journal of Medicine",
        link: "https://doi.org/10.1056/NEJMoa1809944",
      },
      {
        authors: "Autier, P., Boniol, M., Pizot, C., Mullie, P.",
        year: "2014",
        title: "Vitamin D status and ill health: a systematic review",
        journal: "The Lancet Diabetes & Endocrinology",
        link: "https://doi.org/10.1016/S2213-8587(13)70165-7",
      },
      {
        authors: "Martineau, A.R., Jolliffe, D.A., Hooper, R.L., et al.",
        year: "2017",
        title:
          "Vitamin D supplementation to prevent acute respiratory tract infections: systematic review and meta-analysis of individual participant data",
        journal: "BMJ",
        link: "https://doi.org/10.1136/bmj.i6583",
      },
      {
        authors: "Bolland, M.J., Grey, A., Avenell, A.",
        year: "2018",
        title:
          "Effects of vitamin D supplementation on musculoskeletal health: a systematic review, meta-analysis, and trial sequential analysis",
        journal: "The Lancet Diabetes & Endocrinology",
        link: "https://doi.org/10.1016/S2213-8587(18)30265-1",
      },
      {
        authors: "Anglin, R.E., Samaan, Z., Walter, S.D., McDonald, S.D.",
        year: "2013",
        title:
          "Vitamin D deficiency and depression in adults: systematic review and meta-analysis",
        journal: "British Journal of Psychiatry",
        link: "https://doi.org/10.1192/bjp.bp.111.106666",
      },
      {
        authors: "Rejnmark, L., Bislev, L.S., Cashman, K.D., et al.",
        year: "2017",
        title:
          "Non-skeletal health effects of vitamin D supplementation: A systematic review on findings from meta-analyses summarizing trial data",
        journal: "PLOS ONE",
        link: "https://doi.org/10.1371/journal.pone.0180512",
      },
      {
        authors: "Bischoff-Ferrari, H.A., Willett, W.C., Orav, E.J., et al.",
        year: "2012",
        title:
          "A pooled analysis of vitamin D dose requirements for fracture prevention",
        journal: "New England Journal of Medicine",
        link: "https://doi.org/10.1056/NEJMoa1109617",
      },
      {
        authors: "Pittas, A.G., Dawson-Hughes, B., Sheehan, P., et al.",
        year: "2019",
        title: "Vitamin D Supplementation and Prevention of Type 2 Diabetes",
        journal: "New England Journal of Medicine",
        link: "https://doi.org/10.1056/NEJMoa1900906",
      },
    ],

    furtherReading: [
      {
        title: "Vitamin D - Health Professional Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/",
        source: "NIH Office of Dietary Supplements",
      },
      {
        title: "Vitamin D: Benefits, Deficiency, Sources and Dosage",
        url: "https://www.healthline.com/nutrition/vitamin-d-101",
        source: "Healthline.com",
      },
      {
        title: "Vitamin D Research Analysis",
        url: "https://examine.com/supplements/vitamin-d/",
        source: "Examine.com",
      },
      {
        title: "Vitamin D Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/vitamin_d_supplements_review/vitamin_d/",
        source: "ConsumerLab.com",
      },
      {
        title: "Dr. Rhonda Patrick on Vitamin D",
        url: "https://www.foundmyfitness.com/topics/vitamin-d",
        source: "FoundMyFitness.com",
      },
    ],
  };

  return (
    <>
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}
