import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar2 = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return <>
    <nav className="navbar shadow-none sm:drop-shadow-[0px_4px_34px_rgba(0,0,0,0.1)] flex grow items-center flex-wrap bg-white-300 p-2 fixed top-0 flex-1 z-30 w-full">
      <Link href="/" className="inline-flex items-center p-2 mr-4 ">

        <Image src="/images/BranderMine logo.svg" width="165" height="31" />

      </Link>

      <button
        className=" inline-flex p-3 hover:bg-[#5022b8] hover:text-white rounded lg:hidden text-black ml-auto hover:text-blue outline-none"
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

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mt-6 lg:mt-0">
          <Link href="/collecting-data-step-5" legacyBehavior>
            <button
              type="submit"
              className="primary-btn-borderless mr-4 w-full lg:w-auto mt-4 sm:mt-0 px-4 mb-1 lg:mb-0"
            >
              Customize design
            </button>
          </Link>

          <Link href="/collecting-data-step-6" legacyBehavior>
            <button
              type="submit"
              className="primary-btn1 w-full lg:w-auto mt-2 sm:mt-0 px-4"
            >
              Buy & Download
            </button>
          </Link>
        </div>
      </div>
    </nav>
  </>;
};
