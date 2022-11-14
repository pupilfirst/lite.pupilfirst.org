import React from "react";
import ModelInstitute from "../components/ModelInstitute";

export default function ModelInstitutes() {
  return (
    <div className="bg-yellow-600 bg-gradient-to-br from-yellow-600 to-yellow-700 mt-8 rounded-xl text-white shadow-2xl">
      <h2 className="flex space-x-4 pt-12 pr-8 text-3xl md:text-5xl">
        <span className="w-2 md:w-3 rounded-r-md bg-yellow-300"></span>
        <span>Model Institutes & Leadership</span>
      </h2>
      <div className="pt-8 px-3 md:px-8">
        <span className="text-sm md:text-lg font-medium uppercase">Role:</span>
        <h3 className="font-semibold text-xl leading-tight md:text-3xl">
          Takes lead in working with institutional academic committees, securing
          University approvals, allocating time-table hours and motivating
          faculty members to adopt the change.
        </h3>
      </div>
      <div className="space-y-8">
        <ModelInstitute
          imageSrc="/showcase/people/Malla_Reddy_College_of_Engineering_and_Technology/Dr_S_Sreenivasa_Rao.jpg"
          name="Dr. S. Sreenivasa Rao"
          quote="Major Degree and Minor Degree programmes are very popular in western countries, and now the government has taken initiation to introduce this in our country also."
          designation="Principal"
          university="Malla Reddy College of Engineering and Technology"
          place="Hyderabad"
        />
        <ModelInstitute
          imageSrc="/showcase/people/Chaitanya_Bharathi_Institute_of_Technology/Dr_P_Ravindra_Reddy.jpg"
          name="Dr. P. Ravindra Reddy"
          quote="Inline with NEP 2020, we have been implementing this programme where skill sets are going to be huge because of industry involvement in curriculum development and delivery."
          designation="Principal"
          university="Chaitanya Bharathi Institute of Technology"
          place="Hyderabad"
        />
        <ModelInstitute
          imageSrc="/showcase/people/Sreyas_Institute_of_Engineering_and_Technology/Dr_S_Sai_Satyanarayana_Reddy.jpg"
          name="Dr. S. Sai Satyanarayana Reddy"
          quote="As per NEP 2020, faculty should also learn the updated and cutting edge technologies to learn and also teach the students."
          designation="Principal"
          university="Sreyas Institute of Engineering and Technology"
          place="Hyderabad"
        />
        <ModelInstitute
          imageSrc="/showcase/people/Vardhaman_College_of_Enginnering/Prof_J_V_R_Ravindra.jpg"
          name="Prof. J V R Ravindra"
          quote="Curriculum plays a major role in nurturing the student community, so if the curriculum is good, we can ensure the students are industry-ready."
          designation="Principal"
          university="Vardhaman College of Engineering"
          place="Shamshabad"
        />
        <ModelInstitute
          imageSrc="/showcase/people/G_Narayanamma_Institute_of_Technology_Science/Dr_Kolli_Ramesh_Reddy.jpg"
          name="Dr. Kolli Ramesh Reddy"
          quote="We have to be mentors and give proper advice for improving the student's skills because nowadays, AICTE, the Government of India and Statutory bodies are looking to improve the quality of education in our country."
          designation="Principal"
          university="G. Narayanamma Institute of Technology Science (for Women)"
          place="Hyderabad"
        />
        <ModelInstitute
          imageSrc="/showcase/people/Institute_of_Aeronautical_Engineering/Prof_N_Sambasiva_Rao.jpg"
          name="Prof. N Sambasiva Rao"
          quote="More than 300 students are participating from our institution and we have made a special allocation of labs and two staff members to co-ordinate the program."
          designation="Principal"
          university="Institute of Aeronautical Engineering"
          place="Hyderabad"
        />
      </div>
    </div>
  );
}
