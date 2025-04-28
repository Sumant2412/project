import React, { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "register" && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle login or registration logic
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border w-[90%] max-w-2xl animate-scaleIn"
      >
        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          type="button"
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold transition"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          <span className="text-indigo-500">User</span> {state === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        {state === "login" ? (
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
              />
            </div>
          </div>
        ) : (
          // Registration Form
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="1234567890"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Alternate Mobile (optional)</label>
                <input
                  type="tel"
                  placeholder="Optional"
                  value={alternateMobile}
                  onChange={(e) => setAlternateMobile(e.target.value)}
                  className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition"
                />
              </div>
            </div>

            {/* Address Full Width */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm text-gray-600">Address</label>
              <textarea
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows={2}
                className="border border-gray-300 rounded-md w-full p-3 mt-1 focus:outline-indigo-500 transition resize-none"
              />
            </div>
          </div>
        )}

        {/* Switch Login/Register */}
        <div className="text-center text-sm mt-6">
          {state === "register" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-indigo-500 font-semibold cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-indigo-500 font-semibold cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-3 rounded-md font-semibold mt-4"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>

      {/* Animation */}
      <style>
        {`
          .animate-scaleIn {
            animation: scaleIn 0.3s ease forwards;
          }
          @keyframes scaleIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
