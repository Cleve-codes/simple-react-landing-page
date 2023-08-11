import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans">
          {" "}
          In my kitchen, ingredients are not just elements; they are characters
          in a culinary narrative. With a dash of inspiration and a sprinkle of
          innovation, I craft dishes that dance on taste buds and linger in
          memories. Every plate is a canvas, and I paint it with flavors that
          celebrate the essence of food. Join me in savoring the artistry of
          cuisine, where each dish is a harmonious symphony of taste, texture,
          and imagination.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
