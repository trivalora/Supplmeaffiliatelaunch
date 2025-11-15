import { useNavigate, useLocation } from 'react-router-dom';
import App from '../App';
import { getKeyForPath } from '../utils/routePaths';

/**
 * AppWrapper - Bridges React Router with App's internal navigation
 * Converts URL paths to PageKeys for the App component
 */
export default function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  // Convert current path to PageKey
  const currentPageKey = getKeyForPath(location.pathname) || 'landing';

  // Navigate to a new path
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return <App navigate={handleNavigate} currentPageKey={currentPageKey} currentPath={location.pathname} />;
}
