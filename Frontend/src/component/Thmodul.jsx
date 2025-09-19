import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Thmodul() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const frame = {
      currentIndex: 8,
      Maxindex: 545,
    };
    let imagesLoaded = 0;
    const arrayimage = [];

   
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      loadimg(frame.currentIndex); 
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function preloadImage() {
      for (let i = 0; i < frame.Maxindex; i++) {
        
        const imageUrl = `./extracted/frame_${(i + 1)
          .toString()
          .padStart(4, "0")}.jpg`;

        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frame.Maxindex) {
            loadimg(frame.currentIndex);
            startanimation();
          }
        };

        arrayimage.push(img);
      }
    }

    function loadimg(index) {
      if (index >= 0 && index < frame.Maxindex) {
        const img = arrayimage[index];
        if (!img) return;

        const scalx = canvas.width / img.width;
        const scaly = canvas.height / img.height;
        const scale = Math.max(scalx, scaly);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

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
    value: frame.Maxindex,
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    onUpdate: () => {
      loadimg(Math.floor(obj.value));
    },
  });
}

    preloadImage();

    
    return () => {
  window.removeEventListener("resize", resizeCanvas);
  ScrollTrigger.getAll().forEach(st => st.kill()); 
};
  }, []);

  return (
    <div className="w-full bg-zinc-900">
      <div
        ref={containerRef}
        className="parent h-[700vh] w-full relative top-0 left-0"
      >
        <div className="h-screen w-full sticky top-0 left-0">
          <canvas ref={canvasRef} className="h-full w-full" id="frame"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Thmodul;
