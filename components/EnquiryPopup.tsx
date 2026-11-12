'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import { CONSENT_KEY } from '@/lib/consent';

// ─── Pop-up configuration (the only place to change these) ───────────
export const POPUP_ENABLED = true;
export const POPUP_DELAY_MS = 10_000;
// ─────────────────────────────────────────────────────────────────────

const SHOWN_KEY = 'sr_popup'; // set once the pop-up has appeared — never shows again
const ENQUIRED_KEY = 'sr_enquired'; // set by ContactForm on any successful enquiry

const SERVICE_BY_PATH: Record<string, string> = {
  '/home-staging': 'Property for Sale',
  '/serviced-accommodation-furniture-packages': 'Serviced Accommodation',
  '/hmo-furniture-packages': 'HMO',
  '/developer-home-staging': 'Property Developers',
};

const read = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

function pushEvent(event: string) {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event });
}

export default function EnquiryPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);

  // Never on the thank-you page, and only once per visitor
  useEffect(() => {
    if (!POPUP_ENABLED || pathname.startsWith('/thank-you')) return;
    if (read(SHOWN_KEY) || read(ENQUIRED_KEY)) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const show = () => {
      // If already enquired from another tab in the meantime, skip
      if (read(SHOWN_KEY) || read(ENQUIRED_KEY)) return;
      try {
        localStorage.setItem(SHOWN_KEY, '1');
      } catch {}
      restoreFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
      pushEvent('popup_shown');
    };
    const timer = setTimeout(() => {
      // Don't stack on top of the cookie banner — wait until it's answered
      if (read(CONSENT_KEY)) {
        show();
      } else {
        interval = setInterval(() => {
          if (read(CONSENT_KEY)) {
            clearInterval(interval);
            show();
          }
        }, 2000);
      }
    }, POPUP_DELAY_MS);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
    // Run once on mount — the pathname check only matters for the initial page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    pushEvent('popup_dismissed');
    restoreFocus.current?.focus?.();
  }, []);

  // Scroll lock, Esc, and focus trap while open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        dismiss();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([tabindex="-1"]), select, textarea'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="popup-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        className="popup-panel"
      >
        <button ref={closeRef} type="button" className="popup-close" aria-label="Close" onClick={dismiss}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="m3 3 10 10M13 3 3 13" />
          </svg>
        </button>
        <p className="section-label" style={{ textAlign: 'center' }}>Before You Go</p>
        <h2
          id="popup-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem,4vw,2.5rem)',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#2D2926',
            textAlign: 'center',
            margin: '0.75rem 0 0.75rem',
          }}
        >
          Get a <em style={{ fontStyle: 'italic' }}>Free</em> Staging Quote
        </h2>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6B6460', textAlign: 'center', maxWidth: '38ch', margin: '0 auto 1.75rem' }}>
          Tell us about your property and we&apos;ll come back with a tailored quote — no obligation.
        </p>
        <ContactForm dark={false} source="popup" defaultService={SERVICE_BY_PATH[pathname]} />
      </div>
    </div>
  );
}
