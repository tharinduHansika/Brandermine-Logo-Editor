import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Link from "next/link";

function step2() {
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
            <p className="step text-left mb-2">STEP 2/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-inactive mr-1"></div>
              <div className="step-inactive"></div>
            </div>

            <h3 className="step-title mt-4">Colors to explore</h3>
            <h3 className="step-title2">
              Share your story to get a logo that shows and tells it best.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            <Link href="/step3">
              <p className="no-underline hover:text-[#5022b8] cursor-pointer">
                SKIP
              </p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <div className="col-span-6 md:col-span-3">
            <div className="relative">
              <img
                src="/images/colors/1.png"
                className="w-full border-[#00B728] border-2 rounded-sm shadow-md"
              />
              <img
                src="/images/samples/check.png"
                className="absolute top-5 right-5"
              />
            </div>

            <p className="colors-title">Yellow</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/2.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Orange</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/3.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Red</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/4.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Pink</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/5.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Veronica</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/6.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Purple</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/7.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Blue</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/8.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Teal</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/9.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Green</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/10.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Brown</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/11.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Black</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/12.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Designer's choice</p>
          </div>
        </div>

        <div className="flex flex-col mt-8 text-left">
          <div className="">
            <p className="colors-title text-[#404145] mb-4">
              Is there anything else would you like to communicate with
              deisgners ..?
            </p>

            <textarea
              className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              rows="6"
              cols="50"
              placeholder="Write here"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Do you have any image,sketch or documents that might be helpfull ?
            </p>

            <input id="selectImage" hidden type="file" />
            <button type="submit" className="primary-btn">
              Choose file
            </button>

            <p className="hint text-[#797979] mt-3">
              Eg: Your current logo, photos, illustrations, content, layout
              ideas.
            </p>
          </div>

          <div className="mt-12 flex flex-row items-center justify-between">
            <Link href="/step1">
              <button
                type="submit"
                className="primary-btn-back float-right mt-6 sm:mt-0 hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
            </Link>

            <Link href="/step3">
              <button type="submit" className="primary-btn float-right">
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

export default step2;
