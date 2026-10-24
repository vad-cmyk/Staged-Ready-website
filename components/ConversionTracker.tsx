'use client';

import { useEffect } from 'react';
import { GA4_ID } from '@/lib/analytics';

export default function ConversionTracker() {
  useEffect(() => {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    const gtag: (...args: any[]) => void =
      typeof w.gtag === 'function'
        ? w.gtag
        : function () { w.dataLayer.push(arguments); };

    // Google Ads conversion — fires once per successful enquiry
    gtag('event', 'conversion', {
      send_to: 'AW-18275103746/C9IxCNu-k8YcEIL0n4pE',
    });

    // GA4 lead event
    gtag('event', 'generate_lead', { send_to: GA4_ID });
  }, []);
  return null;
}
