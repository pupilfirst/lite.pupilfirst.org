import React from "react";

export default function ModelInstitute({
  universityLogo,
  imageSrc,
  quote,
  university,
  name,
  designation,
  place,
}) {
  return (
    <div className="grid md:grid-cols-12 p-3 md:p-8 gap-8">
      <div className="md:col-span-7">
        <img
          src={imageSrc}
          alt={"Photo of " + name}
          className="w-full object-cover rounded-lg shadow-xl"
        />
      </div>
      <div className="md:col-span-5 flex flex-col justify-between">
        <div>
          <div>
            <img
              src="/logos/JNTU_Hyderabad_logo.png"
              alt="JNTU Hyderabad logo"
              className="w-12 h-12"
            />
          </div>
          <p className="font-semibold mt-2">{university}</p>
          <p className="text-sm">{place}</p>
        </div>
        <div className="relative mt-8 md:mt-4">
          <div className="border-t-2 md:border-t border-yellow-500 w-1/4 md:-ml-8"></div>
          <p className="text-xl md:text-2xl font-normal text-white pt-2 md:pt-4">
            {quote}
          </p>
          <p className="pt-6 font-semibold md:text-lg">{name}</p>
          <p className="text-sm md:text-base">
            {designation}, {university}, {place}
          </p>
        </div>
      </div>
    </div>
  );
}
