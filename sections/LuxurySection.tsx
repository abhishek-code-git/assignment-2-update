"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

const notes = [
  "Private clienteling and VIP hosting",
  "Gold-level brand presentation and wayfinding",
  "High-dwell premium corridors with cinematic lighting",
  "Tailored sponsorship and co-branded experiences"
];

export default function LuxurySection() {
  return (
    <SectionWrapper
      id="luxury"
      eyebrow="Luxury Section"
      title="Dark, quiet, and expensive in all the right ways."
      description="This chapter is about atmosphere. The tone is restrained, the contrast is high, and the details do the selling."
      className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(212,175,55,0.03)_100%)]"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
          <div className="relative min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury retail ambience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute inset-0 flex items-end p-7">
              <div>
                <p className="eyebrow mb-4">VIP Experience</p>
                <h3 className="display-title text-3xl sm:text-4xl">
                  A premium canvas for the world's most exacting brands.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Platform Features</p>
          <ul className="mt-6 space-y-4">
            {notes.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37]" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="#booking">Request a Curated Walkthrough</CTAButton>
            <CTAButton href="#events" variant="secondary">
              See Event Platform
            </CTAButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
