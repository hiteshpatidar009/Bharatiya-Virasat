import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Hero from './Hero'
import { Routes, Route } from "react-router-dom";

import Thmodul from './component/Thmodul'
import SecHero from './SecHero'
import FooterPage from './component/Footer';

function App() {
  

  return (

    <>
    <div className='  h-screen w-full bg-black'>

      
      <Navbar/>
      <Thmodul/>
      <Hero/>
      <SecHero/>
      <FooterPage/>
   
    </div>
     
    </>
  )
}

export default App
