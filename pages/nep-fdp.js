import Head from "next/head";
import Link from "next/link";
import DateAndContent from "../components/DateAndContent";
import DescriptionList from "../components/DescriptionList";
import ScheduleDate from "../components/ScheduleDate";
import SectionWithHeading from "../components/SectionWithHeading";
import Testimony from "../components/Testimony";
import AnimatedBackground from "../components/AnimatedBackground";

function FooterLink({ title, href }) {
  return (
    <div className="p-2 text-blue-500 font-medium text-sm hover:underline hover:text-blue-200 cursor-pointer rounded-lg transition">
      <Link target="_blank" href={href}>
        {title}
      </Link>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Head>
        <title>Leadership in Teaching Excellence (LITE)</title>
        <meta
          name="description"
          content="AICTE's Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence."
        ></meta>
        <meta
          name="keywords"
          content="Employment for Students, AICTE guided industry training for faculty members, Recognition for Institute, Proven Online Teaching-Learning method as per NEP 2020, Internship with Covid19 Digital War Rooms."
        ></meta>
        <meta name="author" content="pupilfirst.org"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:title"
          content="Leadership in Teaching Excellence (LITE)"
        />
        <meta
          property="og:description"
          content="AICTE's Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence."
        />
        <meta name="theme-color" content="#FDFAF7" />
        <meta
          property="og:image"
          content="leadership-in-teaching-excellence.jpg"
        />
        <meta property="og:url" content="https://lite.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="leadership-in-teaching-excellence.jpg"
        />
        <meta
          property="og:site_name"
          content="Leadership in Teaching Excellence (LITE)"
        />
        <meta name="AICTE's Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence." />
      </Head>
      <main className="bg-[#160027] mx-auto z-10">
        <section className="hero__bg-pattern relative pb-8">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <AnimatedBackground />
          </div>
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center justify-center bg-white px-2 pt-1.5 pb-2 rounded-full">
                <img
                  className="w-16 md:w-24"
                  src="logos/atal.png"
                  alt="Logo of All India Council for Technical Education (AICTE)"
                />
              </div>
              <div className="space-x-8 hidden md:flex font-medium items-center rounded-lg border-white border-opacity-10 px-4">
                <a
                  href="/nep-fdp"
                  className="text-secondary-300 px-2 py-3 border-b-2 border-secondary-400"
                >
                  NEP-FDP
                </a>
                <a
                  target="_blank"
                  href="/approval_status"
                  className="text-white"
                >
                  LITE Approval Status
                </a>
                <a target="_blank" href="/showcase" className="text-white">
                  LITE National Showcase
                </a>
              </div>
              <div className="flex md:order-last">
                <img
                  className="w-24 md:w-36"
                  src="logos/pupilfirst-logo-white.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="space-x-4 flex md:hidden px-2 text-center font-medium items-center justify-center bg-secondary-800 bg-opacity-50 mt-4">
              <a
                href="/nep-fdp"
                className="text-secondary-300 text-xs px-2 py-3 border-b-2 border-secondary-400"
              >
                NEP-FDP
              </a>
              <a
                target="_blank"
                href="/approval_status"
                className="text-white text-xs"
              >
                Approval Status
              </a>
              <a
                target="_blank"
                href="/showcase"
                className="text-white text-xs"
              >
                National Showcase
              </a>
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto px-4 xl:px-0">
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-gray-700 bg-opacity-50 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-blue-500">
                  NEP 2020 Leadership in Teaching Excellence (LITE)
                </p>
              </div>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700 mt-3 md:mt-0 text-center text-3xl md:text-5xl lg:text-7xl lg:py-4 font-extrabold">
                Leadership Series <br />
                Faculty Development Programme
              </h1>
              <p className="max-w-6xl mx-auto text-center text-white text-sm md:text-base lg:text-lg pt-2">
                AICTE's Leadership in Teaching Excellence (LITE) is a national
                programme to empower administrators and faculty members with
                tools, model curriculums, and best practices to implement NEP
                2020 in its true spirit.
              </p>
            </div>
          </div>
          <section className="mx-4 xl:mx-0 pb-10 md:pb-16 mt-16">
            <div className="bg-gradient-to-br from-[#160027] to-gray-900 text-white rounded-xl border border-secondary-500 relative shadow-lg max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="flex space-y-4 items-center md:space-y-0 flex-col md:flex-row justify-between">
                <div className="md:w-8/12 p-4 lg:p-10">
                  <h2 className="text-xl md:text-3xl">
                    In partnership with Pupilfirst
                  </h2>
                  <p className="mt-4 md:mt-6 text-base lg:text-xl">
                    Pupilfirst is the technology partner for the Leadership in
                    Teaching Excellence programme that aims to train 100,000
                    faculty and 2.4 Crore students in emerging technologies
                    using learner-centred pedagogy.
                  </p>
                </div>
                <div className="w-full md:w-6/12 flex items-center justify-center flex-shrink-0 rounded-b-lg md:rounded-bl-none md:rounded-r-lg bg-gradient-to-br from-secondary-500 to-secondary-600">
                  <div className="p-6 md:p-3">
                    <img
                      className="w-36 lg:w-72 object-contain"
                      src="logos/Pupilfirst-emblem.svg"
                      alt="Pupilfirst logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative max-w-4xl mx-auto mt-4 px-3">
            <h2 className="text-3xl md:text-6xl text-white text-center leading-tight">
              Bringing NEP 2020 Vision for <br />
              Classrooms into Reality
            </h2>
            <p className="text-white text-center text-base md:text-xl mt-3">
              NEP 2020 aims to transform India into a knowledge superpower
              through the digital transformation of classroom education.
            </p>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mt-6 mx-4 md:mx-auto pt-4 relative z-10 bg-[#160027] border border-gray-800 rounded-md md:rounded-xl shadow-lg ">
            <div className="relative max-w-4xl mx-auto">
              <p className="px-6 pb-4 text-sm md:text-lg font-medium py-2 text-gray-400 text-center">
                <span className="font-bold text-gray-300">Watch the Video</span>{" "}
                of how faculty members can transform their classrooms from NEP
                1986 to NEP 2020 Learner-Centered Classrooms.
              </p>
              <div className="hidden md:block h-6 w-6 absolute top-8 left-4 z-10">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 43.1 85.9"
                  xmlSpace="preserve"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="st0 draw-arrow__svg-path"
                    d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="draw-arrow__svg-path"
                    d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="draw-arrow__svg-path"
                    d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
                  />
                </svg>
              </div>
            </div>
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                className="rounded-b-xl shadow-2xl"
                src="https://player.vimeo.com/video/814873471?h=09987f9bd7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Pupilfirst Adhyayana (Teaching-Learning Cycle)"
              ></iframe>
            </div>
          </div>
        </section>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Gain the power of Adhyayana"
        >
          <div className="flex flex-col text-base md:text-xl">
            <p>
              Adhyayana is a regulatory-compliant digital framework
              incorporating all five knowledge frameworks required for
              transforming classrooms into NEP 2020 learner-centered model.
            </p>
            <div>
              <img
                className="w-full rounded-2xl overflow-hidden mt-6 shadow-3xl border border-white border-opacity-10"
                src="/nep-fdp/Pupilfirst-ADHYAYANA-Framework.png"
                alt="NEP 2020 continuos improvement process blueprint for LITE version 1.0"
              />
            </div>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Progressive & Continuous"
        >
          <div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
              <div className="w-full md:flex-1 bg-gradient-to-br from-secondary-900 to-black border border-blue-400 rounded-lg shadow-md p-3 md:p-4">
                <p className="text-blue-400 text-base md:text-xl font-bold">
                  NEP 101
                </p>
                <p className="text-white text-base md:text-2xl font-semibold leading-snug mt-1">
                  Leadership Vision
                </p>
              </div>
              <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-primary-700"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </div>
              <div className="w-full md:flex-1 bg-gradient-to-br from-secondary-900 to-black border border-green-400 rounded-lg shadow-md p-3 md:p-4">
                <p className="text-green-400 text-base md:text-xl font-bold">
                  NEP 201
                </p>
                <p className="text-white text-base md:text-2xl font-semibold leading-snug mt-1">
                  Pedagogic Understanding
                </p>
              </div>
              <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-indigo-700"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </div>
              <div className="w-full md:flex-1 bg-gradient-to-br from-secondary-900 to-black border border-teal-400 rounded-lg shadow-md p-3 md:p-4">
                <p className="text-teal-400 text-base md:text-xl font-bold">
                  NEP 301
                </p>
                <p className="text-white text-base md:text-2xl font-semibold leading-snug mt-1">
                  Curriculum Knowledge
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xl mt-10 gap-10">
            <div>
              <h3 className="text-lg md:text-2xl">
                <span className="text-blue-400">NEP 101:</span> Leadership
                Vision | Netratvam | नेतृत्वं
              </h3>
              <p className="mt-2 text-gray-300 text-base md:text-xl">
                Gain the power to see the visionary path forward laid out by NEP
                to transform classrooms into the building blocks of India as a
                21
                <sup>st</sup>-century superpower.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-2xl">
                <span className="text-green-400">NEP 201:</span> Pedagogic
                Understanding
              </h3>
              <p className="mt-2 text-gray-300 text-base md:text-xl">
                Gain a pedagogic understanding of digital tools that enable
                competency-based curriculums, continuous assessments, learning
                outcomes and 21st-century graduate attributes for each student.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-2xl">
                <span className="text-teal-400">NEP 301:</span> Curriculum
                Knowledge
              </h3>
              <p className="mt-2 text-gray-300 text-base md:text-xl">
                Gain an in-depth understanding of competency-based curriculums.
              </p>
            </div>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Everything You Need to Know"
        >
          <div className="md:grid grid-cols-8 gap-6">
            <div className="flex flex-col gap-12 col-span-7">
              <DescriptionList
                darkBackground="true"
                heading="What is this?"
                content={
                  <div className="text-base md:text-xl">
                    A leadership series of courses to see the big picture of
                    India as a global superpower and the path to realise the
                    vision through NEP 2020.
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="Why?"
                content={
                  <div className="text-base md:text-xl">
                    <p>
                      Implementing NEP Classrooms requires all stakeholders to
                      implement changes collectively. This leadership series
                      provides a proven and guided pathway to implement NEP 2020
                      Model Classrooms using AICTE Model Curriculums.
                    </p>
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="Who is it for?"
                content={
                  <div className="text-base md:text-xl">
                    <p>
                      The path to transforming India is by transforming
                      classrooms as the building blocks which shall create
                      students with 21st-century graduate attributes who can
                      then go out into society and contribute to national
                      development in all spheres of knowledge.
                    </p>
                    <p className="mt-4">
                      Hence, this course series is designed for faculty members
                      playing both administrative and teaching roles, including
                      Vice Chancellors, Deans, Registrars, Heads of
                      Institutions, Heads of Departments and Classroom faculty.
                    </p>
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="What do I gain?"
                content={
                  <div className="text-base md:text-xl">
                    A clear understanding of how your actions can empower other
                    stakeholders and set a chain of events in motion that helps
                    transform our nation, one classroom at a time.
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="What is the effort?"
                content={
                  <div className="text-base md:text-xl">
                    <p>
                      <strong>NEP 101: 45 mins to 60 mins</strong> (recommended
                      for both administrative and teaching roles)
                    </p>
                    <p className="mt-4">
                      <strong>NEP 201: 90 mins to 120 mins</strong> (recommended
                      for faculty members in teaching roles)
                    </p>
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="Is there a fee for the courses?"
                content={
                  <div className="text-base md:text-xl">
                    Both NEP 101 and NEP 201 are provided free of cost to
                    administrators and faculty members, sponsored by ATAL
                    Academy and Pupilfirst.
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="How can I access the courses?"
                content={
                  <div className="text-base md:text-xl">
                    The leadership series is a fully online and self-paced
                    course without assessments.
                  </div>
                }
              ></DescriptionList>
              <DescriptionList
                darkBackground="true"
                heading="Will I get a certificate for the courses?"
                content={
                  <div className="text-base md:text-xl">
                    Yes. You shall receive a joint certificate with ATAL Academy
                    and Pupilfirst for each stage of course completion.
                  </div>
                }
              ></DescriptionList>
            </div>
            {/* <div className="col-span-3 self-start hidden md:block bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 sticky top-4">
              <div className="flex gap-2 p-4 border-b border-gray-700">
                <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                <div className="w-4 h-4 rounded-full bg-gray-700"></div>
              </div>
              <div className="p-4 pb-0">
                <p className="font-bold">Schedule</p>
                <p className="text-xs">Important dates</p>
              </div>
              <div className="flex flex-col gap-4 p-4 text-sm">
                <DateAndContent
                  darkBackground="true"
                  date="April 13, 2023"
                  content="LITE EV FDP cohort#2 applications open."
                />
                <DateAndContent
                  darkBackground="true"
                  date="April 13, 2023 onwards"
                  content="Interested faculty members to apply for FDP."
                />
                <DateAndContent
                  darkBackground="true"
                  date="May 26, 2023"
                  content="Last date for EV FDP cohort#2 applications."
                />
                <DateAndContent
                  darkBackground="true"
                  date="On a rolling basis"
                  content="Institutions to sign the addendum to the LITE MoU with Pupilfirst."
                />
                <DateAndContent
                  darkBackground="true"
                  date="On a rolling basis"
                  content="FDP start for selected faculty members."
                />
                <DateAndContent
                  darkBackground="true"
                  date="On a rolling basis"
                  content="Institutions to complete integration approvals for EV Courses."
                />
                <DateAndContent
                  darkBackground="true"
                  date="July 24, 2023 (tentative)"
                  content="Start course admissions for students at institutions."
                />
              </div>
              <div className="p-4">
                <a
                  href="https://pupilfirst.typeform.com/to/JWPISbKH"
                  target="_blank"
                  className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white text-center bg-gradient-to-r from-green-500 to-blue-400 text-gray-900 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:to-green-500 focus:ring-2 focus:ring-indigo-400 transition "
                >
                  Apply Now for LITE FDP
                </a>
              </div>
            </div> */}
          </div>
        </SectionWithHeading>
        <div>
          <SectionWithHeading
            className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
            darkBackground="true"
            heading="Benefits to Institutions, Faculty and Students"
          >
            <div className="flex space-y-4 md:space-y-0 md:text-lg justify-between items-start">
              <ol className="ml-8 list-decimal space-y-4 text-base md:text-xl max-w-4xl">
                <li className="">
                  A proven pathway to implement NEP 2020 classroom at your
                  institution using AICTE NEP 2020 Model Curriculum.
                </li>
                <li className="">
                  Get recognised nationally as a role model University,
                  Institution, and Faculty.
                </li>
                <li className="">
                  Access for students from LITE enabled institutes to industry
                  internships and hiring opportunities through LITE Hiring
                  Gateway.
                </li>
              </ol>
            </div>
          </SectionWithHeading>

          <SectionWithHeading
            className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
            darkBackground="true"
            heading="Curriculum Overview"
          >
            <div className="flex flex-col gap-20 md:ml-8">
              <DescriptionList darkBackground="true" heading="NEP 101">
                <div className="text-base md:text-xl">
                  <ul className="ml-4 space-y-4 list-disc">
                    <li>
                      Amritkaal - The big picture of India as a 21st-century
                      superpower.
                    </li>
                    <li>
                      The eight steps starting with education to transform
                      classroom as building blocks of India.
                    </li>
                    <li>The big structural changes in NEP 2020.</li>
                    <li>
                      Digital transformation of classrooms as temples of
                      knowledge.
                    </li>
                    <li>
                      Five knowledge frameworks for implementing NEP 2020
                      simplified.
                      <ul className="ml-4 space-y-4 list-disc text-sm md:text-lg mt-3">
                        <li>
                          21<sup>st</sup> Century Graduate Attributes Framework.
                        </li>
                        <li>Learner-Centered Pedagogic Framework.</li>
                        <li>Competency-based Curriculum Framework</li>
                        <li>
                          Continuous and Comprehensive Assessment Framework.
                        </li>
                        <li>National Credit Framework.</li>
                      </ul>
                    </li>
                    <li>How it all comes together in AICTE LITE.</li>
                    <li>
                      How to implement NEP 2020 Model Classroom using AICTE
                      model curriculums.
                    </li>
                  </ul>
                </div>
              </DescriptionList>

              <DescriptionList darkBackground="true" heading="NEP 201">
                <div className="text-base md:text-xl">
                  <p>This course will cover the following:</p>
                  <ul className="ml-4 mt-4 space-y-4 list-disc">
                    <li>
                      How are learner-centred courses created, delivered and
                      assessed.
                    </li>
                    <li>
                      Tools for tracking learners' progress and creating a peer
                      learning environment.
                    </li>
                    <li>
                      Healthy learning practices to inculcate in students in a
                      classroom environment.
                    </li>
                    <li>
                      The career progression pathway for faculty through LITE.
                    </li>
                  </ul>
                </div>
              </DescriptionList>

              <DescriptionList darkBackground="true" heading="NEP 301">
                <p className="text-base md:text-xl">
                  This course involves learning AICTE NEP 2020 model curricula
                  in Web Development or Electric Vehicles and can be taken by
                  teaching faculty along with students in classrooms.
                </p>
              </DescriptionList>
            </div>
          </SectionWithHeading>
        </div>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Get Guidance from Dr Leena Chandran Wadia"
        >
          <section className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative">
            <div className="flex flex-col md:flex-row gap-5 my-8">
              <img
                src="/people/dr-leena-chandran.png"
                alt="Photograph of Dr Leena"
                className="rounded-lg w-full md:w-72"
              />
              <div className="flex">
                <div>
                  <svg
                    width="75"
                    height="54"
                    viewBox="0 0 75 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.4341 9.02441L22.5845 4.82764C17.5483 8.12288 13.1961 12.9103 9.52783 19.1899C5.92171 25.4074 4.11865 31.4383 4.11865 37.2827C4.11865 41.7593 5.29997 44.9924 7.6626 46.9819C10.0252 48.9093 12.9785 49.873 16.5225 49.873C19.569 49.873 22.1493 48.6917 24.2632 46.3291C26.3771 43.9665 27.4341 41.3241 27.4341 38.4019C27.4341 31.0031 23.4238 27.3037 15.4033 27.3037L15.0303 26.7441C16.2738 20.5889 20.4084 14.6823 27.4341 9.02441ZM61.9409 9.02441L57.1846 4.82764C52.0863 8.12288 47.703 12.9103 44.0347 19.1899C40.4285 25.4074 38.6255 31.4383 38.6255 37.2827C38.6255 41.7593 39.8068 44.9924 42.1694 46.9819C44.5321 48.9093 47.5164 49.873 51.1226 49.873C54.1691 49.873 56.7183 48.6917 58.77 46.3291C60.884 43.9665 61.9409 41.3241 61.9409 38.4019C61.9409 31.0031 57.9307 27.3037 49.9102 27.3037L49.5371 26.7441C50.8428 20.651 54.9774 14.7445 61.9409 9.02441ZM29.4858 0.0712891L39.8379 9.02441C32.8122 14.9932 28.3356 19.9671 26.4082 23.9463C30.8848 24.4437 34.0246 26.34 35.8276 29.6353C37.3198 24.0396 40.0555 18.506 44.0347 13.0347C48.076 7.56331 52.5215 3.24219 57.3711 0.0712891H64.0859L74.3447 9.02441C67.3812 14.9932 62.9357 19.9671 61.0083 23.9463C68.6558 25.0654 72.4795 29.884 72.4795 38.4019C72.4795 42.6297 70.6764 46.2358 67.0703 49.2202C63.5264 52.2046 58.2104 53.6968 51.1226 53.6968C43.5994 53.6968 38.6255 50.8989 36.2007 45.3032C33.5272 50.8989 26.9678 53.6968 16.5225 53.6968C11.7972 53.6968 7.9113 52.3911 4.86475 49.7798C1.8182 47.1685 0.294922 43.0028 0.294922 37.2827C0.294922 30.9409 2.50212 24.1328 6.9165 16.8584C11.3931 9.58398 16.709 3.98828 22.8643 0.0712891H29.4858Z"
                      fill="#735E84"
                    />
                  </svg>
                </div>
                <div className="-ml-4 flex flex-col justify-between">
                  <p className="font-semibold text-base md:text-2xl max-w-2xl text-gray-200">
                    NEP 2020 is a discontinuous jump to the future of classroom
                    education. Instead of incremental innovations, we need a
                    paradigm shift, and LITE institutions are the pioneers in
                    bringing the transformative vision of NEP 2020 to life.
                  </p>
                  <div>
                    <p className="font-bold">Dr Leena Chandran Wadia</p>
                    <p>
                      NEP 2019 Drafting Committee Member <br /> Co-Principal
                      Investigator, AICTE LITE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Get Recognised Nationally"
        >
          <p className="text-base md:text-xl">
            As of May 2023, 18 institutions and 13 Universities have already
            gone live in AY 2022-23, and 85 institutions are in the University
            Academic Council approval stage for AY 2023-24.
          </p>
          <div>
            <img
              className="w-full rounded-2xl overflow-hidden mt-6 shadow-3xl"
              src="/nep-fdp/Map-institutes-AY-2022-23-01.png"
              alt="NEP 2020 continuos improvement process blueprint for LITE version 1.0"
            />
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Testimonials"
        >
          <Testimony
            className="bg-secondary-900 bg-gradient-to-br from-secondary-900 to-[#160027] border-secondary-800"
            darkBackground="true"
            testimony={
              <div>
                <p>
                  The Leadership in Teaching Excellence (LITE) is one of the
                  finest leadership development programmes I have ever
                  witnessed.
                </p>
                <p className="mt-4">
                  We have nearly 5 Lakh faculty members who are teaching under
                  the Council but the real question is how many are teaching
                  with excellence.
                </p>
                <p className="mt-4">
                  We are starting with a small group but over the next few
                  years, this programme would expand to tens of thousands of
                  faculty members under the Council.
                </p>
              </div>
            }
            name="Prof Anil D Sahasrabudhe,"
            role={
              <span>
                Chairman, <br /> National Educational Technology Forum (NETF)
              </span>
            }
            imageSrc="/people/Prof-Anil-Sahasrabudhe.jpg"
          />
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Rising through Collective Action"
        >
          <div className="flex flex-col text-base md:text-xl">
            <p>
              For this century to be one in which the Indian civilisation rises
              beyond its past glory into a 21st-century superpower, it would
              require collective action by all players involved in the game viz
              Regulators, Vice Chancellors, Heads of Institutions, Faculty
              Members, Industry, Researchers and Students.
            </p>
            <p className="mt-4">
              Learn the key roles and responsibilities of all stakeholders in
              this Leadership Series to create a collaborative spirit where best
              practices are shared for everyone to learn and continuously
              improve the classroom teaching-learning process.
            </p>
            <div>
              <img
                className="w-full rounded-2xl overflow-hidden mt-6 shadow-3xl"
                src="/nep-fdp/LITE_Swimlane_Diagram_for_Stake-holders.png"
                alt="NEP 2020 continuos improvement process blueprint for LITE version 1.0"
              />
            </div>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Secure our future"
        >
          <div className="flex flex-col text-base md:text-xl">
            <p>
              India's large population requires jobs, and the internet offers
              global opportunities for ten crore new jobs. LITE NEP 2020 Model
              Curriculum in Web Development Curriculum offers your institution
              skills pathway for your students to avail these job opportunities.
            </p>
            <div>
              <img
                className="w-full rounded-2xl overflow-hidden mt-6 shadow-3xl"
                src="/nep-fdp/digital-job-growth-from-2020-2025.png"
                alt="Map showing the upcoming institutions to be showcased"
              />
            </div>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Make Immediate Contributions "
        >
          <section className="flex flex-col text-base md:text-xl">
            <p>
              Contribute immediately to solving the equity crisis in delivering
              healthcare services to ten crore citizens by empowering the top
              students from your institution who complete the nationally
              approved web development courses to join the Global Developer
              Corps programme and get internships to build CARE, a United
              Nations Digital Public Good, deployed at 200 public hospitals.
            </p>
            <div className="relative py-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
                  <div className="row-span-2">
                    <div className="bg-gradient-to-bl from-white/5 to-black/5  border-2 border-white/10 rounded-lg flex flex-col h-full overflow-hidden">
                      <div className="w-11/12 p-8 flex-1">
                        <div className="relative left-gradient-border">
                          <p className="bg-gradient-to-br from-yellow-400 to-purple-500 bg-clip-text text-transparent max-w-max text-xs font-semibold uppercase">
                            Batch 1 Delivered
                          </p>
                          <h4 className="gradient-text text-2xl md:text-3xl xl:text-4xl mt-2">
                            Digital War Rooms during Covid 19 Pandemic.
                          </h4>
                        </div>
                        <p className="text-sm">
                          The first batch students upgraded Open Healthcare
                          Network with Oxygen Modules during the devastating
                          Delta Wave of May 2021.
                        </p>
                      </div>
                      <div className="flex-1 mt-8">
                        <img
                          className="h-full w-full object-cover"
                          src="nep-fdp/digital-war-room.png"
                          alt="Illustration of"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row-span-2">
                    <div className="bg-gradient-to-bl from-white/5 to-black/5  border-2 border-white/10 rounded-lg flex flex-col h-full overflow-hidden">
                      <div className="w-11/12 p-8 flex-1">
                        <div className="relative left-gradient-border">
                          <p className="bg-gradient-to-br from-yellow-400 to-purple-500 bg-clip-text text-transparent max-w-max text-xs font-semibold uppercase">
                            NEP 2020 Model Classrooms
                          </p>
                          <h4 className="gradient-text text-2xl md:text-3xl xl:text-4xl mt-2">
                            LIVE in 6 States & 18 Institutions
                          </h4>
                        </div>
                        <p className="text-sm">
                          Based on the success of the first set of 18
                          institutions, over 103 institutions have signed up for
                          implementing the AICTE Leadership in Teaching
                          Excellence (LITE) Program.
                        </p>
                      </div>
                      <div className="flex-1 mt-8">
                        <img
                          className="h-full w-full object-cover"
                          src="nep-fdp/tele-icu.jpg"
                          alt="Illustration of"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="Curriculum-centric Faculty Development"
        >
          <p className="text-base md:text-xl">
            As understanding the key aspects of NEP 2020 implementation is
            important for faculty members, so is their exposure to the
            curriculum that will be offered to students. Having adequate
            understanding of the basics within the curriculum would enable
            faculty members to mentor students towards completing the courses.
            For the above-mentioned purpose, we are also conducting
            curriculum-centric faculty development programmes for interested
            faculty members.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="col-span-1 p-4 md:p-8 bg-secondary-900 bg-opacity-10 shadow-xl rounded-xl border border-secondary-800">
              <h3 className="text-lg md:text-2xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-secondary-500">
                Faculty Development Programme for Advanced Web Development
                curriculum
              </h3>
              <a
                target="_blank"
                href="https://lite.pupilfirst.org/wd-fdp"
                className="mt-4 inline-flex py-1 px-3 -ml-3 rounded-md space-x-2 items-center hover:underline text-secondary-200"
              >
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-span-1 p-4 md:p-8 bg-secondary-900 bg-opacity-10 shadow-xl rounded-xl border border-secondary-800">
              <h3 className="text-lg md:text-2xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-700">
                Faculty Development Programme for Electric Vehicles curriculum
              </h3>
              <a
                target="_blank"
                href="https://lite.pupilfirst.org/ev-fdp"
                className="mt-4 inline-flex py-1 px-3 -ml-3 rounded-md space-x-2 items-center hover:underline text-secondary-200"
              >
                <span>Read More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          className="bg-[#160027] border-secondary-800 before:bg-gradient-to-b before:from-secondary-400 before:to-secondary-700"
          darkBackground="true"
          heading="A Clear Path Forward"
        >
          <p className="text-base md:text-xl">
            LITE has established a clear path forward for administrators and
            faculty members to collaboratively bring the transformation of
            physical classrooms into digitally integrated learning environments.
          </p>
          <ul className="mt-8 text-2xl space-y-8">
            <li>
              <span className="font-semibold text-secondary-200">Step 1:</span>{" "}
              Get Started with NEP 101 Leadership Vision.
            </li>
            <li>
              <span className="font-semibold text-secondary-200">Step 2:</span>{" "}
              Complete the LITE Approval processes.
            </li>
            <li>
              <span className="font-semibold text-secondary-200">Step 3:</span>{" "}
              Launch NEP 2020 Model Classrooms.
            </li>
          </ul>
        </SectionWithHeading>
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto py-10 lg:pb-24 px-4 xl:pl-0">
            <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12">
              <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">
                Get Started with NEP 101
              </h4>
              {/* <div className="mt-6 flex justify-center">
                <a
                  href="/"
                  className="inline-block w-full sm:w-64 p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-purple-500 to-purple-700 rounded-md text-center text-base shadow-lg lg:text-lg font-semibold hover:shadow-xl transition "
                >
                  Apply Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="bg-[#160027] z-50 border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-2 flex flex-wrap items-center gap-2 justify-center">
          <FooterLink title="Dynamic curriculum" href="/dynamic-curriculum" />
          <FooterLink
            title="FAQ"
            href="https://docs.google.com/document/d/e/2PACX-1vTJ9YP4STdXiGMeFokNtO6r9HIeLI7cJOY5YYhOQcJfQxCPVH9HgtQjlojM6-5_oR_Y7OE693OMc9y2/pub"
          />
          <FooterLink
            title="EV Teaching Fellowship"
            href="https://ev.pupilfirst.org/teaching-fellowship"
          />
        </div>
      </footer> */}
    </div>
  );
}
