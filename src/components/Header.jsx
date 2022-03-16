import React, { useState } from "react";
import "./Header.css";
import earth from "../assets/planet-earth.png";
import milos from "../assets/milos.jpg";
import chevron from "../assets/chevron-icon.svg";
import darkMode from "../assets/darkMode-icon.svg";
import bruxo from "../assets/wizard.png";
import arqueira from "../assets/bow.png";
import barbaro from "../assets/barbarian.png";
import gatuno from "../assets/thief.png";

function Header() {
  const [status, setStatus] = useState("Online");
  const [statusColor, setStatusColor] = useState("user-status-text");
  const [dotColor, setDotColor] = useState("dot-status");

  function handleStatus() {
    if (status == "Online") {
      setStatus("Offline");
      setStatusColor("user-status-text-off");
      setDotColor("dot-status-off");
    } else {
      setStatus("Online");
      setStatusColor("user-status-text");
      setDotColor("dot-status");
    }
  }
  return (
    <header id="header-container">
      <div className="user-container">
        <img className="foto-perfil" src={milos} alt="foto-perfil" />
        <div id="user-info">
          <p id="user-name">Ricardo Milos</p>
          <p id="user-email">ricardo.milos@gmail.com</p>
        </div>
        <img id="user-chevron" src={chevron} alt="chevron icon" />
      </div>
      <input className="search-bar-container" placeholder="Search..."></input>
      <div className="user-status-container">
        <span class={dotColor}></span>
        <p
          className={statusColor}
          id="user-status-text-id"
          onClick={() => handleStatus()}
        >
          {status}
        </p>
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
      <img
        id="darkMode-icon"
        src={darkMode}
        alt="Dark Mode Icon"
        onClick={() => {
          const $html = document.querySelector("html");
          const $checkbox = document.querySelector("#darkMode-icon");
          $html.classList.toggle("dark-mode");
        }}
      />
    </header>
  );
}

export default Header;
