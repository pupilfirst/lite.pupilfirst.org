import React from "react";

export default function NavLink({
  isActive = false,
  description,
  title,
  href,
}) {
  return (
    <div className="flex-1">
      <a
        href={href}
        className={`nav-link text-center block p-4 ${isActive ? "active" : ""}`}
      >
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="title font-semibold text-gray-500">{title}</p>
      </a>
    </div>
  );
}
