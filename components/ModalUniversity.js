import React from "react";

export default function ModalUniversity() {
  return (
    <div className="grid grid-cols-5 p-8 bg-green-700 mt-8 rounded-lg text-white">
      <div className="col-span-2">
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
        <div className="relative mt-8">
          <p className="font-medium pb-2">ROLE</p>
          <p className="w-[130%] text-4xl font-semibold text-white">
            <mark className=" bg-green-800/80 leading-tight text-white">
              Fast Approval Process for AICTE NEP 2020 Model Curriculum for its
              Affiliated Institutions.
            </mark>
          </p>
        </div>
      </div>
      <div className="col-span-3 -mt-14">
        <img
          src="/people/ajay-nair.jpg"
          alt=""
          className="w-full h-96 object-cover rounded-lg border-2 border-white"
        />
        <p className="text-right p-3 text-white/80">Prof. Manzoor hussain</p>
      </div>
    </div>
  );
}
