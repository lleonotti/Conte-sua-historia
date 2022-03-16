import React, { useState } from "react";
import "./NavItem.css";
import Perfil from "./Perfil";

function NavItem({ title, iconPath, href }) {
  const [isOpen, setIsOpen] = useState(false);
  if (title == "Perfil") {
    return (
      <div>
        <a
          className="nav-link"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="nav-icon" src={iconPath} />
          <p className="nav-text">{title}</p>
        </a>
        <Perfil
          open={isOpen}
          blur={isOpen}
          onClose={() => setIsOpen(false)}
        ></Perfil>
      </div>
    );
  }
  return (
    <a className="nav-link" href={href}>
      <img className="nav-icon" src={iconPath} />
      <p className="nav-text">{title}</p>
    </a>
  );
}

export default NavItem;
