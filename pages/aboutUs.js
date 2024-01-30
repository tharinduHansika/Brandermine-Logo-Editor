import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import HelpHero2 from "../components/HelpHero2";
import Homestrengthsection from "../components/Homestrengthsection";

export default function aboutUs() {
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

      <div
        style={{
          backgroundImage: `url("/images/about/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[360px] hidden xl:block mt-[63px]"
      >
        <div className="container max-w-[1300px] mx-auto h-[360px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-6 pl-12 pt-12">
              <h1 className="about-title mt-4">
                Helping Millions
                <br />
                Grow Better.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container max-w-[1300px] mx-auto text-center block xl:hidden mt-[63px] h-[360px]"
        style={{
          backgroundImage: `url("/images/about/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-6 pl-0 pt-0 sm:pl-12 sm:pt-12 text-center sm:text-left">
              <h1 className="about-title mt-4">
                Helping Millions
                <br />
                Grow Better.
              </h1>
            </div>

            <div className="col-span-12 sm:col-span-6 order-first sm:order-last">
              {/* <img src="/images/about/bg.png" className="w-full" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1300px] mx-auto text-center sm:py-36 py-12 px-4 md:px-6">
        <div className="text-center">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-6 sm:pr-12 pr-0 order-last sm:order-first">
              <h1 className="about-title mt-4 ">Our Mission</h1>
              <p className="about-text mt-4">
                There's this notion that to grow a business, you have to be
                ruthless. But we know there's a better way to grow. One where
                what's good for the bottom line is also good for customers. We
                believe businesses can grow with a conscience, and succeed with
                a soul — and that they can do it with inbound. That's why we've
                created an ecosystem uniting software, education, and community
                to help businesses grow better every day.
              </p>
            </div>

            <div className="col-span-12 sm:col-span-6 sm:pl-12 pl-0">
              <img src="/images/about/2.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1300px] mx-auto text-center mb-12 py-12 px-4 md:px-6">
        <h1 className="about-title mb-12">Our Story</h1>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-6 sm:pr-12 pr-0 flex items-center">
            <img src="/images/about/3.png" className="w-full" />
          </div>

          <div className="col-span-12 sm:col-span-6 sm:pl-12 pl-0">
            <p className="about-text">
              As fellow graduate students at MIT in 2004, Brian and Dharmesh
              noticed a shift in the way people shop and buy. Consumers were no
              longer tolerating interruptive bids for their attention — in fact,
              they'd gotten really, really good at ignoring them.
              <br />
              <br />
              From this shift, a company was born: HubSpot. It was founded on
              "inbound", the notion that people don't want to be interrupted by
              marketers or harassed by salespeople — they want to be helped.
              <br />
              <br />
              Today, the inbound movement continues to empower businesses around
              the world to stop interrupting, start helping, and return their
              focus to the customer.
            </p>
          </div>
        </div>
      </div>

      <Homestrengthsection />

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
