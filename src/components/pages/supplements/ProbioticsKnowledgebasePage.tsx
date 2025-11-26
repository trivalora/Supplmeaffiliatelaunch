'use client';
import { KnowledgebaseTemplate, KnowledgebasePageProps } from '@/components/templates/KnowledgebaseTemplate';
import { 
  Shield, Heart, Activity, Droplet, Brain, TrendingDown,
  FlaskConical, Pill, Users, Zap,
  Clock, CheckCircle2
} from '@/components/iconExports';
import { PageKey } from '@/routes.config';
import { getSupplementImage } from '@/lib/supplementImages';
import { SEOHead, getSupplementSEO } from '@/components/SEOHead';

export function ProbioticsKnowledgebasePage({ 
  onNavigate,
  onContactClick, 
  onLegalClick 
}: { 
  onNavigate?: (page: PageKey) => void;
  onContactClick?: () => void; 
  onLegalClick?: () => void 
}) {
  const benefits = ['digestive health', 'immune support', 'gut microbiome balance', 'IBS symptom relief', 'antibiotic recovery'];
  
  const pageProps: KnowledgebasePageProps = {
    supplementName: "Probiotics",
    currentPage: "probiotics",
    heroDescription: "Evidence-based overview of live beneficial bacteria that support digestive health, immune function, and the gut microbiome balance.",
    heroImageUrl: getSupplementImage('probiotics'),
    
    overviewTitle: "What are Probiotics?",
    overviewContent: (
      <p>
        Probiotics are <span className="font-medium">live microorganisms</span> (primarily bacteria, sometimes yeasts) that, when consumed in adequate amounts, confer a health benefit. The most common probiotic bacteria belong to the <span className="font-medium">Lactobacillus</span> and <span className="font-medium">Bifidobacterium</span> genera.
      </p>
    ),
    dietarySources: [
      {
        icon: Droplet,
        title: "Fermented dairy",
        description: "Yogurt, kefir, some cheeses (with live cultures)"
      },
      {
        icon: Activity,
        title: "Fermented vegetables",
        description: "Sauerkraut, kimchi, pickles (unpasteurized)"
      },
      {
        icon: FlaskConical,
        title: "Supplements",
        description: "Capsules, powders, or liquids containing specific probiotic strains"
      }
    ],
    additionalOverviewContent: (
      <p>
        Probiotics work by colonizing (temporarily or semi-permanently) the gut, competing with harmful bacteria, producing beneficial metabolites, and modulating immune responses. Benefits are strain-specific, meaning effects vary depending on the exact bacterial species and strain.
      </p>
    ),
    
    benefits: [
      {
        icon: Activity,
        title: "Digestive Health",
        description: "Helps restore gut balance after antibiotics, reduces diarrhea, and supports overall digestive function"
      },
      {
        icon: Shield,
        title: "Immune Support",
        description: "Modulates immune response and may reduce frequency of colds and infections"
      },
      {
        icon: TrendingDown,
        title: "IBS Symptom Relief",
        description: "Certain strains reduce bloating, pain, and irregular bowel movements in IBS patients"
      },
      {
        icon: Users,
        title: "Microbiome Balance",
        description: "Helps maintain or restore healthy gut bacterial diversity"
      },
      {
        icon: Brain,
        title: "Mood & Mental Health",
        description: "Emerging evidence for gut-brain axis effects on mood and anxiety"
      }
    ],
    
    drawbacksIntro: "Generally safe for most people, but note:",
    drawbacks: [
      {
        icon: TrendingDown,
        title: "Gas & Bloating",
        description: "Some users experience temporary digestive upset when starting probiotics"
      },
      {
        icon: Pill,
        title: "Strain Specificity",
        description: "Effects are highly strain-specific; not all probiotics work for all conditions"
      },
      {
        icon: Droplet,
        title: "Immunocompromised Risk",
        description: "Rare risk of infection in severely immunocompromised individuals; consult a doctor first"
      },
      {
        icon: Users,
        title: "Temporary Colonization",
        description: "Most probiotics don't permanently colonize the gut; benefits require ongoing supplementation"
      }
    ],
    
    researchGrades: [
      {
        letter: 'A',
        title: "Antibiotic-Associated Diarrhea",
        description: "Strong evidence showing reduced risk and duration of diarrhea when taken with antibiotics.[1] A 2017 Cochrane systematic review[1] of 31 RCTs (n=8,672) found probiotics reduced the risk of antibiotic-associated diarrhea by 60%, with Lactobacillus rhamnosus GG and Saccharomyces boulardii showing particular efficacy."
      },
      {
        letter: 'B',
        title: "IBS Symptom Management",
        description: "Good evidence for certain strains reducing IBS symptoms.[2] A 2020 meta-analysis[2] of 53 RCTs (n=5,545) showed probiotics significantly improved overall IBS symptoms, with Bifidobacterium infantis 35624 and multi-strain combinations showing greatest benefit. Effects on pain, bloating, and bowel habit were moderate."
      },
      {
        letter: 'B',
        title: "Immune Function",
        description: "Moderate evidence for reduced cold/flu incidence and severity.[3] A 2015 Cochrane systematic review[3] of 13 RCTs (n=3,720) found probiotics reduced upper respiratory tract infection episodes by 47% and duration by 1.89 days. Lactobacillus and Bifidobacterium strains were most studied, with benefits strongest in children and adults under stress."
      },
      {
        letter: 'B',
        title: "Acute Infectious Diarrhea",
        description: "Good evidence for reducing duration and severity of acute diarrhea, especially in children.[4] A 2020 meta-analysis[4] of 82 RCTs found probiotics reduced diarrhea duration by approximately 25 hours and stool frequency on day 2 by approximately one stool."
      },
      {
        letter: 'C',
        title: "Mental Health",
        description: "Preliminary promising data for mood and anxiety, but more high-quality studies needed.[5] A 2020 meta-analysis[5] of 10 RCTs (n=1,349) showed modest improvements in depression symptoms, but significant heterogeneity exists and mechanisms remain unclear."
      },
      {
        letter: 'C',
        title: "Ulcerative Colitis",
        description: "Mixed evidence with some strain-specific benefits.[6] A 2020 systematic review[6] found VSL#3 (high-potency multi-strain formula) effective for maintaining remission, but other probiotics showed inconsistent results. More research needed on optimal strains and dosing."
      }
    ],
    
    buyingGuideIntro: "When selecting probiotic supplements:",
    buyingGuideItems: [
      {
        icon: FlaskConical,
        title: "Strain specificity",
        description: "Look for specific strain names (e.g., Lactobacillus rhamnosus GG) not just genus/species. Research your condition to find evidence-based strains."
      },
      {
        icon: Pill,
        title: "CFU count",
        description: "Colony-forming units (CFU) should be guaranteed at expiration, not manufacture. Typical doses: 1-10 billion CFU."
      },
      {
        icon: Shield,
        title: "Stability & storage",
        description: "Check if refrigeration is required. Shelf-stable products are more convenient but verify efficacy data."
      },
      {
        icon: CheckCircle2,
        title: "Third-party testing",
        description: "Choose brands with independent verification (e.g., ConsumerLab, USP) to ensure accurate CFU counts and strain identity."
      }
    ],
    
    references: [
      {
        authors: "Hill, C., Guarner, F., Reid, G., et al.",
        year: "2014",
        title: "Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic",
        journal: "Nature Reviews Gastroenterology & Hepatology",
        link: "https://doi.org/10.1038/nrgastro.2014.66"
      },
      {
        authors: "Suez, J., Zmora, N., Segal, E., Elinav, E.",
        year: "2019",
        title: "The pros, cons, and many unknowns of probiotics",
        journal: "Nature Medicine",
        link: "https://doi.org/10.1038/s41591-019-0439-x"
      },
      {
        authors: "McFarland, L.V., Evans, C.T., Goldstein, E.J.C.",
        year: "2018",
        title: "Strain-Specificity and Disease-Specificity of Probiotic Efficacy: A Systematic Review and Meta-Analysis",
        journal: "Frontiers in Medicine",
        link: "https://doi.org/10.3389/fmed.2018.00124"
      },
      {
        authors: "Dimidi, E., Christodoulides, S., Scott, S.M., Whelan, K.",
        year: "2017",
        title: "Mechanisms of Action of Probiotics and the Gastrointestinal Microbiota on Gut Motility and Constipation",
        journal: "Advances in Nutrition",
        link: "https://doi.org/10.3945/an.116.014407"
      },
      {
        authors: "Goldenberg, J.Z., Yap, C., Lytvyn, L., et al.",
        year: "2017",
        title: "Probiotics for the prevention of Clostridium difficile-associated diarrhea in adults and children",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD006095.pub4"
      },
      {
        authors: "Ford, A.C., Harris, L.A., Lacy, B.E., Quigley, E.M.M., Moayyedi, P.",
        year: "2018",
        title: "Systematic review with meta-analysis: the efficacy of prebiotics, probiotics, synbiotics and antibiotics in irritable bowel syndrome",
        journal: "Alimentary Pharmacology & Therapeutics",
        link: "https://doi.org/10.1111/apt.14907"
      },
      {
        authors: "Hao, Q., Dong, B.R., Wu, T.",
        year: "2015",
        title: "Probiotics for preventing acute upper respiratory tract infections",
        journal: "Cochrane Database of Systematic Reviews",
        link: "https://doi.org/10.1002/14651858.CD006895.pub3"
      },
      {
        authors: "Szajewska, H., Canani, R.B., Guarino, A., et al.",
        year: "2016",
        title: "Probiotics for the Prevention of Antibiotic-Associated Diarrhea in Children",
        journal: "Journal of Pediatric Gastroenterology and Nutrition",
        link: "https://doi.org/10.1097/MPG.0000000000001081"
      },
      {
        authors: "Liu, R.T., Walsh, R.F.L., Sheehan, A.E.",
        year: "2019",
        title: "Prebiotics and probiotics for depression and anxiety: A systematic review and meta-analysis of controlled clinical trials",
        journal: "Neuroscience & Biobehavioral Reviews",
        link: "https://doi.org/10.1016/j.neubiorev.2019.03.023"
      },
      {
        authors: "Kothari, D., Patel, S., Kim, S.K.",
        year: "2019",
        title: "Probiotic supplements might not be universally-effective and safe: A review",
        journal: "Biomedicine & Pharmacotherapy",
        link: "https://doi.org/10.1016/j.biopha.2018.11.047"
      },
      {
        authors: "Didari, T., Mozaffari, S., Nikfar, S., Abdollahi, M.",
        year: "2015",
        title: "Effectiveness of probiotics in irritable bowel syndrome: Updated systematic review with meta-analysis",
        journal: "World Journal of Gastroenterology",
        link: "https://doi.org/10.3748/wjg.v21.i10.3072"
      },
      {
        authors: "Zheng, J., Wittouck, S., Salvetti, E., et al.",
        year: "2020",
        title: "A taxonomic note on the genus Lactobacillus: Description of 23 novel genera, emended description of the genus Lactobacillus Beijerinck 1901",
        journal: "International Journal of Systematic and Evolutionary Microbiology",
        link: "https://doi.org/10.1099/ijsem.0.004107"
      }
    ],
    
    whatToExpectData: {
      disclaimer: "Effects vary by individual. Consult healthcare provider before starting.",
      outcomes: [
        {
          icon: Shield,
          iconLabel: "Antibiotic Diarrhea",
          usage: "1-10B CFU",
          bestTime: "Anytime with food",
          resultsWeeks: "1-2",
          intensity: "High" as const
        },
        {
          icon: Activity,
          iconLabel: "IBS Symptoms",
          usage: "1-10B CFU",
          bestTime: "Anytime with food",
          resultsWeeks: "4-8",
          intensity: "Moderate" as const
        },
        {
          icon: Shield,
          iconLabel: "Immune Function",
          usage: "1-10B CFU",
          bestTime: "Anytime with food",
          resultsWeeks: "3-4",
          intensity: "Moderate" as const
        },
        {
          icon: Activity,
          iconLabel: "Acute Diarrhea",
          usage: "1-10B CFU",
          bestTime: "Anytime with food",
          resultsWeeks: "Less than 1",
          intensity: "Moderate" as const
        }
      ]
    },
    
    furtherReading: [
      {
        title: "Probiotics: What You Need to Know",
        url: "https://www.healthline.com/nutrition/probiotics-101",
        source: "Healthline.com"
      },
      {
        title: "Probiotics Research Analysis",
        url: "https://examine.com/supplements/probiotic/",
        source: "Examine.com"
      },
      {
        title: "Probiotic Supplements Product Review",
        url: "https://www.consumerlab.com/reviews/probiotic-supplements/probiotics/",
        source: "ConsumerLab.com"
      },
      {
        title: "Dr. Rhonda Patrick on Probiotics",
        url: "https://www.foundmyfitness.com/topics/probiotics",
        source: "FoundMyFitness.com"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        {...getSupplementSEO('Probiotics', benefits, '/probiotics')} 
       
      />
      <KnowledgebaseTemplate {...pageProps} />
    </>
  );
}