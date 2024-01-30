import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function GenerateLogoTextBox({ varient = 1 }) {
    const router = useRouter();
    const { brand_name, slogan, industry } = router.query;
    const [query, setQuery] = React.useState({ brand_name: brand_name ? brand_name : '', slogan: slogan ? slogan : '', industry: industry ? industry : '' })
    if (varient == 1) {
        return <>
            <div className="relative flex w-full">
                <input
                    type="text"
                    name="brand_name"
                    className="focus:ring-[#5B2FBC] focus:border-[#5B2FBC] focus:ring-1 search-input text-black relative px-3 w-full h-[56px] bg-white rounded border-2 border-[#CCCCCC] placeholder-gray-400"
                    placeholder="Enter your logo name"
                    onChange={(e) => setQuery({ ...query, brand_name: e.target.value })}
                />
                <span class="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                    <img src="/images/icon/pen.svg" />
                </span>
            </div>
            <div>
                <Link href={`/generate?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}>
                    <button
                        type="submit"
                        className="search-btn text-white rounded w-full sm:w-[169px] my-2 sm:my-0 ml-0 sm:ml-4"
                    >
                        Generate Logo
                    </button>
                </Link>
            </div>
        </>
    } else if (varient == 0) {
        return <>
            <input
                type="text"
                name="brand_name"
                className="focus:ring-[#ffffff] focus:ring-1 search-input px-3 sm:w-[350px] w-full bg-[#5022B8] rounded border-2 border-[#CCCCCC] focus:border-white placeholder-white"
                placeholder="Enter your logo name"
                onChange={(e) => setQuery({ ...query, brand_name: e.target.value })}
            />
            <Link href={`/generate?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}>
                <button
                    type="submit"
                    className="search-btn-white hover:text-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4"
                >
                    Get Started
                </button>
            </Link>
        </>
    } else if (varient == 2) {
        return <div class="sm:flex justify-center block">
            <input
                type="text"
                placeholder="Enter your logo name"
                className="input-text-1 rounded border-2 border-[#CCCCCC] focus:border-[#5022b8] focus:ring-[#5022b8] focus:ring-1"
                onChange={(e) => setQuery({ ...query, brand_name: e.target.value })}
            />
            <Link href={`/generate?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}>
                <button class="search-btn text-white rounded mt-4 sm:mt-0 w-full sm:w-[169px]">
                    Get Started
                </button>
            </Link>
        </div>
    } else if (varient == 3) {
        return <><input
            type="text"
            name="brand_name"
            className="focus:ring-[#ffffff] focus:ring-1 focus:border-[#ffffff] focus:border-2 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] rounded border-2 border-[#CCCCCC] placeholder-white"
            placeholder="Enter your logo name"
            onChange={(e) => setQuery({ ...query, brand_name: e.target.value })}

        />
            <Link href={`/generate?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}>

                <button
                    type="submit"
                    className="search-btn-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4 hover:text-white"
                >
                    Get Start
                </button>
            </Link>
        </>
    }
}