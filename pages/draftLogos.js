import React from "react";
import Head from "next/head";
import { Navbar5 } from "../components/Navbar5";
import Link from "next/link";

function draftLogos() {
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

            {/* <div className="my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/2h.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Orders</p>
              </div>
            </div> */}
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
              <div className="cursor-pointer my-1 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/4h.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Draft Logos</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 flex-col items-starts justify-end w-full">
            <Link href="/settings">
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
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-6">
                <div className="relative flex justify-center group">
                  <Link href="/collecting-data-step-4">
                    <img
                      src="/images/blog/1.png"
                      className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]"
                    />
                  </Link>

                  <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                    <button type="submit" className="primary-btn mr-2">
                      Edit
                    </button>

                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700 absolute opacity-[1] top-0 hover:opacity-[0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {/* <button type="submit" className="primary-btn-red">
                  Remove
                </button>{" "} */}
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-6">
                <div className="relative flex justify-center group">
                  <Link href="/collecting-data-step-4">
                    <img
                      src="/images/blog/1.png"
                      className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]"
                    />
                  </Link>

                  <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                    <button type="submit" className="primary-btn mr-2">
                      Edit
                    </button>

                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700 absolute opacity-[1] top-0 hover:opacity-[0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {/* <button type="submit" className="primary-btn-red">
                  Remove
                </button>{" "} */}
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-6">
                <div className="relative flex justify-center group">
                  <Link href="/collecting-data-step-4">
                    <img
                      src="/images/blog/1.png"
                      className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]"
                    />
                  </Link>

                  <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                    <button type="submit" className="primary-btn mr-2">
                      Edit
                    </button>

                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700 absolute opacity-[1] top-0 hover:opacity-[0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {/* <button type="submit" className="primary-btn-red">
                  Remove
                </button>{" "} */}
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-6">
                <div className="relative flex justify-center group">
                  <Link href="/collecting-data-step-4">
                    <img
                      src="/images/blog/1.png"
                      className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]"
                    />
                  </Link>

                  <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                    <button type="submit" className="primary-btn mr-2">
                      Edit
                    </button>

                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700 absolute opacity-[1] top-0 hover:opacity-[0]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    {/* <button type="submit" className="primary-btn-red">
                  Remove
                </button>{" "} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default draftLogos;
