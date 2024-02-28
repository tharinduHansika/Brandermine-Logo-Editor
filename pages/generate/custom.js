import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import CommonQuestions from "../../components/CommonQuestions";

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

const GenerateCustom = () => {
  const router = useRouter();
  const { brand_name, slogan } = router.query;

  return <>
    <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 py-12 mt-12">
      <div className="grid grid-cols-12 text-center">
        <div className="col-span-12 md:col-span-4 sm:col-span-4">
          <img src="/images/blog/Right-color.webp" className="w-full" />
        </div>
        <div className="col-span-12 md:col-span-8 sm:col-span-8 px-4 lg:px-16 md:px-16 sm:px-16 my-4 sm:my-0 sm:py-0 flex flex-col items-start">
          <h1 className="step6-title ">Choose a package that suits you.</h1>
          <h1 className="step6-description mt-4">
            Build a strong brand with high-quality logo files you can use
            everywhere-on your website, social media, in print, and much more.
          </h1>
        </div>
      </div>

      <div>
        <div className="mt-12">
          <p className="colors-title text-[#404145] mb-4">
            Custom Design Request
          </p>

          <textarea
            className="textarea focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
            id="textarea"
            name="textarea"
            rows="6"
            cols="50"
            placeholder="You can request to use your branding colors, change the font, reposition shape,and layout...."
          />
        </div>

        <div className="mt-3">
          <p className="colors-title text-[#404145] mb-4">its for free.</p>

          <input id="selectImage" hidden type="file" />
          <button type="submit" className="primary-btn">
            Choose file
          </button>

          <p className="hint text-[#797979] mt-3">Eg: image, pdf, etc..</p>
        </div>
      </div>
    </div>

    {/* packages starts */}

    <div className="container max-w-[1300px] mx-auto text-center pt-6 pb-12 px-4 md:px-6">
      <h1 className="card-title">Choose your package</h1>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col border-[#E5E5E5] border rounded-md text-center pb-6">
            <div className="bg-[#11D86C] p-8 w-full rounded-t-md">
              <h3 className="package-title text-white">Starter</h3>
            </div>

            <div class="w-full overflow-hidden flex flex-row justify-center">
              <div class=" h-6 w-6 bg-[#11D86C] -rotate-45 transform origin-top-left"></div>
            </div>

            <div className="px-16 md:px-8 lg:px-8 xl:px-16">
              <div className="flex justify-center items-center mt-6">
                <h3 className="package-price">$15</h3>

                <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
              </div>

              <div className="mt-4">
                <p className="package-caption">Logo package for beginner</p>
              </div>

              <div className="mt-12">
                <Link href="/step1" legacyBehavior>
                  <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[#11D86C] hover:text-white">
                    Select
                  </button>
                </Link>
              </div>

              <div className="flex justify-center mt-6 items-center">
                <img
                  src="/images/download-sample-file.png"
                  className="w-5 h-5 mb-0 mr-3"
                />
                <p className="package-caption hover:text-[#5022b8] cursor-pointer">
                  Download sample file
                </p>
              </div>

              <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">High resolution</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Unlimited revisions</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Logo transparent file</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col border-[#5022B8] border-2 rounded-md text-center pb-6">
            <div className="bg-[#5022B8] p-8 w-full rounded-t-md relative">
              <h3 className="package-title text-white">Advanced</h3>

              <p className="drop-shadow-md absolute -top-5 -right-5 pricing-tag text-[#5022B8] bg-[#ffffff] p-2 rounded-lg">
                Most Popular
              </p>
            </div>

            <div class="w-full overflow-hidden flex flex-row justify-center">
              <div class=" h-6 w-6 bg-[#5022B8] -rotate-45 transform origin-top-left"></div>
            </div>

            <div className="px-16 md:px-8 lg:px-8 xl:px-16">
              <div className="flex justify-center items-center mt-6">
                <h3 className="package-price">$30</h3>

                <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
              </div>

              <div className="mt-4">
                <p className="package-caption">
                  starting a business with here
                </p>
              </div>

              <div className="mt-12">
                <Link href="/step1" legacyBehavior>
                  <button className="border-[#B1B1B1] border-1 rounded px-4 py-2 w-full package-button bg-[#5022B8] text-white hover:bg-[#6b42ca]">
                    Select
                  </button>
                </Link>
              </div>

              <div className="flex justify-center mt-6 items-center">
                <img
                  src="/images/download-sample-file.png"
                  className="w-5 h-5 mb-0 mr-3"
                />
                <p className="package-caption hover:text-[#5022b8] cursor-pointer">
                  Download sample file
                </p>
              </div>

              <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">High resolution</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Unlimited changes</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Logo transparent file</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Source files</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Social media kit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col border-[#E5E5E5] border rounded-md text-center pb-6">
            <div className="bg-[#F77700] p-8 w-full rounded-t-md relative">
              <h3 className="package-title text-white">Business</h3>

              <p className="drop-shadow-md absolute -top-5 -right-5 pricing-tag text-[#F77700] bg-[#ffffff] p-2 rounded-lg">
                Recommended
              </p>
            </div>

            <div class="w-full overflow-hidden flex flex-row justify-center">
              <div class=" h-6 w-6 bg-[#F77700] -rotate-45 transform origin-top-left"></div>
            </div>

            <div className="px-16 md:px-8 lg:px-8 xl:px-16">
              <div className="flex justify-center items-center mt-6">
                <h3 className="package-price">$100</h3>

                <p className="package-price-2 mt-4 ml-2 mb-4">/ One Time</p>
              </div>

              <div className="mt-4">
                <p className="package-caption">
                  Everything you need to start your business
                </p>
              </div>

              <div className="mt-12">
                <Link href="/step1" legacyBehavior>
                  <button className="border-[#B1B1B1] border rounded px-4 py-2 w-full package-button hover:bg-[#F77700] hover:text-white">
                    Select
                  </button>
                </Link>
              </div>

              <div className="flex justify-center mt-6 items-center">
                <img
                  src="/images/download-sample-file.png"
                  className="w-5 h-5 mb-0 mr-3"
                />
                <p className="package-caption hover:text-[#5022b8] cursor-pointer">
                  Download sample file
                </p>
              </div>

              <div className="flex justify-start ml-6 mt-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Everything in Advanced</p>
              </div>

              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Business card</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Brand kit</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Stationery Designs</p>
              </div>
              <div className="flex justify-start ml-6 align-center mb-4">
                <img src="/images/checkmark.svg" className="w-4 mb-0 mr-4" />
                <p className="package-description">Branding guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* faq starts */}

    <div className="container max-w-[1300px] mx-auto text-center px-4 md:px-6 py-12 mb-12">
      <h1 className="card-title">Common Questions</h1>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <CommonQuestions title={title} content={content} />
        ))}
      </div>
    </div>
  </>;
};

export default GenerateCustom;


GenerateCustom.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}