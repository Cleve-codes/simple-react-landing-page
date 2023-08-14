import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
          height: "37px",
          width: "37px",
          border: "none",
          borderRadius: "50%",
          zIndex: "5",
          cursor: "pointer",
          fontSize: "1.2em",
          textAlign: "center",
        }}
        onClick={() => scrollUp()}
      >
        {" "}
        <BsFillArrowUpCircleFill size="2rem" color="black"  />{" "}
      </button>
    </div>
  );
}

export default BackToTopBtn;
