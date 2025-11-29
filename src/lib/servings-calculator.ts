/**
 * Servings Calculator
 *
 * Calculates estimated servings per container from product data
 * when servings_per_container is not explicitly available.
 *
 * Uses net_contents (e.g., "90 Tablet(s)") and serving_size (e.g., "2 Tablet(s)")
 * to estimate the number of servings.
 */

export interface ServingsEstimate {
  servingsPerContainer: number;
  confidence: "high" | "medium" | "low";
  method: "explicit" | "calculated" | "pill_count" | "estimated";
  details?: string;
}

// Regex patterns for extracting quantities
const QUANTITY_PATTERN = /^(\d+(?:\.\d+)?)\s*/;
const UNIT_PATTERNS = {
  pills: /(?:tablet|capsule|softgel|vegcap|gummy|gummie|lozenge|caplet|pill)/i,
  liquid: /(?:fl\.?\s*oz|ml|liter|l\b|tsp|tbsp|teaspoon|tablespoon)/i,
  powder: /(?:gram|g\b|oz|ounce|scoop|serving)/i,
};

/**
 * Parse a quantity string like "90 Tablet(s)" or "2 Softgel(s)"
 * Returns the numeric value and unit type
 */
function parseQuantity(str: string | null | undefined): {
  value: number | null;
  unit: string | null;
  isPill: boolean;
} {
  if (!str) return { value: null, unit: null, isPill: false };

  const cleanStr = str.trim();
  const match = cleanStr.match(QUANTITY_PATTERN);

  if (!match) return { value: null, unit: null, isPill: false };

  const value = parseFloat(match[1]);
  const unitPart = cleanStr.slice(match[0].length).trim();

  const isPill = UNIT_PATTERNS.pills.test(unitPart);

  return { value, unit: unitPart, isPill };
}

/**
 * Estimate servings per container from product data
 *
 * Priority:
 * 1. Use explicit servings_per_container if available
 * 2. For pills/capsules: net_contents ÷ serving_size
 * 3. For liquids/powders: estimate based on typical serving sizes
 * 4. Fallback: use pill count directly (assume 1 per day)
 */
export function estimateServingsPerContainer(product: {
  servings_per_container?: string | number | null;
  net_contents?: string | null;
  serving_size?: string | null;
  net_quantity?: string | null;
}): ServingsEstimate | null {
  // 1. Check explicit servings_per_container
  if (product.servings_per_container) {
    const explicit =
      typeof product.servings_per_container === "string"
        ? parseInt(product.servings_per_container, 10)
        : product.servings_per_container;

    if (!isNaN(explicit) && explicit > 0) {
      return {
        servingsPerContainer: explicit,
        confidence: "high",
        method: "explicit",
        details: "From product label",
      };
    }
  }

  // 2. Parse net_contents and serving_size
  const netContents = parseQuantity(
    product.net_contents || product.net_quantity
  );
  const servingSize = parseQuantity(product.serving_size);

  // 3. For pill-based products, calculate servings
  if (netContents.value && netContents.isPill) {
    if (servingSize.value && servingSize.isPill) {
      // Both are pill counts - divide to get servings
      const servings = Math.floor(netContents.value / servingSize.value);
      if (servings > 0) {
        return {
          servingsPerContainer: servings,
          confidence: "high",
          method: "calculated",
          details: `${netContents.value} ${netContents.unit} ÷ ${servingSize.value} per serving`,
        };
      }
    } else {
      // Net contents is pills but serving size is unclear
      // Assume 1 pill per serving (common for most supplements)
      return {
        servingsPerContainer: Math.floor(netContents.value),
        confidence: "medium",
        method: "pill_count",
        details: `${netContents.value} pills (assuming 1 per serving)`,
      };
    }
  }

  // 4. For liquid products - try to calculate
  if (netContents.value && UNIT_PATTERNS.liquid.test(netContents.unit || "")) {
    if (
      servingSize.value &&
      UNIT_PATTERNS.liquid.test(servingSize.unit || "")
    ) {
      // Both are liquid measurements - need unit conversion
      const netMl = convertToMl(netContents.value, netContents.unit || "");
      const servingMl = convertToMl(servingSize.value, servingSize.unit || "");

      if (netMl && servingMl && servingMl > 0) {
        const servings = Math.floor(netMl / servingMl);
        if (servings > 0) {
          return {
            servingsPerContainer: servings,
            confidence: "medium",
            method: "calculated",
            details: `${netContents.value} ${netContents.unit} ÷ ${servingSize.value} ${servingSize.unit}`,
          };
        }
      }
    }
  }

  // 5. Check if net_contents has a numeric value we can use
  if (netContents.value && netContents.value > 0) {
    // Last resort: use the net contents value if it seems reasonable
    // (between 10 and 500 typically represents pill/serving count)
    if (netContents.value >= 10 && netContents.value <= 500) {
      return {
        servingsPerContainer: Math.floor(netContents.value),
        confidence: "low",
        method: "estimated",
        details: `Estimated from ${netContents.value} ${
          netContents.unit || "units"
        }`,
      };
    }
  }

  // Could not determine servings
  return null;
}

/**
 * Convert liquid measurements to milliliters for comparison
 */
function convertToMl(value: number, unit: string): number | null {
  const lowerUnit = unit.toLowerCase();

  if (lowerUnit.includes("ml")) return value;
  // Check fl oz BEFORE checking for plain 'l' (since 'fl' contains 'l')
  if (lowerUnit.includes("fl") && lowerUnit.includes("oz"))
    return value * 29.5735;
  if (
    lowerUnit.includes("l") &&
    !lowerUnit.includes("ml") &&
    !lowerUnit.includes("fl")
  )
    return value * 1000;
  if (lowerUnit.includes("tsp") || lowerUnit.includes("teaspoon"))
    return value * 4.929;
  if (lowerUnit.includes("tbsp") || lowerUnit.includes("tablespoon"))
    return value * 14.787;

  return null;
}

/**
 * Get a display-friendly description of the servings estimate
 */
export function getServingsDescription(estimate: ServingsEstimate): string {
  switch (estimate.confidence) {
    case "high":
      return `${estimate.servingsPerContainer} servings`;
    case "medium":
      return `~${estimate.servingsPerContainer} servings (estimated)`;
    case "low":
      return `~${estimate.servingsPerContainer} servings (approximate)`;
  }
}
