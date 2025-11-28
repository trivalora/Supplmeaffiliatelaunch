"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

/**
 * StaticPageTemplate
 *
 * A reusable template for static content pages (About, Methodology, Contact, Legal, etc.)
 *
 * Features:
 * - Consistent hero section with optional icon
 * - Flexible content sections with alternating backgrounds
 * - Responsive typography and spacing
 * - SEO metadata support
 * - Dark mode compatible
 *
 * @example
 * // Simple page with hero and single content section
 * <StaticPageTemplate
 *   title="About Us"
 *   description="Learn about our mission"
 *   heroTitle="Our Story"
 *   heroSubtitle="Building the future of supplements"
 * >
 *   <p>Content goes here...</p>
 * </StaticPageTemplate>
 *
 * @example
 * // Page with icon and multiple sections
 * <StaticPageTemplate
 *   title="Privacy Policy"
 *   heroIcon={Shield}
 *   heroTitle="Privacy Policy"
 *   heroSubtitle="Last Updated: Nov 2025"
 * >
 *   <ContentSection title="Introduction">
 *     <p>Privacy content...</p>
 *   </ContentSection>
 *   <ContentSection title="Data Collection" background="secondary">
 *     <p>More content...</p>
 *   </ContentSection>
 * </StaticPageTemplate>
 */

// ============================================================================
// Types
// ============================================================================

interface StaticPageTemplateProps {
  /** SEO: Page title (appears in browser tab and search results) */
  title: string;

  /** SEO: Meta description for search engines */
  description?: string;

  /** SEO: Keywords for search engines */
  keywords?: string;

  /** Hero section title (large heading) */
  heroTitle: string;

  /** Hero section subtitle (optional) */
  heroSubtitle?: string;

  /** Hero section icon (optional - Lucide icon component) */
  heroIcon?: LucideIcon;

  /** Hero background color override (default: 'primary') */
  heroBackground?: "primary" | "secondary" | "tertiary";

  /** Page content - use ContentSection components for structured content */
  children: ReactNode;

  /** Additional className for the main container */
  className?: string;

  /** Show top anchor for legal pages (for "back to top" links) */
  showTopAnchor?: boolean;
}

interface ContentSectionProps {
  /** Section title (h2 heading) */
  title?: string;

  /** Section icon (optional - appears next to title) */
  icon?: LucideIcon;

  /** Background color ('tertiary' = light, 'secondary' = gold/beige) */
  background?: "tertiary" | "secondary" | "transparent";

  /** Section content */
  children: ReactNode;

  /** Additional className */
  className?: string;

  /** Max width constraint ('default' = 7xl, 'narrow' = 800px for reading) */
  maxWidth?: "default" | "narrow";
}

// ============================================================================
// ContentSection Component
// ============================================================================

/**
 * ContentSection
 *
 * A reusable section component for use within StaticPageTemplate.
 * Provides consistent spacing, backgrounds, and typography.
 *
 * @example
 * <ContentSection title="Our Mission" background="tertiary">
 *   <p>Mission statement...</p>
 * </ContentSection>
 *
 * @example
 * <ContentSection icon={Database} title="Data Collection">
 *   <p>Privacy information...</p>
 * </ContentSection>
 */
export function ContentSection({
  title,
  icon: Icon,
  background = "tertiary",
  children,
  className = "",
  maxWidth = "default",
}: ContentSectionProps) {
  const bgClass =
    background === "secondary"
      ? "bg-secondary"
      : background === "tertiary"
      ? "bg-tertiary"
      : "bg-transparent";

  const containerMaxWidth =
    maxWidth === "narrow" ? "max-w-[800px]" : "max-w-7xl";

  return (
    <div className={`w-full ${bgClass}`}>
      <div className={`${containerMaxWidth} mx-auto px-4 md:px-8 py-20`}>
        {title && (
          <div className="mb-12">
            {Icon ? (
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-8 h-8 text-primary" />
                <h2 className="font-['Lora',serif] leading-10 text-primary text-[28px] md:text-[32px]">
                  {title}
                </h2>
              </div>
            ) : (
              <h2 className="font-['Lora',serif] leading-10 text-primary text-[28px] md:text-[32px]">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

// ============================================================================
// StaticPageTemplate Component
// ============================================================================

export function StaticPageTemplate({
  title,
  description,
  keywords,
  heroTitle,
  heroSubtitle,
  heroIcon: HeroIcon,
  heroBackground = "primary",
  children,
  className = "",
  showTopAnchor = false,
}: StaticPageTemplateProps) {
  // Hero background color mapping
  const heroBgClass =
    heroBackground === "secondary"
      ? "bg-secondary"
      : heroBackground === "tertiary"
      ? "bg-tertiary"
      : "bg-primary";

  const heroTextColor =
    heroBackground === "primary" ? "text-tertiary" : "text-primary";
  const heroSubtitleColor =
    heroBackground === "primary" ? "text-secondary" : "text-foreground/80";

  return (
    <div
      className={`bg-tertiary flex flex-col w-full min-h-screen ${className}`}
      data-page-content
    >
      {/* Top Anchor (for legal pages with "back to top" links) */}
      {showTopAnchor && (
        <div
          id="top"
          className="absolute"
          style={{ top: "var(--header-height)" }}
        />
      )}

      {/* Hero Section */}
      <div id="hero" className={heroBgClass}>
        <div className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
          <div className="max-w-[800px] text-center">
            {/* Hero Icon (optional) */}
            {HeroIcon && (
              <div className="flex justify-center mb-6">
                <HeroIcon className={`w-16 h-16 ${heroSubtitleColor}`} />
              </div>
            )}

            {/* Hero Title */}
            <h1
              className={`font-['Lora',serif] text-[32px] md:text-[48px] leading-tight mb-6 ${heroTextColor}`}
            >
              {heroTitle}
            </h1>

            {/* Hero Subtitle (optional) */}
            {heroSubtitle && (
              <p
                className={`text-[18px] md:text-[20px] leading-[32px] ${heroSubtitleColor}`}
              >
                {heroSubtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
}

// ============================================================================
// Utility Components for Common Patterns
// ============================================================================

/**
 * CardContent
 *
 * A card-style content container commonly used in static pages.
 * Use within ContentSection for structured, visually separated content.
 *
 * @example
 * <ContentSection background="tertiary">
 *   <CardContent>
 *     <h3>Section Title</h3>
 *     <p>Section content...</p>
 *   </CardContent>
 * </ContentSection>
 */
export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-card rounded-[14px] border border-secondary p-6 md:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * InfoBlock
 *
 * An icon + content block pattern commonly used in methodology/feature pages.
 *
 * @example
 * <InfoBlock
 *   icon={Database}
 *   title="Data Collection"
 *   description="We collect data from multiple sources..."
 * />
 */
interface InfoBlockProps {
  icon: LucideIcon;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function InfoBlock({
  icon: Icon,
  title,
  description,
  children,
}: InfoBlockProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      {/* Icon Container */}
      <div className="shrink-0 w-full lg:w-[120px] h-[120px] rounded-[14px] bg-primary/10 flex items-center justify-center">
        <Icon className="w-16 h-16 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 w-full bg-card rounded-[14px] border border-secondary p-6">
        <h3 className="font-['Lora',serif] leading-7 text-primary text-[20px] mb-3">
          {title}
        </h3>
        {description && (
          <p className="font-['Lato',sans-serif] font-normal leading-6 text-foreground text-[14px] mb-4">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
