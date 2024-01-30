import Head from "next/head";

import { Navbar } from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Link from "next/link";
import HelpHero from "../components/HelpHero";
import CommonQuestions2 from "../components/CommonQuestions2";

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

export default function helpCenter2() {
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

      <HelpHero />

      {/* faq starts */}
      <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
        <p className="help-center-title2 pb-12">About BranderMine</p>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <CommonQuestions2 title={title} content={content} />
          ))}
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
