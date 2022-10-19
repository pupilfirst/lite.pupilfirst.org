import React from "react";

export default function PlayVideoOnScroll() {
  const videoRef = React.useRef();
  const parentRef = React.useRef();

  const scrollVideo = (e) => {
    if (videoRef.current.duration) {
      const distanceFromTop =
        window.scrollY + parentRef.current.getBoundingClientRect().top;
      const rawPercentScrolled =
        (window.scrollY - distanceFromTop) /
        (parentRef.current.scrollHeight - window.innerHeight);
      const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
      console.log("Duration", videoRef.current);

      videoRef.current.currentTime =
        videoRef.current.duration * percentScrolled;
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollVideo);
    return () => window.removeEventListener("scroll", scrollVideo);
  });

  return (
    <div className="h-[500vh]" ref={parentRef}>
      <video
        className="w-full sticky top-8"
        ref={videoRef}
        playsInline
        autoPlay={false}
        muted
        src="/video/Swimlane.mp4"
      >
        <source src="/video/Swimlane.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
