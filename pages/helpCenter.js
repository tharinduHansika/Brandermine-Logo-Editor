import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import HelpHero from "../components/HelpHero";

export default function helpCenter() {
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

      <HelpHero />

      <div className="container max-w-[1300px] mx-auto text-center py-12 pb-12 px-4 md:px-6">
        <div className="flex justify-center items-center my-4">
          <div className="flex-1 hidden sm:flex">
            <hr className="w-full"></hr>
          </div>
          <div className="flex-1">
            <p className="help-center-title2 ">General questions</p>
          </div>
          <div className="flex-1 hidden sm:flex">
            <hr className="w-full"></hr>
          </div>
        </div>

        <div className="grid grid-cols-12 my-12 gap-8">
          <Link href="/helpCenter2">
            <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
              <img src="/images/help/1.png" />
              <p className="help-center-caption mt-4">About branderMine</p>
            </div>
          </Link>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/2.png" />
            <p className="help-center-caption mt-4">Logo maker</p>
          </div>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/3.png" />
            <p className="help-center-caption mt-4">Premium logo</p>
          </div>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/4.png" />
            <p className="help-center-caption mt-4">Premium logo</p>
          </div>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/5.png" />
            <p className="help-center-caption mt-4">Premium logo</p>
          </div>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/6.png" />
            <p className="help-center-caption mt-4">Premium logo</p>
          </div>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/7.png" />
            <p className="help-center-caption mt-4">Premium logo</p>
          </div>

          <div className="col-span-12 sm:col-span-3 text-center flex flex-col items-center justify-center border-[#E5E5E5] border rounded-lg py-8 transition ease-in-out delay-100 hover:translate-y-1 duration-200 cursor-pointer hover:shadow-md">
            <img src="/images/help/8.png" />
            <p className="help-center-caption mt-4">Premium logo</p>
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
