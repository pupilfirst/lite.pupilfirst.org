import React from "react";

export default function UniversityModalFacultyList({
  children,
  universityLogo,
  university,
  place,
}) {
  return (
    <div>
      <div className="pt-8 px-3 md:px-8">
        <div className="pt-12 md:flex md:space-x-4">
          <div>
            <img
              src={universityLogo}
              alt={"Logo of " + university}
              className="w-24 h-24"
            />
          </div>
          <div>
            <p className="font-semibold mt-1 text-lg md:text-2xl">
              {university}
            </p>
            <p className="text-sm md:text-xl">{place}</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-12 p-3 md:p-8 gap-8 md:gap-12">
        {children}
      </div>
    </div>
  );
}
