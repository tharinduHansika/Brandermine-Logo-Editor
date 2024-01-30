import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import HelpHero2 from "../components/HelpHero2";

export default function contactUs() {
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
      </Head>

      <Navbar />

      <HelpHero2 />

      <div className="container max-w-[1300px] mx-auto text-center py-12 pb-12 px-4 md:px-6">
        <div className="grid grid-cols-12 my-12 gap-8">
          <div className="col-span-12 sm:col-span-4 text-center flex flex-col items-center justify-center">
            <img
              src="/images/help/viber.png"
              className="w-full max-w-[160px]"
            />

            <p className="help-center-title4 mt-8">Live Chat</p>

            <p className="help-center-text mt-2">
              support team is here to help!
              <br />
              Open a live chat
            </p>

            <p className="help-center-text2 mt-4 hover:text-black cursor-pointer">
              Start Live Chat
            </p>
          </div>

          <div className="col-span-12 sm:col-span-4 text-center flex flex-col items-center justify-center">
            <img src="/images/help/wapp.png" className="w-full max-w-[160px]" />

            <p className="help-center-title4 mt-8">WhatsApp</p>

            <p className="help-center-text mt-2">
              support team is here to help!
              <br />
              Open a Whatsapp chat
            </p>

            <p className="help-center-text2 mt-4 hover:text-black cursor-pointer">
              Contact Us
            </p>
          </div>

          <div className="col-span-12 sm:col-span-4 text-center flex flex-col items-center justify-center">
            <img src="/images/help/help.png" className="w-full max-w-[160px]" />

            <p className="help-center-title4 mt-8">Help Center</p>

            <p className="help-center-text mt-2">
              Read Frequently Asked Questions
              <br />
              to clarify your doubts
            </p>

            <p className="help-center-text2 mt-4 hover:text-black cursor-pointer">
              Visit Help Center
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center my-4">
          <div className="flex-1">
            <hr className="w-full"></hr>
          </div>
          <div className="flex-1">
            <p className="help-center-title2">or</p>
          </div>
          <div className="flex-1">
            <hr className="w-full"></hr>
          </div>
        </div>

        <h1 className="help-center-title5 mb-8">Submit your question to us</h1>

        <input
          className="help-input focus:ring-[#5022b8] border-[#cccccc] focus:border-[#5022b8] focus:border focus:ring-2 px-8"
          id="textarea"
          name="textarea"
          placeholder="Your email"
          type="text"
        />

        <p className="help-hint text-left mt-4">
          Please, enter the email address where you wish to receive our answer.
        </p>

        <input
          className="help-input focus:ring-[#5022b8] border-[#cccccc] focus:border-[#5022b8] focus:border focus:ring-2 px-8 mt-8"
          id="textarea"
          name="textarea"
          placeholder="Subject"
          type="text"
        />

        <textarea
          className="help-textare focus:ring-[#5022b8] border-[#cccccc] focus:border-[#5022b8] focus:border focus:ring-2 mt-8 px-8 py-8"
          id="textarea"
          name="textarea"
          rows="4"
          cols="50"
          placeholder="Write your message"
        />

        <p className="help-hint text-left mt-4">
          Please enter the details of your request.
        </p>

        <div className="sm:flex sm:flex-row sm:justify-between sm:items-center mt-8 block">
          <div>
            <img
              src="/images/help/captcha.png"
              className="w-full max-w-[363px]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="primary-btn w-auto flex items-center justify-center px-8 py-8 text-[16px] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send
            </button>
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
