import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Testomonials from "../components/Testomonials";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Slider from "../components/Slider";
import Link from "next/link";
import Slider4 from "../components/Slider4";

function brandingKit() {
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

      <Navbar />

      <div className="container max-w-[1300px] mx-auto text-center pt-12 px-4 md:px-6 ">
        <h1 className="card-title leading-[48px] pb-4">
          Your complete marketing Branding kit
        </h1>
        <p className="text-[#797979] blog-description">
          Buy yo Looka’s Brand Kit is like having a personal graphic designer.
        </p>
      </div>

      <Slider4 />

      <div className="container max-w-[1300px] mx-auto text-center pt-0 sm:pt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-8 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Profiles</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Posts</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Business Cards </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Email Signatures</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Letterheads</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Brand Guidelines</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Covers</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Stories</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Gym tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Retail tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Gym tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Retail tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>
        </div>
      </div>

      {/* content starts */}
      <div className="container max-w-[1300px] mx-auto text-center pb-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pt-0 sm:pt-8">
          how to create branding kit
        </h1>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/howto/Rectangle.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">
              Make your brand idea a reality right now!
            </h1>
            <p className="howto-description">
              Endless design possibilities. Customize your logo from A to Z
              choosing from thousands of templates, color combination and
              detailing discussing with our design team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">
              Fully customizable logo with our Custom Logo maker
            </h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/howto/Rectangle2.png" />
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/slider/mediakitdesigns.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">Connect with your audience</h1>
            <p className="howto-description">
              Download high quality logo optimised for business cards, letter
              heads, social media and more
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">Grow your website. Get going</h1>
            <p className="howto-description">
              Create your business website with Brandermine and Market to the
              right audience. Our personal tech team will make it SEO friendly.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/howto/Rectangle2.png" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#5022B8] py-0 sm:py-12 mb-12">
        <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 flex flex-col items-center justify-center">
          <p className="blue-container-text1 mb-4">
            Design your own professional logo
          </p>
          <p className="blue-container-text2">
            Get access to our design gallery to generate your business logo
          </p>

          <div className="mt-8">
            <input
              type="text"
              name="brand_name"
              className="focus:ring-[#ffffff] focus:ring-1 focus:border-[#ffffff] focus:border-2 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] rounded border-2 border-[#CCCCCC] placeholder-white"
              placeholder="Enter your brand name"
            />
            <button
              type="submit"
              className="search-btn-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4 hover:text-white"
            >
              Get Start
            </button>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer2 />
      </div>

      {/* <Herosection />
      <Homebrandsection />
      <Homecontentsection />
      <Homestrengthsection />
      <Homedesignlogosection />
      <Homeblogsection /> */}
    </div>
  );
}

export default brandingKit;
