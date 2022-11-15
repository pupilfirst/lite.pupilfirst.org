import { useState, useEffect } from "react";

export default function ZoomImage({ src, alt, className = "" }) {
  let [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      }
    });

    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setIsZoomed(false);
        }
      });
    };
  }, []);

  return (
    <div
      onClick={() => setIsZoomed((prev) => !prev)}
      className={
        isZoomed
          ? "fixed inset-0 z-50 h-screen w-screen bg-gray-900/25 backdrop-blur-xl overscroll-contain transition-all cursor-zoom-out"
          : "relative w-full h-full cursor-zoom-in"
      }
    >
      <div
        className={`${className} rounded-lg touch-pinch-zoom ${
          isZoomed
            ? "w-11/12 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover cursor-zoom-out"
            : "w-full h-full object-cover cursor-zoom-in hover:transition hover:scale-105"
        }`}
      >
        <img src={src} alt={alt} />
        <p
          className={`${className} text-sm select-none font-medium bg-gray-200 px-2 py-1.5 rounded mt-0.5 md:mt-0 md:absolute md:bottom-2 md:left-2 flex justify-center items-center space-x-2 ${
            isZoomed ? "text-gray-800 " : "text-blue-800"
          }`}
        >
          {isZoomed ? (
            <span className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                <path
                  fill-rule="evenodd"
                  d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <span>Click on the image to zoom-out</span>
            </span>
          ) : (
            <span className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                <path
                  fill-rule="evenodd"
                  d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <span>Click on the image to zoom-in</span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
