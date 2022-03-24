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

function Home() {
  const [navState, setNavState] = useState(1);
  const [showState, setShowState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [newStoryTitle, setNewStoryTitle] = useState("");
  const [newStorycontent, setNewStoryContent] = useState("");
  const [storyUserPhoto, setStoryUserPhoto] = useState("");
  const [storyCounter, setStoryCounter] = useState(1);
  const [posts, setPosts] = useState([
    <Post
      title="O dia que virei um meme"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae aliquam, quia rerum pariatur nostrum numquam voluptate quibusdam iste est! Ducimus illum expedita, quae laboriosam doloremque autem animi aperiam sit tempore iusto quidem obcaecati molestias distinctio iure facere, veritatis officiis magni quasi? Nam minima dolore tempore maxime optio quasi vero voluptatem"
      storyUserPhoto={milos}
    />,
  ]);

  const createStory = async () => {
    await setPosts((posts) => [
      ...posts,
      <Post
        title={newStoryTitle}
        content={newStorycontent}
        storyUserPhoto={storyUserPhoto}
      ></Post>,
    ]);
  };
  return (
    <div className="page-container" id="home-page-id">
      <Navbar navState={navState} posts={posts.length} />
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
                  setNewStoryTitle={setNewStoryTitle}
                  setNewStoryContent={setNewStoryContent}
                  onClose={() => {
                    setIsOpen(0);
                    document.getElementById("root").style.filter = "blur(0px)";
                  }}
                  createStory={createStory}
                  setStoryUserPhoto={setStoryUserPhoto}
                ></NovaHistoria>
                <p id="novaHistoria" onClick={() => setIsOpen(!isOpen)}>
                  Nova historia{" "}
                </p>
              </div>
            </div>
            {posts}
            {/* <button className="main-btn">{newStoryTitle}</button> */}
            {/* <img src={storyUserPhoto} alt="" /> */}
          </div>
          <Ad />
        </main>
      </div>
    </div>
  );
}

export default Home;
