import Head from "next/head";
import Heading from "../../components/Heading";
import People from "../../components/People";

export default function industry() {
  return (
    <div>
      <Head>
        <title>
          LITE - Industry Network &amp; National Teaching Fellowships
        </title>
        <meta
          name="description"
          content="LITE industry Network and Fellowships is a call by ACT Grants to the technology industry for partnering with the All India Council for Technical Education (AICTE) for hiring software engineers who meet global industry standards."
        ></meta>
        <meta
          name="keywords"
          content="LITE Industry Hiring Network, LITE Teaching fellowship, AICTE's Teaching fellowship, Catalysed by ACT Grants, Hiring software engineers."
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
        <meta
          property="og:title"
          content="LITE - Industry Network &amp; National Teaching Fellowships"
        />
        <meta
          property="og:description"
          content="LITE industry Network and Fellowships is a call by ACT Grants to the technology industry for partnering with the All India Council for Technical Education (AICTE) for hiring software engineers who meet global industry standards."
        />
        <meta
          property="og:image"
          content="/lite-industry-network-and-teaching-fellowships.jpg"
        />
        <meta
          property="og:url"
          content="https://lite.pupilfirst.org/industry"
        />
        <meta
          name="twitter:card"
          content="/lite-industry-network-and-teaching-fellowships.jpg"
        />
        <meta
          property="og:site_name"
          content="LITE - Industry Network &amp; National Teaching Fellowships"
        />
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
              <a className="block" href="/">
                <img
                  className="block w-20 md:w-28"
                  src="/logos/LITE-logo.svg"
                  alt="Logo of Leadership in Teaching Excellence (LITE)national programme."
                />
              </a>
              <img
                className="w-16 md:w-24"
                src="/logos/aicte-logo.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
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
              <h1 className="hero__title-gradient text-center text-xl md:text-2xl lg:text-3xl lg:py-4 font-medium">
                Leadership in Teaching Excellence (LITE)
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  Industry Network &amp; National Teaching Fellowships
                </span>
              </h1>
              <p className="text-2xl">Catalysed by Act Grants</p>
              <p className="max-w-4xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">
                LITE industry Network and Fellowships is a call by{" "}
                <a
                  className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                  target="_blank"
                  href="https://actgrants.in/"
                >
                  ACT Grants
                </a>{" "}
                to the technology industry for partnering with the All India
                Council for Technical Education (AICTE) for hiring software
                engineers who meet global industry standards.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 md:inset-x-0  2xl:inset-0 z-0">
            <img
              aria-hidden="true"
              className="h-full w-full object-cover relative"
              src="/hero/hero-bg.png"
              alt="LITE - hero background image"
            />
          </div>
        </section>
        <section className="relative max-w-6xl 2xl:max-w-7xl mx-auto md:rounded-xl shadow-md bg-gradient-to-br from-yellow-500 to-primary-500 px-4 md:px-8 pt-8 pb-4 md:pb-0">
          <h2 className="text-white text-3xl md:text-4xl pb-4">
            LITE Industry Hiring Network
          </h2>
          <div className="md:grid grid-cols-12 border-t border-primary-200">
            <div className="col-span-6 md:pr-6">
              <p className="pt-6 text-white">
                The Indian Higher Education Regulator, AICTE has approved
                integrating the full stack developer course co-created by
                Freshworks to 28 institutions across 16 Universities in 11
                states.
              </p>
              <a
                className="inline-flex space-x-3 items-center py-2 pr-2 text-lg underline focus:outline-none focus:ring focus:ring-indigo-500 text-white font-semibold"
                target="_blank"
                href="https://lite.pupilfirst.org/faculty"
              >
                <span>See the List of institutions</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
              </a>
              <p className="pt-4 pb-8 text-white">
                Engineering students would get the opportunity to learn the{" "}
                <a
                  className="inline-block underline focus:outline-none focus-visible:ring focus-visible:ring-white text-white font-semibold rounded"
                  target="_blank"
                  href="https://lite.pupilfirst.org/faculty"
                >
                  full stack developer course as a minor degree
                </a>{" "}
                with a path for internship based hiring by the industry.
              </p>
            </div>
            <div className="col-span-6 border-t border-dashed md:border-t-0 md:border-solid md:border-l border-primary-200 py-2 md:py-6 md:px-8">
              <h3 className="text-white text-2xl md:text-3xl">
                Become an early adopter.
              </h3>
              <p className="pt-4 text-xl text-white">
                Organizations interested in considering full stack student
                developers for hiring through an internship based model may
                sign-up below.
              </p>
              <a
                target="_blank"
                href="/early-adopter"
                className="inline-flex space-x-3 justify-between items-center mt-6 w-full md:w-auto p-3 lg:px-5 lg:py-3.5 text-primary-600 bg-gradient-to-br from-yellow-50 to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition "
              >
                <span>See details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-8 h-8"
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
        </section>

        <section className="relative max-w-6xl 2xl:max-w-7xl mx-auto md:rounded-xl shadow-md bg-gradient-to-br from-secondary-500 to-secondary-700 px-4 md:px-8 pt-8 pb-4 md:pb-0 mt-12 lg:mt-16">
          <h2 className="text-white text-3xl md:text-4xl pb-4">
            LITE National Teaching Fellowship
          </h2>
          <div className="md:grid grid-cols-12 border-t border-secondary-300">
            <div className="col-span-6 md:pr-5">
              <p className="pt-6 text-white">
                ACT Grants is supporting three industry fellowships for
                individuals who would like to contribute to keep the AICTE
                approved curriculums in RoR, Typescript and Django updated to
                global industry standards.
              </p>
              <div className="pt-4">
                <p className="text-xl text-white">
                  <span className="font-semibold">Time:</span> 15-Hours per week
                  for 12 months or full-time
                </p>
                <p className="text-xl text-white">
                  <span className="font-semibold">Stipend:</span> Up to 3000 USD
                  / month
                </p>
              </div>
              <p className="pt-6 text-white">
                <span className="font-semibold">Impact:</span> Your efforts to
                maintain software engineering curricula up-to-date would impact
                engineering faculty and students across educational institutions
                in AICTE's LITE program.
              </p>
              <p className="pt-4 pb-8 text-white">
                <span className="font-semibold">CSR:</span> Software engineers
                who would like to volunteer as part of an organisational CSR may
                also apply after informing the head of the human resources
                department or their reporting manager.
              </p>
            </div>
            <div className="col-span-6 border-t border-dashed md:border-t-0 md:border-solid md:border-l border-secondary-300 py-2 md:py-6 md:px-8">
              <h3 className="text-white text-3xl">Important Dates</h3>
              <div className="text-white space-y-2 mt-4 text-lg">
                <p>
                  <span className="font-semibold">Jan 25:</span> LITE Industry
                  Call issued by ACT
                </p>
                <p>
                  <span className="font-semibold">Feb 15:</span> Last Date to
                  Apply for Fellowships
                </p>
                <p>
                  <span className="font-semibold">Feb 21:</span> Shortlisted
                  Fellowship Candidates Announced
                </p>
                <p>
                  <span className="font-semibold">Feb 28:</span> LITE Industry
                  Fellows Announced
                </p>
              </div>
              <a
                target="_blank"
                href="/teaching"
                className="inline-flex space-x-3 justify-between items-center mt-6 w-full md:w-auto p-3 lg:px-5 lg:py-3.5 text-secondary-600 bg-gradient-to-br from-white to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition "
              >
                <span>See details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-8 h-8"
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
        </section>
        <section className="border-t border-gray-200 mt-10 lg:mt-16">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="An initiative supported by" />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-10 mt-10">
                  <People
                    name="Prof Anil Sahasrabudhe"
                    role="Chairman, All India Council for Technical Education"
                    imgSrc="/people/Prof-Anil-Sahasrabudhe.jpg"
                  />
                  <People
                    name="Mekin Maheshwari"
                    role="Founder, Udhyam.org ex-CTO, Flipkart"
                    imgSrc="/people/mekin-maheshwari.jpg"
                  />
                  <People
                    name="Shekhar Kirani"
                    role="Partner Accel"
                    imgSrc="/people/shekhar-kirani.jpg"
                  />
                  <People
                    name="Sandeep Singhal"
                    role="Senior Advisor, Nexus Venture Partners"
                    imgSrc="/people/sandeep-singhal.jpg"
                  />
                  <People
                    name="Nachiket Mor"
                    role="Visiting scientist, balm"
                    imgSrc="/people/nachiket-mor.jpg"
                  />
                  <People
                    name="Dr. Ajay Nair"
                    role="CEO, Swasth.app"
                    imgSrc="/people/ajay-nair.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="About Leadership in Teaching Excellence (LITE)" />
              <div className="max-w-4xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="text-2xl mt-4 font-medium">
                  Catalysed by ACT Grants
                </p>
                <p className="mt-8 text-sm lg:text-lg">
                  AICTE's{" "}
                  <a
                    className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                    target="_blank"
                    href="https://lite.pupilfirst.org/"
                  >
                    Leadership in Teaching Excellence (LITE)
                  </a>{" "}
                  program aims to train 100,000 faculty and 24M students in
                  modern web development.
                </p>
                <p className="mt-4 text-sm lg:text-lg">
                  ACT Grants is supporting AICTE's Leadership in Teaching
                  Excellence (LITE) program to solve the structural issues that
                  can bridge the gap between what industry expects as skills and
                  what students learn in academia.
                </p>
                <p className="mt-4 text-sm lg:text-lg">
                  Learn More at:{" "}
                  <a
                    className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                    target="_blank"
                    href="https://pupilfirst.org/"
                  >
                    https://pupilfirst.org/
                  </a>{" "}
                  and{" "}
                  <a
                    className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                    target="_blank"
                    href="https://actgrants.in/"
                  >
                    https://actgrants.in/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="The Background Story" />
              <div class="mt-12">
                <div class="flex flex-col md:grid grid-cols-12 pl-4">
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-0 text-xl text-right font-semibold whitespace-nowrap">
                        2018
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-0 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg">
                      <span className="md:hidden font-bold text-xl">
                        In 2018
                      </span>
                      <p>
                        Girish Mathrubootham led Freshworks partnered with
                        Pupilfirst to solve structural issues in Indian software
                        engineering education.
                      </p>
                      <p className="mt-4">
                        Freshworks's RoR fresher training curriculum was
                        integrated into Sastra University's engineering
                        curriculum along with the development of{" "}
                        <a
                          className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          target="_blank"
                          href="https://github.com/pupilfirst/pupilfirst/projects/1"
                        >
                          open-source tools
                        </a>{" "}
                        and{" "}
                        <a
                          className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          target="_blank"
                          href="https://rocket.pupilfirst.org/"
                        >
                          operating processes
                        </a>{" "}
                        that enabled faculty to successfully deliver industry
                        designed courses to students.
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-12 text-xl text-right font-semibold whitespace-nowrap">
                        2019
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-12 mt-0.5 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg pt-12">
                      <span className="md:hidden font-bold text-xl">
                        In 2019
                      </span>
                      <p>
                        AICTE partnered with Pupilfirst to scale this model
                        across the country.
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-12 text-xl text-right font-semibold whitespace-nowrap">
                        2020
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-12 mt-0.5 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg pt-12">
                      <span className="md:hidden font-bold text-xl">
                        In 2020,
                      </span>
                      <p>
                        <a
                          className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          target="_blank"
                          href="https://coronasafe.network/"
                        >
                          CoronaSafe Network
                        </a>
                        , an open-source pandemic war-room software was created
                        by 300+ engineers with the support of ACT Grants. To
                        support continuous development, ACT Grants enabled a
                        student fellowship program to select and train 30
                        students as full-stack developers.
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-12 text-xl text-right font-semibold whitespace-nowrap">
                        Jan 2021
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-12 mt-0.5 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg pt-12">
                      <span className="md:hidden font-bold text-xl">
                        In Jan 2021,
                      </span>
                      <p>
                        Only 100 students out of the 50,482 applicants could
                        pass the admissions filter to write code that passed
                        automated tests, revealing the size of gap between
                        industry expectations and academic curriculums.
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-12 text-xl text-right font-semibold whitespace-nowrap">
                        May 2021
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-12 mt-0.5 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg pt-12">
                      <span className="md:hidden font-bold text-xl">
                        In May 2021,
                      </span>
                      <p>
                        To fix the gap, AICTE launched the{" "}
                        <a
                          className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          target="_blank"
                          href="https://lite.pupilfirst.org/letter-from-VCM/Letter-from-the-VCM-AICTE.pdf"
                        >
                          Leadership in Teaching Excellence (LITE)
                        </a>{" "}
                        programme to train 100,000 faculty and 24M students in
                        modern software engineering curriculums.
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-12 text-xl text-right font-semibold whitespace-nowrap">
                        Sept 2021
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-12 mt-0.5 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg pt-12">
                      <span className="md:hidden font-bold text-xl">
                        In Sept 2021,
                      </span>
                      <p>
                        The United Nations approved CoronaSafe as the 50th
                        Digital Public Good and 14 students who worked to create
                        TeleICU capabilities were recognised by AICTE as
                        <a
                          className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          target="_blank"
                          href="https://gdc.network/#certificate"
                        >
                          National Software Engineering Fellows.
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div class="flex md:contents">
                    <div class="col-start-3 col-end-4 mr-4 md:mr-8 md:mx-auto relative">
                      <div class="h-full w-4 md:w-6 flex items-center justify-center relative">
                        <div class="h-full w-1 bg-primary-500 pointer-events-none"></div>
                      </div>
                      <p className="hidden md:block absolute right-12 top-12 text-xl text-right font-semibold whitespace-nowrap">
                        Dec 2021
                      </p>
                      <div class="w-4 h-4 md:w-6 md:h-6 absolute top-12 mt-0.5 rounded-full bg-primary-500 shadow text-center"></div>
                    </div>
                    <div class="col-start-4 col-end-12 mr-auto w-full text-lg py-12">
                      <span className="md:hidden font-bold text-xl">
                        In Dec 2021,
                      </span>
                      <p>
                        ACT approved support for AICTE's LITE program to not
                        only enable students to build and maintain Digital
                        Public Goods but also solve for quality in Indian higher
                        education to provide trained talent for the software
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto rounded-lg bg-primary-100 border-4 border-primary-500 p-4">
                  <p>
                    The LITE Industry Network and Fellowships program is a new
                    chapter in the journey towards improving the quality of
                    learning outcomes in software engineering education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Spread the word" />
              <div className="max-w-4xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-8 text-sm lg:text-lg">
                  Please share this information with organisations that are
                  looking for skilled engineering talent or software engineers
                  you know who have a passion for teaching and improving the
                  quality of education in India.
                </p>
                <div className="inline-block mt-8 p-4 md:p-8 rounded-lg bg-primary-100">
                  <p className="border-b border-primary-300 pb-3 text-base md:text-xl font-medium">
                    Last Dates:
                  </p>
                  <p className="pt-4 text-base md:text-xl">
                    <span className="font-semibold">Feb 15, 2022:</span> Last
                    Date to{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      target="_blank"
                      href="/early-adopter"
                    >
                      Apply for Industry Network
                    </a>
                  </p>
                  <p className="pt-3 text-base md:text-xl">
                    <span className="font-semibold">Feb 15, 2022:</span> Last
                    Date to{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      target="_blank"
                      href="/teaching"
                    >
                      Apply for National Teaching Fellowships
                    </a>
                  </p>
                </div>
                <div className="pt-10 lg:pt-10">
                  <h3 className="text-secondary-500 text-xl lg:text-3xl font-bold">
                    Questions?
                  </h3>
                  <p className="pt-2">
                    If you have any questions, please feel free to contact Suma
                    Sundararajan, Co-founder Pupilfirst at{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      href="mailto:suma@pupilfirst.org?cc=neetha.joy@uwbengaluru.org"
                    >
                      suma@pupilfirst.org{" "}
                    </a>
                    with CC to Neetha Joy at ACT Grants at{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      href="mailto:neetha.joy@uwbengaluru.org"
                    >
                      {" "}
                      neetha.joy@uwbengaluru.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
