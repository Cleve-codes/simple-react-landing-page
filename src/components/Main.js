import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left">
        <div>
          <p className="h1">
            Downtown <br></br> Delicacy
          </p>
        </div>
        <div className="find-food">
          <p>
            <em> Indulge in Culinary Bliss:</em> <br></br>
            Where Every Dish is a Masterpiece of Flavors and Culinary Creativity
          </p>
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
