import Head from "next/head";
import Heading from "../components/Heading";
import DescriptionList from "../components/DescriptionList";
import DateAndContent from "../components/DateAndContent";
import People from "../components/People";
import ListItem from "../components/ListItem";
import ScheduleDate from "../components/ScheduleDate";

export default function teachingFellowship() {
  return (
    <div>
      <Head>
        <title>LITE Teaching Fellowships</title>
        <meta
          name="description"
          content="AICTE LITE Teaching Fellowship is a national fellowship for experienced software engineers who love teaching and are interested in contributing time for bringing the academic curriculum in engineering colleges at par with industry standards."
        ></meta>
        <meta
          name="keywords"
          content="AICTE's Teaching fellowships, National fellowships for software engineers, Teaching software engineering."
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
        <meta property="og:title" content="LITE Teaching Fellowships" />
        <meta
          property="og:description"
          content="AICTE LITE Teaching Fellowship is a national fellowship for experienced software engineers who love teaching and are interested in contributing time for bringing the academic curriculum in engineering colleges at par with industry standards."
        />
        <meta property="og:image" content="/lite-teaching-fellowships.jpg" />
        <meta
          property="og:url"
          content="https://lite.pupilfirst.org/teaching-fellowship"
        />
        <meta name="twitter:card" content="/lite-teaching-fellowships.jpg" />
        <meta property="og:site_name" content="LITE Teaching Fellowships" />
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
              <h1 className="hero__title-gradient text-center text-xl md:text-3xl lg:text-4xl lg:py-4 font-medium">
                Leadership in Teaching Excellence
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
                  Teaching Fellowships
                </span>
              </h1>
              <p className="max-w-4xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">
                AICTE LITE Teaching Fellowship is a national fellowship for
                experienced software engineers who love teaching and are
                interested in contributing time for bringing the academic
                curriculum in engineering colleges at par with industry
                standards.
              </p>
              <div className="pt-4 md:pt-8">
                <div>
                  <a
                    href="https://pupilfirst.typeform.com/to/U4hNfAC0"
                    target="_blank"
                    className="inline-block w-full sm:max-w-md p-3 lg:px-3 lg:py-3.5 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-base lg:text-lg text-center font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition "
                  >
                    Apply Now
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
                      content="It’s a national teaching fellowship for experienced software professionals."
                    />
                    <DescriptionList
                      heading="What is its purpose?"
                      content="To enable industry knowledge to flow back to faculty and students at engineering colleges."
                    />
                    <DescriptionList
                      heading="Who is this for?"
                      content="Software engineers with 3+ years of experience with interest in teaching."
                    />
                    <DescriptionList
                      heading="When?"
                      content="February 21, 2022, to February 20, 2023"
                    />
                    <DescriptionList
                      heading="Effort?"
                      content="15 hours per week for 12 months."
                    />
                    <DescriptionList
                      heading="Stipend?"
                      content="3000 USD per month"
                    />
                    <DescriptionList heading="Location?" content="Remote" />
                    <DescriptionList
                      heading="Required expertise?"
                      content="At least one of Django, Ruby on Rails, or React with TypeScript. You need to have in-depth proficiency in one of these stacks."
                    />
                    <DescriptionList
                      heading="Part-time or full-time?"
                      content="Both part-time and full-time options are available."
                    />
                    <DescriptionList
                      heading="Volunteer?"
                      content="Engineers may volunteer as part of their organisations’ CSR activity after informing their reporting manager."
                    />
                    <DescriptionList
                      heading="Open Source?"
                      content={
                        <span>
                          Yes. All curriculums are open-sourced under a Creative
                          Commons Attribution-ShareAlike 4.0 International{" "}
                          <a
                            className="inline-block text-secondary-500 font-semibold underline hover:bg-secondary-50 focus:outline-none focus:bg-secondary-100"
                            href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
                            target="_blank"
                          >
                            (CC BY-SA 4.0)
                          </a>{" "}
                          license.
                        </span>
                      }
                    />
                    <DescriptionList
                      heading="Certificate?"
                      content="Yes. You would be awarded a National Teaching Fellowship Certificate jointly by the All India Council for Technical Education and Pupilfirst.org"
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
                        <p className="font-semibold text-lg mb-2">
                          LITE Teaching Fellowships
                        </p>
                        <p className="text-sm mb-2 text-gray-500">
                          Important dates
                        </p>
                        <div className="text-xs md:text-sm mt-2 space-y-3">
                          <DateAndContent
                            date="January 25, 2022"
                            content="LITE Industry Call issued by ACT"
                          />
                          <DateAndContent
                            date="February 15, 2022"
                            content="Last Date to Apply for Fellowships"
                          />
                          <DateAndContent
                            date="February 21, 2022"
                            content="Shortlisted Fellowship Candidates Announced"
                          />
                          <DateAndContent
                            date="February 28, 2022"
                            content="LITE Industry Fellows Announced"
                          />
                        </div>
                        <div className="pt-4 lg:pt-6">
                          <a
                            href="https://pupilfirst.typeform.com/to/U4hNfAC0"
                            target="_blank"
                            className="inline-block w-full p-3 text-white bg-gradient-to-br from-yellow-500 to-primary-600 rounded-md text-center font-semibold hover:shadow-xl transition "
                          >
                            Apply now
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
        <section className="bg-white">
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
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Three National Fellowships" />
              <div className="max-w-5xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  This fellowship program is created jointly by the All India
                  Council for Technical Education (AICTE) and its partner
                  Pupilfirst with donor funding from ACT Grants to catalyse the
                  structural changes required to solve low-quality learning
                  outcomes at Indian engineering colleges.
                </p>
              </div>
              <div className="mt-20">
                <Heading heading="Who should apply?" />
                <div className="max-w-5xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    We're looking for someone who is passionate about teaching
                    and interacting with students. You will join a team of
                    coaches and be responsible for the content of the courses
                    that AICTE approves for deployment to students.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <Heading heading="Requirements" />
                <div className="max-w-5xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    At least three years of experience in the field of
                    full-stack web development using Ruby on Rails, Django or
                    Typescript (React).
                  </p>
                  <ul className="list-none mt-10">
                    <ListItem content="Prior experience in teaching technical skills, such as conducting workshops, giving seminars, personal coaching, writing instructional articles, etc. are desirable." />
                    <ListItem content="Good English writing and speaking skills - you will be responsible for the education of remote students, so communication skills are critical." />
                    <ListItem content="Access to a good internet connection." />
                  </ul>
                </div>
              </div>
              <div className="mt-20">
                <Heading heading="Key Responsibilities" />
                <div className="max-w-5xl lg:ml-28 2xl:ml-44 pl-4">
                  <p className="mt-4 text-sm lg:text-lg">
                    As an industry coach for a nationally approved engineering
                    curriculum, you play an instrumental role in course
                    implementation, evaluation and providing feedback for
                    iterative course development processes.
                  </p>
                  <h4 className="mt-10 text-secondary-500">
                    Your Responsibilities include
                  </h4>
                  <ul className="list-none mt-4">
                    <ListItem content="Taking charge of the content of the web development courses that have been developed so far. This means upgrading existing course content to meet student demands and authoring new content to match industry standards." />
                    <ListItem content="Assist in selecting Teaching Assistants (TA’s) from students who have already completed the course. These TAs will help you in course implementation processes." />
                    <ListItem content="With the assistance of teaching assistants (TA’s), ensure that students going through a course meet the expected course outcomes. This would include answering their questions in the community (forums), reviewing student submissions and giving feedback, etc." />
                    <ListItem content="Mentor TAs to enable them to perform at their best in their duties." />
                    <ListItem content="Provide technical inputs for improvement of the teaching and learning process." />
                    <ListItem content="Bring in industry experts for AMA sessions during the course, evaluations of students projects and network with industry to showcase potential internship opportunities." />
                    <ListItem content="Assist in identifying more coaches when the need arises." />
                    <ListItem content="Conduct train-the-trainer sessions when required for specific courses." />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-b border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Impact" />
              <div className="max-w-5xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  Your knowledge would initially be implemented to faculty and
                  students in 28 academic institutions under 13 State Public
                  Universities.
                </p>
                <img
                  src="/stats-map/State-Affiliating-Universities-Represented-batch-1-completed.png"
                  alt="State affiliating universities"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Schedule" />
              <div className="max-w-4xl lg:ml-28 2xl:ml-44 pl-4">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 relative shadow-lg divide-y divide-gray-200 mt-4">
                  <ScheduleDate
                    date="January 25, 2022"
                    content="LITE Industry Call issued by ACT"
                  />
                  <ScheduleDate
                    date="February 15, 2022"
                    content="Last Date to Apply for Fellowships"
                  />
                  <ScheduleDate
                    date="February 21, 2022"
                    content="Shortlisted Fellowship Candidates Announced"
                  />
                  <ScheduleDate
                    date="February 28, 2022 "
                    content="LITE Industry Fellows Announced"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <Heading heading="Rolling Evaluations" />
              <div className="max-w-4xl lg:ml-28 2xl:ml-44 pl-4">
                <p className="mt-4 text-sm lg:text-lg">
                  All incoming applications are evaluated on a first-come,
                  first-serve basis, and if there are enough qualified
                  applicants, the application process will close earlier.
                  Therefore, we encourage you to apply early if you are
                  interested in being a part of this fellowship program.
                </p>
                <div className="flex items-start md:items-center gap-4 p-4 rounded-lg bg-primary-100 mt-10">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="flex-shrink-0 w-7 h-7"
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
                  <p className="text-lg">
                    <span className="font-semibold">15 February 2022:</span>{" "}
                    Last date to Apply for LITE Industry Fellowships
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
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12 mt-10">
                  <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">
                    Apply Now for LITE Teaching Fellowship
                  </h4>
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://pupilfirst.typeform.com/to/U4hNfAC0"
                      target="_blank"
                      className="inline-block w-full sm:w-64 p-3 lg:px-3 lg:py-3.5 text-primary-500 bg-gradient-to-br from-yellow-50 to-gray-300 rounded-md text-center text-base lg:text-lg font-semibold hover:shadow-xl transition "
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
