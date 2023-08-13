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

const App = () => {
  return (
    <div>
      <BackToTopBtnTo />
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
    </div>
  );
};

export default App;
