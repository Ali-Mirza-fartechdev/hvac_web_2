import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll-triggered reveals for every element marked `data-reveal` (and clip-path
 * image reveals for `[data-mask]`). GSAP + ScrollTrigger are loaded on demand so
 * they stay out of the critical path, and every tween/trigger is created inside a
 * gsap.context that is reverted on route change — no duplicates, no leaks.
 *
 * Content is fully visible without JS and under prefers-reduced-motion.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
        if (items.length) gsap.set(items, { opacity: 0, y: 18 });
        if (items.length) ScrollTrigger.batch(items, {
          start: 'top 92%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.08,
              overwrite: true,
              clearProps: 'transform',
            }),
        });

        gsap.utils.toArray<HTMLElement>('[data-mask]').forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: 'inset(0 0 100% 0)' },
            {
              clipPath: 'inset(0 0 0% 0)',
              duration: 1,
              ease: 'power3.inOut',
              clearProps: 'clipPath',
              scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            },
          );
        });
      });
      // Images/fonts can shift layout after first paint
      requestAnimationFrame(() => ScrollTrigger.refresh());
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [pathname]);
}
