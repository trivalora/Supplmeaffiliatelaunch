import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "../../../components/ProductDetailClient";
import { PageViewTracker } from "../../../components/PageViewTracker";

interface ProductPageProps {
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}

// This will be called at build time for static generation
export async function generateStaticParams() {
  // Fetch all products from database via API
  const supabase = await import("@/lib/supabase/server").then((m) =>
    m.createClient()
  );

  const { data: products } = await supabase
    .from("products")
    .select("id, supplement_slug");

  const allProducts = (products || []).map(
    (p: { id: string; supplement_slug: string }) => ({
      slug: p.supplement_slug,
      productId: p.id,
    })
  );

  console.log(
    `Generating static params for ${allProducts.length} product pages`
  );
  return allProducts;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, productId } = await params;
  const supplement = slug;

  // Load product data from database
  try {
    const supabase = await import("@/lib/supabase/server").then((m) =>
      m.createClient()
    );

    const { data: product, error } = (await supabase
      .from("products")
      .select(
        `
        id,
        brand,
        dsld_product_name,
        supplement:supplements(name)
      `
      )
      .eq("id", productId)
      .single()) as {
      data: {
        id: string;
        brand: string;
        dsld_product_name: string;
        supplement?: { name: string };
      } | null;
      error: any;
    };

    if (error || !product) {
      return {
        title: "Product Not Found",
        description: "The requested product could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const brand = product.brand || "Unknown Brand";
    const productName = product.dsld_product_name || "Product";
    const supplementName =
      product.supplement?.name ||
      supplement
        .split("-")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_CANONICAL_BASE_URL ||
      "https://www.suppl.me";
    const canonicalUrl = `${baseUrl}/${supplement}/product/${encodeURIComponent(
      productId
    )}`;

    // Build description, ensuring under 160 chars
    const fullDesc = `Compare prices for ${brand} ${productName}. View supplement facts, ingredients, and find best deals across retailers.`;
    const description =
      fullDesc.length > 160 ? fullDesc.substring(0, 157) + "..." : fullDesc;

    return {
      title: `${brand} ${productName} - ${supplementName} | Suppl.me`,
      description,
      keywords: `${brand}, ${productName}, ${supplementName}, supplement facts, price comparison, DSLD`,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${brand} ${productName} - ${supplementName}`,
        description,
        type: "website",
        url: canonicalUrl,
        siteName: "Suppl.me",
      },
      twitter: {
        card: "summary",
        title: `${brand} ${productName}`,
        description,
      },
    };
  } catch (error) {
    return {
      title: "Product Details",
      description: "View product information and compare prices.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, productId } = await params;

  // Load product name for tracking
  const supplementName = slug
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <PageViewTracker
        pageName={`${supplementName} - Product ${productId.substring(0, 20)}`}
        pageCategory="product"
      />
      <ProductDetailClient supplement={slug} productId={productId} />
    </>
  );
}
