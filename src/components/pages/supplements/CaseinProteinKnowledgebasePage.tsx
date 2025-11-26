'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from '@/components/templates/KnowledgebaseTemplate';
import { 
  Dumbbell, Moon, TrendingUp, Activity, Shield, Heart,
  AlertCircle, Droplet, FlaskConical, Apple, Users, TrendingDown, Pill, CheckCircle2,
  Scale, FileText
} from '@/components/iconExports';
import { PageKey } from '@/routes.config';
import { getSupplementImage } from '@/lib/supplementImages';
import { SEOHead, getSupplementSEO } from '@/components/SEOHead';

export function CaseinProteinKnowledgebasePage() {
  const benefits = ['sustained protein release', 'muscle preservation', 'overnight recovery', 'satiety', 'lean muscle growth'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Casein Protein",
    currentPage: "caseinprotein",
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

    references: [
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
      <SEOHead {...getSupplementSEO('Casein Protein', benefits, '/casein-protein')} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}