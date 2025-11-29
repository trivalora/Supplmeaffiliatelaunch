"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  useAffiliateTooltip,
  AffiliateTooltip,
} from "@/components/shared/ui-extensions/AffiliateTooltip";
import { RefillReminderModal } from "@/components/shared/RefillReminderModal";
import { ProductContextSection } from "@/components/shared/ProductContextSection";
import {
  generateProductContent,
  mapApiSupplementToContext,
  type ProductPageContent,
} from "@/lib/product-content-generator";
import type { SupplementProductContext } from "@/lib/product-context-data";
import { estimateServingsPerContainer } from "@/lib/servings-calculator";
import IHerbBadgeLogoRgb from "@/imports/IHerbBadgeLogoRgb1-106-1526";

// Amazon button image path (optimized version available)
const imgAmazonButton =
  "/optimized/2f3309a930da536601e44619e42e44f89c102eb7-256.webp";

interface RetailerPrice {
  retailer: string;
  price: number;
  price_per_unit: number;
  product_url: string;
  product_name: string;
  image_url?: string;
  rating?: number;
  reviews?: number;
}

interface ProductDetails {
  id: string;
  dsld_id: string;
  brand: string;
  dsld_product_name: string;
  dsld_brand?: string;
  amount_per_serving: number;
  unit: string;
  product_image_url?: string;
  retailer_prices: RetailerPrice[];
  filters?: string[];
  dosage?: string[];
  servings?: string[];
  flavor?: string[];
  multipack?: string[];
  net_contents?: string;
  form?: string[];
  dsld_content?: string;
  servings_per_container?: number | null;
  dsld_label_info?: {
    serving_size?: string;
    ingredients?: Array<{
      name: string;
      amount: string;
      unit: string;
      daily_value?: string;
    }>;
    other_ingredients?: string[];
    supplement_facts?: string;
    label_statements?: {
      branding?: string[];
      formulation?: string[];
      precautions?: string[];
      suggested_use?: string[];
      product_specific?: string[];
      statement_of_identity?: string[];
      seals_symbols?: string[];
      other?: string[];
    };
  };
}

interface ProductDetailClientProps {
  supplement: string;
  productId: string;
}

export function ProductDetailClient({
  supplement,
  productId,
}: ProductDetailClientProps) {
  const router = useRouter();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [supplementContext, setSupplementContext] =
    useState<SupplementProductContext | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const tooltipHandlers = useAffiliateTooltip();

  // Refill reminder modal state
  const [showRefillModal, setShowRefillModal] = useState(false);
  const [pendingBuyUrl, setPendingBuyUrl] = useState<string | null>(null);

  // Calculate estimated servings from available data
  const estimatedServings = useMemo(() => {
    if (!product) return null;
    const servingSize = product.dsld_label_info?.serving_size || null;
    const estimate = estimateServingsPerContainer({
      servings_per_container: product.servings_per_container,
      net_contents: product.net_contents,
      serving_size: servingSize,
    });
    return estimate?.servingsPerContainer ?? null;
  }, [product]);

  // Handle buy click - show refill modal if we can estimate servings
  const handleBuyClick = (url: string) => {
    if (estimatedServings) {
      setPendingBuyUrl(url);
      setShowRefillModal(true);
    } else {
      // No servings data available, proceed directly
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Continue to external buy URL after modal
  const handleContinueToBuy = () => {
    if (pendingBuyUrl) {
      window.open(pendingBuyUrl, "_blank", "noopener,noreferrer");
      setPendingBuyUrl(null);
    }
  };

  useEffect(() => {
    async function loadProduct() {
      try {
        // Fetch product and supplement context in parallel
        const [productResponse, supplementResponse] = await Promise.all([
          fetch(`/api/products/${productId}`),
          fetch(`/api/supplements/${supplement}`),
        ]);

        if (!productResponse.ok) {
          throw new Error(`Failed to load product: ${productResponse.status}`);
        }

        const productData = await productResponse.json();

        if (!productData.product) {
          throw new Error("Product not found");
        }

        // Map supplement context from API if available
        if (supplementResponse.ok) {
          const supplementData = await supplementResponse.json();
          if (supplementData.supplement) {
            const mappedContext = mapApiSupplementToContext(
              supplementData.supplement
            );
            setSupplementContext(mappedContext);
          }
        }

        // Map API response to ProductDetails interface
        const apiProduct = productData.product;
        const mappedProduct: ProductDetails = {
          id: apiProduct.id,
          dsld_id: apiProduct.dsld_id,
          brand: apiProduct.brand,
          dsld_product_name:
            apiProduct.dsld_product_name || apiProduct.product_name,
          dsld_brand: apiProduct.dsld_brand,
          amount_per_serving: apiProduct.amount_per_serving,
          unit: apiProduct.unit,
          product_image_url: apiProduct.product_image_url,
          retailer_prices: (apiProduct.prices || []).map((p: any) => ({
            retailer: p.retailer?.name || p.retailer?.display_name || "Unknown",
            price: p.price,
            price_per_unit: p.price / (apiProduct.amount_per_serving || 1),
            product_url: p.product_url,
            product_name:
              apiProduct.dsld_product_name || apiProduct.product_name,
            image_url: apiProduct.product_image_url,
            rating: undefined,
            reviews: undefined,
          })),
          filters: apiProduct.filters || [],
          dosage: apiProduct.dosage || [],
          servings: apiProduct.servings || [],
          flavor: apiProduct.flavor || [],
          multipack: apiProduct.multipack || [],
          net_contents: apiProduct.net_contents,
          form: apiProduct.form || [],
          dsld_content: apiProduct.dsld_content,
          dsld_label_info: apiProduct.dsld_label_info,
          servings_per_container: apiProduct.servings_per_container
            ? parseInt(apiProduct.servings_per_container, 10)
            : null,
        };

        setProduct(mappedProduct);
      } catch (err) {
        console.error("Error loading product:", err);
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  // Generate dynamic, unique content for this product (must be before early returns)
  const productContent = useMemo(() => {
    if (!product) return null;
    // Pass supplement context from API (falls back to TypeScript file if null)
    return generateProductContent(
      supplement,
      {
        id: product.id,
        brand: product.brand,
        dsld_product_name: product.dsld_product_name,
        amount_per_serving: product.amount_per_serving,
        unit: product.unit,
        form: product.form,
        filters: product.filters,
        dosage: product.dosage,
        servings: product.servings,
        flavor: product.flavor,
        net_contents: product.net_contents,
      },
      supplementContext
    );
  }, [product, supplement, supplementContext]);

  // Format supplement name for display (must be before early returns)
  const supplementDisplayName = useMemo(
    () =>
      supplement
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    [supplement]
  );

  function addUTMParameters(url: string): string {
    if (!url) return url;
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set("utm_source", "suppl.me");
      urlObj.searchParams.set("utm_campaign", "affiliate_inquiry");
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  function formatFilterName(filter: string): string {
    return filter
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  if (loading) {
    return (
      <main data-layout-main style={{ paddingTop: "var(--header-height)" }}>
        <div data-layout-container className="py-8">
          <div className="text-center py-12">
            <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
            <p className="text-muted-foreground">Loading product details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main data-layout-main style={{ paddingTop: "var(--header-height)" }}>
        <div data-layout-container className="py-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <h1 className="text-2xl font-serif text-red-800 mb-4">
              Product Not Found
            </h1>
            <p className="text-red-600 mb-6">{error}</p>
            <Link
              href={`/comparison/${supplement}`}
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Back to Comparison
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const lowestPrice = product.retailer_prices.sort(
    (a, b) => a.price_per_unit - b.price_per_unit
  )[0];
  const productImage = product.product_image_url || lowestPrice?.image_url;

  // Generate structured data for product
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.brand} ${product.dsld_product_name}`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    description: `${product.brand} ${product.dsld_product_name} - ${product.amount_per_serving} ${product.unit} per serving`,
    image: productImage,
    offers: product.retailer_prices.map((retailer) => ({
      "@type": "Offer",
      url: retailer.product_url,
      priceCurrency: "USD",
      price: retailer.price.toFixed(2),
      seller: {
        "@type": "Organization",
        name: retailer.retailer,
      },
      availability: "https://schema.org/InStock",
    })),
  };

  // Generate BreadcrumbList structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://www.suppl.me`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${
          supplement.charAt(0).toUpperCase() + supplement.slice(1)
        } Products`,
        item: `https://www.suppl.me/comparison/${supplement}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.brand,
        item: `https://www.suppl.me/${supplement}/brand/${product.brand
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name:
          product.dsld_product_name?.replace(
            new RegExp(`^${product.brand}\\s+`, "i"),
            ""
          ) || product.dsld_product_name,
      },
    ],
  };

  return (
    <>
      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <main data-layout-main style={{ paddingTop: "var(--header-height)" }}>
        <div data-layout-container className="py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="text-sm mb-6 flex items-center gap-2 text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href={`/comparison/${supplement}`}
                className="hover:text-primary transition-colors capitalize"
              >
                {supplement?.replace(/-/g, " ")} Products
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.brand}</span>
              <span>/</span>
              <span className="text-foreground">
                {product.dsld_product_name?.replace(
                  new RegExp(`^${product.brand}\\s+`, "i"),
                  ""
                )}
              </span>
            </nav>
          </div>

          {/* Product Header */}
          <div className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden mb-6">
            <div className="flex gap-6 p-8">
              {/* Product Image - Small thumbnail on left */}
              <div className="shrink-0 w-[264px] h-[264px] bg-tertiary rounded-lg p-2 flex items-center justify-center">
                {productImage ? (
                  <img
                    src={productImage}
                    alt={product.dsld_product_name}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                ) : (
                  <div className="text-4xl text-muted-foreground">
                    {product.brand.charAt(0)}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-serif text-primary mb-2">
                  {product.brand} {product.dsld_product_name}
                </h1>

                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.amount_per_serving && (
                    <div className="bg-tertiary rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">
                        Dosage per Serving
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {product.amount_per_serving} {product.unit}
                      </div>
                    </div>
                  )}
                  {lowestPrice && (
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <div className="text-sm text-primary/80 mb-1">
                        Best Price
                      </div>
                      <div className="text-xl font-bold text-primary">
                        ${lowestPrice.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-primary/80">
                        ${lowestPrice.price_per_unit.toFixed(4)}/{product.unit}
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Details */}
                {(product.net_contents ||
                  product.servings ||
                  product.flavor ||
                  product.form ||
                  product.multipack) && (
                  <div className="space-y-2 mb-6">
                    {product.net_contents && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">
                          Net Contents:
                        </span>
                        <span className="font-medium">
                          {product.net_contents}
                        </span>
                      </div>
                    )}
                    {product.servings && product.servings.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Servings:</span>
                        <span className="font-medium">
                          {product.servings.join(", ")}
                        </span>
                      </div>
                    )}
                    {product.flavor && product.flavor.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Flavor:</span>
                        <span className="font-medium">
                          {product.flavor.join(", ")}
                        </span>
                      </div>
                    )}
                    {product.form && product.form.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Form:</span>
                        <span className="font-medium">
                          {product.form.join(", ")}
                        </span>
                      </div>
                    )}
                    {product.multipack && product.multipack.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">
                          Pack Size:
                        </span>
                        <span className="font-medium">
                          {product.multipack.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Product Filters/Badges */}
                {product.filters && product.filters.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.filters.map((filter) => (
                      <span
                        key={filter}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30"
                      >
                        {formatFilterName(filter)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Retailer Pricing */}
          <div className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden mb-6">
            <div className="p-6 border-b border-secondary/20">
              <h2 className="text-2xl font-serif text-primary">Where to Buy</h2>
              <p className="text-muted-foreground mt-1">
                Compare prices across retailers
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {product.retailer_prices
                  .sort((a, b) => a.price_per_unit - b.price_per_unit)
                  .map((retailer, index) => {
                    const isLowestPrice = index === 0;

                    return (
                      <div
                        key={`${retailer.retailer}-${retailer.price}`}
                        className={`p-4 rounded-lg border-2 ${
                          isLowestPrice
                            ? "border-primary bg-primary/5"
                            : "border-secondary/20"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold">
                                {retailer.retailer}
                              </h3>
                              {isLowestPrice && (
                                <span className="px-2 py-1 rounded-full text-xs font-bold bg-primary text-white">
                                  Best Price
                                </span>
                              )}
                            </div>

                            <div className="flex items-baseline gap-2 mb-2">
                              <span className="text-2xl font-bold text-primary">
                                ${retailer.price.toFixed(2)}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                (${retailer.price_per_unit.toFixed(4)}/
                                {product.unit})
                              </span>
                            </div>
                          </div>

                          <div>
                            {retailer.retailer.toLowerCase() === "iherb" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <div className="h-5 w-5">
                                  <IHerbBadgeLogoRgb />
                                </div>
                                <span className="text-sm font-medium">
                                  Buy Now
                                </span>
                              </a>
                            ) : retailer.retailer.toLowerCase() === "gnc" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-start gap-2 px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <img
                                  src="/logos/gnc.svg"
                                  alt="GNC"
                                  className="h-5 w-auto"
                                />
                                <span className="text-sm font-medium">
                                  Buy Now
                                </span>
                              </a>
                            ) : retailer.retailer.toLowerCase() ===
                              "walmart" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-start gap-2 px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <img
                                  src="/logos/walmart.svg"
                                  alt="Walmart"
                                  className="h-5 w-auto"
                                />
                                <span className="text-sm font-medium">
                                  Buy Now
                                </span>
                              </a>
                            ) : retailer.retailer.toLowerCase() === "amazon" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#FF9900] hover:bg-[#FF9900]/90 transition-colors"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <img
                                  src={imgAmazonButton}
                                  alt="Amazon"
                                  className="h-5 w-auto invert"
                                />
                              </a>
                            ) : retailer.retailer.toLowerCase() ===
                              "vitacost" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-start gap-2 px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <img
                                  src="/logos/vitacost.svg"
                                  alt="Vitacost"
                                  className="h-5 w-auto"
                                />
                                <span className="text-sm font-medium">
                                  Buy Now
                                </span>
                              </a>
                            ) : retailer.retailer.toLowerCase() ===
                              "bodybuilding.com" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-start gap-2 px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <img
                                  src="/logos/bodybuilding.png"
                                  alt="Bodybuilding.com"
                                  className="h-5 w-auto"
                                />
                                <span className="text-sm font-medium">
                                  Buy Now
                                </span>
                              </a>
                            ) : retailer.retailer.toLowerCase() ===
                              "supplement warehouse" ? (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                <img
                                  src="/logos/supplement-warehouse.png"
                                  alt="Supplement Warehouse"
                                  className="h-6 w-auto object-contain"
                                />
                                <span className="text-sm font-medium">
                                  Buy Now
                                </span>
                              </a>
                            ) : (
                              <a
                                href={addUTMParameters(retailer.product_url)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                                onClick={(e) => {
                                  if (product?.servings_per_container) {
                                    e.preventDefault();
                                    handleBuyClick(
                                      addUTMParameters(retailer.product_url)
                                    );
                                  }
                                }}
                                {...tooltipHandlers}
                              >
                                Buy Now at {retailer.retailer}
                              </a>
                            )}
                          </div>
                        </div>

                        {retailer.rating && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <span>★ {retailer.rating.toFixed(1)}</span>
                            {retailer.reviews && (
                              <span>({retailer.reviews} reviews)</span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* About This Supplement - Dynamic Content Section */}
          {productContent && (
            <ProductContextSection
              content={productContent}
              supplementName={supplementDisplayName}
            />
          )}

          {/* Supplement Facts */}
          {product.dsld_label_info && (
            <div className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden mb-6">
              <div className="p-6 border-b border-secondary/20">
                <h2 className="text-2xl font-serif text-primary">
                  Supplement Facts
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {product.dsld_label_info.serving_size && (
                  <div>
                    <h3 className="font-bold text-primary mb-2">
                      Serving Size
                    </h3>
                    <p>{product.dsld_label_info.serving_size}</p>
                  </div>
                )}

                {product.dsld_label_info.ingredients &&
                  product.dsld_label_info.ingredients.length > 0 && (
                    <div>
                      <h3 className="font-bold text-primary mb-2">
                        Ingredients
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-secondary">
                              <th className="text-left py-2 px-2">
                                Ingredient
                              </th>
                              <th className="text-right py-2 px-2">Amount</th>
                              <th className="text-right py-2 px-2">% DV</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.dsld_label_info.ingredients.map(
                              (ing, idx) => (
                                <tr
                                  key={idx}
                                  className="border-b border-secondary/30"
                                >
                                  <td className="py-2 px-2">{ing.name}</td>
                                  <td className="text-right py-2 px-2">
                                    {ing.amount} {ing.unit}
                                  </td>
                                  <td className="text-right py-2 px-2">
                                    {ing.daily_value || "-"}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                {product.dsld_label_info.other_ingredients &&
                  product.dsld_label_info.other_ingredients.length > 0 && (
                    <div>
                      <h3 className="font-bold text-primary mb-2">
                        Other Ingredients
                      </h3>
                      <p className="text-sm">
                        {product.dsld_label_info.other_ingredients.join(", ")}
                      </p>
                    </div>
                  )}

                {product.dsld_label_info.label_statements && (
                  <>
                    {product.dsld_label_info.label_statements
                      .statement_of_identity &&
                      product.dsld_label_info.label_statements
                        .statement_of_identity.length > 0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Product Identity
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.statement_of_identity.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements.branding &&
                      product.dsld_label_info.label_statements.branding.length >
                        0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Branding Claims
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.branding.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements.formulation &&
                      product.dsld_label_info.label_statements.formulation
                        .length > 0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Formulation Details
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.formulation.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements.suggested_use &&
                      product.dsld_label_info.label_statements.suggested_use
                        .length > 0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Suggested Use
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.suggested_use.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements.precautions &&
                      product.dsld_label_info.label_statements.precautions
                        .length > 0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Precautions
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                            {product.dsld_label_info.label_statements.precautions.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements
                      .product_specific &&
                      product.dsld_label_info.label_statements.product_specific
                        .length > 0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Product Specific Information
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.product_specific.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements.seals_symbols &&
                      product.dsld_label_info.label_statements.seals_symbols
                        .length > 0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Certifications & Seals
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.seals_symbols.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {product.dsld_label_info.label_statements.other &&
                      product.dsld_label_info.label_statements.other.length >
                        0 && (
                        <div>
                          <h3 className="font-bold text-primary mb-2">
                            Other Label Information
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {product.dsld_label_info.label_statements.other.map(
                              (statement, idx) => (
                                <li key={idx}>{statement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href={`/comparison/${supplement}`}
              className="inline-block px-6 py-3 bg-tertiary border border-secondary rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              ← Back to {supplement?.replace(/-/g, " ")} Comparison
            </Link>
          </div>
        </div>

        <AffiliateTooltip />

        {/* Refill Reminder Modal */}
        {product && (
          <RefillReminderModal
            isOpen={showRefillModal}
            onClose={() => {
              setShowRefillModal(false);
              setPendingBuyUrl(null);
            }}
            product={{
              id: product.id,
              name: product.dsld_product_name,
              brand: product.brand,
              servings_per_container: estimatedServings,
            }}
            onContinue={handleContinueToBuy}
          />
        )}
      </main>
    </>
  );
}
