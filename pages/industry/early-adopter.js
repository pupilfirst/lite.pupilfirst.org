import Head from "next/head";
import DescriptionList from "../../components/DescriptionList";
import Heading from "../../components/Heading";
import People from "../../components/People";
import NumberListItem from "../../components/NumberListItem";

export default function earlyAdopter() {
  return (
    <div>
      <Head>
        <title>LITE Industry Network</title>
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
        <meta property="og:title" content="LITE Industry Network" />
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
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-1 md:px-2 mt-4 ">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-center text-3xl md:text-5xl lg:text-7xl lg:py-4 font-extrabold">
                LITE Industry <br />
                Hiring Network
              </h1>
              <p className="max-w-4xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">
                AICTE Leadership in Teaching Excellence (LITE) Industry Network
                is a national program to connect students trained in the
                industry-designed full-stack web developer curriculum for
                internship-based hiring by the software industry.
              </p>
              <div className="pt-4 md:pt-8">
                <div>
                  <a
                    href="/"
                    className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition "
                  >
                    Join as early adopter
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
                <div className="p-10 flex flex-col items-center gap-10 w-full md:flex-row md:justify-between md:flex-wrap">
                  <img src="/logos/aicte.png" alt="aicte" />
                  <img
                    className="max-w-xs"
                    src="/logos/ACT-Logo.png"
                    alt="ACT Grants"
                  />
                  <img
                    src="/logos/pupilfirst-logo-primary.svg"
                    alt="Pupilfirst"
                  />
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
                      content="An industry-designed talent pipeline from academia for hiring fresher full-stack developers."
                    />
                    <DescriptionList
                      heading="Why?"
                      content="To create a pathway for the software industry to hire engineering students with a minor degree in web development, across academic institutions. "
                    />
                    <DescriptionList
                      heading="Who is this for?"
                      content="Startups and software companies that have a continuous requirement for fresher talent year after year."
                    />
                    <DescriptionList
                      heading="Reduced hiring effort?"
                      content="Reduce hiring efforts by interviewing students who have already demonstrated skills by building full-stack web applications."
                    />
                    <DescriptionList
                      heading="Interview process?"
                      content="You can follow your own interview process to select students."
                    />
                    <DescriptionList
                      heading="Internship duration?"
                      content="Six months"
                    />
                    <DescriptionList heading="Location?" content="Remote" />
                    <DescriptionList
                      heading="Internship stipend?"
                      content="Can be paid or free based on company policy."
                    />
                    <DescriptionList
                      heading="Hiring Charges?"
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
                        <p className="leading-tight text-sm mt-2">
                          If you would like to contribute to fix the structural
                          issues in engineering education in India and benefit
                          from the talent network, we invite you to join as an
                          early adopter to the LITE Industry Network.
                        </p>
                        <p className="p-4 mt-4 rounded-md bg-gray-100 text-sm">
                          Last date to apply:{" "}
                          <span className="text-primary-500 font-semibold">
                            {" "}
                            31 January 2021
                          </span>
                        </p>
                        <div className="pt-4">
                          <a
                            href="#"
                            className="inline-block w-full p-3 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-center font-semibold hover:shadow-xl transition "
                          >
                            Join as early adopter
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
        <section className="border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="An initiative supported by" />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-10 mt-10">
                  <People
                    name="Prof Anil Sahasrabudhe"
                    role="Chairman, All India Council for Technical Education"
                    imgSrc="/people/Prof-Anil-Sahasrabudhe.png"
                  />
                  <People
                    name="Mekin Maheshwari"
                    role="Founder, Udhyam.org ex-CTO, Flipkart"
                    imgSrc="/people/mekin-maheshwari.png"
                  />
                  <People
                    name="Shekhar Kirani"
                    role="Partner Accel"
                    imgSrc="/people/shekhar-kirani.png"
                  />
                  <People
                    name="Sandeep Singhal"
                    role="Senior Advisor, Nexus Venture Partners"
                    imgSrc="/people/sandeep-singhal.png"
                  />
                  <People
                    name="Nachiket Mor"
                    role="Visiting scientist, balm"
                    imgSrc="/people/nachiket-mor.png"
                  />
                  <People
                    name="Dr. Ajay Nair"
                    role="CEO, Swasth.app"
                    imgSrc="/people/ajay-nair.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Beginner to advanced courses" />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  This programme is designed with 3 courses such that selected
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
                      <span className="font-semibold">Advanced</span> - Typed
                      Functional Programming
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <Heading heading="Aiming for Gold Standard in Engineering Education" />
                <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    The open-source contributions made for{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      href="https://coronasafe.network/"
                      target="_blank"
                    >
                      CoronaSafe Network
                    </a>{" "}
                    by 14 engineering interns were recognised by the United
                    Nations as the 50th Digital Public Good in the world.
                  </p>
                  <p className="mt-4 text-sm lg:text-lg">
                    The{" "}
                    <a
                      className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                      href="https://rocket.pupilfirst.org/"
                      target="_blank"
                    >
                      detailed operational model
                    </a>{" "}
                    is now being scaled to 27 institutions across 11 states in
                    the first batch of the LITE program to create a pipeline of
                    students who demonstrate skills desired by the industry.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <Heading heading="Scaling to 24M Students" />
                <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    The LITE program has a goal to train 24M students over the
                    next few years starting from schools to create a continuous
                    supply of talent to industry year after year.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <Heading heading="Apply your own hiring standards" />
                <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    We do not require you bypass your existing hiring pipeline
                    when providing internships or hiring students from the
                    network. In fact, we encourage independent evaluation in
                    order to assess the performance of the LITE program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="What we expect from you." />
              <div className="max-w-6xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  In exchange for accessing this pipeline of trained talent, we
                  expect:
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <NumberListItem
                    number="1"
                    content="To work with the human resources and engineering lead at your organisation to align your internal hiring process and demand with University Academic Calendars across many states."
                  />
                  <NumberListItem
                    number="2"
                    content="To publicize the LITE Teaching Fellowship program within your organization - this program depends on continuous effort from the industry’s working professionals."
                  />
                  <NumberListItem
                    number="3"
                    content={
                      <span>
                        To place your logo on the{" "}
                        <a
                          className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                          href="https://wd.pupilfirst.org/"
                          target="_blank"
                        >
                          Minor Degree Curriculum Website for students
                        </a>
                        , expressing support for the LITE program
                      </span>
                    }
                  />
                </div>
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12 mt-20">
                  <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">
                    Become an early adopter.
                  </h4>
                  <p className="text-white text-center leading-tight mt-3">
                    If you would like to contribute to fix the structural issues
                    in engineering education in India and benefit from the
                    talent network, we invite you to join as an early adopter to
                    the LITE Industry Network.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="/"
                      className="inline-block w-full sm:w-64 p-3 lg:px-3 lg:py-3.5 text-primary-500 bg-gradient-to-br from-yellow-50 to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold hover:shadow-xl transition "
                    >
                      Join as early adopter
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-primary-100 mt-10">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5908 11.4639C12.5641 11.3163 12.4831 11.1841 12.3638 11.0933C12.2445 11.0025 12.0955 10.9597 11.9462 10.9732C11.7969 10.9868 11.658 11.0557 11.557 11.1665C11.456 11.2773 11.4001 11.4219 11.4004 11.5719V16.9743L11.41 17.0823C11.4367 17.2298 11.5177 17.362 11.637 17.4528C11.7563 17.5436 11.9053 17.5865 12.0546 17.5729C12.2039 17.5594 12.3428 17.4904 12.4438 17.3796C12.5448 17.2688 12.6007 17.1242 12.6004 16.9743V11.5719L12.5908 11.4639Z"
                      fill="#FD6400"
                    />
                    <path
                      d="M12.9602 8.87192C12.9602 8.63323 12.8653 8.40431 12.6966 8.23553C12.5278 8.06674 12.2989 7.97192 12.0602 7.97192C11.8215 7.97192 11.5925 8.06674 11.4238 8.23553C11.255 8.40431 11.1602 8.63323 11.1602 8.87192C11.1602 9.11062 11.255 9.33954 11.4238 9.50832C11.5925 9.6771 11.8215 9.77192 12.0602 9.77192C12.2989 9.77192 12.5278 9.6771 12.6966 9.50832C12.8653 9.33954 12.9602 9.11062 12.9602 8.87192Z"
                      fill="#FD6400"
                    />
                    <path
                      d="M21.6004 12.7719C21.6004 10.2258 20.589 7.784 18.7886 5.98365C16.9883 4.1833 14.5465 3.17188 12.0004 3.17188C9.45431 3.17188 7.01251 4.1833 5.21217 5.98365C3.41182 7.784 2.40039 10.2258 2.40039 12.7719C2.40039 15.318 3.41182 17.7598 5.21217 19.5601C7.01251 21.3604 9.45431 22.3719 12.0004 22.3719C14.5465 22.3719 16.9883 21.3604 18.7886 19.5601C20.589 17.7598 21.6004 15.318 21.6004 12.7719ZM3.60039 12.7719C3.60039 11.6688 3.81766 10.5765 4.2398 9.55733C4.66194 8.5382 5.28068 7.61219 6.06069 6.83218C6.84071 6.05217 7.76671 5.43343 8.78585 5.01129C9.80498 4.58915 10.8973 4.37187 12.0004 4.37187C13.1035 4.37187 14.1958 4.58915 15.2149 5.01129C16.2341 5.43343 17.1601 6.05217 17.9401 6.83218C18.7201 7.61219 19.3388 8.5382 19.761 9.55733C20.1831 10.5765 20.4004 11.6688 20.4004 12.7719C20.4004 14.9997 19.5154 17.1363 17.9401 18.7116C16.3648 20.2869 14.2282 21.1719 12.0004 21.1719C9.77257 21.1719 7.636 20.2869 6.06069 18.7116C4.48539 17.1363 3.60039 14.9997 3.60039 12.7719Z"
                      fill="#FD6400"
                    />
                  </svg>
                  <p>
                    <span className="font-semibold">31 January 2021</span> to
                    Apply for LITE Industry Network
                  </p>
                </div>
                <div className="pt-10 lg:pt-16">
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
