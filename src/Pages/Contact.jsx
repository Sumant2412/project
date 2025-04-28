import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-16 relative">
      {/* Hero Section */}
      <div className="text-center text-gray-800 mb-10 relative z-10">
        <h1 className="text-5xl font-bold">Get in Touch with Us</h1>
        <p className="text-lg mt-4">
          We're here to help you. Fill out the form below, and we'll get back to you as soon as possible!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-300 relative z-10">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6 flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500 transition">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
              className="border-0 outline-none w-full p-3 mt-2 focus:ring-0"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6 flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500 transition">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="border-0 outline-none w-full p-3 mt-2 focus:ring-0"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6 flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500 transition">
            <FaPhoneAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              id="Moblie Number"
              name="Mobile Number"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Mobile Number"
              className="border-0 outline-none w-full p-3 mt-2 focus:ring-0"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Write your message here..."
              className="border-2 border-gray-300 rounded-lg w-full p-3 mt-2 focus:ring-indigo-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition duration-300 flex items-center justify-center mx-auto"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16 text-gray-800">
        <p>Need assistance? Call us at +1 (800) 123-4567 or email us at support@example.com</p>
      </div>

      {/* Background Overlay (Removed) */}
    </div>
  );
};

export default Contact;
