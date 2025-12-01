"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "@/components/ui/input";
import { SearchResults } from "@/components/shared/content/SearchResults";
import {
  MobileSearchSheet,
  useMobileSearch,
} from "@/components/shared/ui-extensions/MobileSearchSheet";
import { useIsMobile } from "@/hooks";
import {
  useAffiliateTooltip,
  AffiliateTooltip,
} from "@/components/shared/ui-extensions/AffiliateTooltip";
import { WaitlistSignup } from "@/components/shared/WaitlistSignup";
import IHerbBadgeLogoRgb from "@/imports/IHerbBadgeLogoRgb1-106-1526";
import { HeroImage, SectionImage, ProductImage } from "@/components/images";

import { PageKey } from "@/routes.config";
import {
  trackCTAClick,
  trackRetailerClick,
  trackAffiliateClick,
} from "@/lib/analytics";
import { getProductsBySupplementName } from "@/components/templates/KnowledgebaseTemplate";

interface LandingPageProps {
  onNavigate: (page: PageKey) => void;
}

// ========================================
// HERO SECTION
// ========================================

function SearchBar({
  onNavigate,
  searchQuery,
  setSearchQuery,
  inputRef,
}: {
  onNavigate: (page: PageKey) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const mobileSearch = useMobileSearch();

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    setSearchQuery("");
    setShowResults(false);
  };

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mobile: Show fake input that opens bottom sheet
  if (isMobile) {
    return (
      <>
        <div className="relative w-full max-w-2xl mx-auto px-[1vw] md:px-0">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10 pointer-events-none" />
            <button
              onClick={() => mobileSearch.open()}
              className="mobile-search-input-trigger"
              aria-label="Open search"
            >
              Search for supplements to compare prices...
            </button>
          </div>
        </div>

        <MobileSearchSheet
          isOpen={mobileSearch.isOpen}
          onClose={mobileSearch.close}
          onNavigate={handleNavigate}
          placeholder="Search for supplements to compare prices..."
          context="landing"
        />
      </>
    );
  }

  // Desktop: Keep existing inline search
  return (
    <div
      ref={searchRef}
      className="relative w-full max-w-2xl mx-auto px-[1vw] md:px-0"
    >
      <div className="relative">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for supplements to compare prices..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          className="hero-search-input"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setShowResults(false);
            }}
            className="absolute right-3 md:right-5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {showResults && searchQuery.trim() && (
          <div className="hero-search-dropdown">
            <SearchResults
              query={searchQuery}
              onNavigate={handleNavigate}
              context="landing"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function HeroSection({
  onNavigate,
  searchInputRef,
}: {
  onNavigate: (page: PageKey) => void;
  searchInputRef?: React.RefObject<HTMLInputElement>;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Preload the hero AVIF sources for tighter LCP
  useEffect(() => {
    const id = "preload-hero-adaa5958";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "preload";
      link.as = "image";
      // Match HeroImage widths: 640, 1280, 1920, 2560
      link.setAttribute(
        "imagesrcset",
        "/optimized/adaa5958638ef58a10a2b5b182d161d011abc01a-640.avif 640w, /optimized/adaa5958638ef58a10a2b5b182d161d011abc01a-1280.avif 1280w, /optimized/adaa5958638ef58a10a2b5b182d161d011abc01a-1920.avif 1920w, /optimized/adaa5958638ef58a10a2b5b182d161d011abc01a-2560.avif 2560w"
      );
      link.setAttribute("imagesizes", "100vw");
      // Hint high priority
      (link as any).fetchPriority = "high";
      document.head.appendChild(link);
    }
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return (
    <div id="hero" className="hero-section flex items-center justify-center">
      {/* Background Image - Full viewport width */}
      <HeroImage
        file="adaa5958638ef58a10a2b5b182d161d011abc01a.png"
        alt="Natural supplement ingredients - herbs, roots, and botanicals for evidence-based health"
        objectPosition="center"
        widths={[640, 1280, 1920, 2560]}
      />

      {/* Gradient Overlays - Multiple layers for rich depth */}
      <div className="absolute inset-0">
        {/* Layer 1: Base gradient from Figma */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(42,38,34,0.65), rgba(58,54,50,0.6) 50%, rgba(58,54,50,0.7))",
          }}
        />

        {/* Layer 2: Radial gradient from Figma */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(42,38,34,0.3) 100%)",
          }}
        />

        {/* Layer 3: Additional green overlay - Always primary color regardless of theme */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "var(--primary)",
            opacity: 0.35,
          }}
        />
      </div>

      <div className="relative z-10 w-full px-[2vw] md:px-[var(--page-padding-inline)]">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-4 text-white text-4xl md:text-5xl">
            Your evidence-backed supplement stack for less.
            <br />
            <span style={{ color: "var(--secondary)" }}>In seconds.</span>
          </h1>

          <p className="mb-6 text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Find the most efficacious stack for your goals because we show price
            per mg of active ingredient and link every claim to sources.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 rounded-xl p-1.5 inline-flex gap-2 backdrop-blur-sm">
              <div className="bg-secondary text-foreground px-5 py-2.5 rounded-lg shadow-lg text-sm">
                Price Comparison
              </div>
              <div className="text-white/40 px-5 py-2.5 rounded-lg cursor-not-allowed relative group text-sm">
                Health Goals
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          <SearchBar
            onNavigate={onNavigate}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            inputRef={searchInputRef}
          />

          <button
            onClick={() => {
              if (searchQuery.trim()) {
                trackCTAClick("Compare Prices", "hero", "/compare", "button");
              } else {
                trackCTAClick("Compare Prices", "hero", "/compare", "button");
              }
            }}
            className="mt-5 px-8 py-3 rounded-2xl transition-all shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer text-sm"
          >
            Compare Prices
          </button>

          <div className="mt-4">
            <button
              onClick={() => {
                trackCTAClick(
                  "Learn Methodology",
                  "hero",
                  "/methodology",
                  "link"
                );
                onNavigate("methodology");
              }}
              className="text-white/60 hover:text-white text-sm transition-colors underline decoration-white/40 hover:decoration-white"
            >
              Learn about our research methodology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// WHY TRUST US SECTION
// ========================================
function WhyTrustUsSection({
  onNavigate,
}: {
  onNavigate: (page: PageKey) => void;
}) {
  return (
    <section
      data-layout-section
      style={{ backgroundColor: "var(--section-bg-tertiary)" }}
    >
      <div data-layout-container>
        <div data-grid="2col" className="items-stretch gap-8">
          {/* Image - Cropped at sides to match height of mission section */}
          <div className="order-2 md:order-1 overflow-hidden rounded-2xl shadow-lg">
            <SectionImage
              file="f69f346bde9ce1223aa8e8e9265be307b22261e4.png"
              alt="Crystal clear water flowing - transparent supplement research and evidence-based recommendations"
              objectFit="cover"
              objectPosition="center"
              transform="scale(1.3)"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 flex flex-col">
            {/* Text content that aligns with image */}
            <div data-stack="lg" className="flex-1">
              <div>
                <h2>Why Trust Us?</h2>
              </div>

              <div data-stack="sm">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>Evidence you can verify</h3>
                    <p>
                      Every pick cites clinical research in plain English. See
                      our methodology, evidence grades, and dosing ranges on
                      each page.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>Transparent by design</h3>
                    <p>
                      Prices are normalized for the amount of active ingredient.
                      Value you can directly compare.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>On your side, not for sale</h3>
                    <p>
                      We earn via affiliate links when you buy through us—never
                      from paid placements. Affiliate payouts never affect
                      default rankings. If two options tie, we show both.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>Safety comes first</h3>
                    <p>
                      Clear safety notes and interactions, with sources, so you
                      can decide confidently (and loop in your clinician if
                      needed).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons below */}
            <div
              className="flex gap-4 flex-wrap"
              style={{ marginTop: "var(--space-xl)" }}
            >
              <button
                onClick={() => {
                  trackCTAClick(
                    "Learn Process",
                    "why_trust_us",
                    "/methodology",
                    "button"
                  );
                  onNavigate("methodology");
                }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Learn More About Our Process
              </button>
              <button
                onClick={() => {
                  trackCTAClick(
                    "View Research",
                    "why_trust_us",
                    "/knowledgebase",
                    "button"
                  );
                  onNavigate("knowledgebase");
                }}
                className="bg-card border-2 border-secondary text-primary px-6 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                View Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// OUR MISSION SECTION
// ========================================
function OurMissionSection({
  onNavigate,
}: {
  onNavigate: (page: PageKey) => void;
}) {
  return (
    <section
      data-layout-section
      style={{ backgroundColor: "var(--section-bg-secondary)" }}
    >
      <div data-layout-container>
        <div data-grid="2col" className="items-stretch gap-8">
          {/* Content */}
          <div className="flex flex-col">
            {/* Text content that aligns with image */}
            <div data-stack="lg" className="flex-1">
              <div>
                <h2>Our Mission</h2>
                <p>
                  Your evidence-backed supplement stack for less. In seconds.
                </p>
              </div>

              <div data-stack="sm">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>Science, made usable</h3>
                    <p>
                      No hype. Just evidence‑backed picks with dosing guidance
                      you can act on in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>Fair price discovery</h3>
                    <p>
                      Find the lowest verified total price for what meets your
                      criteria—no junk fees, no guesswork.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <Check className="w-6 h-6 text-primary stroke-3" />
                  </div>
                  <div>
                    <h3>Independent, always</h3>
                    <p>
                      No brand endorsements. No paid placement. Clear affiliate
                      disclosure on every merchant button.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons below */}
            <div
              className="flex gap-4 flex-wrap"
              style={{ marginTop: "var(--space-xl)" }}
            >
              <button
                onClick={() => {
                  trackCTAClick(
                    "Read Our Story",
                    "mission",
                    "/about",
                    "button"
                  );
                  onNavigate("about");
                }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Read Our Story
              </button>
              <button
                onClick={() => {
                  trackCTAClick(
                    "Our Team",
                    "mission",
                    "/about#meet-our-founders",
                    "button"
                  );
                  onNavigate("about");
                  setTimeout(() => {
                    const element =
                      document.getElementById("meet-our-founders");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }, 300);
                }}
                className="bg-card border-2 border-secondary text-primary px-6 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                Our Team
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <SectionImage
              file="4bdf2cba5e05e7d70b9f1402336825a64b04e236.png"
              alt="Lush green forest from above - natural, science-backed supplement recommendations"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// POPULAR COMPARISONS SECTION
// ========================================
function AffiliateButtonsLP({
  amazonLink,
  iherbLink,
  supplementName,
  onNavigate,
}: {
  amazonLink: string;
  iherbLink: string;
  supplementName: string;
  onNavigate: (page: PageKey) => void;
}) {
  const tooltipHandlers = useAffiliateTooltip();

  // Map supplement names to comparison page keys
  const getComparisonPageKey = (name: string): PageKey => {
    const mapping: Record<string, string> = {
      multivitamin: "multivitamin-comparison",
      "vitamin d": "vitamin-d-comparison",
      "omega-3": "omega-3-comparison",
      creatine: "creatine-comparison",
      magnesium: "magnesium-comparison",
      "vitamin c": "vitamin-c-comparison",
      calcium: "calcium-comparison",
      iron: "iron-comparison",
      probiotics: "probiotics-comparison",
      whey: "whey-comparison",
      casein: "casein-comparison",
      collagen: "collagen-comparison",
      ashwagandha: "ashwagandha-comparison",
      curcumin: "curcumin-comparison",
      bcaas: "bcaas-comparison",
      prebiotics: "prebiotics-comparison",
      sulforaphane: "sulforaphane-comparison",
    };
    return (mapping[name.toLowerCase()] ||
      "multivitamin-comparison") as PageKey;
  };

  return (
    <div className="flex gap-2 w-full">
      <a
        href={amazonLink}
        target="_blank"
        rel="nofollow noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          trackAffiliateClick("Amazon", "landing", "product_card");
          trackRetailerClick("Amazon", "landing", "hero");
        }}
        data-button-height="md"
        className="flex-1 bg-black rounded-lg overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center px-4"
        {...tooltipHandlers}
      >
        <img
          src="/optimized/2f3309a930da536601e44619e42e44f89c102eb7-256.webp"
          alt="Amazon"
          className="h-5 w-auto object-contain rounded-[14px]"
        />
      </a>
      <a
        href={iherbLink}
        target="_blank"
        rel="nofollow noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          trackAffiliateClick("iHerb", "landing", "product_card");
          trackRetailerClick("iHerb", "landing", "hero");
        }}
        data-button-height="md"
        className="flex-1 px-4 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center bg-tertiary border border-secondary"
        {...tooltipHandlers}
      >
        <div className="h-6 w-6">
          <IHerbBadgeLogoRgb />
        </div>
      </a>
      <button
        data-button-height="md"
        className="flex-1 px-4 rounded-lg transition-opacity hover:opacity-90 text-center bg-tertiary border border-secondary text-sm flex items-center justify-center whitespace-nowrap font-medium"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(getComparisonPageKey(supplementName));
        }}
      >
        Compare All
      </button>
    </div>
  );
}

function PopularComparisonsSection({
  onNavigate,
}: {
  onNavigate: (page: PageKey) => void;
}) {
  // Get products from the shared data source (selecting one product from each category)
  const supplements = [
    {
      ...getProductsBySupplementName("multivitamin")[1], // Life Extension Two-Per-Day
      supplementName: "multivitamin",
      onClick: () => onNavigate("multivitamin" as PageKey),
    },
    {
      ...getProductsBySupplementName("vitamin d")[1], // California Gold Nutrition Vitamin D3
      supplementName: "vitamin d",
      onClick: () => onNavigate("vitamind" as PageKey),
    },
    {
      ...getProductsBySupplementName("omega-3")[1], // California Gold Nutrition Omega-3
      supplementName: "omega-3",
      onClick: () => onNavigate("omega3" as PageKey),
    },
    {
      ...getProductsBySupplementName("creatine")[1], // California Gold Nutrition Creatine
      supplementName: "creatine",
      onClick: () => onNavigate("creatine" as PageKey),
    },
    {
      ...getProductsBySupplementName("magnesium")[1], // Doctor's Best Magnesium
      supplementName: "magnesium",
      onClick: () => onNavigate("magnesium" as PageKey),
    },
    {
      ...getProductsBySupplementName("vitamin c")[1], // California Gold Nutrition Vitamin C
      supplementName: "vitamin c",
      onClick: () => onNavigate("vitaminc" as PageKey),
    },
  ];

  // Helper function to structure product description lines consistently
  const getDescriptionLines = (product: any) => {
    const lines: Array<{ text: string; type: string }> = [];

    // Content (e.g., "180 Capsules (2250 mg/cap)")
    if (product.content) {
      lines.push({ text: product.content, type: "content" });
    }

    // Weight (e.g., "2 lb (908 g)")
    if (product.weight) {
      lines.push({ text: product.weight, type: "weight" });
    }

    // Flavor (e.g., "Flavor: Vanilla")
    if (product.flavor) {
      lines.push({ text: `Flavor: ${product.flavor}`, type: "flavor" });
    }

    // Extra Notice (e.g., "USP Grade", "Micronized", "100% Chelated")
    if (product.extraNotice) {
      lines.push({ text: product.extraNotice, type: "extraNotice" });
    }

    // Dietary Info (if any)
    if (product.dietaryInfo) {
      lines.push({ text: product.dietaryInfo, type: "dietary" });
    }

    return lines;
  };

  return (
    <section
      data-layout-section
      style={{ backgroundColor: "var(--section-bg-tertiary)" }}
    >
      <div data-layout-container>
        <div className="text-center mb-12">
          <h2 className="mb-4">Popular Supplements</h2>
          <p>See how different brands stack up on price and quality</p>
        </div>

        <div data-grid="3col">
          {supplements.map((supplement, index) => {
            const descriptionLines = getDescriptionLines(supplement);

            return (
              <div
                key={index}
                onClick={supplement.onClick}
                className="bg-tertiary rounded-lg border border-secondary overflow-hidden cursor-pointer transition-shadow flex flex-col p-4"
                data-product-card
              >
                <div
                  className="bg-white rounded-lg p-4 mb-3"
                  style={{ height: "25vh" }}
                >
                  <ProductImage
                    src={supplement.image}
                    alt={`${supplement.name} by ${supplement.brand} - price comparison and reviews`}
                    widths={[240, 360, 480, 640]}
                    sizes="240px"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="text-xs uppercase tracking-wide text-fourth mb-1">
                      {supplement.brand}
                    </div>
                    <h3
                      className="text-primary"
                      style={{ minHeight: "3.15rem" }}
                    >
                      {supplement.name}
                    </h3>
                  </div>

                  <div className="text-sm text-foreground mb-3 flex-1">
                    {descriptionLines.map((line, idx) => (
                      <div
                        key={idx}
                        className={
                          line.type === "content"
                            ? "mb-1"
                            : line.type === "weight"
                            ? "mb-1"
                            : line.type === "flavor"
                            ? "text-muted-foreground mb-1"
                            : line.type === "dietary"
                            ? "text-muted-foreground"
                            : line.type === "extraNotice"
                            ? "text-muted-foreground"
                            : ""
                        }
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>

                  <div className="text-sm mb-4">
                    {supplement.pricePerUnit && (
                      <div className="text-muted-foreground">
                        from {supplement.pricePerUnit}
                      </div>
                    )}
                    <div className="font-medium">
                      {supplement.pricePerBottle} per bottle
                    </div>
                  </div>

                  <AffiliateButtonsLP
                    amazonLink={supplement.amazonLink}
                    iherbLink={supplement.iherbLink}
                    supplementName={supplement.supplementName}
                    onNavigate={onNavigate}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// CTA SECTION
// ========================================
function CTASection({ onScrollToSearch }: { onScrollToSearch?: () => void }) {
  return (
    <section
      data-layout-section
      style={{ backgroundColor: "var(--primary)", color: "#ffffff" }}
    >
      <div data-layout-container className="text-center">
        <h2 className="mb-4">Start making better supplement decisions</h2>
        <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#E0CBA8" }}>
          Join thousands of people who trust science-backed recommendations and
          transparent pricing.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => {
              trackCTAClick("Compare Prices Now", "cta", "/#hero", "button");
              onScrollToSearch && onScrollToSearch();
            }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
          >
            Compare Prices Now
          </button>
          <button className="bg-white/10 border-2 border-white/30 text-white/40 px-8 py-4 rounded-xl cursor-not-allowed relative group">
            Browse Health Goals
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-foreground px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Coming Soon
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ========================================
// NEWSLETTER SECTION
// ========================================
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const resp = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing_newsletter" }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || data?.ok === false) {
        throw new Error(data?.error || "Subscription failed");
      }
      setStatus("success");
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="newsletter"
      data-layout-section
      style={{ backgroundColor: "var(--section-bg-secondary)" }}
    >
      <div data-layout-container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="mb-2">Stay informed</h2>
            <p className="mb-2">
              Sign-up for your newsletter of curated news from the world of
              supplements
            </p>
            <p className="text-sm">No marketing emails—max 1/week. Promised.</p>
          </div>

          <div className="w-full md:w-auto md:min-w-[400px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") {
                      setStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  disabled={status === "loading" || status === "success"}
                  className="flex-1"
                  aria-label="Email address"
                  autoComplete="email"
                  inputMode="email"
                  enterKeyHint="send"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading"
                    ? "Subscribing..."
                    : status === "success"
                    ? "Subscribed!"
                    : "Subscribe"}
                </button>
              </div>

              <div aria-live="polite" aria-atomic="true">
                <AnimatePresence mode="wait">
                  {status === "error" && errorMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-600"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-green-700"
                    >
                      ✓ Thanks for subscribing! Check your inbox to confirm.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// MAIN LANDING PAGE
// ========================================
export function LandingPage(props: LandingPageProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleScrollToSearch = () => {
    // Scroll to hero section
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Focus the search input after scroll animation
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 500);
  };

  return (
    <>
      {/* Hero section - Full viewport width, breaks out of main container */}
      <HeroSection
        onNavigate={props.onNavigate}
        searchInputRef={searchInputRef}
      />

      {/* Main content sections */}
      <WhyTrustUsSection onNavigate={props.onNavigate} />
      <OurMissionSection onNavigate={props.onNavigate} />
      <PopularComparisonsSection onNavigate={props.onNavigate} />
      <CTASection onScrollToSearch={handleScrollToSearch} />
      <NewsletterSection />

      {/* Waitlist Section */}
      <WaitlistSignup
        title="Get Early Access to New Features"
        subtitle="We're building personalized supplement tracking, smart refill reminders, and more. Join the waitlist to be first in line."
        buttonText="Join the Waitlist"
        interest="early_access"
        className="bg-muted/30"
      />

      {/* Global affiliate tooltip */}
      <AffiliateTooltip />
    </>
  );
}
