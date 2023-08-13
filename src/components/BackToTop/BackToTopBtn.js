import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";

function BackToTopBtn() {
  const [BackToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll">
      <button
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "40px",
          width: "40px",
          border: "none",
          borderRadius: "50%",
          zIndex: "5",
          background: "--var(--color-black)",
          color: "--var(--color-golden)",
          cursor: "pointer",
          fontSize: "1.2em",
          textAlign: "center"
        }}
        onClick={() => scrollUp()}
      >
        {" "}
        ^{" "}
      </button>
    </div>
  );
}

export default BackToTopBtn;
