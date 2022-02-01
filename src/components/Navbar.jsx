import React, { useState } from "react";
import "./Navbar.css";
import PerfilIcon from "../assets/Perfil-icon.svg";
import HistoriasIcon from "../assets/MinhasHistorias-icon.svg";
import PastaIcon from "../assets/Pastinha-icon.svg";
import ConfigIcon from "../assets/config-icon.svg";
import FileIcon from "../assets/file-icon.svg";
import HashtagIcon from "../assets/hashtag-icon.svg";
import questionIcon from "../assets/qmark-icon.svg";
import NavItem from "./NavItem";

function Navbar({navState}) {
  const [storyCounter, setStoryCounter] = useState(1);
  return (
    <nav id="navbar-container">
      <div className="logo-container">
        <img
          id="logo-img"
          src="https://cdn-icons-png.flaticon.com/512/3534/3534033.png"
          alt="logo"
        />
        <h1 id="logo-title">Conte Sua Historia</h1>
      </div>
      <h2 className="section-title">Meu perfil</h2>
      <ul id="perfil-grid">
        <li className="li-container">
          <NavItem title="Perfil" iconPath={PerfilIcon} />
        </li>
        <li className="li-container">
          <NavItem title="Histórias favoritas" iconPath={HistoriasIcon} />
        </li>
        <li className="li-container">
          <NavItem title="Minhas Historias" iconPath={PastaIcon} />
          <div id="story-counter">
            <p>{storyCounter}</p>
          </div>
        </li>
      </ul>

      <h2 className="section-title">Filtros</h2>
      <ul id="filtros-grid">
        <li className="li-container">
          <NavItem title="Psicologia" iconPath={HashtagIcon} />
        </li>
        <li className="li-container">
          <NavItem title="Família" iconPath={HashtagIcon} />
        </li>
        <li className="li-container">
          <NavItem title="Yolo" iconPath={HashtagIcon} />
        </li>
        <li className="li-container">
          <NavItem title="Superação" iconPath={HashtagIcon} />
        </li>
      </ul>

      <h2 className="section-title">Geral</h2>
      <ul id="geral-grid">
        <li className="li-container">
          <NavItem title="Configurações" iconPath={ConfigIcon} />
        </li>
        <li className="li-container">
          <NavItem title="Importar e exportar" iconPath={FileIcon} />
        </li>
      </ul>

      <div className="help-container">
        <img id="question-icon" src={questionIcon} alt="Question marker" />
        <p id="help-text">Precisa de ajuda com algo?</p>
        <button className="main-btn" type="button">
          Menu de ajuda
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
