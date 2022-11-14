import { useEffect } from "react";
import Head from "next/head";
import NavLink from "../components/NavLink";
import VideoCard from "../components/VideoCard";
import ModalUniversity from "../components/ModalUniversity";

export default function Page() {
  const highlightLink = (link) => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  };

  const highlightLinkOnScroll = () => {
    const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll(".nav-link");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );
          highlightLink(link);
        }
      });
    }, options);
    sections.forEach((section) => observer.observe(section));
  };

  useEffect(() => {
    highlightLinkOnScroll();
  }, []);

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
            <h1 className="font-bold  mx-auto text-center max-w-4xl text-6xl leading-tight text-gray-800">
              National Showcase of LITE Institutions & Faculty
            </h1>
            <div className="mt-12">
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
            </div>
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

        <section className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative">
          <div className="flex gap-5 my-8">
            <img
              src="/people/dr-leena-chandran.png"
              alt="Photograph of Dr Leena"
              className="rounded-lg h-56"
            />
            <div className="flex">
              <div>
                <svg
                  width="75"
                  height="54"
                  viewBox="0 0 75 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4341 9.02441L22.5845 4.82764C17.5483 8.12288 13.1961 12.9103 9.52783 19.1899C5.92171 25.4074 4.11865 31.4383 4.11865 37.2827C4.11865 41.7593 5.29997 44.9924 7.6626 46.9819C10.0252 48.9093 12.9785 49.873 16.5225 49.873C19.569 49.873 22.1493 48.6917 24.2632 46.3291C26.3771 43.9665 27.4341 41.3241 27.4341 38.4019C27.4341 31.0031 23.4238 27.3037 15.4033 27.3037L15.0303 26.7441C16.2738 20.5889 20.4084 14.6823 27.4341 9.02441ZM61.9409 9.02441L57.1846 4.82764C52.0863 8.12288 47.703 12.9103 44.0347 19.1899C40.4285 25.4074 38.6255 31.4383 38.6255 37.2827C38.6255 41.7593 39.8068 44.9924 42.1694 46.9819C44.5321 48.9093 47.5164 49.873 51.1226 49.873C54.1691 49.873 56.7183 48.6917 58.77 46.3291C60.884 43.9665 61.9409 41.3241 61.9409 38.4019C61.9409 31.0031 57.9307 27.3037 49.9102 27.3037L49.5371 26.7441C50.8428 20.651 54.9774 14.7445 61.9409 9.02441ZM29.4858 0.0712891L39.8379 9.02441C32.8122 14.9932 28.3356 19.9671 26.4082 23.9463C30.8848 24.4437 34.0246 26.34 35.8276 29.6353C37.3198 24.0396 40.0555 18.506 44.0347 13.0347C48.076 7.56331 52.5215 3.24219 57.3711 0.0712891H64.0859L74.3447 9.02441C67.3812 14.9932 62.9357 19.9671 61.0083 23.9463C68.6558 25.0654 72.4795 29.884 72.4795 38.4019C72.4795 42.6297 70.6764 46.2358 67.0703 49.2202C63.5264 52.2046 58.2104 53.6968 51.1226 53.6968C43.5994 53.6968 38.6255 50.8989 36.2007 45.3032C33.5272 50.8989 26.9678 53.6968 16.5225 53.6968C11.7972 53.6968 7.9113 52.3911 4.86475 49.7798C1.8182 47.1685 0.294922 43.0028 0.294922 37.2827C0.294922 30.9409 2.50212 24.1328 6.9165 16.8584C11.3931 9.58398 16.709 3.98828 22.8643 0.0712891H29.4858Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </div>
              <div className="-ml-4 flex flex-col justify-between">
                <p className="font-semibold text-2xl text-gray-600">
                  NEP 2020 is a discontinuous jump to the future of classroom
                  education. Instead of incremental innovations, we need a
                  paradigm shift, and LITE institutions are the pioneers in
                  bringing the transformative vision of NEP 2020 to life.
                </p>
                <div>
                  <p className="font-bold">Dr Leena Chandran Wadia</p>
                  <p>
                    NEP 2019 Drafting Committee Member <br /> Co-Principal
                    Investigator, AICTE LITE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative">
          <div className="flex gap-5">
            <VideoCard
              title="NEP 2020 Vision"
              description="Watch 1:50 minute Video"
              thumbnail="/showcase/NEP-2020-Vision.png"
              videoTitle="AICTE Leadership in Teaching Excellence (LITE) - Transformation of Classrooms to NEP 2020 Learner Centered Pedagogy"
              VimeoVideoId="760206777"
            />
            <VideoCard
              title="NEP 2020 Processes"
              description="Watch 55 Seconds Video"
              thumbnail="/showcase/NEP-2020-Vision.png"
              videoTitle="Learner-Centered-Classsroom-Framework-Video"
              VimeoVideoId="768136345"
            />
          </div>
        </section>
        <section className="border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative">
            <h2 className="text-6xl w-11/12 text-center mx-auto my-12">
              Introducing AICTE's Brand Ambassadors of Change
            </h2>
          </div>
          <div className="bg-white sticky top-0 z-40">
            <div className="max-w-6xl 2xl:max-w-7xl overflow-x-scroll mx-auto px-4 xl:px-0 flex items-center justify-between">
              <NavLink
                title="Model University"
                description="AICTE LITE - NEP 2020"
                href="#modal-university"
                isActive={true}
              />
              <NavLink
                title="Model Institute & Leadership"
                description="AICTE LITE - NEP 2020"
                href="#modal-institute"
              />
              <NavLink
                title="Model Faculty Members"
                description="AICTE LITE - NEP 2020"
                href="#modal-faculty"
              />
              <NavLink
                title="Model Students"
                description="AICTE LITE - NEP 2020"
                href="#modal-students"
              />
            </div>
          </div>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative">
            <div id="modal-university" className="section">
              <ModalUniversity />
            </div>
            <div id="modal-institute" className="section bg-green-300"></div>
            <div id="modal-faculty" className="section"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
