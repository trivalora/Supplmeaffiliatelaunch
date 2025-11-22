import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Activity, AlertCircle, Apple, CheckCircle2, Droplet, Dumbbell, FileText, FlaskConical, Heart, Shield, TrendingDown, TrendingUp, Users, Zap
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function WheyProteinPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('wheyproteinv2');
  const benefits = ['muscle growth', 'recovery', 'protein synthesis', 'strength gains', 'satiety'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Whey Protein",
    onNavigate,
    currentPage: "wheyproteinv2",
    heroDescription: "Evidence-based overview of whey protein supplementation with comprehensive meta-analytic evidence from 10 systematic reviews covering body composition, metabolic health, athletic performance, and recovery outcomes across diverse populations.",
    heroImageUrl: getSupplementImage('wheyproteinv2'),
    
    overviewTitle: "What is Whey Protein?",
    overviewContent: (
      <>
        <p>
          Whey protein is a <strong>complete protein derived from milk</strong> during cheese production, containing all essential amino acids required for muscle protein synthesis. It's rapidly absorbed and particularly high in leucine, making it one of the most popular supplements for body composition and metabolic health.
        </p>
        <p style={{ marginTop: 'var(--space-md)' }}>
          <strong>Meta-analytic evidence</strong> from 10 systematic reviews demonstrates population-specific benefits across different age groups and health conditions—from metabolic improvements to enhanced recovery. However, <strong>safety outcomes are inadequately addressed</strong>, with eight of ten meta-analyses failing to report adverse events.
        </p>
      </>
    ),
    dietarySources: [
      {
        icon: Apple,
        title: "Whey Protein Concentrate",
        description: "70-80% protein; contains some lactose and fat; most cost-effective"
      },
      {
        icon: Activity,
        title: "Whey Protein Isolate",
        description: "90%+ protein; minimal lactose and fat; faster absorption"
      },
      {
        icon: FlaskConical,
        title: "Whey Protein Hydrolysate",
        description: "Pre-digested for faster absorption; highest cost; similar efficacy to other forms"
      },
      {
        icon: Dumbbell,
        title: "Dietary Sources",
        description: "Milk, yogurt, cheese, cottage cheese—whole food sources provide additional nutrients"
      }
    ],
    additionalOverviewContent: (
      <p>
        Whey protein supports muscle protein synthesis through its high leucine content and rapid amino acid delivery. Meta-analyses show that benefits are <strong>most pronounced when combined with resistance training or calorie restriction</strong>, with effects varying significantly by population, health status, and concurrent lifestyle interventions.
      </p>
    ),
    
    benefits: [
      {
        icon: Dumbbell,
        title: "Body Composition in Overweight/Obese (Grade A)",
        description: "Meta-analyses of 35+ RCTs show increases in lean mass (0.77-2.24 kg), reductions in fat mass, and improvements in body weight when combined with exercise or calorie restriction"
      },
      {
        icon: Heart,
        title: "Metabolic Health (Grade A)",
        description: "22 RCTs in metabolic syndrome patients demonstrate significant improvements: HbA1c reduced by 0.15, insulin by 0.94, triglycerides by 17.12 units, LDL cholesterol by 8.47 units"
      },
      {
        icon: Dumbbell,
        title: "Athletic Performance (Grade B)",
        description: "Network meta-analysis of 20 RCTs shows 6.89-kg reduction in body mass, improvements in respiratory exchange ratio and average power in athletes"
      },
      {
        icon: Zap,
        title: "Muscle Recovery (Grade B)",
        description: "13 RCTs in young, healthy adults demonstrate moderate-to-large effect sizes (0.4-0.7) for muscle function recovery, significant at under 24 hours and 72 hours post-exercise"
      },
      {
        icon: Activity,
        title: "Postoperative Function in Cancer (Grade C)",
        description: "10 RCTs show enhanced postoperative function with six-minute walk distance increased by 23-46 meters in perioperative cancer patients"
      },
      {
        icon: Users,
        title: "Limited Effect in Elderly Sarcopenia (Grade D)",
        description: "10 RCTs in elderly with sarcopenia show no significant effect on muscle mass or function without concurrent exercise intervention"
      }
    ],
    
    drawbacksIntro: "Major safety data gap—8 of 10 meta-analyses did not report adverse events:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Inadequate Safety Reporting",
        description: "Eight of ten meta-analyses failed to report adverse events, dropout rates, or specific safety outcomes, making comprehensive safety assessment impossible"
      },
      {
        icon: Droplet,
        title: "Lactose Intolerance",
        description: "Whey concentrate contains lactose; may cause digestive discomfort in lactose-intolerant individuals. Isolate and hydrolysate have minimal lactose"
      },
      {
        icon: Activity,
        title: "Gastrointestinal Effects",
        description: "Some users report bloating, gas, or digestive discomfort, particularly with higher doses or concentrate forms"
      },
      {
        icon: Shield,
        title: "\"Generally Recognized as Safe\" Claims",
        description: "Two studies stated whey protein is safe but provided no supporting data—inadequate for evidence-based safety assessment"
      },
      {
        icon: Heart,
        title: "Kidney Concerns (Unfounded in Healthy)",
        description: "No evidence of kidney harm in healthy individuals at studied doses, but those with pre-existing kidney disease should consult healthcare provider"
      },
      {
        icon: AlertCircle,
        title: "Population-Specific Effects",
        description: "Benefits vary significantly by population, health status, exercise level, and calorie intake—not universally effective without lifestyle modifications"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Body Composition",
        subtitle: "Population: Overweight/Obese Adults",
        description: "Strong meta-analytic evidence from multiple high-quality systematic reviews. Miller et al. (2014) analyzed 14 RCTs showing weight reduction of 4.20 kg, fat mass reduction of 3.74 kg, and lean mass increase of 2.24 kg. Wirunsawanya et al. (2018) included 9 RCTs with significant improvements in body weight (0.56), lean mass (0.77), and fat mass (1.12). Sepandi et al. (2022) meta-analyzed 35 RCTs demonstrating body fat reduction of 0.144 and lean mass increase of 0.741, especially with exercise or calorie reduction."
      },
      {
        letter: 'A',
        title: "Glycemic & Lipid Control",
        subtitle: "Population: Metabolic Syndrome",
        description: "Extensive evidence (22 RCTs in adults with metabolic syndrome or related conditions). Amirani et al. (2020) found significant improvements: HbA1c weighted mean difference -0.15 units, insulin -0.94 units, HOMA-IR -0.20 units, triglycerides -17.12 units, total cholesterol -10.88 units, LDL cholesterol -8.47 units. All significant except fasting plasma glucose and HDL cholesterol."
      },
      {
        letter: 'B',
        title: "Athletic Performance",
        subtitle: "Population: Athletes",
        description: "Good evidence from network meta-analysis of 20 RCTs. Lam et al. (2019) demonstrated significant effects on body mass (weighted mean difference -6.89 kg), respiratory exchange ratio (0.012), and average power (SUCRA 75.4%). Safety stated as \"generally recognized as safe\" but no adverse event data provided."
      },
      {
        letter: 'B',
        title: "Muscle Function Recovery",
        subtitle: "Population: Young, Healthy Adults",
        description: "Moderate-to-good evidence (13 RCTs, PEDro quality assessment). Davies et al. (2018) reported effect sizes of 0.4-0.7 (Hedges g) for muscle function recovery, with statistical significance at under 24 hours and 72 hours post-resistance training."
      },
      {
        letter: 'C',
        title: "Cardiometabolic Markers in Younger Adults",
        subtitle: "Population: Adults Under 50, Overweight/Obese",
        description: "Preliminary evidence (21 RCTs). Prokopidis et al. (2024) found LDL cholesterol reduction (mean difference -5.38), especially with exercise. Effects limited to specific cardiometabolic markers."
      },
      {
        letter: 'C',
        title: "Postoperative Function",
        subtitle: "Population: Cancer Patients",
        description: "Limited but significant evidence (10 RCTs). Srinivasaraghavan et al. (2021) showed improved six-minute walk distance pre-operation (23.76 meters) and post-operation (45.76 meters). No safety data reported."
      },
      {
        letter: 'D',
        title: "Muscle Mass in Elderly Without Exercise",
        subtitle: "Population: Elderly with Sarcopenia",
        description: "Insufficient evidence for standalone effect. Kamińska et al. (2023) analyzed 10 RCTs in elderly (over 60, mean 74-84 years) showing no significant effect on appendicular muscle mass, handgrip strength, or physical function unless combined with exercise."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Increased lean muscle mass (0.77-2.24 kg), reduced fat mass (0.14-3.74 kg), improved body composition. In metabolic syndrome: improved HbA1c, insulin sensitivity, triglycerides, and LDL cholesterol. In athletes: enhanced power output, improved respiratory exchange ratio, reduced body mass. In young adults post-resistance training: faster muscle function recovery within 24-72 hours. Effects most pronounced when combined with resistance training or calorie restriction. Elderly with sarcopenia: no significant effects without concurrent exercise program.",
      outcomes: [
        {
          icon: 'performance',
          iconLabel: "Muscle Protein Synthesis",
          usage: "20-40g",
          bestTime: "Post-workout",
          resultsWeeks: "Ongoing",
          intensity: "High" as const,
          signsOfEffectiveness: "Enhanced recovery and muscle protein synthesis when timed around training."
        },
        {
          icon: Activity,
          iconLabel: "Body Composition",
          usage: "20-40g",
          bestTime: "Post-workout or with food",
          resultsWeeks: "7-52",
          intensity: "High" as const,
          signsOfEffectiveness: "Increased lean mass and reduced fat mass over weeks to months of resistance training."
        },
        {
          icon: TrendingDown,
          iconLabel: "Metabolic Health",
          usage: "20-40g",
          bestTime: "with food",
          resultsWeeks: "8-24",
          intensity: "Moderate" as const,
          signsOfEffectiveness: "Modest improvements in blood pressure, triglycerides, and total cholesterol in overweight/obese individuals."
        }
      ]
    },
    
    buyingGuideIntro: "When shopping for whey protein (based on clinical evidence):",
    buyingGuideItems: [
      {
        icon: Apple,
        title: "Form Selection",
        description: "Concentrate (70-80% protein) is cost-effective for most. Isolate (90%+ protein) for lactose intolerance. Hydrolysate offers faster absorption but no proven efficacy advantage in trials. Most meta-analyses used concentrate or isolate with equivalent outcomes."
      },
      {
        icon: Shield,
        title: "Third-Party Testing",
        description: (
          <>
            Look for <a href="https://www.usp.org" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">USP</a>, <a href="https://www.consumerlab.com" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">ConsumerLab</a>, or <a href="https://www.nsf.org" target="_blank" rel="nofollow noreferrer" className="text-primary hover:underline">NSF</a> certification for purity and absence of contaminants. Critical given inadequate safety reporting in meta-analyses—independent testing provides quality assurance.
          </>
        )
      },
      {
        icon: FlaskConical,
        title: "Dose Range",
        description: "Clinical studies used 20-40g daily. Standard recommendation: 20-25g post-workout or 1.2-2.0g protein per kg body weight daily from all sources. Higher doses (40g+) show no additional benefit for muscle protein synthesis per dose."
      },
      {
        icon: Activity,
        title: "Leucine Content",
        description: "Look for products with 2-3g leucine per serving. Leucine is the primary amino acid triggering muscle protein synthesis. Most quality whey proteins naturally contain adequate leucine without added supplementation."
      },
      {
        icon: Users,
        title: "Population Considerations",
        description: "Overweight/obese adults: combine with calorie restriction for optimal body composition effects. Athletes: focus on post-workout timing. Metabolic syndrome patients: consider as part of comprehensive metabolic management. Elderly with sarcopenia: combine with resistance training program—no effect without exercise."
      },
      {
        icon: CheckCircle2,
        title: "Added Ingredients",
        description: "Minimal ingredients are better. Avoid excessive artificial sweeteners, fillers, or proprietary blends. Many effective studies used simple whey protein without additional compounds. Check for digestive enzymes if prone to GI issues."
      },
      {
        icon: FileText,
        title: "Evidence-Based Duration",
        description: "Studies showing body composition benefits used 7-52 weeks. Metabolic improvements observed over 8-24 weeks. Athletic and recovery benefits appear within 1-12 weeks. Consistent daily supplementation more important than sporadic high-dose use."
      }
    ],
    
    references: [
      {
        authors: "Kamińska, M., Rachubińska, K., Grochans, S., Skonieczna-Żydecka, K., Cybulska, A.",
        year: "2023",
        title: "The Impact of Whey Protein Supplementation on Sarcopenia Progression among the Elderly: A Systematic Review and Meta-Analysis",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu15xxx"
      },
      {
        authors: "Lam, F.C., Bukhsh, A., Rehman, H., Waqas, M., Shahid, N.",
        year: "2019",
        title: "Efficacy and Safety of Whey Protein Supplements on Vital Sign and Physical Performance Among Athletes: A Network Meta-Analysis",
        journal: "Frontiers in Pharmacology",
        link: "https://doi.org/10.3389/fphar.2019.xxx"
      },
      {
        authors: "Prokopidis, K., Morgan, P.T., Veronese, N., Morwani-Mangnani, J., Triantafyllidis, K.K.",
        year: "2024",
        title: "The effects of whey protein supplementation on indices of cardiometabolic health: A systematic review and meta-analysis of randomized controlled trials",
        journal: "Clinical Nutrition",
        link: "https://doi.org/10.1016/j.clnu.2024.xxx"
      },
      {
        authors: "Davies, R.W., Carson, B., Jakeman, P.",
        year: "2018",
        title: "The Effect of Whey Protein Supplementation on the Temporal Recovery of Muscle Function Following Resistance Training: A Systematic Review and Meta-Analysis",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu10020221"
      },
      {
        authors: "Wirunsawanya, K., Upala, S., Jaruvongvanich, V., Sanguankeo, A.",
        year: "2018",
        title: "Whey Protein Supplementation Improves Body Composition and Cardiovascular Risk Factors in Overweight and Obese Patients: A Systematic Review and Meta-Analysis",
        journal: "Journal of the American College of Nutrition",
        link: "https://doi.org/10.1080/07315724.2017.1344591"
      },
      {
        authors: "Srinivasaraghavan, N., Das, N., Balakrishnan, K., Rajaram, S.",
        year: "2021",
        title: "Effect of Whey Protein Supplementation on Perioperative Outcomes in Patients with Cancer—A Systematic Review and Meta-Analysis",
        journal: "Nutrition and Cancer",
        link: "https://doi.org/10.1080/01635581.2021.xxx"
      },
      {
        authors: "Sepandi, M., Samadi, M., Shirvani, H., Alimohamadi, Y., Taghdir, M.",
        year: "2022",
        title: "Effect of whey protein supplementation on weight and body composition indicators: A meta-analysis of randomized clinical trials",
        journal: "Clinical Nutrition ESPEN",
        link: "https://doi.org/10.1016/j.clnesp.2022.xxx"
      },
      {
        authors: "Miller, P., Alexander, D., Perez, V.",
        year: "2014",
        title: "Effects of Whey Protein and Resistance Exercise on Body Composition: A Meta-Analysis of Randomized Controlled Trials",
        journal: "Journal of the American College of Nutrition",
        link: "https://doi.org/10.1080/07315724.2013.875365"
      },
      {
        authors: "Amirani, E., Milajerdi, A., Reiner, Ž., Mirzaei, H., Mansournia, M.",
        year: "2020",
        title: "Effects of whey protein on glycemic control and serum lipoproteins in patients with metabolic syndrome and related conditions: a systematic review and meta-analysis of randomized controlled clinical trials",
        journal: "Lipids in Health and Disease",
        link: "https://doi.org/10.1186/s12944-020-01207-x"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Whey Protein', benefits, '/whey-protein')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}

export default WheyProteinPageNewV2;