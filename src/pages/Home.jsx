import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import Header from "../components/Header";
import Post from "../components/Post";
import Ad from "../components/AdBox";
import NovaHistoria from "../components/NovaHistoria"
import plusBtn from "../assets/plusBtn.svg";

function Home() {
  const [navState, setNavState] = useState(1)
  function criaHistoria() {
  }
  return (
    <div className="page-container">
      <Navbar navState={navState}/>
      <div className="header-content-container">
        <Header navState={navState}/>
        <main className="main-section">
          <div className="content-container">
            <div className="feed-header-container">
              <div className="feed-greeting">
                <h2 id="feed-title">Seu feed</h2>
                <p id="feed-subtitle">Bem vindo de volta, Ricardo Milos!</p>
              </div>
              <div id="novaHistoria-container">
                <img src={plusBtn} alt="Botao nova historia" onClick={criaHistoria()}/>
                <p id="novaHistoria">Nova historia</p>
              </div>
            </div>
            <Post />
            <Post />
          </div>
          <Ad />
        </main>
      </div>
    </div>
  );
}

export default Home;
