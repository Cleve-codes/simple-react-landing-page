import React from "react";

const Toggle = ({ darkMode, handleModes }) => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleModes}
        ></input>
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
