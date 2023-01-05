/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import Checkbox from "./Checkbox";
import Link from "next/link";

export default function InstituteCard({ institute, hideHeader }) {
  return (
    <Link href={`/institutions/${institute.key}`}>
      <div
        key={institute.key}
        className="block border border-gray-100 rounded-md hover:bg-orange-50 hover:border-orange-200"
      >
        {!hideHeader && (
          <div className="flex flex-wrap flex-col-reverse sm:flex-row sm:justify-between items-start sm:items-center gap-4 px-6 py-4">
            <div>
              <p className="font-semibold">{institute.name}</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 text-sm mt-1">
                <div className="flex items-center gap-2">
                  <svg
                    aria-hidden={true}
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
                  <p>{institute.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    aria-hidden={true}
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

                  <p>{institute.state}</p>
                </div>
              </div>
            </div>
            {institute.university && (
              <img
                src={institute.university?.logo_url}
                alt={institute.university?.name}
                className="h-16 w-16 overflow-hidden object-contain shrink-0"
              />
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 border-t border-gray-100">
          <Checkbox
            label="FDP Application submitted"
            checked={institute.fdp_application_submitted}
          />
          <Checkbox label="LITE MoU signed" checked={institute.mou_signed} />
          {/* <Checkbox
            label="Faculty Training"
            checked={institute.faculty_training}
          /> */}
          <Checkbox
            label="Institute Academic Council Approval received"
            checked={institute.university_approval}
          />
          <Checkbox
            label="Parent University Approval received"
            checked={institute.academic_council_approval}
          />
          <Checkbox
            label="Academic Timetable Integrated"
            checked={institute.academic_time_table_integrated}
          />
          <Checkbox label="LITE Enabled" checked={institute.lite_enabled} />
        </div>
      </div>
    </Link>
  );
}
