import React from "react";
import Pizza from "../Assets/pizza.jpeg"

const Menu = () => {
  return (
    <div>
      <div className="menu-container">
        <img src={Pizza} alt="pizza" />
        <h2>Whats up though</h2>
      </div>
    </div>
  );
};

export default Menu;
