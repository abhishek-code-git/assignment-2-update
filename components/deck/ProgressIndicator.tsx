"use client";

type ProgressIndicatorProps = {
  current: number;
  total: number;
};

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="pointer-events-none fixed right-5 top-5 z-50 flex items-center gap-3">
      <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
        <span key={current} className="slide-enter inline-block text-[0.7rem] font-medium uppercase tracking-[0.46em] text-white/80">
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="hidden h-px w-24 bg-gradient-to-r from-[#d4af37]/90 to-white/10 md:block" />
    </div>
  );
}
