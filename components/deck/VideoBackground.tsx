"use client";

type VideoBackgroundProps = {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
};

export default function VideoBackground({
  src,
  poster,
  className,
  overlayClassName
}: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className={`video-zoom h-full w-full object-cover ${className ?? ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 ${overlayClassName ?? "bg-black/65"}`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 18%, rgba(212,175,55,0.12), transparent 30%), linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.92) 100%)"
        }}
      />
      <div className="deck-grain absolute inset-0 opacity-35" />
    </div>
  );
}
