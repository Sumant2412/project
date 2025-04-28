import React from "react";
import { Link } from "react-router-dom"; // 🛠️ Add this import
import logo from "../assets/logo.svg"; // Adjust if needed

const Navbar = ({ setShowLogin }) => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Links and Login */}
      <div className="flex items-center space-x-12">
        <ul className="flex space-x-12 text-gray-700 font-medium text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-600 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-cyan-600 transition-all duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-600 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-600 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <button
          onClick={() => setShowLogin(true)}
          className="ml-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;