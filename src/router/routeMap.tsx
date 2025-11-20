import { lazy, ReactElement } from 'react';
import { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, RouteConfig, PageKey } from '../routes.config';
import { PAGE_PATHS, getPathForKey } from '../utils/routePaths';
import { SEOHead, pageSEO } from '../components/SEOHead';
import { useNavigate } from 'react-router-dom';

/**
 * Unified route description type consumed by React Router.
 */
export interface AppRoute {
  path: string;                // URL path e.g. /creatine
  pageKey: PageKey;            // Internal page key e.g. creatinev2
  element: ReactElement;       // JSX element rendered at this route
  seo?: {
    title?: string;
    description?: string;
    canonicalPath?: string;    // Path used for canonical
    structuredData?: Record<string, any> | Record<string, any>[];
  };
}

/**
 * Adjust componentPath for location of this file (src/router/** vs src/**)
 */
function normalizeComponentPath(componentPath: string) {
  // Original entries start with ./components/...
  if (componentPath.startsWith('./')) {
    return componentPath.replace('./', '../');
  }
  return componentPath;
}

/**
 * Create a lazily loaded component wrapper that injects onNavigate using react-router-dom.
 */
function makeLazyComponent(route: RouteConfig, pageKey: PageKey) {
  const adjustedPath = normalizeComponentPath(route.componentPath);
  const LazyComp = lazy(() => import(/* @vite-ignore */ adjustedPath).then(mod => ({
    default: (mod as any)[route.componentName]
  })));

  // Wrapper component (stable reference via function, not arrow in render)
  function ComponentWrapper() {
    const navigateRR = useNavigate();
    const onNavigate = (target: PageKey) => {
      const path = getPathForKey(target);
      navigateRR(path);
    };
    return <LazyComp onNavigate={onNavigate} />;
  }
  
  // Set display name for debugging
  ComponentWrapper.displayName = `Wrapper(${route.componentName})`;
  
  return ComponentWrapper;
}

/**
 * Build routes for knowledgebase (v2) & glossary.
 * Archived v1 pages are skipped for primary navigation but can be optionally included if desired.
 */
export function buildRoutes(includeArchived = false): AppRoute[] {
  const routes: AppRoute[] = [];

  // Landing page (manually defined, not in config) with onNavigate wrapper
  const LandingLazy = lazy(() => import('../components/LandingPage').then(m => ({ default: m.LandingPage })));
  const LandingWrapper = () => {
    const navigateRR = useNavigate();
    const onNavigate = (target: PageKey) => {
      const path = getPathForKey(target);
      navigateRR(path);
    };
    return <LandingLazy onNavigate={onNavigate} />;
  };
  routes.push({
    path: '/',
    pageKey: 'landing',
    element: <LandingWrapper />,
    seo: {
      title: pageSEO.home.title,
      description: pageSEO.home.description,
      canonicalPath: '/',
    }
  });

  // Helper to push route entries
  const pushRoute = (route: RouteConfig, pageKey: PageKey, pathOverride?: string) => {
    // Determine path: prefer PAGE_PATHS mapping else fallback to derived
    const mappedPath = PAGE_PATHS[pageKey] || pathOverride || `/${pageKey}`;

    // Skip archived (category === 'v1') unless requested
    if (!includeArchived && route.category === 'v1') return;

    const Component = makeLazyComponent(route, pageKey);

    // Basic SEO inference (can be expanded later)
    // Structured data for supplements (v2 only): inject as separate JSON-LD objects
    // Also add DefinedTerm for glossary entries
    let structuredData: Record<string, any> | Record<string, any>[] | undefined;
    if (route.category === 'v2') {
      structuredData = [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: route.title,
          description: route.description,
          category: route.subcategory || 'Supplement'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: route.title,
          description: route.description,
          about: route.title,
          url: mappedPath
        }
      ];
    } else if (route.category === 'glossary') {
      structuredData = [
        {
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          name: route.title,
          description: route.description,
          alternateName: route.abbreviation || undefined,
          inDefinedTermSet: '/glossary'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: route.title,
          description: route.description,
          url: mappedPath
        }
      ];
    }
    const seo = {
      title: route.title + (route.category === 'v1' ? ' (Archived)' : ''),
      description: route.description,
      canonicalPath: mappedPath,
      structuredData,
    };

    routes.push({
      path: mappedPath,
      pageKey,
      element: <Component />,
      seo,
    });
  };

  // Knowledgebase routes
  KNOWLEDGEBASE_ROUTES.forEach(r => pushRoute(r, r.key as PageKey));

  // Glossary routes: prefix path with /glossary/<slug>. PAGE_PATHS already does this for many; reuse it.
  GLOSSARY_ROUTES.forEach(r => {
    const key = r.key as PageKey;
    pushRoute(r, key);
  });

  // Static pages (manually defined)
  const AboutPageLazy = lazy(() => import('../components/AboutPage').then(m => ({ default: m.AboutPage })));
  routes.push({
    path: '/about',
    pageKey: 'about',
    element: <AboutPageLazy />,
    seo: { title: 'About Us', description: 'Learn about suppl.me', canonicalPath: '/about' }
  });

  const ContactPageLazy = lazy(() => import('../components/ContactPage').then(m => ({ default: m.ContactPage })));
  routes.push({
    path: '/contact',
    pageKey: 'contact',
    element: <ContactPageLazy />,
    seo: { title: 'Contact', description: 'Get in touch with suppl.me', canonicalPath: '/contact' }
  });

  const CookiePolicyPageLazy = lazy(() => import('../components/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
  routes.push({
    path: '/cookies',
    pageKey: 'cookies',
    element: <CookiePolicyPageLazy />,
    seo: { title: 'Cookie Policy', description: 'Our cookie usage policy', canonicalPath: '/cookies' }
  });

  const ImpressumPageLazy = lazy(() => import('../components/ImpressumPage').then(m => ({ default: m.ImpressumPage })));
  routes.push({
    path: '/impressum',
    pageKey: 'impressum',
    element: <ImpressumPageLazy />,
    seo: { title: 'Impressum', description: 'Legal information', canonicalPath: '/impressum' }
  });

  const KnowledgebasePageLazy = lazy(() => import('../components/KnowledgebasePage').then(m => ({ default: m.KnowledgebasePage })));
  const KnowledgebaseWrapper = () => {
    const navigateRR = useNavigate();
    const onNavigate = (target: PageKey) => {
      const path = getPathForKey(target);
      navigateRR(path);
    };
    return <KnowledgebasePageLazy onNavigate={onNavigate} />;
  };
  routes.push({
    path: '/knowledgebase',
    pageKey: 'knowledgebase',
    element: <KnowledgebaseWrapper />,
    seo: { title: 'Knowledge Base', description: 'Browse all supplements', canonicalPath: '/knowledgebase' }
  });

  const GlossaryPageLazy = lazy(() => import('../components/GlossaryPage').then(m => ({ default: m.GlossaryPage })));
  const GlossaryWrapper = () => {
    const navigateRR = useNavigate();
    const onNavigate = (target: PageKey) => {
      const path = getPathForKey(target);
      navigateRR(path);
    };
    return <GlossaryPageLazy onNavigate={onNavigate} />;
  };
  routes.push({
    path: '/glossary',
    pageKey: 'glossary',
    element: <GlossaryWrapper />,
    seo: { title: 'Glossary', description: 'Scientific terms explained', canonicalPath: '/glossary' }
  });

  const LegalDisclaimerPageLazy = lazy(() => import('../components/LegalDisclaimerPage').then(m => ({ default: m.LegalDisclaimerPage })));
  routes.push({
    path: '/legal',
    pageKey: 'legal',
    element: <LegalDisclaimerPageLazy />,
    seo: { title: 'Legal Disclaimer', description: 'Legal disclaimer and terms', canonicalPath: '/legal' }
  });

  const PrivacyPolicyPageLazy = lazy(() => import('../components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
  routes.push({
    path: '/privacy',
    pageKey: 'privacy',
    element: <PrivacyPolicyPageLazy />,
    seo: { title: 'Privacy Policy', description: 'How we handle your data', canonicalPath: '/privacy' }
  });

  const TermsOfServicePageLazy = lazy(() => import('../components/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
  routes.push({
    path: '/terms',
    pageKey: 'terms',
    element: <TermsOfServicePageLazy />,
    seo: { title: 'Terms of Service', description: 'Terms and conditions', canonicalPath: '/terms' }
  });

  const MethodologyPageLazy = lazy(() => import('../components/MethodologyPage').then(m => ({ default: m.MethodologyPage })));
  routes.push({
    path: '/methodology',
    pageKey: 'methodology',
    element: <MethodologyPageLazy />,
    seo: { title: 'Methodology', description: 'Our research methodology', canonicalPath: '/methodology' }
  });

  const PartnerPageLazy = lazy(() => import('../components/PartnerPage').then(m => ({ default: m.PartnerPage })));
  const PartnerWrapper = () => {
    const navigateRR = useNavigate();
    const onNavigate = (target: PageKey) => {
      const path = getPathForKey(target);
      navigateRR(path);
    };
    return <PartnerPageLazy onNavigate={onNavigate} />;
  };
  routes.push({
    path: '/partner',
    pageKey: 'partner',
    element: <PartnerWrapper />,
    seo: { title: 'Partner', description: 'Partner with suppl.me', canonicalPath: '/partner' }
  });

  const ProductComparisonLazy = lazy(() => import('../components/ProductComparison').then(m => ({ default: m.ProductComparison })));
  const ProductComparisonWrapper = () => {
    const navigateRR = useNavigate();
    const onNavigate = (target: PageKey) => {
      const path = getPathForKey(target);
      navigateRR(path);
    };
    return <ProductComparisonLazy onNavigate={onNavigate} />;
  };
  routes.push({
    path: '/product-comparison',
    pageKey: 'product-comparison',
    element: <ProductComparisonWrapper />,
    seo: { title: 'Product Comparison', description: 'Compare supplement products', canonicalPath: '/product-comparison' }
  });

  return routes;
}

/**
 * Inject SEOHead dynamically per route. Intended for use inside a layout component.
 */
export function RouteSEO({ route }: { route: AppRoute }) {
  if (!route.seo) return null;
  return (
    <SEOHead
      title={route.seo.title}
      description={route.seo.description}
      canonicalPath={route.seo.canonicalPath}
      structuredData={route.seo.structuredData}
    />
  );
}
