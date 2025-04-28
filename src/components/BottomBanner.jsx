import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const BottomBanner = () => {
  return (
    <div
      className="relative mt-20 w-full min-h-[500px] bg-cover bg-center flex items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url(${assets.bottom_banner_image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 ml-auto flex flex-col items-start text-white text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-md">
          Get Ready for the Season's Best Offers
        </h2>

        <div className="flex items-center mt-8">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-6 md:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all font-semibold"
          >
            Browse Offers
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="hidden md:block w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
