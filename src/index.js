import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Home from "./pages/Home";
import Ad from "./components/AdBox";
import Test from "./components/Test.jsx";
import NovaHistoria from "./components/NovaHistoria";
import Perfil from "./components/Perfil";
import MyStories from "./pages/MyStories";
import Story from "./components/Story";
import Missing from "./pages/Missing";
import "./index.css";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="*" element={<Missing />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myStories" element={<MyStories />} />
      <Route path="/story" element={<Story />} />
      <Route path="/new" element={<NovaHistoria />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
