import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import IndustryLogo from "../components/IndustryLogo";
import Homeblogsection from "../components/Homeblogsection";

export default function blogPost() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="mt-[63px] bg-[#eff4fb]">
        <div className="container max-w-[1200px] mx-auto text-center px-4 md:px-6 py-16">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-10 md:col-span-10 lg:col-span-8">
              <h1 className="blog-post-title mb-6 text-left text-[60px] sm:text-left">
                9 social media tools to create and manage your content
              </h1>

              <hr className="border-b-[8px] max-w-[45px] border-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 sm:col-span-12 mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px] ">
            {/* <h1 className="industry-logo-title2 mt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
                About facebook company
              </h1> */}

            <h2 className="text-left sm:first-letter:text-4xl first-letter:[20px] first-letter:font-bold industry-logo-text antialiased">
              <span className="sm:font-bold font-light">H</span>aving the right
              social media tools helps you build brand awareness, contact
              customers, drive traffic and even help to sell products and
              services. Whether you are a small business owner, a content
              creator or an entrepreneur, these tools can help you save your
              time.
              <br />
              <br />
              These social media tools can streamline your workflow, create
              visual content, track your social media performance and ensure
              that your content reaches the right audience at the right time.
              But how do you know which tool is best for you? Well lucky for you
              we’ve put together the 9 best social media tools to help you
              manage, create, plan and schedule your social accounts.
            </h2>
          </div>
        </div>
      </div>

      <div className="container max-w-[1200px] mx-auto text-center mt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 sm:col-span-12">
            <img src="/images/blog/bp1.png" className="w-full" />
          </div>
        </div>
      </div>

      <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 sm:col-span-12 mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px]">
            <h1 className="blog-post-subtitle mb-6 text-left sm:text-left">
              What are social media tools?
            </h1>

            <hr className="border-b-[4px] max-w-[45px] border-black mb-12" />

            <h2 className="text-left industry-logo-text antialiased">
              Having the right social media tools helps you build brand
              awareness, contact customers, drive traffic and even help to sell
              products and services. Whether you are a small business owner, a
              content creator or an entrepreneur, these tools can help you save
              your time.
              <br />
              <br />
              These social media tools can streamline your workflow, create
              visual content, track your social media performance and ensure
              that your content reaches the right audience at the right time.
              But how do you know which tool is best for you? Well lucky for you
              we’ve put together the 9 best social media tools to help you
              manage, create, plan and schedule your social accounts.
            </h2>
          </div>
        </div>
      </div>

      <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 sm:col-span-12 mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px]">
            <h1 className="blog-post-subtitle mb-6 text-left sm:text-left">
              Why do we need social media tools?
            </h1>

            <hr className="border-b-[4px] max-w-[45px] border-black mb-12" />

            <h2 className="text-left industry-logo-text antialiased">
              Social media management tools streamline the posting process by
              removing the need to shift between many platforms. You can plan
              everything in one place to get the messages consistent, then post
              all at once, or tweak and send as needed.
              <br />
              <br />
              Combining that with social media analytic tools provides you with
              the data you need to assess your social media marketing strategy
              on both macro and micro levels. It allows you to figure out what
              is working and what is not.
              <br />
              <br />
              Of course, it is not just social media management, scheduling and
              analytics tools that you need. Social media design tools are
              equally as important as they help create image assets for your
              social media platforms. These might be stories, posts, cover
              images and banners, and animated GIFS or videos that can make your
              content more engaging and dynamic.
            </h2>
          </div>
        </div>
      </div>

      <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 sm:col-span-12">
            <img
              src="/images/blog/bp1.png"
              className="w-full max-w-[450px] float-left pr-0 sm:pr-8 pb-8"
            />

            <h2 className="text-left industry-logo-text antialiased">
              So what social media tools should you choose? Well, there is no
              right or wrong answer. It all depends on your needs as a social
              media user. Just be aware that it takes time to learn how to use
              social media tools. It could take a couple of days or even a few
              months. But investing in these tools can help you achieve your
              goals by increasing your following, engaging with your audience
              and driving traffic. It can help keep your brand identity
              consistent and help you understand what your audience wants and
              needs.
              <br />
              <br />
              Most social media tools have free and paid-for plans. So take a
              moment to figure out your budget and your business needs, then
              take a look at our 9 best social media tools to help you pick the
              right platform, or platforms, to be successful with your social
              media strategy.
            </h2>
          </div>
        </div>
      </div>

      <div className="container max-w-[988px] mx-auto text-center mt-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 sm:col-span-12 mt-8 sm:mt-8 mb-8 sm:mb-8 sm:text-left px-4 sm:px-0 sm:m-[120px]">
            <h1 className="blog-post-subtitle mb-6 text-left sm:text-left">
              9 best social media tools
            </h1>

            <hr className="border-b-[4px] max-w-[45px] border-black mb-12" />

            <h2 className="text-left industry-logo-text antialiased">
              Social media management tools streamline the posting process by
              removing the need to shift between many platforms. You can plan
              everything in one place to get the messages consistent, then post
              all at once, or tweak and send as needed.
              <br />
              <br />
              Combining that with social media analytic tools provides you with
              the data you need to assess your social media marketing strategy
              on both macro and micro levels. It allows you to figure out what
              is working and what is not.
              <br />
              <br />
              Of course, it is not just social media management, scheduling and
              analytics tools that you need. Social media design tools are
              equally as important as they help create image assets for your
              social media platforms. These might be stories, posts, cover
              images and banners, and animated GIFS or videos that can make your
              content more engaging and dynamic.
            </h2>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
}
