"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";

const venues = [
  {
    name: "Grand Atrium",
    capacity: "Up to 1,500 guests",
    description: "Ideal for launch events, fashion presentations, and large sponsor takeovers."
  },
  {
    name: "Fashion Avenue Stage",
    capacity: "Up to 600 guests",
    description: "A premium runway and content-ready environment for brand storytelling."
  },
  {
    name: "Outdoor Terrace",
    capacity: "Up to 400 guests",
    description: "Sunset dining, private receptions, and high-end curated hospitality."
  }
];

export default function BookingSection() {
  return (
    <SectionWrapper
      id="booking"
      eyebrow="Event Booking Module"
      title="Book the venue. Build the moment."
      description="Choose a space, define the format, and convert the mall into a bespoke media and hospitality environment."
      className="pb-28"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {venues.map((venue, index) => (
          <article
            key={venue.name}
            style={{ transitionDelay: `${index * 0.05}s` }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 reveal reveal-visible"
          >
            <p className="eyebrow mb-4">Venue {String(index + 1).padStart(2, "0")}</p>
            <h3 className="display-title text-3xl">{venue.name}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              {venue.capacity}
            </p>
            <p className="mt-4 text-sm leading-6 text-white/70">{venue.description}</p>
            <div className="mt-6">
              <CTAButton href="mailto:events@dubaimall.com">Request Booking</CTAButton>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
