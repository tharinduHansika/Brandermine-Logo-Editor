import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Logomakingstep02 = () => {
  const router = useRouter();
  const { brand_name } = router.query;

  return (
    <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6 mt-12">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <p className="step text-left mb-2">STEP 2/2</p>
          <div className="flex justify-start">
            <div className="step-active mr-1"></div>
            <div className="step-active"></div>
          </div>
        </div>
        {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}
      </div>

      <div className="grid grid-cols-12 py-12">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-12">
          <div className="flex flex-col mb-8">
            <h3 className="step-title mt-4">Make your logo in a few steps</h3>
            <h3 className="step-title2">
              Let’s get to know you better and create a logo you love.
            </h3>
          </div>

          <div className="flex flex-col mt-4">
            <div className="flex items-center mb-2">
              <h2 className="colors-title mb-2">
                Select your industry{" "}
                <span className="text-[#B1B1B1]">(Up to 3)</span>
              </h2>
              <div className="roundhint">
                <b>!</b>
              </div>
            </div>

            <input
              className="input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              placeholder="Transpotation"
              type="text"
            />
          </div>

          <div className="mt-4">
            <h2 className="colors-title mb-2">
              Add elements you’d like your logo to include{" "}
              <span className="text-[#B1B1B1]">(Optional)</span>
            </h2>

            <input
              className="input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              placeholder="Eg: Sun, Dog , book"
              type="text"
            />

            <p className="hint text-[#797979] mt-3">
              Separate keywords with a comma or use the Enter key
            </p>
          </div>

          <div className="mt-12 flex flex-row items-center justify-between">
            <Link href="/collecting-data" legacyBehavior>
              <button
                type="submit"
                className="primary-btn-back float-right mt-6 sm:mt-0 hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
              {/* <p className="back float-left no-underline hover:text-[#5022b8] cursor-pointer">
                🠔 back
              </p> */}
            </Link>

            <Link href="/collecting-data-step-3" legacyBehavior>
              <button
                type="submit"
                className="primary-btn float-right mt-6 sm:mt-0 "
              >
                Next
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 mt-12 pl-0 sm:pl-6 sm:mt-0 flex items-center">
          <img src="/images/slider/concept.png" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Logomakingstep02;
