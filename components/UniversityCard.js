/**
 * /* eslint-disable @next/next/no-img-element
 *

 */

/** @format */

import Link from "next/link";
export default function UniversityCard({ university, cardSize = "large" }) {
  return (
    <div
      key={university.key}
      className={`flex flex-col md:flex-row gap-6 flex-wrap ${cardSize === "large" ? "lg:items-center lg:flex-row gap-0 lg:gap-6" : ""
        } border border-gray-100 rounded-md bg-white shadow `}
    >
      <Link href={`/universities/${university.key}`}>
        <a
          key={university.key}
          className="px-6 py-4 flex flex-col md:flex-row flex-1 rounded-md cursor-pointer transition hover:bg-orange-50 hover:text-orange-500"
        >
          <div className="flex-1">
            <div className="col-span-2 md:col-span-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src={university.logo_url}
                alt={university.name}
                className="h-16 w-16 shrink-0 overflow-hidden object-contain"
              />
              <div>
                <p className="font-semibold">{university.name}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 text-sm mt-1">
                  {university.minor_degree_approval == "completed" ? (
                    <div className="flex items-center gap-2 bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-medium text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      </svg>
                      <span>LITE Enabled</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                      </svg>
                      <span>Awaiting Approval</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <svg
                      aria-hidden={true}
                      className="shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3333 7.50002L10 4.16669L1.66667 7.50002L10 10.8334L18.3333 7.50002ZM18.3333 7.50002V12.5"
                        stroke="#5E5E5E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 8.83337V13.3334C5 13.9964 5.52678 14.6323 6.46447 15.1011C7.40215 15.57 8.67392 15.8334 10 15.8334C11.3261 15.8334 12.5979 15.57 13.5355 15.1011C14.4732 14.6323 15 13.9964 15 13.3334V8.83337"
                        stroke="#5E5E5E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="capitalize">
                      {university.type.replace(/_/g, " ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      aria-hidden={true}
                      className="shrink-0"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4 8.40002C14.4 11.9344 8.00002 18 8.00002 18C8.00002 18 1.60001 11.9344 1.60001 8.40002C1.60001 6.70263 2.27429 5.07476 3.47453 3.87452C4.67476 2.67429 6.30263 2 8.00002 2C9.69741 2 11.3253 2.67429 12.5255 3.87452C13.7258 5.07476 14.4 6.70263 14.4 8.40002V8.40002Z"
                        stroke="#5E5E5E"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8.00004 9.19998C8.21222 9.19998 8.4157 9.11569 8.56573 8.96566C8.71576 8.81563 8.80005 8.61215 8.80005 8.39998C8.80005 8.1878 8.71576 7.98432 8.56573 7.83429C8.4157 7.68426 8.21222 7.59998 8.00004 7.59998C7.78787 7.59998 7.58439 7.68426 7.43436 7.83429C7.28433 7.98432 7.20004 8.1878 7.20004 8.39998C7.20004 8.61215 7.28433 8.81563 7.43436 8.96566C7.58439 9.11569 7.78787 9.19998 8.00004 9.19998V9.19998Z"
                        fill="#5E5E5E"
                        stroke="#5E5E5E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p>{university.state}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div
        className={`px-6 pb-6 flex flex-col ${cardSize === "large"
          ? "sm:flex-row sm:items-center pt-6"
          : "lg:flex-row lg:items-center pt-0"
          } gap-6 flex-1 justify-between`}
      >
        <div className="md:col-span-4 flex items-center">
          <div className="flex gap-4 flex-1">
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src="/approval-process-status-icons/person-circle.svg"
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">
                {university.vc_name}
              </p>
              <p className="text-xs font-medium text-gray-500">
                Vice Chancellor
              </p>
            </div>
          </div>
        </div>

        {university.approval_notification_link && (
          <div>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={university.approval_notification_link}
              className="flex items-center justify-center space-x-2 text-center bg-gray-100 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 px-3 py-3 rounded-md font-medium text-sm transition"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </span>
              <span>Download Approval Order</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
