import Head from "next/head";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Leadership in Teaching Excellence (LITE)</title>
        <meta
          name="description"
          content="AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence."
        ></meta>
        <meta
          name="keywords"
          content="Employment for Students, AICTE guided industry training for faculty, Recognition for Institute, Proven Online Teaching-Learning method as per NEP 2020, Internship with Covid19 Digital War Rooms."
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
          content="AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence."
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
        <meta name="AICTE’s Leadership in Teaching Excellence (LITE) is a national programme to equip 50 colleges and 50 schools with leadership in teaching excellence." />

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
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img
                className="block w-20 md:w-28"
                src="logos/LITE-logo.svg"
                alt="Logo of Leadership in Teaching Excellence (LITE)national programme."
              />
              <img
                className="w-16 md:w-24"
                src="logos/aicte-logo.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
            <div className="w-full md:w-1/2 relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-3 mt-4 ">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-3xl md:text-4xl lg:pt-4 font-extrabold md:leading-tight">
                AICTE is pleased to announce the List of Selected Institutions
                for Leadership in Teaching Excellence (LITE) program.
              </h1>
              <p className="max-w-4xl mx-auto text-sm md:text-base pt-4">
                The Chairman, Vice Chairman, Member Secretary of AICTE has
                reviewed the applications received from across the country for
                the first batch of LITE programme. 474 Academic Institutions
                have applied out of which 255 institutions fulfill the selection
                criteria are from 22 States/UT. 50 Institutions have now been
                selected for this first batch roll out for the AY 2021-22 along
                with 85 institutions in the Reserve List.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative z-10">
              <img
                className="object-contain absolute w-[762px] h-[918px] top-[-325px]"
                src="hero/stats-map.svg"
                alt="LITE - hero background image"
              />
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

        <section className="relative border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="hidden lg:block lg:col-span-3 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="bg-gradient-to-br from-white to-gray-100 rounded-r md:rounded-lg border border-gray-100 relative shadow-md">
                      <div className="p-2 md:p-4 lg:p-5 2xl:p-6"></div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-9 2xl:col-span-8">
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        What is this program?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        AICTE and Industry led specialised leadership training
                        for teachers from computer science and allied
                        departments, to teach a minor degree programme in Web
                        Development and skill their students using{" "}
                        <span className="italic">
                          learner centered pedagogy, competency based curriculum
                          and continuous assessments and professional
                          development of faculty.
                        </span>
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Why?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        To equip academic institutions with teaching excellence
                        in software industry standards and become an
                        aspirational benchmark for other academic institutions
                        across the country.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Who is this for?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Universities and AICTE affiliated Institutions with
                        visionary heads of institutions and committed faculty
                        from computer science and allied departments who can
                        create transformational changes as envisioned by NEP
                        2020.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        When?
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Selected institutions shall sign MoUs and start faculty
                        training under AICTE guidance from June 30 2021.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Effort by Higher Educational Institutions
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Approving 20 credit “Minor in Advanced Web Development”
                        program into academic curriculum for Academic Year
                        2021-22 onwards.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Effort by Faculty
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        30 hours of highly enjoyable study spread across 45 days
                        followed by continuous learning of 30 hours through the
                        next semester.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Format
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Self-paced learning with personalised feedback from
                        industry coaches.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Assessment
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Teachers shall see diagnostic and formative assessments
                        happen to them exactly the same way they would be
                        assessing the students in future.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Certificate for Faculty
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Yes. Upon successful completion of training, both
                        institutions and teachers shall receive joint
                        certification from AICTE and Industry.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Complete Support for Course Delivery to students
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Faculty shall receive end to end support for integrating
                        the course including conducting student awareness
                        sessions, student selection process, student onboarding,
                        course delivery, continuous assessments, final
                        evaluation and graduation support for internships or
                        entrepreneurship.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        National Recognition for Institutions
                      </h3>
                      <p className="ml-8 pt-1 text-sm lg:text-lg ">
                        Selected institutions whose trained faculty integrate
                        the minor programme for its students shall be recognised
                        by AICTE as Institutions with Leadership in Teaching
                        Excellence.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-500 font-semibold">
                        Cost for Students and Faculty?
                      </h3>
                      <div className="ml-8 pt-1 text-sm lg:text-lg ">
                        <p>AICTE approved fees for students.</p>
                        <p>Full Scholarship for Faculty.</p>
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
            <div className="border-l border-gray-200 mx-4 xl:mx-0">
              <div className="max-w-4xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-primary-500 border border-primary-400 shadow-xl p-6 lg:p-12">
                  <h4 className="text-xl lg:text-4xl text-white font-extrabold text-center">
                    Apply now for <br />
                    AICTE Leadership in <br />
                    Teaching Excellence Program
                  </h4>
                  <div className="mt-4 flex justify-center">
                    <div className="block text-center px-10 font-semibold py-3 bg-white text-primary-800 border border-primary-400 rounded-md shadow-md">
                      Application Closed
                    </div>
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
