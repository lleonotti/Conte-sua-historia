import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import Header from "../components/Header";
import Post from "../components/Post";
import Ad from "../components/AdBox";
import NovaHistoria from "../components/NovaHistoria";
import plusBtn from "../assets/plusBtn.svg";
import Perfil from "../components/Perfil";
import milos from "../assets/milos.jpg";
import { v4 as uuidv4 } from "uuid";

function Home() {
    const [navState, setNavState] = useState(1);
    const [showState, setShowState] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [storyUserPhoto, setStoryUserPhoto] = useState("");
    const [storyCounter, setStoryCounter] = useState(1);
    const [newStory, setNewStory] = useState({
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
    const [posts, setPosts] = useState([
        <Post
            key={uuidv4()}
            userName={newStory.userName}
            title="O dia que virei um meme"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae aliquam, quia rerum pariatur nostrum numquam voluptate quibusdam iste est! Ducimus illum expedita, quae laboriosam doloremque autem animi aperiam sit tempore iusto quidem obcaecati molestias distinctio iure facere, veritatis officiis magni quasi? Nam minima dolore tempore maxime optio quasi vero voluptatem"
            storyUserPhoto={milos}
            tag1="yolo"
            tag2="life"
            tag3="meme"
        />,
    ]);

    return (
        <div className="page-container" id="home-page-id">
            <Navbar navState={navState} posts={posts.length} />
            <Header navState={navState} />
            <div className="header-content-container">
                <main className="main-section" id="main-section-id">
                    <div className="content-container">
                        <div className="feed-header-container">
                            <div className="feed-greeting">
                                <h2 id="feed-title">Seu feed</h2>
                                <p id="feed-subtitle">
                                    Bem vindo de volta, Ricardo Milos!
                                </p>
                            </div>
                            <div
                                className="novaHistoria-container"
                                id="novaHistoria-container-id"
                            >
                                <img
                                    src={plusBtn}
                                    alt="Botao nova historia"
                                    id="btn-newStory"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                                <NovaHistoria
                                    open={isOpen}
                                    onClose={() => {
                                        setIsOpen(0);
                                        document.getElementById(
                                            "root"
                                        ).style.filter = "blur(0px)";
                                    }}
                                    newStory={newStory}
                                    setNewStory={setNewStory}
                                    setPosts={setPosts}
                                ></NovaHistoria>
                                <p
                                    id="novaHistoria"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Nova historia{" "}
                                </p>
                            </div>
                        </div>
                        {posts}
                    </div>
                    <Ad />
                </main>
            </div>
        </div>
    );
}

export default Home;
