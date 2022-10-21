/** @format */

import React from "react";

export default function People({ name, role, imgSrc, description }) {
  return (
    <div>
      <div className="relative rounded-lg bg-gradient-to-br from-yellow-300 to-primary-400 md:w-auto">
        <img
          src={imgSrc}
          alt={name}
          className="block w-full object-contain object-top p-0.5 rounded-lg"
        />
      </div>
      <p className={"text-lg font-semibold pt-2"}>{name}</p>
      <p className={"text-sm text-gray-600 leading-tight pt-1"}>{role}</p>
      {description ? (
        <p className={"text-sm md:text-base pt-4 text-gray-700"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
