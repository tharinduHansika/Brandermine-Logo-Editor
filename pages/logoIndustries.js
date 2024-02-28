import Head from "next/head";
import Herosection from "../components/Herosection";
import Homebrandsection from "../components/Homebrandsection";
import Homecontentsection from "../components/Homecontentsection";
import Homedesignlogosection from "../components/Homedesignlogosection";
import Homestrengthsection from "../components/Homestrengthsection";
import { Navbar } from "../components/Navbar";
import Test from "../components/Test";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeblogsection from "../components/Homeblogsection";
import { Logomakersection } from "../components/Logomakersection";
import Slider2 from "../components/Slider2";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
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

export default function logoIndustries() {
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
      </Head>
      <Navbar />
      <div className="container max-w-[1300px] mx-auto text-center py-12 pb-8 sm:pb-24 px-4 md:px-6">
        <h1 className="logo-industry-title pt-12 leading-[44px] sm:leading-[50px] sm:text-[40px] text-[38px]">
          Need inspiring ideas for your logo design and don't know where to
          look? Use 350+ outstanding logo ideas from Brandermine
        </h1>

        <p className="logo-industry-description mt-8 ">
          Starting with an inspiration is helpful when designing a logo for any
          industry. We have curated logo designs from 350+ of the most
          well-liked industries below, along with design advice for each.
          Thousands of dynamic logo designs will be generated using your inputs
          by the logo builder for you to select from and edit. You may create
          the ideal logo for your brand or company by scrolling through our
          dynamic collection of logo templates.
          <br />
          <br />
          You're all set to begin designing a logo for your brand. You may
          quickly and easily create an infinite number of unique logo concepts
          using Brandermines' logo maker.
        </p>
      </div>

      <div className="bg-[#eff4fb]">
        <div className="container max-w-[1300px] mx-auto text-center py-12 pb-8 sm:pb-24 px-4 md:px-6">
          <h1 className="logo-industry-title pt-0 sm:pt-12 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
            The best logo designs by industry
          </h1>

          <div className="relative flex w-full sm:w-[450px] mt-8 justify-center items-center mx-auto">
            <input
              type="text"
              name="brand_name"
              className="focus:ring-[#5022b8] font-[400] text-black focus:border-[#5022b8] focus:border focus:ring-2 search-input relative px-3 w-full sm:w-[450px] h-[56px] bg-white rounded border-none placeholder-gray-400"
              placeholder="Search Industries..."
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
              <Link href="/industryLogo" legacyBehavior>
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
            Design your own professional logo
          </p>
          <p className="blue-container-text2">
            Get access to our design gallery to generate your business logo
          </p>

          <div className="mt-8">
            <input
              type="text"
              name="brand_name"
              className="focus:ring-[#ffffff] focus:ring-1 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] rounded border-2 focus:border-[#ffffff] border-[#CCCCCC] placeholder-white"
              placeholder="Enter your brand name"
            />
            <button
              type="submit"
              className="search-btn-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4 hover:text-white"
            >
              Get Started
            </button>
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
