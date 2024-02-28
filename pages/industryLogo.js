import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import IndustryLogo from "../components/IndustryLogo";

export default function industryLogo() {
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="bg-cover bg-center bg-no-repeat pt-12 pb-12">
        <div className="container max-w-[1300px] mx-auto text-center px-4 md:px-6">
          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="col-span-12 sm:col-span-12">
              <h1 className="industry-logo-title mt-6 sm:mt-12 mb-3 sm:mb-6 text-center">
                Win over the hearts with an elegant wedding logo design!
              </h1>
            </div>
            {/* <div className="col-span-12 sm:col-span-2"></div> */}
            <div className="col-span-12 sm:col-span-12 flex justify-center flex-col items-center">
              <div className="max-w-[900px]">
                <h2 className="industry-logo-caption font-[Circular] sm:font-[CircularStd-Book] text-center">
                  Looking for Wedding logo inspiration? Browse the best Wedding
                  logo designs from companies big and small. Make the perfect
                  logo for your wedding, today!
                </h2>
              </div>
              {/* <div>
                <Link href="/collecting-data">
                  <a href="#create">
                    <button
                      type="submit"
                      className="flex items-center justify-center float-left search-btn1 text-white rounded w-full sm:w-[280px] mt-12 sm:mt-8 mb-12"
                    >
                      Design Your Own Logo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 ml-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </a>
                </Link>
              </div> */}
            </div>

            <div className="col-span-12 mt-6 mb-6">
              <div className="sm:flex w-full items-center justify-center block">
                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5022b8] focus:ring-1 search-input1 relative px-3 w-full sm:w-[350px] h-[56px] bg-white rounded focus:border-[#5022b8] border-[#CCCCCC] placeholder-gray-400 text-black"
                  placeholder="Enter your logo name"
                />

                <div>
                  <Link href="/collecting-data" legacyBehavior>
                    <button
                      type="submit"
                      className="search-btn1 text-white rounded w-full sm:min-w-[169px] px-4 my-4 sm:my-0 ml-0 sm:ml-4 flex items-center justify-center"
                    >
                      Generate Your Agriculture Logo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 ml-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-0 bg-[#eff4fb]">
        <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-16 pb-0 sm:pb-12 px-4 md:px-6">
          <h1 className="industry-logo-title2 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
            Choose your agriculture logo from Brandermine
          </h1>

          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="col-span-12 sm:flex flex-row items-center justify-center pb-6 block">
              <div className="flex flex-col mr-0 sm:mr-8">
                <label className="lable2">
                  <b>Business name</b>
                </label>

                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5022b8] focus:ring-1 search-input1 relative px-3 w-full sm:w-[350px] h-[56px] bg-white rounded focus:border-[#5022b8] border-[#CCCCCC] placeholder-gray-400 text-black"
                  placeholder="Logo name"
                />
              </div>

              <div className="flex flex-col mt-4 sm:mt-0">
                <label className="lable2">
                  <b>Slogan</b>
                </label>

                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5022b8] focus:ring-1 search-input1 relative px-3 w-full sm:w-[350px] h-[56px] bg-white rounded focus:border-[#5022b8] border-[#CCCCCC] placeholder-gray-400 text-black"
                  placeholder="Slogan goes here"
                />
              </div>
            </div>

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <IndustryLogo link="/images/industry/l5.png" />
            <IndustryLogo link="/images/industry/l6.png" />
            <IndustryLogo link="/images/industry/l7.png" />
            <IndustryLogo link="/images/industry/l8.png" />

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <IndustryLogo link="/images/industry/l5.png" />
            <IndustryLogo link="/images/industry/l6.png" />
            <IndustryLogo link="/images/industry/l7.png" />
            <IndustryLogo link="/images/industry/l8.png" />

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <IndustryLogo link="/images/industry/l5.png" />
            <IndustryLogo link="/images/industry/l6.png" />
            <IndustryLogo link="/images/industry/l7.png" />
            <IndustryLogo link="/images/industry/l8.png" />

            <IndustryLogo link="/images/industry/l1.png" />
            <IndustryLogo link="/images/industry/l2.png" />
            <IndustryLogo link="/images/industry/l3.png" />
            <IndustryLogo link="/images/industry/l4.png" />

            <div className="col-span-12 text-center flex flex-col items-center justify-center">
              <h1 className="logo-industry-title3 pt-6 pb-4">
                <b>Looking for more Ideas?</b>
              </h1>

              {/* <p className="logo-industry-description2 text-[#797979]">
                Create your own logo within 5 minutes
              </p> */}

              <button
                type="submit"
                className="flex items-center justify-center search-btn1 text-white rounded pl-2 w-full sm:w-[180px] mb-12"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="create" className="py-4 mb-12">
        <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="col-span-12 sm:col-span-12">
              <h1 className="industry-logo-title2 mt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
                How to create best wedding logo
              </h1>
              {/* <h1 className="logo-industry-title3 mt-8 text-[32px]">
                How to create best wedding logo
              </h1> */}

              <h2 className="sm:first-letter:text-4xl first-letter:[20px] first-letter:font-bold industry-logo-text mt-8 sm:mt-8 mb-8 sm:mb-8 text-center sm:text-left px-4 sm:px-0 sm:m-[120px] antialiased">
                <span className="sm:font-bold font-light">A</span> wedding is a
                ceremony in which two people become married. One's wedding day
                is the most remarkable and memorable day throughout the
                lifetime. Whether you are a wedding planner, wedding
                photographer or wedding venue owner, we are here to have a
                fantastic wedding logo design for you.
                <br />
                <br />
                Do you know, a wedding day is a commemorating day for throughout
                the life. In such a lucky say it is a great thing to share your
                ideas with them to have their dream success. Before interacting
                with your customers, your wedding logo design is the one that is
                doing the duty of grabbing the attention of customers towards
                your business.
                <br />
                <br />
                Likewise, a wedding is a combination of unity, love, passion,
                and happiness. Your trademark also must be rich with those
                properties. Your wedding logo design must surely win over the
                hearts of your clients, and it is the secret to the success of
                your business. No matter what your career engages in the field
                of the wedding, having an amazing, fantastic wedding logo
                design, no competitors will make in your path of success.
                <br />
                <br />
                Surprise your customers by having such an elegant wedding logo
                design from us. We are ready to give it to you. Over thousands
                of famous companies in the wedding, the field hires us to have
                their trademark uniquely. Our creative, skillful team of members
                will do the best creation for you.
                <br />
                <br />
                Hurry up! And enter our wedding logo design collection to choose
                the perfect one for you. Our AI-powered logo creator
                automatically matches font, format, and colors to have an
                elegant wedding logo design for you. Visit brandermine to
                connect with us.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#eff4fb]">
        <div className="container max-w-[1300px] mx-auto text-center py-12 sm:py-20 px-4 md:px-6">
          <h1 className="industry-logo-title2 mt-6 mb-6 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
            Create your Agriculture logo design in 5 minutes
          </h1>

          <div className="grid grid-cols-12 mb-8">
            <div className="col-span-12">
              <div className="sm:flex w-full items-center justify-center block">
                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5022b8] focus:ring-1 search-input1 relative px-3 w-full sm:w-[350px] h-[56px] bg-white rounded focus:border-[#5022b8] border-[#CCCCCC] placeholder-gray-400 text-black"
                  placeholder="Enter your logo name"
                />

                <div>
                  <Link href="/collecting-data" legacyBehavior>
                    <button
                      type="submit"
                      className="search-btn1 text-white rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4"
                    >
                      Generate Logo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 sm:py-12 px-4 md:px-6">
        <h1 className="industry-logo-title2 mt-6 mb-6 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          How to create best agriculture logo?
        </h1>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/howto/Rectangle.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-0">Select icon</h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center  text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-0">Select Colour</h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/howto/Rectangle2.png" />
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/howto/Rectangle3.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-0">Select Font</h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title pt-4 sm:pt-0">
              Create Social Media kit
            </h1>
            <p className="howto-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/howto/Rectangle2.png" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#5022B8] py-0 sm:py-12">
        <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 flex flex-col items-center justify-center">
          <p className="blue-container-text1 mb-4">
            Design an impressive Agriculture logo
          </p>
          <p className="blue-container-text2">
            Explore our design library to generate your business logo
          </p>

          <div className="mt-8">
            <input
              type="text"
              name="brand_name"
              className="focus:ring-[#ffffff] focus:border-[#ffffff] focus:ring-1 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] rounded border-2 border-[#CCCCCC] placeholder-white"
              placeholder="Enter your logo name"
            />
            <button
              type="submit"
              className="search-btn-white hover:text-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 sm:py-12 px-4 md:px-6">
        <h1 className="industry-logo-title2 mt-6 mb-6 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Browse Logo Ideas by Industry
        </h1>

        <div className="text-center flex flex-wrap items-center justify-center">
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Construction
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Utilities Or Energy
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Leisure Or Lifestyle
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Agriculture
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Marketing Or Advertising
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Retail And Wholesale
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
          <p className="shadow-md float-left industry-labels px-5 border rounded-2xl py-2 m-2 hover:bg-[#5022B8] hover:text-white text-[#5022B8]">
            Real State
          </p>
        </div>
      </div>

      <div className="container max-w-[1300px] mx-auto py-0 sm:py-12 mb-12 px-4 md:px-6 clear-left	">
        <h1 className="industry-logo-title2 mt-6 mb-6 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Learn how to create the perfect logo
        </h1>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3 mb-4">
            <div className="">
              <img src="/images/blog/1.webp" className="w-full" />
              <h1 className="blog-title font-semibold	sm:font-medium">
                How to choose the perfect logo for your business
              </h1>
              <p className="blog-description">
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className="blog-readmore mt-4 cursor-pointer hover:underline decoration-2 underline-offset-4">
                Read More{" "}
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 mb-4">
            <div className="">
              <img src="/images/blog/3.webp" className="w-full" />
              <h1 className="blog-title font-semibold	sm:font-medium">
                What these 28 fonts say about your business
              </h1>
              <p className="blog-description">
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className="blog-readmore mt-4 cursor-pointer hover:underline decoration-2 underline-offset-4">
                Read More{" "}
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 mb-4">
            <div className="">
              <img src="/images/blog/2.webp" className="w-full" />
              <h1 className="blog-title font-semibold	sm:font-medium">
                Choosing the right color for your brand
              </h1>
              <p className="blog-description">
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className="blog-readmore mt-4 cursor-pointer hover:underline decoration-2 underline-offset-4">
                Read More{" "}
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 mb-4">
            <div className="">
              <img src="/images/blog/Right-color.webp" className="w-full" />
              <h1 className="blog-title font-semibold	sm:font-medium">
                The seven types of logos and when to use them
              </h1>
              <p className="blog-description">
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className="blog-readmore mt-4 cursor-pointer hover:underline decoration-2 underline-offset-4">
                Read More{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
}
