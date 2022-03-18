import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavItem.css";
import Perfil from "./Perfil";

function NavItem({ title, iconPath, href }) {
  const [isOpen, setIsOpen] = useState(false);
  if (title == "Perfil") {
    return (
      <div>
        <a className="nav-link" type="button" onClick={() => setIsOpen(true)}>
          <img className="nav-icon" src={iconPath} />
          <p className="nav-text">{title}</p>
        </a>
        <Perfil
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            document.getElementById("root").style.filter = "blur(0px)";
          }}
        ></Perfil>
      </div>
    );
  }
  return (
    <Link to={String(href)} className="nav-link">
      <img className="nav-icon" src={iconPath} />
      <p className="nav-text">{title}</p>
    </Link>
  );
}

export default NavItem;
