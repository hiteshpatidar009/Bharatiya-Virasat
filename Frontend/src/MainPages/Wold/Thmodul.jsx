import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Thmodul() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // ✅ loading progress
  const [loaded, setLoaded] = useState(false); // ✅ fade control

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    const isMobile = window.innerWidth < 768;

    const frame = {
      currentIndex: 0,
      Maxindex: 1012,
      step: isMobile ? 5 : 1,
    };

    const arrayimage = new Array(Math.ceil(frame.Maxindex / frame.step));

    // ✅ Resize with DPR
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
      loadimg(frame.currentIndex);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function getImage(index) {
      return new Promise((resolve) => {
        const realIndex = index * frame.step;
        const imageUrl = `/hitu/frame_${(realIndex + 1)
          .toString()
          .padStart(4, "0")}.jpeg`;

        if (arrayimage[index]) {
          resolve(arrayimage[index]);
        } else {
          const img = new Image();
          img.src = imageUrl;
          img.onload = () => {
            arrayimage[index] = img;
            setProgress(
              Math.round(((arrayimage.filter(Boolean).length) / arrayimage.length) * 100)
            );
            resolve(img);
          };
        }
      });
    }

    async function loadimg(index) {
      if (index >= 0 && index < arrayimage.length) {
        const img = await getImage(index);
        if (!img) return;

        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

        const scaleX = canvasWidth / img.width;
        const scaleY = canvasHeight / img.height;
        const scale = Math.min(scaleX, scaleY); // ✅ fit image fully (no crop)

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvasWidth - newWidth) / 2;
        const offsetY = (canvasHeight - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        frame.currentIndex = index;
      }
    }

    function startanimation() {
      let obj = { value: 0 };

      gsap.to(obj, {
        value: arrayimage.length - 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          loadimg(Math.floor(obj.value));
        },
      });
    }

    // ✅ Load first frame, fade in, then lazy load rest
    getImage(0).then(() => {
      loadimg(0);
      gsap.to(canvas, { opacity: 1, duration: 1, ease: "power2.out" }); // fade-in
      setLoaded(true);
      startanimation();

      // ✅ Preload the rest in background
      for (let i = 1; i < arrayimage.length; i++) {
        getImage(i);
      }
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full bg-zinc-900 relative">
      {/* ✅ Loading overlay */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 z-20">
          <div className="w-16 h-16 border-4 border-gray-400 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-white text-lg">{progress}%</p>
        </div>
      )}

      <div
        ref={containerRef}
        className="parent h-[500vh] w-full relative top-0 left-0"
      >
        <div className="h-screen w-full sticky top-0 left-0">
          <canvas
            ref={canvasRef}
            className="h-full w-full opacity-0" // hidden until fade-in
            id="frame"
            style={{ display: "block", background: "black" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default Thmodul;