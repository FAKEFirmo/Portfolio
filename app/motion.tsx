'use client';
import { useEffect } from 'react';
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('motion-ready');
    const sections = document.querySelectorAll<HTMLElement>('.section');
    sections.forEach((section) =>
      section
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((el, i) => el.style.setProperty('--i', String(i))),
    );
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.06, rootMargin: '0px 0px -7% 0px' },
    );
    sections.forEach((el) => reveal.observe(el));
    const header = document.querySelector('.header');
    const heroEnd = document.querySelector('.hero .eyebrow');
    const stick =
      header && heroEnd
        ? new IntersectionObserver(
            ([entry]) => header.classList.toggle('is-stuck', !entry.isIntersecting),
            { threshold: 0 },
          )
        : null;
    if (heroEnd) stick?.observe(heroEnd);
    const fine = window.matchMedia('(pointer: fine)').matches;
    let frame = 0;
    let pending: PointerEvent | null = null;
    let lit: HTMLElement | null = null;
    const clear = (el: HTMLElement) => {
      el.style.removeProperty('--mx');
      el.style.removeProperty('--my');
    };
    const apply = () => {
      frame = 0;
      const event = pending;
      if (!event) return;
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('.glass')
          : null;
      if (lit && lit !== target) {
        clear(lit);
        lit = null;
      }
      if (!target) return;
      const box = target.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      target.style.setProperty('--gx', `${x * 100}%`);
      target.style.setProperty('--gy', `${y * 100}%`);
      if (target.classList.contains('hero-button')) {
        target.style.setProperty('--mx', `${(x - 0.5) * 12}px`);
        target.style.setProperty('--my', `${(y - 0.5) * 12}px`);
      }
      lit = target;
    };
    const onMove = (event: PointerEvent) => {
      pending = event;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    if (fine) window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      reveal.disconnect();
      stick?.disconnect();
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
