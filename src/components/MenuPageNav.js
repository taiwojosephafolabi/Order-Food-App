import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const MenuPageNavbar = ({backToMainPage, GoToShoppingLists , cart }) => {

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img
            src="https://storage.needpix.com/rsynced_images/food-2085075_1280.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Five Guys logo"
            onClick={() => backToMainPage()}
          />
          <span className="nav_title"></span>
        </a>
        <button className="basketButton" onClick={() => GoToShoppingLists()}>
      <i className="fas fa-shopping-basket basketSign">({cart.length})</i>
      </button>
      </nav>
    </div>
  );
};

export default MenuPageNavbar;
