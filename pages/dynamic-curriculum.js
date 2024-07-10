import Head from "next/head";
import DescriptionList from "../components/DescriptionList";
import Heading from "../components/Heading";
import People from "../components/People";
import NumberListItem from "../components/NumberListItem";
import ScheduleDate from "../components/ScheduleDate";
import Footer from "../components/Footer";
import React, { useState } from "react";

let hiringPartner = (index, title, url, logoSrc) => {
  return (
    <a
      key={index}
      href={url}
      target="_blank"
      className="col-span-1 flex justify-center items-center p-8 rounded-md hover:shadow-lg z-10 relative transition"
    >
      <img
        className="max-h-16"
        src={`https://wd.pupilfirst.org/hiring-network/${logoSrc}`}
        alt={title}
      />
    </a>
  );
};

export default function earlyAdopter(props) {
  const [showLess, setShowLess] = useState(false);

  return (
    <div>
      <Head>
        <title>LITE Dynamic Curriculum</title>
        <meta
          name="description"
          content="AICTE Leadership in Teaching Excellence - Dynamic Curriculum"
        ></meta>
        <meta
          name="keywords"
          content="AICTE Leadership in Teaching Excellence, Dynamic Curriculum"
        ></meta>
        <meta name="author" content="pupilfirst.org"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#FDFAF7" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="LITE Dynamic Curriculum" />
        <meta
          property="og:description"
          content="AICTE Leadership in Teaching Excellence - Dynamic Curriculum"
        />
        <meta property="og:image" content="/lite-dynamic-curriclum.jpg" />
        <meta
          property="og:url"
          content="https://lite.pupilfirst.org/dynamic-curriculum"
        />
        <meta name="twitter:card" content="/lite-dynamic-curriclum.jpg" />
        <meta property="og:site_name" content="LITE Dynamic Curriculum" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6H1NS1GQNW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6H1NS1GQNW');
              `,
          }}
        />
      </Head>
      <main className="bg-primary-50 mx-auto">
        <section className="hero__bg-pattern relative">
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center">
              <img
                className="block w-20 md:w-28"
                src="/logos/LITE-logo.svg"
                alt="Logo of Leadership in Teaching Excellence (LITE)national programme."
              />
              <img
                className="w-16 md:w-24"
                src="logos/atal.png"
                alt="Logo of All India Council for Technical Education (AICTE) Training And Learning (ATAL) Academy"
              />
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
            <div className="w-full mx-auto text-center relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-center text-xl md:text-3xl lg:text-4xl lg:py-4 font-medium">
                Welcome to
                <br />
                <span className="text-3xl md:text-3xl lg:text-5xl font-extrabold">
                  AICTE Leadership in <br />
                  Teaching Excellence - Dynamic Curriculum
                </span>
              </h1>
              <div className="max-w-xl mx-auto space-y-3 mt-4">
                <p className="text-center text-sm md:text-base lg:text-xl">
                  LITE curricula are dynamic and maintained by teaching fellows
                  who are industry practitioners.
                </p>
                <p className="text-center text-sm md:text-base lg:text-xl">
                  This page contains the most recent versions of all curricula,
                  access to previous versions, and details of significant
                  changes between versions.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="/hero/hero-bg.png"
              alt="LITE - hero background image"
            />
            <div className="absolute inset-0"></div>
          </div>
        </section>

        <section className="relative border-t border-gray-200">
          <div className="flex sticky top-0 w-full justify-center mt-8 space-x-4 z-30 bg-primary-50 p-4">
            <a
              href="#Advanced-Web-Development-Course"
              className="inline-flex justify-center w-1/2 sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-primary-400 to-primary-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
            >
              Credit Course in Advanced Web Development
            </a>
            <a
              href="#Electric-Vehicles-Credit-Course"
              className="inline-flex justify-center w-1/2 sm:max-w-md p-3 lg:px-3 lg:py-3.5 bg-gradient-to-br from-cyan-400 to-green-500 text-gray-900 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
            >
              Credit Course in Electric Vehicles
            </a>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div
              id="Advanced-Web-Development-Course"
              className="border-l border-gray-200 mx-4 xl:mx-0 py-8 md:py-12"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <Heading
                      heading={
                        <span className="text-2xl lg:text-5xl lg:leading-tight">
                          Credit Course in Advanced Web Development
                        </span>
                      }
                    />
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <DescriptionList
                      heading={
                        <div>
                          <p className="text-gray-600 text-sm md:text-base">
                            MAY 2024
                          </p>
                          <p className="pt-1">Version 4 Released</p>
                        </div>
                      }
                      content={
                        <div>
                          <p>Major changes in the revised version include:</p>

                          <ul className="list-disc ml-5 mt-2 space-y-2">
                            <li>
                              The development of both WD301 (Front-end Development with React & 
                              TypeScript) and WD401 (Getting Ready for Production) is complete,
                              and the courses have been released to students.
                            </li>
                            <li>
                              All assignments in WD201 and WD301 have been updated 
                              to use the Virtual Teaching Assistant for automated reviews, similar to WD101.
                              Students will still be able to request manual reviews of their submissions. 
                              In WD401, assignments in 9 modules are manually reviewed, 
                              with the last module being reviewed using AI.
                            </li>
                          </ul>
                          <p className="pt-3 text-sm">
                            This is the updated curriculum shared with AICTE, under the
                            Global Developer Corps (GDC) Artificial Intelligence Workforce 
                            Scheme 2024-2029.
                          </p>
                          <p className="pt-4">
                            <a
                              className="inline-flex md:text-lg font-semibold text-secondary-400 underline px-3 py-1 rounded-md items-center space-x-2 bg-gray-100 hover:bg-secondary-100 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1WA_84gvMuJlL-RLYzeyLGl2mpsAb4_4r/view"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 3</span>
                            </a>
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <DescriptionList
                      heading={
                        <div>
                          <p className="text-gray-600 text-sm md:text-base">
                            JANUARY 2023
                          </p>
                          <p className="pt-1">Version 3 Released</p>
                        </div>
                      }
                      content={
                        <div>
                          <p>Major changes in the revised version include:</p>

                          <ul className="list-disc ml-5 mt-2 space-y-2">
                            <li>
                              Content related to introduction to web development
                              in Module 1 of WD101 was moved to Module 2 for a
                              better fit.
                            </li>
                            <li>
                              A video demonstrating WD101 capstone project
                              requirement was added to help students understand
                              what's required.
                            </li>
                            <li>
                              Module 7{" "}
                              <span className="italic">
                                Add User Interface for To-do Application
                              </span>
                              and module 8 <span className="italic">EJS</span>{" "}
                              Templating in WD201 have been swapped for a better
                              continuity.
                            </li>
                            <li>
                              <span className="italic">Heroku</span> was
                              replaced with Render as a suggested cloud
                              deployment platform in the WD201 course.
                            </li>
                          </ul>
                          <p className="pt-3 text-sm">
                            This is the updated curriculum, and it is in the
                            process of being sent to AICTE for getting
                            published. Since that will take some time, you can
                            access the updated curriculum structure for your
                            reference meanwhile
                          </p>
                          <p className="pt-4">
                            <a
                              className="inline-flex md:text-lg font-semibold text-secondary-400 underline px-3 py-1 rounded-md items-center space-x-2 bg-gray-100 hover:bg-secondary-100 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1di0o5i8ZmI03j4bicWlKSMSeYHpeFjvA/view"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 3</span>
                            </a>
                          </p>
                        </div>
                      }
                    />
                    <DescriptionList
                      heading={
                        <div>
                          <p className="text-gray-600 text-sm md:text-base">
                            JULY 2022
                          </p>
                          <p className="pt-1">Version 2 Released</p>
                        </div>
                      }
                      content={
                        <div>
                          <p>
                            Version 2 of the Model Curriculum for Credit Course
                            in Advanced Web Development is now released.
                          </p>
                          <p className="pt-3">
                            Significant changes in the revised version include:
                          </p>
                          <ul className="list-disc ml-5 mt-2 space-y-2">
                            <li>
                              3 Industry experts have been onboarded and
                              involved in course creation and updates.
                            </li>
                            <li>
                              The content of the Web Development 101 course has
                              been updated.
                            </li>
                            <li>
                              A Node.js course has replaced the earlier Web
                              Development 201 course based on Ruby on Rails.
                            </li>
                          </ul>
                          <p className="pt-4">
                            <a
                              className="inline-flex md:text-lg font-semibold text-secondary-400 underline px-3 py-1 rounded-md items-center space-x-2 bg-gray-100 hover:bg-secondary-100 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1dFt2KwXXONdFmKXXAjPU2_xlCbVDIRBB/view"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 2</span>
                            </a>
                          </p>
                        </div>
                      }
                    />
                    <DescriptionList
                      heading={
                        <div>
                          <p className="text-gray-600 text-sm md:text-base">
                            MARCH 2022
                          </p>
                          <p className="pt-1">Version 1 Released</p>
                        </div>
                      }
                      content={
                        <div>
                          <p>
                            Version 1 of the Model Curriculum for Credit course
                            in Advanced Web Development has been approved and
                            published by AICTE.
                          </p>
                          <p className="pt-3">
                            Version 1 can be downloaded from AICTE Website here.
                          </p>
                          <a
                            className="inline-flex mt-4 md:text-lg font-semibold text-secondary-400 underline px-3 py-1 rounded-md items-center space-x-2 bg-gray-100 hover:bg-secondary-100 transition"
                            target="_blank"
                            href="https://www.aicte-india.org/sites/default/files/Model_Curriculum/Minor%20Degree%20in%20Adv.%20Web%20Development.pdf
"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 md:w-6 md:h-6"
                              >
                                <circle cx="18" cy="18" r="3"></circle>
                                <circle cx="6" cy="6" r="3"></circle>
                                <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                              </svg>
                            </span>
                            <span>Download Version 1</span>
                          </a>
                        </div>
                      }
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="sticky top-24 mt-10 lg:mt-20 -ml-px md:ml-0 space-y-12">
                    <div className="bg-primary-100 rounded-r md:rounded-lg border-gray-100 relative ml-8">
                      <div className="p-2 md:p-4 lg:p-5">
                        <p className="text-xl font-semibold leading-tight">
                          Questions?
                        </p>
                        <p className="leading-tight mt-2">
                          If you have any questions, please write to us at&nbsp;
                          <a
                            href="mailto:wd@pupilfirst.org"
                            className="inline-block bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-primary-500 to-primary-600 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          >
                            wd@pupilfirst.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900">
            <div
              id="Electric-Vehicles-Credit-Course"
              className="max-w-6xl 2xl:max-w-7xl mx-auto"
            >
              <div className="border-l border-gray-700 mx-4 xl:mx-0 py-8 md:py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                  <div className="lg:col-span-8">
                    <div className="pt-10 lg:pt-20">
                      <div className="heading-with-leftborder heading-with-leftborder--cyan-green">
                        <h2 className="font-bold text-white text-2xl lg:text-5xl lg:leading-tight lg:ml-20 2xl:ml-40 pl-4">
                          Credit Course in <br />
                          Electric Vehicles
                        </h2>
                      </div>
                    </div>
                    <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
               <DescriptionList
                        heading={
                          <div>
                            <p className="text-gray-400 text-sm md:text-base">
                              JUNE 2024
                            </p>
                            <p className="pt-1 bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
                              Version 5 Released
                            </p>
                          </div>
                        }
                        content={
                          <div className="text-white">
                            <p>
                              Version 5 of the Model Curriculum for Open
                              Electives in Electric Vehicles is now released.
                            </p>
                            <p className="pt-3">The major changes include:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-2">
                              <li>
                               The aspect of battery management system algorithms was introduced in Module 4 of EV201. 
                               Basics of Python programming and step-by-step exercises were included to enable students to develop their battery management algorithm.
                              </li>
                              <li>
                                A 6-MOSFET motor controller was introduced in the EV201 Capstone project. The capstone was split into 3 phases, namely developing the 6 MOSFET motor controller, improving the communication between BMS and motor, 
                                and developing a BMS algorithm to enable students to learn step-by-step on upgrading their EV powertrain prototype.
                              </li>
                              <li>
                                The EV101 Capstone project was revised to eliminate the comprehensive report submission. The capstone has been split into multiple levels through the course, 
                                where students are guided step-by-step on virtually modelling their own two-wheeler EV conversion.
                              </li>
                            </ul>
                            <a
                              className="inline-flex mt-4 md:text-lg font-semibold text-green-400 underline px-3 py-1.5 rounded-md items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1GpdgXAlF6K0hmq6m4JdWwW3tUrp8sUQF/view"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 4</span>
                            </a>
                          </div>
                        }
                      />
                <DescriptionList
                        heading={
                          <div>
                            <p className="text-gray-400 text-sm md:text-base">
                              JANUARY 2024
                            </p>
                            <p className="pt-1 bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
                              Version 4 Released
                            </p>
                          </div>
                        }
                        content={
                          <div className="text-white">
                            <p>
                              Version 4 of the Model Curriculum for Open
                              Electives in Electric Vehicles is now released.
                            </p>
                            <p className="pt-3">The major changes include:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-2">
                              <li>
                               The EV201 course has been restructured to better align with the academic semester schedule. 
                               It now includes optional modules to accommodate diverse student preferences.
                              </li>
                              <li>
                                Design of the custom PCB board has been revised for ease of manufacturing, 
                                along with the addition of capabilities for charging and discharging.
                              </li>
                              <li>
                                The thermal management module has been enhanced, incorporating additional concepts and activities relevant to the industry. 
                                The module has been updated with more concepts and activities for students to gain experience in industry relevant thermal simulations.
                              </li>
                              <li>
                                The capstone of the course has been revised for students to learn and experiment on 6 - MOSFET motor controller 
                                circuit which mimics the motors currently used in modern-day vehicles.
                              </li>
                            </ul>
                            <a
                              className="inline-flex mt-4 md:text-lg font-semibold text-green-400 underline px-3 py-1.5 rounded-md items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1QmRcqwJA5ZrgwR1o6wR9uzPOu9a152XC/view?usp=drive_link"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 4</span>
                            </a>
                          </div>
                        }
                      />
                      <DescriptionList
                        heading={
                          <div>
                            <p className="text-gray-400 text-sm md:text-base">
                              MAY 2023
                            </p>
                            <p className="pt-1 bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
                              Version 3 Released
                            </p>
                          </div>
                        }
                        content={
                          <div className="text-white">
                            <p>
                              Version 3 of the Model Curriculum for Open
                              Electives in Electric Vehicles is now released.
                            </p>
                            <p className="pt-3">The changes include:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-2">
                              <li>
                                EV 201 course has been updated with a revised
                                curriculum.
                              </li>
                              <li>
                                A custom-designed printed circuit board has been
                                developed and included in the KIT.
                              </li>
                              <li>
                                Exercises with custom-designed boards for
                                students to work with BMS systems and algorithms
                                have been included.
                              </li>
                              <li>
                                Topics on carbon credits have been included in
                                the EV 201 course.
                              </li>
                            </ul>
                            <a
                              className="inline-flex mt-4 md:text-lg font-semibold text-green-400 underline px-3 py-1.5 rounded-md items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1WdNbcXu1rsMl_sitPqx0BTAid0QrXPqF/view"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 3</span>
                            </a>
                          </div>
                        }
                      />
                      <DescriptionList
                        heading={
                          <div>
                            <p className="text-gray-400 text-sm md:text-base">
                              NOVEMBER 2022
                            </p>
                            <p className="pt-1 bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
                              Version 2 Released
                            </p>
                          </div>
                        }
                        content={
                          <div className="text-white">
                            <p>
                              Version 2 of the Model Curriculum for Open
                              Electives in Electric Vehicles is now released.
                            </p>
                            <p className="pt-3">The changes include:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-2">
                              <li>
                                The course structure has been updated for the
                                Electric Vehicles 101 course.
                              </li>
                              <li>
                                Addition of new topics on importance of battery
                                thermal design to Electric Vehicles 101 course.
                              </li>
                            </ul>
                            <a
                              className="inline-flex mt-4 md:text-lg font-semibold text-green-400 underline px-3 py-1.5 rounded-md items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition"
                              target="_blank"
                              href="https://drive.google.com/file/d/1zLul5qKnopQDfF6NHDpWEfJ3IzjTHTJz/view"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Link to Version 2</span>
                            </a>
                          </div>
                        }
                      />
                      <DescriptionList
                        heading={
                          <div>
                            <p className="text-gray-400 text-sm md:text-base">
                              JULY 2022
                            </p>
                            <p className="pt-1 bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
                              Version 1 Released
                            </p>
                          </div>
                        }
                        content={
                          <div className="text-white">
                            <p>
                              Version 1 of the Model Curriculum for Electric
                              Vehicles has been approved and published by AICTE.
                            </p>
                            <p className="pt-3">
                              Version 1 can be downloaded from AICTE Website
                              here.
                            </p>
                            <a
                              className="inline-flex mt-4 md:text-lg font-semibold text-green-400 underline px-3 py-1.5 rounded-md items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition"
                              target="_blank"
                              href="https://www.aicte-india.org/sites/default/files/Model_Curriculum/fINAL%20-%20NEP%202020%20Model%20Syllabus%20for%20Open%20Electives%20in%20Electric%20Vehicles.pdf"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 md:w-6 md:h-6"
                                >
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                                </svg>
                              </span>
                              <span>Download Version 1</span>
                            </a>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="sticky top-24 mt-10 lg:mt-20 -ml-px md:ml-0 space-y-12">
                      <div className="mt-2 md:border-l border-gray-700 pl-12 md:pl-8">
                        <p className="text-lg text-gray-500">
                          Industry Partner
                        </p>
                        <div className="bg-white px-4 py-3 rounded-lg inline-flex items-center justify-center mt-1">
                          <img
                            className="h-16"
                            src="/logos/micelio-logo.png"
                          ></img>
                        </div>
                      </div>
                      <div className="bg-gray-800 text-white rounded-r md:rounded-lg border-gray-100 relative ml-8">
                        <div className="p-2 md:p-4 lg:p-5">
                          <p className="text-xl font-semibold leading-tight">
                            Questions?
                          </p>
                          <p className="leading-tight mt-2">
                            If you have any questions, please write to us
                            at&nbsp;
                            <a
                              href="mailto:ev@pupilfirst.org"
                              className="inline-block bg-clip-text webkit-bg-clip text-transparent bg-gradient-to-r from-cyan-400 to-green-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                            >
                              ev@pupilfirst.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 pb-10 lg:pb-16">
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <div className="pt-10 lg:pt-16">
                  <h3 className="text-secondary-500 text-xl lg:text-3xl font-bold">
                    Questions?
                  </h3>
                  <p className="pt-2 md:text-lg">
                    If you have any questions, please write to the
                    course-specific email addresses below.
                  </p>
                  <p>
                    Web development -
                    <a
                      href="mailto:wd@pupilfirst.org"
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                    >
                      wd@pupilfirst.org
                    </a>
                  </p>
                  <p>
                    Electric Vehicles -{" "}
                    <a
                      href="mailto:ev@pupilfirst.org"
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                    >
                      ev@pupilfirst.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
