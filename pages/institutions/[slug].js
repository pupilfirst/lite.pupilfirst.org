/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Heading from "../../components/Heading";
import InstituteCard from "../../components/InstituteCard";
import Container from "../../components/layout/Container";
import { findInstitute, institutesList } from "../../lib/api";
import SeparatorHeading from "../../components/SeparatorHeading";

const InstitutePage = (props) => {
  let router = useRouter();
  return (
    <div className="flex flex-col min-h-screen pb-2">
      <Head>
        <title>{props.institute.name} | LeARN | Pupilfirst </title>
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
        <div>
          <Container className="flex flex-col justify-center items-center relative  mt-8">
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
            {props.institute.logo_url && (
              <img
                src={props.institute.logo_url}
                alt={props.institute.name}
                className="h-20 w-20overflow-hidden object-contain"
              />
            )}

            <h1 className="text-2xl sm:text-4xl font-semibold text-center mt-6">
              {props.institute.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
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
                  {props.institute.type.replace(/_/g, " ")}
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

                <p>{props.institute.state}</p>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <SeparatorHeading title="Status" />
          <div className="mt-4">
            <InstituteCard institute={props.institute} hideHeader={true} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const institute = findInstitute(params.slug);
  return {
    props: {
      institute: institute,
    },
  };
}

export async function getStaticPaths() {
  let p = institutesList.map((institute) => ({
    params: { slug: institute.key },
  }));

  return {
    paths: p,
    fallback: false,
  };
}

export default InstitutePage;
