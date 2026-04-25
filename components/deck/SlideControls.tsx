"use client";

type SlideControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
};

const buttonClass =
  "group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white shadow-[0_0_24px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:border-[#d4af37]/40 hover:bg-white/[0.08] hover:shadow-[0_0_28px_rgba(212,175,55,0.18)] disabled:cursor-not-allowed disabled:opacity-35";

export default function SlideControls({
  onPrev,
  onNext,
  canPrev,
  canNext
}: SlideControlsProps) {
  return (
    <div className="pointer-events-auto fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className={buttonClass}
        aria-label="Previous slide"
      >
        <span className="text-xl transition-transform duration-300 group-hover:-translate-x-0.5">{'<'}</span>
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className={buttonClass}
        aria-label="Next slide"
      >
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-0.5">{'>'}</span>
      </button>
    </div>
  );
}
