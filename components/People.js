/** @format */

import React from "react";

export default function People({
  name,
  role,
  imgSrc,
  description,
  darkBackground = false,
  className = "",
}) {
  return (
    <div>
      <div
        className={`${
          darkBackground
            ? "bg-gradient-to-br from-blue-500 to-green-600"
            : "bg-gradient-to-br from-yellow-300 to-primary-400"
        } relative rounded-lg md:w-auto ${className}`}
      >
        <img
          src={imgSrc}
          alt={name}
          className="block h-72 w-full object-cover object-top p-0.5 rounded-lg"
        />
      </div>
      <p className={"text-lg font-semibold pt-2"}>{name}</p>
      <p
        className={`${
          darkBackground ? "text-gray-400" : "text-gray-500"
        } text-sm leading-tight pt-1 ${className}`}
      >
        {role}
      </p>
      {description ? (
        <p
          className={`${
            darkBackground ? "text-gray-200" : "text-gray-700"
          } text-sm md:text-base pt-3 ${className}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
