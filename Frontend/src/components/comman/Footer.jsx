// Footer.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    // Set initial states
    gsap.set(footer.querySelectorAll(".footer-item"), { opacity: 0, y: 40 });
    gsap.set(footer.querySelectorAll(".social-icon"), { scale: 1, y: 0 });

    // Scroll-triggered animation for all footer items
    gsap.to(footer.querySelectorAll(".footer-item"), {
      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });

    // Social icon hover animation
    footer.querySelectorAll(".social-icon").forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { y: -6, scale: 1.15, rotation: 10, duration: 0.3, ease: "power1.out" });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { y: 0, scale: 1, rotation: 0, duration: 0.3, ease: "power1.out" });
      });
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-gray-200 py-10 px-6 md:px-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3 footer-item">
          <img
            src="/bvimge.jpeg"
            alt="Bharatiya Virasat Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-bold">Bharatiya Virasat</h1>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 footer-item">
          <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="/festival" className="hover:text-amber-400 transition-colors">Festival</a>
          <a href="/heritage" className="hover:text-amber-400 transition-colors">Heritage</a>
          <a href="/about" className="hover:text-amber-400 transition-colors">About Us</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 footer-item">
          <a className="social-icon fill-current text-gray-200 hover:text-amber-400 transition-colors" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a className="social-icon fill-current text-gray-200 hover:text-amber-400 transition-colors" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a className="social-icon fill-current text-gray-200 hover:text-amber-400 transition-colors" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-gray-400 text-sm footer-item">
        &copy; {new Date().getFullYear()} Bharatiya Virasat. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
