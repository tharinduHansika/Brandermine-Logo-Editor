import Head from 'next/head';
import Herosection2 from '../components/Herosection2';

import { Navbar } from '../components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CommonQuestions from '../components/CommonQuestions';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import Link from 'next/link';
import Testomonials from '../components/Testomonials';
import Carousel from 'react-grid-carousel';

export default function LogoMaker() {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        height: '12px',
        width: '12px',
        borderRadius: '50px',
      }}
      className={isActive ? 'bg-[#7D5ACA]' : 'bg-[#D4C8ED]'}
    ></span>
  );

  const accordionData = [
    {
      title:
        'Lorrem Ipsum is simply dummy text of the printing and typesetting ?',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
    },
    {
      title: 'Lorem Ipsum is simply dummy text of ?',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
    },
  ];

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

      <Herosection2 />

      <div className='container max-w-[1300px] mx-auto text-center py-6 pb-4 sm:pb-12 px-12 md:px-12 bg-[#eff4fb] rounded-lg'>
        <div className='grid grid-cols-12 gap-4 p-0 py-4 md:py-0 md:p-8'>
          <div className='col-span-12 p-0 md:p-4'>
            <h1 className='leading-[40px] sm:leading-[40px] sm:text-[28px] text-[28px] text-left'>
              <b>Trusted by Professionals, Accessible to Everyone</b>
            </h1>
          </div>
          <div className='col-span-12 p-0 md:p-4 lg:col-span-6 sm:col-span-6'>
            <p className='leading-[28px] sm:text-[20px] text-[20px] text-left'>
              VEED is used by thousands of content creators around the world in
              making videos for social media and beyond. There’s no software to
              download, and you don’t need any prior video editing experience.
              Our free video editing app works right in your browser. Whether
              you’re adding subtitles to a YouTube video, a progress bar to an
              Instagram Story, or cropping some footage to fit a Twitter post,
              you can do it all, with VEED.
            </p>
          </div>
          <div className='col-span-12 p-0 md:p-4 lg:col-span-6 sm:col-span-6'>
            <p className='leading-[28px] sm:text-[20px] text-[20px] text-left'>
              Welcome to VEED’s online suite of editing tools and handy features
              that reduce complex video editing tasks to just a few clicks. Say
              goodbye to clunky video software and hello to one-click video
              editing online. VEED is a powerful piece of software that allows
              you to add subtitles to your videos automatically, translate
              videos, transcribe audio files, add visual effects, and create
              content that increases views, gets likes and attracts followers!
            </p>
          </div>
        </div>
      </div>

      <div className='container max-w-[1300px] mx-auto py-0 sm:py-12 px-4 md:px-6'>
        <h1 className='card-title pt-8 sm:pt-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]'>
          Brands with Brandermine
        </h1>

        <div className='hidden row sm:block'>
          <Carousel dot={MyDot} cols={5} rows={2} gap={15} loop showDots='true'>
            <Carousel.Item>
              <img src='/images/icon/logo-01.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-02.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-03.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-04.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-05.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-06.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-07.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-08.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-09.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-10.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-01.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-02.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-03.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-04.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-05.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-06.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-07.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-08.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-09.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-10.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-01.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-02.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-03.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-04.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-05.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-06.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-07.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-08.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-09.svg' className='carousel-img' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/images/icon/logo-10.svg' className='carousel-img' />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='block sm:hidden'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
              <img src='/images/icon/logo-01.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-02.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-03.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-04.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-05.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-06.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-07.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-08.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-09.svg' className='carousel-img' />
            </div>
            <div className='col-span-6'>
              <img src='/images/icon/logo-10.svg' className='carousel-img' />
            </div>
          </div>
        </div>
      </div>

      <div className='container max-w-[1300px] mx-auto py-8 sm:py-12 px-4 md:px-6'>
        <h1 className='card-title py-0 sm:py-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]'>
          How to Edit a Video
        </h1>

        <div className='grid grid-cols-12 py-8 pr-0 mb-8'>
          <div className='flex flex-col items-center justify-start col-span-12 pr-0 mt-8 text-center md:col-span-4 sm:mt-0 sm:pr-16'>
            <img src='/images/logo-maker/1.png' />

            <p className='leading-[40px] sm:leading-[40px] sm:text-[24px] text-[24px] mb-4'>
              <b>Choose a File</b>
            </p>
            <p className='leading-[28px] sm:leading-[28px] sm:text-[20px] text-[20px] text-[#192023]'>
              Select a video to upload, or try one of our sample videos
            </p>
          </div>

          <div className='flex flex-col items-center justify-start col-span-12 pr-0 mt-8 text-center md:col-span-4 sm:mt-0 sm:pr-16'>
            <img src='/images/logo-maker/2.png' />

            <p className='leading-[40px] sm:leading-[40px] sm:text-[24px] text-[24px] mb-4'>
              <b>Make Edits to your Video, Online</b>
            </p>
            <p className='leading-[28px] sm:leading-[28px] sm:text-[20px] text-[20px] text-[#192023]'>
              In the editor you can add text, add audio, remove audio, add
              subtitles automatically, crop, rotate, add filters & effects, and
              much, much more!
            </p>
          </div>

          <div className='flex flex-col items-center justify-start col-span-12 pr-0 mt-8 text-center md:col-span-4 sm:mt-0 sm:pr-16'>
            <img src='/images/logo-maker/3.png' />

            <p className='leading-[40px] sm:leading-[40px] sm:text-[24px] text-[24px] mb-4'>
              <b>Download</b>
            </p>
            <p className='leading-[28px] sm:leading-[28px] sm:text-[20px] text-[20px] text-[#192023]'>
              Just click ‘Export’ and you’re ready to watch and share your fully
              edited video! Happy viewing!
            </p>
          </div>
        </div>
      </div>

      <div className='container max-w-[1300px] mx-auto py-8 sm:py-12 px-4 md:px-6'>
        <h1 className='card-title py-0 sm:py-8 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]'>
          One stop for everything you need
        </h1>

        <div className='grid grid-cols-12 py-8 pr-0 mb-8'>
          <div className='col-span-12 pr-0 md:col-span-6 sm:pr-16'>
            <img src='/images/slider/concept.png' />
          </div>

          <div className='flex flex-col justify-center col-span-12 pl-0 mt-8 md:col-span-6 sm:mt-0 sm:pl-16'>
            <h1 className='mb-4 text-center card-semi-title sm:text-left'>
              Make your brand idea a reality right now!
            </h1>
            <p className='py-2 mb-4 text-center card-description sm:text-left'>
              Endless design possibilities. Customize your logo from A to Z
              choosing from thousands of templates, color combination and
              detailing discussing with our design team.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-12 py-8 pr-0 mb-8'>
          <div className='flex flex-col justify-center col-span-12 pr-0 mt-8 md:col-span-6 sm:mt-0 sm:pr-16'>
            <h1 className='mb-4 text-center card-semi-title sm:text-left'>
              Fully customizable logo with our premium package
            </h1>
            <p className='py-2 mb-4 text-center card-description sm:text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className='order-first col-span-12 pl-0 md:col-span-6 sm:pl-16 sm:order-last'>
            <img src='/images/slider/Premiumdesign.png' />
          </div>
        </div>

        <div className='grid grid-cols-12 py-8 pr-0 mb-8'>
          <div className='col-span-12 pr-0 md:col-span-6 sm:pr-16'>
            <img src='/images/slider/mediakitdesigns.png' />
          </div>

          <div className='flex flex-col justify-center col-span-12 pl-0 mt-8 md:col-span-6 sm:mt-0 sm:pl-16'>
            <h1 className='mb-4 text-center card-semi-title sm:text-left'>
              Connect with your audience
            </h1>
            <p className='py-2 mb-4 text-center card-description sm:text-left'>
              Download high quality logo optimised for business cards, letter
              heads, social media and more
            </p>
          </div>
        </div>

        <div className='grid grid-cols-12 py-0 pr-0 mb-0 sm:mb-8 sm:py-8'>
          <div className='flex flex-col justify-center col-span-12 pr-0 mt-8 md:col-span-6 sm:mt-0 sm:pr-16'>
            <h1 className='mb-4 text-center card-semi-title sm:text-left'>
              Grow your website. Get going
            </h1>
            <p className='py-2 mb-4 text-center card-description sm:text-left'>
              Create your business website with Brandermine and Market to the
              right audience. Our personal tech team will make it SEO friendly.
            </p>
          </div>

          <div className='order-first col-span-12 pl-0 md:col-span-6 sm:pl-16 sm:order-last'>
            <img src='/images/slider/development.png' />
          </div>
        </div>
      </div>

      {/* faq starts */}
      <div className='container max-w-[1300px] mx-auto text-center py-0 sm:py-12 px-4 md:px-6'>
        <h1 className='card-title pt-8 sm:pt-9 leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]'>
          Frequently asked questions
        </h1>

        <div className='accordion'>
          {accordionData.map(({ title, content }) => (
            <CommonQuestions title={title} content={content} />
          ))}
        </div>
      </div>

      {/* test starts */}
      <div className='container max-w-[1300px] mx-auto text-center py-12 px-4 md:px-6'>
        <h1 className='card-title leading-[44px] sm:leading-[60px] sm:text-[40px] text-[38px]'>
          What our customers say
        </h1>

        <Testomonials />
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
