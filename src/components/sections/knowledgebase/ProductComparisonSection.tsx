"use client";

import { useMemo } from "react";
import {
  getProductsBySupplementName,
  type ProductData,
} from "@/lib/supplementProductsData";
import { ProductImage } from "@/components/images";
import { AffiliateButtons } from "./AffiliateButtons";
import { ShareStrip } from "@/components/shared/ShareStrip";

function formatSupplementName(name: string): string {
  const specialCases: Record<string, string> = {
    vitamind: "Vitamin D",
    vitaminc: "Vitamin C",
    omega3: "Omega-3",
    multivitamin: "Multivitamin",
    ashwagandha: "Ashwagandha",
    calcium: "Calcium",
    creatine: "Creatine",
    iron: "Iron",
    magnesium: "Magnesium",
    prebiotics: "Prebiotics",
    probiotics: "Probiotics",
    zinc: "Zinc",
    collagenpeptides: "Collagen Peptides",
    sulforaphane: "Sulforaphane",
    caseinprotein: "Casein Protein",
    wheyprotein: "Whey Protein",
  };

  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return specialCases[normalized] || name;
}

interface ProductComparisonSectionProps {
  supplementName: string;
}

export function ProductComparisonSection({
  supplementName,
}: ProductComparisonSectionProps) {
  const supplements = getProductsBySupplementName(supplementName);

  // Memoize supplement data
  const supplementData = useMemo(() => supplements, [supplements]);

  // Build description from structured fields with type labels
  const getDescriptionLines = (
    product: ProductData
  ): Array<{
    text: string;
    type: "content" | "weight" | "flavor" | "dietary" | "extraNotice";
  }> => {
    const lines: Array<{
      text: string;
      type: "content" | "weight" | "flavor" | "dietary" | "extraNotice";
    }> = [];

    if (product.content) {
      lines.push({ text: product.content, type: "content" });
    }

    if (product.weight) {
      lines.push({ text: product.weight, type: "weight" });
    }

    if (product.flavor) {
      lines.push({ text: `Flavor: ${product.flavor}`, type: "flavor" });
    }

    if (product.extraNotice) {
      lines.push({ text: product.extraNotice, type: "extraNotice" });
    }

    if (product.dietaryInfo) {
      lines.push({ text: product.dietaryInfo, type: "dietary" });
    }

    return lines;
  };

  return (
    <div className="bg-tertiary py-8">
      <div data-section className="max-w-7xl mx-auto px-6">
        <h2 className="text-primary mb-6 text-center">
          Recommended {formatSupplementName(supplementName)} Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplements.map((product: any, index: number) => {
            const descriptionLines = getDescriptionLines(product);

            return (
              <div
                key={index}
                className="bg-tertiary rounded-lg border border-secondary overflow-hidden flex flex-col p-4"
                data-product-card
              >
                <div
                  className="bg-white dark:bg-[#ebebeb] rounded-lg p-4 mb-3"
                  style={{ height: "25vh", position: "relative" }}
                >
                  {/* Badges positioned at top of image container */}
                  {product.badges && product.badges.length > 0 && (
                    <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                      {product.badges.map((badge: any, badgeIdx: number) => (
                        <span
                          key={badgeIdx}
                          className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-medium bg-primary text-white whitespace-nowrap"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    widths={[240, 360, 480, 640]}
                    sizes="240px"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="text-xs uppercase tracking-wide text-fourth mb-1">
                      {product.brand}
                    </div>
                    <h3
                      className="text-primary"
                      style={{ minHeight: "3.15rem" }}
                    >
                      {product.name}
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
                    {product.pricePerUnit && (
                      <div className="text-muted-foreground">
                        from {product.pricePerUnit}
                      </div>
                    )}
                    <div className="font-medium">
                      {product.pricePerBottle} per bottle
                    </div>
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
            <strong>Affiliate Disclosure:</strong> We earn from qualifying
            purchases at no extra cost to you.
          </p>
        </div>

        {/* Sharing Strip */}
        <div className="mt-6">
          <ShareStrip />
        </div>
      </div>
    </div>
  );
}
