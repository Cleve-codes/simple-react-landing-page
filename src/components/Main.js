import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left">
        <div>
          <h1>
            Downtown <br></br> Delicacy
          </h1>
          <p>
            <span>
              Indulge in Culinary Bliss: Where Flavor Meets Imagination!
            </span>
          </p>
        </div>
        <div>
          <div class="input-group">
            <input
              type="text"
              class="input-submit"
              id="Email"
              name="Email"
              placeholder="pizza"
              autocomplete="off"
            ></input>
            <input
              class="button--submit"
              value="Find Food"
              type="submit"
            ></input>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="./Assets/image-2.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
