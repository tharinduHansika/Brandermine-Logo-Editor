import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import IndustryLogo from "../components/IndustryLogo";
import Homeblogsection from "../components/Homeblogsection";

export default function logoReviews() {
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
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="pt-[63px] sm:py-0 bg-[#eff4fb]">
        <div className="container max-w-[1300px] mx-auto text-center px-4 md:px-6 py-12">
          <div className="grid grid-cols-12 gap-4 mt-0 sm:mt-12">
            <div className="col-span-12 sm:col-span-6">
              <h1 className="industry-logo-title mt-6 sm:mt-12 mb-3 sm:mb-6 text-center sm:text-left">
                Facebook Logo and review and download
              </h1>
            </div>
            <div className="col-span-12 sm:col-span-6 flex justify-center sm:justify-end">
              <img
                src="/images/reviews/1.png"
                className="w-full max-w-[300px] -mb-[100px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="create" className="py-4 mb-12">
        <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="col-span-12 sm:col-span-12">
              <h1 className="industry-logo-title2 mt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
                About facebook company
              </h1>
              {/* <h1 className="logo-industry-title3 mt-8 text-[32px]">
                How to create best wedding logo
              </h1> */}

              <h2 className="text-left sm:first-letter:text-4xl first-letter:[20px] first-letter:font-bold industry-logo-text mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px] antialiased">
                <span className="sm:font-bold font-light">A</span> Facebook is a
                social media site that allows users to connect with friends,
                work colleagues or people they don't know online. It allows
                users to share pictures, music, and their opinions with others.
                Many of us believe that Facebook was the first-ever social media
                site created. That's not true. The only reason why Facebook
                gained popularity over other existing platforms was that it
                listened to what its users wanted and steered the app in that
                direction.
                <br />
                <br />
                But let's start from the beginning; Facebook was a result of a
                drunken night in college. Mark Zuckerberg, the founder of
                Facebook, first created a website (Facemash) that let Harvard
                students judge the attractiveness of other students to develop
                rankings. It didn't come as a surprise that it wasn't trendy but
                based on this app, an idea had risen, Facebook was made, and the
                famous Facebook logo became one of the most familiar signs in
                the world.
                <br />
                Let's break some popular beliefs about Mark Zuckerberg.
                <br />
                <br />
                He is from humble beginnings - Mark came from a privileged
                background; he had private tutors who taught him coding young
                and saw excellent talent in him.
                <br />
                He learnt coding in college – Mark studied psychology in college
                with many side courses on computer science. If psychology seems
                like a strange choice, all you have to do is look at the
                addictive nature of Facebook.
                <br />
                <br />
                It has been smooth sailing ever since he dropped out – there
                have been many hushed-up scandals about Facebook, including the
                very idea of Facebook. His fellow students Cameron Winklevoss,
                Tyler Winklevoss, and Divya Narendra had come up with the idea
                together with him. After he launched Facebook, his collaborators
                said he stole their concept, and they wanted compensation.
                <br />
                <br />
                With features such as photo tagging, adding comments and liking
                pictures, it took Facebook just five years to reach the top 3rd
                position in the world's most significant web company chart. Next
                came the release of the standalone Facebook Messenger app. After
                Facebook went public, it started coming more into the limelight.
                It still isn't an easy sail for Facebook; they are constantly
                under pressure to regulate hate speech and propaganda.
              </h2>
            </div>

            <div className="col-span-12 sm:col-span-12">
              <h1 className="industry-logo-title2 mt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
                Facebook logo Review
              </h1>
              {/* <h1 className="logo-industry-title3 mt-8 text-[32px]">
                How to create best wedding logo
              </h1> */}

              <h2 className="text-left sm:first-letter:text-4xl first-letter:[20px] first-letter:font-bold industry-logo-text mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px] antialiased">
                <span className="sm:font-bold font-light">O</span>nce Facebook
                began to grow from a university networking site to worldwide
                success, Mark Zuckerberg hired Mike Buzzard of Cuban Council to
                create a logo for Facebook. The Facebook logo is very simplistic
                and neat. In the beginning, the site was called TheFacebook; the
                name was later changed to Facebook by the company. But the
                colours of the Facebook logo have always remained the same.
                <br />
                <br />
                The first Facebook logo was called TheFacebook; the letters were
                pale blue with the same blue background as today, brackets had
                been added to the logo to give a box appearance. When the
                company decided to get rid of ""The,"" they used white instead
                of pale blue for better contrast. The logo has changed very
                little since then.
                <br />
                <br />
                To see this, we only have to think of the favicon of Facebook,
                which uses only the first letter of the company's name and is
                more widely known than the entire Facebook logo. But since then,
                Facebook has acquired many companies to show uniformity; the
                social media platform announced last November that they would
                make their image consistent by having their logo implemented on
                each of the new platforms; this did not mean a new logo for each
                platform but a Facebook logo for the company as a whole. First,
                there was the blue version to represent Facebook. Then there was
                the green version to represent WhatsApp, then an understanding
                of shades from orange to pink for Instagram.
              </h2>
            </div>

            <div className="col-span-12 sm:col-span-12">
              <h1 className="industry-logo-title2 mt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
                About Font
              </h1>
              {/* <h1 className="logo-industry-title3 mt-8 text-[32px]">
                How to create best wedding logo
              </h1> */}

              <h2 className="text-left sm:first-letter:text-4xl first-letter:[20px] first-letter:font-bold industry-logo-text mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px] antialiased">
                <span className="sm:font-bold font-light">L</span>orem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ulla
              </h2>
            </div>

            <div className="col-span-12 sm:col-span-12 flex flex-col justify-center items-center mb-0 sm:mb-12">
              <h1 className="industry-logo-title2 mt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
                Download Facebook Logo
              </h1>

              <h1 className="step6-description mt-4 mb-8 text-center">
                Format (jpg,png,eps,svg,ai)
              </h1>

              <button
                type="submit"
                className="max-w-[316px] primary-btn w-auto flex items-center justify-center px-10 py-10 text-[32px] rounded-lg"
              >
                <img src="/images/download.png" className="w-[48px] mr-6" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-0 bg-[#eff4fb]">
        <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-16 pb-0 sm:pb-12 px-4 md:px-6">
          <h1 className="industry-logo-title2 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
            Need a logo like facebook ?
          </h1>

          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="col-span-12 sm:flex flex-row items-center justify-center pb-6 block">
              <div className="flex flex-col mr-0 sm:mr-8">
                <label className="lable2">
                  <b>Business name</b>
                </label>

                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5022b8] focus:ring-1 search-input1 relative px-3 w-full sm:w-[350px] h-[56px] bg-white rounded focus:border-[#5022b8] border-[#CCCCCC] placeholder-gray-400 text-black"
                  placeholder="Brand name"
                />
              </div>

              <div className="flex flex-col mt-4 sm:mt-0">
                <label className="lable2">
                  <b>Slogan</b>
                </label>

                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5022b8] focus:ring-1 search-input1 relative px-3 w-full sm:w-[350px] h-[56px] bg-white rounded focus:border-[#5022b8] border-[#CCCCCC] placeholder-gray-400 text-black"
                  placeholder="Slogan goes here"
                />
              </div>
            </div>

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <IndustryLogo link="/images/industry/l5.png" />
            <IndustryLogo link="/images/industry/l6.png" />
            <IndustryLogo link="/images/industry/l7.png" />
            <IndustryLogo link="/images/industry/l8.png" />

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <IndustryLogo link="/images/industry/l5.png" />
            <IndustryLogo link="/images/industry/l6.png" />
            <IndustryLogo link="/images/industry/l7.png" />
            <IndustryLogo link="/images/industry/l8.png" />

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <IndustryLogo link="/images/industry/l5.png" />
            <IndustryLogo link="/images/industry/l6.png" />
            <IndustryLogo link="/images/industry/l7.png" />
            <IndustryLogo link="/images/industry/l8.png" />

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <div className="col-span-12 text-center flex flex-col items-center justify-center">
              <h1 className="logo-industry-title3 pt-6 pb-4">
                <b>Are you looking for more Ideas?</b>
              </h1>

              {/* <p className="logo-industry-description2 text-[#797979]">
                Create your own logo within 5 minutes
              </p> */}

              <button
                type="submit"
                className="flex items-center justify-center search-btn1 text-white rounded pl-2 w-full sm:w-[180px] mb-12"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 sm:py-12 px-4 md:px-6">
        <h1 className="industry-logo-title2 mt-6 mb-6 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Browse Logo Ideas by Industry
        </h1>

        <div className="text-center flex flex-wrap items-center justify-center">
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Construction
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Utilities Or Energy
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Leisure Or Lifestyle
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Agriculture
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Marketing Or Advertising
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Retail And Wholesale
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
        </div>
      </div>

      <Homeblogsection />

      <div className="w-full bg-[#5022B8] py-0 sm:py-12">
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
              className="focus:ring-[#ffffff] focus:border-[#ffffff] focus:ring-1 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] rounded border-2 border-[#CCCCCC] placeholder-white"
              placeholder="Enter your brand name"
            />
            <button
              type="submit"
              className="search-btn-white hover:text-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4"
            >
              Get Start
            </button>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
}
