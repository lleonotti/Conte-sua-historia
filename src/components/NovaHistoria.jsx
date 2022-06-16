import React, { useState } from "react";
import ReactDom from "react-dom";
import Post from "./Post";
import "./NovaHistoria.css";
import calendar from "../assets/calendar-icon.svg";
import milos from "../assets/milos.jpg";
import heisenberg from "../assets/heisenberg.jpg";
import quit from "../assets/quit-icon.svg";
import Tag from "./Tag";
import { v4 as uuidv4 } from "uuid";

function NovaHistoria(props) {
  const [userPic, setUserPic] = useState(milos);
  const [tag1, setTag1] = useState("tag1");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    props.setNewStory((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setPosts((prevPosts) => {
      return [
        <Post
          key={uuidv4()}
          title={props.newStory.title}
          content={props.newStory.content}
          storyUserPhoto={props.newStory.photo}
        />,
        ...prevPosts,
      ];
    });
    props.onClose();
  };

  if (!props.open) return null;
  else {
    document.getElementById("root").style.filter = "blur(8px)";

    return ReactDom.createPortal(
      <div className="newPostAndtags-container ">
        <section className="newPost-tags-container">
          <div className="tags-left">
            <Tag tag="yolo" />
            <Tag tag="yolo" />
            <Tag tag="yolo" />
          </div>
          <img
            id="button-quit-post"
            src={quit}
            alt="Botao sair"
            onClick={props.onClose}
          />
        </section>
        <div className="newPost-container">
          <header className="post-header">
            <div className="post-userInfo">
              <img
                className="post-image-container"
                src={props.newStory.isAnonymous ? heisenberg : milos}
                alt="Foto de Perfil"
                name="photo"
              />
              <p className="post-username">
                @ {props.newStory.isAnonymous ? "Anônimo" : "Ricardo Milos"}
              </p>
            </div>
            <div className="post-dateInfo">
              <img src={calendar} alt="Icone calendario" />
              <p className="post-date">{new Date().toLocaleDateString()}</p>
            </div>
          </header>
          <form className="new-post-content-container">
            <input
              type="text"
              className="post-title"
              id="storyTitle"
              placeholder="Adicione um título"
              onChange={handleChange}
              name="title"
              value={props.newStory.title}
            ></input>
            <textarea
              type="text"
              className="newPost-content"
              id="storyContent"
              placeholder="Conte sua historia..."
              onChange={handleChange}
              name="content"
              value={props.newStory.content}
            ></textarea>

            <div className="switch-container">
              <div id="switch-wrapper">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={props.newStory.isAnonymous}
                    name="isAnonymous"
                    onChange={handleChange}
                  ></input>
                  <span className="slider round"></span>
                </label>
                <p id="anon-status">
                  {props.newStory.isAnonymous
                    ? "Modo anônimo ativado"
                    : "Modo anônimo desativado"}
                </p>
              </div>

              <button
                id="post-btn"
                className="newStory-main-btn"
                type="button"
                onClick={handleSubmit}
              >
                Postar
              </button>
            </div>
          </form>
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
}

export default NovaHistoria;
