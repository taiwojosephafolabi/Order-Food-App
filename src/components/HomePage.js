import React from "react";
import Navbar from "./Navbar";

const HomePage = ({mainPage,setMainPage,setPage}) => {

  function showMenuPage () {
    setPage("Menu Page");
    setMainPage(!mainPage);
  }

  return (
    <div>
      <Navbar />
      <div className="image_gallery">
        <div className="order_food">
          <h2>Welcome To Tasty Food</h2>
          <p>
            We have different Kinds of foods , drinks and desserts with 24/7
            online supports service.you can order your food anytime anywhere.
          </p>
          <p>Feel Free to take a look at our menu</p>
          <button type="button" className="button btn" onClick={() => showMenuPage()}>
            Menu
          </button>
        </div>
        <div className="figure"></div>
      </div>
    </div>
  );
};

export default HomePage;
