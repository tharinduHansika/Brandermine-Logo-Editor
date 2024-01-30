import React from "react";

function HelpHero2() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/helpcenter.png")`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#5022B8",
        backgroundPosition: "center",
      }}
      className="h-[332px] mt-[63px]"
    >
      <div className="container max-w-[1300px] mx-auto h-[332px] px-4 md:px-6">
        <div className="flex flex-col items-center justify-center h-[332px]">
          <h1 className="help-center-title mb-4">Contact Us</h1>
          <p className="help-center-title3">
            Reach out to our 24x7 Customer Support
            <br />
            person to get in touch with!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpHero2;
