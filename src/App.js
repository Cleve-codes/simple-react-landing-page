import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";

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

const App = () => {
  const [headerRef, isHeaderIntersecting] = useIntersectionObserver({
    rootMargin: "-300px",
  });

  const [AboutusRef, isAboutusIntersecting] = useIntersectionObserver({
    rootMargin: "-300px",
  });

  return (
    <div>
      <Navbar />
      <Header
        headerRef={headerRef}
        isHeaderIntersecting={isHeaderIntersecting}
      />
      <AboutUs
        AboutusRef={AboutusRef}
        isAboutusIntersecting={isAboutusIntersecting}
      />
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
