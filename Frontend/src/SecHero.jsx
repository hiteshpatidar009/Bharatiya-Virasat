import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "./herophoto/ford.jpeg";
import gita from "./herophoto/gita.mp4";
import Guru from "./herophoto/guru.mp4";
import quan from "./herophoto/qur.mp4";
import chr from "./herophoto/chr.mp4";
// import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger);

function SecHero() {
  useGSAP(() => {
    const container = document.querySelector("#sonofpage2");

    const totalWidth = container.scrollWidth;

    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div>
      {/* Page 2 */}
      <div id="page2" className="h-[100vh] w-full bg-black overflow-hidden">
        <div id="sonofpage2" className="flex gap-4 items-center w-max">
          <video
            className="object-cover h-[90vh] w-[80vw]"
            autoPlay
            loop
            muted
          >
            <source src={gita} type="video/mp4" />
          </video>

          <video
            className="object-cover h-[90vh] w-[80vw]"
            autoPlay
            loop
            muted
          >
            <source src={Guru} type="video/mp4" />
          </video>
          <video
            className="object-cover h-[90vh] w-[80vw]"
            autoPlay
            loop
            muted
          >
            <source src={quan} type="video/mp4" />
          </video>

           <video
            className="object-cover h-[100vh] w-[100vw]"
            autoPlay
            loop
            muted
          >
            <source src={chr} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default SecHero;
