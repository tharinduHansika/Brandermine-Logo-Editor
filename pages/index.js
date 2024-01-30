import Herosection from "../components/Herosection";
import Homebrandsection from "../components/Homebrandsection";
import Homecontentsection from "../components/Homecontentsection";
import Homedesignlogosection from "../components/Homedesignlogosection";
import Homestrengthsection from "../components/Homestrengthsection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeblogsection from "../components/Homeblogsection";
import CommonQuestions from "../components/CommonQuestions";
import MainLayout from "../components/layout/main";
import { GenerateLogoTextBox } from "../components/home/gen_logo_box";
import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";

const accordionData = [
  {
    title: "How does the Logo Maker work?",
    content: `Answer a few basic questions about your logo requirements and leave the rest to us. The AI logo generator technology will find the best fitting logo your brand`,
  },
  {
    title: "How long does it take to generate my logo?",
    content: `Almost instant. You can make your logo instantly with no prior design experience with our user friendly logo maker technology`,
  },
  {
    title: "What's included in the logo branding packages?",
    content: `Your logo will be provided to you in several sizes, colors, and formats that are compatible with all your digital assets. Depending on business requirements, you can obtain social media kit and brand guidelines. `,
  },
  {
    title: "How can I get in touch in with a designer to customize my logo?",
    content: `Visit the Custom Logo maker page to get in touch with our designers. They will assist you build your logo and brand from the scratch. `,
  },
  {
    title: "Where can I use my logo?",
    content: `You can use your logo anywhere. Complete ownership is given to you and you can use across all social media platforms and webistes.`,
  },
];

export default function Home() {
  return (
    <div>
      <Herosection />
      <Homebrandsection />
      {/* <Slider2 /> */}
      <Homecontentsection />
      <Homestrengthsection />
      <Homedesignlogosection />

      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
        <h1 className="card-title pt-8 sm:pt-9 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
          Frequently asked questions
        </h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <CommonQuestions title={title} content={content} />
          ))}
        </div>
      </div>

      <Homeblogsection />

      <div className="w-full bg-[#5022B8] py-0 sm:py-12 mb-0 sm:mb-12">
        <div className="container max-w-[1300px] mx-auto text-center py-8 sm:py-12 px-4 md:px-6 flex flex-col items-center justify-center">
          <p className="blue-container-text1 mb-4 leading-[48px] sm:leading-[55px]">
            Design your own professional logo
          </p>
          <p className="blue-container-text2">
            Get access to our design gallery to generate your business logo
          </p>

          <div className="mt-8">
            <GenerateLogoTextBox varient={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
