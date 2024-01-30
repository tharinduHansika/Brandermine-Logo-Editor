import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar4 } from "../components/Navbar4";
import Logomakingstep03 from "../components/Logomakingstep03";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";

const collecting_data_step_7 = () => {
  const router = useRouter();
  const { brand_name } = router.query;

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
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar4 />

      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 py-12 mt-12">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-4 sm:col-span-4">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>

          <div className="col-span-12 md:col-span-8 sm:col-span-8 px-4 lg:px-16 md:px-16 sm:px-16 my-4 sm:my-0 sm:py-0 flex flex-col items-start justify-between">
            <div>
              <h1 className="step6-title ">Download your logo here.</h1>
              <h1 className="step6-description mt-4 mb-8">
                Build a strong brand with high-quality logo files you can use
                everywhere-on your website, social media, in print, and much
                more.
              </h1>
            </div>
            <div>
              <button
                type="submit"
                className="primary-btn w-auto flex items-center justify-center px-10 py-10 text-[32px] rounded-lg"
              >
                <img src="/images/download.png" className="w-[48px] mr-6" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto py-16 px-4 md:px-6">
        <Footer />
      </div>

      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
};

export default collecting_data_step_7;
