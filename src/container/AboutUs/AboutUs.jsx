import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import "animate.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="logo" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about animate__animated animate__fadeInLeft">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Indulge in a culinary journey where flavors dance on your palate. Our
          skilled chefs blend global inspirations with local ingredients,
          crafting dishes that are both artful and delectable. Join us for a
          dining experience that transforms every meal into a cherished memory.
          Welcome to a world of taste and delight.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history animate__animated animate__fadeInRight">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          From humble beginnings to a cherished destination for food
          enthusiasts, our history is woven with passion, innovation, and a
          commitment to delighting your senses. Explore the chapters that have
          shaped us into what we are today, and join us in celebrating the art
          of gastronomy that stands the test of time.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
