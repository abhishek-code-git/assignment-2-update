"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";

const events = [
  {
    title: "Fashion launches",
    copy: "Seasonal reveals with premium audience capture and editorial value."
  },
  {
    title: "Concert sponsorships",
    copy: "Large-scale entertainment activations with integrated brand placement."
  },
  {
    title: "Cultural festivals",
    copy: "Ramadan, holiday, and citywide moments with meaningful footfall."
  }
];

export default function EventsSection() {
  return (
    <SectionWrapper
      id="events"
      eyebrow="Events & Platform"
      title="A flexible stage for the moments that matter."
      description="From headline concerts to brand activations, the platform is built to support programming that drives visibility and revenue."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4">
          {events.map((event, index) => (
            <div
              key={event.title}
              style={{ transitionDelay: `${index * 0.06}s` }}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 reveal reveal-visible"
            >
              <p className="eyebrow mb-4">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="display-title text-3xl">{event.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{event.copy}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(212,175,55,0.12)_0%,rgba(255,255,255,0.04)_100%)] p-7">
          <p className="eyebrow mb-5">Activate the destination</p>
          <h3 className="display-title text-3xl sm:text-4xl">
            Present your brand at the center of a high-traffic, high-intent audience.
          </h3>
          <p className="mt-5 text-sm leading-7 text-white/72">
            A sponsorship layer that can be tailored for launches, omnichannel campaigns, seasonal programming, and premium partner integrations.
          </p>
          <div className="mt-8">
            <CTAButton href="#booking">Start Planning</CTAButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
