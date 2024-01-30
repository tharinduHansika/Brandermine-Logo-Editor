import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

function step5() {
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
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Which designs do you like ?
            </p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <img
              src="/images/samples/wordmark.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
          </div>
          {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Colors to explore
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/12.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Designer's choice</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/12.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Designer's choice</p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <img
              src="/images/colors/12.png"
              className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
            />
            <p className="colors-title">Designer's choice</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Other color requirements
            </p>

            <p className="step5-text text-[#797979] mt-0">Unspecified</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Attachments
            </p>

            <p className="step5-text text-[#797979] mt-0">No files</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Your brand’s style
            </p>

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
          </div>

          <div className="col-span-12 mt-4">
            <p className="sample-title text-left">Logo design brief</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              What name do you want in your logo
            </p>

            <p className="step5-text text-[#797979] mt-0">Bow Sanctuary</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">Slogan</p>

            <p className="step5-text text-[#797979] mt-0">Unspecified</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Select Industry
            </p>

            <p className="step5-text text-[#797979] mt-0">Spa & Esthetics</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Describe target Audiance
            </p>

            <p className="step5-text text-[#797979] mt-0">
              Situated at the base of the Chuckanut mountains surrounded by
              Skagit valley farmland, we are a place for people to come unwind &
              relax. The experience starts in our Japanese inspired
              Pacific-Northwest gardens, complete with koi pond, bamboo groves,
              and beautiful pines. Guest are invited to enjoy the grounds, have
              a soak in outdoor hot tubs, get a massage, attend a yoga class, or
              simply drop in for a bite from the cafe. Our vibe is local and
              casual, but in an oh so refined way.
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Discribe About your required font family
            </p>

            <p className="step5-text text-[#797979] mt-0">
              Situated at the base of the Chuckanut mountains surrounded by
              Skagit valley farmland, we are a place for people to come unwind &
              relax. The experience starts in our Japanese inspired
              Pacific-Northwest gardens, complete with koi pond, bamboo groves,
              and beautiful pines. Guest are invited to enjoy the grounds, have
              a soak in outdoor hot tubs, get a massage, attend a yoga class, or
              simply drop in for a bite from the cafe. Our vibe is local and
              casual, but in an oh so refined way.
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Attachments
            </p>

            <p className="step5-text text-[#797979] mt-0">No files</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Is there anything you would like to communicate with designer ?
            </p>

            <p className="step5-text text-[#797979] mt-0">
              Situated at the base of the Chuckanut mountains surrounded by
              Skagit valley farmland, we are a place for people to come unwind &
              relax. The experience starts in our Japanese inspired
              Pacific-Northwest gardens, complete with koi pond, bamboo groves,
              and beautiful pines. Guest are invited to enjoy the grounds, have
              a soak in outdoor hot tubs, get a massage, attend a yoga class, or
              simply drop in for a bite from the cafe. Our vibe is local and
              casual, but in an oh so refined way.
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Attachments
            </p>

            <p className="step5-text text-[#797979] mt-0">No files</p>
          </div>

          <div className="col-span-12 mt-4">
            <button type="submit" className="primary-btn float-right">
              Submit
            </button>
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

export default step5;
