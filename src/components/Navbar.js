import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="logo">
        <li>
          <img src=".git /Assets/logo.png" alt="Our logo" />
        </li>
      </ul>
      <ul className="nav-items">
        <li>
          <h2>Home</h2>
        </li>
        <li>
          <h2>Menu</h2>
        </li>
        <li>
          <h2>Services</h2>
        </li>
        <li>
          <h2>Order 🛒</h2>
        </li>
      </ul>
      <ul>
        <li className="input-container">
          <input
            type="text"
            name="text"
            className="input"
            placeholder="search..."
          ></input>
          <span className="icon">
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="1"
                  d="M14 5H20"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M14 8H17"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M22 22L20 20"
                  stroke="#000"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
