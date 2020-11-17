import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Navbar = () => {
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
          />
          <span className="nav_title"></span>
        </a>
      </nav>
      <div>
      </div>
    </div>
  );
};

export default Navbar;
