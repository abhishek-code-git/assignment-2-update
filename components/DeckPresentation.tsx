"use client";

import { useEffect, useState } from "react";
import type { ReactNode, WheelEvent } from "react";
import SlideContainer from "@/components/deck/SlideContainer";
import VideoBackground from "@/components/deck/VideoBackground";
import SideNav from "@/components/deck/SideNav";
import FloatingMenu from "@/components/deck/FloatingMenu";
import ProgressIndicator from "@/components/deck/ProgressIndicator";
import SlideControls from "@/components/deck/SlideControls";
import CTASection from "@/components/deck/CTASection";

type SlideItem = {
  id: string;
  label: string;
  src: string;
  overlayClassName?: string;
};

const slides: SlideItem[] = [
  { id: "hero", label: "Hero", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", overlayClassName: "bg-black/65" },
  { id: "why", label: "Why", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", overlayClassName: "bg-black/70" },
  { id: "retail", label: "Retail", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", overlayClassName: "bg-black/72" },
  { id: "luxury", label: "Luxury", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", overlayClassName: "bg-black/74" },
  { id: "entertainment", label: "Play", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", overlayClassName: "bg-black/72" },
  { id: "events", label: "Events", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", overlayClassName: "bg-black/72" },
  { id: "cta", label: "Close", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", overlayClassName: "bg-black/76" }
];

const counters = [
  { value: 28500000, label: "Annual visitors" },
  { value: 120, label: "Nationalities reached" },
  { value: 3600000, label: "Sq ft of scale", suffix: "+" }
];

const brands = ["Cartier", "Louis Vuitton", "Rolex", "Dior", "Gucci", "Prada", "Chanel", "Hermes"];
const premiumSignals = ["Global visibility", "High intent traffic", "Luxury dwell time"];
const entertainmentTiles = ["Immersive attractions", "Family draw", "Icon moments"];
const eventTiles = ["Concerts", "Brand launches", "Private activations"];

function AnimatedNumber({
  value,
  suffix = "",
  active
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let raf = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return (
    <div className="display-title text-5xl leading-none sm:text-6xl lg:text-7xl">
      {count.toLocaleString()}
      <span className="text-[#d4af37]">{suffix}</span>
    </div>
  );
}

function SlideHeadline({
  eyebrow,
  title,
  subtext
}: {
  eyebrow: string;
  title: string;
  subtext?: string;
}) {
  return (
    <div className="max-w-5xl">
      <p className="slide-enter text-[0.68rem] uppercase tracking-[0.46em] text-[#d4af37]">
        {eyebrow}
      </p>
      <h2 className="display-title mt-5 text-6xl leading-[0.9] text-white sm:text-8xl lg:text-[7.5rem]">
        {title}
      </h2>
      {subtext ? (
        <p className="mt-6 max-w-2xl text-[0.72rem] uppercase tracking-[0.28em] text-white/55 sm:text-[0.8rem]">
          {subtext}
        </p>
      ) : null}
    </div>
  );
}

function SlideShell({
  slide,
  children
}: {
  slide: SlideItem;
  children: ReactNode;
}) {
  return (
    <section key={slide.id} className="deck-frame absolute inset-0 slide-enter">
      <VideoBackground src={slide.src} overlayClassName={slide.overlayClassName} />
      {children}
    </section>
  );
}

export default function DeckPresentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];

  const goToSlide = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    setActiveIndex(index);
  };

  const goPrev = () => goToSlide(activeIndex - 1);
  const goNext = () => goToSlide(activeIndex + 1);

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    const threshold = 22;
    if (Math.abs(event.deltaY) < threshold) return;
    if (event.deltaY > 0) goNext();
    else goPrev();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowUp" || event.key === "PageUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const renderSlide = () => {
    switch (currentSlide.id) {
      case "hero":
        return (
          <div className="relative z-10 flex h-full w-full items-end">
            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-24 lg:px-20 lg:pb-20">
              <div className="flex max-w-5xl flex-col gap-6">
                <p className="slide-enter text-[0.68rem] uppercase tracking-[0.46em] text-white/60">
                  Dubai, UAE
                </p>
                <h1 className="display-title max-w-6xl text-7xl leading-[0.86] text-white sm:text-9xl lg:text-[10rem]">
                  Not a Mall.
                  <br />
                  A Global Destination.
                </h1>
                <p className="max-w-2xl text-[0.72rem] uppercase tracking-[0.28em] text-white/72 sm:text-[0.8rem]">
                  A cinematic environment built to convert attention into leasing, events, and brand demand.
                </p>
              </div>
            </div>
          </div>
        );
      case "why":
        return (
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-20">
              <div className="space-y-6">
                <SlideHeadline
                  eyebrow="Business Opportunity"
                  title="Why this matters."
                  subtext="Scale. Reach. Demand already in motion."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  {["High footfall", "Premium catchment", "All-day conversion"].map((item) => (
                    <div
                      key={item}
                      className="glass-panel rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.32em] text-white/70 transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(212,175,55,0.16)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {counters.map((counter) => (
                  <div
                    key={counter.label}
                    className="glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                  >
                    <AnimatedNumber
                      value={counter.value}
                      suffix={counter.suffix ?? "+"}
                      active={activeIndex === 1}
                    />
                    <p className="mt-4 text-xs uppercase tracking-[0.34em] text-white/55">
                      {counter.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "retail":
        return (
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-20">
              <div className="space-y-5">
                <SlideHeadline
                  eyebrow="Retail Opportunity"
                  title="Retail opportunity."
                  subtext="A destination where premium brands meet proven demand."
                />
                <p className="max-w-xl text-[0.72rem] uppercase tracking-[0.28em] text-white/50">
                  Revenue-first placement for brands that want scale, visibility, and daily spend.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {brands.map((brand, index) => (
                  <div
                    key={brand}
                    className={`glass-panel flex min-h-28 items-end rounded-[26px] p-5 text-white/88 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.16)] ${
                      index === 0 || index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div>
                      <div className="mb-3 h-px w-12 bg-[#d4af37]/80" />
                      <div className="display-title text-2xl">{brand}</div>
                      <div className="mt-1 text-[0.66rem] uppercase tracking-[0.3em] text-white/35">
                        Flagship demand
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "luxury":
        return (
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-20">
              <div className="space-y-6">
                <SlideHeadline
                  eyebrow="Luxury Positioning"
                  title="Luxury positioning."
                  subtext="Minimal text. Maximum presence."
                />
                <div className="flex flex-wrap gap-3 pt-3">
                  {premiumSignals.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.32em] text-white/68 transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel relative overflow-hidden rounded-[34px] p-8">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(212,175,55,0.16), transparent 38%)"
                  }}
                />
                <div className="relative">
                  <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[#d4af37]">
                    Premium Zone
                  </p>
                  <h3 className="display-title mt-6 text-4xl leading-[0.95] sm:text-5xl">
                    Designed for high-value brand
                    <br />
                    stories and elevated spend.
                  </h3>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-white/20 via-[#d4af37]/80 to-transparent" />
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {["Quiet confidence", "Rarefied audience", "Luxury intent"].map((item) => (
                      <div key={item} className="rounded-3xl border border-white/8 bg-black/30 p-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(212,175,55,0.1)]">
                        <div className="text-[0.64rem] uppercase tracking-[0.32em] text-white/45">
                          Signal
                        </div>
                        <div className="mt-3 text-lg text-white/85">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "entertainment":
        return (
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.98fr_1.02fr] lg:px-20">
              <div className="space-y-6">
                <SlideHeadline
                  eyebrow="Entertainment Power"
                  title="Entertainment power."
                  subtext="Not just traffic. Attraction."
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {entertainmentTiles.map((item, index) => (
                  <div
                    key={item}
                    className={`glass-panel rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.16)] ${
                      index === 0 ? "md:translate-y-8" : ""
                    } ${index === 2 ? "md:translate-y-4" : ""}`}
                  >
                    <div
                      className="mb-10 h-44 rounded-[22px]"
                      style={{
                        background:
                          "linear-gradient(160deg, rgba(212,175,55,0.18), rgba(255,255,255,0.04), rgba(0,0,0,0.35))"
                      }}
                    />
                    <div className="text-[0.66rem] uppercase tracking-[0.36em] text-[#d4af37]">
                      Attraction
                    </div>
                    <div className="display-title mt-3 text-2xl">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "events":
        return (
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-20">
              <div className="space-y-6">
                <SlideHeadline
                  eyebrow="Events Platform"
                  title="Events platform."
                  subtext="A global stage for concerts, activations, and launches."
                />
              </div>

              <div className="space-y-4">
                {eventTiles.map((item, index) => (
                  <div
                    key={item}
                    className="glass-panel flex items-center justify-between rounded-[28px] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.14)]"
                  >
                    <div>
                      <div className="text-[0.65rem] uppercase tracking-[0.34em] text-white/42">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="display-title mt-2 text-2xl">{item}</div>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04]" />
                  </div>
                ))}
                <div className="rounded-[32px] border border-white/10 bg-black/35 p-6">
                  <div className="text-[0.68rem] uppercase tracking-[0.4em] text-[#d4af37]">
                    Stage moment
                  </div>
                  <div
                    className="mt-4 h-40 rounded-[26px]"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(212,175,55,0.18), rgba(255,255,255,0.03), rgba(0,0,0,0.5))"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "cta":
        return <CTASection />;
      default:
        return null;
    }
  };

  return (
    <SlideContainer>
      <FloatingMenu
        slides={slides.map((slide) => ({ label: slide.label }))}
        activeIndex={activeIndex}
        onSelect={goToSlide}
      />
      <SideNav
        slides={slides.map((slide) => ({ label: slide.label }))}
        activeIndex={activeIndex}
        onSelect={goToSlide}
      />
      <ProgressIndicator current={activeIndex + 1} total={slides.length} />
      <SlideControls onPrev={goPrev} onNext={goNext} canPrev={activeIndex > 0} canNext={activeIndex < slides.length - 1} />

      <main className="deck-stage" onWheel={onWheel}>
        <SlideShell slide={currentSlide}>{renderSlide()}</SlideShell>
      </main>

      <div className="pointer-events-none fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[0.68rem] uppercase tracking-[0.36em] text-white/50 backdrop-blur-xl">
        {currentSlide.label}
      </div>
    </SlideContainer>
  );
}
