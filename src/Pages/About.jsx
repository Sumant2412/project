import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">About Us</h1>

      {/* First Row with Two Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        {/* Who We Are */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-center">
            We are a passionate team dedicated to delivering fresh and high-quality groceries directly to your doorstep. Our goal is to make your shopping experience seamless and convenient.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-center">
            Our mission is to provide top-quality groceries at affordable prices with quick delivery and exceptional customer service. We aim to make grocery shopping easier and more accessible for everyone.
          </p>
        </div>
      </div>

      {/* Second Row - Join Us on Our Journey with Start Shopping Button */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-10">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Join Us on Our Journey</h2>
        <p className="text-gray-600 text-center mb-6">
          We are growing rapidly and looking for passionate individuals to join our team. Whether you want to work with us or collaborate as a seller, we would love to have you as part of our journey!
        </p>
        
        {/* Start Shopping Button */}
        <div className="text-center">
          <a
            href="/shop"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
