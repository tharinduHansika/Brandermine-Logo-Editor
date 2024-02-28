import React, { useEffect, useState } from "react";
import Testomonials from "../../components/Testomonials";
import CommonQuestions from "../../components/CommonQuestions";
import MainLayout from "../../components/layout/main";
import Slider from "../../components/Slider";
import Link from "next/link";
import Head from "next/head";
import { useHookstate } from "@hookstate/core";
import { premiumStore } from "../../store/premiumstore";
import { authState } from "../../store/authstore";
import { setAuth } from "../_app";
import { useRouter } from "next/router";
import { createPremiumLogoRequest } from "../../api_calls/firebase";
import { getPackages } from "../../api_calls/place_order/getPackages";
import { stringify } from "postcss";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPlacedPremOrder,
  placePremOrder,
} from "../../store/slice/premiumOrderSlice";

const accordionData = [
  {
    title: "Apart from a custom logo, I need branding help to grow my business",
    content: `Representing your business with the perfect logo is extremely challenging. Apart from custom logo, We help you with all the branding needs of a business to grow and stand out from the rest. Check out our Brand Kit for our branding supplies`,
  },
  {
    title: "Can I order the Brand kit service later?",
    content: `Yes, The brand kit can be ordered later selecting our package after you download your logo. `,
  },
  {
    title: "Can I recieve a full ownership copyright document for proof?",
    content: `Yes, You can request a copyright document for your design at anytime`,
  },
];

function PremiumLogoIndex() {
  const orderState = useSelector((state) => state.premiumOrder);
  const dispatch = useDispatch();
  const premstate = useHookstate(premiumStore);
  const authstate = useHookstate(authState);
  const [selected, setSelected] = useState(null);
  const [packagesList, setPackagesList] = useState([]);
  const router = useRouter();

  const getPackagesList = async () => {
    try {
      const { data } = await getPackages("Logo");

      setPackagesList(data.result.result);
    } catch (error) {
      console.log(error);
    }
  };

  const selectPackage = (id, packageName, price) => {
    dispatch(
      placePremOrder({
        packageType: id,
        packageName,
        price,
        orderType: "Premium Logo",
      }),
    );
    if (!authstate.get().isAuthenticated && !setAuth()) {
      authstate.set({ ...authstate.get(), isAuthRequired: true });
      setSelected(id);
    }
    if (authstate.get().isAuthenticated || setAuth()) {
      setSelected(id);
      initPrem();
    }
  };

  useEffect(() => {
    dispatch(clearPlacedPremOrder());
  }, []);

  useEffect(() => {
    getPackagesList();
    if (selected != null) {
      setSelected(null);
      initPrem();
    }
  }, [authstate.isAuthenticated.get(), orderState]);

  const initPrem = async (id) => {
    let payment_id = Date.now();
    dispatch(
      placePremOrder({
        orderId: payment_id,
      }),
    );

    if (orderState.packageName.trim() != "" && localStorage.getItem("user")) {
      router.push(
        `/api/stripe/checkout_session?token=asdadw&payment_type=prem&order_id=${payment_id}&package_id=${id}&package_name=${
          orderState.packageName
        }&price=${orderState.price}&customer_email=${
          JSON.parse(localStorage.getItem("user")).email
        }`,
      );
    }
  };

  return <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6">
      <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pb-4">
        World's most outstanding Custom Logo design website
      </h1>
      <p className="text-[#797979] blog-description">
        We bring your imagination to reality with custom logo maker, the
        smartest choice for creatives like you
      </p>
    </div>

    <Slider />

    <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
      <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pt-8 pb-0 sm:pb-8">
        Why chose Brandermine's Custom Logo maker?
      </h1>

      {/* grid starts */}
      <div className="grid grid-cols-12 text-center">
        <div className="col-span-12 md:col-span-3 border-b-2 md:md:border-r-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/high-quality 1.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">High end designs</p>
          </section>
          <section>
            <p class="feature-description">
              High resolution logos with unique designs to match your
              industry. Trusted by thousands of businesses like yours
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 border-b-2 md:md:border-r-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/copyright-symbol 2.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">Full copyright ownership</p>
          </section>
          <section>
            <p class="feature-description">
              The copyright ownership of your custom logo design will be yours
              forever after the purchase
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 border-b-2 md:border-r-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/revisions.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">Unlimited revisions</p>
          </section>
          <section>
            <p class="feature-description">
              Unlimited revisions by our designers until 100% satisfaction for
              our customers
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 border-b-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/Branding kit.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">Ultimate Brand Kit</p>
          </section>
          <section>
            <p class="feature-description">
              The ultimate brand kit to connect to your audience and grow your
              business. Customized for your industry
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/Fast delivery.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">Fast delivery</p>
          </section>
          <section>
            <p class="feature-description">
              Extremely fastest delivery and desirable service to our
              customers from the beginning to end
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/Premium support.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">Premium support</p>
          </section>
          <section>
            <p class="feature-description">
              We offer 24x7 Live chat and email support. We assist your
              inquiries at the fastest time.
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 p-8">
          <section class="flex justify-center">
            <img
              src="/images/strength/All file types.svg"
              className="strength-icon"
            />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">All file types</p>
          </section>
          <section>
            <p class="feature-description">
              We deliver high resolution files in any formats. (eg, .png,
              .jpg, .svg, .psd, .ai etc.)
            </p>
          </section>
        </div>

        <div className="col-span-12 md:col-span-3 p-8">
          <section class="flex justify-center">
            <img src="/images/strength/satisfaction.svg" className="h-9" />
          </section>
          <section className="d-flex justify-content-center">
            <p className="feature-title">100% Satisfaction</p>
          </section>
          <section>
            <p class="feature-description">
              We are trusted by 10,000+ businesses around the world. Your
              satisfaction is our priority.
            </p>
          </section>
        </div>
      </div>
    </div>

    {/* packages starts */}

    <div className="container max-w-[1300px] mx-auto text-center pt-0 sm:pt-6 pb-0 sm:pb-12 px-4 md:px-6">
      <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
        Custom Logo Maker Packages
      </h1>

      <div className="grid grid-cols-12 gap-8 pt-0 sm:pt-8">
        {packagesList.map((el, i) => (
          <div key={i} className="col-span-12 md:col-span-4">
            <div
              className={`flex flex-col ${
                el.name == "Standard"
                  ? `border-[${el.color}] border-2`
                  : "border-[#E5E5E5] border"
              } rounded-md text-center pb-6`}
            >
              <div
                className={` bg-[${el.color}] p-8 w-full rounded-t-md relative`}
              >
                <h3 className="package-title text-white">{el.name}</h3>

                {(el.name.trim() == "Standard" ||
                  el.name.trim() == "Premium") && (
                  <p
                    className={`drop-shadow-md absolute -top-5 -right-5 pricing-tag text-[${el.color}] bg-[#ffffff] p-2 rounded-lg`}
                  >
                    Most Popular
                  </p>
                )}
              </div>

              <div class="w-full overflow-hidden flex flex-row justify-center">
                <div
                  class={` h-6 w-6 bg-[${el.color}] -rotate-45 transform origin-top-left`}
                ></div>
              </div>

              <div className="px-16 md:px-8 lg:px-8 xl:px-16">
                <div className="flex justify-center items-center mt-6">
                  <h3 className="package-price">${el.price}</h3>

                  <p className="package-price-2 mt-4 ml-2 mb-4">
                    / {el.time}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="package-caption">{el.description}</p>
                </div>

                <div className="flex justify-center align-center mt-3">
                  <div>
                    <img
                      src="/images/strength/Fast delivery.svg"
                      className="w-4 pt-1 mr-2"
                    />
                  </div>
                  <div>
                    <p className="package-caption">{el.delivery}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="" legacyBehavior>
                    <button
                      onClick={() => selectPackage(el._id, el.name, el.price)}
                      className={`border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[${el.color}] hover:text-white`}
                    >
                      Select
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center mt-6 items-center">
                  <img
                    src="/images/download-sample-file.png"
                    className="w-5 h-5 mb-0 mr-3"
                  />
                  <p className="package-caption hover:text-[#5022B8] cursor-pointer">
                    Download sample file
                  </p>
                </div>

                {packagesList[i].features.map((f, fi) => (
                  <div
                    key={fi}
                    className="flex justify-start ml-6 mt-6 align-center mb-4"
                  >
                    <img
                      src="/images/checkmark.svg"
                      className="w-4 mb-0 mr-4"
                    />
                    <p className="package-description">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* content starts */}
    <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
      <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] sm:pb-8 pb-0">
        How to work on premium logo package
      </h1>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
          <img src="/images/prem/1.png" />
        </div>

        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
          <h1 className="howto-title pt-4 sm:pt-12">
            Your logo requirements
          </h1>
          <p className="howto-description">
            Fill out the basic questions about your logo requirements (eg:
            industry, fonts, colors etc) and if you feel missing out on
            something, you can write to us on how your custom logo should be
            before the final step of the process
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
          <h1 className="howto-title pt-4 sm:pt-12">Logo delivery to you</h1>
          <p className="howto-description">
            Finding the perfect logo to represent your business can be a
            challenge. Our top designers will deliver you a professional,
            creative and unique logo design that reflects your business idea
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
          <img src="/images/prem/2.png" />
        </div>
      </div>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 pr-0 sm:pr-16">
          <img src="/images/prem/3.png" />
        </div>

        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pl-0 sm:pl-16 flex flex-col justify-center text-center sm:text-left">
          <h1 className="howto-title pt-4 sm:pt-12">Make changes, if any</h1>
          <p className="howto-description">
            You'll have control over chosing the design, colors and fonts of
            your custom logo. We give you unlimited changes until your
            satisfaction.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 mb-8 pr-0 py-8">
        <div className="col-span-12 md:col-span-6 mt-8 sm:mt-0 pr-0 sm:pr-16 flex flex-col justify-center text-center sm:text-left">
          <h1 className="howto-title pt-4 sm:pt-12 ">Finalize Brand Kit</h1>
          <p className="howto-description">
            Finding the perfect brand kit to represent your business is the
            ultimate challenge. With a custom brand kit from brandermine you
            will connect to your audience like never before and grow your
            business
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 pl-0 sm:pl-16 order-first sm:order-last">
          <img src="/images/prem/4.png" />
        </div>
      </div>
    </div>

    {/* test starts */}
    <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
      <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px] pt-0 sm:pt-8">
        Here from our clients
      </h1>

      <Testomonials />
    </div>

    {/* faq starts */}
    <div className="container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6">
      <h1 className="card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]">
        Common Questions
      </h1>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <CommonQuestions title={title} content={content} />
        ))}
      </div>
    </div>

    {/* <Herosection />
    <Homebrandsection />
    <Homecontentsection />
    <Homestrengthsection />
    <Homedesignlogosection />
    <Homeblogsection /> */}
  </>;
}

export default PremiumLogoIndex;

PremiumLogoIndex.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
