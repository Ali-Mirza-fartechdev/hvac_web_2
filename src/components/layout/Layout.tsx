import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { business } from '../../data/business';
import { useReveal } from '../../hooks/useReveal';
import { Icon } from '../ui/Icon';
import { Seo } from './Seo';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

/** Scrolls to top on route change (or to the hash target), and moves focus to <main>. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    const main = document.getElementById('main');
    main?.focus({ preventScroll: true });
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  useReveal();
  return (
    <>
      <Seo />
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
        <Outlet />
      </main>
      <SiteFooter />
      <div className="mobile-call-bar" role="group" aria-label="Quick contact">
        <a href={business.phoneHref}>
          <Icon name="phone" size={16} /> Call now
        </a>
        <Link to="/contact">Request service</Link>
      </div>
    </>
  );
}
