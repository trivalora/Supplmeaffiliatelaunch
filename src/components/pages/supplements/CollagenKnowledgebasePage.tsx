"use client";
import {
  KnowledgebaseTemplate,
  KnowledgebasePageProps,
} from "@/components/templates/KnowledgebaseTemplate";
import {
  Bone,
  Activity,
  Eye,
  Shield,
  Heart,
  Sparkles,
  AlertCircle,
  Droplet,
  FlaskConical,
  Apple,
  Users,
  Pill,
  CheckCircle2,
} from "@/components/iconExports";
import { PageKey } from "@/routes.config";
import { getSupplementImage } from "@/lib/supplementImages";

interface CollagenPageProps {
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void;
  onLegalClick?: () => void;
  overviewContent?: string;
  additionalOverviewContent?: string;
}

export function CollagenKnowledgebasePage({
  onNavigate,
  onContactClick,
  onLegalClick,
  overviewContent: dbOverviewContent,
  additionalOverviewContent: dbAdditionalContent,
}: CollagenPageProps = {}) {
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Collagen",
    currentPage: "collagenpeptides",
    heroDescription:
      "Evidence-based overview of hydrolyzed collagen supplements popular for joint, skin, and bone health, as well as exercise recovery and muscle maintenance.",
    heroImageUrl: getSupplementImage("collagenpeptides"),

    overviewTitle: "What are Collagen Peptides?",
    overviewContent: dbOverviewContent || (
      <p>
        Collagen is a <span className="font-medium">structural protein</span>{" "}
        comprising roughly a third of the body's total protein.{" "}
        <span className="font-medium">Collagen peptides</span> are hydrolyzed
        (pre-digested) fragments of collagen, making them more easily absorbed
        by the body.
      </p>
    ),
    dietarySources: [
      {
        icon: FlaskConical,
        title: "Hydrolyzed structure",
        description:
          "Short chains of amino acids derived from collagen by enzymatic hydrolysis",
      },
      {
        icon: Activity,
        title: "Animal sources",
        description: "Derived from bovine, porcine, or marine tissue",
      },
      {
        icon: Droplet,
        title: "Soluble form",
        description: "Easily dissolves in both hot and cold liquids",
      },
    ],
    additionalOverviewContent: dbAdditionalContent || (
      <p>
        Collagen peptides contain primarily glycine, proline, and
        hydroxyproline, which support connective tissue repair and function
        throughout the body.
      </p>
    ),

    benefits: [
      {
        icon: Bone,
        title: "Joint Health",
        description:
          "May reduce joint pain and improve mobility in osteoarthritis and athletes",
      },
      {
        icon: Sparkles,
        title: "Skin Health",
        description:
          "Improvements in skin hydration, elasticity, and reduction in visible aging signs",
      },
      {
        icon: Shield,
        title: "Bone Density",
        description:
          "May support bone mineral density, particularly when combined with resistance training",
      },
      {
        icon: Activity,
        title: "Muscle Mass",
        description:
          "May help maintain or increase lean body mass, especially in older adults",
      },
      {
        icon: Heart,
        title: "Wound Healing",
        description:
          "Collagen is critical for tissue repair and may accelerate healing",
      },
    ],

    drawbacksIntro: "Generally safe, but consider these points:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Digestive Issues",
        description:
          "Some users report bloating or feelings of fullness; high doses may cause mild GI upset",
      },
      {
        icon: Activity,
        title: "Allergies",
        description:
          "Not suitable for those with allergies to the source animal (bovine, porcine, or fish)",
      },
      {
        icon: Droplet,
        title: "Taste and Texture",
        description:
          "Can have a slight taste or texture that some find unpleasant",
      },
      {
        icon: Users,
        title: "Incomplete Protein",
        description:
          "Lacks tryptophan and is not a complete protein source for general nutrition",
      },
    ],

    researchGrades: [
      {
        letter: "A",
        title: "Skin Health",
        description:
          "Good evidence from multiple RCTs showing improvements in skin hydration, elasticity, and wrinkle reduction.[1][2] A 2021 meta-analysis[1] of 19 RCTs (n=1,125) found collagen supplementation (2.5-15g/day for 8-12 weeks) significantly improved skin hydration, elasticity, and wrinkle reduction. A 2019 systematic review[2] confirmed dermatological benefits with doses as low as 2.5-5g/day, with effects emerging at 4-8 weeks.",
      },
      {
        letter: "B",
        title: "Joint Pain & Mobility",
        description:
          "Moderate-quality evidence supporting reduced joint pain and improved function in osteoarthritis and athletic populations.[3][4] A 2019 meta-analysis[3] of 5 RCTs (n=516 with osteoarthritis) found collagen supplementation (8-12g/day) significantly reduced joint pain and improved joint stiffness. Another 2017 review[4] found benefits in athletes, with 5-15g/day reducing activity-related joint pain after 12-24 weeks.",
      },
      {
        letter: "B",
        title: "Bone Density",
        description:
          "Preliminary evidence suggests potential benefits for bone health, particularly in postmenopausal women.[5][6] A 2018 RCT[5] (n=102 postmenopausal women) found 5g/day collagen peptides for 12 months increased bone mineral density in the spine and femoral neck compared to placebo, while reducing markers of bone degradation. A 2021 review[6] noted promising results but called for larger, longer-duration trials.",
      },
      {
        letter: "B",
        title: "Muscle Mass & Sarcopenia",
        description:
          "Some promising data in older adults when combined with resistance training.[7][8] A 2015 RCT[7] (n=53 sarcopenic men) found 15g/day collagen peptides combined with resistance training increased fat-free mass and muscle strength more than exercise alone. A 2019 study[8] in active men found similar benefits. Effects appear strongest when paired with exercise.",
      },
      {
        letter: "C",
        title: "Tendon & Ligament Health",
        description:
          "Emerging evidence for connective tissue support in athletes.[9][10] A 2017 pilot study[9] (n=139 athletes) found 5g/day collagen peptides reduced ankle pain and improved ankle stability. Gelatin (collagen precursor) plus vitamin C showed potential to enhance collagen synthesis in tendons/ligaments, but more research needed.[10]",
      },
      {
        letter: "C",
        title: "Nail & Hair Health",
        description:
          "Limited but promising evidence.[11] A 2017 study[11] (n=25) found 2.5g/day collagen for 24 weeks increased nail growth and reduced broken nail frequency. Hair benefits are mostly anecdotal with minimal clinical evidence.",
      },
    ],

    whatToExpectData: {
      disclaimer:
        "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness:
        "Improved skin texture, increased skin hydration and suppleness, reduced appearance of fine lines and wrinkles (particularly around eyes), and better skin elasticity. Reduced joint discomfort, stiffness, or pain during activity or upon waking. Better recovery from exercise and reduced activity-related joint pain. Stronger, faster-growing nails with reduced breakage. Enhanced muscle recovery when combined with resistance training. Benefits are gradual and cumulative—consistency over 8-12+ weeks is key for noticeable results. Skin benefits may be noticeable within 4-8 weeks, joint pain reduction typically emerges after 8-12 weeks, and bone density improvements require 6-12 months.",
      outcomes: [
        {
          icon: Activity,
          iconLabel: "Skin Health",
          usage: "2.5-10g",
          bestTime: "Anytime",
          resultsWeeks: "4-12",
          intensity: "Moderate to High" as const,
        },
        {
          icon: Bone,
          iconLabel: "Joint Support",
          usage: "5-15g",
          bestTime: "Anytime",
          resultsWeeks: "8-24",
          intensity: "Moderate to High" as const,
        },
        {
          icon: Activity,
          iconLabel: "Muscle Mass",
          usage: "10-15g",
          bestTime: "Post-workout",
          resultsWeeks: "12+",
          intensity: "Moderate" as const,
        },
      ],
    },

    buyingGuideIntro: "When selecting collagen peptides:",
    buyingGuideItems: [
      {
        icon: Activity,
        title: "Source",
        description:
          "Choose based on preference and allergies: bovine (Type I & III), marine (Type I), or porcine. Grass-fed and wild-caught options available.",
      },
      {
        icon: Shield,
        title: "Third-party testing",
        description:
          "Look for USP, NSF, or Informed-Sport certification for quality and purity.",
      },
      {
        icon: Pill,
        title: "Hydrolyzed vs. Gelatin",
        description:
          "Ensure you're getting hydrolyzed collagen (peptides), which dissolve easily. Gelatin requires heat.",
      },
      {
        icon: CheckCircle2,
        title: "Additives",
        description:
          "Check for unnecessary fillers, sweeteners, or flavoring. Pure unflavored options are most versatile.",
      },
    ],

    references: [
      {
        authors:
          "Proksch, E., Segger, D., Degwert, J., Schunck, M., Zague, V., Oesser, S.",
        year: "2014",
        title:
          "Oral supplementation of specific collagen peptides has beneficial effects on human skin physiology: a double-blind, placebo-controlled study",
        journal: "Skin Pharmacology and Physiology",
        link: "https://doi.org/10.1159/000351376",
      },
      {
        authors: "Choi, F.D., Sung, C.T., Juhasz, M.L., Mesinkovsk, N.A.",
        year: "2019",
        title:
          "Oral Collagen Supplementation: A Systematic Review of Dermatological Applications",
        journal: "Journal of Drugs in Dermatology",
        link: "https://pubmed.ncbi.nlm.nih.gov/30681787/",
      },
      {
        authors:
          "Zdzieblik, D., Oesser, S., Baumstark, M.W., Gollhofer, A., König, D.",
        year: "2015",
        title:
          "Collagen peptide supplementation in combination with resistance training improves body composition and increases muscle strength in elderly sarcopenic men",
        journal: "British Journal of Nutrition",
        link: "https://doi.org/10.1017/S0007114515002810",
      },
      {
        authors: "Bruyère, O., Zegels, B., Leonori, L., et al.",
        year: "2012",
        title:
          "Effect of collagen hydrolysate in articular pain: a 6-month randomized, double-blind, placebo controlled study",
        journal: "Complementary Therapies in Medicine",
        link: "https://doi.org/10.1016/j.ctim.2011.08.006",
      },
      {
        authors:
          "García-Coronado, J.M., Martínez-Olvera, L., Elizondo-Omaña, R.E., et al.",
        year: "2019",
        title:
          "Effect of collagen supplementation on osteoarthritis symptoms: a meta-analysis of randomized placebo-controlled trials",
        journal: "International Orthopaedics",
        link: "https://doi.org/10.1007/s00264-018-4211-5",
      },
      {
        authors:
          "König, D., Oesser, S., Scharla, S., Zdzieblik, D., Gollhofer, A.",
        year: "2018",
        title:
          "Specific Collagen Peptides Improve Bone Mineral Density and Bone Markers in Postmenopausal Women—A Randomized Controlled Study",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu10010097",
      },
      {
        authors:
          "Hexsel, D., Zague, V., Schunck, M., Siega, C., Camozzato, F.O., Oesser, S.",
        year: "2017",
        title:
          "Oral supplementation with specific bioactive collagen peptides improves nail growth and reduces symptoms of brittle nails",
        journal: "Journal of Cosmetic Dermatology",
        link: "https://doi.org/10.1111/jocd.12393",
      },
      {
        authors: "Clark, K.L., Sebastianelli, W., Flechsenhar, K.R., et al.",
        year: "2008",
        title:
          "24-Week study on the use of collagen hydrolysate as a dietary supplement in athletes with activity-related joint pain",
        journal: "Current Medical Research and Opinion",
        link: "https://doi.org/10.1185/030079908X291967",
      },
      {
        authors: "Lodish, H., Berk, A., Zipursky, S.L., et al.",
        year: "2000",
        title: "Collagen: The Fibrous Proteins of the Matrix",
        journal: "Molecular Cell Biology, 4th edition",
        link: "https://www.ncbi.nlm.nih.gov/books/NBK21582/",
      },
      {
        authors: "de Miranda, R.B., Weimer, P., Rossi, R.C.",
        year: "2021",
        title:
          "Effects of hydrolyzed collagen supplementation on skin aging: a systematic review and meta-analysis",
        journal: "International Journal of Dermatology",
        link: "https://doi.org/10.1111/ijd.15518",
      },
      {
        authors: "Shaw, G., Lee-Barthel, A., Ross, M.L., Wang, B., Baar, K.",
        year: "2017",
        title:
          "Vitamin C-enriched gelatin supplementation before intermittent activity augments collagen synthesis",
        journal: "American Journal of Clinical Nutrition",
        link: "https://doi.org/10.3945/ajcn.116.138594",
      },
    ],

    furtherReading: [
      {
        title: "Collagen: Benefits, Sources, and Side Effects",
        url: "https://www.healthline.com/nutrition/collagen",
        source: "Healthline.com",
      },
      {
        title: "Collagen Supplements Research Analysis",
        url: "https://examine.com/supplements/type-ii-collagen/",
        source: "Examine.com",
      },
      {
        title: "Collagen Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/collagen-supplement-review/collagen/",
        source: "ConsumerLab.com",
      },
    ],
  };

  return (
    <>
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}
