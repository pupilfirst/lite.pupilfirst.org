import { useState } from "react";

export default function ZoomImage({ src, alt, className = " " }) {
  let [isZoomed, setIsZoomed] = useState(false);
  return (
    <div
      className={
        isZoomed
          ? "fixed inset-0 z-50 h-screen w-screen bg-black/50 transition-all"
          : "relative w-full h-full transition-all"
      }
    >
      <img
        onClick={() => setIsZoomed((prev) => !prev)}
        className={`${className} rounded-lg ${
          isZoomed
            ? "w-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  object-cover cursor-zoom-out "
            : "w-full h-full object-cover cursor-zoom-in"
        }`}
        style={isZoomed ? { padding: "20px", width: "90%" } : { width: "100%" }}
        src={src}
        alt={alt}
      />
    </div>
  );
}
