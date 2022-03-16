import React from "react";
import calendar from "../assets/calendar-icon.svg";
import "./Post.css";
import milos from "../assets/milos.jpg";
import heart from "../assets/heart-icon.svg";
import thumb from "../assets/thumb-icon.svg";
import star from "../assets/star-icon.svg";
import share from "../assets/share-icon.svg";
import Reaction from "./Reaction";
import Tag from "./Tag";

function Post() {
  return (
    <div className="postAndtags-container">
      <section className="tags-container">
        <div className="tags-left">
          <Tag tag="yolo" />
          <Tag tag="yolo" />
          <Tag tag="yolo" />
        </div>
        <Tag src={share} />
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
            <p className="post-date">19/01/2022</p>
          </div>
        </header>
        <section className="post-content-container">
          <p className="post-title">O dia que virei um meme</p>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            repudiandae aliquam, quia rerum pariatur nostrum numquam voluptate
            quibusdam iste est! Ducimus illum expedita, quae laboriosam
            doloremque autem animi aperiam sit tempore iusto quidem obcaecati
            molestias distinctio iure facere, veritatis officiis magni quasi?
            Nam minima dolore tempore maxime optio quasi vero voluptatem
          </p>
        </section>
        <section className="reactions-container">
          <Reaction src={star} />
          <Reaction src={thumb} />
          <Reaction src={heart} />
        </section>
      </div>
    </div>
  );
}

export default Post;
