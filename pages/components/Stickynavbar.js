// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../public/images/logo1.png";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { CiUser } from "react-icons/ci";

export const menuData = [
  { title: "About", link: "/about" },
  { title: "Products", link: "/products" },
  { title: "Our Team", link: "/team" },
];
const StickyNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };
  const handleScroll = () => {
    var currentScrollPos = window.scrollY;

    // Check if scrolling down
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 5);

    setPrevScrollPos(currentScrollPos);
    return currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header className="mb-1">
      {" "}
      <nav
        className={`fixed top-0 h-24 left-0 right-0 p-4 bg-gray-900 backdrop-blur-[1px] backdrop-opacity-0 text-white transition duration-700 
        ease-in-out ${
          visible
            ? "z-10 bg-gray-900 backdrop-blur-[1px] backdrop-opacity-0 transform translate-y-0"
            : "opacity-0 -z-50 transform -translate-y-full"
        } border-b-4 border-yellow-600`}
      >
        <div className="flex items-center justify-between  text-sm">
          <div className="h-20 w-24 space-x-4 items-center">
            <Link href="#">
              {" "}
              <Image
                src={logo}
                alt="Logo"
                height={100}
                width={80}
                className="pl-2"
                placeholder="blur"
              />
            </Link>
          </div>
          <>
            <form
              onSubmit={submitHandler}
              className="mx-auto  hidden  justify-center md:flex "
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none text-gray-900 font-mono border-blue-400 border-1 w-60 rounded-br-none p-1 text-sm focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none hover:bg-yellow-600 bg-green-600 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
            <div className="text-white flex cursor-pointer items-center font-semibold justify-center">
              {menuData.map((item) => (
                <Link key={item.link} href={item.link}>
                  <div className="flex items-center py-0 px-4 h-full font-semibold justify-center uppercase transition duration-400 ease-in-out hover:text-green-400">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </>
          <div
            className="flex  w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
        justify-center uppercase text-white border-2 border-green-600  bg-green-600 transition duration-100  rounded-lg text-[10px]
        ease-in-out hover:bg-white hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:rounded-sm "
          >
            <Link href="#">Login/Register</Link>
          </div>
          <div className=" cursor-pointer text-white hover:text-yellow-600 text-4xl mx-8 font-extrabold">
            <CiUser />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default StickyNavbar;
