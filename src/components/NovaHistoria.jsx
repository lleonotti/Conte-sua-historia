import React, { useState } from 'react';
import "./Post.css";
import "./NovaHistoria.css";
import calendar from "../assets/calendar-icon.svg";
import milos from "../assets/milos.jpg";
import quit from "../assets/quit-icon.svg"
import Tag from "./Tag";

function NovaHistoria() {
  const [anonState, setAnonState] = useState("Modo anônimo desativado");
  function checkAnonState() {
    if (anonState == "Modo anônimo desativado") {
      setAnonState("Modo anônimo ativado")
    } else {
      setAnonState("Modo anônimo desativado")
    }
  }
  return <div className="postAndtags-container">
  <section className="tags-container">
    <div className="tags-left">
      <Tag tag="yolo" />
      <Tag tag="yolo" />
      <Tag tag="yolo" />
    </div>
    <img id="button-quit-post" src={quit} alt="Botao sair" />
  </section>
  <div className="post-container">
    <header className="post-header">
      <div className="post-userInfo">
        <img
          className="post-image-container"
          src={milos}
          alt="Foto de Perfil"
        />
        <p className="post-username">@ Ricardo Milos</p>
      </div>
      <div className="post-dateInfo">
        <img src={calendar} alt="Icone calendario" />
        <p className="post-date">{new Date().toLocaleDateString()}</p>
      </div>
    </header>
    <section className="post-content-container">
      <input className="post-title" id="new-post-title" placeholder="Adicione um título"></input>
      <textarea className="post-content" id="new-post-content" placeholder="Conte sua historia..."></textarea>

    <div className="switch-container">
      <div id="switch-wrapper">
        <label className="switch">
            <input type="checkbox" onClick={()=> checkAnonState()}></input>
            <span className="slider round"></span>
        </label>
        <p id="anon-status">{anonState}</p>
      </div>

      <button id="post-btn" className="main-btn" type="button">
          Postar
      </button>
    </div>
    </section>
  </div>
</div>;
}

export default NovaHistoria;
