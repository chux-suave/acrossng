import React, { useState, useEffect } from "react";

function NewsletterPopup() {
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayPopup(true);
    }, 7000); // 7 seconds delay

    return () => clearTimeout(timeoutId); // Clear timeout on unmount
  }, []);

  const handleClose = () => {
    setDisplayPopup(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 ${
        !displayPopup && "hidden"
      }`}
    >
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none ml-auto"
          >
            &times;
          </button>
        </div>
        <form className="mt-4 flex flex-col">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterPopup;
