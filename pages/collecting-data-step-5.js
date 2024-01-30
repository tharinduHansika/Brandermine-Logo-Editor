import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar6 } from "../components/Navbar6";
import Logomakingstep03 from "../components/Logomakingstep03";
import Footer2 from "../components/Footer2";

const collecting_data_step_5 = () => {
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar6 />

      <div className="mx-auto bg-[#C4C4C4] h-screen flex items-end justify-center p-8">
        <div className="flex">
          <a href="#preview" className="bg-white/50 p-8 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce hover:text-[#5022b8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        id="preview"
        className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 mt-4 sm:mt-12"
      >
        <img src="/images/mockup1.png" className="w-full" />
      </div>

      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
};

export default collecting_data_step_5;
