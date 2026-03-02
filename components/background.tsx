"use client";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Warm parchment base */}
      <div className="absolute inset-0 bg-parchment" />

      {/* Paper texture overlay */}
      <div className="paper-texture absolute inset-0" />

      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-paperDark/30" />

      {/* Corner shadows for depth */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-gradient-radial from-transparent to-paperDark/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 bg-gradient-radial from-transparent to-paperDark/10 blur-3xl" />

      {/* Decorative corner elements */}
      <div className="absolute left-8 top-8">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-border opacity-30">
          <path d="M0 0L40 0L40 2L2 2L2 40L0 40L0 0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute right-8 bottom-8 rotate-180">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-border opacity-30">
          <path d="M0 0L40 0L40 2L2 2L2 40L0 40L0 0Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
