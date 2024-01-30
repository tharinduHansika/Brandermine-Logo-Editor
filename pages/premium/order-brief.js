import React from "react";
import Testomonials from "../../components/Testomonials";
import CommonQuestions from "../../components/CommonQuestions";
import MainLayout from "../../components/layout/main";
import Slider from "@mui/material/Slider";
import Link from "next/link";
import Head from "next/head";
import { useHookstate } from "@hookstate/core";
import { premiumStore } from "../../store/premiumstore";
import { useDispatch, useSelector } from "react-redux";
import { placePremOrder } from "../../store/slice/premiumOrderSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function PremiumLogoColors() {
  const orderState = useSelector((state) => state.premiumOrder);
  const dispatch = useDispatch();
  const premstate = useHookstate(premiumStore);
  const router = useRouter();

  return (
    <>
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <p className="step text-left mb-2">STEP 4/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-active"></div>
            </div>

            <h3 className="step-title mt-4">Logo brief</h3>
            <h3 className="step-title2">
              Fill out the information about your logo to our designers
            </h3>
          </div>
          {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}
        </div>

        <div className="flex flex-col mt-8 text-left">
          <div className="">
            <p className="colors-title text-[#404145] mb-4">
              Add your logo name
            </p>

            <input
              className="input1 focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-2"
              id="textarea"
              name="textarea"
              placeholder='For example "Nike"'
              value={orderState.logoName}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    logoName: e.target.value,
                  }),
                )
              }
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <h2 className="colors-title mb-2">Add your slogan (Optional)</h2>
              <div className="roundhint">
                <b>!</b>
              </div>
            </div>

            <input
              className="input1 focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-2 "
              id="textarea"
              name="textarea"
              placeholder='For example "Just Do It"'
              value={orderState.slogan}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    slogan: e.target.value,
                  }),
                )
              }
              type="text"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              What is your Industry
            </p>

            {/* <select
              name="cars"
              id="cars"
              value={orderState.industry}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    industry: e.target.value,
                  }),
                )
              }
              className="select1 focus:ring-[#5022b8] focus:ring-1 border-[#cccccc] focus:border-[#5022b8] focus:border-2"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select> */}
            <textarea
              className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              rows="6"
              cols="50"
              value={orderState.industry}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    industry: e.target.value,
                  }),
                )
              }
              placeholder="Type here"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Who are your target audience
            </p>

            <textarea
              className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              rows="6"
              cols="50"
              value={orderState.audianceInfo}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    audianceInfo: e.target.value,
                  }),
                )
              }
              placeholder="Type here"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Do you have a specific font style?
            </p>

            <textarea
              className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              rows="6"
              cols="50"
              placeholder="Type here"
              value={orderState.fontInfo}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    fontInfo: e.target.value,
                  }),
                )
              }
            />
          </div>

          <div className="mt-6">
            <input
              id="selectImage"
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) {
                  // premstate.font_file.set(e.target.files[0]);
                  dispatch(
                    placePremOrder({
                      fontAttchment: e.target.files[0],
                    }),
                  );
                }
              }}
            />

            <p className="hint text-[#797979] mt-3">
              Eg. Arial, Mulish, Allura
            </p>
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Is there any additional information you want to say to the
              designer?
            </p>

            <textarea
              className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              rows="6"
              cols="50"
              value={orderState.extraInfo}
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    extraInfo: e.target.value,
                  }),
                )
              }
              placeholder="Type here"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Do you have an image or document that might be helpful?
            </p>

            <input
              id="selectImage"
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) {
                  // premstate.scketch_file.set(e.target.files[0]);
                  dispatch(
                    placePremOrder({
                      extraAttachment: e.target.files[0],
                    }),
                  );
                }
              }}
            />
            <p className="hint text-[#797979] mt-3">
              Eg. Images, drawings, existing logo
            </p>
          </div>

          <div className="mt-12 flex flex-row items-center justify-between">
            <Link href="/premium/style">
              <button
                type="submit"
                className="primary-btn-back float-right hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
            </Link>

            <button
              type="submit"
              className="primary-btn float-right"
              onClick={() => {
                orderState.logoName.trim() == ""
                  ? toast.warn("Please enter your logo name")
                  : router.push("/premium/order-confirm");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumLogoColors;

function valuetext(value) {
  return `${value}`;
}

PremiumLogoColors.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
