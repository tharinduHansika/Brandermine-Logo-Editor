import Link from "next/link";
import React from "react";

const Homecontentsection = () => {
  return (
    <div className="container max-w-[1300px] mx-auto py-8 sm:py-12 px-4 md:px-6">
      <h1 className="card-title py-0 sm:py-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
        One stop for everything you need
      </h1>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
          <img src="/images/slider/concept.png" />
        </div>

        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center">
          <h1 className="card-semi-title mb-4 text-center sm:text-left">
            Make your brand idea a reality right now!
          </h1>
          <p className="card-description py-2 mb-4 text-center sm:text-left">
            Endless design possibilities. Customize your logo from A to Z
            choosing from thousands of templates, color combination and
            detailing discussing with our design team.
          </p>
          <Link href={'/generate'} legacyBehavior>

            <button class="btn-sm-primary hover:bg-[#6b42ca]">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center">
          <h1 className="card-semi-title mb-4 text-center sm:text-left">
            Fully customizable logo with our Custom Logo maker
          </h1>
          <p className="card-description py-2 mb-4 text-center sm:text-left">
            Bring your imagination to reality from scratch with the world's most outstanding custom logo maker website. Get connected with our top class designers, in house brand building tools to set up and launch your brand.
          </p>
          <Link href={'/generate'} legacyBehavior>
            <button class="btn-sm-danger hover:bg-[#f35353]">Get Started</button>
          </Link>
        </div>

        <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
          <img src="/images/slider/Premiumdesign.png" />
        </div>
      </div>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
          <img src="/images/slider/mediakitdesigns.png" />
        </div>

        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center">
          <h1 className="card-semi-title mb-4 text-center sm:text-left">
            Connect with your audience
          </h1>
          <p className="card-description py-2 mb-4 text-center sm:text-left">
            You can now save time than before. Get connected to your audience and grow your brand recognition with your logo imprinted business cards, letter heads, social media templates and more.
          </p>
          <Link href={'/generate'} legacyBehavior>
            <button class="btn-sm-success hover:bg-[#6cc762]">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 mb-0 sm:mb-8 pr-0 py-0 sm:py-8">
        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center">
          <h1 className="card-semi-title mb-4 text-center sm:text-left">
            Grow your website. Get going
          </h1>
          <p className="card-description py-2 mb-4 text-center sm:text-left">
            Your story is our success. Brandermine team is here to build your logo and launch your brand. We will help you reach your audience with more SEO friendly website
          </p>
          <Link href={'/generate'} legacyBehavior>
            <button class="btn-sm-info hover:bg-[#1cabfd]">Get Started</button>
          </Link>
        </div>

        <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
          <img src="/images/slider/development.png" />
        </div>
      </div>
    </div>
  );
};

export default Homecontentsection;
