import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline();
    gsap.from("nav", {
      y: -50,
      opacity: 0,
      duration: 1,
    });
    tl.from("#main", {
      y: -10,
      opacity: 0,
      duration: 0.8,
    });
    tl.from("a", {
      opacity: 0,
      y: -10,
      duration: 0.6,
      stagger: 0.2,
    });
  });

  return (
    <>
      <nav className="flex bg-black text-white items-center justify-between px-6 py-4 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-blue-600 transition-colors">
          Bharatiya Virasat
        </div>

        {/* Desktop Menu */}
        <div
          id="main"
          className="hidden md:flex space-x-6 text-lg font-medium"
        >
          <a
            className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
            href="/festival"
          >
            Festival
          </a>
          <a
            className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
            href="/mainheritage"
          >
            Heritage
          </a>
          <a className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
          href="/about">
            About
          </a>
        </div>

 
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-6 text-lg font-medium shadow-lg">
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition-colors"
            href="/"
          >
            Home
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition-colors"
            href="/festival"
          >
            Festival
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition-colors"
            href="/heritage"
          >
            Heritage
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition-colors"
          >
            About
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
