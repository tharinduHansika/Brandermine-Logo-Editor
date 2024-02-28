import React from "react";
import Head from "next/head";
import { Navbar5 } from "../components/Navbar5";
import Link from "next/link";

function chat() {
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
              <div className="cursor-pointer my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/1h.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Messages</p>
                </div>
              </div>
            </Link>

            {/* <div className="my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/1.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Messages</p>
                <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
              </div>
            </div> */}
            <Link href="/orders" legacyBehavior>
              <div className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/2.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Orders</p>
                  <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
                </div>
              </div>
            </Link>

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
        <div className="flex flex-col flex-1 h-[calc(100vh-63px)]">
          <div className="p-4 sm:p-8 flex-1 overflow-y-scroll">
            {/* chat right */}
            <div className="flex flex-col items-end justify-end py-4">
              <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                Hi.. what’s up brother?
              </p>
              <p className="chat-time mt-3">Today 01:16 PM</p>
            </div>

            {/* chat left */}
            <div className="flex flex-row items-start justify-start py-4">
              <div className="mr-4">
                <img
                  src="/images/sidebar/avatar.png"
                  className="h-16 object-cover"
                />
              </div>
              <div>
                <p className="chat-text bg-[#EFF5F5] py-6 px-6 rounded-t-2xl rounded-br-2xl text-[#25396F] max-w-[230px]">
                  i’m fine. you okay?
                </p>
                <p className="chat-time mt-3">Today 01:21 PM</p>
              </div>
            </div>

            {/* chat right */}
            <div className="flex flex-col items-end justify-end py-4">
              <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                Don’t worry, i okay. How about your vacation?
              </p>
              <p className="chat-time mt-3">Today 01:36 PM</p>
            </div>

            {/* chat left with images*/}
            <div className="flex flex-row items-start justify-start py-4">
              <div className="mr-4">
                <img
                  src="/images/sidebar/avatar.png"
                  className="h-16 object-cover"
                />
              </div>
              <div>
                <p className="chat-text bg-[#EFF5F5] py-6 px-6 rounded-t-2xl rounded-br-2xl text-[#25396F] max-w-[230px]">
                  Very fun. I've taken all my activities
                </p>
                <p className="chat-time mt-3">Today 01:21 PM</p>

                <div className="flex flex-row mt-4 items-center">
                  <img
                    src="/images/sidebar/avatar.png"
                    className="h-16 object-cover mr-2"
                  />
                  <img
                    src="/images/sidebar/avatar.png"
                    className="h-16 object-cover mr-2"
                  />
                  <p className="chat-text bg-[#7AA3F5] p-3 text-white rounded-md">
                    +7
                  </p>
                </div>
              </div>
            </div>

            {/* chat right */}
            <div className="flex flex-col items-end justify-end py-4">
              <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                Wow... that great.
              </p>
              <p className="chat-time mt-3">Today 01:36 PM</p>
            </div>
          </div>

          <div className="h-[100px] p-4 sm:p-8 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/sidebar/img.png"
                className="h-[19px] mr-4 object-cover"
              />
              <img
                src="/images/sidebar/smile.png"
                className="h-[22px] object-cover mr-4 sm:mr-8"
              />
              <img
                src="/images/sidebar/sep.png"
                className="h-[22px] object-cover"
              />
            </div>

            <div className="flex-1">
              <input
                className="chat-input px-8 focus:border-0 focus:ring-0"
                id="textarea"
                name="textarea"
                placeholder="Message here"
                type="text"
              />
            </div>

            <div className="block sm:hidden">
              <button
                type="submit"
                className="primary-btn w-auto flex items-center justify-center px-4 py-4 text-[16px] rounded-lg"
              >
                <img src="/images/sidebar/send.png" className="w-[18px]" />
              </button>
            </div>

            <div className="hidden sm:block">
              <button
                type="submit"
                className="primary-btn w-auto flex items-center justify-center px-6 py-6 text-[16px] rounded-lg"
              >
                Send
                <img src="/images/sidebar/send.png" className="w-[18px] ml-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chat;
