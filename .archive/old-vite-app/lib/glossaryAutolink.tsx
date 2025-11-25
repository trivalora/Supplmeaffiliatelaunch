import { ReactNode, useMemo } from 'react';
import Link from 'next/link';
import { trackGlossaryLinkClick } from './analytics';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/ui/hover-card';
import { GLOSSARY_DATA } from './glossaryData';

// Define glossary terms with their variations and target keys
interface GlossaryTerm {
  key: string;
  terms: string[]; // All variations that should link to this page
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    key: 'rct',
    terms: ['RCT', 'RCTs', 'randomized controlled trial', 'randomized controlled trials', 'randomised controlled trial', 'randomised controlled trials']
  },
  {
    key: 'metaanalysis',
    terms: ['meta-analysis', 'meta-analyses', 'metaanalysis', 'metaanalyses']
  },
  {
    key: 'empiricalevidence',
    terms: ['empirical evidence', 'empirical data', 'empirical research']
  },
  {
    key: 'anecdotalevidence',
    terms: ['anecdotal evidence', 'anecdotal report', 'anecdotal reports']
  },
  {
    key: 'placebo',
    terms: ['placebo', 'placebos', 'placebo effect', 'placebo-controlled']
  },
  {
    key: 'peerreviewed',
    terms: ['peer-reviewed', 'peer reviewed', 'peer review']
  },
  {
    key: 'statisticalsignificance',
    terms: ['statistical significance', 'statistically significant', 'p-value', 'p value', 'p-values', 'p values']
  },
  {
    key: 'clinicalsignificance',
    terms: ['clinical significance', 'clinically significant', 'clinically meaningful']
  },
  {
    key: 'subgroupanalysis',
    terms: ['subgroup analysis', 'subgroup analyses', 'sub-group analysis', 'sub-group analyses']
  },
  {
    key: 'efficacy',
    terms: ['efficacy', 'efficacious']
  },
  {
    key: 'singleblinded',
    terms: ['single blind', 'single-blind', 'single blinded', 'single-blinded']
  },
  {
    key: 'doubleblinded',
    terms: ['double blind', 'double-blind', 'double blinded', 'double-blinded']
  },
  {
    key: 'bioavailability',
    terms: ['bioavailability', 'bioavailable']
  },
  {
    key: 'inflammation',
    terms: ['inflammation', 'inflammatory', 'anti-inflammatory', 'pro-inflammatory']
  },
  {
    key: 'oxidativestress',
    terms: ['oxidative stress', 'oxidative damage', 'lipid peroxidation']
  },
  {
    key: 'antioxidant',
    terms: ['antioxidant', 'antioxidants']
  },
  {
    key: 'insulinresistance',
    terms: ['insulin resistance', 'insulin resistant', 'insulin sensitivity', 'insulin-resistant']
  },
  {
    key: 'biomarker',
    terms: ['biomarker', 'biomarkers']
  },
  {
    key: 'absorption',
    terms: ['absorption', 'absorb', 'absorbed']
  },
  {
    key: 'metabolism',
    terms: ['metabolism', 'metabolic']
  },
  {
    key: 'cardiovascular',
    terms: ['cardiovascular', 'cardio-vascular']
  },
  {
    key: 'dosedependent',
    terms: ['dose-dependent', 'dose dependent', 'dose-response']
  },
  {
    key: 'homocysteine',
    terms: ['homocysteine', 'hyperhomocysteinemia']
  },
  {
    key: 'bonedensity',
    terms: ['bone density', 'bone mineral density', 'BMD', 'osteoporosis', 'osteopenia']
  },
  {
    key: 'glycemiccontrol',
    terms: ['glycemic control', 'blood sugar control', 'glucose control', 'HbA1c', 'hemoglobin A1C']
  },
  {
    key: 'cognitivefunction',
    terms: ['cognitive function', 'cognitive performance', 'cognition', 'memory', 'executive function']
  },
  {
    key: 'anemia',
    terms: ['anemia', 'anaemia', 'iron deficiency anemia', 'hemoglobin']
  },
  {
    key: 'triglycerides',
    terms: ['triglycerides', 'triglyceride', 'hypertriglyceridemia']
  },
  {
    key: 'collagen',
    terms: ['collagen', 'collagen peptides', 'collagen synthesis']
  },
  {
    key: 'cortisol',
    terms: ['cortisol', 'stress hormone', 'HPA axis']
  },
  {
    key: 'thyroidfunction',
    terms: ['thyroid function', 'thyroid', 'TSH', 'T3', 'T4', 'hypothyroidism', 'hyperthyroidism']
  },
  {
    key: 'gutmicrobiome',
    terms: ['gut microbiome', 'microbiome', 'gut bacteria', 'dysbiosis', 'gut flora']
  },
  {
    key: 'immunesystem',
    terms: ['immune system', 'immune function', 'immunity', 'immune response']
  },
  {
    key: 'muscleproteinsynthesis',
    terms: ['muscle protein synthesis', 'MPS', 'muscle growth']
  },
  {
    key: 'proteinsynthesis',
    terms: ['protein synthesis']
  },
  {
    key: 'neurotransmitter',
    terms: ['neurotransmitter', 'neurotransmitters', 'serotonin', 'dopamine', 'GABA', 'glutamate']
  },
  {
    key: 'electrolytes',
    terms: ['electrolytes', 'electrolyte', 'sodium', 'potassium']
  },
  {
    key: 'jointhealth',
    terms: ['joint health', 'joints', 'cartilage', 'osteoarthritis', 'synovial fluid']
  },
  {
    key: 'sleepquality',
    terms: ['sleep quality', 'sleep', 'insomnia', 'sleep duration']
  },
  {
    key: 'mitochondria',
    terms: ['mitochondria', 'mitochondrial', 'mitochondrial function', 'ATP production']
  },
  {
    key: 'protein',
    terms: ['protein', 'amino acids', 'amino acid']
  },
  {
    key: 'vitamindeficiency',
    terms: ['vitamin deficiency', 'deficiency', 'nutritional deficiency']
  },
  {
    key: 'adaptogen',
    terms: ['adaptogen', 'adaptogens', 'adaptogenic']
  },
  {
    key: 'smd',
    terms: ['SMD', 'standardized mean difference', 'effect size', 'Cohen\'s d']
  },
  {
    key: 'bloodglucose',
    terms: ['blood glucose', 'blood sugar', 'fasting glucose', 'fasting blood sugar']
  },
  {
    key: 'bloodpressure',
    terms: ['blood pressure', 'systolic pressure', 'diastolic pressure', 'hypertension', 'hypotension']
  },
  {
    key: 'epa',
    terms: ['EPA', 'eicosapentaenoic acid']
  },
  {
    key: 'dha',
    terms: ['DHA', 'docosahexaenoic acid']
  },
  {
    key: 'omega-3',
    terms: ['omega-3', 'omega-3 fatty acids', 'omega 3']
  },
  {
    key: 'grade',
    terms: ['GRADE', 'GRADE system', 'GRADE criteria']
  },
  {
    key: 'glucosemetabolism',
    terms: ['glucose metabolism', 'metabolic pathways', 'glycolysis', 'gluconeogenesis']
  },
  {
    key: 'systolic',
    terms: ['systolic', 'systolic pressure', 'systolic blood pressure']
  },
  {
    key: 'diastolic',
    terms: ['diastolic', 'diastolic pressure', 'diastolic blood pressure']
  },
  {
    key: 'normotensive',
    terms: ['normotensive', 'normal blood pressure']
  },
  {
    key: 'hypertensive',
    terms: ['hypertensive', 'hypertension']
  },
  {
    key: 'macromineral',
    terms: ['macromineral', 'macrominerals', 'major mineral', 'major minerals']
  },
  {
    key: 'mineral',
    terms: ['mineral', 'minerals', 'trace mineral', 'trace minerals']
  },
  {
    key: 'pms',
    terms: ['PMS', 'premenstrual syndrome', 'PMDD', 'premenstrual dysphoric disorder']
  },
  {
    key: 'preeclampsia',
    terms: ['pre-eclampsia', 'preeclampsia', 'eclampsia', 'HELLP syndrome']
  },
  {
    key: 'osteoporosis',
    terms: ['osteoporosis', 'osteopenia', 'bone loss', 'low bone mass']
  },
  {
    key: 'hydrolyzed',
    terms: ['hydrolyzed', 'hydrolyzed protein', 'hydrolysis', 'enzymatic hydrolysis', 'protein hydrolysate']
  },
  {
    key: 'glycine',
    terms: ['glycine', 'Gly']
  },
  {
    key: 'proline',
    terms: ['proline', 'Pro']
  },
  {
    key: 'hydroxyproline',
    terms: ['hydroxyproline', 'hydroxylation']
  },
  {
    key: 'anemia',
    terms: ['anemia', 'anaemia', 'iron deficiency anemia', 'hemolytic anemia', 'pernicious anemia']
  },
  {
    key: 'atp',
    terms: ['ATP', 'adenosine triphosphate', 'cellular energy', 'energy currency']
  },
  {
    key: 'pedro',
    terms: ['PEDro', 'PEDro scale', 'PEDro score', 'Physiotherapy Evidence Database']
  },
  {
    key: 'hemoglobin',
    terms: ['hemoglobin', 'haemoglobin', 'Hb', 'Hgb', 'HbA1c', 'glycated hemoglobin']
  },
  {
    key: 'myoglobin',
    terms: ['myoglobin', 'myoglobinuria']
  },
  {
    key: 'rr',
    terms: ['RR', 'risk ratio', 'relative risk']
  },
  {
    key: 'or',
    terms: ['OR', 'odds ratio']
  },
  {
    key: 'fmd',
    terms: ['FMD', 'flow-mediated dilation', 'flow mediated dilation', 'endothelial function']
  },
  {
    key: 'wmd',
    terms: ['WMD', 'weighted mean difference']
  },
  {
    key: 'il6',
    terms: ['IL-6', 'interleukin-6', 'interleukin 6']
  },
  {
    key: 'tac',
    terms: ['TAC', 'total antioxidant capacity']
  },
  {
    key: 'fibrinogen',
    terms: ['fibrinogen', 'hyperfibrinogenemia']
  },
  {
    key: 'il1',
    terms: ['IL-1', 'IL-1β', 'IL-1α', 'interleukin-1', 'interleukin 1']
  },
  {
    key: 'tnfalpha',
    terms: ['TNF-α', 'TNF-alpha', 'tumor necrosis factor', 'tumour necrosis factor']
  },
  {
    key: 'mda',
    terms: ['MDA', 'malondialdehyde', 'lipid peroxidation', 'TBARS']
  },
  {
    key: 'glutathione',
    terms: ['glutathione', 'GSH', 'GSSG', 'reduced glutathione', 'oxidized glutathione']
  },
  {
    key: 'fodmap',
    terms: ['FODMAP', 'FODMAPs', 'fermentable oligosaccharides', 'low FODMAP', 'high FODMAP', 'FODMAP diet']
  },
  {
    key: 'ibs',
    terms: ['IBS', 'irritable bowel syndrome', 'IBS-D', 'IBS-C', 'IBS-M']
  },
  {
    key: 'sibo',
    terms: ['SIBO', 'small intestinal bacterial overgrowth', 'IMO', 'intestinal methanogen overgrowth']
  },
  {
    key: 'gos',
    terms: ['GOS', 'galacto-oligosaccharides', 'galacto-oligosaccharide', 'galactooligosaccharides']
  },
  {
    key: 'inulintypefructans',
    terms: ['inulin', 'fructans', 'inulin-type fructans', 'FOS', 'fructo-oligosaccharides', 'fructooligosaccharides']
  },
  {
    key: 'glp1',
    terms: ['GLP-1', 'glucagon-like peptide-1', 'glucagon like peptide 1', 'incretin']
  },
  {
    key: 'pyy',
    terms: ['PYY', 'peptide YY', 'PYY3-36']
  },
  {
    key: 'arr',
    terms: ['ARR', 'absolute risk reduction', 'absolute risk', 'NNT', 'number needed to treat']
  },
  {
    key: 'ci',
    terms: ['CI', 'confidence interval', 'confidence intervals', '95% CI', '95% confidence interval']
  },
  {
    key: 'ulcerativecolitis',
    terms: ['ulcerative colitis', 'UC']
  },
  {
    key: 'inflammatoryboweldisease',
    terms: ['inflammatory bowel disease', 'IBD', 'Crohn\'s disease', 'Crohn disease']
  },
  {
    key: 'hba1c',
    terms: ['HbA1c', 'A1C', 'hemoglobin A1c', 'glycated hemoglobin', 'glycosylated hemoglobin']
  },
  {
    key: 'crp',
    terms: ['CRP', 'C-reactive protein', 'c reactive protein', 'hs-CRP', 'high-sensitivity CRP']
  },
  {
    key: 'ldlcholesterol',
    terms: ['LDL', 'LDL cholesterol', 'LDL-C', 'low-density lipoprotein', 'bad cholesterol']
  },
  {
    key: 'hdlcholesterol',
    terms: ['HDL', 'HDL cholesterol', 'HDL-C', 'high-density lipoprotein', 'good cholesterol']
  },
  {
    key: 'scfa',
    terms: ['SCFA', 'SCFAs', 'short-chain fatty acids', 'short-chain fatty acid']
  },
  {
    key: 'betacarotene',
    terms: ['beta-carotene', 'beta carotene', 'β-carotene', 'provitamin A']
  },
  {
    key: 'lycopene',
    terms: ['lycopene']
  },
  {
    key: 'oxidizedldl',
    terms: ['oxidized LDL', 'oxLDL', 'oxidised LDL']
  },
  {
    key: 'eightohdg',
    terms: ['8-OHdG', '8-hydroxy-2\'-deoxyguanosine', '8-oxo-dG', '8-oxoguanine']
  },
  {
    key: 'enterocytes',
    terms: ['enterocyte', 'enterocytes', 'intestinal epithelial cells']
  },
  {
    key: 'lipidperoxidation',
    terms: ['lipid peroxidation', 'lipid oxidation', 'peroxidation']
  },
  {
    key: 'hemeiron',
    terms: ['heme iron', 'haem iron']
  },
  {
    key: 'nonhemeiron',
    terms: ['non-heme iron', 'nonheme iron', 'non-haem iron']
  },
  {
    key: 'rickets',
    terms: ['rickets', 'rachitic']
  },
  {
    key: 'osteomalacia',
    terms: ['osteomalacia', 'adult rickets']
  },
  {
    key: 'hyperglycemia',
    terms: ['hyperglycemia', 'hyperglycaemia', 'high blood sugar', 'elevated glucose']
  },
  {
    key: 'prediabetes',
    terms: ['prediabetes', 'pre-diabetes', 'prediabetic', 'impaired glucose tolerance', 'impaired fasting glucose', 'IGT', 'IFG']
  },
  {
    key: 'magnesiumv2',
    terms: ['magnesium', 'magnesium supplement', 'magnesium supplementation', 'Mg']
  },
  {
    key: 'calciumv2',
    terms: ['calcium', 'calcium supplement', 'calcium supplementation', 'Ca']
  },
  {
    key: 'ironv2',
    terms: ['iron supplement', 'iron supplementation', 'Fe supplement']
  },
  {
    key: 'vitamindv2',
    terms: ['vitamin D', 'vitamin D3', 'cholecalciferol', 'vitamin D2', 'ergocalciferol']
  },
  {
    key: 'vitamincv2',
    terms: ['vitamin C', 'ascorbic acid', 'ascorbate']
  },
  {
    key: 'omega3v2',
    terms: ['omega-3 supplement', 'fish oil', 'omega-3 supplementation']
  },
  {
    key: 'probioticsv2',
    terms: ['probiotic', 'probiotics', 'probiotic supplement']
  },
  {
    key: 'prebioticsv2',
    terms: ['prebiotic', 'prebiotics', 'prebiotic fiber']
  },
  {
    key: 'creatinev2',
    terms: ['creatine monohydrate', 'creatine supplement', 'creatine supplementation']
  },
  {
    key: 'ashwagandhav2',
    terms: ['ashwagandha', 'withania somnifera', 'KSM-66']
  },
  {
    key: 'sulforaphanev2',
    terms: ['sulforaphane', 'glucoraphanin']
  },
  {
    key: 'collagenpeptidesv2',
    terms: ['collagen peptide', 'collagen peptides', 'hydrolyzed collagen', 'collagen supplement']
  },
  {
    key: 'bcaasv2',
    terms: ['BCAA', 'BCAAs', 'branched-chain amino acid', 'branched-chain amino acids', 'leucine:isoleucine:valine']
  },
  {
    key: 'curcuminv2',
    terms: ['curcumin', 'curcuminoid', 'curcuminoids', 'turmeric extract']
  }
];

// Define external links (new tab, nofollow, noreferrer)
interface ExternalLink {
  terms: string[];
  url: string;
}

const EXTERNAL_LINKS: ExternalLink[] = [
  {
    terms: ['USP', 'U.S. Pharmacopeia'],
    url: 'https://www.usp.org'
  },
  {
    terms: ['ConsumerLab', 'Consumer Lab'],
    url: 'https://www.consumerlab.com'
  },
  {
    terms: ['NSF', 'NSF International'],
    url: 'https://www.nsf.org'
  }
];

interface Match {
  start: number;
  end: number;
  text: string;
  key: string;
  isExternal?: boolean;
  url?: string;
}

// PERFORMANCE OPTIMIZATION: Cache the regex pattern and lookup maps since they never change
let cachedPattern: RegExp | null = null;
let cachedSortedTerms: string[] | null = null;
let cachedGlossaryTermLookup: Map<string, GlossaryTerm> | null = null;
let cachedExternalLinkLookup: Map<string, ExternalLink> | null = null;

function getOrCreateCachedData(): {
  pattern: RegExp;
  sortedTerms: string[];
  glossaryLookup: Map<string, GlossaryTerm>;
  externalLookup: Map<string, ExternalLink>;
} {
  if (cachedPattern && cachedSortedTerms && cachedGlossaryTermLookup && cachedExternalLinkLookup) {
    return {
      pattern: cachedPattern,
      sortedTerms: cachedSortedTerms,
      glossaryLookup: cachedGlossaryTermLookup,
      externalLookup: cachedExternalLinkLookup
    };
  }

  // Build lookup maps for faster term matching
  const glossaryLookup = new Map<string, GlossaryTerm>();
  GLOSSARY_TERMS.forEach(gt => {
    gt.terms.forEach(term => {
      glossaryLookup.set(term.toLowerCase(), gt);
    });
  });

  const externalLookup = new Map<string, ExternalLink>();
  EXTERNAL_LINKS.forEach(el => {
    el.terms.forEach(term => {
      externalLookup.set(term.toLowerCase(), el);
    });
  });

  // Build a single regex pattern that matches all terms (glossary + external)
  const allGlossaryTerms = GLOSSARY_TERMS.flatMap(gt => gt.terms);
  const allExternalTerms = EXTERNAL_LINKS.flatMap(el => el.terms);
  const allTerms = [...allGlossaryTerms, ...allExternalTerms];

  // Sort by length (longest first) to match longer phrases before shorter ones
  const sortedTerms = [...allTerms].sort((a, b) => b.length - a.length);

  // Escape special regex characters and create pattern
  const escapedTerms = sortedTerms.map(term =>
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );

  // Create regex with word boundaries for whole word matching
  const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

  // Cache for future use
  cachedPattern = pattern;
  cachedSortedTerms = sortedTerms;
  cachedGlossaryTermLookup = glossaryLookup;
  cachedExternalLinkLookup = externalLookup;

  return { pattern, sortedTerms, glossaryLookup, externalLookup };
}

/**
 * Find all matches in the text
 * PERFORMANCE OPTIMIZED: Uses cached regex pattern and lookup maps
 */
function findAllMatches(text: string): Match[] {
  const matches: Match[] = [];

  // Get cached data (pattern + lookup maps)
  const { pattern, glossaryLookup, externalLookup } = getOrCreateCachedData();

  // Reset regex lastIndex to avoid issues with global flag
  pattern.lastIndex = 0;

  let match;
  while ((match = pattern.exec(text)) !== null) {
    const matchedText = match[0];
    const lowerMatchedText = matchedText.toLowerCase();

    // Fast lookup using Map instead of array.find()
    const glossaryTerm = glossaryLookup.get(lowerMatchedText);

    if (glossaryTerm) {
      // Check if this glossary term has any all-caps abbreviation terms
      const abbreviationTerms = glossaryTerm.terms.filter(term =>
        term === term.toUpperCase() &&
        term.length >= 2 &&
        /[A-Z]/.test(term)
      );

      // If this term has abbreviations, check if matched text is one of them (exact case)
      if (abbreviationTerms.length > 0) {
        // Check if matchedText exactly matches one of the abbreviation terms
        const isExactAbbreviationMatch = abbreviationTerms.some(abbr => abbr === matchedText);

        if (!isExactAbbreviationMatch) {
          // This is a case-insensitive match of an abbreviation (e.g., "or" matching "OR")
          // Skip it - we only want exact case matches for abbreviations
          continue;
        }
      }

      // Either not an abbreviation term, or exact case match of abbreviation - create the link
      matches.push({
        start: match.index,
        end: match.index + matchedText.length,
        text: matchedText,
        key: glossaryTerm.key,
        isExternal: false
      });
      continue;
    }

    // Fast lookup for external links
    const externalLink = externalLookup.get(lowerMatchedText);

    if (externalLink) {
      matches.push({
        start: match.index,
        end: match.index + matchedText.length,
        text: matchedText,
        key: '', // No key for external links
        isExternal: true,
        url: externalLink.url
      });
    }
  }

  return matches;
}

/**
 * Merge adjacent matches that link to the same page and are separated by <= 3 characters
 */
function mergeAdjacentMatches(matches: Match[], text: string): Match[] {
  if (matches.length === 0) return matches;

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  const merged: Match[] = [];
  let current = matches[0];

  for (let i = 1; i < matches.length; i++) {
    const next = matches[i];

    // Check if next match is within 3 characters and links to the same page
    const gap = next.start - current.end;
    if (gap <= 3 && gap >= 0 && current.key === next.key) {
      // Merge: extend current to include the gap and next match
      current = {
        start: current.start,
        end: next.end,
        text: text.substring(current.start, next.end),
        key: current.key
      };
    } else {
      // No merge: push current and move to next
      merged.push(current);
      current = next;
    }
  }

  // Push the last match
  merged.push(current);

  return merged;
}

/**
 * Remove overlapping matches (keep the first occurrence)
 */
function removeOverlaps(matches: Match[]): Match[] {
  const result: Match[] = [];
  const usedPositions = new Set<number>();

  for (const match of matches) {
    let hasOverlap = false;
    for (let i = match.start; i < match.end; i++) {
      if (usedPositions.has(i)) {
        hasOverlap = true;
        break;
      }
    }

    if (!hasOverlap) {
      result.push(match);
      for (let i = match.start; i < match.end; i++) {
        usedPositions.add(i);
      }
    }
  }

  return result;
}

/**
 * Automatically link glossary terms in text content
 * @param text The text content to process
 * @param currentPage The current page key (to prevent self-linking)
 * @returns React nodes with autolinked terms
 */
export function autolinkGlossaryTerms(
  text: string,
  currentPage?: string
): ReactNode[] {

  // Find all matches
  let matches = findAllMatches(text);

  // Filter out matches that link to the current page (prevent self-linking)
  if (currentPage) {
    matches = matches.filter(match => match.key !== currentPage);
  }

  // Merge adjacent matches that link to the same page
  matches = mergeAdjacentMatches(matches, text);

  // Remove any overlaps
  matches = removeOverlaps(matches);

  // Sort by start position
  matches.sort((a, b) => a.start - b.start);

  // Build result
  const result: ReactNode[] = [];
  let lastIndex = 0;

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];

    // Add text before the match
    if (match.start > lastIndex) {
      result.push(text.substring(lastIndex, match.start));
    }

    // Add the linked term (external or internal)
    if (match.isExternal && match.url) {
      // External link
      result.push(
        <a
          key={`external-link-${match.start}-${i}`}
          href={match.url}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-primary underline decoration-1 underline-offset-2 hover:text-primary/80 transition-colors"
          title={`Visit ${match.text}`}
        >
          {match.text}
        </a>
      );
    } else {
      // Internal glossary link with hover card
      const glossaryData = GLOSSARY_DATA[match.key];

      if (glossaryData) {
        result.push(
          <HoverCard key={`glossary-link-${match.start}-${i}`} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Link
                href={`/glossary/${match.key}`}
                onClick={() => {
                  try { trackGlossaryLinkClick(match.key, window.location.pathname); } catch { }
                }}
                className="text-primary underline decoration-1 underline-offset-2 hover:text-primary/80 transition-colors cursor-pointer"
              >
                {match.text}
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-card border-2 border-secondary shadow-lg" side="top" align="start">
              <Link href={`/glossary/${match.key}`}>
                <div
                  className="space-y-2 cursor-pointer"
                  onClick={() => {
                    try { trackGlossaryLinkClick(match.key, window.location.pathname); } catch { }
                  }}
                >
                  <div>
                    <h4 className="font-medium text-primary">{glossaryData.title}</h4>
                    {glossaryData.abbreviation && (
                      <p className="text-sm text-muted-foreground">({glossaryData.abbreviation})</p>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed">{glossaryData.summary}</p>
                  <p className="text-xs text-muted-foreground italic">Click to learn more</p>
                </div>
              </Link>
            </HoverCardContent>
          </HoverCard>
        );
      } else {
        // Fallback if no data found
        result.push(
          <Link
            key={`glossary-link-${match.start}-${i}`}
            href={`/glossary/${match.key}`}
            className="text-primary underline decoration-1 underline-offset-2 hover:text-primary/80 transition-colors"
            title={`Learn more about ${match.text}`}
          >
            {match.text}
          </Link>
        );
      }
    }

    lastIndex = match.end;
  }

  // Add any remaining text
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result.length > 0 ? result : [text];
}

/**
 * Process text content that may contain line breaks
 */
export function autolinkGlossaryContent(
  content: string,
  currentPage?: string
): ReactNode {
  const lines = content.split('\n');

  return lines.map((line, index) => (
    <span key={`line-${index}`}>
      {autolinkGlossaryTerms(line, currentPage)}
      {index < lines.length - 1 && <br />}
    </span>
  ));
}

/**
 * MEMOIZED VERSION: Hook to automatically link glossary terms with caching
 * Use this in components to prevent re-processing on every render
 * @param text The text content to process
 * @param currentPage The current page key (to prevent self-linking)
 * @returns Memoized React nodes with autolinked terms
 */
export function useAutolinkGlossaryTerms(
  text: string,
  currentPage?: string
): ReactNode[] {
  return useMemo(() => {
    return autolinkGlossaryTerms(text, currentPage);
  }, [text, currentPage]);
}

/**
 * MEMOIZED VERSION: Hook to automatically link glossary content with caching
 * Use this in components to prevent re-processing on every render
 * @param content The content to process
 * @param currentPage The current page key
 * @returns Memoized React nodes with autolinked terms
 */
export function useAutolinkGlossaryContent(
  content: string,
  currentPage?: string
): ReactNode {
  return useMemo(() => {
    return autolinkGlossaryContent(content, currentPage);
  }, [content, currentPage]);
}