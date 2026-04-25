"use client";

type SlideMeta = {
  label: string;
};

type SideNavProps = {
  slides: SlideMeta[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function SideNav({ slides, activeIndex, onSelect }: SideNavProps) {
  return (
    <aside className="pointer-events-auto fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <div className="relative rounded-full border border-white/10 bg-black/35 px-3 py-5 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="absolute left-1/2 top-5 h-[calc(100%-40px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#d4af37]/35 via-white/12 to-transparent" />
        <div className="absolute left-1/2 top-5 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent opacity-80 blur-[0.5px]" />

        <div className="relative flex flex-col items-center gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.label}
                type="button"
                onClick={() => onSelect(index)}
                className="group relative flex items-center gap-4 py-1.5 pl-1 pr-2 text-left transition-transform duration-300 hover:scale-[1.03]"
                aria-label={`Go to ${slide.label}`}
              >
                <span
                  className={`relative flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-[#d4af37]/60 bg-[#d4af37]/10"
                      : "border-white/15 bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.95)]" : "bg-white/45"
                    }`}
                  />
                </span>

                <span
                  className={`min-w-[7rem] text-[0.68rem] uppercase tracking-[0.42em] transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/45 group-hover:text-white/80"
                  }`}
                >
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
