'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add('js-ready');
    const cleanups: Array<() => void> = [];
    const on = (
      target: EventTarget,
      type: string,
      handler: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    };

    // ─── Nav scroll state ──────────────────────────────────
    const nav = document.getElementById('nav');
    const navBrandName = document.getElementById('nav-brand-name');
    const navBrandSub = document.getElementById('nav-brand-sub');
    const onNavScroll = () => {
      if (!nav) return;
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
        if (navBrandName) (navBrandName as HTMLElement).style.color = '#2D2926';
        if (navBrandSub) (navBrandSub as HTMLElement).style.color = 'rgba(74,69,64,0.5)';
      } else {
        nav.classList.remove('scrolled');
        if (navBrandName) (navBrandName as HTMLElement).style.color = '#F2EDE8';
        if (navBrandSub) (navBrandSub as HTMLElement).style.color = 'rgba(242,237,232,0.5)';
      }
    };
    on(window, 'scroll', onNavScroll, { passive: true });
    onNavScroll();

    // ─── Mobile menu toggle ────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const ham1 = document.getElementById('ham-1');
    const ham2 = document.getElementById('ham-2');
    const ham3 = document.getElementById('ham-3');
    let menuOpen = false;
    const closeMenu = () => {
      menuOpen = false;
      mobileMenu?.classList.remove('open');
      if (ham1) (ham1 as HTMLElement).style.transform = '';
      if (ham2) (ham2 as HTMLElement).style.opacity = '1';
      if (ham3) (ham3 as HTMLElement).style.transform = '';
    };
    const onHamburgerClick = () => {
      menuOpen = !menuOpen;
      mobileMenu?.classList.toggle('open', menuOpen);
      if (ham1) (ham1 as HTMLElement).style.transform = menuOpen ? 'translateY(6px) rotate(45deg)' : '';
      if (ham2) (ham2 as HTMLElement).style.opacity = menuOpen ? '0' : '1';
      if (ham3) (ham3 as HTMLElement).style.transform = menuOpen ? 'translateY(-6px) rotate(-45deg)' : '';
    };
    if (hamburger) on(hamburger, 'click', onHamburgerClick);
    mobileMenu?.querySelectorAll('a').forEach((a) => on(a, 'click', closeMenu));

    // ─── Parallax hero ──────────────────────────────────────
    const heroBg = document.getElementById('hero-bg');
    const onParallax = () => {
      const scrolled = window.scrollY;
      if (heroBg && scrolled < window.innerHeight * 1.5) {
        (heroBg as HTMLElement).style.transform = `translateY(${scrolled * 0.42}px)`;
      }
    };
    on(window, 'scroll', onParallax, { passive: true });

    // ─── Scroll reveal ──────────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      revealObserver.observe(el);
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
    cleanups.push(() => revealObserver.disconnect());

    // ─── Counter animation ──────────────────────────────────
    function animateCounter(el: Element) {
      const target = parseFloat((el as HTMLElement).dataset.target || '0');
      const suffix = (el as HTMLElement).dataset.suffix || '';
      const duration = 2200;
      el.textContent = '0' + suffix;
      const start = performance.now();
      function update(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-target]').forEach((el) => counterObserver.observe(el));
    cleanups.push(() => counterObserver.disconnect());

    // ─── Magnetic buttons ───────────────────────────────────
    document.querySelectorAll('.btn-magnetic').forEach((btnEl) => {
      const btn = btnEl as HTMLElement;
      const onMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (me.clientX - cx) * 0.28;
        const dy = (me.clientY - cy) * 0.28;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
        btn.style.transition = 'transform 0.1s ease';
      };
      const onLeave = () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };
      on(btn, 'mousemove', onMove);
      on(btn, 'mouseleave', onLeave);
    });

    // ─── Gallery filter ─────────────────────────────────────
    const filterTabs = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => {
      (item as HTMLElement).style.display = 'none';
    });
    filterTabs.forEach((tabEl) => {
      const tab = tabEl as HTMLElement;
      const onTabClick = () => {
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        galleryItems.forEach((itemEl) => {
          const item = itemEl as HTMLElement;
          if (item.dataset.category === filter) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          } else {
            item.style.transition = '';
            item.style.display = 'none';
          }
        });
      };
      on(tab, 'click', onTabClick);
    });

    // ─── Lightbox ───────────────────────────────────────────
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
    const lightboxClose = document.getElementById('lightbox-close');
    const closeLightbox = () => {
      lightbox?.classList.remove('open');
      document.body.style.overflow = '';
    };
    galleryItems.forEach((itemEl) => {
      const item = itemEl as HTMLElement;
      const onClick = () => {
        const src = item.dataset.full;
        if (src && lightboxImg && lightbox) {
          lightboxImg.src = src;
          lightboxImg.alt = item.querySelector('img')?.getAttribute('alt') || '';
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      };
      const onKeydown = (e: Event) => {
        const ke = e as KeyboardEvent;
        if (ke.key === 'Enter' || ke.key === ' ') {
          ke.preventDefault();
          onClick();
        }
      };
      on(item, 'click', onClick);
      on(item, 'keydown', onKeydown);
    });
    if (lightboxClose) on(lightboxClose, 'click', closeLightbox);
    if (lightbox) {
      on(lightbox, 'click', (e: Event) => {
        if (e.target === lightbox) closeLightbox();
      });
    }
    const onEscape = (e: Event) => {
      if ((e as KeyboardEvent).key === 'Escape') closeLightbox();
    };
    on(document, 'keydown', onEscape);

    // ─── Smooth scroll for in-page anchor links ────────────
    document.querySelectorAll('a[href^="#"]').forEach((aEl) => {
      const a = aEl as HTMLAnchorElement;
      const onAnchorClick = (e: Event) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      };
      on(a, 'click', onAnchorClick);
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
