import Head from "next/head";

function ImageWithDescription({ name, caption, role, imgSrc }) {
  return (
    <div>
      <div className="rounded-lg overflow-hidden border-4 border-secondary-500 w-5/6 md:w-auto ">
        <img src={imgSrc} alt={caption} className="block w-full object-cover md:object-contain" />
      </div>
      <h4 className={"text-lg text-primary-400 pt-2"}>{name}</h4>
      <p className={"text-sm text-gray-300 leading-tight pt-1"}>
        {caption}
      </p>
      <p className="text-sm leading-snug text-white italic mt-3">{role}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Introduction to Electric Vehicles(EV101)</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <meta property="og:title" content="Introduction to Electric Vehicles (EV101)" />
        <meta property="og:description" content="Introduction to Electric Vehicles (EV101) is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and build a career in Electric Vehicles." />
        <meta name="theme-color" content="#21252E" />
        <meta property="og:image" content="introduction-to-electric-vehicles-EV101.png" />
        <meta property="og:url" content="https://ev.pupilfirst.org/" />
        <meta name="twitter:card" content="introduction-to-electric-vehicles-EV101.png" />
        <meta property="og:site_name" content="Introduction to Electric Vehicles (EV101)" />
        <meta name="Introduction to Electric Vehicles (EV101) is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and build a career in Electric Vehicles." />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-11P76BRB6N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-11P76BRB6N');
              `,
          }}
        />
      </Head>
      <main className="bg-gray-900 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 overflow-hidden">
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img className="block w-36 md:w-44" src="logos/pupilfirst-logo.svg" />
              <img className="hidden w-20 md:w-24" src="logos/aicte-logo.png" />
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto text-white pb-2 md:pb-16 px-4 xl:px-0">
            <div className="w-full md:w-7/12 flex-shrink-0 relative z-10">
              <h1 className="hero__title-gradient text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl lg:pt-8 font-light">
                Introduction to <br/>
                <span className="font-bold">Electric Vehicles<span className="text-sm lg:text-2xl ml-2">(EV101)</span></span>
              </h1>
              <p className="max-w-2xl text-sm md:text-base lg:text-xl pt-2 lg:pt-4 lg:pr-12">Introduction to Electric Vehicles (EV101) is a national programme to identify the top 100 Indian undergraduate students who are interested to learn and  build a career in Electric Vehicles.</p>
              <div className="inline-block rounded bg-secondary-900 bg-opacity-50 py-1 px-3 mt-4 ">
                <div className="flex sm:items-center space-x-2 font-medium text-sm text-secondary-300">
                  <span className="block pt-1 sm:pt-0 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                  </span>
                  <p>
                    Upto Top 100 students who qualify for the program get a 100% scholarship!
                  </p>
                </div>
              </div>
              <div className="pt-4 md:pt-8">
                <a
                  className="inline-block w-full md:w-64 p-3 text-center bg-gradient-to-r from-primary-500 to-secondary-400 text-gray-900 border border-primary-500 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:bg-secondary-400 hover:to-primary-500 transition"
                  href="#">Apply Now</a>
              </div>
            </div>
            <div className="md:5/12 hero__image-container flex z-0 pt-12 lg:pt-16">
              <img className="object-contain w-full h-full relative" src="hero/ev-open-program-hero-image.png" alt="Introduction to Electric Vehicles (EV101)" />
            </div>
          </div>
        </section>
        <section className="mx-4 xl:mx-0 pb-10 md:pb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden max-w-6xl 2xl:max-w-7xl mx-auto p-4 lg:p-10">
            <div className="flex space-y-4 md:space-y-0 md:space-x-12 flex-col md:flex-row justify-between items-start">
              <div className="md:w-10/12 text-white">
                <h2 className="text-xl md:text-2xl text-tertiary-300">Supported by Micelio, Electric mobility ecosystem leader in India.</h2>
                <p className="mt-2 text-sm md:text-base lg:text-lg">The ikigai of Micelio is to enable an ecosystem that will allow clean mobility start-ups to thrive and deliver practical carbon reduction outcomes in day to day world applications.</p>
                <p className="mt-3">Learn More at: <a className="text-secondary-400 font-semibold" target="_blank" href="https://www.micelio.com">https://www.micelio.com</a>/</p>
              </div>
              <div className="md:w-2/12 flex-shrink-0">
                <p className="text-white font-semibold text-sm">Industry Partner</p>
                <div className="bg-white rounded-md p-2 mt-1">
                  <img className="object-contain" src="logos/micelio-logo.png" alt="Micelio - The network that drives you" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 relative border-t border-gray-700">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-7 2xl:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <div className="heading-with-leftborder">
                      <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-snug lg:ml-28 2xl:ml-44 pl-4">Everything you<br /> need to know</h2>
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-28 2xl:ml-44">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">What is this program?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">Industry-led introductory course in Electric Vehicles (EV) for undergraduate students pursuing engineering degrees in India.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Why?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">To give undergraduate students an overview of the Electric Vehicle ecosystem to help them decide if they wish to build a career in it.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Who is this for?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">Students who are at least 18 years old and no older than 25 years old and pursuing engineering undergraduate degree at an higher education institution in India.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">When?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">April 2, 2021 - April 26, 2021</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Effort?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">25 hours of highly enjoyable study & tasks over the course of 3 weeks.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Format?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">Self-paced learning via task around text and video tutorials</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Mentorship?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">AMAs with industry veterans and a dedicated Q&amp;A forum.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Certificate?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">Yes. Upon successful completion of the program, students will  receive a certificate.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Cost</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg text-white">Free</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-r md:rounded-lg border border-gray-700 relative overflow-hidden shadow-lg">
                      <div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-3 border-b border-gray-600">
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      </div>
                      <div className="p-2 md:p-4 lg:p-5 2xl:p-6">
                        <p className="text-secondary-400 text-xl font-semibold leading-tight">Introduction to <br/> Electric Vehicles (EV101)</p>
                        <p className="text-xs mt-4 text-gray-400">Important Dates</p>
                        <div className="text-xs md:text-sm mt-2 space-y-3">
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">Mar 10, 2021</p>
                            <p className="col-span-5 text-white">- Application Opens</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">Mar 21, 2021</p>
                            <p className="col-span-5 text-white">- Applications window ends</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">Mar 26, 2021</p>
                            <p className="col-span-5 text-white">- Announcement of selected students </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">Apr 02, 2021</p>
                            <p className="col-span-5 text-white">- Program Begins</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">Apr 23, 2021</p>
                            <p className="col-span-5 text-white">- Program Ends</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-primary-400">Apr 26, 2021</p>
                            <p className="col-span-5 text-white">- Course Conclusion</p>
                          </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                          <a
                            className="block px-10 py-3 text-center bg-gradient-to-r from-primary-500 to-secondary-400 text-gray-900 border border-primary-500 font-semibold rounded-md shadow-lg hover:shadow-2xl hover:bg-secondary-400 hover:to-primary-500 transition"
                            href="#">Apply Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-b border-gray-700 mx-auto relative overflow-hidden shadow-lg">
          <div className=" max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Prepared by <br />Industry Experts</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-xl text-white">
                  <p className="text-sm md:text-base lg:text-lg mt-4">The course is hosted online on the Pupilfirst platform and has been jointly authored by Mr. Swapnil Mankame and Dr. Saurabh Markandeya who have deep industry experience in the Electric Vehicles domain.</p>
                </div>
              </div>
              <svg className="absolute right-0 top-1/4 object-center" width="120" height="400" fill="none" viewBox="0 0 120 400">
                <defs>
                  <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-700" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="120" height="400" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
              </svg>
              <div className="max-w-4xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="max-w-xl space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-12 lg:gap-20 py-12 lg:pb-16">
                  <ImageWithDescription name="Mr. Swapnil Mankame"
                    caption={<>
                      CEO, Founder at <br />Mankame Automotive</>}
                      role={<>
                      (Course Author &amp; Full time coach) Entrepreneur in the EV pace and ecosystem leader</> }
                    imgSrc="people/Swapnil-Mankame.png"
                  />
                  <ImageWithDescription name="Dr. Saurabh Markandeya"
                    caption={<>
                      Co-CEO at The SHADO Group &amp; <br/>Co-founder at AdarinET</>}
                      role={<>
                      (Head Coach &amp; Course Reviewer) Research scholar and entrepreneur in the EV space for over 5 years.</> }
                    imgSrc="people/Dr-Saurabh-Markandeya.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="max-w-4xl mx-auto text-white pt-10 lg:pt-20">
                <div className="max-w-4xl p-4 md:px-8 md:py-10 lg:px-12 lg:py-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-r-lg md:rounded-lg border border-gray-700 relative shadow-lg -ml-px md:ml-0">
                  <div>
                    <h3 className="text-lg lg:text-4xl max-w-lg leading-snug lg:leading-10">Ask Me Anything (AMA) Session with experts working in the EV Domain</h3>
                    <p className="text-sm md:text-base lg:text-lg pt-4">You will hear experiences and stories of  people in the EV industry around their career in the domain, opportunities, skill requirement and how
                      the industry works today. The best things about these AMAs are the free-wheeling question and answer session where you talk with the speakers about the most pressing questions in your mind.
                    </p>
                  </div>
                  <div className="hidden lg:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                    <div className="relative h-full max-w-7xl mx-auto">
                      <div className="absolute ama-section__corner-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="293" height="211"><defs><linearGradient x1="2.59498185%" y1="32.8028691%" x2="100%" y2="68.8564246%" id="A"><stop stop-color="#13cef8" offset="0%"/><stop stop-color="#5afba6" offset="100%"/></linearGradient><linearGradient x1="2.59498185%" y1="39.1009916%" x2="100%" y2="61.9506173%" id="B"><stop stop-color="#13cef8" offset="0%"/><stop stop-color="#5afba6" offset="100%"/></linearGradient><linearGradient x1="2.59498185%" y1="32.5250972%" x2="100%" y2="69.1609977%" id="C"><stop stop-color="#13cef8" offset="0%"/><stop stop-color="#5afba6" offset="100%"/></linearGradient><linearGradient x1="2.59498185%" y1="40.1703672%" x2="100%" y2="60.7780612%" id="D"><stop stop-color="#13cef8" offset="0%"/><stop stop-color="#5afba6" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd" fill-opacity=".6"><rect fill="url(#A)" width="241" height="148" rx="10"/><path fill="url(#B)" d="M33 148l22.785 22L78 148z"/><g transform="translate(146 107)"><rect fill="url(#C)" width="147" height="91" rx="10"/><path fill="url(#D)" d="M20 91l14.177 13L48 91z"/></g></g></svg>
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
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white ml-4 lg:mx-auto">What are the topics covered in the programme?</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="grid grid-cols-12 gap-3 lg:gap-6 mt-6 lg:mt-10">
                  <div className="relative col-span-2 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                    <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-400 items-center justify-center absolute inset-0 transform -rotate-90">EV 101</p>
                  </div>
                  <div className="col-span-10 grid gap-y-4 md:gap-y-8">
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">1</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                        <p className="text-sm md:text-base font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">2</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                        <p className="text-sm md:text-base font-semibold text-secondary-400">Understand the basic components of an EV.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">3</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                        <p className="text-sm md:text-base font-semibold text-secondary-400">Mathematically modelling an EV.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">4</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                        <p className="text-sm md:text-base font-semibold text-secondary-400">Building your own EV conversion from scratch.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Beginner to advanced courses</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl mt-4">
                  <p className="text-white text-sm md:text-base lg:text-lg">This course is designed as a primer course for an intermediate course and advanced course that will pave the pathway a student can take to become a part of the Electric vehicle industry.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-secondary-400 rounded-lg p-3 md:p-5">
                    <span className="block absolute z-10 px-2 py-1 text-xs leading-snug font-semibold text-gray-900 rounded -top-3 right-5 md:right-auto md:left-5 bg-gradient-to-r from-secondary-400 to-primary-400">This Course</span>
                    <p className="text-secondary-400 text-xl md:text-2xl font-bold">EV 101</p>
                    <p className="text-sm md:text-base text-white leading-snug mt-1">Beginner - Introduction to Electric Vehicles</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-primary-400 rounded-lg p-3 md:p-5">
                    <p className="text-primary-400 text-xl md:text-2xl font-bold">EV 201</p>
                    <p className="text-sm md:text-base text-white leading-snug mt-1">Intermediate course on Electric Vehicles </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-tertiary-400 rounded-lg p-3 md:p-5">
                    <p className="text-tertiary-400 text-xl md:text-2xl font-bold">EV 301</p>
                    <p className="text-sm md:text-base text-white leading-snug mt-1">Advanced course on Electric Vehicles</p>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <img className="object-cover rounded-md " src="course-path/ev-course-path.png" />
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl mt-4">
                  <p className="text-white lg:text-lg">While the EV 101, the introductory course will serve as the foundation, check the infographic below to understand what skills will be gained in the Intermediate course on Electric Vehicles (EV 201).</p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0 mt-8">
                <div className="flex space-x-2 lg:space-x-4">
                  <div className="flex flex-col">
                    <div className="flex h-2/5">
                      <div className="relative grid place-items-center p-3 md:px-12 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                        <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-400 items-center justify-center absolute inset-0 transform -rotate-90">EV 101</p>
                      </div>
                    </div>
                    <div className="h-10"></div>
                    <div className="flex h-3/5">
                      <div className="relative grid place-items-center p-3 md:px-12 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                        <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-primary-400 items-center justify-center absolute inset-0 transform -rotate-90">EV 201</p>
                      </div>
                    </div>
                  </div>
                  <div className="block relative w-12 md:w-24 bg-gray-800 ">
                    <div className="flex items-center justify-center absolute z-0 inset-0 h-full">
                      <svg className="" width="2" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <line className="path" x1="0" y1="0" x2="0" y2="100%" stroke="white"/>
                      </svg>
                    </div>
                    <div className="flex whitespace-nowrap text-base items-center sticky top-0 z-20">
                      <div className="flex relative w-full justify-end items-end h-20 md:h-24">
                        <div>
                          <div className="relative">
                            <div className="flex text-xs text-secondary-200 font-semibold absolute z-20 right-0 transform -rotate-90 mt-14 md:mt-16">
                              <span className="block md:pb-2 md:pr-2">Skills</span>
                            </div>
                          </div>
                          <div className="flex justify-end w-full">
                            <img className="object-contain relative h-full w-8 md:w-12" src="course-path/ev-car-sticky.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0">
                      <div className="w-4 h-2/5"></div>
                      <div className="relative z-10 grid grid-cols-7 gap-1 md:gap-2 h-10 w-12 md:w-24 md:h-10 -mt-4">
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                      </div>
                      <div className="w-4 h-3/5"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col h-2/5 space-y-4 pb-5">
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">1</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">Electric Vehicle history &amp; foundations.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">2</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">Understand the basic components of an EV.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">3</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">Mathematically modelling an EV.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-400">4</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-secondary-900 bg-opacity-25 border border-secondary-400">
                          <p className="text-sm md:text-base font-semibold text-secondary-400">Building your own EV conversion from scratch.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col h-3/5 space-y-4 pt-5">
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">1</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">Choosing suitable drive schemes.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">2</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">Choosing proper energy storage systems.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">3</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">Identify communication protocols.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">4</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">Develop an electric propulsion unit.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">5</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">Analyze different power converter topologies.</p>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-primary-400">6</p>
                        <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-primary-900 bg-opacity-25 border border-primary-400">
                          <p className="text-sm md:text-base font-semibold text-primary-400">Design a EV system, component or process within constraints.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden md:flex w-24 flex-col items-center justify-between">
                    <p className="text-xs font-medium text-white">Not eligible for jobs in the domain</p>
                    <p className="flex text-xs text-gray-200 pt-2 items-center justify-center">The competency based curriculum enables learners to pick up competencies for industry skills</p>
                    <svg className="pt-4" width="2" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <line className="path" x1="0" y1="0" x2="0" y2="100%" stroke="#474D5C"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <p className="text-xs font-medium text-white">Industry grade <br/>salary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Free</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4 text-sm lg:text-lg">This program is created by a team of over a dozen people from across multiple companies, with support and funding from Micelio Mobility.</p>
                  <p className="text-sm md:text-base lg:text-lg">This enables us to offer full scholarships for up to  top 100 selected students who qualify for the programme.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Join a Community with a small group of students from across the country</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">Students in the programme  will have access to a Community on the Pupilfirst platform for discussions with the industry experts and with other students. Through these rich community interactions, you’ll also get to build relationships early on with a peer group who’ll go on to become industry leaders in the future.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Qualify as a Teaching Assistant.</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">If you are among the top performers in this course, you’ll stand a chance to engage future batches as a Teaching Assistant (TA). As a TA, you’ll be working closely with the industry experts and the Pupilfirst to meaningfully deliver learning for students in future batches.</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Schedule</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden divide-y divide-gray-700 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">March 10, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">- Application Opens</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">March 21, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">- Applications window ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-basetext-sm lg:text-base text-primary-400 lg:text-right">March 26, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-gray-200">- Announcement of selected students </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">April 02, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-white">- Program Begins</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">April 23, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-white">- Program Ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-400 lg:text-right">April 26, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8 text-white">- Course Conclusion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-700 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl text-white leading-tight ml-4 lg:mx-auto">Career Prospects for <br/>EV Engineers.</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">India has chalked a plan to aid its electric mobility mission by creating a specialised workforce. The blueprint aims at generating 10 million jobs in the future.</p>
                  <p className="text-sm md:text-base lg:text-lg">The government has initiated the National Electric Mobility Mission Plan in the year 2013 with an objective to put 6-7 million electric vehicles on Indian roads by 2020 and committing to achieving 30% e-mobility in the country by 2030.</p>
                  <p className="text-sm md:text-base lg:text-lg">The government's Automotive Mission Plan 2026 evaluates to create an additional 65 million jobs in the auto sector.</p>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h4 className="text-primary-400 text-xl lg:text-3xl font-bold">Questions?</h4>
                  <p className="text-white pt-2">Email us at
                    <a href="mailto:ev@pupilfirst.org" className={"text-primary-400 underline pl-2 tracking-wide font-medium"}>ev@pupilfirst.org</a>
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-400 border border-primary-400 p-6 lg:p-12">
                  <h4 className="text-xl lg:text-5xl font-extrabold text-center">Apply now for <br />EV Open Program</h4>
                  <div className="mt-4 flex justify-center">
                    <a className="block text-center px-10 font-semibold py-3 bg-gray-900 text-primary-400 border border-primary-400 rounded-md shadow-md hover:shadow-2xl hover:bg-primary-400 hover:text-gray-900 transition"
                      href="#">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </div >
  );
}
