import Head from 'next/head';
import Herosection from '../components/Herosection';
import Homebrandsection from '../components/Homebrandsection';
import Homecontentsection from '../components/Homecontentsection';
import Homedesignlogosection from '../components/Homedesignlogosection';
import Homestrengthsection from '../components/Homestrengthsection';
import { Navbar } from '../components/Navbar';
import Test from '../components/Test';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Homeblogsection from '../components/Homeblogsection';
import { Logomakersection } from '../components/Logomakersection';
import Slider2 from '../components/Slider2';
import CommonQuestions from '../components/CommonQuestions';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import Link from 'next/link';

export default function popularLogos() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Navbar />

      <div className='container max-w-[1300px] mx-auto text-center py-12 pb-24 px-4 md:px-6'>
        <h1 className='pt-12 logo-industry-title'>World most popular logos </h1>

        <p className='mt-8 text-left logo-industry-description'>
          Whatever industry you’re creating a logo for, it helps to start with
          inspiration. Below, we’ve curated 2,100+ existing logo designs from 72
          of the most popular industries, and included design tip s for each. So
          whether you’re branding a construction business or a food blog, your
          inspiration starts here.
          <br />
          <br />
          Ready to start creating a logo for your business? Use our online logo
          maker to generate an unlimited number of custom logo ideas in minutes.
        </p>
      </div>

      <div className='bg-[#eff4fb]'>
        <div className='container max-w-[1300px] mx-auto text-center py-12 pb-8 sm:pb-24 px-4 md:px-6'>
          <h1 className='logo-industry-title pt-0 sm:pt-12 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]'>
            The best logo designs by industry
          </h1>

          <div className='relative flex w-full sm:w-[450px] mt-8 justify-center items-center mx-auto'>
            <input
              type='text'
              name='brand_name'
              className='focus:ring-[#5022b8] font-[400] text-black focus:border-[#5022b8] focus:border focus:ring-2 search-input relative px-3 w-full sm:w-[450px] h-[56px] bg-white rounded border-none placeholder-gray-400'
              placeholder='Search Industries...'
            />
            <span class='absolute top-0 right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 hover:text-[#5022b8] cursor-pointer'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </div>

          <div className='grid grid-cols-12 gap-4 mt-12'>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <Link href='/industryLogo' legacyBehavior>
                <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                  Agriculturedfgdfgdfdfdfgdfg
                </p>
              </Link>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Creative
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Entertainment
              </p>
            </div>

            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Agriculture
              </p>
            </div>
            <div className='col-span-6 transition duration-200 ease-in-out cursor-pointer lg:col-span-2 sm:col-span-3 delay-40 hover:translate-y-1'>
              <p className='px-4 py-3 truncate bg-white rounded logo-industry-text'>
                Business
              </p>
            </div>

            <div className='col-span-12 px-4 mt-12 lg:col-span-12 sm:col-span-6'>
              <button
                type='submit'
                className='search-btn2 text-white rounded w-full my-2 sm:my-0 ml-0 sm:ml-4 max-w-[300px] transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer'
              >
                View all industries
              </button>

              <button
                type='submit'
                className='search-btn2 text-white rounded w-full my-2 sm:my-0 ml-0 sm:ml-4 max-w-[300px] transition ease-in-out delay-40 hover:translate-y-1 duration-200 cursor-pointer'
              >
                View fewer industries
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#5022B8] py-0 sm:py-12 mb-0 sm:mb-12'>
        <div className='container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6 flex flex-col items-center justify-center'>
          <p className='mb-4 blue-container-text1'>
            Design your own professional logo
          </p>
          <p className='blue-container-text2'>
            Get access to our design gallery to generate your business logo
          </p>

          <div className='mt-8'>
            <input
              type='text'
              name='brand_name'
              className='focus:ring-[#ffffff] focus:ring-1 search-input px-3 sm:w-[350px] w-full bg-[#5022b8] rounded border-2 focus:border-[#ffffff] border-[#CCCCCC] placeholder-white'
              placeholder='Enter your Company name'
            />
            <button
              type='submit'
              className='search-btn-white text-[#5022b8] rounded w-full sm:w-[169px] my-4 sm:my-0 ml-0 sm:ml-4 hover:text-white'
            >
              Get Start
            </button>
          </div>
        </div>
      </div>

      <div className='container max-w-[1300px] mx-auto py-12 mb-12 px-4 md:px-6 clear-left	'>
        <h1 className='card-title '>Learn how to create the perfect logo</h1>

        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-3'>
            <div className=''>
              <img src='/images/blog/1.webp' className='w-full' />
              <h1 className='blog-title'>
                How to choose the perfect logo for your business
              </h1>
              <p className='blog-description'>
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className='mt-4 blog-readmore'>Read More </p>
            </div>
          </div>

          <div className='col-span-12 md:col-span-3'>
            <div className=''>
              <img src='/images/blog/3.webp' className='w-full' />
              <h1 className='blog-title'>
                What these 28 fonts say about your business
              </h1>
              <p className='blog-description'>
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className='mt-4 blog-readmore'>Read More </p>
            </div>
          </div>

          <div className='col-span-12 md:col-span-3'>
            <div className=''>
              <img src='/images/blog/2.webp' className='w-full' />
              <h1 className='blog-title'>
                Choosing the right color for your brand
              </h1>
              <p className='blog-description'>
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className='mt-4 blog-readmore'>Read More </p>
            </div>
          </div>

          <div className='col-span-12 md:col-span-3'>
            <div className=''>
              <img src='/images/blog/Right-color.webp' className='w-full' />
              <h1 className='blog-title'>
                The seven types of logos and when to use them
              </h1>
              <p className='blog-description'>
                If you don't plan to use the grid-template-columns utilities in
                your project, you can disable them entirely by setting the
              </p>
              <p className='mt-4 blog-readmore'>Read More </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer starts */}
      <div className='container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6'>
        <Footer />
      </div>

      {/* footer1 starts */}
      <div className='container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6'>
        <Footer2 />
      </div>
    </div>
  );
}
