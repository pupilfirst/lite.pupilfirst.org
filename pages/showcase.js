import Head from "next/head";

export default function Page() {
  return (
    <div>
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
          defer
          src="https://unpkg.com/img-comparison-slider@7/dist/index.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/img-comparison-slider@7/dist/styles.css"
        />
      </Head>
      <main className="bg-primary-50 mx-auto">
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
              <div className="flex gap-4">
                <img
                  className="w-24 md:w-36"
                  src="logos/pupilfirst-logo-primary.svg"
                  alt=""
                />
              </div>
            </div>
          </header>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto mt-8 py-4 px-4 xl:px-0 relative z-10">
            <img-comparison-slider hover="hover">
              <figure slot="first" className="img-comparison-slider__img-1">
                <img
                  className="rounded-2xl"
                  src="/showcase/NEP-2020-Vision.png"
                  width="100%"
                />
                <figcaption>NEP 2020 Vision</figcaption>
              </figure>
              <figure slot="second" className="img-comparison-slider__img-2">
                <img
                  className="rounded-2xl"
                  src="/showcase/NEP-2020-real-classroom.png"
                  width="100%"
                />
                <figcaption>NEP 2020 Real Classroom</figcaption>
              </figure>
            </img-comparison-slider>
            <div className="flex flex-col md:flex-row justify-between pt-1">
              <p className="md:w-3/5 text-sm text-gray-800">
                AICTE LITE Faculty Dr. Roopa Chandrika at Malla Reddy College of
                Engineering and Technology, <br />
                affiliated to JNTU-Hyderabad in Telangana.
              </p>
              <p className="text-xs text-gray-500 mt-2 md:mt-0">
                Photographed for Pupilfirst by Jinson Abraham.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
