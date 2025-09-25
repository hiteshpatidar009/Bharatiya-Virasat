import React, { useEffect, useState } from "react";
import img1 from "./MainsectionImage/namaste.mov";
import img2 from "./MainsectionImage/mainpageslider2.mp4";
import img3 from "./MainsectionImage/mainpageslide3.mp4";

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % 3) + 1);
    }, 10000); // Auto-play every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev % 3) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden bg-black min-h-[50vh] sm:min-h-[70vh] md:min-h-[90vh]">
      {/* Slide 1 */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
          currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <video
          className="w-full h-full object-contain md:object-cover"
          autoPlay
          loop
          muted
        >
          <source src={img1} type="video/mp4" />
        </video>
        {/* <div className="hidden md:flex absolute inset-0 justify-center items-center text-center px-10">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">
              Connecting Farmers to Big Markets – Maximize Your Profits!
            </h2>
            <p className="text-lg">
              Join a network of farmers working together to sell produce directly to big mandis.
            </p>
          </div>
        </div> */}
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
          currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <video
          className="w-full h-full object-contain md:object-cover"
          autoPlay
          loop
          muted
        >
          <source src={img2} type="video/mp4" />
        </video>
        {/* <div className="hidden md:flex absolute inset-y-0 left-0 w-80 ml-10 flex justify-center items-center text-white text-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Empowering Farmers, Connecting Markets – Sell Smarter, Earn Bigger!
            </h2>
          </div>
        </div> */}
      </div>

      {/* Slide 3 */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
          currentSlide === 3 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <video
          className="w-full h-full object-contain md:object-cover"
          autoPlay
          loop
          muted
        >
          <source src={img3} type="video/mp4" />
        </video>
        {/* <div className="hidden md:flex absolute top-0 right-0 size-100 mr-30 mt-20 flex justify-center items-center text-white text-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Collect, Transport, Sell – The Future of Farming Starts Here!
            </h2>
            <p className="text-lg">
              Bridging the gap between farmers and big mandis. Join hands, sell smart, and grow together!
            </p>
          </div>
        </div> */}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-2 rounded-full z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-2 rounded-full z-20"
      >
        ❯
      </button>
    </div>
  );
};

export default VideoCarousel;
