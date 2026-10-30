'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { PROCESS_VIDEO } from '@/data/process';
import { STORY_QUERY, useMediaQuery } from '@/lib/useMediaQuery';

const ScrollPin = dynamic(() => import('@/components/process/ScrollPin'), { ssr: false });

const stageAt = (t: number) => {
  let i = 0;
  PROCESS_VIDEO.stages.forEach((s, idx) => {
    if (t >= s.at) i = idx;
  });
  return i;
};

export default function ProcessVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrubbing = useMediaQuery(STORY_QUERY);
  const [near, setNear] = useState(false);
  const [stage, setStage] = useState(0);
  const [playState, setPlayState] = useState<'idle' | 'playing' | 'ended'>('idle');

  // Only fetch the poster and video once the visitor is getting close, so it never competes with the hero
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || near) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '800px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  // Leaving story mode (resize / motion setting change) resets to the first frame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setStage(0);
    setPlayState('idle');
  }, [scrubbing]);

  const onScrub = useCallback((p: number) => {
    const video = videoRef.current;
    if (!video) return;
    const d = video.duration || 8;
    const t = p * (d - 0.05);
    if (video.readyState >= 1) video.currentTime = t;
    setStage(stageAt(t));
  }, []);

  const onPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playState === 'playing') {
      video.pause();
      return;
    }
    if (video.ended || playState === 'ended') video.currentTime = 0;
    video.play().catch(() => setPlayState('idle'));
  };

  const buttonLabel = playState === 'playing' ? 'Pause' : playState === 'ended' ? 'Replay' : 'Play';

  return (
    <div className="ps-video-pin">
      <div ref={wrapRef} className="ps-video-block">
        <h3 className="font-display ps-video-heading">Watch a room come together</h3>
        <div className="ps-video-frame">
          <video
            ref={videoRef}
            className="ps-video"
            src={PROCESS_VIDEO.src}
            poster={near ? PROCESS_VIDEO.poster : undefined}
            muted
            playsInline
            preload={!near ? 'none' : scrubbing ? 'auto' : 'metadata'}
            aria-label="Time-lapse of an empty living room being planned, furnished and styled"
            onPlay={() => setPlayState('playing')}
            onPause={(e) => !e.currentTarget.ended && setPlayState('idle')}
            onEnded={() => setPlayState('ended')}
            onTimeUpdate={(e) => !scrubbing && setStage(stageAt(e.currentTarget.currentTime))}
          />
          <span className="ps-chip ps-video-stage" aria-hidden="true">
            {PROCESS_VIDEO.stages[stage].label}
          </span>
          <span className="ps-chip ps-video-note">Illustrative video</span>
          {!scrubbing && (
            <button
              type="button"
              className={`ps-play${playState === 'playing' ? ' ps-play-playing' : ''}`}
              onClick={onPlay}
              aria-label={`${buttonLabel} video`}
            >
              {playState === 'playing' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="2" width="3.5" height="12" rx="1" />
                  <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                </svg>
              ) : playState === 'ended' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9M2.5 2.5v3.2h3.2" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.5v11l9.5-5.5z" />
                </svg>
              )}
              <span>{buttonLabel}</span>
            </button>
          )}
        </div>
      </div>
      {scrubbing && <ScrollPin target={wrapRef} distance={2} scrub={0.5} priority={1} onProgress={onScrub} />}
    </div>
  );
}
