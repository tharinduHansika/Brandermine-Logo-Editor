import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Link from "next/link";

function step1() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <p className="step text-left mb-2">STEP 1/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-inactive mr-1"></div>
              <div className="step-inactive mr-1"></div>
              <div className="step-inactive"></div>
            </div>

            <h3 className="step-title mt-4">Select sample you like</h3>
            <h3 className="step-title2">
              Share your story to get a logo that shows and tells it best.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6 text-left skip md:text-right ">
            <Link href="/step2" legacyBehavior>
              <p className="no-underline hover:text-[#5022b8] cursor-pointer">
                SKIP
              </p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Monogram Logo</p>

            <div className="relative">
              <img
                src="/images/samples/monogram.png"
                className="w-full border-[#00B728] border-2 rounded-sm shadow-md"
              />
              <img
                src="/images/samples/check.png"
                className="absolute top-5 right-5"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Wordmark Logo</p>
            <img
              src="/images/samples/wordmark.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Abstract Logo</p>
            <img
              src="/images/samples/abstract.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Luxury Logo</p>
            <img
              src="/images/samples/luxury.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Signature Logo</p>
            <img
              src="/images/samples/signature.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Vintage Logo</p>
            <img
              src="/images/samples/vintage.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Mascot Logo</p>
            <img
              src="/images/samples/mascot.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <p className="sample-title">Designer's choice</p>
            <img
              src="/images/samples/Group.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>

          <div className="col-span-12 mt-6">
            <Link href="/step2" legacyBehavior>
              <button type="submit" className="primary-btn  float-right">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto text-[#404145] py-12">
        <Footer2 />
      </div>
    </div>
  );
}

export default step1;
