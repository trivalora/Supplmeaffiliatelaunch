import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSupplementRoutes, getRouteByPath } from '../lib/route-adapter';
import { getSEOContent } from '@/lib/seo-content';
import { PageViewTracker } from '../components/PageViewTracker';

// Import all supplement knowledgebase page components
import { AshwagandhaKnowledgebasePage } from '@/components/AshwagandhaKnowledgebasePage';
import { BcaaKnowledgebasePage } from '@/components/BcaaKnowledgebasePage';
import { CalciumKnowledgebasePage } from '@/components/CalciumKnowledgebasePage';
import { CaseinProteinKnowledgebasePage } from '@/components/CaseinProteinKnowledgebasePage';
import { CollagenKnowledgebasePage } from '@/components/CollagenKnowledgebasePage';
import { CreatineKnowledgebasePage } from '@/components/CreatineKnowledgebasePage';
import { CurcuminKnowledgebasePage } from '@/components/CurcuminKnowledgebasePage';
import { IronKnowledgebasePage } from '@/components/IronKnowledgebasePage';
import { MagnesiumKnowledgebasePage } from '@/components/MagnesiumKnowledgebasePage';
import { MultivitaminKnowledgebasePage } from '@/components/MultivitaminKnowledgebasePage';
import { Omega3KnowledgebasePage } from '@/components/Omega3KnowledgebasePage';
import { PrebioticsKnowledgebasePage } from '@/components/PrebioticsKnowledgebasePage';
import { ProbioticsKnowledgebasePage } from '@/components/ProbioticsKnowledgebasePage';
import { SulforaphaneKnowledgebasePage } from '@/components/SulforaphaneKnowledgebasePage';
import { VitaminCKnowledgebasePage } from '@/components/VitaminCKnowledgebasePage';
import { VitaminDKnowledgebasePage } from '@/components/VitaminDKnowledgebasePage';
import { WheyProteinKnowledgebasePage } from '@/components/WheyProteinKnowledgebasePage';

// Import all comparison page components
import {
  AshwagandhaComparison,
  CalciumComparison,
  CollagenComparison,
  CreatineComparison,
  IronComparison,
  MagnesiumComparison,
  Omega3Comparison,
  PrebioticsComparison,
  ProbioticsComparison,
  VitaminCComparison,
  VitaminDComparison,
  BCAAsComparison,
  CurcuminComparison,
  MultivitaminComparison,
  WheyProteinComparison,
  CaseinProteinComparison,
  ZincComparison
} from '@/components/ProductComparisonWrapper';

// Component mapping
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  // Knowledgebase pages
  'AshwagandhaKnowledgebasePage': AshwagandhaKnowledgebasePage,
  'BcaaKnowledgebasePage': BcaaKnowledgebasePage,
  'CalciumKnowledgebasePage': CalciumKnowledgebasePage,
  'CaseinProteinKnowledgebasePage': CaseinProteinKnowledgebasePage,
  'CollagenKnowledgebasePage': CollagenKnowledgebasePage,
  'CreatineKnowledgebasePage': CreatineKnowledgebasePage,
  'CurcuminKnowledgebasePage': CurcuminKnowledgebasePage,
  'IronKnowledgebasePage': IronKnowledgebasePage,
  'MagnesiumKnowledgebasePage': MagnesiumKnowledgebasePage,
  'MultivitaminKnowledgebasePage': MultivitaminKnowledgebasePage,
  'Omega3KnowledgebasePage': Omega3KnowledgebasePage,
  'PrebioticsKnowledgebasePage': PrebioticsKnowledgebasePage,
  'ProbioticsKnowledgebasePage': ProbioticsKnowledgebasePage,
  'SulforaphaneKnowledgebasePage': SulforaphaneKnowledgebasePage,
  'VitaminCKnowledgebasePage': VitaminCKnowledgebasePage,
  'VitaminDKnowledgebasePage': VitaminDKnowledgebasePage,
  'WheyProteinKnowledgebasePage': WheyProteinKnowledgebasePage,
  
  // Comparison pages
  'AshwagandhaComparison': AshwagandhaComparison,
  'CalciumComparison': CalciumComparison,
  'CollagenComparison': CollagenComparison,
  'CreatineComparison': CreatineComparison,
  'IronComparison': IronComparison,
  'MagnesiumComparison': MagnesiumComparison,
  'Omega3Comparison': Omega3Comparison,
  'PrebioticsComparison': PrebioticsComparison,
  'ProbioticsComparison': ProbioticsComparison,
  'VitaminCComparison': VitaminCComparison,
  'VitaminDComparison': VitaminDComparison,
  'BCAAsComparison': BCAAsComparison,
  'CurcuminComparison': CurcuminComparison,
  'MultivitaminComparison': MultivitaminComparison,
  'WheyProteinComparison': WheyProteinComparison,
  'CaseinProteinComparison': CaseinProteinComparison,
  'ZincComparison': ZincComparison
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all supplement pages
export async function generateStaticParams() {
  const routes = getSupplementRoutes();
  
  return routes.map(route => ({
    slug: route.path.replace(/^\//, '').replace(/\/$/, '')
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteByPath(`/${slug}`);
  
  if (!route) {
    return {
      title: 'Page Not Found',
    };
  }
  
  // Get SEO-optimized content if available
  const seoContent = getSEOContent(route.key);
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.suppl.me';
  const fullUrl = `${baseUrl}${route.path}`;
  
  // Use SEO title and description if available, otherwise fall back to route data
  const title = seoContent ? `${seoContent.title} | Suppl.me` : `${route.title} - Suppl.me`;
  const description = seoContent ? seoContent.description : (route.description || `Evidence-based information about ${route.title} supplements: benefits, dosing, safety, and retailer comparison.`);
  const keywords = seoContent ? seoContent.keywords.join(', ') : `${route.title}, ${route.title.toLowerCase()} supplements, ${route.title.toLowerCase()} benefits, ${route.title.toLowerCase()} dosage, supplement research`;
  
  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Suppl.me Research Team' }],
    openGraph: {
      title: seoContent ? seoContent.title : route.title,
      description,
      url: fullUrl,
      siteName: 'Suppl.me',
      type: 'article',
      images: [
        {
          url: `${baseUrl}/images/og-${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${seoContent ? seoContent.name : route.title} supplement information`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoContent ? seoContent.title : route.title,
      description,
      images: [`${baseUrl}/images/og-${slug}.jpg`],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// Main page component
export default async function SupplementPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find the route for this slug
  const route = getRouteByPath(`/${slug}`);
  
  if (!route) {
    notFound();
  }
  
  // Get the component
  const Component = COMPONENT_MAP[route.componentName];
  
  if (!Component) {
    console.error(`Component ${route.componentName} not found in COMPONENT_MAP`);
    notFound();
  }
  
  // Render the component (no onNavigate prop needed in Next.js)
  return (
    <>
      <PageViewTracker pageName={route.title} pageCategory="supplement" />
      <Component />
    </>
  );
}
