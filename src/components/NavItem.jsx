import React from "react";
import "./NavItem.css";

function NavItem({ title, iconPath }) {
  return (
    <a className="nav-link" href="">
      <img className="nav-icon" src={iconPath} />
      <p className="nav-text">{title}</p>
    </a>
  );
}

export default NavItem;
