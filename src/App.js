import "./index.css";

import Home from "./components/Home";
import Menu from "./components/Menu";
import videoBg from "./Assets/bgVid3.mp4";

function App() {

  return (
    <div className={`App`}>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <Home />
      <Menu />
    </div>
  );
}

export default App;
