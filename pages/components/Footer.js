import React from "react";
import { FaBeer } from "react-icons/fa";

export const Products = [
  {
    name: " GIVE AWAY QUIZZES",
  },
  { name: "SKITS ACROSS NIGERIA" },
  { name: "KING & QUEEN ACROSS NIGERIA" },
  { name: "MYSTERY BOXES" },
  { name: "STATE TREASURE HUNT SHOW" },
  { name: "MEGA CASH OUT" },
  { name: "ACROSS NIGERIA REALITY SHOW" },
  { name: "NAIJA VIBES" },
];
function Footer() {
  return (
    <footer className="w-screen overflow-hidden bg-gray-900 backdrop-blur-sm backdrop-opacity-20 text-white px-6 py-12">
      <div className=" overflow-hidden mx-0 grid grid-cols-4 gap-8">
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4 block">
            <span className="text-yellow-300 cursor-pointer hover:text-green-400">
              About us
            </span>
          </h3>
          <p className="text-sm">
            We offer a variety of giveaways, game show and reality shows that
            cater to different tastes and interests. Whether you want to win
            amazing prizes, test your skills and knowledge about Nigeria, or
            watch captivating stories unfold, we have something to entertain and
            put a smile on everyone’s face. Our website is easy to use, secure,
            and mobile-friendly. You can access our content anytime, anywhere,
            on any device.
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="text-sm">
            {Products.map((activities) => (
              <li className="mb-2" key={activities.name}>
                <a href="#" className="hover:underline">
                  {activities.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contact info</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <span className="mr-2">📧</span>
              <a
                href="mailto:info@acrossnigeria.com"
                className="hover:underline"
              >
                info@acrossnigeria.com
              </a>
            </li>
            <li className="mb-2">
              <span className="mr-2">📞</span>
              <a href="tel:+234123456789" className="hover:underline">
                +234 123 456 789
              </a>
            </li>
            <li className="mb-2">
              <span className="mr-2">📍</span>
              <span>Abuja, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-5">
        <h3 className="text-lg font-semibold mb-4">Follow us</h3>
        <ul className="text-sm flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              <FaBeer />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
