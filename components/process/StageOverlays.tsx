'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PROCESS_BEFORE } from '@/data/process';

/** Camera viewfinder drawn over the Photography step. Decorative only. */
export function Viewfinder() {
  return (
    <div className="ps-viewfinder" aria-hidden="true">
      <span className="ps-vf-corner ps-vf-tl" />
      <span className="ps-vf-corner ps-vf-tr" />
      <span className="ps-vf-corner ps-vf-bl" />
      <span className="ps-vf-corner ps-vf-br" />
      <span className="ps-vf-focus" />
      <span className="ps-chip ps-vf-chip">1/60 · f/8 · ISO 200</span>
      <span className="ps-flash" />
    </div>
  );
}

/**
 * Before/after comparison for the Results step. The empty room sits on top and is
 * clipped from the right, so dragging left reveals more of the staged room.
 * A transparent full-size range input drives it for mouse, touch and keyboard.
 */
export function CompareSlider({ sizes, interactive = true }: { sizes: string; interactive?: boolean }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="ps-compare" style={{ ['--pos' as string]: `${pos}%` }}>
      <div className="ps-compare-before">
        <Image src={PROCESS_BEFORE.image} alt={PROCESS_BEFORE.alt} fill sizes={sizes} loading="lazy" className="ps-img" />
      </div>
      <span className="ps-compare-divider" aria-hidden="true">
        <span className="ps-compare-handle">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.5 4.5 2 9l4.5 4.5M11.5 4.5 16 9l-4.5 4.5" />
          </svg>
        </span>
      </span>
      <span className="ps-chip ps-compare-label ps-compare-label-before" aria-hidden="true">Before</span>
      <span className="ps-chip ps-compare-label ps-compare-label-after" aria-hidden="true">After</span>
      <span className="ps-sold" aria-hidden="true">Sold</span>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare the room before and after staging"
        aria-valuetext={`${pos}% before, ${100 - pos}% after`}
        tabIndex={interactive ? 0 : -1}
        className="ps-compare-input"
      />
    </div>
  );
}
