import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls window to top on route change replicating previous behavior in App.tsx.
 * Includes delayed re-scroll to account for lazy-loaded content.
 */
export function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    const scrollAll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollAll();
    const t1 = setTimeout(scrollAll, 10);
    const t2 = setTimeout(scrollAll, 100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);
  return null;
}
