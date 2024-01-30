import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Slider from "@mui/material/Slider";
import DashboardLayout from "../../components/layout/dashboard";
import { useRouter } from "next/router";
import { app, getUID } from "../../api_calls/firebase";
import { LinearProgress } from "@mui/material";
import { download } from "../../api_calls/firebase_storage";
import { getFirestore, doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { getOrderById } from "../../api_calls/dashboard/getOrderById";
import { useState } from "react";

function valuetext(value) {
  return `${value}`;
}

function PremiumOrderSummary() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const error = false;

  const fetchOrderById = async (oid) => {
    try {
      const { data } = await getOrderById({ orderId: oid });

      setLoading(false);
      setOrder(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { oid } = router.query;

    if (oid) {
      fetchOrderById(oid);
    }

    // if (oid == null) {
    //   router.push("/dashboard/orders");
    // }
  }, [router.query]);

  // const [value, loading, error] = useDocument(doc(getFirestore(app), 'orders', oid));

  return (
    <div>
      {error && <strong>Error</strong>}
      {loading && <LinearProgress color="primary" />}
      {order && (
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col flex-1">
            <div className="p-4 sm:p-8 flex-1">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 bg-[#5022B8] rounded-lg p-8">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                      <p className="colors-title text-[28px] text-[#ffffff] mb-4 text-left">
                        {order.orderType}
                      </p>

                      <div className="flex flex-row items-center">
                        <p className="colors-title text-[#ffffff] mr-4 text-left">
                          {order.name} Package
                        </p>

                        <p className="colors-title text-[#5022B8] text-left bg-white rounded-lg px-4 py-2">
                          {order.price} $
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <p className="colors-title font-[200] text-[28px] text-[#ffffff] mb-4 text:left sm:text-right">
                        Order No - {order.orderId}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 mt-6">
                  <p className="colors-title text-[28px] text-[#404145] mb-4 text-left">
                    Order details
                  </p>
                </div>

                <div className="col-span-12">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Which designs do you like ?
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <img
                    src={order.logoType?.image || ""}
                    className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
                  />
                </div>
                {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
        SKIP
      </div> */}

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Colors to explore
                  </p>
                </div>

                <div className="col-span-6 md:col-span-3">
                  <img
                    src={order.colorPalette?.image}
                    className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
                  />
                  <p className="colors-title">{order.colorPalette?.name}</p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Other color requirements
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.extraColorRequirement || "N/A"}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Attachments
                  </p>

                  {/* {value.data().color_file && ( */}
                  <button
                    type="button"
                    onClick={() => download(order.extraColorAttachment)}
                    className={`primary-btn ${
                      order.extraColorAttachment == "" && "pointer-events-none"
                    }`}
                  >
                    Download
                  </button>
                  {/* )} */}
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Your brand’s style
                  </p>

                  <div className="grid grid-cols-12 mt-8 p-4">
                    {/* slider 1 */}
                    <div className="col-span-12 md:col-span-2 hidden md:grid">
                      <p className="slider-text text-left px-12">Classic</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 md:hidden">
                      <p className="float-left slider-text">Classic</p>
                      <p className="float-right slider-text">Modern</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 mb-8">
                      <Slider
                        aria-label="Temperature"
                        value={
                          order.brandStyle?.classic > 0
                            ? order.brandStyle?.classic * -1
                            : order.brandStyle?.modern
                        }
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-3}
                        max={3}
                        track={false}
                        // disabled
                      />
                    </div>

                    <div className="col-span-12 md:col-span-2 hidden md:block">
                      <p className="slider-text text-left px-8">Modern</p>
                    </div>

                    {/* slider 2 */}

                    <div className="col-span-12 md:col-span-2 hidden md:grid">
                      <p className="slider-text text-left px-12">Accessible</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 md:hidden">
                      <p className="float-left slider-text">Accessible</p>
                      <p className="float-right slider-text">Premium</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 mb-8">
                      <Slider
                        aria-label="Temperature"
                        value={
                          order.brandStyle?.accessible > 0
                            ? order.brandStyle?.accessible * -1
                            : order.brandStyle?.premium
                        }
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-3}
                        max={3}
                        track={false}
                        // disabled
                      />
                    </div>

                    <div className="col-span-12 md:col-span-2 hidden md:block">
                      <p className="slider-text text-left px-8">Premium</p>
                    </div>

                    {/* slider 3 */}

                    <div className="col-span-12 md:col-span-2 hidden md:grid">
                      <p className="slider-text text-left px-12">Simple</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 md:hidden">
                      <p className="float-left slider-text">Simple</p>
                      <p className="float-right slider-text">Serious</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 mb-8">
                      <Slider
                        aria-label="Temperature"
                        value={
                          order.brandStyle?.simple > 0
                            ? order.brandStyle?.simple * -1
                            : order.brandStyle?.serious
                        }
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-3}
                        max={3}
                        track={false}
                        // disabled
                      />
                    </div>

                    <div className="col-span-12 md:col-span-2 hidden md:block">
                      <p className="slider-text text-left px-8 ">Serious</p>
                    </div>

                    {/* slider 4 */}

                    <div className="col-span-12 md:col-span-2 hidden md:grid">
                      <p className="slider-text text-left px-12">Fun</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 md:hidden">
                      <p className="float-left slider-text">Fun</p>
                      <p className="float-right slider-text">Sophisticated</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 mb-8">
                      <Slider
                        aria-label="Temperature"
                        value={
                          order.brandStyle?.fun > 0
                            ? order.brandStyle?.fun * -1
                            : order.brandStyle?.sophisticated
                        }
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-3}
                        max={3}
                        track={false}
                        // disabled
                      />
                    </div>

                    <div className="col-span-12 md:col-span-2 hidden md:block">
                      <p className="slider-text text-left px-8">
                        Sophisticated
                      </p>
                    </div>

                    {/* slider 5 */}

                    <div className="col-span-12 md:col-span-2 hidden md:grid">
                      <p className="slider-text text-left px-12">Traditional</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 md:hidden">
                      <p className="float-left slider-text">Traditional</p>
                      <p className="float-right slider-text">Innovative</p>
                    </div>

                    <div className="col-span-12 md:col-span-8 mb-8">
                      <Slider
                        aria-label="Temperature"
                        value={
                          order.brandStyle?.traditional > 0
                            ? order.brandStyle?.traditional * -1
                            : order.brandStyle?.innovative
                        }
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={-3}
                        max={3}
                        track={false}
                        // disabled
                      />
                    </div>

                    <div className="col-span-12 md:col-span-2 hidden md:block">
                      <p className="slider-text text-left px-8">Innovative</p>
                    </div>

                    {/* slider ends */}
                  </div>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="sample-title text-left">Logo design brief</p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    What name do you want in your logo
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.logoName}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Slogan
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.slogan || "N/A"}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Select Industry
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.industry || "N/A"}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Describe target Audiance
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.audianceInfo || "N/A"}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Discribe About your required font family
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.fontInfo || "N/A"}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Attachments
                  </p>

                  {/* {value.data().font_file && ( */}
                  <button
                    type="button"
                    onClick={() => download(order.fontAttchment)}
                    className={`primary-btn ${
                      order.fontAttchment == "" && "pointer-events-none"
                    }`}
                  >
                    Download
                  </button>
                  {/* )} */}
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Is there anything you would like to communicate with
                    designer ?
                  </p>

                  <p className="step5-text text-[#797979] mt-0">
                    {order.extraInfo || "N/A"}
                  </p>
                </div>

                <div className="col-span-12 mt-4">
                  <p className="colors-title text-[#404145] mb-4 text-left">
                    Attachments
                  </p>

                  {/* {value.data().scketch_file && ( */}
                  <button
                    type="button"
                    onClick={() => download(order.extraAttachment)}
                    className={`primary-btn ${
                      order.extraAttachment == "" && "pointer-events-none"
                    }`}
                  >
                    Download
                  </button>
                  {/* )} */}
                </div>

                {/* <div className="col-span-12 mt-4">
              <button type="submit" className="primary-btn float-right">
                Submit
              </button>
            </div> */}

                <div className="col-span-12 mt-4">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PremiumOrderSummary;
PremiumOrderSummary.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
