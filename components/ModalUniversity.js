import React from "react";

export default function ModalUniversity() {
  return (
    <div className="bg-green-700 mt-8 rounded-xl text-white">
      <h2 className="flex space-x-4 pt-12 pr-8 text-5xl">
        <span className="w-3 rounded-r-md bg-green-400"></span>
        <span>Model University</span>
      </h2>
      <h3 className="pt-8 px-8">
        <span className="text-lg font-medium uppercase">Role:</span>
        <br />
        <span className="font-semibold text-3xl">
          Fast Approval Process for AICTE NEP 2020 Model Curriculum for its
          Affiliated Institutions.
        </span>
      </h3>
      <div className="grid grid-cols-5 p-8 gap-8">
        <div className="col-span-3">
          <img
            src="/showcase/people/Prof-Manzoor-Hussain.jpg"
            alt=""
            className="w-full object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
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
          <div className="relative mt-4">
            <div className="border-t w-1/4 -ml-8"></div>
            <p className="text-3xl font-normal text-white pt-4">
              Designing the curriculum for implementing National Education
              Policy is very important.
            </p>
            <p className="pt-6 font-semibold text-lg">Prof Manzoor Hussain</p>
            <p>
              Registrar, Jawaharlal Nehru Technological University, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
