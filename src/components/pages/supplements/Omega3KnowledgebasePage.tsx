'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from '@/components/templates/KnowledgebaseTemplate';
import { 
  Heart, Brain, Eye, Activity, Droplet, Shield,
  AlertCircle, Pill, FlaskConical, Baby,
  Clock, CheckCircle2, Smile, Users
} from '@/components/iconExports';
import { PageKey } from '@/routes.config';
import { getSupplementImage } from '@/lib/supplementImages';
import { SEOHead, getSupplementSEO } from '@/components/SEOHead';
import { useStructuredData } from '@/hooks/useStructuredData';

export function Omega3KnowledgebasePage({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const structuredData = useStructuredData('omega3v2');
  const benefits = ['heart health', 'brain function', 'inflammation reduction', 'eye health', 'triglyceride reduction'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Omega-3",
    currentPage: "omega3v2",
    heroDescription: "Evidence-based overview of essential fatty acids (EPA and DHA) critical for heart health, brain function, inflammation control, and overall wellbeing.",
    heroImageUrl: getSupplementImage('omega3v2'),
    
    overviewTitle: "What is Omega-3?",
    overviewContent: (
      <p>
        Omega-3 fatty acids are <span className="font-medium">essential polyunsaturated fats</span> that your body cannot produce, requiring dietary intake. The two most important forms are <span className="font-medium">EPA (eicosapentaenoic acid)</span> and <span className="font-medium">DHA (docosahexaenoic acid)</span>, primarily found in marine sources.
      </p>
    ),
    dietarySources: [
      {
        icon: Droplet,
        title: "Fatty fish",
        description: "Salmon, mackerel, sardines, herring (rich in EPA and DHA)"
      },
      {
        icon: Activity,
        title: "Fish oil supplements",
        description: "Concentrated EPA and DHA in capsule or liquid form"
      },
      {
        icon: FlaskConical,
        title: "Algal oil",
        description: "Plant-based source of DHA (suitable for vegetarians/vegans)"
      }
    ],
    additionalOverviewContent: (
      <p>
        EPA and DHA support cardiovascular health, reduce inflammation, maintain cell membrane integrity, and are critical for brain and eye development. ALA (alpha-linolenic acid), found in flaxseeds and walnuts, is another omega-3 but converts poorly to EPA/DHA.
      </p>
    ),
    
    benefits: [
      {
        icon: Heart,
        title: "Heart Health",
        description: "Reduces triglycerides, supports healthy blood pressure, and may reduce cardiovascular disease risk"
      },
      {
        icon: Brain,
        title: "Cognitive Function",
        description: "Supports brain health, memory, and may reduce cognitive decline in aging"
      },
      {
        icon: Shield,
        title: "Anti-Inflammatory",
        description: "Reduces systemic inflammation and may benefit inflammatory conditions"
      },
      {
        icon: Eye,
        title: "Eye Health",
        description: "DHA is a major structural component of the retina; supports visual development and function"
      },
      {
        icon: Baby,
        title: "Pregnancy & Development",
        description: "Critical for fetal brain and eye development during pregnancy"
      },
      {
        icon: Activity,
        title: "Mood Support",
        description: "May help with depression and anxiety, particularly in those with low omega-3 intake"
      }
    ],
    
    drawbacksIntro: "Generally safe, but note:",
    drawbacks: [
      {
        icon: AlertCircle,
        title: "Fishy Aftertaste",
        description: "Can cause fishy burps or aftertaste; enteric-coated or refrigerated capsules help"
      },
      {
        icon: Droplet,
        title: "Blood Thinning",
        description: "High doses may increase bleeding risk; caution if on blood thinners or before surgery"
      },
      {
        icon: Pill,
        title: "GI Upset",
        description: "Some users experience nausea, diarrhea, or indigestion"
      },
      {
        icon: FlaskConical,
        title: "Oxidation",
        description: "Omega-3s can oxidize (go rancid); choose products with antioxidants and store properly"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Triglyceride Reduction",
        description: "Strong evidence showing significant reductions in blood triglycerides at doses of 2-4g daily.[1][2] A 2019 meta-analysis[1] of 17 RCTs found omega-3 supplementation (2-4g EPA+DHA daily) reduced triglycerides by 15-30% (dose-dependent), with high-dose EPA (4g icosapent ethyl) showing 25% reduction in the REDUCE-IT trial.[2] Effects are most pronounced in individuals with elevated baseline triglycerides (>150 mg/dL)."
      },
      {
        letter: 'B',
        title: "Cardiovascular Health",
        description: "Good evidence for reduced cardiovascular risk, particularly in those with existing heart disease or high triglycerides.[2][3] A 2019 meta-analysis[3] of major RCTs (REDUCE-IT, VITAL, ASCEND, STRENGTH) showed mixed results, with high-dose purified EPA (icosapent ethyl, 4g/day) reducing major cardiovascular events by 25% (REDUCE-IT),[2] while lower doses or EPA+DHA combinations showed smaller or null effects. Benefits strongest in patients with elevated triglycerides and existing cardiovascular disease."
      },
      {
        letter: 'B',
        title: "Anti-Inflammatory Effects",
        description: "Moderate evidence supporting reduced inflammatory markers (CRP, IL-6, TNF-alpha) in various conditions.[4] A 2017 meta-analysis[4] found omega-3 supplementation (1-4g/day) significantly reduced inflammatory biomarkers, with effects more pronounced in chronic inflammatory conditions (rheumatoid arthritis, inflammatory bowel disease) and metabolic syndrome. Clinical symptom improvements vary by condition."
      },
      {
        letter: 'B',
        title: "Depression & Mood",
        description: "Good evidence for adjunctive treatment of depression, especially with higher EPA.[5] A 2020 meta-analysis[5] of 26 RCTs (n=2,160) found omega-3 supplementation improved depressive symptoms, with EPA-predominant formulations (≥60% EPA, 1-2g/day) showing greater effects than DHA-predominant or balanced formulations. Benefits strongest when added to antidepressant therapy."
      },
      {
        letter: 'C',
        title: "Cognitive Function & Dementia Prevention",
        description: "Mixed evidence; some benefits seen in specific populations but not universally consistent.[6] A 2018 Cochrane review[6] found no convincing evidence that omega-3 supplementation prevents cognitive decline or dementia in healthy older adults. However, observational studies link higher omega-3 intake with lower dementia risk, and some trials show benefits in individuals with very mild cognitive impairment. More research needed."
      },
      {
        letter: 'B',
        title: "Pregnancy & Infant Development",
        description: "Good evidence for benefits during pregnancy and lactation.[7] A 2018 Cochrane review[7] of 70 RCTs found omega-3 supplementation during pregnancy reduced preterm birth risk and increased birth weight slightly. DHA supplementation (200-1,000mg/day) supports infant visual and cognitive development, though long-term effects are modest."
      },
      {
        letter: 'C',
        title: "Age-Related Macular Degeneration",
        description: "Preliminary evidence suggests potential protective effects.[8] The AREDS2 trial[8] found adding EPA+DHA (1g/day) to antioxidants did not provide additional AMD benefit in the overall population, but post-hoc analyses suggested possible benefits in those with low dietary fish intake. Observational data shows associations between omega-3 intake and reduced AMD risk."
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      signsOfEffectiveness: "Lower triglycerides measurable via blood testing (15-30% reduction with high-dose supplementation). Reduced joint pain, stiffness, or morning stiffness in inflammatory conditions like rheumatoid arthritis (may take 8-12 weeks). Improved mood, reduced depressive symptoms when used adjunctively for depression. Healthier skin appearance and reduced dryness. Better cardiovascular markers (blood pressure, heart rate variability) over time. Individual responses vary based on baseline omega-3 status, diet, genetics, and health conditions. Triglyceride reductions typically observed within 4-6 weeks. Anti-inflammatory effects emerge within 6-12 weeks. Mood improvements may appear within 4-8 weeks.",
      outcomes: [
        {
          icon: Heart,
          iconLabel: "Triglycerides",
          usage: "2-4g EPA+DHA",
          bestTime: "with food",
          resultsWeeks: "4-6",
          intensity: "High" as const
        },
        {
          icon: Shield,
          iconLabel: "Inflammation",
          usage: "1-2g EPA+DHA",
          bestTime: "with food",
          resultsWeeks: "6-12",
          intensity: "Moderate" as const
        },
        {
          icon: Brain,
          iconLabel: "Mood (Depression)",
          usage: "1-2g EPA",
          bestTime: "with food",
          resultsWeeks: "4-12",
          intensity: "Moderate" as const
        }
      ]
    },
    
    buyingGuideIntro: "When selecting omega-3 supplements:",
    buyingGuideItems: [
      {
        icon: FlaskConical,
        title: "Form",
        description: "Triglyceride or phospholipid forms absorb better than ethyl ester. Check for 'rTG' (re-esterified triglyceride) form."
      },
      {
        icon: Pill,
        title: "EPA+DHA content",
        description: "Check total EPA+DHA per serving, not just total fish oil. Aim for at least 500-1000mg combined EPA+DHA daily."
      },
      {
        icon: Shield,
        title: "Purity & freshness",
        description: "Look for third-party testing (IFOS, USP, ConsumerLab) for purity (heavy metals, PCBs) and freshness (oxidation)."
      },
      {
        icon: CheckCircle2,
        title: "Sustainable sourcing",
        description: "Consider MSC-certified or sustainably sourced fish oil. Algal oil is a plant-based alternative."
      }
    ],
    
    references: [
      {
        authors: "Mozaffarian, D., Wu, J.H.",
        year: "2011",
        title: "Omega-3 fatty acids and cardiovascular disease: effects on risk factors, molecular pathways, and clinical events",
        journal: "Journal of the American College of Cardiology",
        link: "https://doi.org/10.1016/j.jacc.2011.06.063"
      },
      {
        authors: "Bhatt, D.L., Steg, P.G., Miller, M., et al.",
        year: "2019",
        title: "Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia",
        journal: "New England Journal of Medicine",
        link: "https://doi.org/10.1056/NEJMoa1812792"
      },
      {
        authors: "Calder, P.C.",
        year: "2017",
        title: "Omega-3 fatty acids and inflammatory processes: from molecules to man",
        journal: "Biochemical Society Transactions",
        link: "https://doi.org/10.1042/BST20160474"
      },
      {
        authors: "Dyall, S.C.",
        year: "2015",
        title: "Long-chain omega-3 fatty acids and the brain: a review of the independent and shared effects of EPA, DPA and DHA",
        journal: "Frontiers in Aging Neuroscience",
        link: "https://doi.org/10.3389/fnagi.2015.00052"
      },
      {
        authors: "Abdelhamid, A.S., Brown, T.J., Brainard, J.S., et al.",
        year: "2018",
        title: "Omega-3 fatty acids for the primary and secondary prevention of cardiovascular disease",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD003177.pub3"
      },
      {
        authors: "Grosso, G., Pajak, A., Marventano, S., et al.",
        year: "2014",
        title: "Role of omega-3 fatty acids in the treatment of depressive disorders: a comprehensive meta-analysis of randomized clinical trials",
        journal: "PLOS ONE",
        link: "https://doi.org/10.1371/journal.pone.0096905"
      },
      {
        authors: "Middleton, P., Gomersall, J.C., Gould, J.F., Shepherd, E., Olsen, S.F., Makrides, M.",
        year: "2018",
        title: "Omega-3 fatty acid addition during pregnancy",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD003402.pub3"
      },
      {
        authors: "Maki, K.C., Palacios, O.M., Bell, M., Toth, P.P.",
        year: "2017",
        title: "Use of supplemental long-chain omega-3 fatty acids and risk for cardiac death: An updated meta-analysis and review of research gaps",
        journal: "Journal of Clinical Lipidology",
        link: "https://doi.org/10.1016/j.jacl.2017.07.010"
      },
      {
        authors: "Liao, Y., Xie, B., Zhang, H., et al.",
        year: "2019",
        title: "Efficacy of omega-3 PUFAs in depression: A meta-analysis",
        journal: "Translational Psychiatry",
        link: "https://doi.org/10.1038/s41398-019-0515-5"
      },
      {
        authors: "Age-Related Eye Disease Study 2 (AREDS2) Research Group",
        year: "2013",
        title: "Lutein + zeaxanthin and omega-3 fatty acids for age-related macular degeneration: the Age-Related Eye Disease Study 2 (AREDS2) randomized clinical trial",
        journal: "JAMA",
        link: "https://doi.org/10.1001/jama.2013.4997"
      },
      {
        authors: "Manson, J.E., Cook, N.R., Lee, I.M., et al.",
        year: "2019",
        title: "Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer",
        journal: "New England Journal of Medicine",
        link: "https://doi.org/10.1056/NEJMoa1811403"
      }
    ],
    
    furtherReading: [
      {
        title: "Omega-3 Fatty Acids - Health Professional Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/",
        source: "NIH Office of Dietary Supplements"
      },
      {
        title: "Omega-3 Fatty Acids: Benefits and Sources",
        url: "https://www.healthline.com/nutrition/17-health-benefits-of-omega-3",
        source: "Healthline.com"
      },
      {
        title: "Fish Oil Research Analysis",
        url: "https://examine.com/supplements/fish-oil/",
        source: "Examine.com"
      },
      {
        title: "Fish Oil and Omega-3 Supplements Review",
        url: "https://www.consumerlab.com/reviews/fish_oil_supplements_review/omega3/",
        source: "ConsumerLab.com"
      },
      {
        title: "Dr. Rhonda Patrick on Omega-3",
        url: "https://www.foundmyfitness.com/topics/omega-3-fatty-acids",
        source: "FoundMyFitness.com"
      }
    ]
  };

  return (
    <>
      <SEOHead {...getSupplementSEO('Omega-3', benefits, '/omega-3')} structuredData={structuredData} />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}