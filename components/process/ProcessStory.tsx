'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '@/data/process';
import { CompareSlider, Viewfinder } from '@/components/process/StageOverlays';
import { STORY_QUERY, useMediaQuery } from '@/lib/useMediaQuery';

// Desktop story mode is pinned and scroll-driven; everything else gets stacked cards.
const ScrollPin = dynamic(() => import('@/components/process/ScrollPin'), { ssr: false });

const STAGE_SIZES = '(min-width: 1280px) 720px, 60vw';
const CARD_SIZES = '(min-width: 1280px) 660px, (min-width: 768px) 55vw, 100vw';
const PHOTO = 3;
const RESULTS = 4;
const n = PROCESS_STEPS.length;

function StepMedia({ index, sizes, interactive }: { index: number; sizes: string; interactive: boolean }) {
  const step = PROCESS_STEPS[index];
  return (
    <>
      <Image src={step.image} alt={step.alt} fill sizes={sizes} loading="lazy" className="ps-img" />
      {index === PHOTO && <Viewfinder />}
      {index === RESULTS && <CompareSlider sizes={sizes} interactive={interactive} />}
    </>
  );
}

export default function ProcessStory() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const story = useMediaQuery(STORY_QUERY);
  const [active, setActive] = useState(0);

  const onProgress = useCallback((progress: number) => {
    const p = progress * n;
    fillRefs.current.forEach((el, i) => {
      if (el) el.style.transform = `scaleX(${Math.min(1, Math.max(0, p - i))})`;
    });
    setActive(Math.min(n - 1, Math.floor(p)));
  }, []);

  useEffect(() => {
    if (!story) setActive(0);
  }, [story]);

  // Camera flash each time the Photography step becomes active
  const flashed = useRef(false);
  useEffect(() => {
    if (!story) return;
    if (active !== PHOTO) {
      flashed.current = false;
      return;
    }
    if (flashed.current) return;
    flashed.current = true;
    rootRef.current
      ?.querySelector('.ps-stage .ps-flash')
      ?.animate([{ opacity: 0.85 }, { opacity: 0 }], { duration: 900, easing: 'ease-out' });
  }, [active, story]);

  // Card mode: reveal each card once as it scrolls into view (flash on the photography card)
  useEffect(() => {
    if (story) return;
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.ps-step'));
    if (reduce) {
      cards.forEach((c) => c.classList.add('ps-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('ps-in');
          el.querySelector('.ps-flash')?.animate([{ opacity: 0.85 }, { opacity: 0 }], {
            duration: 900,
            delay: 500,
            easing: 'ease-out',
            fill: 'backwards',
          });
          io.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [story]);

  const goTo = (i: number) => {
    const st = triggerRef.current;
    if (!st) return;
    const top = st.start + ((i + 0.5) / n) * (st.end - st.start);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const StepHead = story ? 'button' : 'div';

  return (
    <div ref={rootRef} className="ps-story" data-mode={story ? 'story' : 'cards'}>
      <div ref={pinRef} className="ps-story-pin">
        {/* Desktop stage: one frame, images crossfade as steps change */}
        <div className="ps-stage-col" aria-hidden={!story}>
          <div className="ps-stage" data-active={active}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="ps-stage-layer" data-on={i === active} aria-hidden={i !== active}>
                <StepMedia index={i} sizes={STAGE_SIZES} interactive={story && i === active} />
              </div>
            ))}
          </div>
          <div className="ps-stage-foot">
            <div className="ps-progress" aria-hidden="true">
              {PROCESS_STEPS.map((step, i) => (
                <span key={step.number} className="ps-progress-seg">
                  <span ref={(el) => { fillRefs.current[i] = el; }} className="ps-progress-fill" />
                </span>
              ))}
            </div>
            <p className="ps-caption">
              {active === RESULTS ? 'Drag the photo to see the before' : 'Illustrative images'}
            </p>
          </div>
        </div>

        <ol className="ps-steps">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.number} className="ps-step" data-on={i === active}>
              <div className="ps-card-media">
                <div className="ps-card-frame">
                  <StepMedia index={i} sizes={CARD_SIZES} interactive={!story} />
                </div>
                {i === RESULTS && <p className="ps-caption ps-card-caption">Drag the photo to see the before</p>}
              </div>
              <div className="ps-step-body">
                <StepHead
                  {...(story
                    ? {
                        type: 'button' as const,
                        onClick: () => goTo(i),
                        'aria-current': i === active ? ('step' as const) : undefined,
                      }
                    : {})}
                  className="ps-step-head"
                >
                  <span className="ps-step-num">{step.number}</span>
                  <span className="ps-step-text">
                    <span className="ps-step-eyebrow">{step.eyebrow}</span>
                    <span className="ps-step-title">{step.title}</span>
                  </span>
                </StepHead>
                <div className="ps-step-desc">
                  <div>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="ps-caption ps-cards-note">Illustrative images</p>
      {story && <ScrollPin target={pinRef} distance={n} onProgress={onProgress} triggerRef={triggerRef} />}
    </div>
  );
}
