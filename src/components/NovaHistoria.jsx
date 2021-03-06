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
                    userName={
                        props.newStory.isAnonymous
                            ? "Anônino"
                            : props.newStory.userName
                    }
                    title={props.newStory.title}
                    content={props.newStory.content}
                    storyUserPhoto={
                        props.newStory.isAnonymous ? heisenberg : milos
                    }
                    tag1={props.newStory.tag1}
                    tag2={props.newStory.tag2}
                    tag3={props.newStory.tag3}
                />,
                ...prevPosts,
            ];
        });

        props.setNewStory({
            key: uuidv4,
            userName: "Ricardo Milos",
            title: "",
            content: "",
            isAnonymous: false,
            photo: milos,
            tag1: "",
            tag2: "",
            tag3: "",
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
                        <input
                            className="tags"
                            type="text"
                            placeholder="Tag 1"
                            name="tag1"
                            onChange={handleChange}
                        />
                        <input
                            className="tags"
                            type="text"
                            name="tag2"
                            placeholder="Tag 2"
                            onChange={handleChange}
                        />
                        <input
                            className="tags"
                            type="text"
                            name="tag3"
                            placeholder="Tag 3"
                            onChange={handleChange}
                        />
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
                                src={
                                    props.newStory.isAnonymous
                                        ? heisenberg
                                        : milos
                                }
                                alt="Foto de Perfil"
                                name="photo"
                            />
                            <p className="post-username">
                                @{" "}
                                {props.newStory.isAnonymous
                                    ? "Anônimo"
                                    : "Ricardo Milos"}
                            </p>
                        </div>
                        <div className="post-dateInfo">
                            <img src={calendar} alt="Icone calendario" />
                            <p className="post-date">
                                {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </header>
                    <form className="new-post-content-container">
                        <input
                            type="text"
                            className="new-post-title"
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
