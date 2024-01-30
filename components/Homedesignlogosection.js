import React from "react";
import { GenerateLogoTextBox } from "./home/gen_logo_box";

const Homedesignlogosection = () => {
  return (
    <div className="">
      <div className="container max-w-[1300px] mx-auto py-0 sm:py-24 pb-8 sm:pb-32 px-4 md:px-6">
        <h1 className="card-title pt-8 sm:pt-9 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Design your dream logo here
        </h1>

        <div className="flex flex-col justify-center">
          <GenerateLogoTextBox varient={2} />

          <div className="mt-4 py-2 flex justify-center">
            <img
              src="/images/Trustpilotstars.svg"
              className="w-full max-w-[400px]"
            />
          </div>
          {/* <div className="mt-4 py-2">
            <div className="flex justify-center">
              <p className="trust-point">Excellent</p>
              <img src="/images/stars-5.svg" className="trust-point-icon" />
              <p className="trust-point pl-2"> 1000+ reviews on</p>
              <img src="/images/stars-1.svg" className="trust-point-icon" />
              <p className="trust-point">Trustpilot</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3">
          <img src="/images/grid/1.png" className="w-full" />
        </div>

        <div className="col-span-12 md:col-span-6">
          <img src="/images/grid/2.png" className="w-full" />
        </div>

        <div className="col-span-12 md:col-span-3">
          <img src="/images/grid/3.png" className="w-full" />
        </div>

        <div className="col-span-12 md:col-span-6">
          <img src="/images/grid/4.png" className="w-full" />
        </div>

        <div className="grid grid-cols-12 col-span-12 md:col-span-6">
          <div className="col-span-12 md:col-span-6">
            <img src="/images/grid/5.png" className="w-full" />
          </div>

          <div className="col-span-12 md:col-span-6">
            <img src="/images/grid/6.png" className="w-full" />
          </div>

          <div className="col-span-12 md:col-span-12">
            <img src="/images/grid/7.png" className="w-full" />
          </div>
        </div>
      </div>

      <div className="container max-w-[1300px] mx-auto py-0 sm:py-12 pb-0 sm:pb-20 px-4 md:px-6">
        <div className="grid grid-cols-12 mb-0 sm:mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <h1 className="card-title-2 mb-4 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
              Contact Brandermine
            </h1>
            <p className="card-description mb-3">
              24x7 Active customer support is always available to assist with
              your queries via phone, email and live chat. We value our
              customers feedback and we’re committed to quickly resolving any
              issues or concerns.
            </p>
            <button class="my-4 btn-1 hover:bg-[#6b42ca]">Contact Us</button>
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center items-center order-first sm:order-last">
            <img
              src="/images/Reach with Brandermine.png"
              className="reach-img h-[350px] w-auto"
            />
          </div>
        </div>
      </div>

      <div className="brand-container">
        <div className="container max-w-[1300px] mx-auto px-4 md:px-6 py-0 sm:py-12">
          <div className="">
            <h1 className="card-title pt-8 sm:pt-9 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
              Browse logo ideas by industry
            </h1>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img
                      src="/images/industry/agriculture.svg"
                      className="h-16"
                    />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Agriclulture
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/business.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Business
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/idea.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Creative
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/joystick.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Entertainment
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/finance.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Finance
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/capitol.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Government
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img
                      src="/images/industry/heartbeat.svg"
                      className="h-16"
                    />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Health
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/toys.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Kid
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img
                      src="/images/industry/manufacturing.svg"
                      className="h-16"
                    />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Manufacturing
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img
                      src="/images/industry/social-media.svg"
                      className="h-16"
                    />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Marketing
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/user.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Media
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 aspect-[18/11] md:aspect-[18/14] lg:aspect-[18/11]">
                <div className="bg-[#5022b8] flex flex-col h-full items-center justify-center">
                  <section className="flex justify-center">
                    <img src="/images/industry/box.svg" className="h-16" />
                  </section>
                  <p class="text-white pt-4 text-center industry-card-title">
                    Shipping
                  </p>
                </div>
              </div>

              <div className="col-span-12 pt-4 pb-8 sm:pb-12">
                <p className="text-center font-semibold font-Poppins text-[20px] cursor-pointer hover:text-[#5022b8] flex justify-center items-center">
                  Browse All Industries
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homedesignlogosection;
