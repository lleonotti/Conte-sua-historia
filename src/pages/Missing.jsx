import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Missing.css";
import Header from "../components/Header";
import Post from "../components/Post";
import Ad from "../components/AdBox";
import NovaHistoria from "../components/NovaHistoria";
import plusBtn from "../assets/plusBtn.svg";
import Perfil from "../components/Perfil";
import jackie from "../assets/404.png";

function Missing() {
  return (
    <div className="page-container" id="home-page-id">
      <Navbar />
      <div className="header-content-container">
        <Header />
        <main className="missing-main-section" id="main-section-id">
          <div className="missing-content-container">
            <div className="missingBox-container">
              <h1>Erro 404</h1>
              <img className="missingImg" src={jackie} alt="Jackie404" />
              <h2>Ops! Parece que não há nada aqui</h2>
              <h3>
                Detecting multiple leviathan class lifeforms in the region. Are
                you certain whatever you're doing is worth it?
              </h3>
            </div>
          </div>
          <Ad />
        </main>
      </div>
    </div>
  );
}

export default Missing;
