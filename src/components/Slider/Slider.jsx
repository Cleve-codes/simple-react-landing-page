import React from "react";

import { Carousel } from "antd";
import { images } from "../../constants";

const contentStyle = {
  flex: "1",
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid red',

  marginLeft: '2rem'
};

const imageStyle = {
  width: "100%"
}


const Slider = () => (
  <Carousel autoplay>
    <div style={contentStyle}>
      <img src={images.welcome} alt="header_img" style={imageStyle} key={1} />
    </div>
    <div style={contentStyle}>
      <img src={images.findus} alt="header_img" style={imageStyle} key={2}  />
    </div>
  </Carousel>
);

export default Slider;
