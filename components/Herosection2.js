import React from "react";
import Slider from "react-slick";
import Link from "next/link";

const Herosection2 = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const settings2 = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="container max-w-[1300px] mx-auto pt-8 pb-4 sm:py-12 px-4 md:px-6 mt-16">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-4">
          <div className="hero-title-card">
            <h1 className="hero-title leading-[48px] sm:leading-[55px] sm:text-left pt-0 sm:pt-12 text-center text-[42px] sm:text-[48px]">
              Create stunning logo designs in few clicks
            </h1>

            <p className="hero-description pt-6 text-center sm:text-left text-[#797979]">
              High resolution logos in just few clicks. No design experience
              necessary. Logos are built by our top class designers. You just
              have to select best from the choices available.
            </p>

            <div className="sm:flex flex-row items-stretch justify-between block mt-6">
              <div className="relative flex w-full">
                <input
                  type="text"
                  name="brand_name"
                  className="focus:ring-[#5B2FBC] focus:border-[#5B2FBC] focus:ring-1 search-input text-black relative px-3 w-full h-[56px] bg-white rounded border-2 border-[#CCCCCC] placeholder-gray-400"
                  placeholder="Enter your brand name"
                />
                <span class="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                  <img src="/images/icon/pen.svg" />
                </span>
              </div>
              <div>
                <Link href="/collecting-data">
                  <button
                    type="submit"
                    className="search-btn text-white rounded w-full sm:w-[169px] my-2 sm:my-0 ml-0 sm:ml-4"
                  >
                    Genarate Logo
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-1 mb-6 sm:mt-2 py-0 sm:py-4">
              <img
                src="/images/Trustpilotstars.svg"
                className="w-full max-w-[400px]"
              />
            </div>

            {/* <div className="mt-2 py-4 flex flex-row sm:flex-nowrap flex-wrap items-center justify-center sm:flex-row sm:justify-start">
              <p className="trust-point">Excellent</p>
              <img src="/images/stars-5.svg" className="trust-point-icon" />
              <p className="trust-point pl-2">1000+ reviews on</p>

              <div className="mt-4 sm:mt-0 flex items-center justify-center">
                <img
                  src="/images/stars-1.svg"
                  className="trust-point-icon mr-2"
                />
                <p className="trust-point">Trustpilot</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="px-3">
            <Slider {...settings}>
              <div>
                <img
                  src="/images/slider/Eriena logo preview.png"
                  className="aspect-[539/488]"
                />
              </div>
              <div>
                <img
                  src="/images/slider/LeaFox logo preview.png"
                  className="aspect-[539/488]"
                />
              </div>
              <div>
                <img
                  src="/images/slider/Serolin logo preview.png"
                  className="aspect-[539/488]"
                />
              </div>
              <div>
                <img
                  src="/images/slider/Spanso Bakers logo preview.png"
                  className="aspect-[539/488]"
                />
              </div>
              <div>
                <img
                  src="/images/slider/Youspa logo preview.png"
                  className="aspect-[539/488]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="sm:py-12 py-4">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-6 lg:col-span-2 sm:col-span-4 flex justify-center items-center py-4 sm:py-2">
            <img src="/images/logo-maker/fb.svg" />
          </div>
          <div className="col-span-6 lg:col-span-2 sm:col-span-4 flex justify-center items-center py-4 sm:py-2">
            <img src="/images/logo-maker/b.svg" />
          </div>
          <div className="col-span-6 lg:col-span-2 sm:col-span-4 flex justify-center items-center py-4 sm:py-2">
            <img src="/images/logo-maker/hb.svg" />
          </div>
          <div className="col-span-6 lg:col-span-2 sm:col-span-4 flex justify-center items-center py-4 sm:py-2">
            <img src="/images/logo-maker/pg.svg" />
          </div>
          <div className="col-span-6 lg:col-span-2 sm:col-span-4 flex justify-center items-center py-4 sm:py-2">
            <img src="/images/logo-maker/vm.svg" />
          </div>
          <div className="col-span-6 lg:col-span-2 sm:col-span-4 flex justify-center items-center py-4 sm:py-2">
            <img src="/images/logo-maker/v.svg" />
          </div>
        </div>
      </div>

      {/* <Slider3 /> */}
    </div>
  );
};

export default Herosection2;
