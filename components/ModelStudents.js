import { useState } from "react";
import ModelStudent from "./ModelStudent";
import studentTeachingAssistantsData from "../data/student-teaching-assistants.json";

export default function IndustryTeachingFellows(props) {
  const [showLess, setShowLess] = useState(false);
  const studentTeachingAssistants = showLess
    ? studentTeachingAssistantsData
    : studentTeachingAssistantsData.slice(0, 10);

  return (
    <div className="bg-blue-700 bg-gradient-to-br from-blue-500 to-blue-700 mt-8 pb-12 rounded-xl text-white">
      <h2 className="flex space-x-4 pt-12 pr-8 text-3xl md:text-5xl">
        <span className="w-2 md:w-3 rounded-r-md bg-blue-300"></span>
        <span>Model Students</span>
      </h2>
      <div className="pt-8 px-3 md:px-8">
        <span className="text-sm md:text-lg font-medium uppercase">Role:</span>
        <h3 className="font-semibold text-xl leading-tight md:text-3xl">
          Pioneers who are learning fast and fair and assisting faculty members
          to teach other students.
        </h3>
      </div>
      <div className="mt-2 lg:mt-4 pt-8 px-3 md:px-8 grid md:grid-cols-2 gap-8">
        {studentTeachingAssistants.map((teachingAssistant, index) => (
          <ModelStudent key={index} {...teachingAssistant} />
        ))}
      </div>
      {/* <button
          className="block mx-auto mt-8 text-sm font-semibold text-secondary-600 px-3 py-2 bg-secondary-50 rounded-md"
          onClick={() => setShowLess((prev) => !prev)}
        >
          {showLess ? "Show Less" : "Show more"}
        </button> */}
    </div>
  );
}
