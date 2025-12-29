export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-soft-grid opacity-20" />
      <div className="absolute left-[-4rem] top-[-6rem] h-72 w-72 rounded-full bg-primary/35 blur-3xl animate-blob" />
      <div
        className="absolute right-[-5rem] top-10 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-mint/25 blur-3xl animate-blob"
        style={{ animationDelay: "6s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70" />
    </div>
  );
}
