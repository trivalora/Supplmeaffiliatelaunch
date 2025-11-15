import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { pushPageView } from '../analytics/dataLayer';
import { buildRoutes, RouteSEO } from './routeMap';
import { ScrollToTop } from './ScrollToTop';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { AnalyticsProvider } from '../components/AnalyticsProvider';
import { getPathForKey } from '../utils/routePaths';
import { trackNavigation } from '../utils/analytics';
import { scrollDepthTracker } from '../utils/scrollDepthTracker';
import { timeTracker } from '../utils/timeTracker';
import { NotFound } from '../components/NotFound';

// Simple loading fallback
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

export function RouterLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const routes = buildRoutes();

  // Non-canonical alias redirects (typos / singular forms)
  // These are intentionally not included in buildRoutes() so they don't appear in SEO, analytics, or sitemap.
  const ALIAS_REDIRECTS: Record<string, string> = {
    '/ashwaghandha': '/ashwagandha', // common transposition typo
    '/ashwaghand': '/ashwagandha',   // truncated misspelling
    '/bcaa': '/bcaas',               // singular form redirected to plural canonical
    // trailing slash variants
    '/ashwaghandha/': '/ashwagandha',
    '/ashwaghand/': '/ashwagandha',
    '/bcaa/': '/bcaas'
  };

  // Determine current route for SEO injection
  const currentRoute = routes.find(r => r.path === location.pathname);
  const hideChrome = currentRoute?.pageKey === 'landing';

  // Page view tracking
  useEffect(() => {
    if (!currentRoute) return;
    const pageName = currentRoute.seo?.title || currentRoute.pageKey;
    const pageCategory = currentRoute.path.startsWith('/glossary') ? 'glossary' : (currentRoute.pageKey === 'landing' ? 'landing' : 'supplement');
    pushPageView({
      pageName,
      pageCategory,
      pageUrl: window.location.href,
      pagePathname: location.pathname,
    });

    // Initialize engagement/scroll trackers for this page
    try {
      scrollDepthTracker.initialize(pageName);
      timeTracker.initialize(pageName);
    } catch { }
  }, [location.pathname, currentRoute]);

  const handleNavigateHeader = (pageKey: any) => {
    try {
      const path = getPathForKey(pageKey);
      trackNavigation(String(pageKey), path, 'header');
      navigate(path);
    } catch {
      try {
        navigate(`/${String(pageKey)}`);
      } catch { }
    }
  };

  const handleNavigateFooter = (pageKey: any) => {
    try {
      const path = getPathForKey(pageKey);
      trackNavigation(String(pageKey), path, 'footer');
      navigate(path);
    } catch {
      try {
        navigate(`/${String(pageKey)}`);
      } catch { }
    }
  };

  return (
    <ErrorBoundary>
      <AnalyticsProvider googleTagManagerId={import.meta.env?.VITE_GTM_ID || 'GTM-NQWRNKFT'}>
        {currentRoute && <RouteSEO route={currentRoute} />}
        <ScrollToTop />
        {!hideChrome && <Header onNavigate={handleNavigateHeader} />}
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map(r => (
              <Route path={r.path} element={r.element} />
            ))}
            {Object.entries(ALIAS_REDIRECTS).map(([from, to]) => (
              <Route path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {!hideChrome && <Footer onNavigate={handleNavigateFooter} />}
      </AnalyticsProvider>
    </ErrorBoundary>
  );
}
