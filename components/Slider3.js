import React from "react";
import Carousel from "react-grid-carousel";

function Slider3() {
  const LeftBtn = ({ isActive }) => (
    <span
      style={{
        position: "absolute",
        display: "flex",
        backgroundColor: "#1A1D5A",
        color: "#ffffff",
        padding: "32px",
        alignItems: "center",
        justifyContent: "start",
        height: "90px",
        width: "90px",
        top: "42%",
        left: "0%",
        zIndex: "100",
        fontSize: "32px",
        cursor: "pointer",
      }}
    >
      ❮
    </span>
  );

  const RightBtn = ({ isActive }) => (
    <span
      style={{
        position: "absolute",
        display: "flex",
        backgroundColor: "#1A1D5A",
        color: "#ffffff",
        padding: "38px",
        alignItems: "center",
        justifyContent: "start",
        height: "90px",
        width: "90px",
        top: "42%",
        right: "0%",
        zIndex: "100",
        fontSize: "32px",
        cursor: "pointer",
      }}
    >
      ❯
    </span>
  );

  return (
    <div className="py-12">
      <div className="relative max-w-[1300px] container mx-auto ">
        <Carousel
          cols={8}
          rows={1}
          gap={15}
          loop
          showDots={true}
          hideArrow={true}
          mobileBreakpoint={499}
          responsiveLayout={[
            { breakpoint: 1000, cols: 3 },
            { breakpoint: 750, cols: 2, rows: 1, gap: 5, showDots: true },
            { breakpoint: 499, autoplay: 2000, loop: true, cols: 3, rows: 1 },
          ]}
        >
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Logo generator</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Premium logo</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Business card</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">T shirt design</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Packaging design</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Poster design</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Book cover design</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="/images/icon/logo-01.svg" className="carousel-img" />
              <p className="slider-3-title">Web design</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider3;
