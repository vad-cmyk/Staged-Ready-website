'use client';

import { useId, useRef, useState } from 'react';

type Props = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const sliderId = useId();

  const setFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '4px', touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={afterImage} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / position) * 100 || 0}%`, maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, width: '2px', background: '#F2EDE8', boxShadow: '0 0 0 1px rgba(45,41,38,0.3)' }}
      >
        <div
          style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '36px', height: '36px', borderRadius: '50%', background: '#F2EDE8',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(45,41,38,0.3)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#2D2926" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 2L1 7l4 5M9 2l4 5-4 5" />
          </svg>
        </div>
      </div>

      <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2EDE8', background: 'rgba(45,41,38,0.55)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
        {beforeLabel}
      </span>
      <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2EDE8', background: 'rgba(45,41,38,0.55)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
        {afterLabel}
      </span>

      <label htmlFor={sliderId} className="sr-only">
        Drag to compare before and after images
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Before and after comparison slider"
        style={{ margin: 0 }}
      />
    </div>
  );
}
