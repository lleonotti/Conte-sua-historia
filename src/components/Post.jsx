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

function Post(props) {
    return (
        <div className="postAndtags-container">
            <section className="tags-container">
                <div className="tags-left">
                    {props.tag1 !== "" && <Tag tag={props.tag1} />}
                    {props.tag2 !== "" && <Tag tag={props.tag2} />}
                    {props.tag3 !== "" && <Tag tag={props.tag3} />}
                </div>
                <Tag src={share} />
            </section>
            <div className="post-container">
                <header className="post-header">
                    <div className="post-userInfo">
                        <img
                            className="post-image-container"
                            src={props.storyUserPhoto}
                            alt="Foto de Perfil"
                        />
                        <p className="post-username">{"@ " + props.userName}</p>
                    </div>
                    <div className="post-dateInfo">
                        <img src={calendar} alt="Icone calendario" />
                        <p className="post-date">
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </header>
                <section className="post-content-container">
                    <p className="post-title">{props.title}</p>
                    <p className="post-content">{props.content}</p>
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
