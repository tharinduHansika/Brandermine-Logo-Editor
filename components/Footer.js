import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-12 gap-8 ">
      <div className="col-span-12 md:col-span-3 ">
        <div className="text-center md:text-left">
          <p className="footer-title mb-8">Products</p>
          <Link href="/generate">
            <p className="footer-content mb-2 cursor-pointer">Logo Maker</p>
          </Link>
          <Link href="/premium">
            <p className="footer-content mb-2 cursor-pointer">Custom Logo</p>
          </Link>
          <p className="footer-content mb-2">Web Development</p>
          <Link href="/brandingKit">
            <p className="footer-content mb-2 cursor-pointer">Brand Kit</p>
          </Link>
        </div>
      </div>

      <div className="col-span-12 md:col-span-3">
        <div className="text-center md:text-left">
          <p className="footer-title mb-8">Resources</p>
          <p className="footer-content mb-2">Blog</p>
          <p className="footer-content mb-2">Logo Ideas</p>
          <p className="footer-content mb-2">Top Logo Reviews</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-3">
        <div className="text-center md:text-left">
          <p className="footer-title mb-8">Company</p>
          <Link href="/aboutUs">
            <p className="footer-content mb-2 cursor-pointer">About</p>
          </Link>
          <Link href="/reviews">
            <p className="footer-content mb-2 cursor-pointer">Reviews</p>
          </Link>
          <Link href="/pricing">
            <p className="footer-content mb-2 cursor-pointer">Pricing</p>
          </Link>
        </div>
      </div>

      <div className="col-span-12 md:col-span-3">
        <div className="text-center md:text-left">
          <p className="footer-title mb-8">Support</p>
          <Link href="/helpCenter">
            <p className="footer-content mb-2 cursor-pointer">Help Center</p>
          </Link>
          <Link href="/contactUs">
            <p className="footer-content mb-2 cursor-pointer">Contact Us</p>
          </Link>
          <p className="footer-content mb-2">Support@brandermine.com</p>
          <p className="footer-content mb-2">+1-228-213-3727</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
