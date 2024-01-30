import React from "react";
import MainLayout from "../../components/layout/main";
import Link from "next/link";
import { useHookstate } from "@hookstate/core";
import { premiumStore } from "../../store/premiumstore";
import { colors } from "../../components/data/premium";
import { getColorPalettes } from "../../api_calls/place_order/getColorPalettes";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placePremOrder } from "../../store/slice/premiumOrderSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function PremiumLogoColors() {
  const orderState = useSelector((state) => state.premiumOrder);
  const dispatch = useDispatch();
  const router = useRouter();
  const premstate = useHookstate(premiumStore);
  const [colorPalettes, setColorPalettes] = useState([]);

  const fetchColorPalttes = async () => {
    try {
      const { data } = await getColorPalettes();

      setColorPalettes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchColorPalttes();
  }, []);

  return (
    <>
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <p className="step text-left mb-2">STEP 2/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-inactive mr-1"></div>
              <div className="step-inactive"></div>
            </div>

            <h3 className="step-title mt-4">Chose preferred color palette </h3>
            <h3 className="step-title2">
              Find the perfect color palette to style your business logo.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            {/* <Link href="/premium/style">
              <p
                className="no-underline hover:text-[#5022b8] cursor-pointer"
                onClick={() =>
                  dispatch(
                    placePremOrder({
                      colorPalette: "",
                      colorPaletteUrl: "",
                      colorName: "",
                      extraColorRequirement: "",
                      extraColorAttachment: "",
                    }),
                  )
                }
              >
                SKIP
              </p>
            </Link> */}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          {colorPalettes.map((i, n) => {
            return (
              <div
                key={n}
                className="col-span-12 md:col-span-3"
                onClick={() =>
                  dispatch(
                    placePremOrder({
                      colorPalette: i._id,
                      colorPaletteUrl: i.image,
                      colorName: i.name,
                    }),
                  )
                }
              >
                {orderState.colorPalette && orderState.colorPalette == i._id ? (
                  <>
                    <div className="relative">
                      <img
                        src={i.image}
                        className="w-full border-[#00B728] border-2 rounded-sm shadow-md"
                      />
                      <img
                        src="/images/samples/check.png"
                        className="absolute top-5 right-5"
                      />
                    </div>

                    <p className="colors-title">{i.name}</p>
                  </>
                ) : (
                  <>
                    <img
                      src={i.image}
                      className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
                    />
                    <p className="colors-title">{i.name}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col mt-8 text-left">
          <div className="">
            <p className="colors-title text-[#404145] mb-4">
              Do you have a color which better represent your business? Write to
              our designers about your requirement
            </p>

            <textarea
              className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              rows="6"
              cols="50"
              onChange={(e) =>
                dispatch(
                  placePremOrder({
                    extraColorRequirement: e.target.value,
                  }),
                )
              }
              value={orderState.extraColorRequirement}
              placeholder="Type here"
            />
          </div>

          <div className="mt-6">
            <p className="colors-title text-[#404145] mb-4">
              Do you have an image or document that might be helpful?
            </p>

            <input
              id="selectImage"
              placeholder="Choose file"
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) {
                  dispatch(
                    placePremOrder({
                      extraColorAttachment: e.target.files[0],
                      // extraColorAttachment: "smaple file",
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
            <Link href="/premium/sample">
              <button
                type="submit"
                className="primary-btn-back float-right mt-6 sm:mt-0 hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
            </Link>

            <button
              type="submit"
              className="primary-btn float-right"
              onClick={() => {
                orderState.colorPalette == ""
                  ? toast.warn("Please select a color palette")
                  : router.push("/premium/style");
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

PremiumLogoColors.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
