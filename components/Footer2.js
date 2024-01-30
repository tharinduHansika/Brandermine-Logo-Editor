import React from "react";

const Footer2 = () => {
  return (
    <div className="grid grid-cols-12 gap-8 border-t-2 pt-6">
      <div className="col-span-12 md:col-span-6 ">
        <div className="footer2-txt ">
          <p className="text-center md:text-left">
            © 2022 Brandermine |<a href="">Privacy</a> |<a href="">Terms</a> |
            <a href="">Site Map</a>
          </p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-row justify-center md:justify-end">
        <a href="https://www.pinterest.com/brandermine"><img src="/images/dribbble.png" className="mr-6 w-6 object-contain" /></a>
        <a href="https://www.instagram.com/brandermine"><img src="/images/instagram.png" className="mr-6 w-6 object-contain" /></a>
        <a href="https://www.twitter.com/brandermine"><img src="/images/twitter.png" className="mr-6 w-6 object-contain" /></a>
        <a href="https://www.facebook.com/brandermine.design"><img src="/images/facebook.png" className="mr-6 w-6 object-contain" /></a>
      </div>
    </div>
  );
};

export default Footer2;
