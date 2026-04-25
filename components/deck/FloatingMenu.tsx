"use client";

type SlideMeta = {
  label: string;
};

type FloatingMenuProps = {
  slides: SlideMeta[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function FloatingMenu({ slides, activeIndex, onSelect }: FloatingMenuProps) {
  return (
    <div className="pointer-events-auto fixed left-1/2 top-4 z-50 w-[min(94vw,56rem)] -translate-x-1/2">
      <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#d4af37] shadow-[0_0_16px_rgba(212,175,55,0.95)]" />
          <span className="text-[0.65rem] uppercase tracking-[0.42em] text-white/45">
            Jump Slides
          </span>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.label}
                type="button"
                onClick={() => onSelect(index)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.67rem] uppercase tracking-[0.34em] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${
                  isActive
                    ? "border-[#d4af37]/40 bg-[#d4af37]/12 text-white shadow-[0_0_24px_rgba(212,175,55,0.18)]"
                    : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/85"
                }`}
                aria-label={`Jump to ${slide.label}`}
              >
                {slide.label}
              </button>
            );
          })}
        </div>

        <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.34em] text-white/55 lg:block">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
