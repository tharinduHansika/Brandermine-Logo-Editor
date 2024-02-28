import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar3 } from "../components/Navbar3";
import Logomakingstep03 from "../components/Logomakingstep03";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";

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

const collecting_data_step_6 = () => {
  const router = useRouter();
  const { brand_name } = router.query;

  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar3 />

      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 py-12 mt-12">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-4 sm:col-span-4">
            <img src="/images/blog/Right-color.webp" className="w-full" />
          </div>
          <div className="col-span-12 space-y-4 md:col-span-8 sm:col-span-8 px-4 lg:px-16 md:px-16 sm:px-16 my-4 sm:my-0 sm:py-0 flex flex-col items-start">
            <h1 className="step6-title leading-10">
              Choose a package that better suits you.
            </h1>
            <h1 className="step6-description mt-4 leading-6">
              Build a strong brand with high-quality logo files you can use
              everywhere-on your website, social media, in print, and much more.
            </h1>
          </div>
        </div>
      </div>

      {/* packages starts */}

      <div className="container max-w-[1300px] mx-auto text-center pt-6 pb-12 px-4 md:px-6">
        <h1 className="card-title pb-2 text-left">Logo generator pricing</h1>
        <p className="text-[#1A1D5A] branding-title text-left mb-12">
          Download whatever, cancel whenever
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
                  <Link href="/payment" legacyBehavior>
                    <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[#11D86C] hover:text-white">
                      Select
                    </button>
                  </Link>
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
                  <p className="package-description">Unlimited revisions</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Logo transparent file</p>
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
                    starting a business with here
                  </p>
                </div>

                <div className="mt-12">
                  <Link href="/payment" legacyBehavior>
                    <button className="border-[#B1B1B1] border-1 rounded px-4 py-2 w-full package-button bg-[#5022B8] hover:bg-[#6b42ca] text-white">
                      Select
                    </button>
                  </Link>
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
                  <p className="package-description">Logo transparent file</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Source files</p>
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
                  <p className="package-caption">
                    Everything you need to start your business
                  </p>
                </div>

                <div className="mt-12">
                  <Link href="/payment" legacyBehavior>
                    <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[#F77700] hover:text-white">
                      Select
                    </button>
                  </Link>
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
                  <p className="package-description">Stationery Designs</p>
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

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer />
      </div>

      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
};

export default collecting_data_step_6;
