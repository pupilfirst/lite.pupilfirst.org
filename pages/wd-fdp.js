import Head from "next/head";
import Link from "next/link";
import DateAndContent from "../components/DateAndContent";
import DescriptionList from "../components/DescriptionList";
import StudentTeachingAssistants from "../components/StudentTeachingAssistants";
import HiringNetwork from "../components/HiringNetwork";
import PathWayToJoinFDP from "../components/PathWayToJoinFDP";
import People from "../components/People";
import ScheduleDate from "../components/ScheduleDate";
import SectionWithHeading from "../components/SectionWithHeading";
import Testimony from "../components/Testimony";
import ZoomImage from "../components/ZoomImage";

let researchers = [
  {
    name: "Dr. Leena Chandran Wadia",
    role: "Member NEP 2019 Drafting Committee",
    imgSrc: "/people/dr-leena-chandran.png",
    description:
      "Leena received her PhD in Physics from the Indian Institute of Science, Bangalore, and did her post-doctoral work in high-performance computing at ETH Zurich. She has both academia and industry experience having worked at CDAC, TIFR, IIT Bombay, and Netcore Cloud, in India. As of 2010, she has been working in the area of policy research and advocacy, mainly in the area of education. She was a member of the drafting committee of the draft National Education Policy 2019 prepared by the Dr Kasturirangan committee. At present, she serves as Professor and Head of the Vocational Education Cell at The University of Trans-disciplinary Health Sciences and Technology (TDU).",
  },
  {
    name: "Dr. Viraj Kumar",
    role: "Technical Secreteriat to National Curriculum Framework",
    imgSrc: "/people/dr-viraj-kumar.png",
    description:
      "Viraj completed his MS and PhD in Computer Science from the University of Illinois at Urbana-Champaign in 2007. His primary research interests are in Computer Science Education and Educational Technology. He serves as an elected member of the ACM India Council, and as a member of the Technical Secretariat to the National Curriculum Framework Steering Committee. He previously served as a consultant to the Kasturirangan Committee to draft the National Education Policy (NEP 2020).",
  },
  {
    name: "Aparna Sivakumar",
    role: "Researcher",
    imgSrc: "/people/aparna-sivakumar.png",
    description:
      "Aparna has a B.Tech in Computer Science and Engineering from College of Engineering, Trivandrum. She has worked in technology, education policy and advocacy, and community organising. With over 21 years of experience, she has worked at Infosys, Observer Research Foundation and at leading roles in Netcore Cloud & Free A Billion.",
  },
];

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
      <main className="bg-primary-50 mx-auto z-10">
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
        <section className="hero__bg-pattern relative">
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center">
              <div>
                <img
                  className="w-16 md:w-24"
                  src="logos/atal.png"
                  alt="Logo of All India Council for Technical Education (AICTE)"
                />
              </div>
              <div className="space-x-2 md:space-x-8 text-sm">
                <span className="text-secondary-500 p-1.5 border-b-2 border-secondary-400 font-semibold">
                  <span className="hidden md:inline-block">
                    Faculty Development Program
                  </span>
                  <span className="inline-block md:hidden">FDP</span>
                </span>
                <a
                  className="relative inline-flex items-center space-x-1"
                  href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcxNEmRJ1pSn6qLTUT6odll_3_ql87JECesQyxTcK_6apjLdC-gpkNLrlxrTd_fYIyoIVSfPLlDkkF/pubhtml#"
                  target="_blank"
                >
                  <span>Selection Result</span>
                  <span className="bg-red-500 font-medium text-xs text-white px-1.5 py-px rounded-lg">
                    New
                  </span>
                </a>
                <Link href="/showcase">
                  <a className="font-medium text-gray-700 rounded-md p-1.5 hover:text-secondary-500 hover:bg-secondary-100 hover:bg-opacity-50">
                    <span className="hidden md:inline-block">
                      National Showcase
                    </span>
                    <span className="inline-block md:hidden">Showcase</span>
                  </a>
                </Link>
              </div>
              <div className="flex">
                <img
                  className="w-24 md:w-36"
                  src="logos/pupilfirst-logo-primary.svg"
                  alt=""
                />
              </div>
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto px-4 xl:px-0">
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-center text-3xl md:text-5xl lg:text-7xl lg:py-4 font-extrabold">
                Leadership in <br />
                Teaching Excellence
                <span className="hidden md:inline-block text-xl pl-1">
                  (LITE)
                </span>
              </h1>
              <p className="max-w-6xl mx-auto text-center text-sm md:text-base lg:text-lg pt-2">
                AICTE's Leadership In Teaching Excellence (LITE) is a
                transformational program to pioneer and implement the goals of
                National Educational Policy 2020 such as learner-centered
                pedagogy, competency-based curriculums, continuous and
                personalized assessments thus{" "}
                <span className="font-bold">
                  enabling 100,000 faculty to skill 2.4 Crore students{" "}
                </span>
                in emerging industry technologies, beginning with Advanced Web
                Development.
              </p>
              {/* <div className="pt-4 md:pt-8">
                <div>
                  <a
                    href="https://apply.pupilfirst.org/wdfdp"
                    target="_blank"
                    className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-primary-400 to-primary-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
                  >
                    Apply Now for LITE FDP
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="relative z-20 pt-4 md:pt-6 max-w-7xl mx-auto px-2 xl:px-0 text-center">
            <div className="rounded-2xl shadow-sm">
              <div className="bg-secondary-200 bg-opacity-25 backdrop-blur-sm border-4 border-white border-opacity-50 py-6 px-4 rounded-2xl">
                <div className="grid grid-cols-2 gap-2 xl:gap-0 md:grid-cols-3 xl:grid-cols-5 xl:divide-x-4 divide-white divide-opacity-50">
                  <div className="flex flex-col justify-center items-center bg-white bg-opacity-25 xl:bg-transparent backdrop-blur-sm drop-shadow-sm xl:drop-shadow-none rounded-lg text-secondary-600 p-2 leading-snug">
                    <p className="text-xl md:text-4xl font-bold">839</p>
                    <p>Faculty Members Applied</p>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white bg-opacity-25 xl:bg-transparent backdrop-blur-sm drop-shadow-sm xl:drop-shadow-none rounded-lg text-secondary-600 p-2 leading-snug">
                    <p className="text-xl md:text-4xl font-bold">278</p>
                    <p>Institutions Represented</p>
                  </div>

                  <div className="flex flex-col justify-center items-center bg-white bg-opacity-25 xl:bg-transparent backdrop-blur-sm drop-shadow-sm xl:drop-shadow-none rounded-lg text-secondary-600 p-2 leading-snug">
                    <p className="text-xl md:text-4xl font-bold">105</p>
                    <p>Universities</p>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white bg-opacity-25 xl:bg-transparent backdrop-blur-sm drop-shadow-sm xl:drop-shadow-none rounded-lg text-secondary-600 p-2 leading-snug">
                    <p className="text-xl md:text-4xl font-bold">27</p>
                    <p>States</p>
                  </div>
                  <div className="flex flex-col justify-center xl:justify-start items-center bg-white bg-opacity-25 xl:bg-transparent backdrop-blur-sm drop-shadow-sm xl:drop-shadow-none rounded-lg text-secondary-600 p-2 leading-snug">
                    <p className="text-xl md:text-4xl font-bold">78</p>
                    <p>LITE MoU Received</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 md:pt-6">
              <a
                href="https://apply.pupilfirst.org/wdfdp"
                target="_blank"
                className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-primary-400 to-primary-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:from-primary-500 hover:to-primary-700 hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
              >
                Apply Now for LITE FDP
              </a>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mt-6 mx-4 md:mx-auto pt-4 relative z-10 bg-white bg-opacity-75 rounded-md md:rounded-xl shadow-2xl shadow-orange-200 ">
            <div className="relative max-w-3xl mx-auto">
              <p className="px-6 pb-4 text-xs md:text-lg font-medium py-2 text-gray-600 text-center">
                <span className="font-bold text-gray-900">Watch the Video</span>{" "}
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
            <div style={{ padding: "42.58% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/760206777?h=0b708633d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-b-md md:rounded-b-xl"
                title="AICTE Leadership in Teaching Excellence (LITE)  - Transformation of Classrooms to NEP 2020 Learner Centered Pedagogy"
              ></iframe>
            </div>
          </div>
          <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/hero-bg.png"
              alt="LITE - hero background image"
            />
            <div className="absolute inset-0"></div>
          </div>
        </section>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto mt-8 py-4 px-4 xl:px-0 relative z-10">
          <div className="mt-8 borse border-orange-300 grid grid-cols-none md:grid-cols-12 gap-4 md:gap-8 flex-col md:flex-row justify-between p-6 bg-orange-50 rounded-lg">
            <div className="md:col-span-4 flex items-start justify-center flex-shrink-0">
              <div className="p-4 md:p-3 rounded-3xl border-2 bg-primary-100 border-primary-200 shadow-sm">
                <img
                  className="w-full h-full object-contain rounded-2xl"
                  src="people/MP-Poonia.png"
                  alt="Prof MP Poonia, Vice Chairman, All India Council for Technical Education."
                />
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-between">
              <div className="mt-4">
                <h2 className="text-base md:text-xl lg:text-2xl lg:pt-2">
                  Letter to Vice Chancellors and Head of Institutions from{" "}
                  <br />
                  Hon: Vice Chairman, AICTE
                </h2>
                <p className="mt-4 text-base md:text-xl max-w-3xl">
                  “We intend to upgrade selected institutions as AICTE Brand
                  Ambassadors of Change and highlight selected institutions, its
                  leadership, faculty members and students as change agents who
                  are implementing proven online teaching-learning methods that
                  are aligned with NEP 2020”
                </p>
              </div>
              <div>
                <p className="font-semibold mt-6 text-lg">Prof MP Poonia, </p>
                <p className="italic">Vice Chairman, </p>
                <p className="italic">
                  All India Council for Technical Education.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto mt-8 py-4 px-4 xl:px-0 relative z-10">
          <div className="grid grid-cols-none md:grid-cols-12 gap-4 md:gap-8 flex-col md:flex-row justify-between p-6 bg-orange-50 rounded-lg">
            <div className="md:col-span-4 flex items-start justify-center flex-shrink-0">
              <div className="p-4 md:p-3 rounded-3xl border-2 bg-primary-100 border-primary-200 shadow-sm">
                <img
                  className="w-full h-full object-contain rounded-2xl"
                  src="people/Dr-Mamta-Rani-Agarwal.jpg"
                  alt="Prof MP Poonia, Vice Chairman, All India Council for Technical Education."
                />
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-between">
              <p className="mt-2 md:mt-8 text-base md:text-xl max-w-2xl">
                “AICTE LITE creates an exciting opportunity for institutions and
                faculty members to bring an integrated research environment into
                their classrooms and provide inputs to the National Educational
                Technology Forum (NETF) that has been established under NEP 2020
                to showcase the best practices in digital teaching-learning
                pedagogies.”
              </p>
              <div>
                <p className="font-semibold mt-6 text-lg">
                  Dr. Mamta Rani Agarwal,{" "}
                </p>
                <p className="italic">Advisor - I, </p>
                <p className="italic">
                  All India Council for Technical Education.
                </p>
                <a
                  className="inline-flex items-center px-4 py-3 rounded-lg space-x-2 font-semibold bg-primary-100 text-primary-800 mt-4 md:mt-6 border border-primary-400 hover:bg-primary-50 hover:shadow-lg outline-none focus:ring focus:ring-primary-200 focus:ring-offset-1 transition"
                  href="letter-from-advisor/AICTE_TRAINING_AND_LEARNING_ACADEMY_-_LEADERSHIP_IN_TEACHING_EXCELLENCE_LITE_FDP_ANNOUNCEMENT_30_NOV_2022.pdf"
                  target="_blank"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-primary-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                      <path
                        fillRule="evenodd"
                        d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                      />
                    </svg>
                  </div>
                  <div>Read the full letter</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto md:mt-4 pt-4 px-4 xl:px-0 relative z-10 pb-10 md:pb-20">
          <div className="md:grid grid-cols-12 bg-white shadow-lg shadow-indigo-100 border border-primary-50 rounded-lg flex flex-col md:flex-row gap-5 items-center justify-between p-6 md:p-8">
            <p className="md:col-span-8 text-lg md:text-xl font-medium max-w-4xl">
              <span className="font-bold">
                Begin your journey to implement NEP 2020
              </span>{" "}
              with AICTE's Leadership in Teaching Excellence Faculty Development
              Programme.
            </p>
            <a
              href="https://apply.pupilfirst.org/wdfdp"
              target="_blank"
              className="inline-block md:col-span-4 items-center w-full text-center sm:max-w-md p-3 lg:px-8 lg:py-3.5 text-white bg-gradient-to-br from-primary-400 to-primary-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:from-primary-500 hover:to-primary-700 hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
            >
              Apply Now for LITE FDP
            </a>
          </div>
        </div>
        <SectionWithHeading
          heading={
            <p>
              Program Highlights for
              <br /> Faculty Members
            </p>
          }
        >
          <div className="md:grid grid-cols-8 gap-6">
            <div className="flex flex-col gap-8 col-span-5">
              <DescriptionList
                heading="NEP 2020 Model Curriculum"
                content={
                  <p>
                    AICTE has published{" "}
                    <a
                      className="text-indigo-600 fonr-semibold hover:underline hover:bg-indigo-50 transition"
                      target="_blank"
                      href="https://www.aicte-india.org/sites/default/files/Model_Curriculum/Minor%20Degree%20in%20Adv.%20Web%20Development.pdf"
                    >
                      NEP 2020 Model Curriculum in Advanced Web Development
                    </a>{" "}
                    for institutions and faculty members featuring
                    learner-centred pedagogy, competency-based curriculums and
                    continuous assessments.
                  </p>
                }
              />

              <DescriptionList
                heading="Dynamic Updates by Industry"
                content="NEP 2020 Model Curriculums are maintained by practicing industry engineers enabling faculty members and students to learn the most up-to-date knowledge."
              />
              <DescriptionList
                heading="Teaching Assistants"
                content="Get support from student teaching assistants (TAs) who have completed the curriculum to enable you to answer all queries/doubts of your learners via the learning community."
              />
              <DescriptionList
                heading="Career Progression"
                content="The LITE FDPs are conducted with AICTE Training and Learning (ATAL) Academy, ensuring that this training counts towards your career progression."
              />
              <DescriptionList
                heading="NEP 2020 Certificate"
                content={
                  <p>
                    Faculty members who complete training shall be certified as
                    AICTE LITE Brand Ambassador of Change.{" "}
                    <span className="italic block mt-6">
                      A copy of the previous LITE certificate is below as a
                      sample.
                    </span>
                  </p>
                }
              >
                <img
                  src="/sample-certificate/LITE-Faculty-Certificate-Sample.png"
                  alt="Sample certificate issued by LITE"
                />
              </DescriptionList>
            </div>
            <div className="col-span-3 self-start hidden md:block bg-white rounded-lg border border-gray-200 sticky top-4">
              <div className="flex gap-2 p-4 border-b border-gray-200">
                <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                <div className="w-4 h-4 rounded-full bg-gray-100"></div>
              </div>
              <div className="p-4 pb-0">
                <p className="font-bold">Schedule</p>
                <p className="text-xs">Important dates</p>
              </div>
              <div className="flex flex-col gap-4 p-4 text-sm">
                <DateAndContent
                  date="December 01, 2022 "
                  content="LITE B01Y23 FDP Applications Open and Training Starts."
                />
                <DateAndContent
                  date="December 12, 2022"
                  content="Last Date for B01Y23 FDP Applications (tentative)."
                />
                <DateAndContent
                  date="December 13, 2022 onwards"
                  content="Interested faculty members to apply for FDP and coordinate integration approvals on a continuous basis."
                />
                <DateAndContent
                  date="December 20, 2022"
                  content="Last Date for institute to share the signed MoU with Pupilfirst and faculty members to complete WD101 (tentative)"
                />
                <DateAndContent
                  date="December 21, 2022"
                  content="AICTE to Announce Selected Institutions and Faculty Members."
                />
                <DateAndContent
                  date="January 24, 2023"
                  content="Last Date for Institutions to complete integration approvals for B01Y23."
                />
                <DateAndContent
                  date="February 10, 2023"
                  content="Start Course Admissions for students at institutions."
                />
                <DateAndContent
                  date="Ongoing"
                  content="Faculty training continues along with course deployment."
                />
              </div>
              <div className="p-4">
                <a
                  href="https://apply.pupilfirst.org/wdfdp"
                  target="_blank"
                  className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-primary-400 to-primary-500 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:from-primary-500 hover:to-primary-700 hover:shadow-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition "
                >
                  Apply Now for LITE FDP
                </a>
              </div>
            </div>
          </div>
        </SectionWithHeading>
        <div className="bg-gradient-to-b from-white to-primary-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto ">
            <div className="mx-4 xl:mx-0 border-l border-gray-200">
              <div className="py-10 lg:py-16">
                <div className="heading-with-leftborder">
                  <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                    Learner Centered <br />
                    Classroom Framework
                  </h2>
                </div>
                <div className="max-w-6xl mt-6 md:mt-8 ml-4 lg:ml-12 xl:ml-16 2xl:ml-36">
                  <p className="md:text-lg">
                    AICTE LITE enables all stakeholders including universities,
                    institutions, faculty, industry and researchers to work
                    collaboratively to build NEP 2020 learner-centered
                    classrooms.
                  </p>
                  <div className="relative">
                    <p className="pt-4 md:text-lg">
                      <span className="font-semibold md:text-indigo-400">
                        Watch video
                      </span>{" "}
                      to see the processes that are executed by each stakeholder
                      to transform classrooms from NEP 1986 to NEP 2020.
                    </p>
                    <div className="hidden md:block h-6 w-6 absolute top-8 -left-6 z-10">
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
                  <div className="mt-8 shadow-2xl rounded-xl">
                    <div
                      rounded-xl
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        className="rounded-xl"
                        src="https://player.vimeo.com/video/768136345?h=cd15b50884&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="Learner-Centered-Classroom-Framework-Video"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionWithHeading heading={"Deep Research Integration"}>
          <p className="md:text-lg">
            Faculty and Institutions who qualify shall become part of the
            Learning Engineering, Analytics & Research Network (LEARN); a key
            component of the LITE programme. The research team's goal is to
            constantly listen to institutions and faculty to suggest
            improvements to policymakers so that the learner-centred classroom
            framework is dynamically improving every day.
          </p>
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {researchers.map((researcher) => (
              <People
                imgSrc={researcher.imgSrc}
                name={researcher.name}
                role={researcher.role}
                description={researcher.description}
              />
            ))}
          </div>
        </SectionWithHeading>
        <SectionWithHeading heading="Leadership Testimonial">
          <Testimony
            testimony="The Leadership in Teaching Excellence (LITE) is one of the finest leadership development programmes I have ever witnessed.We have nearly 5 Lakh faculty members who are teaching under the Council but the real question is how many are teaching with excellence. We are starting with a small group but over the next few years, this programme would expand to tens of thousands of faculty members under the Council."
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
          heading={<p>Five Steps to be a LITE Institution</p>}
        >
          <PathWayToJoinFDP />
        </SectionWithHeading>

        <SectionWithHeading heading={<p>Approval Process Experience</p>}>
          <div className="relative">
            <p className="md:text-lg">
              Watch the experience of{" "}
              <span className="font-semibold">
                Chaitanya Bharati Institute of Technology
              </span>
              on how they secured approvals from{" "}
              <span className="font-semibold">Osmania University,</span>{" "}
              enabling faculty to launch NEP 2020 Classrooms.
            </p>
            <div className="hidden md:block h-6 w-6 absolute top-6 -left-6 -translate-y-1.5 rotate-12 z-10">
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

          <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/770258057?h=15a8fe2942&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              className="rounded-md md:rounded-xl mt-8 shadow-xl"
              title="AICTE LITE Academic Approval Process Steps | Prof. Ravindra Reddy"
            ></iframe>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          heading={
            <p>
              Join LITE VCs and <br /> Heads of Institutions
            </p>
          }
        >
          <p>
            <span className="font-bold">
              8 Vice Chancellors and 12 Heads of Institutions
            </span>{" "}
            are leading LITE NEP 2020 Classroom implementation.
          </p>
          <div className="mt-8">
            <ZoomImage
              src="/stats-map/stats-map-LITE-2022-vc-head-of-institutions.png"
              alt="Map showing vc's and heads of institutions"
            />
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading={
            <p>
              Become a Faculty Member with <br /> Leadership In Teaching
              Excellence.
            </p>
          }
        >
          <p>
            <span className="font-bold">21 faculty members</span> secured all
            approvals from Universities and Institutions to launch LITE NEP 2020
            classrooms as pioneers.
          </p>
          <div className="mt-8">
            <ZoomImage
              src="/stats-map/stats-map-LITE-2022-Faculties.png"
              alt="Map showing vc's and heads of institutions"
            />
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading={
            <p>
              Hear the experience from LITE University, Institutions and Faculty
            </p>
          }
        >
          <div className="relative">
            <p className="md:text-lg">
              Watch a short video where 10 faculty members from LITE
              Institutions narrate their experience in implementing AICTE NEP
              2020 Model Curriculum.
            </p>
            <div className="hidden md:block h-6 w-6 absolute top-6 -left-6 -translate-y-1.5 rotate-12 z-10">
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

          <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/771443893?h=6d2079b11a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              className="rounded-md md:rounded-xl mt-8 shadow-xl"
              title="AICTE LITE Academic Approval Process Steps | Prof. Ravindra Reddy"
            ></iframe>
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          heading={
            <span>
              Highlights of ATAL FDP <br /> in Advanced Web Development
            </span>
          }
        >
          <div className="flex flex-col gap-20">
            <DescriptionList
              heading="Bridge your skill gap with Industry"
              content="Upgrade your knowledge for preparing students for the 10Cr job opportunities in the Web Development industry"
            >
              <img
                className="p-8 bg-white rounded-lg mt-6"
                src="/stats/digital-job-growth-from-2020-2025.svg"
                alt="Graph showing digital job growth"
              />
              <p className="text-gray-600 italic text-sm pt-1">
                Data Source:{" "}
                <a
                  className="text-indigo-600 underline"
                  href="https://blogs.microsoft.com/blog/2020/06/30/microsoft-launches-initiative-to-help-25-million-people-worldwide-acquire-the-digital-skills-needed-in-a-covid-19-economy/"
                  target="_blank"
                >
                  Microsoft Data Science utilizing LinkedIn data.
                </a>
              </p>
            </DescriptionList>
            <DescriptionList
              heading="Dynamic Curriculum by Industry Experts"
              content="Confidently, learn how to become a full-stack developer by learning from a curriculum designed and maintained by practising software engineering professionals."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-5 mt-6">
                <People
                  name="Vignesh Rajendran"
                  role="Principal Engineer, Oracle"
                  description="Vignesh is a seasoned UI Technology Evangelist with around
                      10 years of experience building and developing amazing
                      User Experiences across various platforms and domains. He
                      works with Oracle as a Principal Engineer solving UI
                      engineering use cases for their Cloud and Cloud-native
                      products. The stack he works on covers everything UI,
                      although now he mainly codes on Javascript and Typescript.
                      In leisure, he writes a lot and read a lot more."
                  imgSrc="people/vignesh.jpg"
                />

                <People
                  name="Melson J Zacharias"
                  role="CTO, Perleybrook Labs LLC"
                  description="Melson is CTO at Perleybrook Labs LLC, where he primarily
                      works with C++, Python, and Typescript. In his spare time,
                      he would be reading a book or can be seen answering
                      questions in StackOverflow."
                  imgSrc="people/melson.jpeg"
                />
                <People
                  name="Avishek Jana"
                  role="Co-Founder &nbsp; Principal Engineer, GEOGO Techsolutions Pvt. Ltd"
                  description="Avishek is an Engineer, a full-stack developer and an
                      open-source contributor. Currently, he is working at GEOGO
                      Techsolutions as Principal Engineer. He started his
                      professional career in 2013 and worked on technologies
                      like: Ruby on Rails, NodeJS, ReactJS, TypeScript etc.
                      Apart from work, he loves to mentor and train fresh
                      graduates to enhance their skills as per industry demands.
                      Teaching is his way to contribute back to the society."
                  imgSrc="people/avishek.jpeg"
                />
                <People
                  name="Hari Gopal"
                  role="Chief Technology Officer, Pupilfirst"
                  description="Hari is a full-stack software engineer with 12 years of
                      experience and leads the development of Pupilfirst LMS,
                      one of the largest open-source projects that uses the
                      ReScript programming language."
                  imgSrc="people/hari-gopal.png"
                />
              </div>
            </DescriptionList>
            <DescriptionList
              heading="Beginner to advanced courses"
              content={
                <span>
                  This programme is designed with 4 courses such that selected
                  institutions can offer a 18-20 credit{" "}
                  <strong>Minor Degree in Advanced Web Development</strong>{" "}
                  through their trained faculty members to students.
                </span>
              }
            >
              <div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-primary-50 border border-indigo-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-indigo-400 text-xl md:text-2xl font-bold">
                      WD 101
                    </p>
                    <p className="text-black text-base leading-snug mt-1">
                      <span className="font-semibold">Beginner</span> - Getting
                      Started with Javascript
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
                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-primary-50 border border-green-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-green-400 text-xl md:text-2xl font-bold">
                      WD 201
                    </p>
                    <p className="text-black text-base leading-snug mt-1">
                      <span className="font-semibold">Intermediate</span> -
                      Server-side programming with Node.js
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
                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-primary-50 border border-red-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-red-400 text-xl md:text-2xl font-bold">
                      WD 301
                    </p>
                    <p className="text-black text-base leading-snug mt-1">
                      <span className="font-semibold">Advanced</span> -
                      Front-end development with React &amp; Typescript
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full h-4 md:w-4 md:h-auto md:transform md:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-green-700"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>

                  <div className="w-full md:flex-1 bg-gradient-to-br from-white to-primary-50 border border-cyan-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-cyan-400 text-xl md:text-2xl font-bold">
                      WD 401
                    </p>
                    <p className="text-black text-base leading-snug mt-1">
                      <span className="font-semibold">Industry</span> - Getting
                      ready for production deployment.
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  More advanced courses would be added to give a broader choice
                  of specialisations.
                </p>
              </div>
            </DescriptionList>
            <DescriptionList
              heading="Easy to Get Started"
              content={
                <span>
                  WD 101 is a beginner-level and easy one-credit course of 15
                  hours, which can be learned at your own pace.{" "}
                  <strong>
                    {" "}
                    On average, faculty members have completed WD 101 in 14
                    days.
                  </strong>
                </span>
              }
            >
              <p className="pt-4">
                Coaches and teaching assistants shall support you in clearing
                any doubts you may have during the learning process.You can
                continue your training and classroom implementation for learners
                at your institution and complete the training in 18 months.
              </p>
            </DescriptionList>
            <DescriptionList
              heading="Improve your skills and confidence"
              content="Faculty members who have completed the course(s) as part of FDP  have reported significant improvement in their skills and confidence."
            >
              <div>
                <img
                  className="p-8 bg-white rounded-lg mt-6"
                  src="/stats/skills-and-confidence-graph.png"
                  alt="Graph showing improved confidence in skills"
                />
              </div>
            </DescriptionList>
            <DescriptionList
              heading="Clear any classroom doubts through Teaching Assistants"
              content="Student TAs, along with industry coaches, can answer any doubts, no matter how silly or complex. Faculty members can confidently ask learners to ask any questions through the digital learning platform."
            >
              <div className="pt-6">
                <StudentTeachingAssistants />
              </div>
            </DescriptionList>
            <DescriptionList
              heading="Access Industry Hiring Network"
              content="Faculty Members and Institutions shall have access to a growing industry hiring network for your students to gain internships and job opportunities as they complete the curriculum."
            >
              <div className="pt-6">
                <HiringNetwork />
              </div>
            </DescriptionList>
            <DescriptionList
              heading="Transform your classroom from NEP 1986 to NEP 2020 through LITE"
              content=""
            >
              <div className="flex gap-4 p-2 p-6 bg-white rounded-lg mt-2 md:mt-6">
                <div className="flex p-3 md:p-6 items-center bg-white border border-primary-200 rounded-lg">
                  <p
                    className="font-bold uppercase text-primary-500"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    NEP 2020 GOALS
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-secondary-500">1</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-primary-50 border border-primary-200 rounded-lg">
                      Enabling a learner centered model of teaching-learning.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-secondary-500">2</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-primary-50 border border-primary-200 rounded-lg">
                      Delivering competency based curriculum for highly paid
                      global tech skills.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-secondary-500">3</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-primary-50 border border-primary-200 rounded-lg">
                      Transformation of assessments from summative to formative
                      (continuous)
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-secondary-500">4</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-primary-50 border border-primary-200 rounded-lg">
                      Identifying gifted school students to gain direct
                      admission to universities
                    </p>
                  </div>
                </div>
              </div>
            </DescriptionList>
          </div>
        </SectionWithHeading>

        <SectionWithHeading heading="Schedule">
          <div className="bg-white divide-y rounded-lg border border-gray-200">
            <ScheduleDate
              date="December 01, 2022"
              content="LITE B01Y23 FDP Applications Open and Training Starts."
            />
            <ScheduleDate
              date="December 12, 2022"
              content="Last Date for B01Y23 FDP Applications (tentative)."
            />
            <ScheduleDate
              date="December 13, 2022 onwards"
              content="Interested faculty members to apply for FDP and coordinate integration approvals on a continuous basis."
            />

            <ScheduleDate
              date="December 20, 2022"
              content="Last Date for institute to share the signed MoU with Pupilfirst and faculty members to complete WD101 (tentative)."
            />
            <ScheduleDate
              date="December 21, 2022"
              content="AICTE to Announce Selected Institutions and Faculty Members."
            />
            <ScheduleDate
              date="January 24, 2023"
              content="Last Date for Institutions to complete integration approvals for B01Y23."
            />
            <ScheduleDate
              date="February 10, 2023"
              content="Start Course Admissions for students at institutions."
            />
            <ScheduleDate
              date="Ongoing"
              content="Faculty training continues along with course deployment."
            />
          </div>
          <div className="pt-10 lg:pt-16">
            <h3 className="text-secondary-500 text-xl lg:text-3xl font-bold">
              Questions?
            </h3>
            <p className="text-lg md:text-xl font-semibold mt-4">
              For queries regarding ATAL FDP
            </p>
            <p className="pt-1">
              Email <span className="font-semibold">Dr Sunil Luthra, </span>
              Director, ATAL Academy at{" "}
              <a
                href="mailto:director1atal@aicte-india.org?cc=wd@pupilfirst.org"
                className="text-secondary-500 underline font-semibold hover:text-secondary-700"
              >
                director1atal@aicte-india.org
              </a>{" "}
              with cc to{" "}
              <span className="text-gray-600 font-semibold">
                wd@pupilfirst.org
              </span>
            </p>
            <p className="text-lg md:text-xl font-semibold mt-8">
              For queries regarding LITE Advanced Web Development programme and
              Integration
            </p>
            <p className="pt-1">
              Email Pupilfirst support team for any help that you would require
              at{" "}
              <a
                className="text-secondary-500 underline font-semibold hover:text-secondary-700"
                href="mailto:wd@pupilfirst.org"
              >
                wd@pupilfirst.org
              </a>{" "}
            </p>
            <p className="pt-2">
              <strong>OR</strong> send a WhatsApp message to our{" "}
              <a
                className="inline-flex px-3 py-1.5 mt-1 md:ml-1 space-x-2 rounded-md items-center font-semibold text-white shadow-md bg-gradient-to-br from-green-500 to-green-600 hover:shadow-lg hover:bg-gradient-to-r transition"
                href="https://wa.me/message/XKNMF7XL5SL5J1"
                target="_blank"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </span>
                <span>LITE WhatsApp Helpline Number</span>
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-4 lg:p-12 mt-14">
            <h4 className="md:w-2/3 text-xl lg:text-4xl text-white font-extrabold text-center">
              Apply Now for AICTE LITE Faculty Development Program
            </h4>
            <div className="mt-6 flex justify-center">
              <a
                href="https://apply.pupilfirst.org/wdfdp"
                target="_blank"
                className="inline-block w-full sm:w-64 p-3 lg:px-3 lg:py-3.5 text-primary-800 bg-gradient-to-br from-yellow-50 to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold hover:from-yellow-100 hover:to-gray-50 hover:shadow-xl transition "
              >
                Apply Now for LITE FDP
              </a>
            </div>
          </div>
        </SectionWithHeading>
      </main>
    </div>
  );
}
