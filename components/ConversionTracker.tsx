'use client';

import { useEffect } from 'react';

export default function ConversionTracker() {
  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18275103746/C91xCNu-k8YcEILon4pE',
      });
    }
  }, []);
  return null;
}
