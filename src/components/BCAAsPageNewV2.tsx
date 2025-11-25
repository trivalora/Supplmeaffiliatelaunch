import { KnowledgebaseTemplate, KnowledgebasePageProps } from './KnowledgebaseTemplate';
import { 
  Dumbbell, Zap, Activity, TrendingUp, Shield, Heart,
  AlertCircle, Droplet, FlaskConical, Apple, Users, Pill, CheckCircle2
} from './iconExports';
import { PageKey } from '../routes.config';
import { getSupplementImage } from '../utils/supplementImages';
import { SEOHead, getSupplementSEO } from './SEOHead';
import { useStructuredData } from '../hooks/useStructuredData';

export function BCAAsPageNewV2({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('bcaasv2');
  const benefits = ['muscle recovery', 'exercise performance', 'muscle protein synthesis', 'fatigue reduction', 'muscle soreness'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "BCAAs",
    onNavigate,
    currentPage: "bcaasv2",
    heroDescription: "Essential amino acids (leucine, isoleucine, valine) with meta-analytic evidence supporting benefits for liver cancer surgery, hepatic encephalopathy, and exercise-induced muscle damage reduction",
    heroImageUrl: getSupplementImage('bcaasv2'),
    
    overviewTitle: "What are BCAAs?",
    overviewContent: (
      <>
        <p>Branched-chain <a href="/glossary/amino-acids" onClick={(e) => { e.preventDefault(); onNavigate?.('amino-acids' as PageKey); }} className="text-primary hover:underline">amino acids</a> (BCAAs) are three <a href="/glossary/essential-amino-acids" onClick={(e) => { e.preventDefault(); onNavigate?.('essential-amino-acids' as PageKey); }} className="text-primary hover:underline">essential amino acids</a>—leucine, isoleucine, and valine—that cannot be produced by the body and must be obtained through diet or supplementation. They make up approximately 35% of muscle protein and play a critical role in <a href="/glossary/muscle-protein-synthesis" onClick={(e) => { e.preventDefault(); onNavigate?.('muscle-protein-synthesis' as PageKey); }} className="text-primary hover:underline">muscle protein synthesis</a>.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>Meta-analytic evidence indicates <a href="/glossary/bcaa" onClick={(e) => { e.preventDefault(); onNavigate?.('bcaa' as PageKey); }} className="text-primary hover:underline">BCAA</a> supplementation demonstrates strongest benefits in liver cancer surgery (38% reduction in post‐operative infections, 45% reduction in ascites) and exercise-induced muscle damage (large reductions in <a href="/glossary/creatine-kinase" onClick={(e) => { e.preventDefault(); onNavigate?.('creatine-kinase' as PageKey); }} className="text-primary hover:underline">creatine kinase</a> and <a href="/glossary/doms" onClick={(e) => { e.preventDefault(); onNavigate?.('doms' as PageKey); }} className="text-primary hover:underline">delayed onset muscle soreness</a>), with an acceptable safety profile showing mild <a href="/glossary/adverse-effects" onClick={(e) => { e.preventDefault(); onNavigate?.('adverse-effects' as PageKey); }} className="text-primary hover:underline">adverse events</a> but no serious complications directly attributable to BCAA.</p>
      </>
    ),
    
    dietarySources: [
      { icon: Heart, title: "Animal Proteins", description: "Chicken, beef, pork, fish (especially tuna, salmon)" },
      { icon: Dumbbell, title: "Dairy Products", description: "Milk, Greek yogurt, cottage cheese, whey protein" },
      { icon: Pill, title: "BCAA Supplements", description: "Powder or capsule forms, typically 2:1:1 ratio (leucine:isoleucine:valine)" },
      { icon: Zap, title: "Plant Sources", description: "Soybeans, lentils, chickpeas, quinoa, nuts" }
    ],
    
    additionalOverviewContent: (
      <>
        <p style={{ marginTop: 'var(--space-lg)' }}>In patients with <a href="/glossary/hepatic-encephalopathy" onClick={(e) => { e.preventDefault(); onNavigate?.('hepatic-encephalopathy' as PageKey); }} className="text-primary hover:underline">hepatic encephalopathy</a>, <a href="/glossary/rct" onClick={(e) => { e.preventDefault(); onNavigate?.('rct' as PageKey); }} className="text-primary hover:underline">randomized controlled trials</a> note symptomatic improvement (27% relative improvement) without a mortality benefit and report increased gastrointestinal symptoms (nausea/vomiting).</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>Investigations in exercise recovery, resistance training, and sarcopenia yield modest reductions in muscle damage markers and frailty indices, although changes in performance or muscle function are generally not significant.</p>
        
        <p style={{ marginTop: 'var(--space-md)' }}>Mild adverse events—including gastrointestinal upset, <a href="/glossary/hyperglycemia" onClick={(e) => { e.preventDefault(); onNavigate?.('hyperglycemia' as PageKey); }} className="text-primary hover:underline">hyperglycemia</a>, diuresis, and hypertension—occur with BCAA interventions, with serious events either not attributed to BCAA or linked to procedural factors. The evidence thus delineates a nuanced profile of efficacy and safety for BCAA supplementation across diverse clinical settings.</p>
      </>
    ),
    
    benefits: [
      {
        icon: Activity,
        title: "Post-operative Infections",
        description: "38% reduction in post-operative infections in liver cancer patients"
      },
      {
        icon: Shield,
        title: "Ascites Reduction",
        description: "45% reduction in ascites in perioperative cancer patients"
      },
      {
        icon: Dumbbell,
        title: "Muscle Damage at 72h",
        description: "Large reduction in creatine kinase at 72 hours post-exercise"
      },
      {
        icon: Heart,
        title: "Hepatic Encephalopathy",
        description: "27% relative improvement in hepatic encephalopathy symptoms"
      },
      {
        icon: Zap,
        title: "DOMS Reduction",
        description: "Large effect sizes for delayed onset muscle soreness reduction across 24-96 hour timepoints"
      }
    ],
    
    drawbacksIntro: "While BCAA supplementation shows clear benefits in specific populations, meta-analyses reveal important limitations:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Gastrointestinal Side Effects",
        description: "Increased nausea and vomiting in liver disease patients; mostly mild GI symptoms across populations"
      },
      {
        icon: AlertCircle,
        title: "No Mortality Benefit",
        description: "No significant reduction in mortality in hepatic encephalopathy"
      },
      {
        icon: AlertCircle,
        title: "Performance vs. Recovery",
        description: "Muscle damage reduction doesn't necessarily translate to performance gains; limited evidence for athletic performance enhancement"
      },
      {
        icon: AlertCircle,
        title: "Limited Long-term Data",
        description: "Most studies relatively short-term (≤6 months typical); long-term safety and efficacy not well-established"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Post-Operative Complications",
        subtitle: "Population: Liver Cancer Surgery Patients",
        description: "38% relative reduction in post-operative infections and 45% relative reduction in ascites across meta-analysis of 13 RCTs. Approximately 2 days shorter hospital stay and average 3.24 kg body weight gain in perioperative cancer patients."
      },
      {
        letter: 'A',
        title: "Exercise-Induced Muscle Damage",
        description: "Large effect size reduction in creatine kinase at 72 hours post-exercise across 18 RCTs. Large effect sizes for DOMS reduction across multiple timepoints in meta-analysis of 25 RCTs. Dose-response relationship: higher daily doses and longer supplementation periods associated with greater muscle damage reduction."
      },
      {
        letter: 'A',
        title: "Hepatic Encephalopathy",
        subtitle: "Population: Liver Disease Patients",
        description: "27% relative improvement in symptoms with moderate-high GRADE certainty across 16 RCTs. No mortality benefit demonstrated. Increased gastrointestinal symptoms (nausea/vomiting) compared to placebo."
      },
      {
        letter: 'B',
        title: "Sarcopenic Liver Cirrhosis",
        description: "Improvement in liver frailty index in sarcopenic liver cirrhosis patients (meta-analysis of 5 RCTs). Increased BMI reported in one meta-analysis; needs replication. Muscle function shows mixed results with some non-significant findings."
      },
      {
        letter: 'C',
        title: "Athletic Performance",
        description: "Limited evidence for performance enhancement. Most studies focus on recovery markers rather than performance outcomes. Immediate creatine kinase shows medium effect size, but translation to performance gains unclear."
      },
      {
        letter: 'D',
        title: "Mortality & Quality of Life",
        description: "Mortality in liver disease: trend toward benefit but not statistically significant across multiple meta-analyses. Quality of life: no statistically significant effect despite clinical improvements. Long-term outcomes: most studies ≤6 months; insufficient data. Optimal BCAA ratios not well-established; 2:1:1 most studied but not clearly optimal."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      outcomes: [
        {
          icon: Dumbbell,
          iconLabel: "Athletic Recovery",
          usage: "3-20g",
          bestTime: "Pre/post-workout",
          resultsWeeks: "1-4",
          intensity: 'Moderate' as const,
          signsOfEffectiveness: "Reduced muscle soreness 24-72 hours post-exercise, faster recovery between training sessions, less pronounced DOMS (delayed onset muscle soreness), ability to maintain training intensity with shorter recovery periods between workouts."
        },
        {
          icon: Activity,
          iconLabel: "Hepatic Encephalopathy Support",
          usage: "12-25g",
          bestTime: "Multiple times daily with meals",
          resultsWeeks: "4-12",
          intensity: 'Moderate' as const,
          signsOfEffectiveness: "Improved mental clarity and cognitive function, reduced confusion and disorientation episodes, better scores on hepatic encephalopathy assessment scales. Medical supervision required. Note: gastrointestinal symptoms may occur."
        },
        {
          icon: Heart,
          iconLabel: "Post-Surgical Recovery",
          usage: "As prescribed",
          bestTime: "Before and after surgery",
          resultsWeeks: "1-6",
          intensity: 'High' as const,
          signsOfEffectiveness: "Reduced post-operative infections, decreased fluid retention/ascites, better weight maintenance or gain, shorter hospital stays, improved wound healing. Only for use under medical supervision in perioperative liver disease patients."
        }
      ]
    },
    
    buyingGuideIntro: "When selecting a BCAA supplement, meta-analytical evidence and clinical considerations suggest:",
    buyingGuideItems: [
      {
        icon: Activity,
        title: "Leucine:Isoleucine:Valine Ratio",
        description: "Most common and well-studied ratio is 2:1:1 (leucine dominant). Leucine is the primary driver of muscle protein synthesis via mTOR pathway. Standard 2:1:1 ratio used in majority of clinical and athletic studies with positive outcomes."
      },
      {
        icon: Shield,
        title: "Form and Administration Route",
        description: "Oral forms (powder, capsules, liquids) used in most athletic and recovery studies. Free-form amino acids (not protein-bound) provide rapid absorption. Powder forms allow flexible dosing to match evidence-based ranges (3-30g/day depending on use)."
      },
      {
        icon: Pill,
        title: "Evidence-Based Dosing",
        description: "Athletic/muscle damage prevention: 3-20g/day typical, with dose-response relationship favoring higher daily doses and longer supplementation periods (1-28 days studied). Clinical liver conditions: 12-25g/day oral or IV (follow medical guidance). Daily consistent dosing appears more effective than sporadic use for recovery outcomes."
      },
      {
        icon: CheckCircle2,
        title: "Quality and Third-Party Testing",
        description: (
          <>
            Third-party testing critical for athletes: <a href="https://www.usp.org/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">USP</a> Verified, <a href="https://www.nsf.org/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">NSF</a> Certified for Sport, Informed-Sport, or <a href="https://www.consumerlab.com/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">ConsumerLab</a> approved. Check for: stated amino acid content verified by independent lab, minimal fillers/additives, absence of banned substances for competitive athletes. Pharmaceutical-grade recommended for clinical/medical use.
          </>
        )
      },
      {
        icon: Zap,
        title: "Timing and Consistency",
        description: "Meta-analytic evidence shows daily consistent dosing more effective than sporadic use for recovery. Pre-exercise, during-exercise, and post-exercise timing all studied with benefits. For muscle damage reduction, supplementation 1-7 days before and continuing 2-3 days after exercise shows best results."
      }
    ],
    
    references: [
      {
        authors: "Cogo, E., Elsayed, M., Liang, V., Cooley, K., Guerin, C., Brunarski, D., Carley, J.",
        year: "2021",
        title: "Are Supplemental Branched-Chain Amino Acids Beneficial During the Oncological Peri-Operative Period: A Systematic Review and Meta-Analysis",
        journal: "Integrative Cancer Therapies",
        link: "https://doi.org/10.1177/15347354211005429"
      },
      {
        authors: "Salem, A., Ben Maaoui, K., Jahrami, H., Almarzooqi, M.A., Boukhris, O., et al.",
        year: "2024",
        title: "Attenuating Muscle Damage Biomarkers and Muscle Soreness After an Exercise-Induced Muscle Damage with Branched-Chain Amino Acid (BCAA) Supplementation: A Systematic Review and Meta-analysis with Meta-regression",
        journal: "Sports Medicine - Open",
        link: "https://doi.org/10.1186/s40798-024-00770-4"
      },
      {
        authors: "Gluud, L.L., Dam, G., Les, I., Marchesini, G., Borre, M., Aagaard, N.K., Vilstrup, H.",
        year: "2017",
        title: "Branched-chain amino acids for people with hepatic encephalopathy",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD001939.pub4"
      },
      {
        authors: "Fares, A., Abuelazm, M., Elhady, M., et al.",
        year: "2023",
        title: "Branched-chain amino acids for sarcopenia in liver cirrhosis: a systematic review and meta-analysis",
        journal: "European Journal of Gastroenterology & Hepatology",
        link: "https://doi.org/10.1097/MEG.0000000000002549"
      },
      {
        authors: "Fouré, A., Bendahan, D.",
        year: "2017",
        title: "Is Branched-Chain Amino Acids Supplementation an Efficient Nutritional Strategy to Alleviate Skeletal Muscle Damage? A Systematic Review",
        journal: "Nutrients",
        link: "https://doi.org/10.3390/nu9101047"
      }
    ],
    
    furtherReading: [
      {
        title: "Branched-Chain Amino Acids: Health Benefits and Uses",
        url: "https://examine.com/supplements/branched-chain-amino-acids/",
        source: "Examine.com"
      },
      {
        title: "BCAAs: The Science Behind Branched-Chain Amino Acids",
        url: "https://www.healthline.com/nutrition/benefits-of-bcaa",
        source: "Healthline"
      }
    ]
  };
  
  return (
    <>
      <SEOHead {...getSupplementSEO('BCAAs', benefits, '/bcaas')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}