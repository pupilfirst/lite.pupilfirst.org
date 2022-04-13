import Head from "next/head";
import DescriptionList from "../components/DescriptionList";
import Heading from "../components/Heading";
import People from "../components/People";
import NumberListItem from "../components/NumberListItem";
import ScheduleDate from "../components/ScheduleDate";

export default function earlyAdopter() {
  return (
    <div>
      <Head>
        <title>LITE Industry Hiring Network</title>
        <meta
          name="description"
          content="AICTE Leadership in Teaching Excellence (LITE) Industry Network is a national program to connect students trained in the industry-designed full-stack web developer curriculum for internship-based hiring by the software industry."
        ></meta>
        <meta
          name="keywords"
          content="LITE Industry Hiring Network, Hire software engineer interns, Apply for LITE industry network"
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
        <meta property="og:title" content="LITE Industry Hiring Network" />
        <meta
          property="og:description"
          content="AICTE Leadership in Teaching Excellence (LITE) Industry Network is a national program to connect students trained in the industry-designed full-stack web developer curriculum for internship-based hiring by the software industry."
        />
        <meta property="og:image" content="/lite-industry-network.jpg" />
        <meta
          property="og:url"
          content="https://lite.pupilfirst.org/industry/early-adopter"
        />
        <meta name="twitter:card" content="/lite-industry-network.jpg" />
        <meta property="og:site_name" content="LITE Industry Network" />
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
                src="/logos/aicte-logo.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-center text-xl md:text-3xl lg:text-4xl lg:py-4 font-medium">
                Leadership in Teaching Excellence (LITE)
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
                  Industry Hiring Network
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">
                AICTE Leadership in Teaching Excellence (LITE) Hiring Network
                connects students skilled in the industry-designed full-stack
                web developer curriculum to companies for internship-based
                hiring.
              </p>
              <div className="pt-4 md:pt-8">
                <div>
                  <a
                    href="https://pupilfirst.typeform.com/to/akBZG57E"
                    target="_blank"
                    className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition "
                  >
                    Join as an early adopter
                  </a>
                </div>
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
          <section className="mx-4 xl:mx-0 pb-10 md:pb-16">
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 relative shadow-lg max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <p className="text-xs leading-tight text-center px-4 py-2 rounded-b-lg bg-primary-100 text-gray-800 shadow-inner">
                  Supported By
                </p>
                <div className="p-10 grid grid-cols-2 md:grid-cols-12 items-center gap-8">
                  <div className="md:col-span-4 flex items-center justify-center">
                    <img src="/logos/aicte.png" alt="aicte" />
                  </div>
                  <div className="md:col-span-2 flex items-center justify-center">
                    <img
                      className="w-14"
                      src="/logos/ACT-Logo.png"
                      alt="ACT Grants"
                    />
                  </div>
                  <div className="md:col-span-3 flex items-center justify-center">
                    <img
                      className="w-24"
                      src="/logos/SaaSBOOMi-logo.svg"
                      alt="SaaSBOOMi"
                    />
                  </div>
                  <div className="md:col-span-3 flex items-center justify-center">
                    <img
                      src="/logos/pupilfirst-logo-primary.svg"
                      alt="Pupilfirst"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="relative border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-7 2xl:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <Heading
                      heading={
                        <span>
                          Everything you <br /> need to know
                        </span>
                      }
                    />
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <DescriptionList
                      heading="What is this?"
                      content="Access to a talent pipeline for hiring full-stack developers from engineering colleges across the country."
                    />
                    <DescriptionList
                      heading="How does it work?"
                      content={
                        <span>
                          Students learn a{" "}
                          <a
                            className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                            href="https://www.aicte-india.org/sites/default/files/Model_Curriculum/Minor%20Degree%20in%20Adv.%20Web%20Development.pdf"
                            target="_blank"
                          >
                            full-stack web development curriculum
                          </a>{" "}
                          designed by practicing software engineers. You can
                          access these student devs as interns and seamlessly
                          transition to full-time hires as they graduate.
                        </span>
                      }
                    />
                    <DescriptionList
                      heading="Why is it needed?"
                      content="To substantially increase the number of students who can join as full-stack developers in the software industry."
                    />
                    <DescriptionList
                      heading="What do we teach these students?"
                      content={
                        <div>
                          Students are taught tools and techniques that are as
                          close to real-world web development as possible. They
                          use Visual Studio Code from Day 1 and are taught the
                          importance of writing readable, well-formatted code.
                          <p className="pt-4">
                            They are asked to refactor their code and perform
                            version control on GitHub. Furthermore, they're also
                            taught how to ask technical questions, and how to
                            research for solutions to new problems on their own.
                          </p>
                        </div>
                      }
                    />
                    <DescriptionList
                      heading="What stack will students be familiar with?"
                      content={
                        <div>
                          <ul className="list-disc ml-5 mt-2 space-y-2">
                            <li>
                              <span className="font-semibold">WD101:</span>{" "}
                              HTML, CSS, Tailwind, JavaScript.
                            </li>
                            <li>
                              <span className="font-semibold">WD201:</span> Ruby
                              &amp; Ruby-on-Rails (Batch 1 only <sup>[1]</sup>).
                            </li>
                            <li>
                              <span className="font-semibold">WD301:</span>{" "}
                              React with TypeScript.
                            </li>
                            <li>
                              <span className="font-semibold">WD401:</span>
                              <sup>[2]</sup> Jest/RSpec, CI/CD with Github
                              Actions, Docker, Sentry (error-monitoring)
                            </li>
                          </ul>
                          <p className="mt-4 text-sm">
                            <sup>[1]</sup> The stack for Batch 2 onwards will be
                            based around Express (JS)
                          </p>

                          <p className="text-sm mt-2">
                            <sup>[2]</sup> Tools/Stack used in WD401 is subject
                            to change as the curriculum is in active
                            development.
                          </p>
                        </div>
                      }
                    />
                    <DescriptionList
                      heading="Who is this for?"
                      content="Startups and software companies looking to hire full-stack developers."
                    />
                    <DescriptionList
                      heading="How does this help my company/team?"
                      content="Reduce your hiring efforts by interviewing students who have already demonstrated skills by building full-stack web applications."
                    />
                    <DescriptionList
                      heading="How can we interview these students?"
                      content="You can follow your own interview process to select students."
                    />
                    <DescriptionList
                      heading="How long should the internship duration be?"
                      content="It's flexible; four to six months is recommended."
                    />
                    <DescriptionList
                      heading="What should be the internship stipend?"
                      content="Based on your company policy; paid internships are recommended."
                    />
                    <DescriptionList
                      heading="Are there any hiring charges?"
                      content="Nil, for early adopters."
                    />
                  </div>
                </div>
                <div className="hidden lg:block lg:col-span-5 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="bg-gradient-to-br from-white to-gray-100 rounded-r md:rounded-lg border border-gray-100 relative shadow-md">
                      <div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-4 border-b border-gray-200">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="p-2 md:p-4 lg:p-5">
                        <p className="text-xl font-semibold leading-tight">
                          Become an early adopter.
                        </p>
                        <p className="leading-tight mt-2">
                          If you would like to benefit from the hiring network,
                          we invite you to join us as an early adopter by
                          filling in the Typeform.
                        </p>
                        <p className="p-4 mt-4 rounded-md bg-gray-100 text-lg">
                          Last date to apply:{" "}
                          <span className="text-primary-500 font-semibold">
                            {" "}
                            May 18, 2022
                          </span>
                        </p>
                        <div className="pt-4">
                          <a
                            href="https://pupilfirst.typeform.com/to/akBZG57E"
                            target="_blank"
                            className="inline-block w-full p-3 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-center font-semibold hover:shadow-xl transition "
                          >
                            Join as an early adopter
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 bg-white">
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
                    role="Founder, Udhyam.org & ex-CTO, Flipkart"
                    imgSrc="/people/mekin-maheshwari.jpg"
                  />
                  <People
                    name="Shekhar Kirani"
                    role="Partner, Accel"
                    imgSrc="/people/shekhar-kirani.jpg"
                  />
                  <People
                    name="Sandeep Singhal"
                    role="Senior Advisor, Nexus Venture Partners"
                    imgSrc="/people/sandeep-singhal.jpg"
                  />
                  <People
                    name="Nachiket Mor"
                    role="Visiting scientist, BALM"
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
        <section className="border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Beginner to advanced courses" />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  This programme is designed with 4 courses such that selected
                  institutions can offer a 20 credit “Minor Degree in Advanced
                  Web Development” through their trained faculty to students.
                </p>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-8">
                  <div className="w-full md:flex-1 bg-gradient-to-br bg-white border border-primary-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-primary-400 text-xl md:text-2xl font-bold">
                      WD 101
                    </p>
                    <p className="font-mono tracking-tight text-black leading-snug mt-1">
                      <span className="font-semibold">Beginner</span> - Getting
                      started with Javascript (WD 101).
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
                  <div className="w-full md:flex-1 bg-gradient-to-br bg-white border border-indigo-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-indigo-400 text-xl md:text-2xl font-bold">
                      WD 201
                    </p>
                    <p className="font-mono tracking-tight text-black leading-snug mt-1">
                      <span className="font-semibold">Intermediate</span> -
                      Server-side programming with Ruby on Rails.
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
                  <div className="w-full md:flex-1 bg-gradient-to-br bg-white border border-green-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-green-500 text-xl md:text-2xl font-bold">
                      WD 301
                    </p>
                    <p className="font-mono tracking-tight text-black leading-snug mt-1">
                      <span className="font-semibold">Advanced</span> - React
                      with TypeScript.
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
                  <div className="w-full md:flex-1 bg-gradient-to-br bg-white border border-green-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-red-500 text-xl md:text-2xl font-bold">
                      WD 401
                    </p>
                    <p className="font-mono tracking-tight text-black leading-snug mt-1">
                      <span className="font-semibold"> </span> Getting ready for
                      production.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm ">
                  WD201 RoR-based course is being replaced with a JS-based
                  course that teaches the same concepts.
                </p>
              </div>
              <div className="mt-20">
                <Heading heading="Setting the Gold Standard in Software Engineering Education" />
                <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    Open-source contributions made for{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      href="https://coronasafe.network/"
                      target="_blank"
                    >
                      CoronaSafe Network
                    </a>{" "}
                    by 14 engineering interns who completed this program has
                    been recognised by United Nations as the 50th Digital Public
                    Good globally.
                  </p>
                  <p className="mt-4 text-sm lg:text-lg">
                    Student developers from 27 institutions would be available
                    for hire by early adopters.
                  </p>
                  <img
                    className="pt-8"
                    src="/stats-map/LITE-first-batch-completed-02.jpg"
                    alt="Map showing the universities which were admitted in the program"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Apply your own hiring standards" />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  We do not require you to bypass your existing hiring standards
                  when providing internships or hiring opportunities. Instead,
                  we encourage independent evaluation to assess student
                  performance.
                </p>
              </div>
              <div className="mt-20">
                <Heading heading="What we expect from you." />
                <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    In exchange for accessing this pipeline of trained talent,
                    we expect:
                  </p>
                  <div className="flex flex-col gap-4 mt-6">
                    <NumberListItem
                      number="1"
                      content="To work with your organization's HR and engineering leads and align with your hiring needs."
                    />
                    <NumberListItem
                      number="2"
                      content={
                        <span>
                          To place your logo on the{" "}
                          <a
                            className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                            href="https://wd.pupilfirst.org/"
                            target="_blank"
                          >
                            Minor Degree in Advanced Web Development Website{" "}
                          </a>{" "}
                          for students to be aware of internship/hiring
                          opportunities at your organization.
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-6 lg:py-8">
              <Heading heading="Scaling to 24M students" />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  The AICTE LITE program aims to train 24M students over the
                  next six years, starting from schools to create a continuous
                  supply of highly skilled developers to the industry year after
                  year.
                </p>
              </div>
            </div>
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-6 lg:py-8">
              <Heading heading="Schedule" />
              <div className="max-w-4xl lg:ml-28 2xl:ml-44 pl-4">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 relative shadow-lg divide-y divide-gray-200 mt-4">
                  <ScheduleDate
                    date="April 18, 2022"
                    content="Launch LITE Industry Hiring Network call"
                  />
                  <ScheduleDate
                    date="May 18, 2022"
                    content="Last Date to Apply for Industry Network"
                  />
                  <ScheduleDate
                    date="May 25, 2022"
                    content="LITE Industry Network 2022 published"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 pb-10 lg:pb-16">
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12 mt-14">
                  <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">
                    Become an early adopter.
                  </h4>
                  <p className="text-center leading-tight mt-3 text-xl text-white font-medium max-w-2xl mx-auto">
                    If you would like to benefit from the hiring network, we
                    invite you to join us as an early adopter by filling in the
                    Typeform.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://pupilfirst.typeform.com/to/akBZG57E"
                      target="_blank"
                      className="inline-block w-full sm:w-64 p-3 lg:px-3 lg:py-3.5 text-primary-800 bg-gradient-to-br from-yellow-50 to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold hover:shadow-xl transition "
                    >
                      Join as an early adopter
                    </a>
                  </div>
                </div>
                <div className="flex items-start md:items-center gap-4 p-4 rounded-lg bg-primary-100 mt-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 text-primary-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                  </svg>

                  <p className="text-lg">
                    <span className="font-semibold">18 May 2022:</span> The last
                    date to apply as an early adopter for LITE Hiring Network
                  </p>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h3 className="text-secondary-500 text-xl lg:text-3xl font-bold">
                    Questions?
                  </h3>
                  <p className="pt-2 md:text-lg">
                    If you have any questions, email us at{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      href="mailto:hiring@pupilfirst.org?cc=neetha.joy@uwbengaluru.org"
                    >
                      <span className="font-semibold">
                        hiring@pupilfirst.org
                      </span>
                    </a>{" "}
                    with CC to Neetha Joy at ACT Grants at{" "}
                    <span className="font-semibold">
                      neetha.joy@uwbengaluru.org
                    </span>
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
