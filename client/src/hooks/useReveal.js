import { useEffect, useRef, useState } from 'react';

/**
 * Adds `is-visible` to the element the first time it scrolls into view.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Returns the id of whichever section currently owns the viewport,
 * so the nav can highlight it.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );

    key.split(',').forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);

  return active;
}
