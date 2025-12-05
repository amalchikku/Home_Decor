import React, { useEffect, useState } from "react";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.png";

const NavBar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return()=>{
        document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src="{assets}" alt="" />
        <ul className="hidden md:flex gap-7 text-white font-light ">
          <a href="#Header" className="cursor-pointer hover:text-grey-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-grey-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-grey-400">
            Projects
          </a>
          <a href="#Testimoniails" className="cursor-pointer hover:text-grey-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2  hover:bg-gray-600 rounded-full">
          Sign Up
        </button>
        <img
          onClick={() => setshowMobileMenu(true)}
          src={MenuIcon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>
      {/* ---------------------mobile menu----------------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 left-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={CloseIcon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block">
            About
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block">
            Project
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block">
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
