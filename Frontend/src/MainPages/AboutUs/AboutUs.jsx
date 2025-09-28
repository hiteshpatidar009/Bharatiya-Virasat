// AboutUs.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.from(".hero-text", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    });
    gsap.from(valuesRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 1,
    });
    if (galleryRef.current) {
      gsap.from(galleryRef.current.children, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const addToValuesRef = (el) => {
    if (el && !valuesRef.current.includes(el)) {
      valuesRef.current.push(el);
    }
  };

  const galleryCards = [
    { title: "Festival of Colors" },
    { title: "Royal Monuments" },
    { title: "Traditional Arts" },
    { title: "Cuisine & Flavors" },
  ];

  return (


    <div className="font-sans bg-gray-900 text-gray-200 min-h-screen">

 <Helmet>
        <title>About Us - Bharatiya Virasat</title>
        <meta 
          name="description" 
          content="Learn more about Bharatiya Virasat, a project that showcases Indian heritage and traditions." 
        />
      </Helmet>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative text-center py-24 sm:py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      >
        <div className="relative hero-text space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400">
            About Us
          </h1>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300">
            Inspired by India's rich heritage, diversity, and unity, we create solutions blending tradition with modern innovation.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-5">Who We Are</h2>
        <p className="text-gray-300 mb-12 text-md sm:text-lg md:text-xl lg:text-lg">
          We are a team driven by the values of Indian culture — respect, innovation, unity, and service. From ancient traditions to modern India, we bring authenticity and creativity into everything we do.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div
            ref={addToValuesRef}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full sm:w-80 md:w-64 lg:w-72 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-amber-400 text-xl font-semibold mb-2">🌸 Tradition</h3>
            <p className="text-gray-300">We embrace the beauty of India’s timeless values and culture.</p>
          </div>
          <div
            ref={addToValuesRef}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full sm:w-80 md:w-64 lg:w-72 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-amber-400 text-xl font-semibold mb-2">🤝 Unity</h3>
            <p className="text-gray-300">Like India’s diversity, we believe strength comes from togetherness.</p>
          </div>
          <div
            ref={addToValuesRef}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full sm:w-80 md:w-64 lg:w-72 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-amber-400 text-xl font-semibold mb-2">💡 Innovation</h3>
            <p className="text-gray-300">We combine heritage with modern thinking to create lasting impact.</p>
          </div>
        </div>
      </section>

      {/* Gallery / Highlights Section */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-10">Our Highlights</h2>
        <div
          ref={galleryRef}
          className="flex flex-wrap justify-center gap-6"
        >
          {galleryCards.map((card, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl p-6 sm:p-8 w-full sm:w-80 md:w-64 lg:w-72 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <h3 className="text-amber-400 text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-300">
                Explore the essence of India through this collection celebrating its diversity and culture.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
