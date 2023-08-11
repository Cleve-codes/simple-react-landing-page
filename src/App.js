import React from "react";
import "typescript";
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
import { Reveal } from "./Reveal";

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
      <Reveal>
        <Header
          headerRef={headerRef}
          isHeaderIntersecting={isHeaderIntersecting}
        />
      </Reveal>

      <Reveal>

      <AboutUs
        AboutusRef={AboutusRef}
        isAboutusIntersecting={isAboutusIntersecting}
        />
        </Reveal>
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
