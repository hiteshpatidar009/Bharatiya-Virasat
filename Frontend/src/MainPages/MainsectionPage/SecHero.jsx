import React, { useEffect, useRef } from "react";
import lastimg from "./MainsectionImage/laste.gif";
import Gita from "./MainsectionImage/gita.jpeg";
import qurn from "./MainsectionImage/qurn.jpeg";
import guru from "./MainsectionImage/guru.jpeg";
import vipn from "./MainsectionImage/vipn.jpeg";

function SecHero() {
  const comp = useRef();

  useEffect(() => {
    const gsapScript = document.createElement("script");
    gsapScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    document.head.appendChild(gsapScript);

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
    document.head.appendChild(scrollTriggerScript);

    Promise.all([
      new Promise((resolve) => (gsapScript.onload = resolve)),
      new Promise((resolve) => (scrollTriggerScript.onload = resolve)),
    ]).then(() => {
      gsap.registerPlugin(ScrollTrigger);

      let ctx = gsap.context(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
          // Desktop behavior stays the same
          const container = document.querySelector("#sonofpage2");
          const totalWidth = container.scrollWidth;
          const scrollDistance = totalWidth - window.innerWidth;

          let horizontalScroll = gsap.to(container, {
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

          gsap.utils.toArray(".mynewbox").forEach((box) => {
            gsap.from(box, {
              rotate: 180,
              scale: 1,
              opacity: 0,
              duration: 2,
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: box,
                start: "left center",
                end: "right center",
                scrub: true,
              },
            });
          });

          gsap.utils.toArray(".mynewbox1").forEach((box) => {
            gsap.from(box, {
              rotate: 360,
              scale: 0.5,
              opacity: 0,
              duration: 2,
              scrollTrigger: {
                trigger: box,
                start: "top 80%",
                scrub: true,
              },
            });
          });

          gsap.from(".newtext1", {
            y: 100,
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            scrollTrigger: {
              trigger: ".newtext1",
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            },
          });

          gsap.utils.toArray(".newtext").forEach((text) => {
            gsap.from(text, {
              y: "100%",
              duration: 1.5,
              opacity: 0,
              scale: 0.8,
              scrollTrigger: {
                containerAnimation: horizontalScroll,
                trigger: text,
                start: "left center ",
                end: "right center",
                scrub: true,
              },
            });
          });

          gsap.from(".newtext p", {
            opacity: 0,
            y: -300,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              containerAnimation: horizontalScroll,
              trigger: ".newtext",
              start: "left center",
              end: "right center",
              scrub: true,
            },
          });
        });

        mm.add("(max-width: 767px)", () => {
          // Mobile-specific adjustments
          const boxes = document.querySelectorAll(".mynewbox, .mynewbox1");
          boxes.forEach((box) => {
            box.classList.remove("ml-[20vh]");
            box.classList.add("mx-auto", "mt-6");
            box.style.width = "80%";
            box.style.height = "auto";
          });

          const texts = document.querySelectorAll(".newtext, .newtext1");
          texts.forEach((text) => {
            text.classList.add("px-4", "text-center");
            const h1 = text.querySelector("h1");
            const p = text.querySelector("p");
            if (h1) h1.classList.add("text-3xl");
            if (p) p.classList.add("text-base");
          });

          const explore = document.querySelector("a[href='/indiatour']");
          if (explore) {
            explore.classList.remove("h-[300px]");
            explore.classList.add("h-[250px]");
          }
        });
      }, comp);

      return () => {
        ctx.revert();
      };
    });
  }, []);

  return (
    <div ref={comp}>
      {/* Page 2 */}
      <div
        id="page2"
        className="h-full w-full bg-black overflow-x-hidden md:overflow-hidden md:h-[100vh]"
      >
        <div
          id="sonofpage2"
          className="flex flex-col md:flex-row items-center w-full md:w-max"
        >
        <div className="h-auto md:h-[90vh] w-full md:w-[95vw] text-white">
  <div className="h-auto md:h-[90vh] w-full md:w-[95vw] relative overflow-hidden flex flex-col justify-center items-center">
    <div className="h-auto md:h-[90vh] w-full md:w-[95vw] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 relative z-10 px-4 md:px-8">
        <div className="text-xl newtext1">
          <h1 className="text-center text-orange-600 text-[40px]">
            Bhagavad Gita
          </h1>
          <p className="text-white text-[20px]">
            The Bhagavad Gita is a sacred Hindu scripture, part of the
            great epic Mahabharata. It is a conversation between Lord
            Krishna and Arjuna on the battlefield of Kurukshetra.
            Arjuna was confused and filled with doubt about fighting
            in the war, and Lord Krishna guided him with wisdom. The
            Gita teaches about dharma (duty), karma (action), and
            bhakti (devotion), giving the path to live a righteous and
            meaningful life. It is considered a universal guide to
            spirituality, morality, and inner peace, respected all
            over the world.
          </p>
        </div>
        <div className="h-64 w-64 md:h-[20rem] md:w-[20rem] rounded-lg shadow-lg mynewbox1 mt-0 md:mt-0">
          <img className="rounded-lg w-full h-full object-cover" src={Gita} />
        </div>
      </div>
    </div>

    <div className="hidden md:block absolute top-[50vh] left-0 w-full h-96 z-20 bg-green-300">
      <img
        className="object-cover w-full h-full"
        src={lastimg}
        alt="Guru placeholder"
      />
    </div>
  </div>
</div>


       <div className="h-auto md:h-[90vh] w-full md:w-[95vw] text-white">
  <div className="h-auto md:h-[90vh] w-full md:w-[95vw] relative overflow-hidden flex flex-col justify-center items-center">
    <div className="h-auto md:h-[90vh] w-full md:w-[95vw] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 relative z-10 px-4 md:px-8">
        <div className="text-xl text-orange-500 newtext">
          <h1 className="text-center text-green-600 text-[40px]">
            Qur’an
          </h1>
          <p className="text-white text-[20px]">
            The Qur’an is the holy book of Islam, believed to be the
            word of Allah (God) revealed to Prophet Muhammad (PBUH)
            through Angel Jibreel (Gabriel) over 23 years. It is
            written in Arabic and divided into 114 chapters (Surahs).
            The Qur’an teaches about faith, worship, morality,
            justice, and guidance for daily life. Muslims recite it
            regularly, especially during prayers and the month of
            Ramadan. It is considered the final and eternal message of
            God, providing light, peace, and guidance to humanity.
          </p>
        </div>
        <div className="h-64 w-64 md:h-[20rem] md:w-[20rem] rounded-lg shadow-lg mynewbox mt-0 md:mt-0">
          <img className="rounded-lg w-full h-full object-cover" src={qurn} />
        </div>
      </div>
    </div>

    <div className="hidden md:block absolute top-[50vh] left-0 w-[80vw] h-96 z-20 bg-green-300">
      <img
        className="object-cover w-full h-full"
        src={lastimg}
        alt="Guru placeholder"
      />
    </div>
  </div>
</div>


         <div className="h-auto w-full md:h-[90vh] md:w-[90vw] text-orange-500">
  <div className="h-auto w-full md:h-[90vh] md:w-[90vw] relative overflow-hidden flex flex-col justify-center items-center">
    <div className="h-auto w-full md:h-[90vh] md:w-[95vw] text-white">
      <div className="h-auto w-full md:h-[90vh] md:w-[95vw] relative overflow-hidden flex flex-col justify-center items-center">
        <div className="h-auto w-full md:h-[90vh] md:w-[95vw] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 relative z-10 px-4 md:px-8">
            <div className="text-xl text-orange-500 newtext text-center md:text-left">
              <h1 className="text-blue-600 text-3xl sm:text-4xl md:text-[40px] mb-4">
                Guru Granth Sahib
              </h1>
              <p className="text-white text-base sm:text-lg md:text-[20px]">
                The Guru Granth Sahib Ji is the holy scripture of Sikhism and is
                regarded as the eternal Guru by Sikhs. It is a collection of hymns,
                prayers, and teachings written by Sikh Gurus and various saints,
                promoting truth, equality, love, and devotion to God. The scripture is
                written mainly in Gurmukhi script and includes verses in many languages.
                Sikhs show great respect to Guru Granth Sahib Ji, placing it on a high
                throne in the Gurdwara and listening to its recitations with devotion.
                It serves as a spiritual guide, teaching values of peace, humility, and
                unity.
              </p>
            </div>
            <div className="h-64 w-64 sm:h-72 sm:w-72 md:h-[20rem] md:w-[20rem] rounded-lg shadow-lg mynewbox1 mx-auto md:mx-0 mt-6 md:mt-0">
              <img className="rounded-lg w-full h-full object-cover" src={guru} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="bg-black mb-20px">
        <h1 className="text-orange-400 text-center text-4xl sm:text-5xl md:text-[15vh] font-bold">
          Explore India with Us
        </h1>

        <a
          href="/indiatour"
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden group block"
        >
          <img
            src={vipn}
            alt="Explore India"
            className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
          />

          <span className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition">
            Clicking Here
          </span>
        </a>
      </div>
    </div>
  );
}

export default SecHero;
