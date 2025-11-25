// Route prefetch utility for hover/intent-based code splitting optimization
// Uses route config componentPath meta to warm up dynamic import chunks before navigation.
import { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES, PageKey, RouteConfig } from '../routes.config';

// Cache of in-flight or completed imports
const prefetchCache = new Set<string>();

function normalizeComponentPath(componentPath: string) {
  if (componentPath.startsWith('./')) return componentPath.replace('./', '../');
  return componentPath;
}

function findRoute(key: PageKey): RouteConfig | undefined {
  return KNOWLEDGEBASE_ROUTES.find(r => r.key === key) || GLOSSARY_ROUTES.find(r => r.key === key);
}

export async function prefetchRoute(key: PageKey) {
  const route = findRoute(key);
  if (!route) return;
  // Glossary pages may be grouped later; for now use original path
  const adjusted = normalizeComponentPath(route.componentPath);
  if (prefetchCache.has(adjusted)) return;
  prefetchCache.add(adjusted);
  try {
    await import(/* @vite-ignore */ adjusted);
  } catch (e) {
    // Non-blocking; ignore errors
    console.warn('[prefetch] failed for', adjusted, e);
  }
}

// Batch prefetch convenience (e.g., first 5 supplements)
export function prefetchInitialSupplements(limit = 5) {
  KNOWLEDGEBASE_ROUTES.filter(r => r.showInNav).slice(0, limit).forEach(r => prefetchRoute(r.key as PageKey));
}
