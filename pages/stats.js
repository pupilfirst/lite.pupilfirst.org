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
          <div className="relative max-w-6xl 2xl:max-w-7xl flex flex-col xl:flex-row justify-between mx-auto pb-8 md:pb-16 px-4 xl:px-0">
            <div className="w-full xl:w-5/12 relative z-10">
              <div className="inline-block rounded bg-primary-100 py-1 px-3 mt-4">
                <p className="font-medium text-sm text-primary-800">
                  All India Council for Technical Education.
                </p>
              </div>
              <h1 className="hero__title-gradient text-lg md:text-3xl lg:pt-4 font-extrabold md:leading-tight">
                AICTE is pleased to announce the List of Selected Institutions
                for Leadership in Teaching Excellence (LITE) program.
              </h1>
              <div className="text-sm md:text-base">
                <p className="pt-4">
                  The Chairman, Vice Chairman, Member Secretary of AICTE has
                  reviewed the applications received from across the country for
                  the first batch of LITE programme. 495 Academic Institutions
                  have applied out of which 132 Institutions across 22 States
                  qualify the selection criteria.
                </p>
                <p className="pt-2">
                  All qualified institutions may download the AICTE Welcome Kit
                  and follow instructions to send back the signed and scanned
                  copy of MOU by the Head of Institute to AICTE before
                  <strong>
                    &nbsp;28<sup>th</sup> June 2021
                  </strong>
                  .
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-8">
                <div className="bg-primary-100 bg-opacity-50 border border-primary-300 rounded-lg px-3 py-6 text-center">
                  <p className="text-3xl text-primary-500 font-bold">28</p>
                  <p className="text-sm font-medium">States/UT Applied</p>
                </div>
                <div className="bg-primary-100 bg-opacity-50 border border-primary-300 rounded-lg px-3 py-6 text-center">
                  <p className="text-3xl text-primary-500 font-bold">26</p>
                  <p className="text-sm font-medium">States/UT Qualified</p>
                </div>
                <div className="bg-secondary-100 bg-opacity-50 border border-secondary-300 rounded-lg px-3 py-6 text-center">
                  <p className="text-3xl text-secondary-500 font-bold">475</p>
                  <p className="text-sm font-medium">Institutes Applied</p>
                </div>
                <div className="bg-secondary-100 bg-opacity-50 border border-secondary-300 rounded-lg px-3 py-6 text-center">
                  <p className="text-3xl text-secondary-500 font-bold">255</p>
                  <p className="text-sm font-medium">Institutes Qualified</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex relative mx-auto w-max min-h-full z-10">
              <img
                className="min-h-full w-[44rem] object-fill"
                src="hero/stats-map.svg"
                alt="LITE - hero background image"
              />
              <div className="tooltip tooltip-right left-[36%] bottom-[11%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Tamil Nadu</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">92</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">62</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[41%] bottom-[16%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Puducherry</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">2</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[30%] bottom-[9%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Kerala</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">24</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">9</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[28%] bottom-[23%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Karnataka</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">53</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">30</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[38%] bottom-[23%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">
                    Andhra Pradesh
                  </p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">55</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">27</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[38%] bottom-[33%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Telangana</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">31</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">15</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[23%] bottom-[27%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Goa</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">2</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[28%] bottom-[38%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Maharashtra</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">59</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">34</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[18%] top-[44%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Gujarat</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">22</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">7</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[23%] top-[34%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Rajasthan</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">9</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">6</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[30%] top-[25%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Haryana</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">7</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">3</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[34%] top-[28%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">New Delhi</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">6</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">2</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[29%] top-[20%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Punjab</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">9</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">6</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[40%] top-[23%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Uttarakhand</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">6</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">3</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[33%] top-[21%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Chandigarh</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">3</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right left-[44%] top-[34%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Uttar Pradesh</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">23</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">14</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[37%] top-[45%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">
                    Madhya Pradesh
                  </p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">22</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">10</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right right-[47%] bottom-[45%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Chhattisgarh</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">5</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">2</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right right-[38%] bottom-[43%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Odisha</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">17</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">7</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right right-[30%] top-[44%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">West Bengal</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">12</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">5</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left right-[38%] top-[44%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Jharkhand</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">1</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-right right-[36%] top-[36%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Bihar</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">3</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left right-[29%] top-[30%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Sikkim</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">1</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left right-[18%] top-[33%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Assam</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">5</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">4</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left right-[12%] top-[38%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">Manipur</p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">1</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">1</span>
                    </p>
                  </div>
                </span>
              </div>

              <div className="tooltip tooltip-left left-[28%] top-[11%]">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm ring ring-secondary-400 ring-offset-1 bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-2 w-2 bg-primary-400 ring ring-secondary-400 ring-offset-2"></span>
                </span>
                <span className="tooltip-content">
                  <p className="text-sm font-medium px-3 py-2">
                    Jammu &amp; Kashmir (UT)
                  </p>
                  <div className="bg-secondary-200 bg-opacity-20 px-3 py-1.5 rounded-b-lg">
                    <p className="text-sm">
                      Applied: <span className="font-semibold">2</span>
                    </p>
                    <p className="text-sm">
                      Qualified: <span className="font-semibold">2</span>
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 md:inset-x-0 md:top-8 2xl:inset-0 z-0">
            <img
              className="h-full w-full object-cover relative"
              src="hero/stats-hero-bg.png"
              alt="LITE - hero background image"
            />
          </div>
        </section>

        <section className="relative border-t border-gray-200">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="hidden lg:block lg:col-span-3 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 md:ml-0">
                    <div className="relative">
                      <div className="space-y-4">
                        <a
                          className="flex items-center space-x-3 p-4 text-sm font-medium bg-primary-200 bg-opacity-50 text-secondary-600 rounded-lg hover:bg-primary-100 transition"
                          href="#overall-application-stats"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-5 h-5"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                          </svg>
                          <p>Overall Application Stats</p>
                        </a>
                        <a
                          className="flex items-center space-x-3 p-3 text-sm font-medium hover:bg-primary-100 bg-opacity-40 rounded-lg transition"
                          href="#selected-institutions"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-5 h-5 text-gray-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                          </svg>
                          <p>List of Selected Institutions</p>
                        </a>
                        <a
                          className="flex items-center space-x-3 p-3 text-sm font-medium hover:bg-primary-100 bg-opacity-40 rounded-lg transition"
                          href="#welcome-kit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-5 h-5 text-gray-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z" />
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1z" />
                          </svg>
                          <p>Welcome Kit</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-9 2xl:col-span-8">
                  <div className="pt-10">
                    <h3
                      id="overall-application-stats"
                      className="text-xl lg:text-2xl text-secondary-500 font-semibold"
                    >
                      Overall Application Stats
                    </h3>
                    <p className="pt-2 text-sm lg:text-lg">
                      AICTE is gratified and pleased that there is
                      representation from all categories of Institutions from
                      Institute of Eminence, Central University, State
                      University, Private University, Deemed to be University,
                      Autonomous, Affiliated and Stand-Alone Institutions are
                      represented.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 pt-8">
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Institute of Eminence
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">1</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Central University
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">1</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        State University
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">21</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">8</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Private University
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">24</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">13</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Deemed/Deemed to-be University
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">27</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">20</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Autonomous College
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">
                            111
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">68</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Affiliated College to University
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">
                            269
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">
                            133
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        Standalone Institution
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">3</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white grid grid-rows-2 rounded-xl shadow">
                      <p className="px-4 flex items-center text-lg font-semibold leading-tight text-secondary-600">
                        PolyTechnic Institutions
                      </p>
                      <div className="grid grid-cols-2 bg-gray-100 bg-opacity-75 rounded-b-xl p-4">
                        <div>
                          <p className="text-gray-800">Applied:</p>
                          <p className="text-2xl text-gray-600 font-bold">18</p>
                        </div>
                        <div>
                          <p className="text-gray-800">Qualified:</p>
                          <p className="text-2xl text-gray-600 font-bold">8</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12">
                    <h3
                      id="selected-institutions"
                      className="text-xl lg:text-2xl text-secondary-500 font-semibold"
                    >
                      List of Selected Institutions
                    </h3>
                    <p className="pt-2 text-sm lg:text-lg">
                      The list of selected institutions selected for Academic
                      Year 2021-22 along with names of two faculty members from
                      the institute are published. Training would be given for
                      both the faculty members and performance and successful
                      course completion will decide on final faculty selection
                      as the “Faculty Coordinator” for the course along with the
                      Head of Institute.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-right italic">
                      Arranged In alphabetical order.
                    </p>
                    <div class="overflow-x-auto">
                      <div class="py-2 align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr className="text-left divide-x divide-primary-300 bg-gradient-to-r from-secondary-500 to-primary-500 whitespace-pre">
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                                >
                                  Sl
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                                >
                                  Name of Institute
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                                >
                                  Type
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                                >
                                  Names of Faculty
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-primary-50 text-xs uppercase tracking-wide"
                                >
                                  State
                                </th>
                              </tr>
                            </thead>
                            <tbody className="border bg-white divide-y divide-gray-200">
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                              <tr className="divide-x divide-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">
                                  Indira Gandhi Technical University for Women
                                </td>
                                <td className="px-4 py-2">University</td>
                                <td className="px-4 py-2">
                                  <ol className="list-disc list-inside">
                                    <li>Mrs Nancy James</li>
                                    <li>Mrs Thomas Varghese</li>
                                  </ol>
                                </td>
                                <td className="px-4 py-2">Delhi</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12">
                    <h3
                      id="welcome-kit"
                      className="text-xl lg:text-2xl text-secondary-500 font-semibold"
                    >
                      Welcome KIT
                    </h3>
                    <p className="pt-2 text-sm lg:text-lg">
                      The welcome kit for leadership in heads of institutions of
                      selected and qualified institutions containing
                      instructions on next steps can be downloaded here.
                    </p>
                    <button className="mt-4 px-4 py-3 flex items-center space-x-2.5 bg-gradient-to-br from-yellow-500 to-primary-600 text-white font-semibold rounded-lg shadow transition hover:shadow-xl ">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-6 h-6"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z" />
                          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1z" />
                        </svg>
                      </div>
                      <p>Download Welcome Kit</p>
                    </button>
                  </div>
                  <div className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12">
                    <div className="bg-primary-100 rounded-lg">
                      <div className="p-6">
                        <h3 className="text-xl lg:text-2xl text-secondary-500 font-semibold">
                          Questions?
                        </h3>
                        <p className="pt-2">
                          Email{" "}
                          <span className="font-medium"> Col. B. Venkat,</span>{" "}
                          Director, Faculty Development Cell (AICTE) at
                          <a
                            href="mailto:director.fdc@aicte-india.org"
                            className={
                              "text-secondary-600 underline pl-1 tracking-wide font-medium"
                            }
                          >
                            director.fdc@aicte-india.org
                          </a>{" "}
                          <br />
                          with cc to
                          <a
                            href="mailto:wd@pupilfirst.org"
                            className={
                              "text-secondary-600 underline pl-1 tracking-wide font-medium"
                            }
                          >
                            wd@pupilfirst.org
                          </a>
                        </p>
                      </div>
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
