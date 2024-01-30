import React, { useEffect } from "react";
import MainLayout from "../../components/layout/main";
import Link from "next/link";
import { useHookstate } from "@hookstate/core";
import { premiumStore } from "../../store/premiumstore";
import { getSampleLogos } from "../../api_calls/place_order/getSampleLogos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placePremOrder } from "../../store/slice/premiumOrderSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
function PremiumLogoSample() {
  const orderState = useSelector((state) => state.premiumOrder);
  const dispatch = useDispatch();
  const router = useRouter();
  const [sampleLogos, setSmapleLogos] = useState([]);

  const fetchSampleLogs = async () => {
    try {
      const { data } = await getSampleLogos();

      setSmapleLogos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSampleLogs();
  }, []);

  return (
    <>
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <p className="step text-left mb-2">STEP 1/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-inactive mr-1"></div>
              <div className="step-inactive mr-1"></div>
              <div className="step-inactive"></div>
            </div>

            <h3 className="step-title mt-4">Select logo type</h3>
            <h3 className="step-title2">
              Find the perfect logo style to create your own brand identity
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6 text-left skip md:text-right ">
            {/* <Link href="/premium/colors">
              <p
                className="no-underline hover:text-[#5022b8] cursor-pointer"
                onClick={() =>
                  dispatch(placePremOrder({ logoType: "", logoUrl: "" }))
                }
              >
                SKIP
              </p>
            </Link> */}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          {sampleLogos.map((i, n) => {
            return (
              <div
                className="col-span-12 md:col-span-6"
                onClick={() =>
                  dispatch(
                    placePremOrder({
                      logoType: i._id,
                      logoUrl: i.image,
                    }),
                  )
                }
                key={n}
              >
                {orderState.logoType && orderState.logoType == i._id ? (
                  <>
                    <p className="sample-title">{i.name} Logo</p>

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
                  </>
                ) : (
                  <>
                    <p className="sample-title">{i.name} Logo</p>
                    <img
                      src={i.image}
                      className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
                    />
                  </>
                )}
              </div>
            );
          })}

          <div className="col-span-12 mt-6">
            <button
              type="submit"
              className="primary-btn  float-right"
              onClick={() => {
                orderState.logoType == ""
                  ? toast.warn("Please select a logo type")
                  : router.push("/premium/colors");
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

export default PremiumLogoSample;

PremiumLogoSample.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
