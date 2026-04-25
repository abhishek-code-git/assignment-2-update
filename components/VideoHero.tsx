"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";

type VideoHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  videoSrc: string;
  poster: string;
};

export default function VideoHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  videoSrc,
  poster
}: VideoHeroProps) {
  const [offset, setOffset] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 900, 1);
      setOffset({
        y: progress * 180,
        opacity: 1 - progress * 0.75
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${offset.y}px, 0)`,
          opacity: offset.opacity
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.45)_35%,rgba(0,0,0,0.9)_100%)]" />

      <div className="luxury-container relative z-10 flex min-h-screen items-end pb-16 pt-28 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl">
          <p className="eyebrow mb-6 animate-[fadeUp_0.7s_ease-out_both]">
            {eyebrow}
          </p>
          <h1 className="display-title max-w-4xl text-5xl leading-[0.92] animate-[fadeUp_0.85s_ease-out_0.08s_both] sm:text-7xl lg:text-[7.5rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 animate-[fadeUp_0.7s_ease-out_0.18s_both] sm:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fadeUp_0.7s_ease-out_0.26s_both]">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
