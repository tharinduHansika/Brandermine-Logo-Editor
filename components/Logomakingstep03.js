import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Logomakingstep03 = () => {
  const router = useRouter();
  const { brand_name, slogan } = router.query;

  return (
    <>
      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6 mt-12">
        <h3 className="card-semi-title text-center">
          Choose and custermize your favourite logo
        </h3>
        <h3 className="txt3 text-center mt-4">
          Buy your logo as is, or customize colors, layout, and texts to get
          exactly what you need.
        </h3>

        <div className="grid grid-cols-12 py-12 gap-4">
          <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <label className="lable1">
              Brand name{" "}
              <span className="roundhint2">
                <b>!</b>
              </span>
            </label>

            <input
              type="text"
              name="brand_name"
              className="input1 focus:ring-[#5022b8] focus:ring-2 mt-3"
              placeholder=""
              defaultValue={brand_name}
            />
          </div>

          <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <label className="lable1">
              Slogan{" "}
              <span className="roundhint2">
                <b>!</b>
              </span>
            </label>
            <input
              type="text"
              name="brand_name"
              className="input1 focus:ring-[#5022b8] focus:ring-2  mt-3"
              placeholder=""
              defaultValue={brand_name}
            />
          </div>

          <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <label className="lable1">
              Keywords{" "}
              <span className="roundhint2">
                <b>!</b>
              </span>
            </label>
            <input
              type="text"
              name="brand_name"
              className="input1 focus:ring-[#5022b8] focus:ring-2  mt-3"
              placeholder=""
            />
          </div>

          <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <label className="lable1">Logo style</label>
            <select
              className="select1 focus:ring-[#5022b8] focus:ring-2 mt-3"
              name="style"
              defaultValue=""
            >
              <option value="1">All</option>
              <option value="2">Style 1</option>
              <option value="3">Style 2</option>
              <option value="4">Style 3</option>
            </select>
          </div>

          <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
            <label className="lable1">Color</label>
            <select
              id="cars"
              className="select1 focus:ring-[#5022b8] focus:ring-2 mt-3"
              name="color"
            >
              <option value="1">All</option>
              <option value="2">Color 1</option>
              <option value="3">Color 2</option>
              <option value="4">Color 3</option>
              <option value="5">Color 4</option>
            </select>
          </div>

          <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2 mt-4 sm:mt-[36px]">
            <button
              type="submit"
              className="primary-btn-w-full w-full h-[42px]"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-6">
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <div className="relative flex justify-center group">
              <img
                src="/images/blog/1.png"
                className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]"
              />

              <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                <Link href="/collecting-data-step-4">
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
          </div>

          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <div className="relative flex justify-center group">
              <img
                src="/images/blog/1.png"
                className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]"
              />

              <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                <Link href="/collecting-data-step-4">
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
          </div>

          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
            <img
              src="/images/blog/Right-color.webp"
              className="w-full aspect-[145/100] shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f1f1f1] relative">
        <div className="cursor-pointer top-0 absolute right-0 text-black hover:text-[#5022b8] w-12 h-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
          <h3 className="card-semi-title-2 text-center mb-4">
            Got something else in mind
          </h3>
          <h3 className="txt3 text-center mb-4">
            Edit your brief to help us create logos that exactly fit your
            vision, or work with
            <br /> top designer to create a logo from scratch.
          </h3>

          <div className="card-div-10 flex items-center">
            <button
              type="button"
              className="btn-4 mt-2 hover:bg-[#5022B8] hover:text-white"
            >
              Edit your brief
            </button>
            <button
              type="button"
              className="btn-5 mt-2 bg-[#5022B8] hover:bg-[#6b42ca]"
            >
              Get premium logo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logomakingstep03;
