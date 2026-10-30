'use client';

import { useSyncExternalStore } from 'react';

// Desktop "story" mode for the process section: pinned and scroll-driven.
// Keep in sync with the matching media query in globals.css.
export const STORY_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

/** Live media query match. False during server render, so the server HTML is the mobile/card markup. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
