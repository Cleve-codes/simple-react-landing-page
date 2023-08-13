import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = ({ isHeaderIntersecting }) => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div
        className={
          isHeaderIntersecting
            ? "app__wrapper_info animate__animated animate__fadeInLeft"
            : "app__wrapper_info"
        }
      >
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Experience <span>Geritch</span>: Where Taste Meets Excellence. Join us
          for an unforgettable culinary journey curated by our passionate chefs.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img animate__animated animate__fadeInRight">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
