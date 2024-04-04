import React from "react";
import Navbar from "./components/Navbar";
import "../src/App.css";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
    </>
  );
};

export default App;
