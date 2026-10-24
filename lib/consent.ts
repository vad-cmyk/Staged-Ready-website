// Cookie consent state, shared by the banner and the inline Consent Mode script in app/layout.tsx.
// Bump CONSENT_VERSION whenever the cookie list changes so visitors are asked again.
export const CONSENT_KEY = 'sr_consent';
export const CONSENT_VERSION = 1;
export const OPEN_SETTINGS_EVENT = 'sr:open-cookie-settings';

export type Consent = { v: number; analytics: boolean; marketing: boolean };

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    return parsed.v === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: Consent = { v: CONSENT_VERSION, analytics, marketing };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked — the choice still applies for this page view.
  }
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  const gtag: (...args: any[]) => void =
    typeof w.gtag === 'function' ? w.gtag : function () { w.dataLayer.push(arguments); };
  gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  });
}

// Runs before Google Tag Manager loads: everything denied by default, then any saved choice applied.
export const consentDefaultsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
try {
  var c = JSON.parse(localStorage.getItem('${CONSENT_KEY}') || 'null');
  if (c && c.v === ${CONSENT_VERSION}) {
    gtag('consent', 'update', {
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.marketing ? 'granted' : 'denied',
      ad_user_data: c.marketing ? 'granted' : 'denied',
      ad_personalization: c.marketing ? 'granted' : 'denied'
    });
  }
} catch (e) {}
`;
