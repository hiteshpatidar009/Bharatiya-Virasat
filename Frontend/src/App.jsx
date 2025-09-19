import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Thmodul from './components/Thmodul.jsx';
import FooterPage from './components/Footer.jsx';


import Hero from './Hero'
import { Routes, Route } from "react-router-dom";


import SecHero from './SecHero'


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
