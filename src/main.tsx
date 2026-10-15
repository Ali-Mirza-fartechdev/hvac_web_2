import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/layout.css';
import './styles/pages.css';
import { App } from './app/App';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element');

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Prerendered HTML is hydrated; in `vite dev` there is none, so render fresh.
const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p);
const prerendered = container.dataset.prerenderPath;
if (container.hasChildNodes() && prerendered && norm(prerendered) === norm(window.location.pathname)) {
  hydrateRoot(container, tree);
} else {
  container.replaceChildren();
  createRoot(container).render(tree);
}
