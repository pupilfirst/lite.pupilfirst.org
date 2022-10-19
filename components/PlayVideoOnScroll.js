import React from "react";

export default function PlayVideoOnScroll() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
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
      autoPlay
      controls
      loop
      src="/video/Swimlane.mp4"
    >
      <source src="/video/Swimlane.mp4" type="video/mp4" />
    </video>
  );
}
