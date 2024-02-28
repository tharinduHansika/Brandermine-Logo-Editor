import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import { Tooltip } from "@mui/material";

const GenerateSearchOne = () => {
  const router = useRouter();
  const { brand_name, slogan, industry } = router.query;
  const [query, setQuery] = React.useState({
    brand_name,
    slogan,
    industry: industry ? industry : "",
  });

  return (
    <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <p className="step text-left mb-2">STEP 1/2</p>
          <div className="flex justify-start">
            <div className="step-active mr-1"></div>
            <div className="step-inactive"></div>
          </div>
        </div>
        {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}
      </div>

      <div className="grid grid-cols-12 py-12">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-12">
          <div className="flex flex-col mb-8 space-y-2">
            <h3 className="step-title mt-4 leading-10">
              Create your stunning logo in few clicks
            </h3>
            <h3 className="step-title2">
              Let's know more about you to design a logo you enjoy
            </h3>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <h2 className="colors-title mb-2">Add your logo name</h2>
              <Tooltip
                title="Your logo will be design using this name"
                arrow
                placement="right"
              >
                <div className="roundhint">
                  <b>!</b>
                </div>
              </Tooltip>
            </div>

            <input
              className="input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              placeholder='For example "Nike"'
              type="text"
              value={query.brand_name}
              onChange={(e) =>
                setQuery({ ...query, brand_name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col mt-4">
            <div className="flex items-center mb-2">
              <h2 className="colors-title mb-2">
                Add your slogan{" "}
                <span className="text-[#B1B1B1]">(Optional)</span>
              </h2>
              {/* <div className="roundhint">
                <b>!</b>
              </div> */}
            </div>

            <input
              className="input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              placeholder='For example "Just Do It"'
              type="text"
              value={query.slogan}
              onChange={(e) => setQuery({ ...query, slogan: e.target.value })}
            />
          </div>

          <Link
            href={`/generate/industry?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}
            legacyBehavior>
            <button
              type="submit"
              className="primary-btn float-right mt-6 sm:mt-12"
            >
              Next
            </button>
          </Link>
        </div>

        <div className="col-span-12 md:col-span-6 mt-12 pl-0 sm:pl-6 sm:mt-0 flex items-center">
          <img src="/images/slider/concept.png" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default GenerateSearchOne;

GenerateSearchOne.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
