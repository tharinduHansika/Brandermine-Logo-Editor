import React from "react";
import Carousel from "react-grid-carousel";

function Testomonials() {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        height: "12px",
        width: "12px",
        borderRadius: "50px",
      }}
      className={isActive ? "bg-[#7D5ACA]" : "bg-[#D4C8ED]"}
    ></span>
  );

  return (
    <div className="mt-6">
      <Carousel dot={MyDot} cols={3} rows={1} gap={15} loop showDots="true">
        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l1.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a1.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Regina Angeline</p>
              <p className="testo-caption mb-2">Housewife</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "I discovered Brandermine to be simple to use, and with just a
                few mouse clicks, I was able to select the ideal logo for my
                company. It was enjoyable and simple to add phrases to the
                picture as well. My company now appears more credible and
                professional thanks to Brandermine! I'll surely return."
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l2.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a2.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Angella Abraham</p>
              <p className="testo-caption mb-2">Photograper</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "I would suggest this program to every freelancer, new business
                because it's generally excellent. You can use Brandermine if
                your internet connection is strong and reliable because the
                logos are made more quickly, saving you time."
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l3.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a3.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Rangga Anjani</p>
              <p className="testo-caption mb-2">Photograper</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "I tried several other Logo generating platforms. Just waste of
                time and money. Customer supports were terrible. That is when my
                friend suggested Brandermine. I am really impressed with the
                service they offer. My requirements were constantly checked by
                the designer and I was really happy with the design. Many
                personally contacted me to say my logo was outstanding. Thank
                You Brandermine. Recommending to everyone."
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l1.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a1.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Regina Angeline</p>
              <p className="testo-caption mb-2">Housewife</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "I was quite impressed with the AI generated logo. Couldn't lie
                tbh. I was really impressed with the options to select. ."
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l2.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a2.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Angella Abraham</p>
              <p className="testo-caption mb-2">Photograper</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "Really fast in responding guys. and the designer I had she was
                really experienced and creative for sure."
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l3.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a3.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Rangga Anjani</p>
              <p className="testo-caption mb-2">Photograper</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "Saved alot of time for me. Thank You brandermine. The interface
                is very easy to use and actually leant a lot. thanks again."
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l2.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a1.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Kajol Agrawal</p>
              <p className="testo-caption mb-2">Photograper</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "I can tell the design was amazing. Brandermine was in touch
                with me the entire time and gave a design better than I
                expected. Thank You Brandrmine"
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l1.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a3.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">John Doe</p>
              <p className="testo-caption mb-2">Web Designer</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "We loved its actually mobile phone accessible. We travel most
                the time and we wanted to find a logo for our online business.
                The interface was SUPER EASY to use!!! Amazing design for such a
                pricing"
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="rounded-lg flex flex-col justify-center items-center border-[#ffffff] border">
            <div className="w-full">
              <img src="/images/cus/l3.png" className="w-full" />
            </div>

            <div className="p-4 text-center flex flex-col justify-center items-center border-[#CCCCCC] border-x border-b">
              <div className="text-center">
                <img src="/images/cus/a3.png" className="w-16 mt-[-50px]" />
              </div>

              <p className="testo-name mb-1">Arijith Singh</p>
              <p className="testo-caption mb-2">Singer</p>

              <div className="text-center">
                <img src="/images/cus/stars.png" className="w-28" />
              </div>

              <div className="testo-comment mt-4">
                "Created my first logo with AI generated. Once the company
                started getting big I came to Brandermine again for the full
                Branding Kit. The designers are very knowledgeable, professional
                and super sportive. So Happy I choosed Brandermine for my
                support"
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testomonials;
