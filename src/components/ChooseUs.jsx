import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="mt-20 px-4 md:px-16 py-16 bg-gradient-to-r from-green-100 to-gray-100">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>

      {/* First Row: Quality Product, Fast Delivery, Excellent Customer Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Quality Products */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Quality Products</h3>
          <p className="text-gray-600">We source the best quality groceries to ensure freshness and satisfaction with every purchase.</p>
        </div>

        {/* Fast Delivery */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Fast Delivery</h3>
          <p className="text-gray-600">Enjoy same-day delivery or fast shipping options to get your groceries when you need them most.</p>
        </div>

        {/* Excellent Customer Service */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Excellent Customer Service</h3>
          <p className="text-gray-600">Our dedicated customer support team is always ready to assist you with any questions or concerns.</p>
        </div>
      </div>

      {/* Second Row: Exclusive Deals and What Our Customers Say */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
        {/* Exclusive Deals */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Exclusive Deals</h3>
          <p className="text-gray-600">Get access to weekly deals, discounts, and promotions available only to our customers.</p>
        </div>

        {/* Customer Testimonials */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">What Our Customers Say</h3>
          <p className="text-gray-600">"The best grocery shopping experience! Fast delivery and fresh products every time!"</p>
        </div>
      </div>

      {/* Third Row: Join Us Today */}
      <div className="flex flex-col items-center text-center p-10 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Join Us Today!</h3>
        <p className="text-gray-600 mb-6">Start shopping for the best grocery deals, fast delivery, and top-quality products. We're here to make your life easier!</p>
        <a href="/shop" className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition duration-300">
            Shop Now
        </a>
      </div>
    </div>
  );
};

export default WhyChooseUs;
