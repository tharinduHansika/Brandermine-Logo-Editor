import React from "react";
import Carousel from "react-grid-carousel";

function Slider() {
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

  const LeftBtn = ({ isActive }) => (
    <span
      style={{
        position: "absolute",
        display: "flex",
        backgroundColor: "#5022B8",
        color: "#ffffff",
        padding: "32px",
        alignItems: "center",
        justifyContent: "start",
        height: "90px",
        width: "90px",
        top: "45%",
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
        backgroundColor: "#5022B8",
        color: "#ffffff",
        padding: "38px",
        alignItems: "center",
        justifyContent: "start",
        height: "90px",
        width: "90px",
        top: "45%",
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
    <div className="">
      <Carousel
        dot={MyDot}
        cols={1}
        rows={1}
        gap={15}
        loop
        showDots="true"
        arrowLeft={<LeftBtn />}
        arrowRight={<RightBtn />}
        mobileBreakpoint={1115}
      >
        <Carousel.Item>
          <div className="max-w-[1300px] container mx-auto text-center">
            <img src="/images/prem/A.png" className="w-full" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="max-w-[1300px] container mx-auto text-center">
            <img src="/images/prem/A.png" className="w-full" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
