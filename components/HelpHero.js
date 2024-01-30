import React from "react";

function HelpHero() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/helpcenter.png")`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#5022B8",
        backgroundPosition: "center",
      }}
      className="h-[332px] mt-[63px]"
    >
      <div className="container max-w-[1300px] mx-auto h-[332px]">
        <div className="flex flex-col items-center justify-center h-[332px] mx-4 sm:mx-0">
          <h1 className="help-center-title mb-4">Can we Help you ?</h1>
          <div className="relative flex w-full sm:w-[650px] mt-4 justify-center items-center mx-auto">
            <input
              type="text"
              name="brand_name"
              className="focus:ring-[#5022b8] font-[400] text-black focus:border-[#5022b8] focus:border focus:ring-2 search-input relative px-4 w-full sm:w-[650px] h-[56px] bg-white rounded border-none placeholder-gray-400"
              placeholder="Search"
            />
            <span class="absolute top-0 right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 hover:text-[#5022b8] cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpHero;
