import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { absoluteUrl, findMeta } from '../../data/seo';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keeps <title>, description, canonical and Open Graph tags in sync during
 * client-side navigation. First-load tags are already baked into the HTML by
 * the prerender step (scripts/prerender.mjs), so crawlers get them without JS.
 */
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = findMeta(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    const url = absoluteUrl(meta.path === '/404' ? '/' : meta.path);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (meta.noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'noindex';
    } else {
      robots?.remove();
    }
  }, [pathname]);

  return null;
}
