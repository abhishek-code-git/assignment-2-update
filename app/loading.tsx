export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-14 w-14 rounded-full border border-white/20 border-t-[#d4af37] animate-spin" />
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          Loading the experience
        </p>
      </div>
    </div>
  );
}
