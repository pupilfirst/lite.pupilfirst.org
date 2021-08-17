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
          <header className=" max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center">
              <a className="block" href="/">
                <img
                  className="block w-20 md:w-28"
                  src="logos/LITE-logo.svg"
                  alt="Logo of Leadership in Teaching Excellence (LITE)national programme."
                />
              </a>
              <img
                className="w-16 md:w-24"
                src="logos/aicte-logo.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
          </header>
          <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-0">
            <div className="text-center mx-auto pb-10 md:pb-24">
              <h1 className="hero__title-gradient text-lg md:text-6xl text-center lg:pt-4 font-extrabold md:leading-tight">
                AICTE LITE Batch #1
              </h1>
              <div className="text-sm md:text-lg max-w-xl text-center mx-auto">
                <p className="pt-4">
                  475 Academic Institutions from 28 states applied for the LITE
                  program. From this group, 136 Institutions across 22 States
                  have qualified the selection process provisionally.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
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
              <section className="pt-10">
                <div>
                  <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                    50 Institutions
                  </h3>
                  <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                    AICTE is gratified and pleased that there is representation
                    from all categories of Institutions from Institute of
                    Eminence, Central University, State University, Private
                    University, Deemed to be University, Autonomous, Affiliated
                    and Stand-Alone Institutions are represented.
                  </p>
                </div>
                <div className="">
                  <img
                    className="h-full w-full object-cover relative"
                    src="stats-map/first-batch-states.png"
                    alt="LITE - hero background image"
                  />
                </div>
              </section>
              <section
                id="selected-institutions"
                className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12"
              >
                <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                  List of 50 Selected Institutions
                </h3>
                <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                  The list of institutions selected on a provisional basis for
                  the Academic Year 2021-22 along with names of two faculty
                  members from the institute are published. Training would be
                  given for both the faculty members and performance and
                  successful course completion will decide on final faculty
                  selection as the “Faculty Coordinator” for the course along
                  with the Head of Institute.
                </p>

                <div className="mt-4">
                  <p className="text-xs text-right italic">
                    Arranged as per category of institutions following state
                    wise alphabetical order.
                  </p>
                  <div className="overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full">
                      <div className="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
                        <table className="tabel-auto divide-y divide-gray-200">
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
                          <tbody className="border bg-white divide-y divide-gray-200 text-sm">
                            <tr>
                              <td
                                className="px-3 py-1 bg-green-200 text-green-800 font-medium"
                                colSpan="5"
                              >
                                34 Universities and Autonomous Colleges have the
                                maximum flexibility to integrate Minor Degree
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">1</td>
                              <td className="px-4 py-2 font-medium">
                                VIT Vellore
                              </td>
                              <td className="px-4 py-2">
                                Institute of Eminence
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Radhakrishnan Delhibabu</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">2</td>
                              <td className="px-4 py-2 font-medium">
                                J. C. Bose University of Science and Technology,
                                YMCA, Faridabad
                              </td>
                              <td className="px-4 py-2">State University</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Amita Arora</li>
                                  <li>Payal Gulati</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Haryana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">3</td>
                              <td className="px-4 py-2 font-medium">
                                Indira Gandhi Delhi Technical University for
                                Women, Kashmere Gate
                              </td>
                              <td className="px-4 py-2">State University</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. (Mrs.) Amita Dev</li>
                                  <li>Ms Charu Gupta</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                New Delhi
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">4</td>
                              <td className="px-4 py-2 font-medium">
                                Manav Rachna International Institute of Research
                                and Studies, Faridabad
                              </td>
                              <td className="px-4 py-2">
                                Deemed/Deemed to-be University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Suresh Kumar</li>
                                  <li>Dr. Poonam Tanwar</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Haryana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">5</td>
                              <td className="px-4 py-2 font-medium">
                                Bharath Institute of Higher Education and
                                Research
                              </td>
                              <td className="px-4 py-2">
                                Deemed/Deemed to-be University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Ramesh kumar K</li>
                                  <li>Dr. Anitha Karthi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">6</td>
                              <td className="px-4 py-2 font-medium">
                                Noorul Islam Centre for Higher Education
                              </td>
                              <td className="px-4 py-2">
                                Deemed/Deemed to-be University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>R Chitra</li>
                                  <li>Dr. J.R Jeba</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">7</td>
                              <td className="px-4 py-2 font-medium">
                                University of Engineering and Management, Jaipur
                              </td>
                              <td className="px-4 py-2">Private University</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Saroj Kumar</li>
                                  <li>Krishnendu Kundu</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Rajasthan
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">8</td>
                              <td className="px-4 py-2 font-medium">
                                Marwadi University, Rajkot
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Damodharan Palaniappan</li>
                                  <li>Tejas Chauhan</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Gujarat
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">9</td>
                              <td className="px-4 py-2 font-medium">
                                Godavari Institute of Engineering and
                                Technology, Rajahmundry
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Shrija Madhu</li>
                                  <li>R Tamilkodi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">10</td>
                              <td className="px-4 py-2 font-medium">
                                Raghu Engineering College, Visakhapatnam
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Bhavani Sankar Panda</li>
                                  <li>S Satyanarayana</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">11</td>
                              <td className="px-4 py-2 font-medium">
                                Raghu Institute of Technology, Visakhapatnam
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. K N Brahmaji Rao</li>
                                  <li>Bhamidipati Ravi Teja</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">12</td>
                              <td className="px-4 py-2 font-medium">
                                Sri Venkateswara College of Engineering and
                                Technology, Chittoor
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Padavala Sai Prasad</li>
                                  <li>Dr. Velmurugan J</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">13</td>
                              <td className="px-4 py-2 font-medium">
                                Shri Shankaracharya Technical Campus (SSTC),
                                Bhilai
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Madhuri Gupta</li>
                                  <li>Neha Taori</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Chandigarh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">14</td>
                              <td className="px-4 py-2 font-medium">
                                BMS Institute of Technology &amp; Management,
                                Bengaluru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Arunakumari B N</li>
                                  <li>Dr. Veena N</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">15</td>
                              <td className="px-4 py-2 font-medium">
                                Siddaganga Institute of Technology, Tumkuru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Pramod TC</li>
                                  <li>Sushma S A</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">16</td>
                              <td className="px-4 py-2 font-medium">
                                St. Joseph Engineering College, Mangaluru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Sona Mundody</li>
                                  <li>Dr. Harivinod N</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">17</td>
                              <td className="px-4 py-2 font-medium">
                                Vidyavardhaka College of Engineering, Mysuru
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Hamsaveni M</li>
                                  <li>Shashank N</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Karnataka
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">18</td>
                              <td className="px-4 py-2 font-medium">
                                G H Raisoni College of Engineering, Nagpur
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Pranay Deepak Saraf</li>
                                  <li>Dipti Theng</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">19</td>
                              <td className="px-4 py-2 font-medium">
                                KIT's College of Engineering (Autonomous),
                                Kolhapur
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Bhagyashri Abhay Kelkar</li>
                                  <li>Sameer Bhimrao Patil</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">20</td>
                              <td className="px-4 py-2 font-medium">
                                Pimpri Chinchwad College of Engineering (PCCoE),
                                Pune
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Shailesh Hule</li>
                                  <li>Savita Ajay Kumbhare</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">21</td>
                              <td className="px-4 py-2 font-medium">
                                Excel Engineering College, Namakkal
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Ashokkumar L</li>
                                  <li>Dr. T Ravichandran</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">22</td>
                              <td className="px-4 py-2 font-medium">
                                Hindusthan College of Engineering and
                                Technology, Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Jayaraj R</li>
                                  <li>P Anitha</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">23</td>
                              <td className="px-4 py-2 font-medium">
                                Hindusthan Institute of Technology, Chennai
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Jameer Basha A</li>
                                  <li>Lokesh S</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">24</td>
                              <td className="px-4 py-2 font-medium">
                                K.S.Rangasamy College of Technology,
                                Tiruchengode
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Kanagaraju P</li>
                                  <li>S Madhavi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">25</td>
                              <td className="px-4 py-2 font-medium">
                                Kamaraj College of Engineering and Technology
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. R Arthy</li>
                                  <li>T Mahara Jothi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">26</td>
                              <td className="px-4 py-2 font-medium">
                                KPR Institute of Engineering and Technology,
                                Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>R Sivaramakrishnan</li>
                                  <li>Premkumar M</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">27</td>
                              <td className="px-4 py-2 font-medium">
                                R.M.K. Engineering College, Kavaraipettai
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. K Chidambarathanu</li>
                                  <li>Dr. B Prathusha Laxmi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">28</td>
                              <td className="px-4 py-2 font-medium">
                                SNS College of Technology, Coimbatore
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Sangeetha S</li>
                                  <li>V Savitha</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">29</td>
                              <td className="px-4 py-2 font-medium">
                                ACE Engineering College, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Pinagadi Venkateswara Rao</li>
                                  <li>Dr. M V Vijaya Saradhi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">30</td>
                              <td className="px-4 py-2 font-medium">
                                Chaitanya Bharathi Institute of Technology,
                                Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>S Durga Devi</li>
                                  <li>Srikanth R</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">31</td>
                              <td className="px-4 py-2 font-medium">
                                G.Narayanamma Institute of Technology and
                                Science For Women, JNTUH, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>M Lalitha</li>
                                  <li>Manthena Deepthi</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">32</td>
                              <td className="px-4 py-2 font-medium">
                                Institute of Aeronautical Engineering, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>E Krishna Rao Patro</li>
                                  <li>B Padmaja</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">33</td>
                              <td className="px-4 py-2 font-medium">
                                Vardhaman College of Engineering, Shamshabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Prajwal Maredukonda</li>
                                  <li>Ganesh Deshmukh</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">34</td>
                              <td className="px-4 py-2 font-medium">
                                VNR Vignana Jyothi Institute of Engineering and
                                Technology, Hyderabad
                              </td>
                              <td className="px-4 py-2">Autonomous College</td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Nayamtulla Khan</li>
                                  <li>M Koteswara Rao</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="5">&nbsp;</td>
                            </tr>
                            <tr>
                              <td
                                className="px-3 py-1 bg-indigo-100 text-indigo-700 font-medium"
                                colSpan="5"
                              >
                                16 Affiliated Colleges Representing 15
                                Universities in 14 States have been selected for
                                maximum geographical spread
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">35</td>
                              <td className="px-4 py-2 font-medium">
                                Andhra Loyola Institute of Engineering and
                                Technology, Vijayawada
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Rajendra Babu Chikkala</li>
                                  <li>Koteswara Rao Addepalli</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Andhra Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">36</td>
                              <td className="px-4 py-2 font-medium">
                                Goa College of Engineering, Ponda, Goa
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr. Nilesh B Fal Dessai</li>
                                  <li>Megha Nayak</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Goa
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">37</td>
                              <td className="px-4 py-2 font-medium">
                                Sankalchand Patel College of Engineering,
                                Visnagar
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Modi Kiritkumar Jayantilal</li>
                                  <li>Patel Mehulkumar Shankarlal</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Gujarat
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">38</td>
                              <td className="px-4 py-2 font-medium">
                                Satyug Darshan Institute of Engineering and
                                Technology, Faridabad
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Shree Harsh Attri</li>
                                  <li>Parul Dhingra</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Haryana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">39</td>
                              <td className="px-4 py-2 font-medium">
                                Iqbal Institute of Technology and Management,
                                Srinagar
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Qurat ul ain ashraf</li>
                                  <li>Ambreena Muneer</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Jammu &amp; Kashmir
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">40</td>
                              <td className="px-4 py-2 font-medium">
                                Amal Jyothi College of Engineering, Kottayam
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Fr. Dr. Rubin Thottupurathu Jose</li>
                                  <li>Juby Mathew</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Kerala
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">41</td>
                              <td className="px-4 py-2 font-medium">
                                College of Engineering, Chengannur
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Ahammed Siraj K K</li>
                                  <li>Vinod P R</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Kerala
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">42</td>
                              <td className="px-4 py-2 font-medium">
                                Lakshmi Narain College of Technology, Bhopal
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Aditya patel</li>
                                  <li>Dr. Vivek Richhariya</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Madhya Pradesh
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">43</td>
                              <td className="px-4 py-2 font-medium">
                                K.C. College of Engineering and Management
                                Studies and Research, Thane
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Kirti Rupesh Parthe</li>
                                  <li>Keerti D Kharatmol</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">44</td>
                              <td className="px-4 py-2 font-medium">
                                Deogiri Institute of Engineering and Management
                                Studies, Aurangabad
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Sugandha Nandedkar</li>
                                  <li>Manisha Ramesh Mundhe</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Maharashtra
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">45</td>
                              <td className="px-4 py-2 font-medium">
                                Manakula Vinayagar Institute of Technology,
                                Puducherry
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Poonguzhali N</li>
                                  <li>Dr. P Sivakumar</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Puducherry
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">46</td>
                              <td className="px-4 py-2 font-medium">
                                Baba Farid College of Engineering and
                                Technology, Bathinda
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Charandeep Singh bedi</li>
                                  <li>Ashu Bansal</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Punjab
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">47</td>
                              <td className="px-4 py-2 font-medium">
                                Engineering College Ajmer
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Satya Narayan</li>
                                  <li>Dr. Neetu Sharma</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Rajasthan
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">48</td>
                              <td className="px-4 py-2 font-medium">
                                PSG Institute of Technology and Applied Research
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Dr R Manimegalai</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Tamil Nadu
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">49</td>
                              <td className="px-4 py-2 font-medium">
                                KG Reddy College of Engineering and Technology,
                                JNTU Hyderabad, Hyderabad
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Naresh Kumar Pegada</li>
                                  <li>Ramakrishna Reddy K</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                Telangana
                              </td>
                            </tr>
                            <tr className="divide-x divide-gray-200">
                              <td className="px-4 py-2">50</td>
                              <td className="px-4 py-2 font-medium">
                                Dr. B. C. Roy Engineering College, Durgapur
                              </td>
                              <td className="px-4 py-2">
                                Affiliated College to University
                              </td>
                              <td className="px-4 py-2">
                                <ol className="list-disc pl-3">
                                  <li>Abhijit Banerjee</li>
                                  <li>Dr Raj Kumar Samanta</li>
                                </ol>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                West Bengal
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="welcome-kit"
                className="border-t border-gray-300 mt-8 pt-6 lg:mt-16 lg:pt-12"
              >
                <h3 className="text-xl lg:text-3xl text-secondary-500 font-semibold">
                  State Public Affiliating Universities Represented
                </h3>
                <p className="pt-2 text-sm lg:text-lg max-w-4xl">
                  The Welcome Kit has details on the next steps for
                  Institutions. Please download and do the needful before August
                  13, 2021.
                </p>
              </section>
              <div className="border-t border-gray-300 mt-8 py-6 lg:mt-16 lg:py-12">
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
                        href="mailto:director.fdc@aicte-india.org?cc=wd@pupilfirst.org"
                        className={
                          "text-secondary-600 underline pl-1 tracking-wide font-medium"
                        }
                      >
                        director.fdc@aicte-india.org
                      </a>{" "}
                      <br />
                      with cc to
                      <span className="text-secondary-600 pl-1 tracking-wide font-medium">
                        wd@pupilfirst.org
                      </span>
                    </p>
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
