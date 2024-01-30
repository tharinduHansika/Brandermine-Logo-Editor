import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Logomakingstep01 from "../components/Logomakingstep01";
import { Navbar4 } from "../components/Navbar4";
import Footer2 from "../components/Footer2";

const collecting_data = () => {
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

      <Navbar4 />
      <Logomakingstep01 />

      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <Footer2 />
      </div>
    </div>
  );
};

export default collecting_data;
