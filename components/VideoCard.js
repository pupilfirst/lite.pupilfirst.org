import { useState } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";

export default function VideoCard({
  title,
  description,
  videoTitle,
  VimeoVideoId,
  thumbnail,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="w-full flex gap-5 cursor-pointer items-center p-5 rounded-lg bg-gradient-to-tl from-white to-primary-50 border-2 border-primary-100 hover:shadow-xl transition"
        onClick={() => setOpen(true)}
      >
        <div className="w-2/5 h-32 relative rounded-lg overflow-hidden">
          <div className="absolute w-full h-full bg-black/25 grid place-items-center">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="27.5"
                cy="27.5"
                r="24.75"
                fill="url(#paint0_linear_617_143)"
              />
              <path
                d="M35.6638 27.9287C35.9875 27.7345 35.9875 27.2655 35.6638 27.0713L23.3857 19.7043C23.0524 19.5044 22.6284 19.7444 22.6284 20.1331V34.8669C22.6284 35.2556 23.0524 35.4956 23.3857 35.2957L35.6638 27.9287Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_617_143"
                  x1="-19.1692"
                  y1="33.1616"
                  x2="30.3308"
                  y2="77"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF9651" />
                  <stop offset="1" stop-color="#FD6400" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt={videoTitle}
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-secondary-500">{title}</p>
          <p>{description}</p>
        </div>
      </div>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className="fixed inset-0 bg-black/70 z-50 flex flex-col py-12">
            <button
              className="text-white bg-gray-500 w-16 h-16 text-center p-2 mx-auto rounded-full z-50"
              onClick={() => setOpen((prev) => !prev)}
            >
              Close
            </button>
            <iframe
              src={`https://player.vimeo.com/video/${VimeoVideoId}?h=0b708633d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-b-md md:rounded-b-xl flex-1 px-12"
              title={videoTitle}
            ></iframe>
          </div>
        </ClientOnlyPortal>
      )}
    </div>
  );
}
