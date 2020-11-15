import React from "react";
import "bootstrap/dist/css/bootstrap.css";


const SidebarMenu = ({ orderType }) => {
  return orderType.map((item,index) => {
    return (
      <div className="navigateMenu" key={index}>
        <a href={`#${item}`} className="menu_sideBar">
          {item.toUpperCase()}
        </a>
      </div>
    );
  });
};


export default SidebarMenu;
