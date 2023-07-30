import "./index.css";
import { useState } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModes = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <video autoPlay loop muted playsInline>
        <source src="/Assets/bgVid.mp4" type="video/mp4"></source>
      </video>
      <Home handleModes={handleModes} darkMode={darkMode} />
      <Menu />
    </div>
  );
}

export default App;
