import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Testomonials from "../components/Testomonials";
import CommonQuestions2 from "../components/CommonQuestions2";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Slider from "../components/Slider";
import Link from "next/link";
import Slider4 from "../components/Slider4";
import CommonQuestions from "../components/CommonQuestions";

const accordionData = [
  {
    title: "What should I chose? Logo maker or Custom Logo maker",
    content: `Logo maker is quick. You can chose among several AI generated creative logos according to your inputs. But Custom Logo Maker brings every small detailing to your logo from choosing  color, styling and more. If you know what exactly you want, you can chose Custom Logo Maker feature `,
  },
  {
    title: "What is the deliver time between Logo Maker and Custom Logo Maker?",
    content: `Logo Maker generates your logo in few clicks with instant download feature while Custom Logo Maker brings much detailing to your logo. See the package details above for delivery time and branding kits provided`,
  },
  {
    title: "Do I keep complete ownership of the design assets I've saved?",
    content: `Yes, The rights your saved design will be your forever after you purchase any package`,
  },
  {
    title: "Does my Brand Kit update when I change my logo?",
    content: `Yes, all of the designs in your brand kit update when you change your logo. We do not automatically update any designs that you have personally customized.`,
  },
];

function pricing() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <h1 className="card-title-pricing pb-4 text-center leading-[44px] sm:leading-[44px] sm:text-[40px] text-[38px]">
          Our Logo Packages
        </h1>
        <p className="text-[#1A1D5A] branding-title2">
          Join 10,000+ happy customers who used Brandermine to grow their
          business
        </p>
      </div>

      {/* packages starts */}

      <div className="container max-w-[1300px] mx-auto text-center pt-6 pb-12 px-4 md:px-6">
        <h1 className="card-title-pricing pb-4 text-left leading-[44px] sm:leading-[44px] sm:text-[40px] text-[38px]">
          Logo Maker Package
        </h1>
        <p className="text-[#1A1D5A] branding-title2 text-left mb-12 leading-[32px] sm:leading-[44px] sm:text-[24px] text-[24px]">
          Get your logo made in few clicks
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

                {/* <div className="mt-12">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button">
                      Select
                    </button>
                  </Link>
                </div> */}

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption">Download sample file</p>
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

                {/* <div className="mt-12">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border-1 rounded px-4 py-2 w-full package-button bg-[#5022B8] text-white">
                      Select
                    </button>
                  </Link>
                </div> */}

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption">Download sample file</p>
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

                {/* <div className="mt-12">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button">
                      Select
                    </button>
                  </Link>
                </div> */}

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption">Download sample file</p>
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

      {/* packages starts */}

      <div className="container max-w-[1300px] mx-auto text-center pt-6 pb-12 px-4 md:px-6">
        <h1 className="card-title-pricing pb-4 text-left leading-[44px] sm:leading-[44px] sm:text-[40px] text-[38px]">
          Custom Logo Maker Package
        </h1>
        <p className="text-[#1A1D5A] branding-title2 text-left mb-12 leading-[32px] sm:leading-[44px] sm:text-[24px] text-[24px]">
          We bring your imagination to reality with custom logo maker
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
                  <h3 className="package-price">$40</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">Logo package for beginner</p>
                </div>

                <div className="flex justify-center align-center mt-3">
                  <div>
                    <img
                      src="/images/strength/Fast delivery.svg"
                      className="w-4 pt-1 mr-2"
                    />
                  </div>
                  <div>
                    <p className="package-caption">One day delivery</p>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button">
                      Select
                    </button>
                  </Link>
                </div> */}

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption">Download sample file</p>
                </div>

                <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">01 Logo concept</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Unlimited revisions</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">High resolution files</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Logo transparent file</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Source files</p>
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
                  <h3 className="package-price">$100</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">
                    starting a business with here
                  </p>
                </div>

                <div className="flex justify-center align-center mt-3">
                  <div>
                    <img
                      src="/images/strength/Fast delivery.svg"
                      className="w-4 pt-1 mr-2"
                    />
                  </div>
                  <div>
                    <p className="package-caption">One day delivery</p>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border-1 rounded px-4 py-2 w-full package-button bg-[#5022B8] text-white">
                      Select
                    </button>
                  </Link>
                </div> */}

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption">Download sample file</p>
                </div>

                <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">02 Logo concepts</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Unlimited revisions</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">High resolution files</p>
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
                  <p className="package-description">Business card</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Social media kit</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Copyright document</p>
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
                  <h3 className="package-price">$150</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">
                    Everything you need to start your business
                  </p>
                </div>

                <div className="flex justify-center align-center mt-3">
                  <div>
                    <img
                      src="/images/strength/Fast delivery.svg"
                      className="w-4 pt-1 mr-2"
                    />
                  </div>
                  <div>
                    <p className="package-caption">One day delivery</p>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button">
                      Select
                    </button>
                  </Link>
                </div> */}

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption">Download sample file</p>
                </div>

                <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">03 Logo concepts</p>
                </div>

                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">
                    Everything in standard package
                  </p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Stationary designs</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Branding guidelines</p>
                </div>
                <div className="flex justify-start ml-6 align-center mb-4">
                  <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                  <p className="package-description">Any file type you want</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <h1 className="card-title-pricing">
          10,000+ businesses around the world trust Brandermine for their brand
        </h1>
      </div>

      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <h1 className="card-title-pricing">Common Questions</h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <CommonQuestions title={title} content={content} />
          ))}
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto py-12">
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto py-12">
        <Footer2 />
      </div>
    </div>
  );
}

export default pricing;
