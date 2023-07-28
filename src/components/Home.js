import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Toggle from "./Toggle";

const Home = ({ handleModes, darkMode }) => {
  return (
    <div>
      <Toggle handleModes={handleModes} darkMode={darkMode} />
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
