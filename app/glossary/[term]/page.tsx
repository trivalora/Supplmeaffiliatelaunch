import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlossaryPageContent } from "./GlossaryPageContent";
import type { GlossaryTerm } from "./GlossaryPageContent";
import { getRouteByPath } from "../../lib/route-adapter";
import { PageViewTracker } from "../../components/PageViewTracker";

/**
 * Fetch glossary term from API
 */
async function getGlossaryTerm(slug: string): Promise<GlossaryTerm | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/glossary/${slug}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour, allows static generation
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.term || null;
  } catch (error) {
    console.error(`Failed to fetch glossary term: ${slug}`, error);
    return null;
  }
}

/**
 * Check if database term has enough content to render
 * Falls back to hardcoded component if content is incomplete
 */
function hasCompleteContent(term: GlossaryTerm): boolean {
  // A term is "complete" if it has either expanded_explanation or why_it_matters
  return !!(
    term.expanded_explanation ||
    term.why_it_matters ||
    (term.examples && term.examples.length > 0)
  );
}

/**
 * Dynamically import glossary component (fallback for incomplete database content)
 */
async function getHardcodedGlossaryComponent(slug: string) {
  const route = getRouteByPath(`/glossary/${slug}`);

  if (!route || !route.componentName) {
    return null;
  }

  try {
    const module = await import(
      `../../../src/components/pages/glossary/${route.componentName}`
    );
    return module.default || module[Object.keys(module)[0]];
  } catch (error) {
    console.error(`Failed to load hardcoded component for: ${slug}`, error);
    return null;
  }
}

/**
 * Generate static params for all glossary terms
 * Uses routes.config.ts as source of truth during build
 */
export async function generateStaticParams() {
  try {
    // Import routes config directly to avoid API calls during build
    const { GLOSSARY_ROUTES } = await import("../../../src/routes.config");
    
    return GLOSSARY_ROUTES.map((route) => ({
      term: route.key,
    }));
  } catch (error) {
    console.error("Error generating static params for glossary:", error);
    return [];
  }
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term: slug } = await params;
  const term = await getGlossaryTerm(slug);

  if (!term) {
    return { title: "Term Not Found" };
  }

  const title = `${term.term} - Definition & Explanation`;

  const description =
    term.meta_description || term.definition?.substring(0, 155) || "";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";
  const fullUrl = `${baseUrl}/glossary/${slug}`;

  return {
    title: term.meta_title || title,
    description,
    keywords: `${term.term}, ${
      term.abbreviation || ""
    }, supplement research, scientific terminology`,
    openGraph: {
      title,
      description,
      type: "article",
      url: fullUrl,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Page component - hybrid approach (database + fallback)
 *
 * Strategy:
 * 1. Try to fetch from database
 * 2. If database content is complete, use it
 * 3. If incomplete, fall back to hardcoded React component
 * 4. If neither works, show 404
 *
 * This allows gradual migration from hardcoded to database-driven content
 */
export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: slug } = await params;

  // Try to fetch from database
  const term = await getGlossaryTerm(slug);

  // If database has complete content, use it
  if (term && hasCompleteContent(term)) {
    console.log(`✅ Rendering ${slug} from database`);
    return <GlossaryPageContent term={term} />;
  }

  // Otherwise, fall back to hardcoded component
  console.log(`⚠️  Falling back to hardcoded component for ${slug}`);
  const route = getRouteByPath(`/glossary/${slug}`);

  if (!route) {
    notFound();
  }

  const HardcodedComponent = await getHardcodedGlossaryComponent(slug);

  if (!HardcodedComponent) {
    notFound();
  }

  return (
    <>
      <PageViewTracker pageName={route.title} pageCategory="glossary" />
      <HardcodedComponent currentPage={slug} />
    </>
  );
}
