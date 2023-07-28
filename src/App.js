import "./index.css";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModes = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <div>
      <div className="App">
        <Home handleModes={handleModes} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
