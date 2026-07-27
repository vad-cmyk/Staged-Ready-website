'use client';

import { useEffect } from 'react';

export default function ConversionTracker() {
  useEffect(() => {
    // Ensure dataLayer exists so the event is queued even if gtag.js hasn't
    // finished loading yet — the library will process it once it initialises.
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    const gtag: (...args: any[]) => void =
      typeof w.gtag === 'function'
        ? w.gtag
        : function () { w.dataLayer.push(arguments); };

    gtag('event', 'conversion', {
      send_to: 'AW-18275103746/C9IxCNu-k8YcEIL0n4pE',
    });
  }, []);
  return null;
}
