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
    const hero = document.querySelector('.hero');
    const idle = hero
      ? new IntersectionObserver(
          ([entry]) => hero.classList.toggle('is-idle', !entry.isIntersecting),
          { threshold: 0 },
        )
      : null;
    if (hero) idle?.observe(hero);
    const fine = window.matchMedia('(pointer: fine)').matches;
    let frame = 0;
    let pending: PointerEvent | null = null;
    let lit: HTMLElement | null = null;
    let boxes = new WeakMap<HTMLElement, DOMRect>();
    const boxOf = (el: HTMLElement) => {
      let box = boxes.get(el);
      if (!box) {
        box = el.getBoundingClientRect();
        boxes.set(el, box);
      }
      return box;
    };
    const forget = () => {
      boxes = new WeakMap();
    };
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
      const box = boxOf(target);
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
    if (fine) {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('scroll', forget, { passive: true });
      window.addEventListener('resize', forget);
    }
    return () => {
      reveal.disconnect();
      stick?.disconnect();
      idle?.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', forget);
      window.removeEventListener('resize', forget);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
