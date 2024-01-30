import React from "react";

const Homeblogsection = () => {
  return (
    <div className="container max-w-[1300px] mx-auto py-0 sm:py-12 mb-8 sm:mb-12 px-4 md:px-6 clear-left	">
      <h1 className="card-title pt-8 sm-pt-9 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
        Learn what experts talk about logo designs and branding
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
  );
};

export default Homeblogsection;
