import React from "react";
import Festivalvideo from "./FestivalPhoto/Festivalvideo.mp4";
import FestivalList from "./FestivalList";

function Festival() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* First Slide - Video */}
      <div className="w-full">
        <video
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Festivalvideo} type="video/mp4" />
        </video>
      </div>

      {/* Second Slide - Title + Festival List */}
      <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10 text-center">
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-6">
          Our Festivals in India
        </h1>

        <div>
          <div>
            <FestivalList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Festival;
