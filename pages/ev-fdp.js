import Head from "next/head";
import Link from "next/link";
import DateAndContent from "../components/DateAndContent";
import DescriptionList from "../components/DescriptionList";
import People from "../components/People";
import ScheduleDate from "../components/ScheduleDate";
import SectionWithHeading from "../components/SectionWithHeading";
import Testimony from "../components/Testimony";
import AnimatedBackground from "../components/AnimatedBackground";

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
      <main className="bg-gray-900 mx-auto z-10">
        <section className="hero__bg-pattern relative pb-8">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <AnimatedBackground />
          </div>
          <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex max-w-2xl mx-auto md:hidden justify-between items-center gap-4">
              <div className="inline-flex items-center bg-white px-1 pt-0.5 pb-1 rounded-full">
                <img
                  className="w-16 md:w-24"
                  src="logos/atal.png"
                  alt="Logo of All India Council for Technical Education (AICTE)"
                />
              </div>
              <div className="inline-flex">
                <img
                  className="w-24 md:w-36"
                  src="logos/pupilfirst-logo-white.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-between items-center gap-4">
              <div className="hidden md:flex items-center bg-white px-2 pt-1.5 pb-2 rounded-full">
                <img
                  className="w-16 md:w-24"
                  src="logos/atal.png"
                  alt="Logo of All India Council for Technical Education (AICTE)"
                />
              </div>
              <div className="hidden md:flex md:order-last">
                <img
                  className="w-24 md:w-36"
                  src="logos/pupilfirst-logo-white.svg"
                  alt=""
                />
              </div>
              {/* <div className="flex gap-4 mt-3 md:mt-0 items-center text-sm overflow-x-scroll md:overflow-auto">
                <a
                  href="/wd-fdp"
                  className="block text-secondary-500 p-1.5 border-b-2 border-secondary-400 font-semibold flex-shrink-0"
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
                  className="block font-medium text-gray-700 rounded-md p-1.5 hover:text-secondary-500 hover:bg-secondary-100 hover:bg-opacity-50"
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
              </div> */}
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto px-4 xl:px-0">
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-gray-700 bg-opacity-50 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-blue-500">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="ev-hero__title-gradient text-center text-3xl md:text-5xl lg:text-7xl lg:py-4 font-extrabold">
                Leadership in <br />
                Teaching Excellence
                <span className="hidden md:inline-block text-xl pl-1">
                  (LITE)
                </span>
              </h1>
              <p className="max-w-6xl mx-auto text-center text-white text-sm md:text-base lg:text-lg pt-2">
                AICTE's Leadership In Teaching Excellence (LITE) is a
                transformational program to pioneer and implement the goals of
                National Educational Policy 2020 such as learner-centered
                pedagogy, competency-based curriculums, continuous and
                personalized assessments, creating teaching assistants thus{" "}
                <span className="font-bold">
                  enabling 100,000 faculty to skill 2.4 Crore students{" "}
                </span>
                in emerging industry technologies.
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
          <div className="relative z-20 max-w-7xl mx-auto px-2 xl:px-0 text-center">
            <div className="pt-4 md:pt-6">
              <a
                href="https://pupilfirst.typeform.com/to/JWPISbKH"
                target="_blank"
                className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-r from-green-500 to-blue-400 text-gray-900 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:to-green-500 focus:ring-2 focus:ring-indigo-400 transition "
              >
                Apply Now for EV LITE FDP
              </a>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mt-6 md:mt-12 mx-4 md:mx-auto pt-4 relative z-10 bg-gray-900 border border-gray-800 rounded-md md:rounded-xl shadow-lg ">
            <div className="relative max-w-3xl mx-auto">
              <p className="px-6 pb-4 text-xs md:text-lg font-medium py-2 text-gray-400 text-center">
                <span className="font-bold text-gray-300">Watch the Video</span>{" "}
                of how LITE faculty members are transforming their classrooms
                from NEP 1986 to NEP 2020 Learner-Centered Classrooms for the
                LITE Web Development courses.
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
                src="https://player.vimeo.com/video/793992206?h=72be05d25d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Pupilfirst Teaching Learning Cycle"
              ></iframe>
            </div>
          </div>
          {/* <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/hero-bg.png"
              alt="LITE - hero background image"
            />
            <div className="absolute inset-0"></div>
          </div> */}
        </section>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto md:pt-8 py-4 px-4 xl:px-0 relative z-10">
          <div className="md:mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 grid grid-cols-none md:grid-cols-12 gap-4 md:gap-8 flex-col md:flex-row justify-between p-6 bg-orange-50 rounded-lg">
            <div className="md:col-span-4 flex items-start justify-center flex-shrink-0">
              <div className="p-4 md:p-3 rounded-3xl border-2 border-blue-800 shadow-sm">
                <img
                  className="w-full h-full object-contain rounded-2xl"
                  src="people/MP-Poonia.png"
                  alt="Prof MP Poonia, Vice Chairman, All India Council for Technical Education."
                />
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-between">
              <div className="mt-4">
                <h2 className="text-base text-blue-300 md:text-xl lg:text-2xl lg:pt-2">
                  Letter to Vice Chancellors and Head of Institutions from{" "}
                  <br />
                  Hon: Vice Chairman, AICTE
                </h2>
                <p className="mt-4 text-white text-base md:text-xl max-w-3xl">
                  “We intend to upgrade selected institutions as AICTE Brand
                  Ambassadors of Change and highlight selected institutions, its
                  leadership, faculty members and students as change agents who
                  are implementing proven online teaching-learning methods that
                  are aligned with NEP 2020”
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mt-6 text-lg">
                  Prof MP Poonia,{" "}
                </p>
                <p className="italic text-gray-400">Vice Chairman, </p>
                <p className="italic text-gray-400">
                  All India Council for Technical Education.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto md:pt-8 py-4 px-4 xl:px-0 relative z-10">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 grid grid-cols-none md:grid-cols-12 gap-4 md:gap-8 flex-col md:flex-row justify-between p-6 bg-orange-50 rounded-lg">
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
              <p className="mt-2 md:mt-8 text-white text-base md:text-xl max-w-2xl">
                “AICTE LITE creates an exciting opportunity for institutions and
                faculty members to bring an integrated research environment into
                their classrooms and provide inputs to the National Educational
                Technology Forum (NETF) that has been established under NEP 2020
                to showcase the best practices in digital teaching-learning
                pedagogies.”
              </p>
              <div>
                <p className="font-semibold text-white mt-6 text-lg">
                  Dr. Mamta Rani Agarwal,{" "}
                </p>
                <p className="italic text-gray-400">Advisor - I, </p>
                <p className="italic text-gray-400">
                  All India Council for Technical Education.
                </p>
                <a
                  className="inline-flex items-center px-4 py-3 rounded-lg space-x-2 font-medium bg-gray-900 text-gray-400 mt-4 md:mt-6 border border-gray-700 hover:bg-gray-800 hover:shadow-lg outline-none focus:ring focus:ring-primary-200 focus:ring-offset-1 transition"
                  href="letter-from-advisor/AICTE_TRAINING_AND_LEARNING_ACADEMY_-_LEADERSHIP_IN_TEACHING_EXCELLENCE_LITE_FDP_ANNOUNCEMENT_30_NOV_2022.pdf"
                  target="_blank"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 text-green-600"
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
          <div className="md:grid grid-cols-12 bg-gray-800 text-white shadow-lg border border-gray-700 rounded-lg flex flex-col md:flex-row gap-5 items-center justify-between p-6 md:p-8">
            <p className="md:col-span-8 text-lg md:text-xl font-medium max-w-4xl">
              <span className="font-bold">
                Begin your journey to implement NEP 2020
              </span>{" "}
              with AICTE's Leadership in Teaching Excellence Faculty Development
              Programme
            </p>
            <a
              href="https://pupilfirst.typeform.com/to/JWPISbKH"
              target="_blank"
              className="inline-block md:col-span-4 items-center w-full text-center sm:max-w-md p-3 lg:px-8 lg:py-3.5 text-white bg-gradient-to-r from-green-500 to-blue-400 text-gray-900 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:to-green-500 focus:ring-2 focus:ring-indigo-400 transition "
            >
              Apply Now for LITE EV FDP
            </a>
          </div>
        </div>
        <SectionWithHeading
          darkBackground="true"
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
                darkBackground="true"
                heading="NEP 2020 Model Curriculum"
                content={
                  <p>
                    AICTE has published{" "}
                    <a
                      className="text-indigo-600 fonr-semibold hover:underline hover:bg-indigo-50 transition"
                      target="_blank"
                      href="https://www.aicte-india.org/sites/default/files/Model_Curriculum/fINAL%20-%20NEP%202020%20Model%20Syllabus%20for%20Open%20Electives%20in%20Electric%20Vehicles.pdf"
                    >
                      NEP 2020 Model Curriculum in Electric Vehicles
                    </a>{" "}
                    for institutions and faculty members featuring
                    learner-centered pedagogy, competency-based curriculums and
                    continuous assessments. The curriculum is designed by
                    industry experts which also allows to learn through industry
                    best practices.
                  </p>
                }
              />

              <DescriptionList
                darkBackground="true"
                heading="Dynamic Updates by Industry"
                content="NEP 2020 Model Curriculums are maintained by practicing industry experts, enabling faculty members and students to learn and experiment with the most up-to-date technology."
              />
              <DescriptionList
                darkBackground="true"
                heading="Teaching Assistants"
                content="Get support from student teaching assistants (TAs) who have established a good understanding of the curriculum to enable you to answer all queries/doubts of your learners via the Pupilfirst Discord server."
              />
              <DescriptionList
                darkBackground="true"
                heading="Career Progression"
                content="The LITE FDPs are conducted with AICTE Training and Learning (ATAL) Academy, ensuring that this training counts towards your career progression."
              />
              <DescriptionList
                darkBackground="true"
                heading="NEP 2020 Certificate"
                content={
                  <p>
                    Faculty members who complete training and whose Institute
                    has completed the signing of the MoU and addendum specific
                    to EV courses roll out, thereby initiating the integration
                    process, shall be certified as AICTE LITE Brand Ambassador
                    of Change
                  </p>
                }
              ></DescriptionList>
            </div>
            <div className="col-span-3 self-start hidden md:block bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 sticky top-4">
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
                  date="April 27, 2023"
                  content="Last date for EV FDP cohort#2 applications."
                />
                <DateAndContent
                  darkBackground="true"
                  date="On a rolling basis"
                  content="Institutions to sign the addendum to the LITE MoU with Pupilfirst."
                />
                <DateAndContent
                  darkBackground="true"
                  date="May 05, 2023"
                  content="FDP start for selected faculty members."
                />
                <DateAndContent
                  darkBackground="true"
                  date="On a rolling basis"
                  content="Institutions to complete integration approvals for EV Courses."
                />
                <DateAndContent
                  darkBackground="true"
                  date="To be Announced"
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
            </div>
          </div>
        </SectionWithHeading>
        <div className="bg-gray-900 border-t border-gray-700">
          <SectionWithHeading
            darkBackground="true"
            heading={<p>A joint effort with Micelio</p>}
          >
            <div className="flex flex-col md:flex-row-reverse space-y-4 md:space-y-0 md:text-lg justify-between items-start">
              <div className="inline-flex items-center p-2 px-4 rounded bg-white md:ml-4">
                <img
                  className="md:w-48"
                  src="logos/micelio-logo.png"
                  alt="Logo of All India Council for Technical Education (AICTE)"
                />
              </div>
              <div className="md:w-4/5">
                <p className="">
                  Micelio and Pupilfirst have a shared vision of creating an
                  ecosystem for Electric mobility to facilitate innovations, as
                  well as addressing the talent crunch observed in the EV
                  sector.
                </p>
                <p className="mt-4">
                  With the support from Micelio, Pupifirst has developed the EV
                  courses, which are aimed to pave a pathway for students from
                  higher education institutes to the domain of electric
                  mobility. These courses are designed by experts who are
                  currently practicing in the industry, such that it will take
                  the learners through industry best practices through a learner
                  centered approach which involves hands-on learning.
                </p>
                <p className="mt-4">
                  The evolution of technology at this time and age is very rapid
                  and hence, industry and academia working in tandem is the need
                  of the hour, where there is constant exchange of information
                  and talent between both the entities.
                </p>
              </div>
            </div>
          </SectionWithHeading>
          <SectionWithHeading
            darkBackground="true"
            heading={<p>Learner Centered Classroom Framework</p>}
          >
            <p className="md:text-lg">
              AICTE LITE enables all stakeholders including universities,
              institutions, faculty, industry and researchers to work
              collaboratively to build NEP 2020 learner-centered classrooms.
            </p>
            <div className="relative">
              <p className="pt-4 md:text-lg">
                <span className="font-semibold md:text-indigo-400">
                  Watch the video
                </span>{" "}
                to see the processes that are executed by each stakeholder to
                transform classrooms from NEP 1986 to NEP 2020.
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
                className="rounded-xl"
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
          </SectionWithHeading>
        </div>

        <SectionWithHeading
          darkBackground="true"
          heading={"Deep Research Integration"}
        >
          <p className="md:text-lg">
            Faculty and Institutions who qualify shall become part of the
            Learning Engineering, Analytics & Research Network (LEARN); a key
            component of the LITE programme. The research team's goal is to
            constantly listen to institutions and faculty to suggest
            improvements to policymakers so that the learner-centred classroom
            framework is dynamically improving every day.
          </p>
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
            {researchers.map((researcher) => (
              <People
                darkBackground="true"
                imgSrc={researcher.imgSrc}
                name={researcher.name}
                role={researcher.role}
                description={researcher.description}
              />
            ))}
          </div>
        </SectionWithHeading>
        <SectionWithHeading
          darkBackground="true"
          heading="Leadership Testimonial"
        >
          <Testimony
            darkBackground="true"
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
          darkBackground="true"
          heading={
            <span>
              Highlights of ATAL FDP <br /> in Electric Vehicles
            </span>
          }
        >
          <div className="flex flex-col gap-20">
            <DescriptionList
              darkBackground="true"
              heading="Bridge your skill gap with Industry"
              content="Upgrade your knowledge for preparing students for the paradigm
                shift to sustainable energy, enabling them to be part of the
                e-mobility industry."
            >
              <p>
                The EV sector in India is also facing a talent crunch, which
                will have to be solved by the higher education system in India.
                The current talent is only trained in specific domain of
                engineering, while electric vehicles requires an
                interdisciplinary approach for learning and developing the
                technology behind them.
              </p>
              <p className="mt-4">
                The regulators are also pushing towards shifting to electric
                mobility. Because of this push from the regulators towards EVs
                and the lack of immediate availability of talent, this course
                plays a major role in solving this issue.
              </p>
              <p className="mt-4">
                The EV curriculum has been designed by practicing industry
                professionals to help the students get acquainted with industry
                best practices. Compared to other courses, students learn
                hands-on by building a working prototype which mimics an actual
                EV powertrain using electronic components which will help them
                understand its working and become industry ready.
              </p>
            </DescriptionList>
            <DescriptionList
              darkBackground="true"
              heading="Dynamic Curriculum by Industry Experts"
              content="The courses are created with support from Micelio Mobility who aims to create an EV ecosystem in India."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-5 mt-6">
                <div className="col-span-1 gap-4">
                  <div className="rounded-lg">
                    <img
                      src="people/ev/industry-experts//Swapnil-Mankame.png"
                      alt=""
                      className="block w-full h-full md:w-72 md:h-72 bg-gradient-to-br from-blue-500 to-green-600 w-full object-cover object-top p-0.5 rounded-lg"
                    />
                  </div>
                  <div className="col-span-8">
                    <p className="text-lg font-semibold pt-2">
                      Mr. Swapnil Mankame
                    </p>
                    <p className="text-gray-400 text-sm leading-tight pt-1">
                      CEO, Founder at Mankame Automotive
                    </p>
                    <p className="text-gray-200 text-sm md:text-base pt-3">
                      Course Author & Full time coach Entrepreneur in the EV
                      space and ecosystem leader.
                    </p>
                  </div>
                </div>
                <div className="col-span-1 gap-4">
                  <div className="rounded-lg">
                    <img
                      src="people/ev/industry-experts//Kishor_Kumar_K.png"
                      alt=""
                      className="block w-full h-full md:w-72 md:h-72 bg-gradient-to-br from-blue-500 to-green-600 w-full object-cover object-top p-0.5 rounded-lg"
                    />
                  </div>
                  <div className="col-span-8">
                    <p className="text-lg font-semibold pt-2">Kishor Kumar K</p>
                    <p className="text-gray-400 text-sm leading-tight pt-1">
                      Design & Development Engineer (Motor and Inverter),
                      Garrett Advancing Motion (formerly Honeywell Turbo
                      technologies), Bangalore
                    </p>
                    <p className="text-gray-200 text-sm md:text-base pt-3">
                      Kishor is a design and development engineer, who is
                      currently working with Garrett Advancing Motion on cutting
                      edge technologies such as High Speed High Voltage Motor
                      and inverters for electrification of 4 Wheeler Passenger
                      and Commercial vehicles. He has 10 years of experience in
                      the field of EV and electrification. In his previous
                      assignment with SEG Automotive he developed traction
                      motors for leading Indian 2Wheeler OEMs which involved
                      development of motor from scratch to Series of production
                      with a volume of 20,000 motors per month by following all
                      the stages of product development. Apart from his work, he
                      is also Co-founder of NPO called Athira Edutech Foundation
                      through which he teaches STEM based education to Govt
                      school higher primary students.
                    </p>
                  </div>
                </div>
              </div>
            </DescriptionList>
            <DescriptionList
              darkBackground="true"
              heading="Beginner to advanced courses"
              content={
                <span>
                  This program is designed with 3 courses such that selected
                  institutions can offer a 9 credit
                  <strong>“Open Elective in Electric Vehicles”</strong> through
                  their trained faculty to students.
                </span>
              }
            >
              <div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-blue-400 text-xl md:text-2xl font-bold">
                      EV 101
                    </p>
                    <p className="text-white text-base leading-snug mt-1">
                      <span className="font-semibold">Beginner</span> -
                      Mathematical Modeling of an Electric Vehicle
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
                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-800 to-gray-900 border border-green-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-green-400 text-xl md:text-2xl font-bold">
                      EV 201
                    </p>
                    <p className="text-white text-base leading-snug mt-1">
                      Design and Build Your Own EV Powertrain
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
                  <div className="w-full md:flex-1 bg-gradient-to-br from-gray-800 to-gray-900 border border-teal-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-teal-400 text-xl md:text-2xl font-bold">
                      EV TA 101
                    </p>
                    <p className="text-white text-base leading-snug mt-1">
                      Teaching Assistant Training for EV 101 and EV 201
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
              darkBackground="true"
              heading="Easy to Get Started"
              content={
                <span>
                  EV 101 is a beginner-level and easy two-credit course of 20
                  hours, which can be learned at your own pace.
                </span>
              }
            >
              <p className="pt-4">
                Coaches and teaching assistants shall support you in clearing
                any doubts you may have during the learning process. You can
                continue your training and classroom implementation for learners
                at your institution and complete the training in 18 months.
              </p>
            </DescriptionList>
            <DescriptionList
              darkBackground="true"
              heading="Expected outcomes for FDP"
              content="Faculty taking the course will be able to understand the basics of Electric Vehicles, basic motor power and torque calculations, and to mathematically model an electric vehicle using Scilab. They understand drive cycles and how the energy consumption is calculated for modern-day EVs. Below are the expected course outcomes"
            >
              <ul className="list-disc ml-8 text-gray-400 mt-4 space-y-2">
                <li>
                  Get introduced to electric vehicles, understand how EVs are
                  different from ICE vehicles and identify various parts of an
                  electric vehicle.
                </li>
                <li>Learn the fundamentals of Lithium-ion cells.</li>
                <li>
                  Analyze EVs based on power sources and calculate range of an
                  EV.
                </li>
                <li>
                  Perform motor power and torque calculations to select a motor
                  to build their own EV.
                </li>
                <li>
                  Learn the basics of converting any petrol 2-wheeler into an
                  electric vehicle.
                </li>
              </ul>
            </DescriptionList>
            <DescriptionList
              darkBackground="true"
              heading="Clear any classroom doubts through Teaching Assistants"
              content="Student TAs, along with industry coaches, can answer any doubts, no matter how silly or complex. Faculty members can confidently ask learners to ask any questions through the digital learning platform."
            >
              <div className="pt-6">
                <div className="max-w-6xl 2xl:max-w-7xl mx-auto rounded-lg">
                  <div className="mt-2 lg:mt-4 grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col md:flex-row bg-gray-800 border border-gray-700 rounded-lg">
                      <div className="w-full md:w-32 h-48 md:h-full">
                        <img
                          className="object-cover w-full h-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-shrink-0"
                          src="people/ev/teaching-assistants/Chetan_Shivprakash_Agroya.png"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-between text-sm">
                        <div className="p-4">
                          <p className="text-base md:text-lg font-bold">
                            Chetan Shivprakash Agroya
                          </p>
                          <p className="text-gray-400 pt-1">
                            B.E - Sem VIII, Mechanical Engineering
                          </p>
                        </div>
                        <div>
                          <p className="bg-gray-900 p-4 w-full font-medium text-gray-300 rounded-b-lg md:rounded-bl-none md:rounded-br-lg">
                            PCET's Nutan Maharashtra Institute of Engineering
                            and Technology, Talegaon, Maharashtra
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row bg-gray-800 border border-gray-700 rounded-lg">
                      <div className="w-full md:w-32 h-48 md:h-full">
                        <img
                          className="object-cover w-full h-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-shrink-0"
                          src="people/ev/teaching-assistants/Gurudayal_Singh_Dalawat.png"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-between text-sm">
                        <div className="p-4">
                          <p className="text-base md:text-lg font-bold">
                            Gurudayal Singh Dalawat
                          </p>
                          <p className="text-gray-400 pt-1">
                            B.E - Sem VIII, Mechanical Engineering
                          </p>
                        </div>
                        <div>
                          <p className="bg-gray-900 p-4 w-full font-medium text-gray-300 rounded-b-lg md:rounded-bl-none md:rounded-br-lg">
                            St. Francis Institute of Technology, Mumbai,
                            Maharashtra
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DescriptionList>
            <DescriptionList
              darkBackground="true"
              heading="Hands on Learning"
              content="Students learn the EV technology by building their own prototype model, thanks to the help of DIY kits supplied with the intermediate level  EV 201 - Design and Build Your Own Powertrain course. This helps students understand the basics of industry grade technologies."
            ></DescriptionList>
            {/* <DescriptionList
              darkBackground="true"
              heading="Access Industry Hiring Network"
              content="Faculty Members and Institutions shall have access to a growing industry hiring network for your students to gain internships and job opportunities as they complete the curriculum."
            >
              <div className="pt-6">
                <HiringNetwork />
              </div>
            </DescriptionList> */}
            <DescriptionList
              darkBackground="true"
              heading="Transform your classroom from NEP 1986 to NEP 2020 through LITE"
              content=""
            >
              <div className="flex gap-4 p-2 p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 shadow-lg rounded-lg mt-2 md:mt-6">
                <div className="flex p-3 md:p-6 items-center bg-gray-900 border border-gray-800 rounded-lg">
                  <p
                    className="font-bold uppercase text-green-500"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    NEP 2020 GOALS
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-blue-500">1</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-gray-900 border border-gray-800 rounded-lg">
                      Enabling a learner centered model of teaching-learning.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-blue-500">2</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-gray-900 border border-gray-800 rounded-lg">
                      Delivering competency based curriculum for highly paid
                      global tech skills.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-blue-500">3</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-gray-900 border border-gray-800 rounded-lg">
                      Transformation of assessments from summative to formative
                      (continuous)
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-blue-500">4</p>
                    <p className="flex-1 p-2 md:p-6 text-base bg-gray-900 border border-gray-800 rounded-lg">
                      Identifying gifted school students to gain direct
                      admission to universities
                    </p>
                  </div>
                </div>
              </div>
            </DescriptionList>
          </div>
        </SectionWithHeading>

        <SectionWithHeading
          darkBackground="true"
          heading={
            <p>Let's hear about the courses from one of our students :</p>
          }
        >
          <div className="relative">
            <p className="md:text-lg">
              <span className="text-blue-500">Watch the video</span> to get a
              glimpse of what the students learn throughout the courses.
            </p>
            <div className="hidden md:block h-5 w-5 absolute top-4 -left-4 transform rotate-12 z-10">
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
              src="https://player.vimeo.com/video/773742620?h=0e342e0ea2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
              className="rounded-md md:rounded-xl shadow-2xl mt-8"
              title="EV Courses - Student Testimonial"
            ></iframe>
          </div>
        </SectionWithHeading>

        <SectionWithHeading darkBackground="true" heading="Schedule">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 divide-y divide-gray-700 rounded-lg border border-gray-700">
            <ScheduleDate
              darkBackground="true"
              date="April 13, 2023"
              content="LITE EV FDP cohort#2 applications open."
            />
            <ScheduleDate
              darkBackground="true"
              date="April 13, 2023 onwards"
              content="Interested faculty members to apply for FDP."
            />
            <ScheduleDate
              darkBackground="true"
              date="April 27, 2023"
              content="Last date for EV FDP cohort#2 applications."
            />
            <ScheduleDate
              darkBackground="true"
              date="On a rolling basis"
              content="Institutions to sign the addendum to the LITE MoU with Pupilfirst."
            />
            <ScheduleDate
              darkBackground="true"
              date="May 05, 2023"
              content="FDP start for selected faculty members."
            />
            <ScheduleDate
              darkBackground="true"
              date="On a rolling basis"
              content="Institutions to complete integration approvals for EV Courses."
            />
            <ScheduleDate
              darkBackground="true"
              date="To be Announced"
              content="Start course admissions for students at institutions."
            />
          </div>
          <div className="pt-10 lg:pt-16">
            <h3 className="text-blue-500 text-xl lg:text-3xl font-bold">
              Questions?
            </h3>
            <p className="text-lg md:text-xl font-semibold mt-8">
              For queries regarding LITE Electric Vehicles programme and
              Integration
            </p>
            <p className="pt-1">
              Email Pupilfirst support team for any help that you would require
              at{" "}
              <a
                className="text-indigo-500 underline font-semibold hover:text-indigo-700 transition"
                href="mailto:ev@pupilfirst.org"
              >
                ev@pupilfirst.org
              </a>{" "}
            </p>
            <p className="pt-2">
              <strong>OR</strong> send a WhatsApp message to our{" "}
              <a
                className="inline-flex px-3 py-1.5 mt-1 md:ml-1 space-x-2 rounded-md items-center font-semibold text-white shadow-md bg-gradient-to-br from-green-600 to-green-800 hover:shadow-lg hover:bg-gradient-to-r transition"
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
          <div className="flex flex-col items-center rounded-lg bg-gradient-to-r from-green-500 to-blue-700 border border-primary-400 shadow-xl p-4 lg:p-12 mt-14">
            <h4 className="md:w-2/3 text-xl lg:text-4xl text-white font-extrabold text-center">
              Apply Now for AICTE LITE Faculty Development Program
            </h4>
            <div className="mt-6 flex justify-center">
              <a
                href="https://pupilfirst.typeform.com/to/JWPISbKH"
                target="_blank"
                className="inline-block w-full p-3 lg:px-4 lg:py-3.5 text-blue-300 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md text-center text-base lg:text-lg font-semibold hover:from-gray-700 hover:to-gray-800 hover:shadow-xl transition "
              >
                Apply Now for LITE EV FDP
              </a>
            </div>
          </div>
        </SectionWithHeading>
      </main>

      <footer className="bg-gray-900 z-50 border-t border-gray-700">
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
      </footer>
    </div>
  );
}
