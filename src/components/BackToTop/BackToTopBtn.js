import React from "react";
import { useState, useEffect } from "react";

function BackToTopBtn() {
  const [BackToTopBtn, setBackToTop] = useState(false);

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
    <div>
      <button
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "50px",
          width: "50px",
          border: "none",
          borderRadius: "50%",
          zIndex: "5",
          background: "--var(--color-black)",
          color: "--var(--color-golden)",
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
