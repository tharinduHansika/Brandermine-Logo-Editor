import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import { logostore } from "../../store/logostore";
import InlineSVG from "react-inlinesvg";
import { hookstate, useHookstate } from '@hookstate/core';
import { createFirebaseLogo } from "../../api_calls/firebase";
import { authState } from "../../store/authstore";

const GenerateSearchDesign = () => {
  const router = useRouter();
  const { brand_name, slogan, lid } = router.query;
  const logostate = useHookstate(logostore);
  const authstate = useHookstate(authState);
  useEffect(()=>{
    if (!authstate.get().isAuthenticated){
      authState.set({...authState.get(),isAuthRequired:true})
    }
  },)

  return <>
    <div className="container max-w-[1300px] mx-auto pb-12 mt-12 px-4 md:px-6">
      <div className="container py-10">
        <div className="row">
          <h3 className="card-semi-title text-left">Choose your design</h3>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-12 md:col-span-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 md:col-span-6">
                <div
                  className="w-full aspect-[145/100] shadow-lg border-2 rounded-md border-purple-800 pt-2"
                >
                  {logostate.get().svg &&
                    <InlineSVG scale={5} src={logostate.get().svg.replace('Brandermine', brand_name).replace('Logo Editor', slogan)} width={'100%'} height={'100%'} />}
                </div>
              </div>
              {logostate.get().suggestions && logostate.get().suggestions.length > 0 && logostate.get().suggestions.map(s => {
                console.log(JSON.parse(s).svg)
                return <div className="col-span-6 md:col-span-6">
                  <InlineSVG scale={5} src={JSON.parse(s).svg.replace('Brandermine', brand_name).replace('Logo Editor', slogan)} width={'100%'} height={'100%'} />
                </div>
              })}

            </div>
            <div className="mt-4">
              <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mt-6 lg:mt-0">
                <Link
                  href={`/generate/editor?brand_name=${brand_name}&slogan=${slogan}&lid=${lid}`}
                  legacyBehavior>
                  <button
                    type="submit"
                    onClick={() => {
                      createFirebaseLogo(lid, {
                        svg: logostate.get().svg,
                        id: logostate.get()._id,
                        data: logostate.get().data,
                        suggestions: logostate.get().suggestions,
                      })
                    }}
                    className="primary-btn-borderless mr-4 w-full lg:w-auto mt-4 sm:mt-0 px-4 mb-1 lg:mb-0"
                  >
                    Customize design
                  </button>
                </Link>

                <Link
                  href={`/generate/purchase?brand_name=${brand_name}&slogan=${slogan}&lid=${lid}`}
                  legacyBehavior>
                  <button
                    type="submit"
                    className="primary-btn1 w-full lg:w-auto mt-2 sm:mt-0 px-4"
                  >
                    Buy & Download
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <img src="/images/mockup1.png" className="w-full" />

          </div>
        </div>
      </div>
    </div>
  </>;
};

export default GenerateSearchDesign;


GenerateSearchDesign.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}