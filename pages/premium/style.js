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

function PremiumLogoColors() {
  const orderState = useSelector((state) => state.premiumOrder);
  const dispatch = useDispatch();
  const premstate = useHookstate(premiumStore);

  return (
    <>
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <p className="step text-left mb-2">STEP 3/4</p>
            <div className="flex justify-start">
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-active mr-1"></div>
              <div className="step-inactive"></div>
            </div>

            <h3 className="step-title mt-4">Customize the brand style</h3>
            <h3 className="step-title2">
              Tell our designers how these values perfect the style of your logo
              to connect with your audience
            </h3>
          </div>
          {/* <div className="col-span-12 md:col-span-6 text-left skip md:text-right">
            SKIP
          </div> */}
        </div>

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
              track={false}
              min={-3}
              max={3}
              // disabled
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Modern</p>
          </div>

          {/* slider 2 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Feminine</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Feminine</p>
            <p className="float-right slider-text">Masculine</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={0}
              getAriaValueText={valuetext}
              value={
                orderState.brandStyle.feminine > 0
                  ? orderState.brandStyle.feminine * -1
                  : orderState.brandStyle.masculine
              }
              onChange={(e) => {
                const { value } = e.target;

                value < 0
                  ? dispatch(
                      placePremOrder({
                        brandStyle: {
                          ...orderState.brandStyle,
                          feminine: value * -1,
                          masculine: 0,
                        },
                      }),
                    )
                  : dispatch(
                      placePremOrder({
                        brandStyle: {
                          ...orderState.brandStyle,
                          feminine: 0,
                          masculine: value,
                        },
                      }),
                    );
              }}
              valueLabelDisplay="auto"
              step={1}
              marks
              track={false}
              min={-3}
              max={3}
              // disabled
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Masculine</p>
          </div>

          {/* slider 3 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Simple</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Simple</p>
            <p className="float-right slider-text">Complex</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={0}
              getAriaValueText={valuetext}
              value={
                orderState.brandStyle.simple > 0
                  ? orderState.brandStyle.simple * -1
                  : orderState.brandStyle.complex
              }
              onChange={(e) => {
                const { value } = e.target;

                value < 0
                  ? dispatch(
                      placePremOrder({
                        brandStyle: {
                          ...orderState.brandStyle,
                          simple: value * -1,
                          complex: 0,
                        },
                      }),
                    )
                  : dispatch(
                      placePremOrder({
                        brandStyle: {
                          ...orderState.brandStyle,
                          simple: 0,
                          complex: value,
                        },
                      }),
                    );
              }}
              valueLabelDisplay="auto"
              step={1}
              marks
              track={false}
              min={-3}
              max={3}
              // disabled
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8 ">Complex</p>
          </div>

          {/* slider 4 */}

          <div className="col-span-12 md:col-span-2 hidden md:grid">
            <p className="slider-text text-left px-12">Artistic</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:hidden">
            <p className="float-left slider-text">Artistic</p>
            <p className="float-right slider-text">Bold</p>
          </div>

          <div className="col-span-12 md:col-span-8 mb-8">
            <Slider
              aria-label="Temperature"
              defaultValue={0}
              getAriaValueText={valuetext}
              value={
                orderState.brandStyle.artistic > 0
                  ? orderState.brandStyle.artistic * -1
                  : orderState.brandStyle.bold
              }
              onChange={(e) => {
                const { value } = e.target;

                value < 0
                  ? dispatch(
                      placePremOrder({
                        brandStyle: {
                          ...orderState.brandStyle,
                          artistic: value * -1,
                          bold: 0,
                        },
                      }),
                    )
                  : dispatch(
                      placePremOrder({
                        brandStyle: {
                          ...orderState.brandStyle,
                          artistic: 0,
                          bold: value,
                        },
                      }),
                    );
              }}
              valueLabelDisplay="auto"
              step={1}
              marks
              track={false}
              min={-3}
              max={3}
              // disabled
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Bold</p>
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
              track={false}
              min={-3}
              max={3}
              // disabled
            />
          </div>

          <div className="col-span-12 md:col-span-2 hidden md:block">
            <p className="slider-text text-left px-8">Innovative</p>
          </div>

          {/* slider ends */}
        </div>

        <div className="flex flex-col text-left">
          <div className="mt-12 flex flex-row items-center justify-between">
            <Link href="/premium/colors">
              <button
                type="submit"
                className="primary-btn-back float-right hover:bg-[#5022b8] hover:text-white"
              >
                Back
              </button>
            </Link>

            <Link href="/premium/order-brief">
              <button type="submit" className="primary-btn float-right">
                Next
              </button>
            </Link>
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
