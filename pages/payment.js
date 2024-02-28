import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar3 } from "../components/Navbar3";
import Logomakingstep03 from "../components/Logomakingstep03";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";

const accordionData = [
  {
    title:
      "Lorrem Ipsum is simply dummy text of the printing and typesetting ?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
  },
  {
    title: "Lorem Ipsum is simply dummy text of ?",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
  },
];

const payment = () => {
  const router = useRouter();
  const { brand_name } = router.query;

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
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar3 />

      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 py-12 mt-12">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-4 sm:col-span-4">
            payment gateway
            <br />
            <Link href="/generate/download" legacyBehavior>
              <button
                type="submit"
                className="primary-btn-borderless mr-4 w-full md:w-auto px-4"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer />
      </div>

      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
};

export default payment;
