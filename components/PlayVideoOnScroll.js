import React from "react";

export default function PlayVideoOnScroll() {
  const videoRef = React.useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          setIsVideoPlaying(true);
        } else {
          video.pause();
          setIsVideoPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <video
      className="w-full rounded-lg"
      ref={videoRef}
      playsInline
      autoPlay={isVideoPlaying}
      controls
      loop
      muted
      src="/video/Swimlane.mp4"
    >
      <source src="/video/Swimlane.mp4" type="video/mp4" />
    </video>
  );
}
