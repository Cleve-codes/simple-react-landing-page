import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [hamburger, setHamburgerMenu] = useState(true);

  const handleMenu = () => {
    setHamburgerMenu((prev) => !prev);
  };

  return (
    <div className="home">
      <Navbar hamburger={hamburger} handleMenu={handleMenu} />
      <div className={`ham-content ${hamburger ? "hidden" : ""}`}>
        <ul>
          <li>
            <h2>Home</h2>
          </li>
          <li>
            <h2>Menu</h2>
          </li>
          <li>
            <h2>Services</h2>
          </li>
          <li>
            <h2>Order</h2>
          </li>
        </ul>
      </div>
      <div className="main-container">
        <div>
          <h1>
            Explore <br></br>The Best<br></br> Food in Town
          </h1>
          <p>
            Click here to view our menus<a href="#menu"> &rarr;</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
