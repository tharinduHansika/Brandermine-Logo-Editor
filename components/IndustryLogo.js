import React from "react";
import Link from "next/link";

function IndustryLogo({ link }) {
  return (
    <div className="col-span-12 lg:col-span-3 md:col-span-4 border-[#e5e7eb] border sm:col-span-6 relative bg-white">
      <div className="relative flex justify-center group">
        <img
          src={link}
          className="w-full aspect-[145/100] cursor-pointer relative group-hover:opacity-[0.5]"
        />

        <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
          <Link href="/collecting-data-step-4" legacyBehavior>
            <button type="submit" className="primary-btn mr-2">
              Edit
            </button>
          </Link>

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
              className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700 absolute opacity-[0] top-0 hover:opacity-[1]"
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
          {/* <button type="submit" className="primary-btn-red">
        Remove
      </button>{" "} */}
        </div>
      </div>

      <hr className="" />

      <p className="howto-description1 text-center sm:text-left my-4 px-4 truncate">
        Doctor Stethoscope Doctor Stethoscope
      </p>
    </div>
  );
}

export default IndustryLogo;
