// Footer.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fortawesome/fontawesome-free/css/all.min.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // useEffect(() => {
  //   gsap.from("#main-footer", {
  //     scrollTrigger: {
  //       trigger: "#main-footer",
  //       start: "top 80%", // start animation when footer enters viewport
  //       toggleActions: "play none none none",
  //     },
  //     duration: 1.5,
  //     y: 100,
  //     opacity: 1,
  //     ease: "power3.out",
  //   });

    
  //   gsap.from("#main-footer a", {
  //     scrollTrigger: {
  //       trigger: "#main-footer",
  //       start: "top 30%",
  //     },
  //     stagger: 0.15,
  //     opacity: 1,
  //     y: 20,
  //     duration: 1,
  //     ease: "back.out(1.7)",
  //   });
  // }, []);

  return (
    <footer
      id="main-footer"
      className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 py-16 px-8 lg:px-16 shadow-2xl"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* App Title & Description */}
        <div className="space-y-4">
          <h3 className="text-4xl font-bold text-white">Bharatiya Virasat</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Celebrating the vibrant and timeless heritage of India. Explore
            traditions, festivals, and stories that define our culture.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="space-y-2">
            <li><a href="#">Monuments</a></li>
            <li><a href="#">Festivals</a></li>
            <li><a href="#">Arts & Crafts</a></li>
            <li><a href="#">Cuisine</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold uppercase tracking-wider text-white">
            Support
          </h4>
          <ul className="space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; 2024 Indian Culture & Heritage. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
