import React from "react";
import Head from "next/head";
import { Navbar5 } from "../components/Navbar5";
import Link from "next/link";

function settings() {
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
            <Link href="/chat">
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

            <Link href="/orders">
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

            <Link href="/favouriteLogos">
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

            <Link href="/draftLogos">
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
            <Link href="/settings">
              <div className="cursor-pointer my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/5h.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Settings</p>
                </div>
              </div>
            </Link>

            {/* <div className="my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/5.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Settings</p>
              </div>
            </div> */}

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

        <div className="flex flex-col flex-1 sm:pl-12 pl-0">
          <div className="p-4 sm:p-8 flex-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 flex items-center py-6">
                <div className="bg-[#00B728] rounded-full h-32 w-32 flex items-center justify-center relative">
                  <p className="settings-avatar">S</p>
                  <img
                    src="/images/edit.svg"
                    className="w-8 absolute right-0 bottom-0 bg-[#ED5252] rounded-full p-1"
                  />
                </div>

                <div className="flex flex-col ml-4">
                  <p className="settings-name">Samuel</p>
                  <p className="settings-name2 text-[#68768B]">New York, USA</p>
                </div>
              </div>

              <div className="col-span-12 mt-4">
                <hr className="border-[#B1B1B1] border-1" />
              </div>

              <div className="col-span-12 mt-4">
                <p className="settings-title">PERSONAL INFORMATION</p>
              </div>

              <div className="col-span-12 mt-4">
                <div className="">
                  <p className="colors-title text-[#404145] mb-4">Name</p>

                  <input
                    className="input1 focus:ring-[#5022b8] focus:ring-2"
                    id="textarea"
                    name="textarea"
                    placeholder="samuel "
                    type="text"
                  />
                </div>
              </div>

              <div className="col-span-12">
                <div className="">
                  <p className="colors-title text-[#404145] mb-4">Email</p>

                  <input
                    className="input1 focus:ring-[#5022b8] focus:ring-2"
                    id="textarea"
                    name="textarea"
                    placeholder="luisandrew@gmail.com"
                    type="text"
                  />
                </div>
              </div>

              <div className="col-span-12">
                <div className="">
                  <p className="colors-title text-[#404145] mb-4">Password</p>

                  <input
                    className="input1 focus:ring-[#5022b8] focus:ring-2"
                    id="textarea"
                    name="textarea"
                    placeholder="Old password..."
                    type="text"
                  />
                  <br />

                  <input
                    className="input1 focus:ring-[#5022b8] focus:ring-2 mt-4"
                    id="textarea"
                    name="textarea"
                    placeholder="New password..."
                    type="text"
                  />
                </div>
              </div>

              <div className="col-span-12">
                <div className="">
                  <p className="colors-title text-[#404145] mb-4">
                    Subscription
                  </p>

                  <select
                    name="cars"
                    id="cars"
                    className="select1 focus:ring-[#5022b8] focus:border-[#5022b8] focus:ring-2"
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>

              <div className="col-span-12 mt-4">
                <hr className="border-[#B1B1B1] border-1" />
              </div>

              <div className="col-span-12 mt-4">
                <button className="primary-btn float-right">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default settings;
