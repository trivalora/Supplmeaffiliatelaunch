import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from '../App';

/**
 * AppWrapper - Bridges React Router with App's internal navigation
 * Syncs React Router location with App's internal routing
 */
export default function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  // Sync URL changes with React Router
  useEffect(() => {
    // Ensure the URL is properly set on mount and location change
    console.log('[AppWrapper] Current location:', location.pathname);
  }, [location.pathname]);

  // Navigate to a new path using React Router
  const handleNavigate = (path: string) => {
    console.log('[AppWrapper] Navigating to:', path);
    navigate(path);
  };

  return <App navigate={handleNavigate} currentPath={location.pathname} />;
}