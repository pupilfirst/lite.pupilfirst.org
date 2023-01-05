/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import InstituteCard from "../../components/InstituteCard";
import Container from "../../components/layout/Container";
import {
  findInstitutes,
  universitiesList,
  findUniversity,
} from "../../lib/api";
import SeparatorHeading from "../../components/SeparatorHeading";

const UniversityPage = (props) => {
  let router = useRouter();
  return (
    <div className="flex flex-col min-h-screen pb-2">
      <Head>
        <title>{props.university.name} | LeARN | Pupilfirst </title>
      </Head>

      <div>
        <header className="max-w-6xl 2xl:max-w-7xl mx-auto py-4 px-4 xl:px-0 relative z-10">
          <div className="flex justify-between items-center gap-4">
            <div className="inline-flex">
              <img
                className="w-16 md:w-24"
                src="/logos/atal.png"
                alt="Logo of All India Council for Technical Education (AICTE)"
              />
            </div>
            <div className="inline-flex">
              <img
                className="w-24 md:w-36"
                src="/logos/pupilfirst-logo-primary.svg"
                alt="Logo of Pupilfirst"
              />
            </div>
          </div>
        </header>
        <div className="py-8">
          <Container className="flex flex-col justify-center items-center">
            <button
              className="px-3 py-2 bg-white flex items-center gap-1 mr-auto rounded-lg hover:bg-orange-200"
              onClick={() => router.back()}
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.50079 7.21806L0.31881 4.03607C0.123548 3.84081 0.123548 3.52423 0.31881 3.32897L3.50079 0.146987C3.69605 -0.0482748 4.01264 -0.0482748 4.2079 0.146987C4.40316 0.34225 4.40316 0.658832 4.2079 0.854095L1.87947 3.18252L12.6724 3.18252C12.9485 3.18252 13.1724 3.40638 13.1724 3.68252C13.1724 3.95866 12.9485 4.18252 12.6724 4.18252L1.87947 4.18252L4.2079 6.51095C4.40316 6.70621 4.40316 7.02279 4.2079 7.21806C4.01264 7.41332 3.69605 7.41332 3.50079 7.21806Z"
                  fill="black"
                />
              </svg>
              <span>back</span>
            </button>
            <img
              src={props.university.logo_url}
              alt={props.university.name}
              className="h-32 w-32 overflow-hidden object-contain"
            />
            <h1 className="text-2xl md:text-4xl font-semibold text-center mt-6">
              {props.university.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-gray-500 text-sm mt-2">
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
                  {props.university.type.replace(/_/g, " ")}
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

                <p>{props.university.state}</p>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          {props.university.approval_notification_link && (
            <div className="flex gap-3 justify-center">
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
              <a
                target="_blank"
                rel="noreferrer"
                href={props.university.approval_notification_link}
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
          <SeparatorHeading title="Institutes" />
          <div className="space-y-4">
            {props.institutes.map((institute, index) => (
              <InstituteCard institute={institute} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const university = findUniversity(params.slug);
  const institutes = findInstitutes(params.slug);
  return {
    props: {
      university: university,
      institutes: institutes,
    },
  };
}

export async function getStaticPaths() {
  let p = universitiesList.map((university) => ({
    params: { slug: university.key },
  }));

  return {
    paths: p,
    fallback: false,
  };
}

export default UniversityPage;
