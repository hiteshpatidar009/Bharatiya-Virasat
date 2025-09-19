import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


function Navbar() {

  useGSAP(function (){
    let tl=gsap.timeline()
    gsap.from("nav",{
      y:-50,
      opacity:0,
      duration:1,
      
      

    })
    tl.from("#main",{
      y:-10,
      opacity:0,
      duration:0.8,
      
      
    })

    tl.from("h1",{
    opacity:0,
    y:-10,
    duration:0.6,
    stagger:0.2
})
  })
  return (
    < >
     <nav className="flex bg-black text-white items-center justify-between px-6 py-4 shadow-md  animate-fadeDown">
      {/* Logo */}
      <div className="text-2xl font-bold text-white-800  hover:text-blue-600 transition-colors">
        Bharatiya Virasat
      </div>

      {/* Menu */}
      <div id="main" className="flex space-x-6 text-lg font-medium text-white-700">
        <h1 className="cursor-pointer hover:text-blue-600 transition-colors duration-300 animate-fadeItem">
          Home
        </h1>
        <h1 className="cursor-pointer hover:text-blue-600 transition-colors duration-300 animate-fadeItem">
         Festival
        </h1>
        <h1 className="cursor-pointer hover:text-blue-600 transition-colors duration-300 animate-fadeItem">
          Heritage
        </h1>
        <h1 className="cursor-pointer hover:text-blue-600 transition-colors duration-300 animate-fadeItem">
           About
        </h1>
      </div>
    </nav>
    </>
  )
}

export default Navbar
