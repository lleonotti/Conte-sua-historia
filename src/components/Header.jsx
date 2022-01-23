import React from "react";
import "./Header.css";
import earth from "../assets/planet-earth.png";
import chevron from "../assets/chevron-icon.svg";
import darkMode from "../assets/darkMode-icon.svg";
import bruxo from "../assets/wizard.png";
import arqueira from "../assets/bow.png";
import barbaro from "../assets/barbarian.png";
import gatuno from "../assets/thief.png";

// function mudaCor(params) {}
function Header() {
  return (
    <header id="header-container">
      <div className="user-container">
        <img className="foto-perfil" src={earth} alt="foto-perfil" />
        <div id="user-info">
          <p id="user-name">Natalie Paquette</p>
          <p id="user-email">nat.paquette@gmail.com</p>
        </div>
        <img id="user-chevron" src={chevron} alt="chevron icon" />
      </div>
      <input className="search-bar-container" placeholder="Search..."></input>
      <div className="user-status-container">
        <span class="dot-status"></span>
        <p id="user-status-text">Online</p>
      </div>
      <div className="friends-container">
        <img
          className="friend-image-container"
          id="first-friend"
          src={bruxo}
          alt="First friend"
        />
        <img
          className="friend-image-container"
          id="second-friend"
          src={arqueira}
          alt="Second friend"
        />
        <img
          className="friend-image-container"
          id="third-friend"
          src={gatuno}
          alt="Third friend"
        />
        <img
          className="friend-image-container"
          id="fourth-friend"
          src={barbaro}
          alt="Fourth friend"
        />
      </div>
      <img id="darkMode-icon" src={darkMode} alt="Dark Mode Icon" />
    </header>
  );
}

export default Header;
