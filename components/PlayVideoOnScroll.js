import React from "react";

export default function PlayVideoOnScroll() {
  const videoRef = React.useRef(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video
            .play()
            .then(() => {})
            .catch((error) => {
              setError(true);
              video.muted = false;
            });
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
    <div className="relative">
      <video
        className="w-full rounded-lg"
        ref={videoRef}
        playsInline
        controls
        loop
        autoPlay
        muted
        src="/video/Swimlane.mp4"
      >
        <source src="/video/Swimlane.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
