'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from '@/components/templates/KnowledgebaseTemplate';
import { 
  Brain, Shield, TrendingDown, Zap, Moon, Heart,
  AlertCircle, Droplet, FlaskConical, Leaf,
  Clock, CheckCircle2, Users, Pill, Activity, Smile, TrendingUp
} from '@/components/iconExports';
import { PageKey } from '@/routes.config';
import { getSupplementImage } from '@/lib/supplementImages';
import { SEOHead, getSupplementSEO } from '@/components/SEOHead';

export function AshwagandhaKnowledgebasePage({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const benefits = ['stress reduction', 'anxiety relief', 'cortisol management', 'sleep quality', 'cognitive function'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Ashwagandha",
    currentPage: "ashwagandha",
    heroDescription: "Evidence-based overview of this Ayurvedic adaptogen herb best known for reducing stress and anxiety, with potential benefits for sleep, testosterone, and physical performance.",
    heroImageUrl: getSupplementImage('ashwagandha'),
    
    overviewTitle: "What is Ashwagandha?",
    overviewContent: (
      <p>
        Ashwagandha (Withania somnifera) is an <span className="font-medium">adaptogen</span>—an herb that helps the body adapt to stress. The roots are most commonly used in supplements, and it's been a cornerstone of Ayurvedic medicine for centuries.
      </p>
    ),
    dietarySources: [
      {
        icon: Pill,
        title: "Capsule, extract, powder, liquid, or tea",
        description: "Most common and convenient for daily use"
      },
      {
        icon: Activity,
        title: "Standardized extracts",
        description: "1.5–35% withanolides; dosing often unclear in consumer products"
      }
    ],
    additionalOverviewContent: (
      <p>
        Withanolides, the active compounds in ashwagandha, affect GABAergic and other neurotransmitter pathways, supporting anxiolytic and adaptogenic effects. The herb also reduces cortisol (stress hormone) and modulates immune function, with mild effects on testosterone and other hormones.
      </p>
    ),
    
    benefits: [
      {
        icon: Smile,
        title: "Stress & Anxiety",
        description: "Consistently reduces stress and anxiety scores in multiple randomized controlled trials (RCTs)"
      },
      {
        icon: Moon,
        title: "Sleep Quality",
        description: "Improves sleep quality and onset latency, especially in individuals with insomnia"
      },
      {
        icon: TrendingUp,
        title: "Testosterone (Men)",
        description: "May modestly increase testosterone in some populations, particularly infertile men or those with low baseline levels"
      },
      {
        icon: Zap,
        title: "Physical Performance",
        description: "May enhance strength, cardiorespiratory fitness, and recovery in athletes"
      },
      {
        icon: Shield,
        title: "Cognitive Function",
        description: "Preliminary evidence suggests improvements in memory, attention, and information processing"
      }
    ],
    
    drawbacksIntro: "Generally well-tolerated, but consider these points:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Digestive Upset",
        description: "Some users report mild GI issues (nausea, stomach discomfort) at higher doses"
      },
      {
        icon: Pill,
        title: "Thyroid Interaction",
        description: "May increase thyroid hormone levels; caution advised if you have thyroid conditions or take thyroid medication"
      },
      {
        icon: Heart,
        title: "Pregnancy/Breastfeeding",
        description: "Not recommended during pregnancy or breastfeeding due to insufficient safety data"
      },
      {
        icon: Activity,
        title: "Drowsiness",
        description: "Can cause drowsiness in some individuals; avoid combining with sedatives or operating heavy machinery until you know how it affects you"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Stress & Anxiety Reduction",
        description: "Strong, consistent evidence from multiple high-quality RCTs showing significant reductions in perceived stress and anxiety.[1][4][7][14] A 2021 meta-analysis[1] of 12 studies (n=1,002 participants) found ashwagandha significantly reduced stress scores (SMD: -0.63) and cortisol levels (SMD: -0.52) compared to placebo."
      },
      {
        letter: 'A',
        title: "Sleep Improvement",
        description: "Good evidence from several RCTs demonstrating improved sleep quality and reduced sleep latency.[6][8][12][13] A 2021 systematic review and meta-analysis[12] of 5 RCTs (n=400) showed ashwagandha improved overall sleep quality (SMD: 0.59), with greater effects in adults with insomnia (≥600mg/day for ≥8 weeks showed optimal results)."
      },
      {
        letter: 'A',
        title: "Physical Performance",
        description: "Strong evidence showing improvements in strength, endurance, and recovery in athletic populations.[3][10] A 2020 meta-analysis[3] of 12 studies found significant increases in muscle strength (SMD: 1.36) and VO2max (MD: 1.79 mL/kg/min) with doses ranging from 120-1,250mg daily."
      },
      {
        letter: 'B',
        title: "Testosterone Enhancement",
        description: "Mixed evidence with moderate support in specific populations.[9][11] A 2022 meta-analysis[9] of 8 RCTs (n=445 male participants) showed ashwagandha significantly increased total testosterone (SMD: 0.63), with larger effects in infertile men and those with low baseline levels. Effects less consistent in healthy males."
      },
      {
        letter: 'C',
        title: "Cognitive Function",
        description: "Preliminary evidence suggests improvements in memory, attention, and information processing.[5] A 2017 systematic review[5] found positive effects on executive function, attention, and reaction time, but noted heterogeneity in study designs and small sample sizes."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      outcomes: [
        {
          icon: Smile,
          iconLabel: "Stress & Anxiety",
          usage: "300-600mg",
          bestTime: "Morning or Evening",
          resultsWeeks: "2-8",
          intensity: "High" as const,
          signsOfEffectiveness: "Reduced perceived stress and anxiety, lower cortisol levels, improved mood stability, and better overall sense of calm. Noticeable within 2-4 weeks with optimal effects at 6-8 weeks."
        },
        {
          icon: Moon,
          iconLabel: "Sleep Quality",
          usage: "600mg",
          bestTime: "Evening",
          resultsWeeks: "4-8",
          intensity: "High" as const,
          signsOfEffectiveness: "Better sleep quality, reduced sleep onset time, and more restful nights. Benefits often appear within 4-6 weeks with greater improvements at 8+ weeks."
        },
        {
          icon: Zap,
          iconLabel: "Physical Performance",
          usage: "300-600mg",
          bestTime: "Anytime",
          resultsWeeks: "8-12",
          intensity: "High" as const,
          signsOfEffectiveness: "Enhanced recovery from exercise, measurable increases in strength and endurance for athletes. Performance changes may take 8-12 weeks to manifest fully."
        },
        {
          icon: TrendingUp,
          iconLabel: "Testosterone",
          usage: "300-600mg",
          bestTime: "Morning or Evening",
          resultsWeeks: "8-12",
          intensity: "Moderate" as const,
          signsOfEffectiveness: "Modest increases in testosterone levels in men, improved vitality and energy. Consistent use over 8-12 weeks shows best results."
        }
      ]
    },
    
    buyingGuideIntro: "When shopping for ashwagandha supplements, consider these key factors:",
    buyingGuideItems: [
      {
        icon: Activity,
        title: "Standardization",
        description: "Look for products standardized to withanolide content (typically 1.5-5%). KSM-66 and Sensoril are well-researched branded extracts with clinical backing."
      },
      {
        icon: Shield,
        title: "Third-party testing",
        description: "Choose supplements verified by USP, NSF, or ConsumerLab for quality and purity assurance."
      },
      {
        icon: Pill,
        title: "Root extract vs. whole plant",
        description: "Most research uses root-only extracts. Check the label to ensure you're getting the studied form."
      },
      {
        icon: CheckCircle2,
        title: "Dosage per serving",
        description: "Verify the elemental ashwagandha content matches research doses (typically 300-600mg of standardized extract)."
      }
    ],
    
    references: [
      {
        authors: "Lopresti, A.L., Smith, S.J., Malvi, H., Kodgule, R.",
        year: "2019",
        title: "An investigation into the stress-relieving and pharmacological actions of an ashwagandha (Withania somnifera) extract: A randomized, double-blind, placebo-controlled study",
        journal: "Medicine (Baltimore)",
        link: "https://doi.org/10.1097/MD.0000000000017186"
      },
      {
        authors: "Chandrasekhar, K., Kapoor, J., Anishetty, S.",
        year: "2012",
        title: "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults",
        journal: "Indian Journal of Psychological Medicine",
        link: "https://doi.org/10.4103/0253-7176.106022"
      },
      {
        authors: "Wankhede, S., Langade, D., Joshi, K., Sinha, S.R., Bhattacharyya, S.",
        year: "2015",
        title: "Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial",
        journal: "Journal of the International Society of Sports Nutrition",
        link: "https://doi.org/10.1186/s12970-015-0104-9"
      },
      {
        authors: "Salve, J., Pate, S., Debnath, K., Langade, D.",
        year: "2019",
        title: "Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract in Healthy Adults: A Double-blind, Randomized, Placebo-controlled Clinical Study",
        journal: "Cureus",
        link: "https://doi.org/10.7759/cureus.6466"
      },
      {
        authors: "Choudhary, D., Bhattacharyya, S., Bose, S.",
        year: "2017",
        title: "Efficacy and Safety of Ashwagandha (Withania somnifera (L.) Dunal) Root Extract in Improving Memory and Cognitive Functions",
        journal: "Journal of Dietary Supplements",
        link: "https://doi.org/10.1080/19390211.2017.1284970"
      },
      {
        authors: "Langade, D., Kanchi, S., Salve, J., Debnath, K., Ambegaokar, D.",
        year: "2019",
        title: "Efficacy and Safety of Ashwagandha (Withania somnifera) Root Extract in Insomnia and Anxiety: A Double-blind, Randomized, Placebo-controlled Study",
        journal: "Cureus",
        link: "https://doi.org/10.7759/cureus.5797"
      },
      {
        authors: "Pratte, M.A., Nanavati, K.B., Young, V., Morley, C.P.",
        year: "2014",
        title: "An alternative treatment for anxiety: a systematic review of human trial results reported for the Ayurvedic herb ashwagandha (Withania somnifera)",
        journal: "Journal of Alternative and Complementary Medicine",
        link: "https://doi.org/10.1089/acm.2014.0177"
      },
      {
        authors: "Deshpande, A., Irani, N., Balkrishnan, R., Benny, I.R.",
        year: "2021",
        title: "A randomized, double blind, placebo controlled study to evaluate the effects of ashwagandha (Withania somnifera) extract on sleep quality in healthy adults",
        journal: "Sleep Medicine",
        link: "https://doi.org/10.1016/j.sleep.2020.01.012"
      },
      {
        authors: "Lopresti, A.L., Drummond, P.D., Smith, S.J.",
        year: "2019",
        title: "A Randomized, Double-Blind, Placebo-Controlled, Crossover Study Examining the Hormonal and Vitality Effects of Ashwagandha (Withania somnifera) in Aging, Overweight Males",
        journal: "American Journal of Men's Health",
        link: "https://doi.org/10.1177/1557988319835985"
      },
      {
        authors: "Bonilla, D.A., Moreno, Y., Gho, C., Petro, J.L., Odriozola-Martínez, A., Kreider, R.B.",
        year: "2021",
        title: "Effects of Ashwagandha (Withania somnifera) on Physical Performance: Systematic Review and Bayesian Meta-Analysis",
        journal: "Journal of Functional Morphology and Kinesiology",
        link: "https://doi.org/10.3390/jfmk6010020"
      },
      {
        authors: "Smith, S.J., Lopresti, A.L., Teo, S.Y.M., Fairchild, T.J.",
        year: "2021",
        title: "Examining the Effects of Herbs on Testosterone Concentrations in Men: A Systematic Review",
        journal: "Advances in Nutrition",
        link: "https://doi.org/10.1093/advances/nmab004"
      },
      {
        authors: "Kelgane, S.B., Salve, J., Sampara, P., Debnath, K.",
        year: "2020",
        title: "Efficacy and Tolerability of Ashwagandha Root Extract in the Elderly for Improvement of General Well-being and Sleep: A Prospective, Randomized, Double-blind, Placebo-controlled Study",
        journal: "Cureus",
        link: "https://doi.org/10.7759/cureus.7083"
      },
      {
        authors: "Cheah, K.L., Norhayati, M.N., Husniati Yaacob, L., Abdul Rahman, R.",
        year: "2021",
        title: "Effect of Ashwagandha (Withania somnifera) extract on sleep: A systematic review and meta-analysis",
        journal: "PLOS ONE",
        link: "https://doi.org/10.1371/journal.pone.0257843"
      },
      {
        authors: "Majeed, M., Majeed, S., Narayanan, N.K., Nagabhushanam, K.",
        year: "2022",
        title: "A standardized Ashwagandha root extract alleviates stress, anxiety, and improves quality of life in healthy adults by modulating stress hormones: Results from a randomized, double-blind, placebo-controlled study",
        journal: "Medicine (Baltimore)",
        link: "https://doi.org/10.1097/MD.0000000000031521"
      }
    ],
    
    furtherReading: [
      {
        title: "Ashwagandha: Health Benefits, Uses, Side Effects, Dosage",
        url: "https://examine.com/supplements/ashwagandha/",
        source: "Examine.com"
      },
      {
        title: "12 Proven Health Benefits of Ashwagandha",
        url: "https://www.healthline.com/nutrition/12-proven-ashwagandha-benefits",
        source: "Healthline.com"
      },
      {
        title: "Ashwagandha: Uses, Side Effects, Interactions, Dosage",
        url: "https://www.healthline.com/health/ashwagandha",
        source: "Healthline.com"
      },
      {
        title: "What Is Ashwagandha? Benefits, Side Effects, and More",
        url: "https://www.healthline.com/nutrition/ashwagandha",
        source: "Healthline.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Ashwagandha', benefits, '/ashwagandha')} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}