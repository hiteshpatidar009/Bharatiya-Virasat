import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ashok from "./MainsectionImage/996.jpg";

import air from "./MainsectionImage/air.jpeg";
import air2 from "./MainsectionImage/air2.jpeg";

import ImgDiw from "./MainsectionImage/imgDiw.jpeg";
import holi from "./MainsectionImage/holi.jpeg";
import Lohri from "./MainsectionImage/lohri.jpeg";

import Ford from "./MainsectionImage/ford.jpeg";
import Kaziranga from "./MainsectionImage/Kaziranga.jpeg";
import suntem from "./MainsectionImage/suntem.jpeg";

function Hero() {
  const navigate = useNavigate();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(function () {
    let tl = gsap.timeline();
    tl.from(".son", {
      rotate: 720,
      scrollTrigger: {
        trigger: ".son",
        start: "top 50%",
        scrub: 2,
      },
    });
    gsap.from(".sonleft", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".sonleft",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5,
      },
    });

    gsap.from(".sonright", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".sonright",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5,
      },
    });

   
gsap.from("#holi-section img, #holi-section h1, #holi-section p", {
  y: 50,
  opacity: 0,
  stagger: 0.2, 
  scrollTrigger: {
    trigger: "#holi-section",
    start: "top 80%", 
    end: "bottom 20%",
    scrub: 1.5,
  },
});

// Lohri section animation
gsap.from("#lohri-section h2, #lohri-section p, #lohri-section img", {
  x: -50, 
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#lohri-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1.5,
  },
});


gsap.from("#diwali-section img, #diwali-section h2, #diwali-section p", {
  x: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#diwali-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1.5,
  },
});

  });

  return (
    <>
      <div className="overflow-hidden bg-black text-white">
        <div className="h-auto w-full mt-16 px-4 sm:px-8">
          
          <h1 className="text-5xl sm:text-8xl text-center font-bold">
            Festival
          </h1>

          {/* Holi */}

          <div
            id="holi-section"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[10vh] items-center"
          >
            {/* The whole Holi section, with a new ID for the trigger */}
            <div className="h-[200px] sm:h-[300px] w-full">
              <img
                id="holi-img"
                className="object-cover h-full w-full rounded-full"
                src={holi}
             
              />
            </div>
            <div id="holi-text" className="h-auto w-full">
              <h1 className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                🌈 Holi
              </h1>

              <p className="text-sm sm:text-base mt-2 max-w-full sm:max-w-2xl bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent font-medium">
                Holi is the festival of colors celebrated in the spring season
                across India. It marks the victory of good over evil, as it is
                linked to the story of Prahlad and Holika. People celebrate by
                lighting the Holika Dahan bonfire the night before, which
                symbolizes burning away negativity. On the next day, everyone
                plays with colors, water, music, and dance, spreading joy and
                togetherness. Families prepare sweets like gujiya and share
                festive food with relatives and friends. Holi is a festival of
                love, unity, and happiness that brings people closer.
              </p>
            </div>
          </div>

          {/* Lohri */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[10vh] items-center"> */}
          <div id="lohri-section" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[10vh] items-center">
  

            <div className="h-auto w-full">
              <h2 className="text-3xl sm:text-6xl font-bold text-orange-500 drop-shadow-[0_0_15px_rgba(255,100,0,0.9)]">
                🔥 Lohri
              </h2>
              <p className="mt-2 text-sm sm:text-base max-w-full sm:max-w-2xl bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 bg-clip-text text-transparent font-medium">
                Lohri is a popular Punjabi festival celebrated in North India,
                especially in Punjab and Haryana, to mark the end of winter and
                the arrival of longer days. It is connected with the harvest of
                crops, especially sugarcane and wheat. People gather around a
                bonfire in the evening, offer sesame seeds, jaggery, and popcorn
                to the fire, and pray for prosperity. The festival is filled
                with folk songs, bhangra, and gidda dances, creating joy and
                energy. Families also celebrate the birth of a child or the
                first Lohri of a newly married couple with great enthusiasm.
                Lohri thus symbolizes gratitude, prosperity, and togetherness.
              </p>
            </div>
            <div className="h-[200px] sm:h-[300px] w-full rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-full"
                src={Lohri}
                alt=""
              />
            </div>
          </div>

          {/* Diwali */}
<div id="diwali-section" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[10vh] items-center">
            <div className="h-[200px] sm:h-[300px] w-full rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-full"
                src={ImgDiw}
                alt=""
              />
            </div>
            <div className="h-auto w-full">
              <h2 className="text-3xl sm:text-6xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]">
                🪔 Diwali
              </h2>
              <p className="mt-2 text-sm sm:text-base max-w-full sm:max-w-2xl bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
                Diwali, also called Deepavali, is the festival of lights that
                celebrates the victory of good over evil and light over
                darkness. It is celebrated for different reasons across India,
                such as Lord Rama’s return to Ayodhya, Lord Krishna’s victory
                over Narakasura, and as Bandi Chhor Divas by Sikhs. People clean
                and decorate their homes with rangoli and diyas, perform
                Lakshmi-Ganesha puja, wear new clothes, and enjoy sweets and
                gifts with family and friends. Diyas, candles, and fireworks
                light up the surroundings, spreading joy and positivity. Diwali
                also marks the new financial year for many businesses. Overall,
                it is a festival of happiness, prosperity, and togetherness.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/festival");
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to top
            }}
            className="relative w-full m-5 px-8 py-4 font-bold text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg
             hover:scale-105 hover:animate-pulse transition-transform duration-300
             before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-pink-300 before:via-red-300 before:to-yellow-300
             before:opacity-0 hover:before:opacity-50 before:blur-xl before:transition-opacity"
          >
            More Festival
          </button>
        </div>

        {/* Animated Section */}
        <div className="h-auto w-full par mt-[10vh] px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 midpar">
            <div className="h-[150px] sm:h-[200px] w-full md:w-full sonleft overflow-hidden rounded-full">
              <img className="h-full w-full sonleft rounded-full" src={air} />
            </div>
            <img
              className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] rounded-full son mx-auto md:mx-0"
              src={ashok}
            />
            <div className="h-[150px] sm:h-[200px] w-full md:w-full sonright overflow-hidden rounded-full">
              <img className="h-full w-full sonright rounded-full" src={air2} />
            </div>
          </div>
        </div>

        {/* World Heritage */}
        <div className="h-auto w-full mt-[10vh] px-4 sm:px-8">
          <h1 className="text-white text-4xl sm:text-6xl text-center font-bold drop-shadow-lg mb-[22px]">
            Heritage Sites in India
          </h1>

          {[Ford, Kaziranga, suntem].map((imgSrc, idx) => (
            <div
              key={idx}
              className="h-[50vh] sm:h-[70vh] w-full relative mt-[5vh]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={imgSrc}
              />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-10 bg-gradient-to-t from-black/70 to-transparent">
                <h1 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
                  {idx === 0
                    ? "Jaisalmer Fort"
                    : idx === 1
                    ? "Kaziranga National Park"
                    : "Sun Temple"}
                </h1>
                <p className="text-white mt-2 text-sm sm:text-base drop-shadow-md">
                  {idx === 0
                    ? "Jaisalmer Fort, also known as Sonar Quila (Golden Fort), is one of the largest forts in the world..."
                    : idx === 1
                    ? "Kaziranga National Park, located in Assam’s Golaghat, Nagaon, Sonitpur, and Biswanath districts..."
                    : "The Sun Temple at Konark, Odisha, built in 1250 by King Narasimha I of the Eastern Ganga dynasty..."}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              navigate("/heritage");
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to top
            }}
            className="relative w-full m-5 px-8 py-4 font-bold text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg
             hover:scale-105 hover:animate-pulse transition-transform duration-300
             before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-pink-300 before:via-red-300 before:to-yellow-300
             before:opacity-0 hover:before:opacity-50 before:blur-xl before:transition-opacity"
          >
            More Heritage
          </button>
        </div>

        <h1 className="text-center text-5xl sm:text-8xl my-[20px]">Scripted</h1>
      </div>
    </>
  );
}

export default Hero;
