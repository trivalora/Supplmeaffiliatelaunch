'use client';

import { ReactNode, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionImage } from './images';
import { WhatToExpectSection } from './WhatToExpectSection';
import { AffiliateTooltip } from './AffiliateTooltip';
import { trackSupplementView, trackSupplementSection } from '../lib/analytics';

// Import all extracted sections
import {
  BenefitsDrawbacksSection,
  ResearchSection,
  BuyingGuideSection,
  ReferencesSection,
  ProductComparisonSection,
  OverviewSection,
  FurtherReadingSection
} from './knowledgebase';

// Re-export types for backward compatibility
export type {
  BenefitItem,
  DrawbackItem,
  ResearchGrade,
  BuyingGuideItem,
  Reference,
  FurtherReadingLink,
  WhatToExpectData,
  DietarySource
} from './knowledgebase';

// Additional type definitions specific to this template
export interface WhatToExpectOutcome {
  icon: LucideIcon | 'happy' | 'performance';
  iconLabel: string;
  usage: string;
  bestTime: string;
  resultsWeeks: string;
  intensity: 'Low' | 'Low to Moderate' | 'Moderate' | 'Moderate to High' | 'High';
  signsOfEffectiveness?: string;
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
  dietarySources?: any[];
  additionalOverviewContent?: ReactNode;

  // Benefits & Drawbacks
  benefits: any[];
  drawbacks: any[];
  drawbacksIntro?: string;

  // Research Section
  researchGrades?: any[];

  // What to Expect (visual section - V2 pages)
  whatToExpectData?: any;

  // Buying Guide
  buyingGuideItems?: any[];
  buyingGuideIntro?: string;

  // References
  references?: any[];

  // Further Reading
  furtherReading?: any[];

  // Current Page (for glossary self-linking prevention)
  currentPage?: string;
}

// ========================================
// HERO SECTION COMPONENTS
// ========================================

function HeroLeftPanel({ supplementName, heroDescription }: { supplementName: string; heroDescription: string }) {
  return (
    <div className="flex-1 flex items-center justify-center h-auto md:h-full" style={{ backgroundColor: '#162F1C', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
      <div data-knowledgebase-hero-text>
        <h1 style={{ color: '#F7F7F3' }}>
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
      const baseFile = heroImageUrl.split('?')[0].split('/').pop() || '';
      if (!baseFile) return;
      // Strip extension to get base hash
      const base = baseFile.replace(/\.(png|jpe?g)$/i, '');
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
    <div className="flex-1 relative h-[40vh] md:h-full">
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
              // The baseFile is already clean (e.g., "hash.png")
              return (
                <SectionImage
                  file={baseFile}
                  alt={supplementName}
                  objectFit="cover"
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
                currentPage={props.currentPage}
              />
            </div>

            {/* Research Summary - In left column */}
            {props.researchGrades && (
              <ResearchSection
                researchGrades={props.researchGrades}
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

// Re-export for external use
export { getProductsBySupplementName } from '../lib/supplementProductsData';
