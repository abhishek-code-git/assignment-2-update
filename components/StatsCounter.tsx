"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "@/components/useInViewOnce";

type StatsCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export default function StatsCounter({
  value,
  suffix = "",
  label,
  duration = 1400
}: StatsCounterProps) {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.25);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [duration, isVisible, value]);

  return (
    <div ref={ref} className={`rounded-[24px] border border-white/10 bg-white/[0.04] p-6 reveal ${isVisible ? "reveal-visible" : ""}`}>
      <div className="display-title text-5xl leading-none sm:text-6xl">
        {count.toLocaleString()}
        <span className="text-[#d4af37]">{suffix}</span>
      </div>
      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/55">{label}</p>
    </div>
  );
}
