import React from "react";
import Head from "next/head";
import { Navbar5 } from "../components/Navbar5";
import Link from "next/link";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

function orderSummary() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar5 />

      <div className="flex flex-row justify-between items-start">
        <div className="bg-[#5022B8] max-w-[350px] lg:flex lg:flex-col lg:items-start lg:justify-between lg:flex-1 h-[calc(100vh-63px)] p-8 hidden overflow-y-hidden">
          <div className="flex flex-1 flex-col w-full">
            <Link href="/chat">
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/1.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Messages</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>

            {/* <div className="my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/2h.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Orders</p>
              </div>
            </div> */}
            <Link href="/orders">
              <div className="my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/2h.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Orders</p>
                </div>
              </div>
            </Link>

            <Link href="/favouriteLogos">
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/3.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Favorite Logos</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>

            <Link href="/draftLogos">
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/4.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Draft Logos</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 flex-col items-starts justify-end w-full">
            <Link href="/settings">
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/5.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Settings</p>
                </div>
              </div>
            </Link>

            <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/6.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Logout</p>
              </div>
            </div>

            <div className="flex w-full my-4">
              <hr className="w-full" />
            </div>

            <p className="sidebar-text">© 2021 branderMine</p>
            <p className="sidebar-text">Privacy | Terms | Site Map</p>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="p-4 sm:p-8 flex-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 bg-[#5022B8] rounded-lg p-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6">
                    <p className="colors-title text-[28px] text-[#ffffff] mb-4 text-left">
                      Premium Logo
                    </p>

                    <div className="flex flex-row items-center">
                      <p className="colors-title text-[#ffffff] mr-4 text-left">
                        Gold Package
                      </p>

                      <p className="colors-title text-[#5022B8] text-left bg-white rounded-lg px-4 py-2">
                        100 $
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <p className="colors-title font-[200] text-[28px] text-[#ffffff] mb-4 text:left sm:text-right">
                      Order No - 1043
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 mt-6">
                <p className="colors-title text-[28px] text-[#404145] mb-4 text-left">
                  Order details
                </p>
              </div>

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
                    <p className="slider-text text-left px-12">Feminine</p>
                  </div>

                  <div className="col-span-12 md:col-span-8 md:hidden">
                    <p className="float-left slider-text">Feminine</p>
                    <p className="float-right slider-text">Masculine</p>
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
                    <p className="slider-text text-left px-8">Masculine</p>
                  </div>

                  {/* slider 3 */}

                  <div className="col-span-12 md:col-span-2 hidden md:grid">
                    <p className="slider-text text-left px-12">Simple</p>
                  </div>

                  <div className="col-span-12 md:col-span-8 md:hidden">
                    <p className="float-left slider-text">Simple</p>
                    <p className="float-right slider-text">Bold</p>
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
                    <p className="slider-text text-left px-8 ">Bold</p>
                  </div>

                  {/* slider 4 */}

                  <div className="col-span-12 md:col-span-2 hidden md:grid">
                    <p className="slider-text text-left px-12">Artisitc</p>
                  </div>

                  <div className="col-span-12 md:col-span-8 md:hidden">
                    <p className="float-left slider-text">Artisitc</p>
                    <p className="float-right slider-text">Masculine</p>
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
                    <p className="slider-text text-left px-8">Masculine</p>
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
                <p className="colors-title text-[#404145] mb-4 text-left">
                  Slogan
                </p>

                <p className="step5-text text-[#797979] mt-0">Unspecified</p>
              </div>

              <div className="col-span-12 mt-4">
                <p className="colors-title text-[#404145] mb-4 text-left">
                  Select Industry
                </p>

                <p className="step5-text text-[#797979] mt-0">
                  Spa & Esthetics
                </p>
              </div>

              <div className="col-span-12 mt-4">
                <p className="colors-title text-[#404145] mb-4 text-left">
                  Describe target Audiance
                </p>

                <p className="step5-text text-[#797979] mt-0">
                  Situated at the base of the Chuckanut mountains surrounded by
                  Skagit valley farmland, we are a place for people to come
                  unwind & relax. The experience starts in our Japanese inspired
                  Pacific-Northwest gardens, complete with koi pond, bamboo
                  groves, and beautiful pines. Guest are invited to enjoy the
                  grounds, have a soak in outdoor hot tubs, get a massage,
                  attend a yoga class, or simply drop in for a bite from the
                  cafe. Our vibe is local and casual, but in an oh so refined
                  way.
                </p>
              </div>

              <div className="col-span-12 mt-4">
                <p className="colors-title text-[#404145] mb-4 text-left">
                  Discribe About your required font family
                </p>

                <p className="step5-text text-[#797979] mt-0">
                  Situated at the base of the Chuckanut mountains surrounded by
                  Skagit valley farmland, we are a place for people to come
                  unwind & relax. The experience starts in our Japanese inspired
                  Pacific-Northwest gardens, complete with koi pond, bamboo
                  groves, and beautiful pines. Guest are invited to enjoy the
                  grounds, have a soak in outdoor hot tubs, get a massage,
                  attend a yoga class, or simply drop in for a bite from the
                  cafe. Our vibe is local and casual, but in an oh so refined
                  way.
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
                  Is there anything you would like to communicate with designer
                  ?
                </p>

                <p className="step5-text text-[#797979] mt-0">
                  Situated at the base of the Chuckanut mountains surrounded by
                  Skagit valley farmland, we are a place for people to come
                  unwind & relax. The experience starts in our Japanese inspired
                  Pacific-Northwest gardens, complete with koi pond, bamboo
                  groves, and beautiful pines. Guest are invited to enjoy the
                  grounds, have a soak in outdoor hot tubs, get a massage,
                  attend a yoga class, or simply drop in for a bite from the
                  cafe. Our vibe is local and casual, but in an oh so refined
                  way.
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

              <div className="col-span-12 mt-4">
                <hr />
              </div>

              {/* chat */}

              <div className="col-span-12 mt-4">
                <div className="flex flex-col flex-1 h-[calc(100vh-63px)]">
                  <div className="p-4 sm:p-8 flex-1 overflow-y-scroll">
                    {/* chat right */}
                    <div className="flex flex-col items-end justify-end py-4">
                      <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                        Hi.. what’s up brother?
                      </p>
                      <p className="chat-time mt-3">Today 01:16 PM</p>
                    </div>

                    {/* chat left */}
                    <div className="flex flex-row items-start justify-start py-4">
                      <div className="mr-4">
                        <img
                          src="/images/sidebar/avatar.png"
                          className="h-16 object-cover"
                        />
                      </div>
                      <div>
                        <p className="chat-text bg-[#EFF5F5] py-6 px-6 rounded-t-2xl rounded-br-2xl text-[#25396F] max-w-[230px]">
                          i’m fine. you okay?
                        </p>
                        <p className="chat-time mt-3">Today 01:21 PM</p>
                      </div>
                    </div>

                    {/* chat right */}
                    <div className="flex flex-col items-end justify-end py-4">
                      <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                        Don’t worry, i okay. How about your vacation?
                      </p>
                      <p className="chat-time mt-3">Today 01:36 PM</p>
                    </div>

                    {/* chat left with images*/}
                    <div className="flex flex-row items-start justify-start py-4">
                      <div className="mr-4">
                        <img
                          src="/images/sidebar/avatar.png"
                          className="h-16 object-cover"
                        />
                      </div>
                      <div>
                        <p className="chat-text bg-[#EFF5F5] py-6 px-6 rounded-t-2xl rounded-br-2xl text-[#25396F] max-w-[230px]">
                          Very fun. I've taken all my activities
                        </p>
                        <p className="chat-time mt-3">Today 01:21 PM</p>

                        <div className="flex flex-row mt-4 items-center">
                          <img
                            src="/images/sidebar/avatar.png"
                            className="h-16 object-cover mr-2"
                          />
                          <img
                            src="/images/sidebar/avatar.png"
                            className="h-16 object-cover mr-2"
                          />
                          <p className="chat-text bg-[#7AA3F5] p-3 text-white rounded-md">
                            +7
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* chat right */}
                    <div className="flex flex-col items-end justify-end py-4">
                      <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                        Wow... that great.
                      </p>
                      <p className="chat-time mt-3">Today 01:36 PM</p>
                    </div>
                  </div>

                  <div className="h-[100px] p-4 sm:p-8 flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                      <img
                        src="/images/sidebar/img.png"
                        className="h-[19px] mr-4 object-cover"
                      />
                      <img
                        src="/images/sidebar/smile.png"
                        className="h-[22px] object-cover mr-4 sm:mr-8"
                      />
                      <img
                        src="/images/sidebar/sep.png"
                        className="h-[22px] object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <input
                        className="chat-input px-8 focus:border-0 focus:ring-0"
                        id="textarea"
                        name="textarea"
                        placeholder="Message here"
                        type="text"
                      />
                    </div>

                    <div className="block sm:hidden">
                      <button
                        type="submit"
                        className="primary-btn w-auto flex items-center justify-center px-4 py-4 text-[16px] rounded-lg"
                      >
                        <img
                          src="/images/sidebar/send.png"
                          className="w-[18px]"
                        />
                      </button>
                    </div>

                    <div className="hidden sm:block">
                      <button
                        type="submit"
                        className="primary-btn w-auto flex items-center justify-center px-6 py-6 text-[16px] rounded-lg"
                      >
                        Send
                        <img
                          src="/images/sidebar/send.png"
                          className="w-[18px] ml-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default orderSummary;
