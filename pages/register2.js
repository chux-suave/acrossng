import React from "react";
import Layout from "./components/Layout";

const register2 = () => {
  return (
    <Layout>
      <form className="max-w-md mx-auto p-6 bg-black bg-opacity-70 rounded-md">
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

        <button
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          type="submit"
        >
          Register
        </button>
      </form>
    </Layout>
  );
};

export default register2;
