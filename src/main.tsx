
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './fonts.css';
import './index.css';
import { RouterLayout } from './router/RouterLayout';

// React Router entry point – replaces custom Root implementation.
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RouterLayout />
  </BrowserRouter>
);
