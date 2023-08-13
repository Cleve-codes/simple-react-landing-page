import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import BackToTopBtnTo from "./components/BackToTop/BackToTopBtn";
import { useState, useEffect } from "react";
import { GiWindSlap } from "react-icons/gi";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setShowBackToTop(true) : setShowBackToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <Header />

      <AboutUs />

      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
      {showBackToTop && <BackToTopBtnTo />}
    </div>
  );
};

export default App;
