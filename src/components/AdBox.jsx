import React from "react";
import topMedia from "../assets/topTags.svg";
import chevron from "../assets/chevronBlue-icon.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reddit from "../assets/reddit.png";
import "./AdBox.css";

function AdBox({ src1, src2 }) {
  return (
    <div className="ads-container">
      <article className="anuncio-wrapper">
        <div id="topMedia-container">
          <p id="topMedia-title">Top redes sociais</p>
          <button id="details-btn">Detalhes</button>
          <img id="details-chevron" src={chevron} alt="Chevron icon" />
        </div>
        <div id="topMedia-bar">
          <div id="item1"></div>
          <div id="item2"></div>
          <div id="item3"></div>
          <div id="item4"></div>
        </div>
        <div id="topMedia-names">
          <img className="socialMedia-icon" src={facebook} alt="" />
          <p id="facebook-title">Facebook</p>
          <p className="post-counter">{45 + " posts"}</p>
          <p className="post-percentage">{12 + "%"}</p>
        </div>
        <div id="topMedia-names">
          <img className="socialMedia-icon" src={instagram} alt="" />
          <p id="instagram-title">Instagram</p>
          <p className="post-counter">{138 + " posts"}</p>
          <p className="post-percentage">{43 + "%"}</p>
        </div>
        <div id="topMedia-names">
          <img className="socialMedia-icon" src={linkedin} alt="" />
          <p id="linkedin-title">Linkedin</p>
          <p className="post-counter">{75 + " posts"}</p>
          <p className="post-percentage">{20 + "%"}</p>
        </div>
        <div id="topMedia-names">
          <img className="socialMedia-icon" src={reddit} alt="" />
          <p id="reddit-title">Reddit</p>
          <p className="post-counter">{12 + " posts"}</p>
          <p className="post-percentage">{8 + "%"}</p>
        </div>
      </article>
      <article className="anuncio-wrapper">{src1}</article>
      <article className="anuncio-wrapper">{src2}</article>
    </div>
  );
}

export default AdBox;
