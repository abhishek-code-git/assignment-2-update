"use client";

import { useEffect, useRef, useState } from "react";
import { useInViewOnce } from "@/components/useInViewOnce";

type VideoCardProps = {
  title: string;
  description: string;
  src: string;
  poster: string;
  label?: string;
  className?: string;
};

export default function VideoCard({
  title,
  description,
  src,
  poster,
  label,
  className
}: VideoCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isVisible } = useInViewOnce<HTMLDivElement>(0.15);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isVisible) setActive(true);
  }, [isVisible]);

  return (
    <article
      ref={ref}
      className={`group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 ${className ?? ""} reveal ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <video
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          autoPlay={active}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
        >
          {active ? <source src={src} type="video/mp4" /> : null}
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        {label ? (
          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-white/80 backdrop-blur-sm">
            {label}
          </div>
        ) : null}
        <div className="absolute bottom-0 p-5">
          <h3 className="display-title text-2xl">{title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">{description}</p>
        </div>
      </div>
    </article>
  );
}
