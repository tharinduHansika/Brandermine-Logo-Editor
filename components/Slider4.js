import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
};

function Slider4() {
  return (
    <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Slider {...settings}>
            <div className="mb-2">
              <img src="/images/branding/1.png " className="w-full" />
            </div>
            <div className="mb-2">
              <img src="/images/branding/1.png" className="w-full" />
            </div>
            <div className="mb-2">
              <img src="/images/branding/1.png" className="w-full" />
            </div>
            <div className="mb-2">
              <img src="/images/branding/1.png" className="w-full" />
            </div>
            <div className="mb-2">
              <img src="/images/branding/1.png" className="w-full" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slider4;
