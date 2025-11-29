/**
 * Refill Reminder Calculation Utilities
 *
 * Calculates when a supplement will run out based on:
 * - Servings per container
 * - Servings per day (user configurable, default: 1)
 * - Reminder days before runout (default: 7)
 */

export interface RefillCalculation {
  estimatedDaysSupply: number;
  estimatedRunoutDate: Date;
  reminderDate: Date;
  servingsPerDay: number;
  reminderDaysBefore: number;
}

export interface RefillCalculationInput {
  servingsPerContainer: number | string | null;
  servingsPerDay?: number;
  reminderDaysBefore?: number;
  purchaseDate?: Date;
}

/**
 * Default values for refill calculations
 */
export const REFILL_DEFAULTS = {
  SERVINGS_PER_DAY: 1,
  REMINDER_DAYS_BEFORE: 7,
  MIN_DAYS_SUPPLY: 7, // Minimum supply for a valid reminder
  MAX_DAYS_SUPPLY: 365, // Maximum reasonable supply
  FALLBACK_SERVINGS: 30, // If we can't parse, assume 30 servings (1 month)
};

/**
 * Parse servings per container from various formats
 *
 * Examples:
 * - "60" → 60
 * - "90 Capsules" → 90
 * - "30 Servings" → 30
 * - "About 45" → 45
 * - null/undefined → fallback
 */
export function parseServingsPerContainer(
  value: string | number | null | undefined
): number {
  if (value === null || value === undefined) {
    return REFILL_DEFAULTS.FALLBACK_SERVINGS;
  }

  if (typeof value === "number") {
    return Math.max(1, Math.round(value));
  }

  // Try to extract number from string
  const match = value.match(/(\d+)/);
  if (match) {
    return Math.max(1, parseInt(match[1], 10));
  }

  return REFILL_DEFAULTS.FALLBACK_SERVINGS;
}

/**
 * Calculate refill reminder dates
 */
export function calculateRefillDates(
  input: RefillCalculationInput
): RefillCalculation {
  const servingsPerContainer = parseServingsPerContainer(
    input.servingsPerContainer
  );
  const servingsPerDay =
    input.servingsPerDay ?? REFILL_DEFAULTS.SERVINGS_PER_DAY;
  const reminderDaysBefore =
    input.reminderDaysBefore ?? REFILL_DEFAULTS.REMINDER_DAYS_BEFORE;
  const purchaseDate = input.purchaseDate ?? new Date();

  // Calculate days supply
  let estimatedDaysSupply = Math.floor(servingsPerContainer / servingsPerDay);

  // Clamp to reasonable range
  estimatedDaysSupply = Math.max(
    REFILL_DEFAULTS.MIN_DAYS_SUPPLY,
    Math.min(REFILL_DEFAULTS.MAX_DAYS_SUPPLY, estimatedDaysSupply)
  );

  // Calculate runout date
  const estimatedRunoutDate = new Date(purchaseDate);
  estimatedRunoutDate.setDate(
    estimatedRunoutDate.getDate() + estimatedDaysSupply
  );

  // Calculate reminder date (X days before runout)
  const reminderDate = new Date(estimatedRunoutDate);
  reminderDate.setDate(reminderDate.getDate() - reminderDaysBefore);

  // If reminder date would be in the past, set it to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (reminderDate < tomorrow) {
    reminderDate.setTime(tomorrow.getTime());
  }

  return {
    estimatedDaysSupply,
    estimatedRunoutDate,
    reminderDate,
    servingsPerDay,
    reminderDaysBefore,
  };
}

/**
 * Format dates for display
 */
export function formatRefillDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Get human-readable supply duration
 */
export function formatSupplyDuration(days: number): string {
  if (days < 7) {
    return `${days} day${days === 1 ? "" : "s"}`;
  } else if (days < 30) {
    const weeks = Math.round(days / 7);
    return `about ${weeks} week${weeks === 1 ? "" : "s"}`;
  } else if (days < 365) {
    const months = Math.round(days / 30);
    return `about ${months} month${months === 1 ? "" : "s"}`;
  } else {
    const years = Math.round(days / 365);
    return `about ${years} year${years === 1 ? "" : "s"}`;
  }
}

/**
 * Servings per day options for user selection
 */
export const SERVINGS_PER_DAY_OPTIONS = [
  { value: 1, label: "1 serving/day" },
  { value: 2, label: "2 servings/day" },
  { value: 3, label: "3 servings/day" },
  { value: 4, label: "4 servings/day" },
];

/**
 * Reminder timing options
 */
export const REMINDER_TIMING_OPTIONS = [
  { value: 3, label: "3 days before" },
  { value: 7, label: "1 week before" },
  { value: 14, label: "2 weeks before" },
];
