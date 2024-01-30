import React from "react";
import Testomonials from "../../components/Testomonials";
import CommonQuestions from "../../components/CommonQuestions";
import MainLayout from "../../components/layout/main";
import Slider4 from "../../components/Slider4";
import Link from "next/link";
import Head from "next/head";
import { GenerateLogoTextBox } from "../../components/home/gen_logo_box";
import CommonQuestions2 from "../../components/CommonQuestions2";

const accordionData = [
  {
    title: "How do I get a brand kit for my business?",
    content: `Start by generating your logo. You can chose our packages which includes brand kit details. Special custom requirements can be added to your brand kit getting in touch with our designers`,
  },
  {
    title: "Does my Brand Kit update when I change my logo?",
    content: `Yes, all of the designs in your brand kit update when you change your logo. We do not automatically update any designs that you have personally customized.`,
  },
  {
    title: "How do I get assistance with Brand kit?",
    content: `We offer 24x7 Live chat and Email support. Write your inquiry to us and we will get in touch in with you. Our average response time though chat is between 10 - 15 minutes. `,
  },
  {
    title: "Can I order the Brand kit service later?",
    content: `Yes, The brand kit can be ordered later selecting our package after you download your logo. `,
  },
  {
    title: "What is the time required to generate my brand kit designs?",
    content: `Its almost instant. Our AI powered tool generates your brand kit designs in seconds of time saving time for you. Any customized designs will be provided within 24 hours`,
  },
];

function BrandingKitIndex() {
  return (
    <>
      <div className="container max-w-[1300px] mx-auto text-center pt-12 px-4 md:px-6 ">
        <h1 className="card-title leading-[48px] pb-4">
          A true one stop shop for ultimate brand kit to stand out your business
        </h1>
        <p className="text-[#797979] blog-description">
          Take advantage of 100+ branding templates created with your logo,
          brand colors, fonts, and images. Then create stunning marketing
          materials to connect to your audience and grow your business
        </p>
      </div>

      <Slider4 />

      <div className="container max-w-[1300px] mx-auto text-center pt-0 sm:pt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-8 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Profiles</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Posts</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Business Cards </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Email Signatures</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Letterheads</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Brand Guidelines</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Covers</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Social Stories</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Gym tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Retail tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Gym tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Retail tool kit</p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <img
                src="/images/branding/2.png"
                className="w-full aspect-[145/100]"
              />
              <img
                src="/images/branding/3.png"
                className="w-full absolute opacity-[0] hover:opacity-[1] top-0 aspect-[145/100]"
              />
            </div>

            <p className="branding-text">Healthy food kit</p>
          </div>
        </div>
      </div>

      {/* content starts */}
      <div className="container max-w-[1300px] mx-auto text-center pb-12 px-4 md:px-6">
        <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pt-0 sm:pt-8">
          Here's how you kick start your brand kit with Brandermine
        </h1>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/howto/Rectangle.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">Start by designing a logo you love</h1>
            <p className="howto-description">
              Your brand's identity is built on your logo. To make your vision a
              reality, start with Brandermines Logo maker or Custom logo maker.
              We help you make the smartest choice for creatives like you
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">Unlock your brand kit</h1>
            <p className="howto-description">
              Brandermine's brand kit sets you up with complementary styles,
              photos and materials related to your industry, and integrates the
              colors from your logo to kit. All the designs are professional and
              AI powered generated giving what exactly you want in few seconds
              of time
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
            <img src="/images/howto/Rectangle2.png" />
          </div>
        </div>

        <div className="grid grid-cols-12 mb-8 pr-0 py-8">
          <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
            <img src="/images/slider/mediakitdesigns.png" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
            <h1 className="howto-title">
              Connect to audience, Grow your business
            </h1>
            <p className="howto-description">
              It is now simple to turn templates into marketing materials. This
              helps build your company brand on solid grounds. You can download
              designs in multiple formats and connect to your audience in no
              matter of time
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-12 mb-8 pr-0 py-8">
                    <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
                        <h1 className="howto-title">Grow your website. Get going</h1>
                        <p className="howto-description">
                            Create your business website with Brandermine and Market to the
                            right audience. Our personal tech team will make it SEO friendly.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
                        <img src="/images/howto/Rectangle2.png" />
                    </div>
                </div> */}
      </div>

      <div className="w-full bg-[#5022B8] py-0 sm:py-12 mb-12">
        <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 flex flex-col items-center justify-center">
          <p className="blue-container-text1 mb-4">
            Launch your brand with Brandermine's Brand Kit
          </p>
          <p className="blue-container-text2">
            Start building your business by creating a stunning logo first
          </p>

          <div className="mt-8">
            <GenerateLogoTextBox varient={3} />
          </div>
        </div>
      </div>
      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <h1 className="card-title-pricing">Common Questions</h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <CommonQuestions2 title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandingKitIndex;

BrandingKitIndex.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
