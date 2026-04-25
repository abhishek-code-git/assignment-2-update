"use client";

import VideoHero from "@/components/VideoHero";

export default function HeroSection() {
  return (
    <div id="hero">
      <VideoHero
        eyebrow="Dubai Mall / Sales Deck"
        title="Not a Mall. A Global Destination."
        description="A cinematic retail, dining, and entertainment platform built to attract the world's most desired brands, premium sponsors, and high-impact event partners."
        primaryCta={{ label: "Explore the Opportunity", href: "#why" }}
        secondaryCta={{ label: "View Venues", href: "#booking" }}
        videoSrc="https://media.w3.org/2010/05/sintel/trailer.mp4"
        poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
      />
    </div>
  );
}
