import React from "react";

import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header_h1"> The Key to fine dining</h1>
      <p className="p__opensans" style={{ margin: "2em 0em" }}>
        Experience <span>Geritch:</span> Where Taste Meets Excellence. Join us
        for an unforgettable culinary journey curated by our passionate chefs.
      </p>
      <button className="custom__button" type="button">
        Explore More
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
