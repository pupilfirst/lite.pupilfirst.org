import React from "react";
import UniversityModalFacultyList from "./UniversityModalFacultyList";
import UniversityModalFaculty from "./UniversityModalFaculty";

export default function ModalFaculties() {
  return (
    <div className="bg-blue-700 bg-gradient-to-br from-blue-500 to-blue-700 mt-8 rounded-xl text-white">
      <h2 className="flex space-x-4 pt-12 pr-8 text-3xl md:text-5xl">
        <span className="w-2 md:w-3 rounded-r-md bg-blue-300"></span>
        <span>Model Faculty Members</span>
      </h2>
      <div className="pt-8 px-3 md:px-8">
        <span className="text-sm md:text-lg font-medium uppercase">Role:</span>
        <h3 className="font-semibold text-xl leading-tight md:text-3xl">
          Adopt Learner Centered Classroom Pedagogy and Curriculum.
        </h3>
      </div>
      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="Chaitanya Bharathi Institute of Technology"
        place="Hyderabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>

      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="Chaitanya Bharathi Institute of Technology"
        place="Hyderabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof Manzoor Hussain"
          quote="Designing the curriculum for implementing National Education Policy is very important."
          designation="Registrar"
          university="Jawaharlal Nehru Technological University"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>
    </div>
  );
}
