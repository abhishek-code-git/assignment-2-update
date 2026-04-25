"use client";

import SectionWrapper from "@/components/SectionWrapper";
import VideoCard from "@/components/VideoCard";

const dining = [
  {
    title: "Sunset Tables",
    description: "Terrace dining with a destination feel and high-value lingering.",
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    poster: "https://images.unsplash.com/photo-1555992336-cbf90b3f6f48?auto=format&fit=crop&w=900&q=80",
    label: "Dining"
  },
  {
    title: "Chef's Counter",
    description: "Live culinary theatre for launches, partner dinners, and brand hosting.",
    src: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    poster: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    label: "Lifestyle"
  },
  {
    title: "Private Lounge",
    description: "A quieter premium environment for sponsor moments and executive hosting.",
    src: "https://media.w3.org/2010/05/video/movie_300.mp4",
    poster: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
    label: "Hospitality"
  }
];

export default function DiningSection() {
  return (
    <SectionWrapper
      id="dining"
      eyebrow="Dining & Lifestyle"
      title="Food, but framed like a campaign."
      description="A premium dining landscape with the kind of visual energy that keeps guests moving, sharing, and staying longer."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {dining.map((item) => (
          <VideoCard key={item.title} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
