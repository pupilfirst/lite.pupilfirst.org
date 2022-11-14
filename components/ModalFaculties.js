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
          name="Prof. S. Durga Devi"
          quote="They are keep on dynamically updating the curriculum based on industry requirements. Currently based on what are the trends in the industry."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="Chaitanya Bharathi Institute of Technology"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. Swami Das"
          quote="After training, the faculty were transformed like industry people."
          designation="Joint Director of Academics"
          university="Chaitanya Bharathi Institute of Technology"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. Y. Rama Devi"
          quote="Advanced Web Development Is very sought by industry. All the faculty were instructed to undergo training, so it can be offered to students of various disciplines."
          designation="Head of Department (Computer Science and Engineering)"
          university="Chaitanya Bharathi Institute of Technology"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. R. Srikanth"
          quote="This curriculum has helped us learn what is happening in the industry and also make the students to work on the latest trends in the market."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="Chaitanya Bharathi Institute of Technology"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>

      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="G Narayanamma Institute of Technology and Science"
        place="Hyderabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. Lalitha"
          quote="The AICTE LITE NEP 2020 Model curriculum makes it very easy to adapt to new teaching-learning process."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="G. Narayanamma Institute of Technology Science (for Women)"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. Manthena Deepthi"
          quote="Peer-to-peer communication is promoted in the community, and students are interacting in the discord server. Students are coming out, they are expressing their doubts in the community."
          designation="Assistant Professor,Department of Information Technology"
          university="G. Narayanamma Institute of Technology Science (for Women)"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>

      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="Institute of Aeronautical Engineering"
        place="Hyderabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. B. Padmaja"
          quote="This course has hit all key pillars of NEP 2020."
          designation="Associate Professor and Head, Department of Computer Science and Engineering (AI & ML)"
          university="Institute of Aeronautical Engineering"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. Krishana Rao Patro"
          quote="Our students are very much happy with the LITE program as this method of teaching-learning is very different from the regular classroom model."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="Institute of Aeronautical Engineering"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>

      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="Malla Reddy College of Engineering and Technology"
        place="Hyderabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. S. Shanthi"
          quote="This programme is going to make the students face the industry in future."
          designation="Professor and Head, Department of Computer Science and Engineering"
          university="Malla Reddy College of Engineering and Technology"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. R. Roopa Chandrika"
          quote="Pupilfirst is a great interface between AICTE and our students."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="Malla Reddy College of Engineering and Technology"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>

      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="Shreyas Institute of Engineering and Technology"
        place="Hyderabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. Shaik Abdul Nabi"
          quote="Though AICTE LITE, students are able to upgrade their skills that meet the industry needs."
          designation="Head of Department, Department of Computer Science and Engineering"
          university="Sreyas Institute of Engineering and Technology"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. Joshi Padma Narasimhachari"
          quote="This learning process is also helpful for students in the future also as they can solve problems by thinking in different ways."
          designation="Associate Professor, Department of Computer Science and Engineering"
          university="Sreyas Institute of Engineering and Technology"
          place="Hyderabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. N. Santhosh Ramchander"
          quote="Pupilfirst is constantly supporting faculty to establish the NEP Classroom at our institution."
          designation="Associate Professor, Department of Computer Science and Engineering"
          university="Sreyas Institute of Engineering and Technology"
          place="Hyderabad"
        />
      </UniversityModalFacultyList>

      <UniversityModalFacultyList
        universityLogo="/logos/JNTU_Hyderabad_logo.png"
        university="Vardhaman College of Engineering"
        place="Shamshabad"
      >
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Dr. Ramesh Karnati"
          quote="To give training to our students, we faculty should be at the industry level."
          designation="Head of Department, Department of Computer Science and Engineering"
          university="Vardhaman College of Engineering"
          place="Shamshabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. Ganesh Deshmukh"
          quote="For the first time, our students are getting into NEP 2020 pedagogy, where our students can get hands on experiences."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="Vardhaman College of Engineering"
          place="Shamshabad"
        />
        <UniversityModalFaculty
          imageSrc="/showcase/people/Prof-Manzoor-Hussain.jpg"
          name="Prof. Prajwal Maredukonda"
          quote="Companies who recruit students need to do 5 to 6 months of training today. I think this minor would eliminate that need and students who are successfully completing this minor can directly be onboarded to industry."
          designation="Assistant Professor, Department of Computer Science and Engineering"
          university="Vardhaman College of Engineering"
          place="Shamshabad"
        />
      </UniversityModalFacultyList>
    </div>
  );
}
