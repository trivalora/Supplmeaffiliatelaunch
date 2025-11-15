
  import { createRoot } from "react-dom/client";
  import { useEffect, useState } from "react";
  import App from "./App.tsx";
  import "./index.css";

  /**
   * Root component provides minimal client-side routing without adding react-router.
   * It keeps track of the current pathname and passes a navigate() function into App.
   * This restores deep-linking so direct visits like /ashwagandha resolve correctly
   * and internal navigation updates the URL (history.pushState) while preserving SPA behavior.
   */
  function Root() {
    const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

    // Navigates to a new path updating history & state; ignores redundant navigations.
    const navigate = (path: string) => {
      if (!path || path === currentPath) return;
      // Normalize: ensure leading slash.
      const normalized = path.startsWith('/') ? path : `/${path}`;
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
    };

    // Listen for back/forward browser navigation.
    useEffect(() => {
      const onPopState = () => setCurrentPath(window.location.pathname);
      window.addEventListener('popstate', onPopState);
      return () => window.removeEventListener('popstate', onPopState);
    }, []);

    return <App navigate={navigate} currentPath={currentPath} />;
  }

  createRoot(document.getElementById('root')!).render(<Root />);
  