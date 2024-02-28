import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../components/layout/main";
import {
  searchLogom,
  getIndustries,
  searchLogo,
} from "../../api_calls/generate";
import InlineSVG from "react-inlinesvg";
import { useHookstate } from "@hookstate/core";
import { logostore } from "../../store/logostore";
import {
  Select,
  OutlinedInput,
  MenuItem,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import Head from "next/head";
// import WebFont from 'webfontloader';

const GenerateSearchResults = () => {
  const router = useRouter();
  const { brand_name, slogan, industry } = router.query;
  const [isLoading, setLoading] = useState(false);

  const [query, setQuery] = useState({
    brand_name: brand_name ? brand_name : "",
    slogan: slogan ? slogan : "",
    industry: industry ? industry : "",
  });

  const [industries, setIndustries] = useState([]);
  const [logos, setLogos] = useState([]);
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    setQuery({ brand_name, slogan, industry });
    if (brand_name) {
      callSearch(brand_name, industry);
    }
    initIndustries();
  }, []);

  const callSearch = async (bn, ind) => {
    setLoading(true);
    const l = await searchLogo({
      query: bn,
      industry: ind,
      limit: 10,
      skip: 0,
    });
    let allfonts = [];
    for (const logo of l) {
      if (logo.data.items) {
        for (const f of logo.data.items) {
          allfonts.push(f.fontFamily);
        }
      }
    }
    setFonts(allfonts);
    setLogos(l);
    setLoading(false);
  };

  const initIndustries = async () => {
    setLoading(true);
    const ins = await getIndustries();
    setIndustries(ins.result.result);
    setLoading(false);
  };

  const handleEditClick = (logo) => {
    logostore.set({
      ...logo,
      slogan: query.slogan,
      brand_name: query.brand_name,
      data: logo.data,
      _id: logo._id,
    });
  };

  //   useEffect(() => {
  //     console.log(fonts)
  //     if (fonts.length > 0) {
  //         try {
  //             WebFont.load({
  //                 google: {
  //                     families: fonts
  //                 }
  //             });
  //         }
  //         catch (error) {
  //             console.log('Font Loading error',error)
  //         }
  //     }
  // }, [fonts])

  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {fonts.map((f) => (
        <link
          href={`https://fonts.googleapis.com/css2?family=${f}:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap`}
          rel="stylesheet"
        />
      ))}
    </Head>
    <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6 mt-12">
      <h3 className="card-semi-title text-center">
        Pick your favorite logo to customize
      </h3>
      <h3 className="txt3 text-center mt-4">
        Download your logo as is, or select one to customize to get exactly
        what you need
      </h3>

      <div className="grid grid-cols-12 py-12 gap-4">
        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
          <label className="lable1">
            Logo name{" "}
            <Tooltip
              title="Your logo will be design using this name"
              arrow
              placement="right"
            >
              <span className="roundhint2">
                <b>!</b>
              </span>
            </Tooltip>
          </label>

          <input
            type="text"
            name="brand_name"
            className="input1 focus:ring-[#5022b8] focus:ring-2 mt-3"
            placeholder=""
            defaultValue={query.brand_name}
            value={query.brand_name}
            onChange={(e) =>
              setQuery({ ...query, brand_name: e.target.value })
            }
            disabled={isLoading}
          />
        </div>

        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
          <label className="lable1">
            Slogan{" "}
            {/* <span className="roundhint2">
              <b>!</b>
            </span> */}
          </label>
          <input
            type="text"
            name="slogan"
            className="input1 focus:ring-[#5022b8] focus:ring-2  mt-3"
            placeholder=""
            defaultValue={query.slogan}
            disabled={isLoading}
            value={query.slogan}
            onChange={(e) => setQuery({ ...query, slogan: e.target.value })}
          />
        </div>

        {/* <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
          <label className="lable1">
            Keywords{" "}
            <span className="roundhint2">
              <b>!</b>
            </span>
          </label>
          <input
            type="text"
            name="kw"
            className="input1 focus:ring-[#5022b8] focus:ring-2  mt-3"
            placeholder=""
          />
        </div> */}

        {/* <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
          <label className="lable1">Logo style</label>
          <select
            className="select1 focus:ring-[#5022b8] focus:ring-2 mt-3"
            name="style"
            defaultValue=""
          >
            <option value="1">All</option>
            <option value="2">Style 1</option>
            <option value="3">Style 2</option>
            <option value="4">Style 3</option>
          </select>
        </div> */}

        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
          <label className="lable1">Industry</label>
          <Tooltip
            title="Telling us your industry will help us pick the best design for your brand"
            arrow
            placement="right"
          >
            <span className="roundhint2">
              <b>!</b>
            </span>
          </Tooltip>

          <Select
            className="mt-3 input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
            // multiple
            value={query.industry}
            disabled={isLoading}
            onChange={(e) => {
              // const { target: { value } } = e;
              // setIndustry(typeof value === 'string' ? value.split(',') : value,)
              setQuery({ ...query, industry: e.target.value });
            }}
            input={<OutlinedInput />}
            // MenuProps={MenuProps}
          >
            {industries.map((ins) => (
              <MenuItem key={ins._id} value={ins.name}>
                {ins.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3 mt-4 sm:mt-[36px]">
          <button
            type="submit"
            className={`primary-btn-w-full w-full h-[42px] ${
              isLoading && "text-purple-700"
            }`}
            onClick={() => callSearch(query.brand_name, query.industry)}
          >
            {isLoading && (
              <div className="flex justify-center items-center p-2">
                <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"></div>
              </div>
            )}
            {!isLoading && "Search"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-6">
        {logos.length > 0 &&
          logos.map((l) => {
            if (l.svg != "-")
              return (
                <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6">
                  <div
                    className="relative flex justify-center group"
                    key={l._id}
                  >
                    <div className="w-full aspect-[145/100] shadow-lg rounded-lg cursor-pointer relative group-hover:opacity-[0.5]">
                      <InlineSVG
                        scale={5}
                        src={l.svg
                          .replace("Brandermine", query.brand_name)
                          .replace("Logo Editor", query.slogan)}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>

                    <div className="absolute top-[calc(50%-24px)] opacity-[0] group-hover:opacity-[1] flex items-center bg-white p-2 shadow-xl rounded-md">
                      <Link
                        href={`/generate/design?brand_name=${query.brand_name}&slogan=${query.slogan}&lid=${l._id}`}
                        legacyBehavior>
                        <button
                          type="submit"
                          className="primary-btn mr-2"
                          onClick={() => handleEditClick(l)}
                        >
                          Edit
                        </button>
                      </Link>

                      {/* <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 ml-2 cursor-pointer text-red-700 absolute opacity-[0] top-0 hover:opacity-[1]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 cursor-pointer hover:text-[#5022b8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      {/* <button type="submit" className="primary-btn-red">
                Remove
              </button>{" "} */}
                    </div>
                  </div>
                </div>
              );
          })}
      </div>
    </div>

    <div className="bg-[#f1f1f1] relative">
      <div className="cursor-pointer top-0 absolute right-0 text-black hover:text-[#5022b8] w-12 h-12 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="container max-w-[1300px] mx-auto py-12 px-4 md:px-6">
        <h3 className="card-semi-title-2 text-center mb-4">
          Do you have something better in your mind
        </h3>
        <h3 className="txt3 text-center mb-4">
          Create logo that accurately suit your idea by editing your brief or
          Work with a top designer do design your logo completely new.
        </h3>

        <div className="card-div-10 flex items-center">
          <button
            type="button"
            className="btn-4 mt-2 hover:bg-[#5022B8] hover:text-white"
          >
            Edit Your Brief
          </button>
          <button
            type="button"
            className="btn-5 mt-2 bg-[#5022B8] hover:bg-[#6b42ca]"
          >
            Get Custom Logo
          </button>
        </div>
      </div>
    </div>
  </>;
};

export default GenerateSearchResults;

GenerateSearchResults.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
