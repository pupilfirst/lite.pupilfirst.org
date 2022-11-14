import React from "react";

export default function UniversityModalFaculty({
  imageSrc,
  quote,
  university,
  name,
  designation,
  place,
}) {
  return (
    <div className="md:col-span-6">
      <img
        src={imageSrc}
        alt={"Photo of " + name}
        className="w-full object-cover rounded-lg shadow-xl"
      />
      <div className="relative">
        <div className="border-l border-blue-400 pl-3 md:pl-4 ml-2 md:ml-4">
          <p className="text-xl leading-tight md:text-3xl font-normal text-white pt-3 md:pt-6">
            {quote}
          </p>
          <p className="pt-6 font-semibold md:text-lg">{name}</p>
          <p className="text-sm md:text-base pb-2">
            {designation}, {university}, {place}
          </p>
        </div>
      </div>
    </div>
  );
}
