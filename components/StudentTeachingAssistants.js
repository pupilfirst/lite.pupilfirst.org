import { useState } from "react";
import StudentTA from "./StudentTA";
import studentTeachingAssistantsData from "../data/student-teaching-assistants.json";

export default function IndustryTeachingFellows(props) {
  const [showLess, setShowLess] = useState(false);
  const studentTeachingAssistants = showLess
    ? studentTeachingAssistantsData
    : studentTeachingAssistantsData.slice(0, 4);

  return (
    <div>
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto rounded-lg">
        <div className="mt-2 lg:mt-4 grid md:grid-cols-2 gap-8">
          {studentTeachingAssistants.map((teachingAssistant, index) => (
            <StudentTA key={index} {...teachingAssistant} />
          ))}
        </div>
        <button
          className="block mx-auto mt-8 text-sm font-semibold text-secondary-600 px-3 py-2 bg-secondary-50 rounded-md"
          onClick={() => setShowLess((prev) => !prev)}
        >
          {showLess ? "Show Less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
