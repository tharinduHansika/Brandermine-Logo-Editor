import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useHookstate } from "@hookstate/core";
import { authState } from "../store/authstore";

export const Navbar5 = () => {
  const [active, setActive] = useState(false);
  const authStore = useHookstate(authState)

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="navbar shadow-none sm:drop-shadow-[0px_4px_34px_rgba(0,0,0,0.1)] flex items-center justify-between flex-wrap bg-white-300 p-2">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/images/BranderMine logo.svg" width="165" height="31" />
          </a>
        </Link>

        <div className="flex">
          <div className="relative mt-1 mr-2 flex sm:hidden">
            <img
              src="/images/bell.svg"
              className="w-10 bg-[#ECEEFF] rounded-full p-2 mr-4"
            />

            <p className="absolute top-0 right-3 w-4 h-4 bg-[#00B728] rounded-full"></p>
          </div>

          <button
            className="inline-flex p-3 hover:bg-[#5022B8] hover:text-white rounded lg:hidden text-black ml-auto hover:text-blue outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${active ? "" : "hidden"
            }   w-full lg:flex-grow lg:w-auto absolute top-[64px] bg-white left-0 lg:hidden z-10 py-4 px-6`}
        >
          <div className="relative mb-6">
            <p className="navbar-name bg-[#5022B8] text-white px-8 py-3 rounded-2xl relative mr-5">
              Hello, Samuel
            </p>

            <p className="border-4 border-white absolute top-0 right-0 flex items-center justify-center navbar-name2 bg-[#00B728] text-white rounded-full w-11 h-11">
              S
            </p>
          </div>

          <Link href="/chat">
            <div className="flex flex-row items-center justify-start pb-4">
              <img src="/images/sidebar/1h.svg" className="w-5 mr-4" />
              <p className="navbar-text">Messages</p>
            </div>
          </Link>

          <Link href="/orders">
            <div className="flex flex-row items-center justify-start pb-4">
              <img src="/images/sidebar/2h.svg" className="w-5 mr-4" />
              <p className="navbar-text">Orders</p>
            </div>
          </Link>

          <Link href="/favouriteLogos">
            <div className="flex flex-row items-center justify-start pb-4">
              <img src="/images/sidebar/3h.svg" className="w-5 mr-4" />
              <p className="navbar-text">Favorite Logos</p>
            </div>
          </Link>

          <Link href="/draftLogos">
            <div className="flex flex-row items-center justify-start pb-4">
              <img src="/images/sidebar/4h.svg" className="w-5 mr-4" />
              <p className="navbar-text">Draft Logos</p>
            </div>
          </Link>

          <Link href="/settings">
            <div className="flex flex-row items-center justify-start pb-4">
              <img src="/images/sidebar/5h.svg" className="w-5 mr-4" />
              <p className="navbar-text">Settings</p>
            </div>
          </Link>

          <div className="flex flex-row items-center justify-start pb-4">
            <img src="/images/sidebar/6h.svg" className="w-5 mr-4" />
            <p className="navbar-text">Logout</p>
          </div>
        </div>
        {authState.get().isAuthenticated && <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center hidden lg:h-auto">
          <Link href='/dashboard/settings'>
            <div className="relative">
              <p className="navbar-name bg-[#5022B8] text-white px-8 py-3 rounded-2xl relative mr-5">
                Hello{authState.get().authProfile ? ', ' + authState.get().authProfile['name'] : ''}
              </p>

              <p className="border-4 border-white absolute top-0 right-0 flex items-center justify-center navbar-name2 bg-[#00B728] text-white rounded-full w-11 h-11">
                {(authState.get().authProfile ? authState.get().authProfile['name'] : 'User').charAt(0)}
              </p>
            </div></Link>
        </div>}
        {/* <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center hidden lg:h-auto">
          <div className="relative">
            <img
              src="/images/bell.svg"
              className="w-10 bg-[#ECEEFF] rounded-full p-2 mr-4"
            />

            <p className="absolute top-0 right-3 w-4 h-4 bg-[#00B728] rounded-full"></p>
          </div>
          <div className="relative">
            <p className="navbar-name bg-[#5022B8] text-white px-8 py-3 rounded-2xl relative mr-5">
              Hello, Samuel
            </p>

            <p className="border-4 border-white absolute top-0 right-0 flex items-center justify-center navbar-name2 bg-[#00B728] text-white rounded-full w-11 h-11">
              S
            </p>
          </div>
        </div> */}
      </nav>
    </>
  );
};
