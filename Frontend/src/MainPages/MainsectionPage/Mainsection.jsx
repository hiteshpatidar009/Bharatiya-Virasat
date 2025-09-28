import React from 'react'
// import Thmodul from './Thmodul.jsx';

import Firstmain from "./Firstmain.jsx";
import Hero from './Hero';
import { Helmet } from "react-helmet";
import SecHero from './SecHero';

function Mainsection() {
  return (

    
    <div>

       <Helmet>
        <title>Bharatiya Virasat - Explore Indian Heritage</title>
        <meta 
          name="description" 
          content="Explore Indian culture, heritage, and traditions on Bharatiya Virasat." 
        />
      </Helmet>

      
      <Firstmain/>
      <Hero/>
      <SecHero/>
      {/* <Thmodul/> */}
    </div>
  )
}

export default Mainsection
