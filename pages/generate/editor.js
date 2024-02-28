import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import Iframe from 'react-iframe'
import { getUID } from "../../api_calls/firebase";
import { useHookstate } from '@hookstate/core';
import { authState } from "../../store/authstore";

const GenerateSearchEditor = () => {
  const router = useRouter();
  const { brand_name, slogan, lid } = router.query;

  const authstate = useHookstate(authState);
  useEffect(() => {
    if (!authstate.get().isAuthenticated) {
      authState.set({ ...authState.get(), isAuthRequired: true })
    }
  })
  return <>
    <Iframe url={`https://bm-editor-dev.web.app?brand_name=${brand_name}&slogan=${slogan}&loadId=${lid}&uid=${getUID()}`}
      width="100%"
      height="100%"
      id=""
      className=" h-screen" />
    <div className="mx-auto flex items-end justify-center p-8">
      <div className="flex">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center  flex flex-col lg:h-auto mt-6 lg:mt-0">
          <Link href="/generate/custom" legacyBehavior>
            <button
              type="submit"
              className="primary-btn-borderless mr-4 w-full lg:w-auto mt-4 sm:mt-0 px-4 mb-1 lg:mb-0"
            >
              Customize for me
            </button>
          </Link>

          <Link
            href={`/generate/purchase?brand_name=${brand_name}&slogan=${slogan}&lid=${lid}`}
            legacyBehavior>
            <button
              type="submit"
              className="primary-btn1 w-full lg:w-auto mt-4 sm:mt-0 px-4"
            >
              Buy & Download
            </button>
          </Link>
        </div>
        {/* <a href="#preview" className="bg-white/50 p-8 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce hover:text-[#5022b8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </a> */}
      </div>
    </div>
    {/* <div
      id="preview"
      className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 mt-4 sm:mt-12"
    >
      <img src="/images/mockup1.png" className="w-full" />
    </div> */}


  </>;
};

export default GenerateSearchEditor;


GenerateSearchEditor.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}