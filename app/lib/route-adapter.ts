import { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, PageKey } from '@/routes.config';

/**
 * Route Adapter - Bridges v0.2 routes.config.ts to Next.js App Router
 * 
 * This utility helps migrate from the centralized routing system to Next.js file-based routing.
 */

export interface RouteMapping {
  key: PageKey;
  path: string;
  title: string;
  description: string;
  componentName: string;
  category?: 'knowledgebase' | 'glossary' | 'static' | 'comparison';
  subcategory?: string;
  abbreviation?: string;
}

/**
 * Convert route key to clean URL path
 * Example: 'ashwagandhav2' -> '/ashwagandha'
 */
function keyToPath(key: string): string {
  // Remove v2 suffix for clean URLs
  const cleanKey = key.replace(/v2$/i, '');
  return `/${cleanKey}`;
}

/**
 * Get all supplement routes (knowledgebase pages)
 */
export function getSupplementRoutes(): RouteMapping[] {
  return KNOWLEDGEBASE_ROUTES
    .filter(route => route.category === 'knowledgebase' && route.showInNav)
    .map(route => ({
      key: route.key as PageKey,
      path: route.path || keyToPath(route.key), // Use path if provided, otherwise generate from key
      title: route.title,
      description: route.description,
      componentName: route.componentName,
      category: 'knowledgebase',
      subcategory: route.subcategory
    }));
}

/**
 * Get all glossary routes
 */
export function getGlossaryRoutes(): RouteMapping[] {
  return GLOSSARY_ROUTES.map(route => ({
    key: route.key as PageKey,
    path: `/glossary/${route.key}`,
    title: route.title,
    description: route.description,
    componentName: route.componentName,
    category: 'glossary',
    abbreviation: route.abbreviation
  }));
}

/**
 * Get route by key
 */
export function getRouteByKey(key: PageKey): RouteMapping | null {
  const allRoutes = [...KNOWLEDGEBASE_ROUTES, ...GLOSSARY_ROUTES];
  const route = allRoutes.find(r => r.key === key);
  
  if (!route) return null;
  
  const isGlossary = GLOSSARY_ROUTES.some(r => r.key === key);
  const path = isGlossary ? `/glossary/${key}` : (route.path || keyToPath(route.key)); // Use path if provided
  
  return {
    key: route.key as PageKey,
    path,
    title: route.title,
    description: route.description,
    componentName: route.componentName,
    category: route.category,
    abbreviation: route.abbreviation
  };
}

/**
 * Get route by path
 */
export function getRouteByPath(path: string): RouteMapping | null {
  // Remove leading/trailing slashes
  const cleanPath = path.replace(/^\/|\/$/g, '');
  
  // Check if it's a glossary path
  if (cleanPath.startsWith('glossary/')) {
    const key = cleanPath.replace('glossary/', '');
    const route = GLOSSARY_ROUTES.find(r => r.key === key);
    if (route) {
      return {
        key: route.key as PageKey,
        path: `/glossary/${key}`,
        title: route.title,
        description: route.description,
        componentName: route.componentName,
        category: 'glossary',
        abbreviation: route.abbreviation
      };
    }
  }
  
  // Try to find supplement by matching path
  const allRoutes = [...KNOWLEDGEBASE_ROUTES];
  const route = allRoutes.find(r => {
    const routePath = (r.path || keyToPath(r.key)).replace(/^\//, '');
    return routePath === cleanPath;
  });
  
  if (!route) return null;
  
  return {
    key: route.key as PageKey,
    path: route.path || keyToPath(route.key), // Use path if provided
    title: route.title,
    description: route.description,
    componentName: route.componentName,
    category: route.category
  };
}

/**
 * Get comparison page route
 */
export function getComparisonRoute(supplement: string): string {
  return `/${supplement}-comparison`;
}

/**
 * Get all comparison routes
 */
export function getComparisonRoutes(): Array<RouteMapping & { supplementId: string }> {
  return KNOWLEDGEBASE_ROUTES
    .filter(route => route.category === 'comparison')
    .map(route => {
      // Extract supplement ID from key (e.g., 'ashwagandha-comparison' -> 'ashwagandha')
      const supplementId = route.key.replace('-comparison', '');
      return {
        key: route.key as PageKey,
        path: `/${route.key}`,
        title: route.title,
        description: route.description,
        componentName: route.componentName,
        category: 'comparison' as const,
        supplementId
      };
    });
}

/**
 * Get comparison route by path
 */
export function getComparisonRouteByPath(path: string): (RouteMapping & { supplementId: string }) | null {
  const cleanPath = path.replace(/^\/|\/$/g, '');
  const route = KNOWLEDGEBASE_ROUTES.find(r => 
    r.category === 'comparison' && r.key === cleanPath
  );
  
  if (!route) return null;
  
  const supplementId = route.key.replace('-comparison', '');
  return {
    key: route.key as PageKey,
    path: `/${route.key}`,
    title: route.title,
    description: route.description,
    componentName: route.componentName,
    category: 'comparison',
    supplementId
  };
}

/**
 * Get comparison route by slug (supplement ID)
 * For use with /comparison/[slug] route
 */
export function getComparisonRouteBySlug(slug: string): (RouteMapping & { supplementId: string }) | null {
  const comparisonKey = `${slug}-comparison`;
  const route = KNOWLEDGEBASE_ROUTES.find(r => 
    r.category === 'comparison' && r.key === comparisonKey
  );
  
  if (!route) return null;
  
  return {
    key: route.key as PageKey,
    path: `/comparison/${slug}`,
    title: route.title,
    description: route.description,
    componentName: route.componentName,
    category: 'comparison',
    supplementId: slug
  };
}

/**
 * Generate all static paths for Next.js
 * Used in generateStaticParams()
 */
export function getAllStaticPaths(): { slug: string }[] {
  const supplementPaths = getSupplementRoutes().map(route => ({
    slug: route.path.replace(/^\//, '')
  }));
  
  const glossaryPaths = getGlossaryRoutes().map(route => ({
    slug: route.path.replace(/^\//, '').replace('glossary/', '')
  }));
  
  return [...supplementPaths, ...glossaryPaths];
}
