"use client";

import SectionWrapper from "@/components/SectionWrapper";
import VideoCard from "@/components/VideoCard";

const entertainment = [
  {
    title: "Concert Nights",
    description: "Live entertainment moments designed to move crowds and generate press.",
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    label: "Live"
  },
  {
    title: "Attraction Zones",
    description: "Immersive family attractions and branded experiences built for repeat traffic.",
    src: "https://media.w3.org/2010/05/bunny/trailer.mp4",
    poster: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=900&q=80",
    label: "Immersive"
  },
  {
    title: "Activation Moments",
    description: "High-design pop-ups, launches, and social-first installations.",
    src: "https://media.w3.org/2010/05/video/movie_300.mp4",
    poster: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    label: "Brand"
  }
];

export default function EntertainmentSection() {
  return (
    <SectionWrapper
      id="entertainment"
      eyebrow="Entertainment & Attractions"
      title="The part of the mall people travel for."
      description="Entertainment is not a side offer. It is the reason dwell time expands and the destination becomes habitual."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {entertainment.map((item) => (
          <VideoCard key={item.title} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
