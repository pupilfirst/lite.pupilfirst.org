import React from "react";

let PathwayItem = ({
  number,
  title,
  description,
  actions,
  isLast = false,
  download = false,
  disabled = false,
}) => {
  return (
    <div
      className={`relative px-8 md:px-12 pb-6 md:pb-12 border-primary-500 border-dashed ${
        isLast ? "" : "border-l-2"
      }`}
    >
      <p className="absolute top-0 -left-5 px-4 py-2 rounded-full bg-primary-500 font-bold text-white">
        {number}
      </p>
      <h3 className="text-secondary-500 text-xl lg:text-4xl">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        {actions.map((action, index) => {
          return (
            <AssetDownloadButton
              key={index}
              title={action.title}
              actionText={action.actionText}
              url={action.url}
              download={download}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
};

let AssetDownloadButton = ({ title, actionText, url, download, disabled }) => {
  return (
    <div>
      {disabled ? (
        <div className="opacity-60">
          <div className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-200 0 transition-all cursor-not-allowed">
            <div>
              <p className="font-bold">{title}</p>
              <p className="font-semibold text-sm text-secondary-500">
                {actionText}
              </p>
            </div>
            <div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_500_345)">
                  <path
                    d="M18.3075 12.7939C18.0795 12.7939 17.8609 12.8844 17.6998 13.0456C17.5386 13.2068 17.4481 13.4253 17.4481 13.6533V17.345C17.4479 17.6067 17.3439 17.8576 17.1588 18.0427C16.9738 18.2278 16.7229 18.3319 16.4612 18.3322H3.53909C3.27745 18.3319 3.02661 18.2279 2.8416 18.0428C2.65659 17.8578 2.55253 17.607 2.55225 17.3454V13.6536C2.55225 13.4257 2.4617 13.2071 2.30054 13.046C2.13938 12.8848 1.92079 12.7942 1.69287 12.7942C1.46495 12.7942 1.24637 12.8848 1.0852 13.046C0.924037 13.2071 0.833496 13.4257 0.833496 13.6536L0.833496 17.3454C0.834254 18.0627 1.11955 18.7504 1.62679 19.2577C2.13402 19.7649 2.82176 20.0502 3.53909 20.051H16.4612C17.1786 20.0502 17.8663 19.7649 18.3735 19.2577C18.8808 18.7504 19.1661 18.0627 19.1668 17.3454V13.6536C19.1668 13.4257 19.0763 13.2071 18.9151 13.046C18.754 12.8848 18.5354 12.7942 18.3075 12.7942V12.7939ZM9.39144 14.2609L9.45482 14.3182L9.46055 14.3225C9.4806 14.339 9.50137 14.354 9.52285 14.3683L9.53216 14.3744C9.55293 14.3878 9.57406 14.3997 9.59554 14.4102L9.60557 14.4152L9.67253 14.446L9.68076 14.4496L9.75238 14.4747L9.75882 14.4765L9.83402 14.4944H9.83903L9.91601 14.5051H9.92067L9.99945 14.5087L10.0782 14.5051H10.0829L10.1599 14.4944H10.1649L10.2401 14.4765L10.2465 14.4747L10.3181 14.4496L10.3264 14.446L10.3933 14.4152L10.4034 14.4102C10.4248 14.3983 10.446 14.3864 10.4667 14.3744L10.476 14.3683L10.5383 14.3225L10.5441 14.3182L10.6075 14.2609L15.223 9.64607C15.383 9.48465 15.4725 9.26645 15.472 9.0392C15.4715 8.81194 15.381 8.59413 15.2204 8.43341C15.0597 8.2727 14.8419 8.18215 14.6147 8.18159C14.3874 8.18103 14.1692 8.27049 14.0077 8.43041L10.8595 11.5789V2.577C10.8595 2.34908 10.769 2.13049 10.6078 1.96933C10.4467 1.80816 10.2281 1.71762 10.0002 1.71762C9.77224 1.71762 9.55366 1.80816 9.39249 1.96933C9.23133 2.13049 9.14079 2.34908 9.14079 2.577V11.5789L5.99261 8.43077C5.83115 8.27085 5.61292 8.18139 5.38566 8.18195C5.15841 8.18251 4.94063 8.27305 4.77995 8.43377C4.61928 8.59449 4.52881 8.8123 4.52831 9.03955C4.52781 9.26681 4.61734 9.48501 4.77731 9.64643L9.39144 14.2609Z"
                    fill="gray"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_500_345">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.884277)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <a href={url} download={download} disabled={disabled}>
          <div className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-200 hover:shadow-lg hover:bg-secondary-50 hover:border-secondary-500 transition-all cursor-pointer">
            <div>
              <p className="font-bold">{title}</p>
              <p className="font-semibold text-sm text-secondary-500">
                {actionText}
              </p>
            </div>
            <div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_500_345)">
                  <path
                    d="M18.3075 12.7939C18.0795 12.7939 17.8609 12.8844 17.6998 13.0456C17.5386 13.2068 17.4481 13.4253 17.4481 13.6533V17.345C17.4479 17.6067 17.3439 17.8576 17.1588 18.0427C16.9738 18.2278 16.7229 18.3319 16.4612 18.3322H3.53909C3.27745 18.3319 3.02661 18.2279 2.8416 18.0428C2.65659 17.8578 2.55253 17.607 2.55225 17.3454V13.6536C2.55225 13.4257 2.4617 13.2071 2.30054 13.046C2.13938 12.8848 1.92079 12.7942 1.69287 12.7942C1.46495 12.7942 1.24637 12.8848 1.0852 13.046C0.924037 13.2071 0.833496 13.4257 0.833496 13.6536L0.833496 17.3454C0.834254 18.0627 1.11955 18.7504 1.62679 19.2577C2.13402 19.7649 2.82176 20.0502 3.53909 20.051H16.4612C17.1786 20.0502 17.8663 19.7649 18.3735 19.2577C18.8808 18.7504 19.1661 18.0627 19.1668 17.3454V13.6536C19.1668 13.4257 19.0763 13.2071 18.9151 13.046C18.754 12.8848 18.5354 12.7942 18.3075 12.7942V12.7939ZM9.39144 14.2609L9.45482 14.3182L9.46055 14.3225C9.4806 14.339 9.50137 14.354 9.52285 14.3683L9.53216 14.3744C9.55293 14.3878 9.57406 14.3997 9.59554 14.4102L9.60557 14.4152L9.67253 14.446L9.68076 14.4496L9.75238 14.4747L9.75882 14.4765L9.83402 14.4944H9.83903L9.91601 14.5051H9.92067L9.99945 14.5087L10.0782 14.5051H10.0829L10.1599 14.4944H10.1649L10.2401 14.4765L10.2465 14.4747L10.3181 14.4496L10.3264 14.446L10.3933 14.4152L10.4034 14.4102C10.4248 14.3983 10.446 14.3864 10.4667 14.3744L10.476 14.3683L10.5383 14.3225L10.5441 14.3182L10.6075 14.2609L15.223 9.64607C15.383 9.48465 15.4725 9.26645 15.472 9.0392C15.4715 8.81194 15.381 8.59413 15.2204 8.43341C15.0597 8.2727 14.8419 8.18215 14.6147 8.18159C14.3874 8.18103 14.1692 8.27049 14.0077 8.43041L10.8595 11.5789V2.577C10.8595 2.34908 10.769 2.13049 10.6078 1.96933C10.4467 1.80816 10.2281 1.71762 10.0002 1.71762C9.77224 1.71762 9.55366 1.80816 9.39249 1.96933C9.23133 2.13049 9.14079 2.34908 9.14079 2.577V11.5789L5.99261 8.43077C5.83115 8.27085 5.61292 8.18139 5.38566 8.18195C5.15841 8.18251 4.94063 8.27305 4.77995 8.43377C4.61928 8.59449 4.52881 8.8123 4.52831 9.03955C4.52781 9.26681 4.61734 9.48501 4.77731 9.64643L9.39144 14.2609Z"
                    fill="gray"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_500_345">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.884277)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default function PathWayToJoinFDP() {
  return (
    <div className="pl-6 pt-6">
      <PathwayItem
        number="1"
        title="Faculty Member Joins LITE FDP by ATAL Academy"
        description=""
        actions={[
          {
            title: "AICTE NEP 2020 Model Curriculum",
            actionText: "Download curriculum",
            url: "https://drive.google.com/file/d/1E6TO3o3voQFB8m7SVJvtSVPNDt4uVha2/view",
          },
        ]}
      />
      <PathwayItem
        number="2"
        title="Faculty Member Facilitates LITE MOU signoff with Industry"
        description={
          <span>
            Receive MoU Template for your institution to join AICTE LITE
            Programme. Once you have signed the MoU share it with us at{" "}
            <a
              className="font-semibold underline text-secondary-500 hover:text-secondary-700"
              href="mailto:wd@pupilfirst.org"
            >
              {" "}
              wd@pupilfirst.org
            </a>
          </span>
        }
        actions={[
          {
            title: "Format of LITE MoU",
            actionText: "Download template",
            url: "https://docs.google.com/document/d/1q2N0ZCXGbBHd5uADan7Q6KK36eHWGbmH",
          },
        ]}
      />
      <PathwayItem
        number="3"
        title="To Assist in getting Institute and University Approval"
        description="Submit AICTE Model Curriculum along with your LITE Training letter to the University and get the required approvals."
        actions={[
          {
            title: "Format of Approval letter issued by Institution",
            actionText: "Download Template",
            url: "https://docs.google.com/document/d/1bp_gyCtD5BhzBKXrdKyfTNJq0I68p3g7E9qY1UfL1OA",
          },
          {
            title: "Format of Approval orders issued by University",
            actionText: "Download Template",
            url: "https://docs.google.com/document/d/1Brw4mygeUqEfJK5uhkw4FLYKi_GHKMdcdfA9b10vLMc/edit?usp=sharing",
          },
        ]}
      />
      <PathwayItem
        number="4"
        title="Institution Publishes Academic Timetable"
        description="Complete Institute Approvals for integrating the course in the academic calendar."
        actions={[
          {
            title: "Format of Academic Time Table",
            actionText: "Download Template",
            url: "https://docs.google.com/document/d/1lNzCNkGbnvkKEXnkgew3HTJlbVECqqhh-u0Bcu5TqDs/edit?usp=sharing",
          },
        ]}
      />
      <PathwayItem
        number="5"
        title="Admit Learners to NEP 2020 Model curriculums from January 2023"
        description="You shall receive the Admission Guide that will be shared with students to start admissions for the NEP 2020 model curriculums."
        actions={[
          {
            title: "Admissions Guide (To be published)",
            actionText: "",
            url: "",
          },
        ]}
        isLast={true}
        disabled={true}
      />
    </div>
  );
}
