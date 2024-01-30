import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar2 } from "../components/Navbar2";
import Logomakingstep03 from "../components/Logomakingstep03";
import Footer2 from "../components/Footer2";

const collecting_data_step_4 = () => {
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
      </Head>

      <Navbar2 />

      <div className="container max-w-[1300px] mx-auto pb-12 mt-12 px-4 md:px-6">
        <div className="container py-10">
          <div className="row">
            <h3 className="card-semi-title text-left">Choose your design</h3>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="col-span-12 md:col-span-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 md:col-span-6">
                  <img
                    src="/images/blog/Right-color.webp"
                    className="w-full aspect-[145/100] shadow-lg"
                  />
                </div>

                <div className="col-span-6 md:col-span-6">
                  <img
                    src="/images/blog/Right-color.webp"
                    className="w-full aspect-[145/100] shadow-lg"
                  />
                </div>

                <div className="col-span-6 md:col-span-6">
                  <img
                    src="/images/blog/Right-color.webp"
                    className="w-full aspect-[145/100] shadow-lg"
                  />
                </div>

                <div className="col-span-6 md:col-span-6">
                  <img
                    src="/images/blog/Right-color.webp"
                    className="w-full aspect-[145/100] shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <img src="/images/mockup1.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
};

export default collecting_data_step_4;
