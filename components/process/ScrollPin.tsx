'use client';

import { type MutableRefObject, type RefObject, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Pins `target` and reports scroll progress (0–1) across `distance` viewport heights.
 * Loaded with next/dynamic only in desktop story mode, so phones never download GSAP.
 * useGSAP reverts the pin and trigger when this unmounts.
 */
export default function ScrollPin({
  target,
  distance,
  scrub,
  priority = 0,
  onProgress,
  triggerRef,
}: {
  target: RefObject<HTMLElement>;
  distance: number;
  scrub?: number;
  priority?: number;
  onProgress: (p: number) => void;
  triggerRef?: MutableRefObject<ScrollTrigger | null>;
}) {
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useGSAP(() => {
    const el = target.current;
    if (!el) return;
    const vars: ScrollTrigger.Vars = {
      trigger: el,
      // Centre in the space below the fixed header
      start: 'center center+=40',
      end: `+=${distance * 100}%`,
      pin: true,
      refreshPriority: priority,
    };
    let st: ScrollTrigger;
    if (scrub) {
      const proxy = { p: 0 };
      const tween = gsap.to(proxy, {
        p: 1,
        ease: 'none',
        scrollTrigger: { ...vars, scrub },
        onUpdate: () => cb.current(proxy.p),
      });
      st = tween.scrollTrigger!;
    } else {
      st = ScrollTrigger.create({ ...vars, onUpdate: (self) => cb.current(self.progress) });
    }
    if (triggerRef) triggerRef.current = st;
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    return () => {
      if (triggerRef) triggerRef.current = null;
    };
  });

  return null;
}
