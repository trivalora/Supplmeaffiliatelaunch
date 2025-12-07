import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getComparisonRoutes,
  getComparisonRouteBySlug,
} from "../../lib/route-adapter";
import { ProductComparisonClient } from "@/components/ProductComparisonClient";
import { PageViewTracker } from "../../components/PageViewTracker";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all comparison pages
export async function generateStaticParams() {
  const routes = getComparisonRoutes();

  return routes.map((route) => ({
    slug: route.supplementId,
  }));
}

// Generate metadata for each comparison page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getComparisonRouteBySlug(slug);

  if (!route) {
    return {
      title: "Page Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";
  const fullUrl = `${baseUrl}/comparison/${slug}`;
  const title = route.title;
  const description =
    route.description ||
    `Compare ${route.title} products from top retailers. Find the best ${slug} supplements based on price, quality, and third-party testing.`;

  return {
    title,
    description,
    keywords: `${slug} comparison, ${slug} supplements, best ${slug}, ${slug} prices, ${slug} reviews, supplement comparison`,
    authors: [{ name: "Suppl.me Research Team" }],
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Suppl.me",
      type: "article",
      images: [
        {
          url: `${baseUrl}/images/og-${slug}-comparison.jpg`,
          width: 1200,
          height: 630,
          alt: `${route.title} product comparison`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og-${slug}-comparison.jpg`],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// Main page component
export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;

  // Find the route for this comparison page
  const route = getComparisonRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  // Fetch initial products server-side for SEO
  let initialProducts = null;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";
    const apiUrl = `${baseUrl}/api/supplements/${route.supplementId}/products?limit=25&sort=price_asc`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (response.ok) {
      const data = await response.json();
      initialProducts = data.products;
    }
  } catch (error) {
    console.error("Failed to fetch initial products:", error);
    // Continue without initial products - client will load them
  }

  // Render the client component with the supplement ID and initial products
  return (
    <>
      <PageViewTracker
        pageName={`${route.title} Comparison`}
        pageCategory="comparison"
      />

      {/* Server-rendered SEO content with Schema.org markup */}
      {initialProducts && initialProducts.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: `${route.title} Price Comparison`,
              description: `Compare prices for ${route.title} supplements from top retailers`,
              numberOfItems: initialProducts.length,
              itemListElement: initialProducts
                .slice(0, 10)
                .map((product: any, index: number) => ({
                  "@type": "Product",
                  position: index + 1,
                  name: product.dsld_product_name || product.brand,
                  brand: {
                    "@type": "Brand",
                    name: product.brand,
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    lowPrice: product.best_total_price,
                    priceCurrency: "USD",
                    offerCount: product.price_count || 1,
                    availability: "https://schema.org/InStock",
                  },
                  ...(product.product_image_url && {
                    image: product.product_image_url.startsWith("http")
                      ? product.product_image_url
                      : `${
                          process.env.NEXT_PUBLIC_SITE_URL ||
                          "https://www.suppl.me"
                        }${product.product_image_url}`,
                  }),
                })),
            }),
          }}
        />
      )}

      <ProductComparisonClient
        supplementId={route.supplementId}
        initialProducts={initialProducts}
      />
    </>
  );
}
