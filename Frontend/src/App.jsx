import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/comman/Navbar.jsx";
import Festival from "./MainPages/Festival/Festival.jsx";
import FooterPage from "./components/comman/Footer.jsx";
import Heritage from "./MainPages/Heritage/Heritage.jsx";
import Mainsection from "./MainPages/MainsectionPage/Mainsection.jsx";
import MainHeritage from "./MainPages/Heritage/MainHeritage.jsx";
import AboutUs from "./MainPages/AboutUs/AboutUs.jsx";
import Indiantour from "./MainPages/Wold/Indiantour.jsx";
import Thmodul from "./MainPages/Wold/Thmodul.jsx"; 

function App() {
  return (
    <>
      <div className="h-screen w-full bg-black">
        <div style={{ display: 'none' }}>
          <Thmodul />
        </div>
        
        <Navbar />

        <Routes>
          {/* <Route path="/navbar" element={ <Navbar/>} ></Route> */}
          <Route path="/" element={<Mainsection />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/mainheritage" element={<MainHeritage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/indiatour" element={<Indiantour />} />
        </Routes>
        <FooterPage />
      </div>
    </>
  );
}

export default App;