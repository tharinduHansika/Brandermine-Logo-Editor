import React from "react";
import Carousel from "react-grid-carousel";

function Slider2() {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "inline-block",
        height: "10px",
        width: "10px",
        background: "#DDDDDD",
        borderRadius: "5px",
      }}
    ></span>
  );

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
    <div className="brand-container pb-20 pt-20">
      <div className="relative max-w-[1300px] container mx-auto ">
        <Carousel
          dot={MyDot}
          cols={5}
          rows={2}
          gap={15}
          loop
          showDots="true"
          arrowLeft={<LeftBtn />}
          arrowRight={<RightBtn />}
          mobileBreakpoint={1478}
        >
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
    </div>
  );
}

export default Slider2;
