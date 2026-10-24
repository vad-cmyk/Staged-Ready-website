'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent } from '@/lib/consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const focusOnOpen = useRef(false);

  useEffect(() => {
    if (open && focusOnOpen.current) {
      focusOnOpen.current = false;
      panelRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const saved = readConsent();
    if (!saved) setOpen(true);
    else {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
    }

    const onOpenSettings = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      focusOnOpen.current = true;
      setShowSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpenSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpenSettings);
  }, []);

  function choose(a: boolean, m: boolean) {
    saveConsent(a, m);
    setAnalytics(a);
    setMarketing(m);
    setOpen(false);
    setShowSettings(false);
    returnFocus.current?.focus();
  }

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      role="region"
      aria-label="Cookie choices"
      className="cookie-panel"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && readConsent()) {
          setOpen(false);
          setShowSettings(false);
          returnFocus.current?.focus();
        }
      }}
    >
      <p className="font-display" style={{ fontSize: '1.375rem', fontWeight: 400, color: '#F2EDE8', lineHeight: 1.2, marginBottom: '0.5rem' }}>
        Cookies on this site
      </p>
      <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'rgba(242,237,232,0.8)', marginBottom: '1.25rem' }}>
        We use Google Analytics and Google Ads cookies to understand visits and measure our adverts — only if you
        accept.{' '}
        <Link href="/cookies" className="inline-link" style={{ color: '#DFC08A', textDecoration: 'underline' }}>
          Cookie policy
        </Link>
      </p>

      {showSettings && (
        <fieldset style={{ border: 0, padding: 0, margin: '0 0 1.25rem', display: 'grid', gap: '0.75rem' }}>
          <legend className="sr-only">Cookie categories</legend>
          <label className="cookie-option">
            <input type="checkbox" checked disabled />
            <span>
              <strong>Strictly necessary</strong>
              <span>Remembers your cookie choice. Always on.</span>
            </span>
          </label>
          <label className="cookie-option">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            <span>
              <strong>Analytics</strong>
              <span>Google Analytics — counts visits and which pages are useful.</span>
            </span>
          </label>
          <label className="cookie-option">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            <span>
              <strong>Marketing</strong>
              <span>Google Ads — tells us when an advert led to an enquiry.</span>
            </span>
          </label>
        </fieldset>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {showSettings ? (
          <>
            <button type="button" className="cookie-btn" onClick={() => choose(analytics, marketing)}>
              Save choices
            </button>
            <button type="button" className="cookie-btn" onClick={() => choose(true, true)}>
              Accept all
            </button>
          </>
        ) : (
          <>
            <button type="button" className="cookie-btn" onClick={() => choose(false, false)}>
              Reject
            </button>
            <button type="button" className="cookie-btn" onClick={() => choose(true, true)}>
              Accept
            </button>
          </>
        )}
      </div>
      {!showSettings && (
        <button type="button" className="cookie-text-btn" onClick={() => setShowSettings(true)}>
          Manage settings
        </button>
      )}
    </div>
  );
}

export function CookieSettingsLink({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      className={className}
      style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', ...style }}
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}
