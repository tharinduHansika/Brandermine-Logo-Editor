import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/main";
import Slider from "@mui/material/Slider";

import { useHookstate } from "@hookstate/core";
import { premiumStore } from "../../store/premiumstore";
import { createPremiumLogoRequest } from "../../api_calls/firebase";
import { authState } from "../../store/authstore";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPlacedPremOrder,
  placePremOrder,
} from "../../store/slice/premiumOrderSlice";
import { placeOrder } from "../../api_calls/place_order/placeOrder";
import { handleUpload } from "../../api_calls/firebase_storage";

function PremiumLogoColors() {
  const orderState = useSelector((state) => state.premiumOrder);
  const dispatch = useDispatch();
  const premstate = useHookstate(premiumStore);
  const astate = useHookstate(authState);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const saveRequest = async () => {
    setSubmitted(true);
    setisLoading(true);
    if (!astate.isAuthenticated.get()) {
      astate.isAuthRequired.set(true);
      setisLoading(false);
    } else {
      saveToFb();
    }
  };

  const saveToFb = async () => {
    setisLoading(true);
    // const id = await createPremiumLogoRequest(premstate.get());

    const { extraColorAttachment, fontAttchment, extraAttachment } = orderState;

    let attachment = {
      color: "",
      font: "",
      extra: "",
    };

    if (extraColorAttachment.name) {
      attachment.color = await handleUpload(
        `/order-attachments/${orderState.orderId}`,
        orderState.extraColorAttachment,
      );
    }

    if (fontAttchment.name) {
      attachment.font = await handleUpload(
        `/order-attachments/${orderState.orderId}`,
        orderState.fontAttchment,
      );
    }

    if (extraAttachment.name) {
      attachment.extra = await handleUpload(
        `/order-attachments/${orderState.orderId}`,
        orderState.extraAttachment,
      );
    }

    const payload = {
      orderId: orderState.orderId,
      price: orderState.price * 1,
      orderType: orderState.orderType,
      packageType: orderState.packageType,
      logoType: orderState.logoType,
      colorPalette: orderState.colorPalette,
      extraColorRequirement: orderState.extraColorRequirement,
      extraColorAttachment: attachment.color,
      brandStyle: {
        ...orderState.brandStyle,
      },
      logoName: orderState.logoName,
      slogan: orderState.slogan,
      industry: orderState.industry,
      audianceInfo: orderState.audianceInfo,
      fontInfo: orderState.fontInfo,
      fontAttchment: attachment.font,
      extraInfo: orderState.extraInfo,
      extraAttachment: attachment.extra,
      status: orderState.status,
    };
    const { data } = await placeOrder(payload);

    dispatch(clearPlacedPremOrder());

    setisLoading(false);
    router.push("/dashboard/premium_order?oid=" + data._id);
    setSubmitted(false);
  };

  useEffect(() => {
    if (submitted) {
      saveToFb();
    }
  }, [astate.isAuthenticated.get()]);

  return (
    <>
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Which designs do you like ?
            </p>
          </div>

          <div className="col-span-12 md:col-span-6">
            {orderState.logoUrl ? (
              <>
                <img
                  src={orderState.logoUrl}
                  className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
                />
              </>
            ) : (
              <p className="step5-text text-[#797979] mt-0">No design</p>
            )}
          </div>
          {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Preferred color palette
            </p>
          </div>

          {orderState.colorPaletteUrl ? (
            <>
              <div className="col-span-6 md:col-span-3">
                <img
                  src={orderState.colorPaletteUrl}
                  className="w-full active:border-[#00B728] active:border-2 rounded-sm shadow-md border-transparent border-2"
                />
                <p className="colors-title">{orderState.colorName}</p>
              </div>
            </>
          ) : (
            <div className="col-span-6 md:col-span-3">
              <p className="step5-text text-[#797979] mt-0 flex">
                No color palette
              </p>
            </div>
          )}

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Other color requirements
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.extraColorRequirement || "No color requirement"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Attachments
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.extraColorAttachment?.name || "No Attachments"}
            </p>
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
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  value={
                    orderState.brandStyle.classic > 0
                      ? orderState.brandStyle.classic * -1
                      : orderState.brandStyle.modern
                  }
                  onChange={(e) => {
                    const { value } = e.target;

                    value < 0
                      ? dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              classic: value * -1,
                              modern: 0,
                            },
                          }),
                        )
                      : dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              modern: value,
                              classic: 0,
                            },
                          }),
                        );
                  }}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-3}
                  max={3}
                  track={false}
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
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  value={
                    orderState.brandStyle.accessible > 0
                      ? orderState.brandStyle.accessible * -1
                      : orderState.brandStyle.premium
                  }
                  onChange={(e) => {
                    const { value } = e.target;

                    value < 0
                      ? dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              accessible: value * -1,
                              premium: 0,
                            },
                          }),
                        )
                      : dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              accessible: 0,
                              premium: value,
                            },
                          }),
                        );
                  }}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-3}
                  max={3}
                  track={false}
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
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  value={
                    orderState.brandStyle.simple > 0
                      ? orderState.brandStyle.simple * -1
                      : orderState.brandStyle.serious
                  }
                  onChange={(e) => {
                    const { value } = e.target;

                    value < 0
                      ? dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              simple: value * -1,
                              serious: 0,
                            },
                          }),
                        )
                      : dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              simple: 0,
                              serious: value,
                            },
                          }),
                        );
                  }}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-3}
                  max={3}
                  track={false}
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
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  value={
                    orderState.brandStyle.fun > 0
                      ? orderState.brandStyle.fun * -1
                      : orderState.brandStyle.sophisticated
                  }
                  onChange={(e) => {
                    const { value } = e.target;

                    value < 0
                      ? dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              fun: value * -1,
                              sophisticated: 0,
                            },
                          }),
                        )
                      : dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              fun: 0,
                              sophisticated: value,
                            },
                          }),
                        );
                  }}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-3}
                  max={3}
                  track={false}
                />
              </div>

              <div className="col-span-12 md:col-span-2 hidden md:block">
                <p className="slider-text text-left px-8">Sophisticated</p>
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
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  value={
                    orderState.brandStyle.traditional > 0
                      ? orderState.brandStyle.traditional * -1
                      : orderState.brandStyle.innovative
                  }
                  onChange={(e) => {
                    const { value } = e.target;

                    value < 0
                      ? dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              traditional: value * -1,
                              innovative: 0,
                            },
                          }),
                        )
                      : dispatch(
                          placePremOrder({
                            brandStyle: {
                              ...orderState.brandStyle,
                              traditional: 0,
                              innovative: value,
                            },
                          }),
                        );
                  }}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={-3}
                  max={3}
                  track={false}
                />
              </div>

              <div className="col-span-12 md:col-span-2 hidden md:block">
                <p className="slider-text text-left px-8">Innovative</p>
              </div>

              {/* slider ends */}
            </div>
          </div>

          <div className="col-span-12 mt-4">
            <p className="sample-title text-left">Logo brief</p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Your logo name
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.logoName || "No logo name"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">Slogan</p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.slogan || "No slogan"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Your Industry
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.industry || "No industry"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Who are your target audience
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.audianceInfo || "No audience"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Specific font family
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.fontInfo || "No font family"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Attachments
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState?.fontAttchment?.name || "No Attachments"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Is there any additional information you want to say to the
              designer?
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.extraInfo || "No additional information"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <p className="colors-title text-[#404145] mb-4 text-left">
              Attachments
            </p>

            <p className="step5-text text-[#797979] mt-0">
              {orderState.extraAttachment.name || "No Attachments"}
            </p>
          </div>

          <div className="col-span-12 mt-4">
            <button
              onClick={() => saveRequest()}
              type="submit"
              className="primary-btn float-right"
            >
              {isLoading && <CircularProgress />}
              {!isLoading && "Submit"}
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
