import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import HelpHero2 from "../components/HelpHero2";
import Homestrengthsection from "../components/Homestrengthsection";
import Testomonials from "../components/Testomonials";

export default function reviews() {
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
      </Head>

      <Navbar />

      <div className="container max-w-[1300px] mx-auto text-center mt-[63px] py-12 px-4 md:px-6">
        <div className="text-center">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-6 sm:pr-12 pr-0">
              <h1 className="about-title mt-4">Reviews</h1>
              <p className="reviews-text mt-4 text-center sm:text-left">
                TThe Brandermine design platform is a go to source for unique
                logos and branding for more than 10,000+ customers around the
                world. Here are some comments made by our clients why to trust
                Brandermine for your business.
              </p>
            </div>

            <div className="col-span-12 sm:col-span-6 sm:pl-12 pl-0">
              <img src="/images/about/4.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* test starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Here from our clients
        </h1>

        <Testomonials />
      </div>

      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Customers who trust Brandermine are growing everyday. Come join our
          10,000+ family now
        </h1>
      </div>

      <div className="w-full bg-[#5022B8] py-12">
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
              className="focus:ring-[#ffffff] focus:ring-1 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] focus:border-[#ffffff] rounded border-2 border-[#CCCCCC] placeholder-white"
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
      <div className="container max-w-[1300px] mx-auto text-center py-12 mt-12 px-4 md:px-6">
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
}
