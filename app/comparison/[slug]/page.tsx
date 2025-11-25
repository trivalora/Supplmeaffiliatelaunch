import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getComparisonRoutes, getComparisonRouteBySlug } from '../../lib/route-adapter';
import { ProductComparisonClient } from '@/components/ProductComparisonClient';
import { PageViewTracker } from '../../components/PageViewTracker';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all comparison pages
export async function generateStaticParams() {
  const routes = getComparisonRoutes();
  
  return routes.map(route => ({
    slug: route.supplementId
  }));
}

// Generate metadata for each comparison page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getComparisonRouteBySlug(slug);
  
  if (!route) {
    return {
      title: 'Page Not Found',
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.suppl.me';
  const fullUrl = `${baseUrl}/comparison/${slug}`;
  const title = route.title;
  const description = route.description || `Compare ${route.title} products from top retailers. Find the best ${slug} supplements based on price, quality, and third-party testing.`;
  
  return {
    title,
    description,
    keywords: `${slug} comparison, ${slug} supplements, best ${slug}, ${slug} prices, ${slug} reviews, supplement comparison`,
    authors: [{ name: 'Suppl.me Research Team' }],
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Suppl.me',
      type: 'article',
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
      card: 'summary_large_image',
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
  
  // Render the client component with the supplement ID
  return (
    <>
      <PageViewTracker pageName={`${route.title} Comparison`} pageCategory="comparison" />
      <ProductComparisonClient supplementId={route.supplementId} />
    </>
  );
}
