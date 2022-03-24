import React, { useState } from "react";
import calendar from "../assets/calendar-icon.svg";
import "./Post.css";
import milos from "../assets/milos.jpg";
import heart from "../assets/heart-icon.svg";
import thumb from "../assets/thumb-icon.svg";
import star from "../assets/star-icon.svg";
import share from "../assets/share-icon.svg";
import Reaction from "./Reaction";
import Tag from "./Tag";

function Post({ title, content, storyUserPhoto }) {
  const [userPic, setUserPic] = useState(milos);

  // const handlePic = () => {
  //   setUserPic(storyUserPhoto);
  // };

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
              src={storyUserPhoto}
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
          <p className="post-title">{title}</p>
          <p className="post-content">{content}</p>
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
