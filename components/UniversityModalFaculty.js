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
    <div className="md:col-span-6 flex flex-col">
      <img
        src={imageSrc}
        alt={"Photo of " + name}
        className="w-full object-cover rounded-lg shadow-xl"
      />
      <div className="flex h-full">
        <div className="flex flex-col justify-between border-l border-blue-400 pl-3 md:pl-4 ml-2 md:ml-4">
          <p className="text-xl leading-tight md:text-3xl font-normal text-white pt-3 md:pt-6">
            {quote}
          </p>
          <div>
            <p className="pt-6 font-semibold md:text-lg">{name}</p>
            <p className="text-sm md:text-base pb-2">
              {designation}, {university}, {place}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
