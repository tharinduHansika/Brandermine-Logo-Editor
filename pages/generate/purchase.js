import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import CommonQuestions from "../../components/CommonQuestions";
import { hookstate, useHookstate } from "@hookstate/core";
import { logostore } from "../../store/logostore";
import InlineSVG from "react-inlinesvg";
import { createOrder } from "../../api_calls/firebase";
import { CircularProgress } from "@mui/material";

const accordionData = [
  {
    title: "What does the logo branding bundle contains?",
    content: `Your logo will be provided to you in several sizes, colors, and formats that are compatible with all your digital assets. Depending on business requirements, you can obtain social media kit and brand guidelines. `,
  },
  {
    title: "Do I keep complete ownership of the design assets I've saved?",
    content: `Yes, The rights for your saved design will be yours forever after you purchase any package`,
  },
  {
    title: "What support do you offer?",
    content: `We offer 24x7 Live chat and email support. Our average response time though chat is between 10 - 15 minutes.`,
  },
  {
    title:
      "How much time does it take to generate the designs in my Brand Kit?",
    content: `Almost instant. All branding kits are provided with the logo instantly and only customized business cards are provided after 24 hrs of purchase.`,
  },
  {
    title: "Does my Brand Kit update when I change my logo?",
    content: `Yes, all of the designs in your brand kit update when you change your logo. We do not automatically update any designs that you have personally customized.`,
  },
];

const GenerateSearchIndustry = () => {
  const router = useRouter();
  const { brand_name, slogan, lid } = router.query;
  const logostate = useHookstate(logostore);
  const [isLoading, setLoading] = useState(false);

  const buyNow = async (packId) => {
    setLoading(true);
    await createOrder({
      packageId: packId,
      brand_name: brand_name,
      slogan: slogan,
      lid: lid,
    });
    await localStorage.setItem(
      "svg",
      logostate.svg.get()
        ? logostate.svg
            .get()
            .replace("Brandermine", brand_name)
            .replace("Logo Editor", slogan)
        : "",
    );
    setLoading(false);
    let payment_id = Date.now();
    router.push(
      `/api/stripe/checkout_session?token=asdadw&payment_type=direct_buy&order_id=${payment_id}&package_id=${packId}&brand_name=${brand_name}&slogan=${slogan}`,
    );
  };

  return (
    <>
      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 py-12 mt-12">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-4 sm:col-span-4">
            <div className="w-full">
              {logostate.get().svg && (
                <InlineSVG
                  scale={5}
                  src={logostate
                    .get()
                    .svg.replace("Brandermine", brand_name)
                    .replace("Logo Editor", slogan)}
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 sm:col-span-8 px-4 lg:px-16 md:px-16 sm:px-16 my-4 sm:my-0 sm:py-0 flex flex-col items-start">
            <h1 className="step6-title ">
              Chose a package that better suits you
            </h1>
            <h1 className="step6-description mt-4">
              Get high quality Source files (.png, .jpg, .svg, .pdf etc.) (.png,
              .svg, .pdf etc..) you can use everywhere on your website, social
              media and much more.
            </h1>
          </div>
        </div>
      </div>

      {/* packages starts */}

      <div className="container max-w-[1300px] mx-auto text-center pt-6 pb-12 px-4 md:px-6">
        <h1 className="card-title pb-2 text-left">Package Pricing</h1>
        <p className="text-[#1A1D5A] branding-title text-left mb-12">
          Join 10,000+ happy customers who used Brandermine to grow their
          business
        </p>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col border-[#E5E5E5] border rounded-md text-center pb-6">
              <div className="bg-[#11D86C] p-8 w-full rounded-t-md">
                <h3 className="package-title text-white">Basic</h3>
              </div>

              <div class="w-full overflow-hidden flex flex-row justify-center">
                <div class=" h-6 w-6 bg-[#11D86C] -rotate-45 transform origin-top-left"></div>
              </div>

              <div className="px-16 md:px-8 lg:px-8 xl:px-16">
                <div className="flex justify-center items-center mt-6">
                  <h3 className="package-price">$15</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">Logo package for beginner</p>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => buyNow(0)}
                    className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[#11D86C] hover:text-white"
                  >
                    {isLoading ? <CircularProgress /> : "Select"}
                  </button>
                </div>

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption hover:text-[#5022B8] cursor-pointer">
                    Download sample file
                  </p>
                </div>

                <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">High resolution</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Unlimited changes</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">
                    Logo transparent file (.png, .jpg) (.png, .jpg)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col border-[#5022B8] border-2 rounded-md text-center pb-6">
              <div className="bg-[#5022B8] p-8 w-full rounded-t-md relative">
                <h3 className="package-title text-white">Standard</h3>

                <p className="drop-shadow-md absolute -top-5 -right-5 pricing-tag text-[#5022B8] bg-[#ffffff] p-2 rounded-lg">
                  Most Popular
                </p>
              </div>

              <div class="w-full overflow-hidden flex flex-row justify-center">
                <div class=" h-6 w-6 bg-[#5022B8] -rotate-45 transform origin-top-left"></div>
              </div>

              <div className="px-16 md:px-8 lg:px-8 xl:px-16">
                <div className="flex justify-center items-center mt-6">
                  <h3 className="package-price">$30</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">
                    Starting a business from here
                  </p>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => buyNow(0)}
                    className="border-[#B1B1B1] border-1 rounded px-4 py-2 w-full package-button bg-[#5022B8] hover:bg-[#6b42ca] text-white"
                  >
                    {isLoading ? <CircularProgress /> : "Select"}
                  </button>
                </div>

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption hover:text-[#5022B8] cursor-pointer">
                    Download sample file
                  </p>
                </div>

                <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">High resolution</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Unlimited changes</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">
                    Logo transparent file (.png, .jpg)
                  </p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">
                    Source files (.png, .jpg, .svg, .pdf etc.)
                  </p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Social media kit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col border-[#E5E5E5] border rounded-md text-center pb-6">
              <div className="bg-[#F77700] p-8 w-full rounded-t-md relative">
                <h3 className="package-title text-white">Premium</h3>

                <p className="drop-shadow-md absolute -top-5 -right-5 pricing-tag text-[#F77700] bg-[#ffffff] p-2 rounded-lg">
                  Recommended
                </p>
              </div>

              <div class="w-full overflow-hidden flex flex-row justify-center">
                <div class=" h-6 w-6 bg-[#F77700] -rotate-45 transform origin-top-left"></div>
              </div>

              <div className="px-16 md:px-8 lg:px-8 xl:px-16">
                <div className="flex justify-center items-center mt-6">
                  <h3 className="package-price">$100</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">Everything you need</p>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => buyNow(0)}
                    className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[#F77700] hover:text-white"
                  >
                    {isLoading ? <CircularProgress /> : "Select"}
                  </button>
                </div>

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption hover:text-[#5022B8] cursor-pointer">
                    Download sample file
                  </p>
                </div>

                <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">
                    Everything in Advanced package
                  </p>
                </div>

                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Business card</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Brand kit</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Stationery designs</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Branding guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq starts */}

      <div className="container max-w-[1300px] mx-auto text-center px-4 md:px-6 py-12 mb-12">
        <h1 className="card-title">Common Questions</h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <CommonQuestions title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GenerateSearchIndustry;

GenerateSearchIndustry.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
