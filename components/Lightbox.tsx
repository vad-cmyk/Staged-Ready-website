export default function Lightbox() {
  return (
    <div id="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
      <button id="lightbox-close" aria-label="Close lightbox">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M1 1l14 14M15 1L1 15" />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img id="lightbox-img" src="" alt="" />
    </div>
  );
}
