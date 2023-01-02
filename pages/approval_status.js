/** @format */

import Head from "next/head";
import Link from "next/link";
// import InstituteCard from "../components/InstituteCard";
import Container from "../components/layout/Container";
import UniversityCard from "../components/UniversityCard";
import { institutesList, universitiesList, findUniqueCount } from "../lib/api";

export default function ApprovalStatus(props) {
  return (
    <div>
      <Head>
        <title>Approval Status | Pupilfirst.org</title>
        <meta name="description" content="leARN | Pupilfirst.org" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary-50 mx-auto">
        <div className="bg-blue-600 text-white p-3 fdp-notice">
          <div className="max-w-6xl mx-auto text-center font-semibold">
            <p>
              <span className="font-bold">Notice:</span> Applications for LITE
              B01Y23 are closed, and LITE B02Y23 Applications are now open for
              July 2023 implementation.
            </p>
            <p>
              Please note that B02Y23 institutions who complete the approval
              process by Jan 24, 2023, shall be upgraded to B01Y23 institutions.
            </p>
          </div>
        </div>
        <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
          <div className="flex max-w-2xl mx-auto md:hidden justify-between items-center gap-4">
            <div className="inline-flex">
              <img
                className="w-16 md:w-24"
                src="logos/atal.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
            <div className="inline-flex">
              <img
                className="w-24 md:w-36"
                src="logos/pupilfirst-logo-primary.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-between items-center gap-4">
            <div className="hidden md:flex">
              <img
                className="w-16 md:w-24"
                src="logos/atal.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
            <div className="hidden md:flex md:order-last">
              <img
                className="w-24 md:w-36"
                src="logos/pupilfirst-logo-primary.svg"
                alt=""
              />
            </div>
            <div className="flex gap-4 mt-3 md:mt-0 items-center text-sm overflow-x-scroll md:overflow-auto">
              <a
                href="/wd-fdp"
                className="font-medium text-gray-700 rounded-md p-1.5 hover:text-secondary-500 hover:bg-secondary-100 hover:bg-opacity-50"
              >
                <span className="hidden lg:inline-block">
                  Faculty Development Program
                </span>
                <span className="inline-block lg:hidden">FDP</span>
              </a>
              <a
                className="block font-medium space-x-1 p-1.5 cursor-pointer flex-shrink-0 text-gray-700 rounded-md hover:text-secondary-500 hover:bg-secondary-100 hover:bg-opacity-50 "
                href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcxNEmRJ1pSn6qLTUT6odll_3_ql87JECesQyxTcK_6apjLdC-gpkNLrlxrTd_fYIyoIVSfPLlDkkF/pubhtml#"
                target="_blank"
              >
                <span>Selection Result</span>
                <span className="bg-red-500 font-medium text-xs text-white px-1.5 py-px rounded-lg">
                  New
                </span>
              </a>
              <a
                href="/approval_status"
                className="block text-secondary-500 p-1.5 border-b-2 border-secondary-400 font-semibold flex-shrink-0"
              >
                Approval Status
              </a>
              <a
                href="/showcase"
                className="block font-medium text-gray-700 rounded-md p-1.5 hover:text-secondary-500 hover:bg-secondary-100 hover:bg-opacity-50"
              >
                <span className="hidden lg:inline-block">
                  National Showcase
                </span>
                <span className="inline-block lg:hidden">Showcase</span>
              </a>
            </div>
          </div>
        </header>
        <Container className="mt-4">
          <div className="bg-gray-50 px-4 md:px-8 py-8 mt-6 border border-b-0 rounded-t-lg">
            <h1 title="LITE NEP 2020 Approval Process Status"></h1>
            <p className="md:text-lg font-medium max-w-6xl">
              AICTE's Leadership in Teaching Excellence (LITE) enables
              Institutions and Faculty to become national showcase of NEP 2020
              pillars of Learner-Centered Pedagogy, Competency Based
              Curriculums, Continous and Personalised Assessments and Continous
              Professional Training for Faculty.
            </p>
          </div>
        </Container>
        <div className="overflow-x-auto bg-gray-50 pt-6 pb-2 border-t border-b border-gray-200">
          <div className="pr-6">
            <div className="flex flex-col md:flex-row mx-auto items-start justify-between relative">
              <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 px-4 py-6 md:py-10 bg-gray-100 md:bg-transparent">
                <div className="absolute h-full w-1 top-0 bottom-0 md:w-full left-4 md:left-0 md:right-0 md:h-1 bg-gray-300 md:bottom-auto md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className="w-28 h-28 object-cover"
                    src="approval-process-status-icons/application-submitted-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 px-4 py-2 md:p-4 rounded-lg bg-gray-50 md:text-center relative">
                    <p className="text-3xl font-bold">
                      {/* {props.institutesSummary.application_submitted} */}
                      413
                    </p>
                    <p>FDP application submitted</p>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 px-4 py-6 md:py-10 bg-gray-50 md:bg-transparent">
                <div className="absolute h-full w-1 top-0 bottom-0 md:w-full left-4 md:left-0 md:right-0 md:h-1 bg-gray-300 md:bottom-auto md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className=" w-28 h-28 object-cover"
                    src="approval-process-status-icons/mou-signed-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 px-4 py-2 md:p-4 rounded-lg bg-gray-50 md:text-center relative">
                    <p className="text-3xl font-bold">
                      {/* {props.institutesSummary.mou_signed} */}
                      91
                    </p>
                    <p>Institutions with LITE MoU</p>
                  </div>
                </div>
              </div>
              {/* <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 px-4 py-6 md:py-10 bg-gray-100 md:bg-transparent">
                <div className="absolute h-full w-1 top-0 bottom-0 md:w-full left-4 md:left-0 md:right-0 md:h-1 bg-gray-300 md:bottom-auto md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className=" w-28 h-28 object-cover"
                    src="approval-process-status-icons/faculty-training-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 px-4 py-2 md:p-4 rounded-lg bg-gray-50 md:text-center relative">
                    <p className="text-3xl font-bold">
                      {props.institutesSummary.faculty_training_completed}
                    </p>
                    <p>Institutions with Faculty Trained</p>
                  </div>
                </div>
              </div> */}
              <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 px-4 py-6 md:py-10 bg-gray-100 md:bg-transparent">
                <div className="absolute h-full w-1 top-0 bottom-0 md:w-full left-4 md:left-0 md:right-0 md:h-1 bg-gray-300 md:bottom-auto md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className=" w-28 h-28 object-cover"
                    src="approval-process-status-icons/academic-council-approval-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 px-4 py-2 md:p-4 rounded-lg bg-gray-50 md:text-center relative">
                    <p className="text-3xl font-bold">
                      {/* {
                        props.institutesSummary
                          .academic_council_approval_completed
                      } */}
                      19
                    </p>
                    <p>Institutions with Academic Council Approvals</p>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 px-4 py-6 md:py-10 bg-gray-50 md:bg-transparent">
                <div className="absolute h-full w-1 top-0 bottom-0 md:w-full left-4 md:left-0 md:right-0 md:h-1 bg-gray-300 md:bottom-auto md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className="w-28 h-28 object-cover"
                    src="approval-process-status-icons/uty-approval-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 px-4 py-2 md:p-4 rounded-lg bg-gray-50 md:text-center relative">
                    <p className="text-3xl font-bold">
                      {props.institutesSummary.university_approval_completed}
                    </p>
                    <p>Institutions with University Approvals</p>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 px-4 py-6 md:py-10 bg-gray-50 md:bg-transparent">
                <div className="absolute h-full w-1 top-0 bottom-0 md:w-full left-4 md:left-0 md:right-0 md:h-1 bg-gray-300 md:bottom-auto md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className=" w-28 h-28 object-cover"
                    src="approval-process-status-icons/admission-started-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 px-4 py-2 md:p-4 rounded-lg bg-gray-50 md:text-center relative">
                    <p className="text-3xl font-bold">
                      {props.institutesSummary.admission_started}
                    </p>
                    <p>Institutions with Time Table Integrations</p>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full md:w-auto flex-shrink-0 md:flex-1 flex-col md:justify-center md:items-center md:space-y-5 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-500 to-indigo-800 px-4 py-10">
                <div className="absolute h-full w-1 md:w-1/2 top-0 left-4 md:right-1/2 md:left-0 transform -translatex-1/2 md:h-1 bg-white md:top-[14rem] z-10"></div>
                <span className="flex md:justify-center items-center pl-8 md:pl-0">
                  <img
                    className=" w-28 h-28 object-cover"
                    src="approval-process-status-icons/lite-enabled-icon.svg"
                    alt=""
                  />
                </span>
                <div className="relative flex w-full md:flex-col items-center md:justify-center md:pt-4 space-y-4">
                  <span className="relative z-20 bg-white w-8 h-8 -left-3.5 md:left-auto rounded-full border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <div className="flex w-full flex-col md:justify-between md:items-center flex-1 p-4 rounded-lg bg-white border-2 border-indigo-700 shadow-inner md:text-center relative">
                    <p className="text-3xl font-bold">
                      {props.institutesSummary.lite_enabled}
                    </p>
                    <p className="text-indigo-600 font-medium">
                      LITE Enabled Institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="mt-16">
          <h2>LITE NEP 2020 Enabled States and Universities</h2>
          <div className="lg:container mx-auto mt-2 bg-orange-50 bg-opacity-75 border border-orange-100 rounded-lg py-8">
            <p className="flow-chart-level-0 flex flex-col rounded-lg bg-orange-100 text-orange-700 w-64 text-center mx-auto p-6 shadow-lg border-2 border-orange-400 relative">
              <span className="text-xl md:text-3xl font-semibold">
                {props.summary.liteEnabledStates}
              </span>
              <span>States</span>
            </p>
            <div className="mt-14">
              <p className="flow-chart-level-1 flex flex-col rounded-lg bg-indigo-100 text-indigo-700 w-64 text-center mx-auto p-6 shadow-lg border-2 border-indigo-400 relative">
                <span className="text-xl md:text-3xl font-semibold">
                  {props.summary.lite_enabled_universities_count}
                </span>
                <span>Universities</span>
              </p>
            </div>
            <div className="flow-chart-level-2-wrapper max-w-xl mx-auto w-full relative grid grid-cols-3 gap-2">
              <div className="bg-white md:w-40 text-center mx-auto">
                <p className="flow-chart-level-2 flex flex-col rounded-lg bg-indigo-100 text-indigo-700 text-center mx-auto p-2 md:p-6 shadow-lg border-2 border-indigo-400 relative">
                  <span className="text-xl md:text-2xl font-semibold">
                    {props.summary.le_public_university_count}
                  </span>
                  <span>Public Universities</span>
                </p>
              </div>
              <div className="bg-white md:w-40 text-center mx-auto">
                <p className="flow-chart-level-2 flex flex-col rounded-lg bg-indigo-100 text-indigo-700 text-center mx-auto p-2 md:p-6 shadow-lg border-2 border-indigo-400 relative">
                  <span className="text-xl md:text-2xl font-semibold">
                    {props.summary.le_private_university_count}
                  </span>
                  Private Universities
                </p>
              </div>
              <div className="bg-white md:w-40 text-center mx-auto ">
                <p className="flow-chart-level-2 flex flex-col rounded-lg bg-indigo-100 text-indigo-700 text-center mx-auto p-2 md:p-6 shadow-lg border-2 border-indigo-400 relative">
                  <span className="text-xl md:text-2xl font-semibold">
                    {props.summary.le_deemed_university_count}
                  </span>
                  Deemed Universities
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <h2 className="pt-16">LITE NEP 2020 Enabled Universities</h2>
          <div className="grid grid-cols-1 gap-5 mt-2">
            {props.liteEnabledUniversities.map((university, index) => (
              <UniversityCard university={university} key={index} />
            ))}
          </div>
        </Container>

        <Container>
          <h2 className="pt-16">
            LITE NEP 2020 Universities Awaiting Approval
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-2 pb-16">
            {props.pendingUniversities.map((university, index) => (
              <UniversityCard university={university} key={index} />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let institutesSummary = {
    application_submitted: institutesList.length,
    mou_signed: institutesList.filter(
      (institute) => institute.mou_signed == "completed"
    ).length,
    faculty_training_completed: institutesList.filter(
      (institute) => institute.faculty_training == "completed"
    ).length,
    university_approval_completed: institutesList.filter(
      (institute) => institute.university_approval == "completed"
    ).length,
    academic_council_approval_completed: institutesList.filter(
      (institute) => institute.academic_council_approval == "completed"
    ).length,
    admission_started: institutesList.filter(
      (institute) => institute.admission_started == "completed"
    ).length,
    lite_enabled: institutesList.filter(
      (institute) => institute.lite_enabled == "completed"
    ).length,
  };

  let liteEnabledUniversities = universitiesList.filter(
    (i) => i.minor_degree_approval == "completed"
  );

  let summary = {
    lite_enabled_states: findUniqueCount(
      liteEnabledUniversities.map((u) => u.state)
    ),
    lite_enabled_universities_count: liteEnabledUniversities.length,
    le_public_university_count: liteEnabledUniversities.filter(
      (u) => u.type == "public_university"
    ).length,
    le_private_university_count: liteEnabledUniversities.filter(
      (u) => u.type == "private_university"
    ).length,
    le_deemed_university_count: liteEnabledUniversities.filter(
      (u) => u.type == "deemed_university"
    ).length,
  };

  let pendingUniversities = universitiesList.filter(
    (i) => i.minor_degree_approval != "completed"
  );

  return {
    props: {
      institutes: institutesList,
      liteEnabledUniversities: liteEnabledUniversities,
      pendingUniversities: pendingUniversities,
      universities: universitiesList,
      institutesSummary: institutesSummary,
      summary: summary,
    },
  };
}
