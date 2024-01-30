import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Testomonials from "../components/Testomonials";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Slider from "../components/Slider";
import Link from "next/link";

const accordionData = [
  {
    title:
      "Lorrem Ipsum is simply dummy text of the printing and typesetting ?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  },
  {
    title: "Lorem Ipsum is simply dummy text of ?",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
  },
];

function premiumLogo() {
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
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pb-4">
          Looking for your premium logo? <br />
          you are in the right place
        </h1>
        <p className="text-[#797979] blog-description">
          Buy your logo after fully customizing texts, layouts and colours with
          our professional team
        </p>
      </div>

      <Slider />

      <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pt-8 pb-0 sm:pb-8">
          Why select premium logo?
        </h1>

        {/* grid starts */}
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-3 border-b-2 md:md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/high-quality 1.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">High end design</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/copyright-symbol 2.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">Full Copyright Ownership</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/revisions.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">Unlimited revisions</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/Branding kit.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">Branding kit</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/Fast delivery.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">Fast delivery</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/Premium support.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">Premium support</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
            <section class="flex justify-center">
              <img
                src="/images/strength/All file types.svg"
                className="strength-icon"
              />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">All file types</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>

          <div className="col-span-12 md:col-span-3 p-8">
            <section class="flex justify-center">
              <img src="/images/strength/satisfaction.svg" className="h-9" />
            </section>
            <section className="d-flex justify-content-center">
              <p className="feature-title">100% satisfaction</p>
            </section>
            <section>
              <p class="feature-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* packages starts */}

      <div className="container max-w-[1300px] mx-auto text-center pt-0 sm:pt-6 pb-0 sm:pb-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Choose your package
        </h1>

        <div className="grid grid-cols-12 gap-8 pt-0 sm:pt-8">
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

                <div className="mt-6">
                  <Link href="/step1">
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

                <div className="mt-6">
                  <Link href="/step1">
                    <button className="border-[#B1B1B1] border-1 rounded px-4 py-2 w-full package-button bg-[#5022B8] text-white hover:bg-[#6b42ca]">
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

                <div className="mt-6">
                  <Link href="/step1">
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

      {/* content starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] sm:pb-8 pb-0">
          How to work on premium logo package
        </h1>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/prem/1.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-12">
              Enter your requirement
            </h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-12">Deliver your logo</h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/prem/2.png" />
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/prem/3.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-12">Make revision</h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-12 ">
              Finalized brand materials
            </h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/prem/4.png" />
          </div>
        </div>
      </div>

      {/* test starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pt-0 sm:pt-8">
          What our customers say
        </h1>

        <Testomonials />
      </div>

      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Common Questions
        </h1>

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

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer2 />
      </div>

      {/* <Herosection />
      <Homebrandsection />
      <Homecontentsection />
      <Homestrengthsection />
      <Homedesignlogosection />
      <Homeblogsection /> */}
    </div>
  );
}

export default premiumLogo;
