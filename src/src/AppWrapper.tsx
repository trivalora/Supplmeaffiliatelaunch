import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import App from '../App';

/**
 * AppWrapper - Bridges React Router with App's internal navigation
 * This component handles the routing hooks and passes navigation down to App
 */
export default function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  // Pass location changes to App via a custom event
  useEffect(() => {
    // Trigger a custom event that App can listen to
    window.dispatchEvent(new CustomEvent('routechange', { 
      detail: { pathname: location.pathname } 
    }));
  }, [location.pathname]);

  return <App navigate={navigate} currentPath={location.pathname || '/'} />;
}