import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import Header from "../components/Header";
import Post from "../components/Post";
import Ad from "../components/AdBox";
import NovaHistoria from "../components/NovaHistoria";
import plusBtn from "../assets/plusBtn.svg";
import Perfil from "../components/Perfil";

function Home() {
  const [navState, setNavState] = useState(1);
  const [showState, setShowState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-container" id="home-page-id">
      <Navbar navState={navState} />
      <div className="header-content-container">
        <Header navState={navState} />
        <main className="main-section" id="main-section-id">
          <div className="content-container">
            <div className="feed-header-container">
              <div className="feed-greeting">
                <h2 id="feed-title">Seu feed</h2>
                <p id="feed-subtitle">Bem vindo de volta, Ricardo Milos!</p>
              </div>
              <div
                id="novaHistoria-container"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={plusBtn} alt="Botao nova historia" />
                <NovaHistoria
                  open={isOpen}
                  onClose={() => {
                    setIsOpen(false);
                    document.getElementById("root").style.filter = "blur(0px)";
                  }}
                />
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
