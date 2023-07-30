import "./index.css";
import { useState } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import videoBg from "./Assets/bgVid3.mp4";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModes = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <Home handleModes={handleModes} darkMode={darkMode} />
      <Menu />
    </div>
  );
}

export default App;
