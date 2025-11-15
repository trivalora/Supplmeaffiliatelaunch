import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { pushPageView } from '../analytics/dataLayer';
import { buildRoutes, RouteSEO } from './routeMap';
import { ScrollToTop } from './ScrollToTop';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { AnalyticsProvider } from '../components/AnalyticsProvider';

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
  const routes = buildRoutes();

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
  }, [location.pathname, currentRoute]);

  return (
    <ErrorBoundary>
      <AnalyticsProvider googleTagManagerId={import.meta.env?.VITE_GTM_ID || 'GTM-NQWRNKFT'}>
  {currentRoute && <RouteSEO route={currentRoute} />}
  <ScrollToTop />
        {!hideChrome && <Header onNavigate={() => { /* react-router handles links via onNavigate in components */ }} />}
        <Suspense fallback={<Loading />}>  
          <Routes>
            {routes.map(r => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<div className="p-8">Page not found</div>} />
          </Routes>
        </Suspense>
        {!hideChrome && <Footer onNavigate={() => {}} />}
      </AnalyticsProvider>
    </ErrorBoundary>
  );
}
