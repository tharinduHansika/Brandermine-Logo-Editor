import React from "react";

const Homestrengthsection = () => {
  return (
    <div className="card-div-3 pb-0 sm:pb-16">
      <div className="container max-w-[1300px] mx-auto py-8 sm:py-12 px-4 md:px-6">
        <h1 className="card-title pb-0 sm:pb-8 pt-0 sm:pt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          <p className="text-white">Our strengths</p>
        </h1>

        {/* grid starts */}
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-3 border-b-2 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/rating 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">10k</p>
              <p className="text-counter-2">+</p>
            </section>
            <section>
              <p class="text-counter-3">Happy Customers</p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/paint-palette 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">20k</p>
              <p className="text-counter-2">+</p>
            </section>
            <section>
              <p class="text-counter-3">Logos Generated</p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/diamond (1) 2.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">6</p>
            </section>
            <section>
              <p class="text-counter-3">Years of Experience</p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/handshake 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">100%</p>
            </section>
            <section>
              <p class="text-counter-3">Customer Satisfaction</p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/clock 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">24/7</p>
            </section>
            <section>
              <p class="text-counter-3">Support</p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/graphic-design 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">50</p>
              <p className="text-counter-2">+</p>
            </section>
            <section>
              <p class="text-counter-3">
                Professional Graphic <br /> Designers
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/browser 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">20</p>
              <p className="text-counter-2">+</p>
            </section>
            <section>
              <p class="text-counter-3">Web Developers</p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 p-8">
            <section class="flex justify-center">
              <img src="/images/strength/globe 1.svg" className="h-9" />
            </section>
            <section className="flex justify-center">
              <p className="text-counter">120</p>
              <p className="text-counter-2">+</p>
            </section>
            <section>
              <p class="text-counter-3">Countries Covered</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homestrengthsection;
