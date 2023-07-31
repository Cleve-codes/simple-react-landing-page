import React from "react";
import Navbar from "./Navbar";



const Home = () => {
  return (
    <div className="home">
      <Navbar />
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
