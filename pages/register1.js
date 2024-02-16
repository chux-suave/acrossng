import React, { useState } from "react";
import Layout from "./components/Layout";

const Register1 = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (repeatPassword && event.target.value !== repeatPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    if (password && event.target.value !== password) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional form submission logic can be added here
  };

  return (
    <Layout>
      <form
        className="max-w-xl mx-auto p-6 bg-black bg-opacity-70 rounded-md "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="surname"
          >
            Surname
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="surname"
            name="surname"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="tel"
            id="phone"
            name="phone"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="state"
          >
            State of Residence
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="state"
            name="state"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="repeatPassword"
          >
            Repeat Password
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
              type={repeatPasswordVisible ? "text" : "password"}
              id="repeatPassword"
              name="repeatPassword"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              required
            />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer focus:outline-none"
              onClick={toggleRepeatPasswordVisibility}
            >
              {repeatPasswordVisible ? "🙈" : "👁️"}
            </button>
          </div>
          {passwordMatchError && (
            <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>
          )}
        </div>

        {/* ... other form fields ... */}

        <button
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          type="submit"
          disabled={passwordMatchError !== ""}
        >
          Register
        </button>
      </form>
    </Layout>
  );
};

export default Register1;
