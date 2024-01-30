import React from "react";
import Carousel from "react-grid-carousel";

const Homebrandsection = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        height: "12px",
        width: "12px",
        borderRadius: "50px",
      }}
      className={isActive ? "bg-[#7D5ACA]" : "bg-[#D4C8ED]"}
    ></span>
  );

  return (
    <div className="brand-container pb-8 sm:pb-20">
      <div className="container max-w-[1300px] mx-auto py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title pt-8 sm:pt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Brands with Brandermine
        </h1>

        <div className="row hidden sm:block">
          <Carousel dot={MyDot} cols={5} rows={2} gap={15} loop showDots="true">
            <Carousel.Item>
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-02.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-03.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-04.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-05.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-06.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-07.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-08.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-09.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-10.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-02.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-03.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-04.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-05.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-06.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-07.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-08.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-09.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-10.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-02.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-03.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-04.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-05.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-06.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-07.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-08.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-09.svg" className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/icon/logo-10.svg" className="carousel-img" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="block sm:hidden">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-02.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-03.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-04.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-05.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-06.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-07.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-08.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-09.svg" className="carousel-img" />
            </div>
            <div className="col-span-6">
              <img src="/images/icon/logo-10.svg" className="carousel-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebrandsection;
