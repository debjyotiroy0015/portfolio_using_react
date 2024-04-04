import React from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
    </>
  );
};

export default App;
