"use client";

import SectionWrapper from "@/components/SectionWrapper";
import StatsCounter from "@/components/StatsCounter";

const stats = [
  { value: 105, suffix: "M+", label: "Annual visitors" },
  { value: 1200, suffix: "+", label: "Retail and lifestyle brands" },
  { value: 250, suffix: "+", label: "Annual activations and events" },
  { value: 80, suffix: "+", label: "Dining and hospitality concepts" }
];

export default function WhyPropertySection() {
  return (
    <SectionWrapper
      id="why"
      eyebrow="Why This Property"
      title="A premium platform with scale, footfall, and cultural gravity."
      description="Built for brands that want more than exposure: they want stage presence, repeat visitation, and an audience that already arrives in discovery mode."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCounter key={stat.label} {...stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
