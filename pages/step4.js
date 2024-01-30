import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Link from "next/link";

function step4() {
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
            <p className="step text-left mb-2">STEP 4/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-active"></div>
            </div>

            <h3 className="step-title mt-4">Logo design brief</h3>
            <h3 className="step-title2">
              Share your story to get a logo that shows and tells it best.
            </h3>
          </div>
          {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}
        </div>

        <div className="flex flex-col mt-8 text-left">
          <div className="">
            <p className="colors-title text-[#404145] mb-4">
              What name do you want in your logo
            </p>

            <input
              className="input1 focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-2"
              id="textarea"
              name="textarea"
              placeholder="For example brandermine"
              type="text"
            />

            <p className="hint text-[#797979] mt-3">Eg: karma</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <h2 className="colors-title mb-2">Slogan</h2>
              <div className="roundhint">
                <b>!</b>
              </div>
            </div>

            <input
              className="input1 focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-2 "
              id="textarea"
              name="textarea"
              placeholder="For example brandermine"
              type="text"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">Select Industry</p>

            <select
              name="cars"
              id="cars"
              className="select1 focus:ring-[#5022b8] focus:ring-1 border-[#cccccc] focus:border-[#5022b8] focus:border-2"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Describe target Audiance
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
              Discribe About your required font family
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
              Do you have any Selected font family ?
            </p>

            <input id="selectImage" hidden type="file" />
            <button type="submit" className="primary-btn">
              Choose file
            </button>

            <p className="hint text-[#797979] mt-3">Eg: lato, rboto,mulish</p>
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Is there anything you would like to communicate with designer ?
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
            <Link href="/step3">
              <button
                type="submit"
                className="primary-btn-back float-right hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
            </Link>

            <Link href="/step5">
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

export default step4;
