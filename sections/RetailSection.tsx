"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CardGrid from "@/components/CardGrid";

const brands = [
  {
    title: "Rolex",
    description: "Timeless precision and flagships positioned for high-intent luxury discovery.",
    meta: "Watchmaking"
  },
  {
    title: "Louis Vuitton",
    description: "Icon retail frontage with the scale to anchor campaigns and seasonal launches.",
    meta: "Fashion"
  },
  {
    title: "Tiffany & Co.",
    description: "A heritage destination for gifting moments, product reveals, and brand storytelling.",
    meta: "Jewelry"
  },
  {
    title: "Prada",
    description: "Fashion-led retail space designed for elevated merchandising and pop-up activations.",
    meta: "Luxury"
  },
  {
    title: "Apple",
    description: "Technology showcase energy with constant traffic and premium dwell time.",
    meta: "Innovation"
  },
  {
    title: "Dior",
    description: "Editorial-level retail presence for launches, capsule drops, and VIP moments.",
    meta: "Beauty / Couture"
  }
];

export default function RetailSection() {
  return (
    <SectionWrapper
      id="retail"
      eyebrow="Retail Section"
      title="A curated brand ecosystem with global recognition."
      description="The retail mix is the engine. The environment is designed to make every brand feel larger, sharper, and more aspirational."
    >
      <CardGrid items={brands} columns={3} />
    </SectionWrapper>
  );
}
