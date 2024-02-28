import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Slider from "@mui/material/Slider";
import Link from "next/link";

function valuetext(value) {
  return `${value}`;
}

function step3() {
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
            <p className="step text-left mb-2">STEP 3/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-inactive"></div>
            </div>

            <h3 className="step-title mt-4">Your brand’s style</h3>
            <h3 className="step-title2">
              Share your story to get a logo that shows and tells it best.
            </h3>
          </div>
          {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}
        </div>

        <div className="grid grid-cols-12 mt-8 p-4">
          {/* slider 1 */}
          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Classic</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Classic</p>
            <p className="float-right slider-text">Modern</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={1}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Modern</p>
          </div>

          {/* slider 2 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Accessible</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Accessible</p>
            <p className="float-right slider-text">Premium</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={1}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Premium</p>
          </div>

          {/* slider 3 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Simple</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Simple</p>
            <p className="float-right slider-text">Serious</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={1}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8 ">Serious</p>
          </div>

          {/* slider 4 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Fun</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Fun</p>
            <p className="float-right slider-text">Sophisticated</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={1}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Sophisticated</p>
          </div>

          {/* slider 5 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Traditional</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Traditional</p>
            <p className="float-right slider-text">Innovative</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={1}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Innovative</p>
          </div>

          {/* slider ends */}
        </div>

        <div className="flex flex-col text-left">
          <div className="mt-12 flex flex-row items-center justify-between">
            <Link href="/step2" legacyBehavior>
              <button
                type="submit"
                className="primary-btn-back float-right hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
            </Link>

            <Link href="/step4" legacyBehavior>
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

export default step3;
