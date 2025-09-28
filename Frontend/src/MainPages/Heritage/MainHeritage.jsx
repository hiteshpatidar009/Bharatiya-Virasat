import React from "react";
import Heritagevideo from "./HeritagePhoto/newheritagevideo.mov"; 
import Heritage from "./Heritage.jsx";

function MainHeritage() {
  return (
    <>

     <Helmet>
        <title>Indian Heritage - Bharatiya Virasat</title>
        <meta 
          name="description" 
          content="Explore the rich cultural and historical heritage of India with Bharatiya Virasat. Discover monuments, traditions, and stories that shape our identity." 
        />
        <meta 
          name="keywords" 
          content="Indian heritage, cultural history, Bharatiya Virasat, monuments, traditions, Indian culture" 
        />
        <meta property="og:title" content="Indian Heritage - Bharatiya Virasat" />
        <meta 
          property="og:description" 
          content="Dive into India's timeless heritage — monuments, traditions, and history at Bharatiya Virasat." 
        />
      </Helmet>
      
      <div className="relative w-full overflow-hidden bg-black min-h-[50vh] sm:min-h-[70vh] md:min-h-[90vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Heritagevideo} type="video/mp4" />
        </video>
        {/* Optional overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>

      {/* Heritage Section */}
      <div>
        <Heritage />
      </div>
    </>
  );
}

export default MainHeritage;
