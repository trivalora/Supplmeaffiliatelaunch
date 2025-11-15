import { ReactNode, useState, Fragment, useMemo, useCallback, useEffect } from 'react';
import { LucideIcon, ChevronDown, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ResponsivePicture } from './ResponsivePicture';
import { WhatToExpectSection } from './WhatToExpectSection';
import imgAmazonButton from "figma:asset/2f3309a930da536601e44619e42e44f89c102eb7.png";
import IHerbBadgeLogoRgb from '../imports/IHerbBadgeLogoRgb1-106-1526';
import { autolinkGlossaryTerms } from '../utils/glossaryAutolink';
import { getProductsBySupplementName, type ProductData } from '../utils/supplementProductsData';
import { SmartImage } from './SmartImage';
import { useAffiliateTooltip, AffiliateTooltip } from './AffiliateTooltip';
import {
  trackAffiliateClick,
  trackProductClick,
  trackOutboundLink,
  trackAccordionToggle,
  trackSupplementView,
  trackCertificationClick,
  trackRetailerClick
} from '../utils/analytics';
import { trackSupplementSection } from '../utils/analytics';
import { useSupplementTracking, useProductTracking } from '../hooks/useAnalytics';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Formats supplement name for display (capitalizes properly)
 */
function formatSupplementName(name: string): string {
  // Handle special cases
  const specialCases: Record<string, string> = {
    'vitamind': 'Vitamin D',
    'vitaminc': 'Vitamin C',
    'omega3': 'Omega-3',
    'multivitamin': 'Multivitamin',
    'ashwagandha': 'Ashwagandha',
    'calcium': 'Calcium',
    'creatine': 'Creatine',
    'iron': 'Iron',
    'magnesium': 'Magnesium',
    'sulforaphane': 'Sulforaphane',
    'collagenpeptides': 'Collagen Peptides',
    'probiotics': 'Probiotics',
    'prebiotics': 'Prebiotics',
    'bcaas': 'BCAA',
    'bcaa': 'BCAA'
  };

  const normalized = name.toLowerCase();
  return specialCases[normalized] || name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Component to display a single footnote with hover card
 * Supports both hover (desktop) and click/touch (mobile) interactions
 */
function FootnotePopup({
  refNumber,
  reference
}: {
  refNumber: string;
  reference?: Reference;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!reference) {
    return <span className="footnote-link">[{refNumber}]</span>;
  }

  return (
    <HoverCard
      openDelay={200}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <HoverCardTrigger asChild>
        <a
          href={`#ref-${refNumber}`}
          onClick={(e) => {
            e.preventDefault();
            // Toggle on click for mobile/touch devices
            setIsOpen(!isOpen);
          }}
          className="footnote-link cursor-help"
          aria-label={`Reference ${refNumber}: ${reference.authors}`}
        >
          [{refNumber}]
        </a>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-96 max-w-[90vw] bg-card border border-border p-4"
        side="top"
        align="start"
        onPointerDownOutside={() => setIsOpen(false)}
        onEscapeKeyDown={() => setIsOpen(false)}
      >
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            [{refNumber}] {reference.authors} ({reference.year})
          </p>
          <p className="text-sm text-foreground">
            {reference.title}
          </p>
          <p className="text-xs text-muted-foreground italic">
            {reference.journal}
          </p>
          {reference.link && (
            <a
              href={reference.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View source <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

/**
 * Converts footnote references in text to interactive hover cards
 * Works with both plain strings and ReactNode arrays from autolinkGlossaryTerms
 * Example: "A 2021 meta-analysis [1][4][7]" becomes hoverable footnotes with reference details
 */
function formatFootnotes(
  content: ReactNode[] | string,
  references?: Reference[]
): ReactNode {
  // Helper function to convert a footnote string to hover cards
  const convertFootnoteToPopup = (footnoteStr: string, keyPrefix: string | number) => {
    // Extract individual footnote numbers: "[1][4][7]" -> ["1", "4", "7"]
    const numbers = footnoteStr.match(/\d+/g) || [];

    return numbers.map((num, idx) => {
      const refIndex = parseInt(num) - 1;
      const reference = references?.[refIndex];

      return (
        <Fragment key={`${keyPrefix}-${idx}`}>
          <FootnotePopup refNumber={num} reference={reference} />
        </Fragment>
      );
    });
  };

  // If it's already an array (from autolinkGlossaryTerms), process each element
  if (Array.isArray(content)) {
    return content.map((node, index) => {
      if (typeof node === 'string') {
        // Process string parts for footnotes
        const parts = node.split(/(\[\d+\](?:\[\d+\])*)/g);
        return parts.map((part, partIndex) => {
          if (/^\[\d+\](?:\[\d+\])*$/.test(part)) {
            return <sup key={`${index}-${partIndex}`}>{convertFootnoteToPopup(part, `${index}-${partIndex}`)}</sup>;
          }
          return <Fragment key={`${index}-${partIndex}`}>{part}</Fragment>;
        });
      }
      // Return non-string nodes as-is (e.g., glossary links)
      return node;
    });
  }

  // If it's a string, split by footnote references
  const parts = content.split(/(\[\d+\](?:\[\d+\])*)/g);

  return parts.map((part, index) => {
    // Check if this part is a footnote reference
    if (/^\[\d+\](?:\[\d+\])*$/.test(part)) {
      return <sup key={index}>{convertFootnoteToPopup(part, index)}</sup>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}

// ========================================
// TYPE DEFINITIONS
// ========================================

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DrawbackItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DietarySource {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ResearchGrade {
  letter: 'A' | 'B' | 'C' | 'D';
  title: string;
  subtitle?: string;
  description: string;
}



export interface BuyingGuideItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Reference {
  authors: string;
  year: string;
  title: string;
  journal: string;
  link?: string;
}

export interface FurtherReadingLink {
  title: string;
  url: string;
  source: string;
}

export interface WhatToExpectOutcome {
  icon: LucideIcon | 'happy' | 'performance';
  iconLabel: string;
  usage: string;
  bestTime: string;
  resultsWeeks: string;
  intensity: 'Low' | 'Low to Moderate' | 'Moderate' | 'Moderate to High' | 'High';
}

export interface WhatToExpectData {
  disclaimer?: string;
  signsOfEffectiveness?: string;
  outcomes: WhatToExpectOutcome[];
}

export interface KnowledgebasePageProps {
  // Hero Section
  supplementName: string;
  heroDescription: string;
  heroImageUrl?: string;
  heroImageComponent?: ReactNode;

  // Overview Section
  overviewTitle?: string;
  overviewContent: ReactNode;
  dietarySources?: DietarySource[];
  additionalOverviewContent?: ReactNode;

  // Benefits & Drawbacks
  benefits: BenefitItem[];
  drawbacks: DrawbackItem[];
  drawbacksIntro?: string;

  // Research Section
  researchGrades?: ResearchGrade[];

  // What to Expect (visual section - V2 pages)
  whatToExpectData?: WhatToExpectData;

  // Buying Guide
  buyingGuideItems?: BuyingGuideItem[];
  buyingGuideIntro?: string;

  // References
  references?: Reference[];

  // Further Reading
  furtherReading?: FurtherReadingLink[];

  // Navigation
  onNavigate?: (page: string) => void;
  currentPage?: string; // To avoid self-linking on glossary pages
}

// ========================================
// HERO SECTION COMPONENTS
// ========================================

function HeroLeftPanel({ supplementName, heroDescription }: { supplementName: string; heroDescription: string }) {
  return (
    <div className="flex-1 flex items-center justify-center px-6 pt-8 pb-12 md:px-16 md:py-0 h-auto md:h-full" style={{ backgroundColor: '#162F1C' }}>
      <div data-knowledgebase-hero-text className="max-w-[600px]">
        <h1 className="mb-6" style={{ color: '#F7F7F3' }}>
          {supplementName}
        </h1>
        <p style={{ color: '#F7F7F3' }}>
          {heroDescription}
        </p>
      </div>
    </div>
  );
}

function HeroRightPanel({ heroImageUrl, heroImageComponent, supplementName }: { heroImageUrl?: string; heroImageComponent?: ReactNode; supplementName: string }) {
  // Preload hero AVIF sources for LCP if we can derive the base filename
  useEffect(() => {
    if (!heroImageUrl) return;
    try {
      const last = heroImageUrl.split('?')[0].split('/').pop() || '';
      // Remove any Vite hash suffix (e.g., name-abc123.png)
      const noSuffix = last.replace(/-[A-Za-z0-9_~.-]+\.(png|jpe?g)$/i, '.$1');
      const base = noSuffix.replace(/\.(png|jpe?g)$/i, '');
      if (!base) return;
      const id = `preload-kb-hero-${base}`;
      if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'preload';
        link.as = 'image';
        link.setAttribute('imagesrcset', `/optimized/${base}-640.avif 640w, /optimized/${base}-1280.avif 1280w, /optimized/${base}-1920.avif 1920w`);
        link.setAttribute('imagesizes', '(min-width: 1024px) 50vw, 100vw');
        (link as any).fetchPriority = 'high';
        document.head.appendChild(link);
      }
      return () => {
        const el = document.getElementById(id);
        if (el) el.remove();
      };
    } catch { }
  }, [heroImageUrl]);
  return (
    <div className="flex-1 relative overflow-hidden h-[40vh] md:h-full">
      {heroImageComponent ? (
        <div className="w-full h-full flex items-center justify-center p-8 bg-[rgba(0,0,0,0)]">
          {heroImageComponent}
        </div>
      ) : heroImageUrl ? (
        // Prefer optimized responsive images when we can derive the asset filename
        (() => {
          try {
            const baseFile = heroImageUrl.split('?')[0].split('/').pop();
            if (baseFile && baseFile.includes('.')) {
              return (
                <ResponsivePicture
                  file={baseFile}
                  alt={supplementName}
                  fallbackSrc={heroImageUrl}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  imgProps={{ className: 'w-full h-full object-cover', loading: 'eager', decoding: 'async', fetchPriority: 'high' as any }}
                  style={{ width: '100%', height: '100%' }}
                />
              );
            }
          } catch { }
          // Fallback if we cannot compute an asset filename
          return (
            <ImageWithFallback
              src={heroImageUrl}
              alt={supplementName}
              className="w-full h-full object-cover"
            />
          );
        })()
      ) : null}
    </div>
  );
}

function HeroSection({ supplementName, heroDescription, heroImageUrl, heroImageComponent }: Pick<KnowledgebasePageProps, 'supplementName' | 'heroDescription' | 'heroImageUrl' | 'heroImageComponent'>) {
  return (
    <div id="hero" data-knowledgebase-hero className="h-auto md:h-[clamp(400px,50vh,600px)] w-full flex flex-col-reverse md:flex-row">
      <HeroLeftPanel supplementName={supplementName} heroDescription={heroDescription} />
      <HeroRightPanel heroImageUrl={heroImageUrl} heroImageComponent={heroImageComponent} supplementName={supplementName} />
    </div>
  );
}

// ========================================
// OVERVIEW SECTION
// ========================================

function OverviewSection({
  overviewTitle = "What is this supplement?",
  overviewContent,
  dietarySources,
  additionalOverviewContent
}: Pick<KnowledgebasePageProps, 'overviewTitle' | 'overviewContent' | 'dietarySources' | 'additionalOverviewContent'>) {
  return (
    <div data-knowledgebase-card-info className="bg-card rounded-[14px] border border-border p-8">
      <h2 className="text-primary mb-6">{overviewTitle}</h2>

      <div data-knowledgebase-content-text className="space-y-4">
        <div className="text-foreground leading-[28px]">
          {overviewContent}
        </div>

        {dietarySources && dietarySources.length > 0 && (
          <div className="bg-tertiary rounded-[8px] p-6 space-y-4">
            <div>
              <h3 className="text-primary mb-3">Main Dietary Sources:</h3>
              <div className="space-y-3">
                {dietarySources.map((source, index) => {
                  const IconComponent = source.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="text-foreground mb-1">
                          <span className="font-medium">{source.title}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {source.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {additionalOverviewContent && (
          <div className="text-foreground leading-[28px]">
            {additionalOverviewContent}
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// BENEFITS & DRAWBACKS SECTION
// ========================================

function BenefitsDrawbacksSection({
  benefits,
  drawbacks,
  drawbacksIntro,
  onNavigate,
  currentPage
}: Pick<KnowledgebasePageProps, 'benefits' | 'drawbacks' | 'drawbacksIntro' | 'onNavigate' | 'currentPage'>) {
  // Create a stable navigation handler using useCallback
  const handleGlossaryNavigate = useCallback((glossaryKey: string) => {
    // Don't navigate if we're already on this glossary page
    if (currentPage === glossaryKey || !onNavigate) return;
    onNavigate(glossaryKey);
  }, [currentPage, onNavigate]);

  const shouldUseAutolink = onNavigate && currentPage && !currentPage.startsWith('glossary-');

  // PERFORMANCE FIX: Memoize autolinked content for benefits
  // Process all benefits at once, not in a loop with hooks
  const linkedBenefits = useMemo(() => {
    return benefits.map(benefit =>
      autolinkGlossaryTerms(benefit.description, shouldUseAutolink ? handleGlossaryNavigate : undefined, currentPage)
    );
  }, [benefits, shouldUseAutolink, handleGlossaryNavigate, currentPage]);

  // PERFORMANCE FIX: Memoize autolinked drawbacks intro
  const linkedDrawbacksIntro = useMemo(() => {
    return autolinkGlossaryTerms(
      drawbacksIntro || '',
      shouldUseAutolink ? handleGlossaryNavigate : undefined,
      currentPage
    );
  }, [drawbacksIntro, shouldUseAutolink, handleGlossaryNavigate, currentPage]);

  // PERFORMANCE FIX: Memoize autolinked content for drawbacks
  const linkedDrawbacks = useMemo(() => {
    return drawbacks.map(drawback =>
      autolinkGlossaryTerms(drawback.description, shouldUseAutolink ? handleGlossaryNavigate : undefined, currentPage)
    );
  }, [drawbacks, shouldUseAutolink, handleGlossaryNavigate, currentPage]);

  return (
    <div className="space-y-6">
      {/* Benefits */}
      <div data-knowledgebase-card-benefits className="bg-benefit-b rounded-[14px] border border-benefit-b-accent p-8">
        <h2 className="text-primary mb-6">Main Benefits</h2>
        <div data-knowledgebase-content-list className="space-y-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} data-knowledgebase-icon-list-item className="flex items-start gap-3">
                <IconComponent className="w-5 h-5 text-benefit-b-accent shrink-0" />
                <div>
                  <p className="text-foreground">
                    <span className="font-medium">{benefit.title}:</span>{' '}
                    {shouldUseAutolink ? linkedBenefits[index] : benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Drawbacks */}
      <div data-knowledgebase-card-drawbacks className="bg-warning rounded-[14px] border border-warning-accent p-8">
        <h2 className="text-primary mb-6">Main Drawbacks</h2>
        {drawbacksIntro && (
          <p className="text-foreground leading-[28px] mb-4">
            {shouldUseAutolink ? linkedDrawbacksIntro : drawbacksIntro}
          </p>
        )}
        <div data-knowledgebase-content-list className="space-y-4">
          {drawbacks.map((drawback, index) => {
            const IconComponent = drawback.icon;
            return (
              <div key={index} data-knowledgebase-icon-list-item className="flex items-start gap-3">
                <IconComponent className="w-5 h-5 text-warning-accent shrink-0" />
                <div>
                  <p className="text-foreground">
                    <span className="font-medium">{drawback.title}:</span>{' '}
                    {shouldUseAutolink ? linkedDrawbacks[index] : drawback.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ========================================
// RESEARCH SECTION (Optional)
// ========================================

function ResearchSection({
  researchGrades,
  onNavigate,
  currentPage,
  references
}: Pick<KnowledgebasePageProps, 'researchGrades' | 'onNavigate' | 'currentPage' | 'references'>) {
  if (!researchGrades) return null;

  // Create a stable navigation handler using useCallback
  const handleGlossaryNavigate = useCallback((glossaryKey: string) => {
    // Don't navigate if we're already on this glossary page
    if (currentPage === glossaryKey || !onNavigate) return;
    onNavigate(glossaryKey);
  }, [currentPage, onNavigate]);

  const shouldUseAutolink = onNavigate && currentPage && !currentPage.startsWith('glossary-');

  // PERFORMANCE FIX: Memoize autolinked grade descriptions
  // Process all grades at once, not in a loop with hooks
  const linkedGradeDescriptions = useMemo(() => {
    return researchGrades.map(grade =>
      autolinkGlossaryTerms(grade.description, shouldUseAutolink ? handleGlossaryNavigate : undefined, currentPage)
    );
  }, [researchGrades, shouldUseAutolink, handleGlossaryNavigate, currentPage]);

  const getGradeColor = (letter: 'A' | 'B' | 'C' | 'D') => {
    switch (letter) {
      case 'A': return 'bg-benefit text-benefit-accent';
      case 'B': return 'bg-benefit-b text-benefit-b-accent';
      case 'C': return 'bg-warning text-warning-accent';
      case 'D': return 'bg-[#FFEBEE] text-[#C62828]';
    }
  };

  return (
    <div data-knowledgebase-research>
      {/* Heading - matches Main Drawbacks heading style */}
      <h2 className="text-primary mb-6" data-knowledgebase-research-heading>Research Summary</h2>

      {/* Research Grade Cards */}
      {researchGrades && researchGrades.length > 0 && (
        <div data-knowledgebase-research-grid className="grid gap-4 md:grid-cols-2">
          {researchGrades.map((grade, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-[14px] p-8 flex flex-col gap-3 overflow-hidden"
            >
              {/* Badge and Title Container */}
              <div className="flex items-start gap-4">
                {/* Grade Badge - Large for all cards */}
                <div
                  className={`w-[80px] h-[79px] rounded-[24px] flex items-center justify-center shrink-0 ${getGradeColor(grade.letter)}`}
                >
                  <span>
                    {grade.letter}
                  </span>
                </div>

                {/* Title - Aligned with badge, fixed height for consistency, LARGER font sizes */}
                <div className="flex-1 wrap-break-word flex items-center" style={{ height: '79px' }}>
                  <h3
                    className="text-primary leading-tight"
                    style={{
                      fontSize: grade.title.length > 50 ? '1.15rem' : grade.title.length > 35 ? '1.3rem' : '1.45rem'
                    }}
                  >
                    {grade.title}
                  </h3>
                </div>
              </div>

              {/* Subtitle - Fixed 12px for all, only decrease if doesn't fit */}
              {grade.subtitle && (
                <p
                  className="text-muted-foreground"
                  style={{
                    fontSize: grade.subtitle.length > 55 ? '0.7rem' : '0.75rem', // 12px default, 11.2px if too long
                    lineHeight: '1.4',
                    marginTop: '0',
                    marginBottom: '0.25rem',
                  }}
                >
                  {grade.subtitle}
                </p>
              )}

              {/* Spacing placeholder when no subtitle - CORRECTED HEIGHT to match subtitle vertical space */}
              {!grade.subtitle && (
                <div style={{ height: '0.8rem' }}></div>
              )}

              {/* Description */}
              <p className="text-muted-foreground wrap-break-word">
                {shouldUseAutolink
                  ? formatFootnotes(linkedGradeDescriptions[index], references)
                  : formatFootnotes(grade.description, references)
                }
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}



// ========================================
// BUYING GUIDE SECTION (Optional)
// ========================================

function BuyingGuideSection({
  buyingGuideItems,
  buyingGuideIntro
}: Pick<KnowledgebasePageProps, 'buyingGuideItems' | 'buyingGuideIntro'>) {
  if (!buyingGuideItems || buyingGuideItems.length === 0) return null;

  // Helper function to parse description text and convert certification names to links with tracking
  const renderDescriptionWithLinks = (description: string | ReactNode) => {
    // If description is not a string (already processed as ReactNode), return as-is
    if (typeof description !== 'string') {
      return description;
    }

    // Define certification links
    const certificationLinks: { [key: string]: string } = {
      'USP': 'https://www.usp.org/',
      'ConsumerLab': 'https://www.consumerlab.com/',
      'NSF': 'https://www.nsf.org/'
    };

    // Split by certification names while preserving the names
    const parts = description.split(/(\bUSP\b|\bConsumerLab\b|\bNSF\b)/g);

    return (
      <>
        {parts.map((part, index) => {
          if (certificationLinks[part]) {
            return (
              <a
                key={index}
                href={certificationLinks[part]}
                target="_blank"
                rel="nofollow noreferrer"
                className="text-primary hover:underline"
                onClick={() => {
                  trackOutboundLink(
                    certificationLinks[part],
                    part,
                    'certification',
                    'buying_guide'
                  );
                  try { trackCertificationClick(part as any, 'buying_guide'); } catch { }
                }}
              >
                {part}
              </a>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <div data-section className="bg-card border border-border rounded-[14px] p-8">
      <h2 className="text-primary mb-6 text-center">What to Look for When Buying</h2>
      {buyingGuideIntro && (
        <p className="text-foreground leading-[28px] mb-6">
          {buyingGuideIntro}
        </p>
      )}
      <div className="space-y-4">
        {buyingGuideItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <IconComponent className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-foreground mb-1">
                  <span className="font-medium">{item.title}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {renderDescriptionWithLinks(item.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ========================================
// REFERENCES SECTION (Optional)
// ========================================

function ReferencesSection({ references }: Pick<KnowledgebasePageProps, 'references'>) {
  if (!references || references.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-[14px] p-8">
      <h2 className="text-primary mb-6">Key References</h2>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div
            key={index}
            id={`ref-${index + 1}`}
            className="pb-4 border-b border-border last:border-b-0 last:pb-0 transition-all duration-300"
          >
            <p className="text-sm text-muted-foreground mb-1">
              <span className="font-medium">[{index + 1}]</span> {ref.authors} ({ref.year})
            </p>
            {ref.link ? (
              <a
                href={ref.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <p className="mb-1 hover:underline">{ref.title}</p>
              </a>
            ) : (
              <p className="text-foreground mb-1">{ref.title}</p>
            )}
            <p className="text-sm text-muted-foreground italic">
              {ref.journal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// FURTHER READING SECTION (Optional)
// ========================================

function FurtherReadingSection({ furtherReading }: Pick<KnowledgebasePageProps, 'furtherReading'>) {
  const [isOpen, setIsOpen] = useState(false);

  if (!furtherReading || furtherReading.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-[14px] p-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full flex items-center justify-between hover:text-primary transition-colors">
          <h2 className="text-primary">Further Reading</h2>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-6">
          <div className="space-y-3">
            {furtherReading.map((link, index) => (
              <div key={index} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
                <a
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <p className="hover:underline mb-1">{link.title}</p>
                </a>
                <p className="text-sm text-muted-foreground">
                  {link.source}
                </p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

// ========================================
// PRODUCT COMPARISON SECTION
// ========================================

// NOTE: ProductData interface and getProductsBySupplementName() are imported from '../utils/supplementProductsData'

function AffiliateButtons({
  amazonLink,
  iherbLink,
  iherbUnavailable,
  supplementName,
  productName,
  brand
}: {
  amazonLink: string;
  iherbLink?: string;
  iherbUnavailable?: boolean;
  supplementName: string;
  productName: string;
  brand: string;
}) {
  const tooltipHandlers = useAffiliateTooltip();

  const handleAmazonClick = () => {
    trackAffiliateClick('Amazon', supplementName, 'product_card');
    trackRetailerClick('Amazon', supplementName, 'bottom');
    trackProductClick(productName, brand, 'Amazon', supplementName, 0, 'comparison');
  };

  const handleIHerbClick = () => {
    trackAffiliateClick('iHerb', supplementName, 'product_card');
    trackRetailerClick('iHerb', supplementName, 'bottom');
    trackProductClick(productName, brand, 'iHerb', supplementName, 0, 'comparison');
  };

  return (
    <div className="flex gap-2">
      <a
        href={amazonLink}
        target="_blank"
        rel="nofollow noopener noreferrer"
        data-button-height="md"
        className="flex-1 bg-black rounded-lg overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center px-3"
        {...tooltipHandlers}
        onClick={handleAmazonClick}
      >
        <img
          src={imgAmazonButton}
          alt="Amazon"
          className="h-5 w-auto object-contain rounded-[14px]"
        />
      </a>
      {(iherbUnavailable || !iherbLink) ? (
        <div
          data-button-height="md"
          className="flex-1 px-3 rounded-lg flex items-center justify-center bg-tertiary border border-secondary opacity-50 cursor-not-allowed relative group"
        >
          <div className="h-6 w-6 opacity-50">
            <IHerbBadgeLogoRgb />
          </div>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Currently Unavailable
          </span>
        </div>
      ) : (
        <a
          href={iherbLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          data-button-height="md"
          className="flex-1 px-3 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center bg-tertiary border border-secondary"
          {...tooltipHandlers}
          onClick={handleIHerbClick}
        >
          <div className="h-6 w-6">
            <IHerbBadgeLogoRgb />
          </div>
        </a>
      )}
      <button
        data-button-height="md"
        className="flex-1 px-3 rounded-lg cursor-not-allowed relative group text-center bg-tertiary text-muted-foreground border border-secondary opacity-70 text-sm flex items-center justify-center"
        disabled
      >
        Compare All
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Coming Soon
        </span>
      </button>
    </div>
  );
}

function ProductComparisonSection({ supplementName }: { supplementName: string }) {
  const supplements = getProductsBySupplementName(supplementName);
  const { handleProductImpression } = useProductTracking(supplementName);

  // Track product impressions when component mounts
  useMemo(() => {
    if (supplements.length > 0) {
      const productData = supplements.map((product, index) => ({
        name: product.name,
        brand: product.brand,
        retailer: 'Multiple',
        position: index + 1,
      }));
      handleProductImpression(productData, 'bottom');
    }
  }, [supplements, handleProductImpression]);

  // Build description from structured fields with type labels
  const getDescriptionLines = (product: ProductData): Array<{ text: string; type: 'content' | 'weight' | 'flavor' | 'dietary' | 'extraNotice' }> => {
    const lines: Array<{ text: string; type: 'content' | 'weight' | 'flavor' | 'dietary' | 'extraNotice' }> = [];

    // Content (if available)
    if (product.content) {
      lines.push({ text: product.content, type: 'content' });
    }

    // Weight (if separate from content)
    if (product.weight) {
      lines.push({ text: product.weight, type: 'weight' });
    }

    // Flavor (if any)
    if (product.flavor) {
      lines.push({ text: `Flavor: ${product.flavor}`, type: 'flavor' });
    }

    // Extra Notice (e.g., "USP Grade", "Micronized", "100% Chelated")
    if (product.extraNotice) {
      lines.push({ text: product.extraNotice, type: 'extraNotice' });
    }

    // Dietary Info (if any)
    if (product.dietaryInfo) {
      lines.push({ text: product.dietaryInfo, type: 'dietary' });
    }

    return lines;
  };

  return (
    <div className="bg-tertiary py-8">
      <div data-section className="max-w-7xl mx-auto px-6">
        <h2 className="text-primary mb-6 text-center">Recommended {formatSupplementName(supplementName)} Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplements.map((product, index) => {
            const descriptionLines = getDescriptionLines(product);

            return (
              <div key={index} className="bg-tertiary rounded-lg border border-secondary overflow-hidden flex flex-col p-4">
                <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-3 relative" style={{ height: '25vh' }}>
                  {/* Badges positioned at top of image container */}
                  {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                      {product.badges.map((badge, badgeIdx) => (
                        <span
                          key={badgeIdx}
                          className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-medium bg-primary text-white whitespace-nowrap"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <SmartImage
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    widthHint={360}
                    widths={[240, 360, 480, 640]}
                    sizes="(min-width:1280px) 22vw, (min-width:1024px) 30vw, 90vw"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="text-xs uppercase tracking-wide text-fourth mb-1">{product.brand}</div>
                    <h3 className="text-primary" style={{ minHeight: '3.15rem' }}>{product.name}</h3>
                  </div>

                  <div className="text-sm text-foreground mb-3 flex-1">
                    {descriptionLines.map((line, idx) => (
                      <div
                        key={idx}
                        className={
                          line.type === 'content' ? 'mb-1' :
                            line.type === 'weight' ? 'mb-1' :
                              line.type === 'flavor' ? 'text-muted-foreground mb-1' :
                                line.type === 'dietary' ? 'text-muted-foreground' :
                                  line.type === 'extraNotice' ? 'text-muted-foreground' :
                                    ''
                        }
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>

                  <div className="text-sm mb-4">
                    {product.pricePerUnit && (
                      <div className="text-muted-foreground">from {product.pricePerUnit}</div>
                    )}
                    <div className="font-medium">{product.pricePerBottle} per bottle</div>
                  </div>

                  <AffiliateButtons
                    amazonLink={product.amazonLink}
                    iherbLink={product.iherbLink}
                    iherbUnavailable={product.iherbUnavailable}
                    supplementName={supplementName}
                    productName={product.name}
                    brand={product.brand}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-background rounded-lg border border-secondary">
          <p className="text-sm text-muted-foreground">
            <strong>Affiliate Disclosure:</strong> We earn from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// MAIN TEMPLATE COMPONENT
// ========================================

export function KnowledgebaseTemplate(props: KnowledgebasePageProps) {
  // Fire supplement_view on mount
  useEffect(() => {
    try { trackSupplementView(props.supplementName); } catch { }
  }, [props.supplementName]);

  // Section view tracking (supplement_section_view)
  useEffect(() => {
    const supplement = props.supplementName;
    if (!supplement) return;
    const observedSections = new Set<string>();
    const sectionSelectors = [
      '[data-knowledgebase-card-info]',
      '[data-knowledgebase-card-benefits]',
      '[data-knowledgebase-card-drawbacks]',
      '[data-knowledgebase-research]',
      '#hero',
      '[data-section]'
    ];
    const elements: Array<HTMLElement> = [];
    sectionSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el instanceof HTMLElement) elements.push(el);
      });
    });
    if (!elements.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const label = el.getAttribute('data-knowledgebase-research-heading') ? 'Research Summary' :
            el.id === 'hero' ? 'Hero' :
              el.getAttribute('data-knowledgebase-card-info') !== null ? 'Overview' :
                el.getAttribute('data-knowledgebase-card-benefits') !== null ? 'Benefits' :
                  el.getAttribute('data-knowledgebase-card-drawbacks') !== null ? 'Drawbacks' :
                    el.getAttribute('data-section') ? 'Section' : 'Unknown';
          if (!observedSections.has(label)) {
            observedSections.add(label);
            try { trackSupplementSection(supplement, label); } catch { }
          }
        }
      });
    }, { threshold: 0.35 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [props.supplementName]);

  return (
    <div className="bg-background flex flex-col w-full min-h-screen" data-page-content>
      {/* Anchor for "top" navigation */}
      <div id="top" className="absolute" style={{ top: 'var(--header-height)' }}></div>

      {/* Hero */}
      <HeroSection
        supplementName={props.supplementName}
        heroDescription={props.heroDescription}
        heroImageUrl={props.heroImageUrl}
        heroImageComponent={props.heroImageComponent}
      />

      {/* Main Content Container */}
      <div className="px-6 py-8 max-w-7xl mx-auto w-full">

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

          {/* Left Column - Main Content (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8 order-1">
            {/* Overview */}
            <OverviewSection
              overviewTitle={props.overviewTitle}
              overviewContent={props.overviewContent}
              dietarySources={props.dietarySources}
              additionalOverviewContent={props.additionalOverviewContent}
            />

            {/* Benefits & Drawbacks - Mobile Only (shown after Overview on mobile) */}
            <div className="lg:hidden">
              <BenefitsDrawbacksSection
                benefits={props.benefits}
                drawbacks={props.drawbacks}
                drawbacksIntro={props.drawbacksIntro}
                onNavigate={props.onNavigate}
                currentPage={props.currentPage}
              />
            </div>

            {/* Research Summary - In left column */}
            {props.researchGrades && (
              <ResearchSection
                researchGrades={props.researchGrades}
                onNavigate={props.onNavigate}
                currentPage={props.currentPage}
                references={props.references}
              />
            )}
          </div>

          {/* Right Column - Sidebar (1/3 width on desktop) - Desktop Only */}
          <div className="lg:col-span-1 order-2 hidden lg:block">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+1rem)]">
              <BenefitsDrawbacksSection
                benefits={props.benefits}
                drawbacks={props.drawbacks}
                drawbacksIntro={props.drawbacksIntro}
                onNavigate={props.onNavigate}
                currentPage={props.currentPage}
              />
            </div>
          </div>

        </div>
      </div>

      {/* What to Expect (V2 pages) - Full Width */}
      {props.whatToExpectData && (
        <div className="bg-tertiary py-8">
          <div className="max-w-7xl mx-auto px-6">
            <WhatToExpectSection whatToExpectData={props.whatToExpectData} />
          </div>
        </div>
      )}

      {/* Buying Guide - Full Width */}
      {props.buyingGuideItems && (
        <div className="bg-tertiary py-8">
          <div className="max-w-7xl mx-auto px-6">
            <BuyingGuideSection
              buyingGuideItems={props.buyingGuideItems}
              buyingGuideIntro={props.buyingGuideIntro}
            />
          </div>
        </div>
      )}

      {/* Product Comparison - Full Width */}
      <ProductComparisonSection supplementName={props.supplementName} />

      {/* References and Further Reading - Consistent padding */}
      <div className="px-6 py-8 max-w-7xl mx-auto w-full">
        {/* References */}
        {props.references && (
          <div className="mb-8">
            <ReferencesSection references={props.references} />
          </div>
        )}

        {/* Further Reading */}
        {props.furtherReading && (
          <FurtherReadingSection furtherReading={props.furtherReading} />
        )}
      </div>

      {/* Global affiliate tooltip */}
      <AffiliateTooltip />
    </div>
  );
}

// Re-export the product data function for backward compatibility
export { getProductsBySupplementName } from '../utils/supplementProductsData';