import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative w-full">
      {/* Banner Images */}
      <img
        src={assets.main_banner_bg}
        alt="Main Banner"
        className="w-full hidden md:block object-cover"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="Main Banner Mobile"
        className="w-full md:hidden object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-16 lg:px-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        {/* Tagline */}
        <p className="text-sm md:text-base font-semibold text-white mb-2 tracking-wider uppercase">
          New Collections Out Now
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left leading-tight text-white max-w-[700px]">
          Discover The Best Deals & Latest Trends
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-300 text-center md:text-left mt-4 max-w-[600px]">
          Shop smart, save big. Explore exclusive offers on all your favorite products. Limited time only!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          {/* Shop Now Button */}
          <Link
            to="/products"
            className="group flex items-center gap-2 px-6 md:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-full text-white font-semibold"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="hidden md:block w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>

          {/* Explore Deals Button */}
          <Link
            to="/products"
            className="group flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-gray-800 hover:bg-gray-100 transition-all rounded-full font-semibold"
          >
            Explore Deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow"
              className="w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
