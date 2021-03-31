import Head from "next/head";

function ImageWithDescription({ name, caption, role, imgSrc }) {
  return (
    <div>
      <div className="rounded-lg overflow-hidden border-4 border-primary-400 w-5/6 md:w-auto ">
        <img src={imgSrc} alt={caption} className="block w-full object-cover md:object-contain" />
      </div>
      <h4 className={"text-lg pt-2"}>{name}</h4>
      <p className={"text-sm text-gray-600 leading-tight pt-1"}>
        {caption}
      </p>
      <p className="text-sm leading-snug italic mt-3">{role}</p>
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
      <main className="bg-primary-50 mx-auto">
        <section className="hero__bg-pattern relative">
          <div class="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0">
            <img class="h-full w-full object-cover" src="hero/hero-bg.webp" alt="People working on laptops"/>
          </div>
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img className="block w-20 md:w-28" src="logos/LITE-logo.svg" />
              <img className="w-16 md:w-24" src="logos/aicte-logo.png" />
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
            <div className="w-full mx-auto md:w-4/5 text-center relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-3 mt-4 ">
                <p className="font-medium text-sm text-primary-600">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-center text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl lg:py-4 font-extrabold">
                Leadership in <br/>Teaching Excellence
              </h1>
              <p className="max-w-3xl mx-auto text-center text-sm md:text-base lg:text-xl pt-2">AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip one hundred institutions with leadership in teaching excellence.</p>

              <div className="pt-4 md:pt-8">
                <a
                  className="inline-block w-full md:w-64 p-3 text-white text-center bg-gradient-to-r from-yellow-500 to-primary-500 border font-semibold rounded-md shadow-lg hover:shadow-2xl hover:bg-primary-500 hover:to-primary-600 transition"
                  href="#">Apply Now</a>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-4 xl:mx-0 pb-10 md:pb-16">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-secondary-400 relative shadow-lg max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="flex space-y-4 md:space-y-0 md:space-x-12 flex-col md:flex-row justify-between">
              <div className="md:w-8/12 p-4 lg:p-10">
                <h2 className="text-xl md:text-3xl">In partnership with Pupilfirst</h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg">Pupilfirst is a founding member of National Educational Alliance for Technology (NEAT) programme of the Ministry of Education, that is implemented by AICTE.</p>
                <p className="mt-4 text-sm md:text-base lg:text-lg">Pupilfirst’s mission is to enable teachers to transform classroom education to a learner centered model and achieve near 100% learning outcomes.</p>
                <p className="mt-4">Learn More at: <a className="text-secondary-400 font-semibold" target="_blank" href="https://pupilfirst.org/">https://pupilfirst.org/</a> and <a className="text-secondary-400 font-semibold" target="_blank" href="https://neat.aicte-india.org/">https://neat.aicte-india.org/</a></p>
              </div>
              <div className="md:w-4/12 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-secondary-500 to-secondary-600">
                <div className="pb-4">
                  <img className="w-64 object-contain" src="logos/pupilfirst-logo-white.svg" alt="Pupilfirst" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-7 2xl:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <div className="heading-with-leftborder">
                      <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-snug lg:ml-28 2xl:ml-44 pl-4">Everything you<br /> need to know</h2>
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">What is this program?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">Industry-led introductory course in Electric Vehicles (EV) for undergraduate students pursuing engineering degrees in India.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Why?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">To give undergraduate students an overview of the Electric Vehicle ecosystem to help them decide if they wish to build a career in it.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Who is this for?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">Students who are at least 18 years old and no older than 25 years old and pursuing engineering undergraduate degree at an higher education institution in India.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">When?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">April 2, 2021 - April 26, 2021</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Effort?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">25 hours of highly enjoyable study & tasks over the course of 3 weeks.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Format?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">Self-paced learning via task around text and video tutorials</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Mentorship?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">AMAs with industry veterans and a dedicated Q&amp;A forum.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Certificate?</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">Yes. Upon successful completion of the program, students will  receive a certificate.</p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-3xl text-secondary-500 font-semibold">Cost</h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">Free</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="bg-gradient-to-br from-white to-gray-100 rounded-r md:rounded-lg border border-gray-100 relative shadow-md">
                      <div className="flex space-x-2 px-2 md:px-4 lg:px-5 2xl:px-6 py-4 border-b border-gray-200">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="p-2 md:p-4 lg:p-5 2xl:p-6">
                        <p className="text-xl font-semibold leading-tight">Leadership in Teaching Excellence (LITE)</p>
                        <p className="text-xs mt-4 text-gray-500">Important Dates</p>
                        <div className="text-xs md:text-sm mt-2 space-y-3">
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-secondary-500">Mar 10, 2021</p>
                            <p className="col-span-5 ">- Application Opens</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-secondary-500">Mar 21, 2021</p>
                            <p className="col-span-5 ">- Applications window ends</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-secondary-500">Mar 26, 2021</p>
                            <p className="col-span-5 ">- Announcement of selected students </p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-secondary-500">Apr 02, 2021</p>
                            <p className="col-span-5 ">- Program Begins</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-secondary-500">Apr 23, 2021</p>
                            <p className="col-span-5 ">- Program Ends</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 md:gap-3">
                            <p className="col-span-2 text-secondary-500">Apr 26, 2021</p>
                            <p className="col-span-5 ">- Course Conclusion</p>
                          </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                            <a className="block px-10 py-3 text-center text-white bg-gradient-to-r from-yellow-500 to-primary-500 border font-semibold rounded-md shadow-lg hover:shadow-xl hover:bg-primary-500 hover:to-primary-600 transition" href="#">Apply Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 bg-opacity-75 border-t border-b border-gray-200 mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">Gain Teaching Excellence</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-2xl">
                  <p className="text-sm md:text-base lg:text-lg mt-4">Selected Institutions and faculty shall gain leadership in teaching excellence on four key NEP 2020 goals.</p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0 pb-10 lg:pb-16">
                <div className="grid grid-cols-12 gap-3 lg:gap-6 mt-6 lg:mt-10">
                  <div className="relative col-span-2 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                    <p className="flex whitespace-nowrap text-base lg:text-2xl font-bold text-secondary-500 items-center justify-center absolute inset-0 transform -rotate-90">NEP 2020 GOALS</p>
                  </div>
                  <div className="col-span-10 grid gap-y-4 md:gap-y-8">
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">1</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">Enabling a learner centered model of teaching-learning.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">2</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">Delivering competency based curriculums for highly paid global tech skills.</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">3</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">Transformation of assessments from summative to formative (continuous).</p>
                      </div>
                    </div>
                    <div className="col-span-10 flex">
                      <p className="w-4 md:w-8 flex items-center text-base md:text-xl font-semibold text-secondary-500">4</p>
                      <div className="flex-1 p-3 md:p-4 lg:px-4 md:py-6 rounded-lg bg-gradient-to-br from-white to-primary-50 border border-primary-400 shadow-md">
                        <p className="text-sm md:text-base font-semibold text-secondary-500">Identifying gifted school students to gain direct admission to Universities.</p>
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
            <div className="border-l border-gray-200 mx-4 xl:mx-0 pt-10 lg:pt-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">Advanced Industry Curriculum Approved by AICTE</h2>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-2xl space-y-6 ">
                  <p className="mt-4 text-sm lg:text-lg">Most modern programming languages widely used in the industry are converging towards this paradigm by adopting its features like types, discriminated unions, and immutable programming.</p>
                  <p className="mt-4 text-sm lg:text-lg">AICTE expert committee has approved the curriculum created jointly by Pupilfirst and Freshworks that enables institutions to offer advanced web development courses using typed functional programming.</p>
                  <p className="mt-4 text-sm lg:text-lg">In our knowledge, courses on functional programming are currently taught in India at IIT-Madras, IIT-Bombay, IIT-Kanpur and IIT-Mandi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0 py-10 lg:py-16">
              <div className="heading-with-leftborder">
                <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">Beginner to advanced courses</h2>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-4xl mt-4">
                  <p className=" text-sm md:text-base lg:text-lg">This programme is designed with 3 courses such that selected institutions can offer a 20 credit “Minor Degree in Advanced Web Development” through their trained faculty to students.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-white to-gray-100 border border-primary-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-primary-400 text-xl md:text-2xl font-bold">WD 101</p>
                    <p className="text-sm md:text-base leading-snug mt-1"><span className="font-semibold">Beginner</span> - Getting started with Javascript (WD 101).</p>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-100 border border-secondary-400 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-secondary-400 text-xl md:text-2xl font-bold">WD 201</p>
                    <p className="text-sm md:text-base leading-snug mt-1"><span className="font-semibold">Intermediate</span> - Server-side programming with Ruby on Rails.</p>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-100 border border-green-500 rounded-lg shadow-md p-3 md:p-4">
                    <p className="text-green-500 text-xl md:text-2xl font-bold">WD 301</p>
                    <p className="text-sm md:text-base leading-snug mt-1"><span className="font-semibold">Advanced</span> - Typed Functional programming with ReScript.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 bg-opacity-75 border-t border-b border-gray-200 mx-auto relative">
          <div className=" max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">Delivered by <br/> Industry Experts and TAs</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="max-w-3xl ">
                  <p className="text-sm md:text-base lg:text-lg font-semibold mt-4">The training programme shall be hosted online at Pupilfirst platform and delivered by Hari Gopal, Prashant Reddy Koteru, Bellam Vamsi Krishna and Mamatha Yarramaneni.</p>
                  <p className="text-sm md:text-base lg:text-lg mt-4">Hari and Prashanth are industry experts while Vamsi and Mamatha will be the student TAs for this program to assist faculty in making this an enjoyable learning experience.</p>
                </div>
              </div>
              <svg className="absolute right-0 top-1/4 object-center" width="120" height="400" fill="none" viewBox="0 0 120 400">
                <defs>
                  <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-300" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="120" height="400" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
              </svg>
              <div className="max-w-4xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 lg:gap-12 py-12 lg:pb-16">
                  <ImageWithDescription name="Hari Gopal"
                    caption={<>
                      Chief Technology Officer, Pupilfirst</>}
                      role={<>
                      <span className="block pb-2 font-semibold">Course Author &amp; Coach</span> Hari is a full-stack software engineer with 11 years of experience and leads Pupilfirst, one of the largest open-source projects using ReScript, the language used to build Facebook.</> }
                    imgSrc="people/Swapnil-Mankame.png"
                  />
                  <ImageWithDescription name="Prashanth Reddy Koteru"
                    caption={<>
                      Coach-Web Development, Pupilfirst</>}
                      role={<>
                      <span className="block pb-2 font-semibold">Course Coach</span> Prashanth is a full-stack web developer and product engineer with five years of experience and an active evangelist in the indian developer community.</> }
                    imgSrc="people/Swapnil-Mankame.png"
                  />
                  <ImageWithDescription name="Bellam Vamsi Krishna"
                    caption={<>
                      Teaching Assistant, Pupilfirst</>}
                      role={<>
                      <span className="block pb-2 font-semibold">8<sup>th</sup> semester student, CSE SASTRA University.</span>
                      Vamsi has completed the WD 201 course at SASTRA University during July-December 2019 semester.
                      He was a Teaching Assistant (TAs) for the January-July 2020 Semester web development course at SASTRA University.</> }
                    imgSrc="people/Swapnil-Mankame.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">Schedule</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 relative shadow-lg divide-y divide-gray-200 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-500 lg:text-right">March 10, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8">- Application Opens</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-500 lg:text-right">March 21, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8">- Applications window ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-500 lg:text-right">March 26, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8">- Announcement of selected students </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-500 lg:text-right">April 02, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8">- Program Begins</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-500 lg:text-right">April 23, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8">- Program Ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-sm lg:text-base text-primary-500 lg:text-right">April 26, 2021</p>
                    <p className="col-span-9 text-sm lg:text-base ml-4 md:ml-8">- Course Conclusion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:mx-auto">Your Institution as AICTE’s Brand Ambassador of Change</h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 ">
                  <p className="mt-4 text-sm md:text-base lg:text-lg">To prepare the next generation of indian students to bring advanced levels of skills to the industry, we have to bring our academic curriculum and teacher training from playing catchup to industry to be in front-lines of fundamental improvements in computing.</p>
                  <p className="text-sm md:text-base lg:text-lg">AICTE is looking to directly work with visionary institutions that also share the goal to create a paradigm shift in classroom teaching-learning methodologies using educational technology, deploy advanced curriculums and create high quality learning outcomes for students.</p>
                  <p className="text-sm md:text-base lg:text-lg">Heads of institutions who share this dream of AICTE are invited to apply for the leadership in teaching excellence (LITE) program.</p>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h4 className="text-secondary-500 text-xl lg:text-3xl font-bold">Questions?</h4>
                  <p className=" pt-2">Email Col. Venkat, Director, Faculty Development Cell (AICTE) at
                    <a href="mailto:director.fdc@aicte-india.org" className={"text-primary-400 underline pl-2 tracking-wide font-medium"}>director.fdc@aicte-india.org</a>
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12">
                  <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">Apply now for <br/>AICTE  Leadership in <br/>Teaching Excellence Program</h4>
                  <div className="mt-4 flex justify-center">
                    <a className="block text-center px-10 font-semibold py-3 bg-white text-primary-600 border border-primary-400 rounded-md shadow-md hover:shadow-2xl hover:bg-primary-100 hover:text-primary-700 transition"
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
