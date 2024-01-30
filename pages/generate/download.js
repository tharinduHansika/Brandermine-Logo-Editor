import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import { useHookstate } from "@hookstate/core";
import { logostore } from "../../store/logostore";
import InlineSVG from "react-inlinesvg";

const GenerateSearchDesign = () => {
  const router = useRouter();
  const { brand_name, slogan, lid } = router.query;
  const logostate = useHookstate(logostore)
  const [svg,setSvg] = useState('')

  useEffect(()=>{
    var s = localStorage.getItem('svg')
    setSvg(s)
  })

  function downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });

    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
  }
  return (
    <>
      <div className="container max-w-[1300px] mx-auto pb-12 px-4 md:px-6 py-12 mt-12">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 md:col-span-4 sm:col-span-4">
            <div className="w-full aspect-[145/100] shadow-lg rounded-lg">
              {svg &&
                <InlineSVG scale={5} src={svg} width={'100%'} height={'100%'} />}
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 sm:col-span-8 px-4 lg:px-16 md:px-16 sm:px-16 my-4 sm:my-0 sm:py-0 flex flex-col items-start justify-between">
            <div>
              <h1 className="step6-title ">Download your logo here.</h1>
              <h1 className="step6-description mt-4 mb-8">
                <strong>Your logo is finished!</strong> Now look professional with your own high quality logo.
              </h1>
            </div>
            <div>
              <button
                onClick={() => downloadString(svg, 'svg', brand_name + '-logo-by-brandermine.svg')}
                type="submit"
                className="primary-btn w-auto flex items-center justify-center px-10 py-10 text-[32px] rounded-lg"
              >
                <img src="/images/download.png" className="w-[48px] mr-6" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateSearchDesign;


GenerateSearchDesign.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}