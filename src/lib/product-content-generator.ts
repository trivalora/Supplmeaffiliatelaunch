/**
 * Dynamic Product Content Generator
 *
 * Generates unique, SEO-friendly content for each product page by combining:
 * 1. Product-specific data (dosage, form, brand, filters)
 * 2. Supplement-level context (from product-context-data.ts)
 * 3. Template variations (randomized based on product ID for consistency)
 *
 * This ensures each product page has unique text while maintaining accuracy.
 * Target: 400+ words per paragraph for substantial, SEO-friendly content.
 */

import {
  getSupplementContext,
  type SupplementProductContext,
} from "./product-context-data";

/**
 * Map API supplement data to SupplementProductContext format
 * This allows using database data with the content generator
 */
export function mapApiSupplementToContext(
  apiData: any
): SupplementProductContext | null {
  if (!apiData) return null;

  return {
    slug: apiData.slug,
    name: apiData.name || apiData.display_name,
    quickOverview: apiData.quick_overview || "",
    extendedOverview: apiData.extended_overview,
    scienceSnapshot: apiData.science_snapshot,
    keyBenefits: apiData.key_benefits || [],
    typicalDosageRange: {
      min: apiData.typical_dosage_min || 0,
      max: apiData.typical_dosage_max || 0,
      unit: apiData.typical_dosage_unit || "mg",
    },
    idealFor: apiData.ideal_for || [],
    formNotes: apiData.form_notes || {},
    timingTips: apiData.timing_tips || [],
    whatToExpect: apiData.what_to_expect || {
      primaryOutcome: {
        label: "General Support",
        timeframe: "4-8 weeks",
        intensity: "Moderate",
      },
    },
    whatToExpectSummary: apiData.what_to_expect_summary,
    qualityMarkers: apiData.quality_markers || [],
    safetyConsiderations: apiData.safety_considerations,
    synergyNotes: apiData.synergy_notes,
  };
}

/**
 * Extended paragraph templates - combine multiple data points for 400+ word paragraphs
 * Each template creates substantial, unique content by weaving together context data
 */
const EXTENDED_OVERVIEW_TEMPLATES = [
  (
    ctx: SupplementProductContext,
    brand: string,
    dosage: string,
    form: string | null,
    benefits: string[]
  ) =>
    `${brand} presents this carefully formulated ${ctx.name.toLowerCase()} supplement, delivering ${dosage} per serving to support your health and wellness goals. ${
      ctx.quickOverview
    } ${ctx.extendedOverview || ""} ${
      ctx.name
    } has garnered significant attention in both traditional wellness practices and modern nutritional science, with researchers continuing to explore its mechanisms and applications. ${
      benefits.length > 0
        ? `Among the key benefits associated with ${ctx.name.toLowerCase()} supplementation are ${benefits
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, though individual responses can vary based on factors such as baseline nutritional status, lifestyle, and overall health profile.`
        : ""
    } When selecting a ${ctx.name.toLowerCase()} supplement, it's important to consider not just the dosage but also the quality of ingredients, manufacturing standards, and how the product fits into your broader nutritional strategy. ${
      ctx.scienceSnapshot ||
      `The scientific literature on ${ctx.name.toLowerCase()} continues to evolve, with ongoing research examining both established uses and novel applications.`
    } For those new to ${ctx.name.toLowerCase()} supplementation, starting with the manufacturer's recommended serving and monitoring your body's response provides a sensible approach to finding what works best for your individual needs.`,

  (
    ctx: SupplementProductContext,
    brand: string,
    dosage: string,
    form: string | null,
    benefits: string[]
  ) =>
    `This ${ctx.name.toLowerCase()} supplement from ${brand} provides ${dosage} in each serving, formulated to meet the needs of health-conscious consumers seeking quality nutritional support. ${
      ctx.quickOverview
    } ${
      ctx.extendedOverview || ""
    } The growing body of research around ${ctx.name.toLowerCase()} has led to increased interest among those looking to optimize their wellness routines, with many users reporting positive experiences when maintaining consistent supplementation over time. ${
      ctx.scienceSnapshot ||
      `Scientific investigation into ${ctx.name.toLowerCase()} spans multiple domains, from basic mechanism studies to clinical trials examining real-world outcomes.`
    } ${
      benefits.length > 0
        ? `Key areas where ${ctx.name.toLowerCase()} may provide support include ${benefits
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, benefits that have driven much of the consumer interest in this category.`
        : ""
    } Understanding the factors that influence how your body utilizes ${ctx.name.toLowerCase()}—including timing of intake, concurrent nutrients, and individual metabolic differences—can help you maximize the value you derive from supplementation. ${brand}'s formulation represents one of many options available in this space, distinguished by its specific dosage, ingredient sourcing, and manufacturing approach.`,

  (
    ctx: SupplementProductContext,
    brand: string,
    dosage: string,
    form: string | null,
    benefits: string[]
  ) =>
    `Featuring ${dosage} per serving, ${brand}'s ${ctx.name.toLowerCase()} supplement enters a market characterized by growing consumer awareness of nutritional optimization strategies. ${
      ctx.quickOverview
    } ${ctx.extendedOverview || ""} ${
      ctx.scienceSnapshot ||
      `The evidence base for ${ctx.name.toLowerCase()} encompasses both traditional use documentation and controlled scientific studies, providing multiple perspectives on its potential applications.`
    } ${
      benefits.length > 0
        ? `Those who incorporate ${ctx.name.toLowerCase()} into their regimens often cite interest in ${benefits
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, though the timeline for experiencing benefits can vary considerably between individuals.`
        : ""
    } As with any supplement, the quality of the source material, extraction or processing methods, and overall formulation integrity all play roles in determining the final product's value to the consumer. What sets effective supplementation apart from haphazard nutrient consumption is the thoughtful integration of products like this ${ctx.name.toLowerCase()} into a comprehensive wellness approach that includes balanced nutrition, appropriate physical activity, and attention to lifestyle factors such as sleep and stress management. ${brand} has positioned this product as a convenient option for those seeking to support their ${ctx.name.toLowerCase()} intake without the complexity of managing multiple separate supplements.`,

  (
    ctx: SupplementProductContext,
    brand: string,
    dosage: string,
    form: string | null,
    benefits: string[]
  ) =>
    `${brand} has developed this ${ctx.name.toLowerCase()} supplement with ${dosage} per serving, addressing the needs of consumers who understand the importance of targeted nutritional support in maintaining optimal health. ${
      ctx.quickOverview
    } ${
      ctx.extendedOverview || ""
    } The landscape of ${ctx.name.toLowerCase()} supplementation has evolved substantially as research has deepened our understanding of nutrient metabolism and bioavailability. ${
      ctx.scienceSnapshot ||
      `Current scientific consensus acknowledges ${ctx.name.toLowerCase()} as a nutrient worthy of attention, though like all supplements, it works best as part of a holistic health strategy rather than as an isolated intervention.`
    } ${
      benefits.length > 0
        ? `Primary reasons consumers turn to ${ctx.name.toLowerCase()} include seeking support for ${benefits
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, areas where both anecdotal reports and research data suggest potential benefits.`
        : ""
    } The decision to supplement with ${ctx.name.toLowerCase()} should ideally be informed by an understanding of your current dietary intake, any relevant health considerations, and realistic expectations about supplementation outcomes. This ${brand} product offers one pathway to increasing your ${ctx.name.toLowerCase()} intake, with the convenience of a precisely measured serving that simplifies daily nutritional planning.`,
];

/**
 * Extended second paragraph templates - focus on practical usage, dosage, and expectations
 * Creates 400+ word paragraphs about form, timing, quality, and what users can expect
 */
const EXTENDED_DETAILS_TEMPLATES = [
  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    idealFor: string[],
    timingTips: string[],
    qualityNote: string | null,
    safetyNotes: string[],
    synergy: string
  ) =>
    `${
      dosageContext ||
      `This product's serving size has been determined based on common supplementation practices in the ${ctx.name.toLowerCase()} category.`
    } ${
      formNote ||
      `The delivery format has been selected to balance absorption characteristics with practical considerations like ease of use and storage requirements.`
    } Understanding optimal usage patterns can help you get the most from your ${ctx.name.toLowerCase()} supplementation journey. ${
      timingTips.length > 0
        ? `Timing considerations include: ${timingTips.slice(0, 2).join(". ")}.`
        : `Many users find success taking ${ctx.name.toLowerCase()} at consistent times each day to establish a routine.`
    } ${
      idealFor.length > 0
        ? `This type of supplement may be particularly relevant for ${idealFor
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, though anyone interested in supporting their nutritional status may find value in quality ${ctx.name.toLowerCase()} supplementation.`
        : ""
    } ${
      qualityNote ||
      `When evaluating ${ctx.name.toLowerCase()} supplements, look for products from manufacturers who prioritize quality testing and transparent labeling.`
    } ${
      ctx.qualityMarkers && ctx.qualityMarkers.length > 0
        ? `Quality indicators in this category include ${ctx.qualityMarkers
            .slice(0, 3)
            .join(
              ", "
            )}, markers that can help distinguish premium products from less carefully formulated alternatives.`
        : ""
    } ${
      safetyNotes && safetyNotes.length > 0
        ? `Important considerations include: ${safetyNotes
            .slice(0, 2)
            .join(". ")}.`
        : `As with any supplement, consulting with a healthcare provider before starting can help ensure appropriate use.`
    } ${
      synergy ||
      `${ctx.name} may complement other supplements in a well-designed nutritional regimen, though interactions should be considered.`
    } The journey to optimal health is highly individual, and finding the right combination of nutrients, timing, and dosages often requires some experimentation and patience.`,

  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    idealFor: string[],
    timingTips: string[],
    qualityNote: string | null,
    safetyNotes: string[],
    synergy: string
  ) =>
    `Practical considerations for ${ctx.name.toLowerCase()} supplementation extend beyond simply choosing a product—how, when, and with what you take it can all influence outcomes. ${
      formNote ||
      `Different ${ctx.name.toLowerCase()} formats offer distinct advantages, from absorption characteristics to convenience factors.`
    } ${
      dosageContext ||
      `The dosage in this product reflects common practices in ${ctx.name.toLowerCase()} supplementation, though individual needs may vary.`
    } ${
      timingTips.length > 0
        ? `Expert guidance on timing suggests: ${timingTips
            .slice(0, 2)
            .join(". ")}.`
        : `Consistency in timing often matters more than finding the "perfect" moment to take your supplement.`
    } ${
      idealFor.length > 0
        ? `This category of supplement tends to attract ${idealFor
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, each with their own reasons for seeking ${ctx.name.toLowerCase()} support.`
        : ""
    } ${
      qualityNote ||
      `Quality varies significantly in the supplement market, making it worthwhile to research brands and look for third-party testing.`
    } ${
      ctx.qualityMarkers && ctx.qualityMarkers.length > 0
        ? `Key quality markers to look for include ${ctx.qualityMarkers
            .slice(0, 3)
            .join(", ")}.`
        : ""
    } ${
      safetyNotes && safetyNotes.length > 0
        ? `Safety considerations: ${safetyNotes.slice(0, 2).join(". ")}.`
        : `Generally, ${ctx.name.toLowerCase()} is well-tolerated at recommended doses, though individual reactions can occur.`
    } ${
      synergy ||
      `Synergistic effects with other nutrients may enhance the benefits of ${ctx.name.toLowerCase()} supplementation.`
    } Building sustainable health habits requires viewing supplementation as one component of a broader wellness strategy, not a standalone solution.`,

  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    idealFor: string[],
    timingTips: string[],
    qualityNote: string | null,
    safetyNotes: string[],
    synergy: string
  ) =>
    `${
      idealFor.length > 0
        ? `${ctx.name} supplementation appeals particularly to ${idealFor
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}, though its potential benefits extend across diverse demographic groups.`
        : `The appeal of ${ctx.name.toLowerCase()} supplementation spans various demographics and health goals.`
    } ${
      dosageContext ||
      `This product's dosage represents a considered formulation designed for effective supplementation.`
    } ${
      formNote ||
      `The chosen format balances multiple factors including bioavailability, stability, and user convenience.`
    } ${
      timingTips.length > 0
        ? `To optimize your supplementation: ${timingTips
            .slice(0, 2)
            .join(". ")}.`
        : `Developing a consistent supplementation routine supports better outcomes than sporadic use.`
    } Discriminating consumers recognize that not all ${ctx.name.toLowerCase()} products are created equal. ${
      qualityNote ||
      `Factors like ingredient sourcing, manufacturing standards, and testing protocols differentiate quality products from inferior alternatives.`
    } ${
      ctx.qualityMarkers && ctx.qualityMarkers.length > 0
        ? `Look for indicators such as ${ctx.qualityMarkers
            .slice(0, 3)
            .join(", ")} when comparing products.`
        : ""
    } ${
      safetyNotes && safetyNotes.length > 0
        ? `Important safety notes: ${safetyNotes.slice(0, 2).join(". ")}.`
        : `Following recommended serving sizes and consulting healthcare providers about potential interactions represents prudent practice.`
    } ${
      synergy ||
      `${ctx.name} may work synergistically with other nutrients, potentially enhancing overall nutritional support.`
    } Your supplementation choices should ultimately align with your specific health objectives, dietary patterns, and lifestyle considerations.`,

  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    idealFor: string[],
    timingTips: string[],
    qualityNote: string | null,
    safetyNotes: string[],
    synergy: string
  ) =>
    `Maximizing the benefits of ${ctx.name.toLowerCase()} supplementation involves understanding not just what to take, but how to take it effectively. ${
      dosageContext ||
      `The serving size provided has been designed with efficacy and safety in mind.`
    } ${
      formNote ||
      `This product's format has been selected based on considerations of absorption, stability, and user experience.`
    } ${
      timingTips.length > 0
        ? `Timing recommendations: ${timingTips.slice(0, 2).join(". ")}.`
        : `While timing flexibility exists, consistency tends to support better outcomes over time.`
    } ${
      idealFor.length > 0
        ? `Those who may find ${ctx.name.toLowerCase()} particularly beneficial include ${idealFor
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}.`
        : ""
    } The supplement market offers products across a wide quality spectrum, making informed selection crucial. ${
      qualityNote ||
      `Prioritize products from reputable manufacturers with transparent quality practices.`
    } ${
      ctx.qualityMarkers && ctx.qualityMarkers.length > 0
        ? `Quality indicators worth checking include ${ctx.qualityMarkers
            .slice(0, 3)
            .join(", ")}.`
        : ""
    } ${
      safetyNotes && safetyNotes.length > 0
        ? `Keep these safety considerations in mind: ${safetyNotes
            .slice(0, 2)
            .join(". ")}.`
        : `Standard precautions apply—start with recommended doses and monitor your response.`
    } ${
      synergy ||
      `Consider how ${ctx.name.toLowerCase()} fits within your broader supplement and nutrition strategy for optimal results.`
    } Sustainable health improvements come from consistent, thoughtful approaches rather than searching for quick fixes or magic bullets.`,
];

// Legacy sentence template variations (kept for individual component generation)
const OVERVIEW_TEMPLATES = [
  (ctx: SupplementProductContext, brand: string, dosage: string) =>
    `${brand} offers this ${ctx.name.toLowerCase()} supplement providing ${dosage} per serving. ${
      ctx.quickOverview
    }`,
  (ctx: SupplementProductContext, brand: string, dosage: string) =>
    `This ${ctx.name.toLowerCase()} product from ${brand} delivers ${dosage} in each serving. ${
      ctx.quickOverview
    }`,
  (ctx: SupplementProductContext, brand: string, dosage: string) =>
    `${brand}'s ${ctx.name.toLowerCase()} formula contains ${dosage} per serving. ${
      ctx.quickOverview
    }`,
  (ctx: SupplementProductContext, brand: string, dosage: string) =>
    `Featuring ${dosage} per serving, this ${brand} ${ctx.name.toLowerCase()} is formulated for quality. ${
      ctx.quickOverview
    }`,
];

const FORM_INTRO_TEMPLATES = [
  (form: string, note: string) =>
    `As a ${form.toLowerCase()}, this product ${note.toLowerCase()}.`,
  (form: string, note: string) =>
    `This ${form.toLowerCase()} format ${note.toLowerCase()}.`,
  (form: string, note: string) =>
    `Available in ${form.toLowerCase()} form, which ${note.toLowerCase()}.`,
  (form: string, note: string) =>
    `The ${form.toLowerCase()} delivery ${note.toLowerCase()}.`,
];

const DOSAGE_CONTEXT_TEMPLATES = [
  (
    dosage: number,
    unit: string,
    range: { min: number; max: number; unit: string }
  ) => {
    if (dosage < range.min) {
      return `At ${dosage}${unit}, this is a lower-strength option that may be suitable for those new to supplementation or wanting a gentler approach.`;
    } else if (dosage > range.max) {
      return `With ${dosage}${unit} per serving, this is a higher-potency formula for those seeking more substantial amounts.`;
    } else {
      return `The ${dosage}${unit} per serving falls within the commonly recommended range of ${range.min}-${range.max}${range.unit}.`;
    }
  },
  (
    dosage: number,
    unit: string,
    range: { min: number; max: number; unit: string }
  ) => {
    if (dosage < range.min) {
      return `This ${dosage}${unit} serving provides a conservative amount, ideal for those preferring to start low.`;
    } else if (dosage > range.max) {
      return `Providing ${dosage}${unit}, this exceeds standard recommendations and is designed for specific higher-dose protocols.`;
    } else {
      return `Each serving delivers ${dosage}${unit}, aligned with typical supplementation guidelines of ${range.min}-${range.max}${range.unit}.`;
    }
  },
];

const IDEAL_FOR_TEMPLATES = [
  (people: string[]) =>
    `This supplement may be particularly relevant for ${joinWithAnd(
      people.slice(0, 2)
    )}.`,
  (people: string[]) =>
    `Consider this product if you're among ${joinWithAnd(people.slice(0, 2))}.`,
  (people: string[]) => `Often chosen by ${joinWithAnd(people.slice(0, 2))}.`,
];

const TIMING_TEMPLATES = [
  (tips: string[]) =>
    `For optimal use: ${tips[0].toLowerCase()}${
      tips[1] ? `, and ${tips[1].toLowerCase()}` : ""
    }.`,
  (tips: string[]) =>
    `Usage tip: ${tips[0]}${
      tips[1] ? ` Additionally, ${tips[1].toLowerCase()}` : ""
    }.`,
  (tips: string[]) => `Best practices include: ${tips[0].toLowerCase()}.`,
];

const QUALITY_TEMPLATES = [
  (markers: string[], hasMarker: boolean, matchedMarker?: string) =>
    hasMarker
      ? `Quality indicators to look for include ${markers
          .slice(0, 2)
          .join(" and ")}. This product features ${matchedMarker}.`
      : `When evaluating this supplement, look for quality markers like ${markers
          .slice(0, 2)
          .join(" or ")}.`,
  (markers: string[], hasMarker: boolean, matchedMarker?: string) =>
    hasMarker
      ? `This product includes ${matchedMarker}, which is among the preferred quality markers (${markers
          .slice(0, 2)
          .join(", ")}).`
      : `Quality-conscious shoppers often look for ${markers
          .slice(0, 2)
          .join(" and ")} in this category.`,
];

/**
 * Second paragraph templates - combines form, dosage, timing, and ideal use
 * These create a cohesive second paragraph that varies by product
 */
const SECOND_PARAGRAPH_TEMPLATES = [
  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    timingTip: string | null,
    idealFor: string | null
  ) => {
    const parts: string[] = [];
    if (formNote) parts.push(formNote);
    if (dosageContext) parts.push(dosageContext);
    if (timingTip) parts.push(timingTip);
    if (idealFor) parts.push(idealFor);
    if (parts.length === 0) {
      return `${
        ctx.name
      } supplementation has become increasingly popular as more research emerges about its potential benefits. When selecting a ${ctx.name.toLowerCase()} supplement, consider factors like form, dosage, and your individual health goals.`;
    }
    return parts.join(" ");
  },
  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    timingTip: string | null,
    idealFor: string | null
  ) => {
    const parts: string[] = [];
    if (dosageContext) parts.push(dosageContext);
    if (formNote) parts.push(formNote);
    if (idealFor) parts.push(idealFor);
    if (timingTip) parts.push(timingTip);
    if (parts.length === 0) {
      return `Understanding how to properly use ${ctx.name.toLowerCase()} can help maximize its potential benefits. Consider your lifestyle and preferences when choosing between different forms and dosages available on the market.`;
    }
    return parts.join(" ");
  },
  (
    ctx: SupplementProductContext,
    formNote: string | null,
    dosageContext: string | null,
    timingTip: string | null,
    idealFor: string | null
  ) => {
    const parts: string[] = [];
    if (idealFor) parts.push(idealFor);
    if (dosageContext) parts.push(dosageContext);
    if (formNote) parts.push(formNote);
    if (timingTip) parts.push(timingTip);
    if (parts.length === 0) {
      return `Choosing the right ${ctx.name.toLowerCase()} product involves considering several factors including dosage strength, delivery format, and quality certifications. This can help ensure you're getting a product that aligns with your supplementation goals.`;
    }
    return parts.join(" ");
  },
];

/**
 * Helper to join array with "and" before last item
 */
function joinWithAnd(arr: string[]): string {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
  return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`;
}

/**
 * Generate a consistent "random" index based on product ID
 * This ensures the same product always gets the same template variation
 */
function getTemplateIndex(productId: string, templateCount: number): number {
  let hash = 0;
  for (let i = 0; i < productId.length; i++) {
    const char = productId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % templateCount;
}

/**
 * Detect product form from various product attributes
 */
function detectProductForm(product: ProductData): string | null {
  const formIndicators = [
    "capsule",
    "tablet",
    "powder",
    "gummy",
    "liquid",
    "softgel",
    "lozenge",
    "chewable",
  ];

  // Check form array first
  if (product.form && product.form.length > 0) {
    return product.form[0];
  }

  // Check product name
  const productNameLower = (
    product.dsld_product_name ||
    product.product_name ||
    ""
  ).toLowerCase();
  for (const form of formIndicators) {
    if (productNameLower.includes(form)) {
      return form;
    }
  }

  // Check filters
  if (product.filters) {
    for (const filter of product.filters) {
      const filterLower = filter.toLowerCase();
      for (const form of formIndicators) {
        if (filterLower.includes(form)) {
          return form;
        }
      }
    }
  }

  return null;
}

/**
 * Detect special quality markers in product
 */
function detectQualityMarkers(
  product: ProductData,
  qualityMarkers: string[]
): string | null {
  const productText = [
    product.dsld_product_name,
    product.product_name,
    product.brand,
    ...(product.filters || []),
  ]
    .join(" ")
    .toLowerCase();

  for (const marker of qualityMarkers) {
    if (productText.includes(marker.toLowerCase())) {
      return marker;
    }
  }

  return null;
}

/**
 * Product data interface (subset of what we receive)
 */
export interface ProductData {
  id: string;
  brand: string;
  dsld_product_name?: string;
  product_name?: string;
  amount_per_serving?: number;
  unit?: string;
  form?: string[];
  filters?: string[];
  dosage?: string[];
  servings?: string[];
  flavor?: string[];
  net_contents?: string;
}

/**
 * Generated content for product page
 */
export interface ProductPageContent {
  /** First paragraph: Product intro + supplement overview (400+ words) */
  overviewParagraph: string;
  /** Second paragraph: Form, dosage context, and usage guidance (400+ words) */
  detailsParagraph: string;
  formNote: string | null;
  dosageContext: string | null;
  idealFor: string | null;
  timingTip: string | null;
  qualityNote: string | null;
  whatToExpect: {
    primaryOutcome: {
      label: string;
      timeframe: string;
      intensity:
        | "Low"
        | "Low to Moderate"
        | "Moderate"
        | "Moderate to High"
        | "High";
    };
    secondaryOutcome?: {
      label: string;
      timeframe: string;
      intensity:
        | "Low"
        | "Low to Moderate"
        | "Moderate"
        | "Moderate to High"
        | "High";
    };
  } | null;
  keyBenefits: string[];
  /** Summary text for what users can expect */
  whatToExpectSummary: string[] | null;
}

/**
 * Main function to generate unique product page content
 * Now generates 400+ word paragraphs using extended templates
 *
 * @param supplementSlug - The supplement slug (used as fallback lookup)
 * @param product - Product data
 * @param supplementContext - Optional: Pre-fetched supplement context from API (preferred)
 */
export function generateProductContent(
  supplementSlug: string,
  product: ProductData,
  supplementContext?: SupplementProductContext | null
): ProductPageContent | null {
  // Use provided context or fall back to TypeScript lookup
  const context = supplementContext || getSupplementContext(supplementSlug);

  if (!context) {
    console.warn(`No supplement context found for slug: ${supplementSlug}`);
    return null;
  }

  const productId = product.id;
  const brand = product.brand || "This brand";
  const dosage = product.amount_per_serving
    ? `${product.amount_per_serving}${product.unit || "mg"}`
    : "a measured amount";
  const dosageNum = product.amount_per_serving || 0;
  const unit = product.unit || "mg";

  // Get template indices based on product ID (consistent per product)
  const extOverviewIdx = getTemplateIndex(
    productId,
    EXTENDED_OVERVIEW_TEMPLATES.length
  );
  const extDetailsIdx = getTemplateIndex(
    productId + "details",
    EXTENDED_DETAILS_TEMPLATES.length
  );
  const formIdx = getTemplateIndex(
    productId + "form",
    FORM_INTRO_TEMPLATES.length
  );
  const dosageIdx = getTemplateIndex(
    productId + "dosage",
    DOSAGE_CONTEXT_TEMPLATES.length
  );
  const idealIdx = getTemplateIndex(
    productId + "ideal",
    IDEAL_FOR_TEMPLATES.length
  );
  const timingIdx = getTemplateIndex(
    productId + "timing",
    TIMING_TEMPLATES.length
  );
  const qualityIdx = getTemplateIndex(
    productId + "quality",
    QUALITY_TEMPLATES.length
  );

  // Generate form note for individual use
  const detectedForm = detectProductForm(product);
  let formNote: string | null = null;
  let formNoteForParagraph: string | null = null;
  if (detectedForm) {
    const formKey = Object.keys(context.formNotes).find(
      (key) =>
        detectedForm.toLowerCase().includes(key.toLowerCase()) ||
        key.toLowerCase().includes(detectedForm.toLowerCase())
    );
    if (formKey && context.formNotes[formKey]) {
      formNote = FORM_INTRO_TEMPLATES[formIdx](
        detectedForm,
        context.formNotes[formKey]
      );
      formNoteForParagraph = `The ${detectedForm.toLowerCase()} format ${context.formNotes[
        formKey
      ].toLowerCase()}, making it a practical choice for many users.`;
    }
  }

  // Generate dosage context
  let dosageContext: string | null = null;
  if (dosageNum > 0) {
    let normalizedRange = { ...context.typicalDosageRange };

    dosageContext = DOSAGE_CONTEXT_TEMPLATES[dosageIdx](
      product.amount_per_serving || 0,
      unit,
      normalizedRange
    );
  }

  // Generate "ideal for" text
  const idealFor =
    context.idealFor.length > 0
      ? IDEAL_FOR_TEMPLATES[idealIdx](context.idealFor)
      : null;

  // Generate timing tip
  const timingTip =
    context.timingTips.length > 0
      ? TIMING_TEMPLATES[timingIdx](context.timingTips)
      : null;

  // Generate quality note
  const matchedMarker = detectQualityMarkers(product, context.qualityMarkers);
  const qualityNote = QUALITY_TEMPLATES[qualityIdx](
    context.qualityMarkers,
    !!matchedMarker,
    matchedMarker || undefined
  );

  // Select relevant benefits (pick 3-4 based on product ID)
  const benefitStartIdx = getTemplateIndex(
    productId + "benefits",
    context.keyBenefits.length
  );
  const keyBenefits = [
    context.keyBenefits[benefitStartIdx % context.keyBenefits.length],
    context.keyBenefits[(benefitStartIdx + 1) % context.keyBenefits.length],
    context.keyBenefits[(benefitStartIdx + 2) % context.keyBenefits.length],
    context.keyBenefits[(benefitStartIdx + 3) % context.keyBenefits.length],
  ].filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

  // Generate EXTENDED first paragraph (400+ words)
  const overviewParagraph = EXTENDED_OVERVIEW_TEMPLATES[extOverviewIdx](
    context,
    brand,
    dosage,
    detectedForm,
    keyBenefits
  );

  // Get safety and synergy info (with fallbacks)
  const safetyNotes = context.safetyConsiderations || [
    `Follow recommended serving sizes for ${context.name.toLowerCase()}`,
    "Consult a healthcare provider if you have any medical conditions or take medications",
  ];
  const synergyNote =
    context.synergyNotes ||
    `${context.name} can be part of a comprehensive nutritional approach when combined thoughtfully with other supplements and a balanced diet.`;

  // Generate EXTENDED second paragraph (400+ words)
  const detailsParagraph = EXTENDED_DETAILS_TEMPLATES[extDetailsIdx](
    context,
    formNoteForParagraph,
    dosageContext,
    context.idealFor,
    context.timingTips,
    qualityNote,
    safetyNotes,
    synergyNote
  );

  // Generate whatToExpectSummary with fallback if not provided
  const whatToExpectSummary =
    context.whatToExpectSummary ||
    (context.whatToExpect
      ? ([
          `${context.whatToExpect.primaryOutcome.label} typically develops within ${context.whatToExpect.primaryOutcome.timeframe} of consistent daily use`,
          `Individual responses vary based on baseline status, diet, and lifestyle factors`,
          `Consistency is key—most benefits require regular, ongoing supplementation to maintain`,
          context.whatToExpect.secondaryOutcome
            ? `Additional effects like ${context.whatToExpect.secondaryOutcome.label.toLowerCase()} may take ${
                context.whatToExpect.secondaryOutcome.timeframe
              } to become noticeable`
            : `Monitor your response and adjust as needed in consultation with a healthcare provider`,
        ].filter(Boolean) as string[])
      : null);

  return {
    overviewParagraph,
    detailsParagraph,
    formNote,
    dosageContext,
    idealFor,
    timingTip,
    qualityNote,
    whatToExpect: context.whatToExpect,
    keyBenefits,
    whatToExpectSummary,
  };
}

/**
 * Generate a short, unique product description for meta/structured data
 * Different from the main overview to avoid duplication
 */
export function generateProductMetaDescription(
  supplementSlug: string,
  product: ProductData
): string {
  const context = getSupplementContext(supplementSlug);
  if (!context) {
    return `Compare prices for ${product.brand} ${
      product.dsld_product_name || product.product_name
    }. View supplement facts and find the best deals.`;
  }

  const benefit =
    context.keyBenefits[
      getTemplateIndex(product.id + "meta", context.keyBenefits.length)
    ];
  const dosage = product.amount_per_serving
    ? `${product.amount_per_serving}${product.unit || "mg"}`
    : "";

  const templates = [
    `${product.brand} ${context.name}${
      dosage ? ` (${dosage})` : ""
    } - ${benefit}. Compare prices across retailers.`,
    `Shop ${product.brand}'s ${context.name.toLowerCase()}${
      dosage ? ` with ${dosage}` : ""
    }. ${benefit}. Best price comparison.`,
    `${context.name} by ${product.brand}${
      dosage ? `, ${dosage} per serving` : ""
    }. ${benefit}. Find the lowest price.`,
  ];

  const idx = getTemplateIndex(product.id + "metatemplate", templates.length);
  const result = templates[idx];

  // Ensure under 160 chars
  return result.length > 160 ? result.substring(0, 157) + "..." : result;
}
