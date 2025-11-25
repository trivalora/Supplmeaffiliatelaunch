import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRouteByPath, getGlossaryRoutes } from '../../lib/route-adapter';
import { PageViewTracker } from '../../components/PageViewTracker';

/**
 * Dynamically import glossary component based on key
 * Uses the componentName from GLOSSARY_ROUTES to construct the import path
 */
async function getGlossaryComponent(key: string) {
  // Get the route metadata  
  const route = getRouteByPath(`/glossary/${key}`);
  
  if (!route) {
    return null;
  }

  try {
    // Dynamically import using the componentName from routes.config.ts
    // FIXED: Import from pages/glossary subdirectory
    const module = await import(`../../../src/components/pages/glossary/${route.componentName}`);
    return module.default || module[Object.keys(module)[0]];
  } catch (error) {
    console.error(`Failed to load component for glossary term: ${key}`, error);
    return null;
  }
}

// Generate static params for all glossary terms
export async function generateStaticParams() {
  const glossaryRoutes = getGlossaryRoutes();
  return glossaryRoutes.map((route) => ({
    term: route.key
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ term: string }> }): Promise<Metadata> {
  const { term } = await params;
  const route = getRouteByPath(`/glossary/${term}`);
  
  if (!route) {
    return { title: 'Term Not Found' };
  }
  
  const title = route.abbreviation 
    ? `${route.title} (${route.abbreviation}) - Supplement Research Glossary`
    : `${route.title} - Supplement Research Glossary`;
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.suppl.me';
  const fullUrl = `${baseUrl}/glossary/${term}`;
    
  return {
    title,
    description: route.description,
    keywords: `${route.title}, ${route.abbreviation || ''}, supplement research, scientific terminology`,
    openGraph: {
      title,
      description: route.description,
      type: 'article',
      url: fullUrl,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// Page component
export default async function GlossaryTermPage({ 
  params 
}: { 
  params: Promise<{ term: string }> 
}) {
  const { term } = await params;
  const route = getRouteByPath(`/glossary/${term}`);
  
  if (!route) {
    notFound();
  }

  const GlossaryComponent = await getGlossaryComponent(route.key);
  
  if (!GlossaryComponent) {
    notFound();
  }

  return (
    <>
      <PageViewTracker pageName={route.title} pageCategory="glossary" />
      <GlossaryComponent currentPage={route.key} />
    </>
  );
}
