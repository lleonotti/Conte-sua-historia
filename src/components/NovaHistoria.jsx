import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Post.css";
import "./NovaHistoria.css";
import calendar from "../assets/calendar-icon.svg";
import milos from "../assets/milos.jpg";
import heisenberg from "../assets/heisenberg.jpg";
import quit from "../assets/quit-icon.svg";
import Tag from "./Tag";

function NovaHistoria({
  setNewStoryTitle,
  setNewStoryContent,
  open,
  onClose,
  array,
  createStory,
  setStoryUserPhoto,
}) {
  const [anonState, setAnonState] = useState("Modo anônimo desativado");
  const [userAnon, setUserAnon] = useState("Username");
  const [userPic, setUserPic] = useState(milos);
  const [tag1, setTag1] = useState("tag1");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");

  function checkAnonState() {
    if (anonState == "Modo anônimo desativado") {
      setAnonState("Modo anônimo ativado");
      setUserAnon("Anônimo");
      setUserPic(heisenberg);
    } else {
      setAnonState("Modo anônimo desativado");
      setUserAnon("Username");
      setUserPic(milos);
    }
  }

  // const handleChange = (e) => {
  //   setNewStoryData();
  // };

  if (!open) return null;
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
            onClick={onClose}
          />
        </section>
        <div className="newPost-container">
          <header className="post-header">
            <div className="post-userInfo">
              <img
                className="post-image-container"
                src={userPic}
                alt="Foto de Perfil"
              />
              <p className="post-username">@ {userAnon}</p>
            </div>
            <div className="post-dateInfo">
              <img src={calendar} alt="Icone calendario" />
              <p className="post-date">{new Date().toLocaleDateString()}</p>
            </div>
          </header>
          <section className="new-post-content-container">
            <input
              className="post-title"
              id="storyTitle"
              placeholder="Adicione um título"
              onInput={(e) => setStoryTitle(e.target.value)}
            ></input>
            <textarea
              className="newPost-content"
              id="storyContent"
              placeholder="Conte sua historia..."
              onInput={(e) => setStoryContent(e.target.value)}
            ></textarea>

            <div className="switch-container">
              <div id="switch-wrapper">
                <label className="switch">
                  <input
                    type="checkbox"
                    onClick={() => checkAnonState()}
                  ></input>
                  <span className="slider round"></span>
                </label>
                <p id="anon-status">{anonState}</p>
              </div>

              <button
                id="post-btn"
                className="newStory-main-btn"
                type="button"
                onClick={async () => {
                  await setNewStoryTitle(storyTitle);
                  await setNewStoryContent(storyContent);
                  if (anonState == "Modo anônimo ativado")
                    await setStoryUserPhoto(heisenberg);
                  else setStoryUserPhoto(milos);
                  await createStory();
                }}
              >
                Postar
              </button>
            </div>
          </section>
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
}

export default NovaHistoria;
