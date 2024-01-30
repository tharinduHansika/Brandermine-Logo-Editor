import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MainLayout from '../../components/layout/main';
import { getIndustries } from '../../api_calls/generate';
import {
  Select,
  OutlinedInput,
  MenuItem,
  CircularProgress,
  Tooltip,
} from '@mui/material';

const GenerateSearchIndustry = () => {
  const router = useRouter();
  const { brand_name, slogan, industry } = router.query;
  const [query, setQuery] = React.useState({ brand_name, slogan, industry });
  const [industries, setIndustries] = useState([]);
  const [selectedIns, setIndustry] = useState([industry]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    initIndustries();
  }, []);

  const initIndustries = async () => {
    setLoading(true);
    const ins = await getIndustries();
    console.log(ins);
    setIndustries(ins.result.result);
    setLoading(false);
  };

  useEffect(() => {
    let is = selectedIns.filter((i) => i != '');
    setQuery({ ...query, industry: is });
  }, [selectedIns]);
  return (
    <div className='container max-w-[1300px] mx-auto py-12 px-4 md:px-6 mt-12'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-6'>
          <p className='mb-2 text-left step'>STEP 2/2</p>
          <div className='flex justify-start'>
            <div className='mr-1 step-active'></div>
            <div className='step-active'></div>
          </div>
        </div>
        {/* <div className="col-span-12 text-left md:col-span-6 skip md:text-right">
            SKIP
          </div> */}
      </div>

      <div className='grid grid-cols-12 py-12'>
        <div className='col-span-12 pr-0 md:col-span-6 sm:pr-12'>
          <div className='flex flex-col mb-8 space-y-2'>
            <h3 className='mt-4 leading-10 step-title'>
              Create your stunning logo in few clicks
            </h3>
            <h3 className='step-title2'>
              Let's know more about you to design a logo you enjoy
            </h3>
          </div>

          <div className='flex flex-col mt-4'>
            <div className='flex items-center mb-2'>
              <h2 className='mb-2 colors-title'>
                Chose your Industry{' '}
                <span className='text-[#B1B1B1]'>(Up to 3)</span>
              </h2>
              <Tooltip
                title='Telling us your industry will help us pick the best design for your brand'
                arrow
                placement='right'
              >
                <div className='roundhint'>
                  <b>!</b>
                </div>
              </Tooltip>
            </div>

            {/* <input
              className="input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              placeholder="eg. restaurant, advertising, digital marketing, photography etc..."
              type="text"
              value={query.industry}
              onChange={(e) => setQuery({ ...query, industry: e.target.value })}
            /> */}
            <Select
              className='input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1'
              multiple
              value={selectedIns}
              onChange={(e) => {
                const {
                  target: { value },
                } = e;
                let i = typeof value === 'string' ? value.split(',') : value;
                setIndustry(i);
                // setIndustry(e.target.value)
              }}
              input={<OutlinedInput />}
              // MenuProps={MenuProps}
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                industries.map((ins) => (
                  <MenuItem key={ins._id} value={ins.name}>
                    {ins.name}
                  </MenuItem>
                ))
              )}
            </Select>
          </div>

          {/* <div className="mt-4">
            <h2 className="mb-2 colors-title">
              Add elements you’d like your logo to include{" "}
              <span className="text-[#B1B1B1]">(Optional)</span>
            </h2>
            <input
              className="input2-full-width focus:ring-[#5022b8] focus:ring-2 border-[#cccccc] focus:border-[#5022b8] focus:border-1"
              id="textarea"
              name="textarea"
              placeholder="Eg: Sun, Dog , book"
              type="text"
              onChange={(e)=>setQuery({...query,elements:e.target.value})}
            />
            <p className="hint text-[#797979] mt-3">
              Separate keywords with a comma or use the Enter key
            </p>
          </div> */}

          <div className='flex flex-row items-center justify-between mt-12'>
            <Link
              href={`/generate?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}
            >
              <button
                type='submit'
                className='primary-btn-back float-right mt-6 sm:mt-0 hover:bg-[#5022b8] hover:text-white'
              >
                Back
              </button>
              {/* <p className="back float-left no-underline hover:text-[#5022b8] cursor-pointer">
                🠔 back
              </p> */}
            </Link>

            <Link
              href={`/generate/results?brand_name=${query.brand_name}&slogan=${query.slogan}&industry=${query.industry}`}
            >
              <button
                type='submit'
                className='float-right mt-6 primary-btn sm:mt-0 '
              >
                Next
              </button>
            </Link>
          </div>
        </div>

        <div className='flex items-center col-span-12 pl-0 mt-12 md:col-span-6 sm:pl-6 sm:mt-0'>
          <img src='/images/slider/concept.png' className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default GenerateSearchIndustry;

GenerateSearchIndustry.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
