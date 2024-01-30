import React, { useEffect } from "react";
import CommonQuestions from "../../components/CommonQuestions";
import MainLayout from "../../components/layout/main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeblogsection from "../../components/Homeblogsection";
import Link from "next/link";
import { GenerateLogoTextBox } from "../../components/home/gen_logo_box";
import { getIndustries } from "../../api_calls/generate";

const accordionData = [
  {
    title:
      "Can I get a logo made for any industry?",
    content: `Yes. Of course! We have shortlisted all the possible industries around the world and created an AI powered logo maker to help your logo needs`,
  },
  {
    title: "What should I chose? Logo maker or Custom Logo maker",
    content: `Logo maker is quick. You can chose among several AI generated creative logos according to your inputs. But Custom Logo Maker brings every small detailing to your logo from choosing color, styling and more. If you know what exactly you want, you can chose Custom Logo Maker feature `,
  },
  {
    title:
      "What is the deliver time between Logo Maker and Custom Logo Maker?",
    content: `Logo Maker generates your logo in few clicks with instant download feature while Custom Logo Maker brings much detailing to your logo. See the package details above for delivery time and branding kits provided`,
  },
  {
    title:
      "How do I get a brand kit to promote my business?",
    content: `Start by generating your logo. You can chose our packages which includes brand kit details. Special custom requirements can be added to your brand kit getting in touch with our designers`,
  },
];

function BrandingKitIndex(props) {
  useEffect(() => {
    console.log(props)
  }, [])
  return (

    <>
      <div className="container max-w-[1300px] mx-auto text-center py-12 pb-8 sm:pb-24 px-4 md:px-6">
        <h1 className="logo-industry-title pt-12 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Need inspiring ideas for your logo design and don't know where to look? Use 350+ outstanding logo ideas from Brandermine
        </h1>

        {/* <p className="logo-industry-description mt-8">
          Whatever industry you’re creating a logo for, it helps to start with
          inspiration. Below, we’ve curated 2,100+ existing logo designs from 72
          of the most popular industries, and included design tips for each. So
          whether you’re branding a construction business or a food blog, your
          inspiration starts here.
          <br />
          <br />
          Ready to start creating a logo for your business? Use our online logo
          maker to generate an unlimited number of custom logo ideas in minutes.
        </p> */}
      </div>

      <div className="bg-[#eff4fb]">
        <div className="container max-w-[1300px] mx-auto text-center py-12 pb-8 sm:pb-24 px-4 md:px-6">
          <h1 className="logo-industry-title pt-0 sm:pt-12 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
            Logo ideas for your industry
          </h1>

          <div className="relative flex w-full sm:w-[450px] mt-8 justify-center items-center mx-auto">
            <input
              type="text"
              name="brand_name"
              className="focus:ring-[#5022b8] font-[400] text-black focus:border-[#5022b8] focus:border focus:ring-2 search-input relative px-3 w-full sm:w-[450px] h-[56px] bg-white rounded border-none placeholder-gray-400"
              placeholder='Type your industry'
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

          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <Link href="/industryLogo">
                <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                  Agriculturedfgdfgdfdfdfgdfg
                </p>
              </Link>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Creative
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Entertainment
              </p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Agriculture
              </p>
            </div>
            <div className="col-span-6 lg:col-span-2 sm:col-span-3 transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer">
              <p className="logo-industry-text px-4 py-3 bg-white rounded truncate">
                Business
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#5022B8] py-0 sm:py-12 mb-0 sm:mb-12">
        <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 flex flex-col items-center justify-center">
          <p className="blue-container-text1 mb-4">
            Design your own logo now!
          </p>
          <p className="blue-container-text2">
            You can now start creating a logo for any industry. Our AI powered logo maker is the best
          </p>

          <div className="mt-8">
            <GenerateLogoTextBox varient={3} />
          </div>
        </div>
      </div>
      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Frequently asked questions
        </h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <CommonQuestions title={title} content={content} />
          ))}
        </div>
      </div>
      <Homeblogsection />
    </>
  );
}

export default BrandingKitIndex;

BrandingKitIndex.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
    const inst = await getIndustries()
    return {
      props: {
        industries: [{
          ind:'sal',
          am:'ra'
        }]
      }, // will be passed to the page component as props
    }

}