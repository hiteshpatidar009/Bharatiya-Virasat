import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ashok from "./herophoto/996.jpg";
// Festival
import air from "./herophoto/air.jpeg";
import air2 from "./herophoto/air2.jpeg";

import ImgDiw from "./herophoto/imgDiw.jpeg";
import holi from "./herophoto/holi.jpeg";
import Lohri from "./herophoto/lohri.jpeg";
//  world heritage
import Ford from "./herophoto/ford.jpeg";
import Kaziranga from "./herophoto/Kaziranga.jpeg";
import suntem from "./herophoto/suntem.jpeg";

function Hero() {
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
  });

  return (
    <>
      <div className=" overflow-hidden bg-black text-white">
        <div className="h-[150vh] w-full ">
          <h1 className="text-8xl  text-center ">Festival</h1>

          <div className="grid grid-cols-2 gap-4 mt-[10vh]">
            <div className=" ml-[30px]  h-[300px] ">
              <img
                className="object-cover h-full w-full rounded-full"
                src={holi}
                alt=""
              />
            </div>
            <div className="   h-[300px] w-[600px] ml-[6vh] ">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                🌈 Holi
              </h1>

              <p class=" text-s max-w-2xl mx-auto bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent font-medium">
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

          <div className="grid grid-cols-2 gap-4 mt-[10vh]">
            <div className="   h-[300px] w-[600px] ml-[6vh] ">
              <h2 class="text-6xl font-bold text-orange-500 drop-shadow-[0_0_15px_rgba(255,100,0,0.9)]">
                🔥 Lohri
              </h2>

              <p class="mt-4 text-s max-w-2xl mx-auto bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 bg-clip-text text-transparent font-medium">
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

            <div className=" ml-[30px] bg-blue-200 h-[300px]  rounded-full ">
              <div className="   h-[300px]   ">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={Lohri}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-[10vh]">
            <div className=" ml-[30px] bg-blue-200 h-[300px]  rounded-full ">
              <div className="  h-[300px]   ">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={ImgDiw}
                  alt=""
                />
              </div>
            </div>
            <div className="   h-[300px] w-[600px] ml-[6vh] ">
              <h2 class="text-6xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]">
                🪔 Diwali
              </h2>
              <p class="mt-4 text-s max-w-2xl mx-auto bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
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
        </div>
        <div className="  h-[40vh]  w-full   par">
          <div className="   mt-[200px] flex justify-center items-center midpar ">
            <div className=" bg-[#FF671F] h-[200px] w-full sonleft rounded-full">
              <img className="h-[200px] w-full sonleft rounded-full" src={air} alt="" />
            </div>
            <img
              className="  h-[200px] w-[200px] rounded-full son"
              src={ashok}
            />
            <div className=" bg-[#046A38] rounded-full h-[200px] w-full sonright">
            <img className="h-[200px] w-full sonright rounded-full" src={air2} alt="" />
            </div>
          </div>
        </div>

        {/* world heritage */}
        <div className="h-[250vh] w-full">
          <h1 className="text-white text-6xl text-center font-bold drop-shadow-lg mb-[22px]">
            Heritage Sites in India
          </h1>
          {/* img1 */}
          <div className="h-[70vh] w-full relative">
            <img
              className="h-full w-full object-cover absolute inset-0 z-0"
              src={Ford}
              alt="Background"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-black/70 to-transparent">
              <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                Jaisalmer Fort
              </h1>
              <p className="text-white mt-2 max-w-2xl drop-shadow-md">
                Jaisalmer Fort, also known as Sonar Quila (Golden Fort), is one
                of the largest forts in the world, built in 1156 AD by Bhati
                Rajput ruler Rao Jaisal in Jaisalmer, Rajasthan. Situated amidst
                the golden sands of the Thar Desert, it is a magnificent
                monument and one of the most famous tourist attractions of
                Jaisalmer.
              </p>
            </div>
          </div>

          {/* img2 */}
          <div className="h-[70vh] w-full mt-[10vh] relative">
            <img
              className="h-full w-full object-cover absolute inset-0 z-0"
              src={Kaziranga}
              alt="Background"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-black/70 to-transparent">
              <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                Kaziranga National Park
              </h1>
              <p className="text-white mt-2 max-w-2xl drop-shadow-md">
                Kaziranga National Park, located in Assam’s Golaghat, Nagaon,
                Sonitpur, and Biswanath districts, is a UNESCO World Heritage
                Site and a Tiger Reserve since 2006. Famous for hosting
                two-thirds of the world’s Indian rhinoceroses, it had a
                population of 2,613 rhinos in 2018. The park also shelters
                elephants, wild water buffalo, swamp deer, and diverse bird
                species, making it an Important Bird Area. With tall grasslands,
                marshes, forests, and rivers like the Brahmaputra, Kaziranga is
                a symbol of successful wildlife conservation.
              </p>
            </div>
          </div>

          {/* img3 */}
          <div className="h-[70vh] mt-[10vh] w-full relative">
            <img
              className="h-full w-full object-cover absolute inset-0 z-0"
              src={suntem}
              alt="Background"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-black/70 to-transparent">
              <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                Sun Temple
              </h1>
              <p className="text-white mt-2 max-w-2xl drop-shadow-md">
                The Sun Temple at Konark, Odisha, built in 1250 by King
                Narasimha I of the Eastern Ganga dynasty, is dedicated to the
                sun god Surya. A masterpiece of Orissan architecture, it
                symbolizes Surya’s chariot with 12 pairs of wheels and seven
                horses. The temple features intricate carvings depicting royal
                hunts, military scenes, and dancers. Its main sanctuary, once
                227 feet high, collapsed by the 19th century. Designated a
                UNESCO World Heritage Site in 1984, restoration efforts began in
                2022 to preserve its structure
              </p>
            </div>
          </div>
        </div>
        <h1 className=" text-center text-8xl mb-[20px] " >Scripted</h1>
      </div>
    </>
  );
}

export default Hero;
