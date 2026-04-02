import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

// Import route configurations
const getRoutes = async () => {
  const { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } =
    await import("../src/routes.config");
  return { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";
  const currentDate = new Date();

  const sitemap: MetadataRoute.Sitemap = [];

  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    { db: { schema: "api" } },
  );

  // Get routes configuration
  const { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } = await getRoutes();

  // 1. Landing page
  sitemap.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });

  // 2. Supplement pages (17 pages)
  const supplementRoutes = KNOWLEDGEBASE_ROUTES.filter(
    (r) => r.category === "knowledgebase" && r.showInNav,
  );
  for (const route of supplementRoutes) {
    if (route.path) {
      sitemap.push({
        url: `${baseUrl}${route.path}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }

  // 3. Comparison pages (16 pages) - Use actual route slugs from routes.config.ts
  const comparisonSlugs = [
    "ashwagandha",
    "bcaa",
    "calcium",
    "casein-protein",
    "collagen",
    "creatine",
    "curcumin",
    "iron",
    "magnesium",
    "multivitamin",
    "omega-3",
    "prebiotics",
    "probiotics",
    "sulforaphane",
    "vitamin-c",
    "vitamin-d",
    "whey-protein",
    // Note: zinc comparison page does not exist (zinc is knowledgebase-only)
  ];

  for (const slug of comparisonSlugs) {
    sitemap.push({
      url: `${baseUrl}/comparison/${slug}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    });
  }

  // 4. Product pages (1,691 pages) - Fetch from Supabase
  // IMPORTANT: Use DATABASE supplement slugs (from api.supplements table), NOT URL slugs
  const supplementSlugs = [
    "ashwagandha",
    "bcaa",
    "calcium",
    "casein",
    "collagen",
    "creatine",
    "curcumin",
    "iron",
    "magnesium",
    "multivitamin",
    "omega-3",
    "prebiotics",
    "probiotics",
    "vitamin-c",
    "vitamin-d",
    "whey",
    "zinc",
    // Note: sulforaphane not included - no products in database yet
  ];

  for (const supplement of supplementSlugs) {
    try {
      // Fetch products directly from Supabase
      const { data: products, error } = await supabase
        .from("products")
        .select("id")
        .eq("supplement_slug", supplement);

      if (error) {
        console.error(`Supabase error for ${supplement}:`, error);
        continue;
      }

      if (products && Array.isArray(products)) {
        for (const product of products) {
          if (product.id) {
            // URL-encode the product ID to handle special characters like &, spaces, etc.
            const encodedId = encodeURIComponent(product.id);
            sitemap.push({
              url: `${baseUrl}/${supplement}/product/${encodedId}`,
              lastModified: currentDate,
              changeFrequency: "weekly",
              priority: 0.6,
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error loading products for ${supplement}:`, error);
    }
  }

  // 5. Glossary index page
  sitemap.push({
    url: `${baseUrl}/glossary`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  });

  // 6. Glossary term pages (198 pages)
  const glossaryRoutes = GLOSSARY_ROUTES.filter((r) => r.showInNav);
  for (const route of glossaryRoutes) {
    sitemap.push({
      url: `${baseUrl}/glossary/${route.key}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  // 7. Static pages (9 pages)
  const staticPages = [
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/partner", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-of-service", priority: 0.3 },
    { path: "/cookie-policy", priority: 0.3 },
    { path: "/legal-notice", priority: 0.3 },
  ];

  for (const page of staticPages) {
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: page.priority,
    });
  }

  console.log(`Generated sitemap with ${sitemap.length} URLs`);

  return sitemap;
}
