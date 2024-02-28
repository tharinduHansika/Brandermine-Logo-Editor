import React from "react";
import Head from "next/head";
import { Navbar5 } from "../components/Navbar5";
import Link from "next/link";

function orders() {
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
      <Navbar5 />

      <div className="flex flex-row justify-between items-start">
        <div className="bg-[#5022B8] max-w-[350px] lg:flex lg:flex-col lg:items-start lg:justify-between lg:flex-1 h-[calc(100vh-63px)] p-8 hidden overflow-y-hidden">
          <div className="flex flex-1 flex-col w-full">
            <Link href="/chat" legacyBehavior>
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/1.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Messages</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>

            <Link href="/orders" legacyBehavior>
              <div className="my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/2h.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Orders</p>
                </div>
              </div>
            </Link>

            {/* <div className="my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/2.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Orders</p>
                <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
              </div>
            </div> */}

            <Link href="/favouriteLogos" legacyBehavior>
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/3.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Favorite Logos</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>

            <Link href="/draftLogos" legacyBehavior>
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/4.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Draft Logos</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 flex-col items-starts justify-end w-full">
            <Link href="/settings" legacyBehavior>
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/5.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Settings</p>
                </div>
              </div>
            </Link>

            <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/6.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Logout</p>
              </div>
            </div>

            <div className="flex w-full my-4">
              <hr className="w-full" />
            </div>

            <p className="sidebar-text">© 2021 branderMine</p>
            <p className="sidebar-text">Privacy | Terms | Site Map</p>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="p-4 sm:p-8 flex-1">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-3 hidden sm:block">
                <p className="table-header">Preview</p>
              </div>
              <div className="col-span-12 md:col-span-2 hidden sm:block">
                <p className="table-header">Order Details</p>
              </div>
              <div className="col-span-12 md:col-span-2 hidden sm:block">
                <p className="table-header">Status</p>
              </div>
              <div className="col-span-12 md:col-span-4 hidden sm:block">
                <p className="table-header">Action</p>
              </div>
              <div className="col-span-12 hidden sm:block mt-4">
                <hr className="border border-b border-[#D9D9D9]" />
              </div>
            </div>

            <div className="grid grid-cols-12 mt-4 ">
              <div className="col-span-12 md:col-span-3 pr-0 sm:pr-12 flex items-center mb-6 sm:mb-0">
                <img src="/images/orders/1.png" className="w-full" />
              </div>
              <div className="col-span-12 md:col-span-2 pr-0 sm:pr-8 flex flex-col items-start justify-center mb-6 sm:mb-0">
                <p className="table-text1 mb-4">Logo Genarator</p>

                <p className="table-text2">Gold Package</p>
                <p className="table-text2">24 July 2020</p>
                <p className="table-text2">60$</p>
              </div>
              <div className="col-span-12 md:col-span-2 flex flex-col items-start justify-center mb-6 sm:mb-0">
                <p className="table-text1">Complete</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-row items-center justify-start mb-6 sm:mb-0">
                <button className="order-btn bg-[#2130B8] hover:bg-[#3745bf] mr-2 px-3">
                  Edit
                </button>

                <button className="order-btn bg-[#00B67A] hover:bg-[#1abd87] mr-2 px-3">
                  Reviews
                </button>
                <button className="order-btn bg-[#5022B8] hover:bg-[#6238bf] px-3">
                  Download
                </button>
              </div>
              <div className="col-span-12 mt-4 mb-6 sm:mb-0">
                <hr className="border border-b border-[#D9D9D9]" />
              </div>
            </div>

            <div className="grid grid-cols-12 mt-4 ">
              <div className="col-span-12 md:col-span-3 pr-0 sm:pr-12 flex items-center mb-6 sm:mb-0">
                <img src="/images/orders/2.png" className="w-full" />
              </div>
              <div className="col-span-12 md:col-span-2 pr-0 sm:pr-8 flex flex-col items-start justify-center mb-6 sm:mb-0">
                <p className="table-text1 mb-4">Logo Genarator</p>

                <p className="table-text2">Gold Package</p>
                <p className="table-text2">24 July 2020</p>
                <p className="table-text2">60$</p>
              </div>
              <div className="col-span-12 md:col-span-2 flex flex-col items-start justify-center mb-6 sm:mb-0">
                <p className="table-text1">Complete</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-row items-center justify-start mb-6 sm:mb-0">
                <button className="order-btn bg-[#2130B8] hover:bg-[#3745bf] mr-2 px-3">
                  Edit
                </button>
                <button className="order-btn bg-[#00B67A] hover:bg-[#1abd87] mr-2 px-3">
                  Reviews
                </button>
                <button className="order-btn bg-[#5022B8] hover:bg-[#6238bf] px-3">
                  Download
                </button>
              </div>
              <div className="col-span-12 mt-4 mb-6 sm:mb-0">
                <hr className="border border-b border-[#D9D9D9]" />
              </div>
            </div>

            <div className="grid grid-cols-12 mt-4 ">
              <div className="col-span-12 md:col-span-3 pr-0 sm:pr-12 flex items-center mb-6 sm:mb-0">
                <img src="/images/orders/3.png" className="w-full" />
              </div>
              <div className="col-span-12 md:col-span-2 pr-0 sm:pr-8 flex flex-col items-start justify-center mb-6 sm:mb-0">
                <p className="table-text1 mb-4">Premium Logo</p>

                <p className="table-text2">Gold Package</p>
                <p className="table-text2">24 July 2020</p>
                <p className="table-text2">60$</p>
              </div>
              <div className="col-span-12 md:col-span-2 flex flex-col items-start justify-center mb-6 sm:mb-0">
                <p className="table-text1">In Progress</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-row items-center justify-start mb-6 sm:mb-0">
                <Link href="/orderSummary" legacyBehavior>
                  <button className="order-btn bg-orange-600 hover:bg-orange-500 px-3 mr-2 ">
                    View Order
                  </button>
                </Link>
                <button className="order-btn bg-[#00B67A] hover:bg-[#1abd87] px-3">
                  Reviews
                </button>
              </div>
              <div className="col-span-12 mt-4 mb-6 sm:mb-0">
                <hr className="border border-b border-[#D9D9D9]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default orders;
