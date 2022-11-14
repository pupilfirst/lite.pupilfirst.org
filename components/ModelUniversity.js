import React from "react";

export default function ModelUniversity() {
  return (
    <div className="bg-green-700 mt-8 rounded-xl text-white">
      <h2 className="flex space-x-4 pt-12 pr-8 text-3xl md:text-5xl">
        <span className="w-2 md:w-3 rounded-r-md bg-green-400"></span>
        <span>Model University</span>
      </h2>
      <div className="pt-8 px-3 md:px-8">
        <span className="text-sm md:text-lg font-medium uppercase">Role:</span>
        <h3 className="font-semibold text-xl leading-tight md:text-3xl">
          Fast Approval Process for AICTE NEP 2020 Model Curriculum for its
          Affiliated Institutions.
        </h3>
      </div>
      <div className="grid md:grid-cols-5 p-3 md:p-8 gap-8">
        <div className="md:col-span-3">
          <img
            src="/showcase/people/Prof-Manzoor-Hussain.jpg"
            alt=""
            className="w-full object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div>
              <img
                src="/logos/JNTU_Hyderabad_logo.png"
                alt="JNTU Hyderabad logo"
                className="w-12 h-12"
              />
            </div>
            <p className="font-semibold mt-2">
              Jawaharlal Nehru Technological University
            </p>
            <p className="text-sm">Hyderabad</p>
          </div>
          <div className="relative mt-8 md:mt-4">
            <div className="border-t-2 md:border-t border-green-400 w-1/4 md:-ml-8"></div>
            <p className="text-xl md:text-3xl font-normal text-white pt-2 md:pt-4">
              Designing the curriculum for implementing National Education
              Policy is very important.
            </p>
            <p className="pt-6 font-semibold md:text-lg">
              Prof Manzoor Hussain
            </p>
            <p className="text-sm md:text-base">
              Registrar, Jawaharlal Nehru Technological University, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
