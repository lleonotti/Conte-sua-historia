import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Home from "./pages/Home";
import Ad from "./components/AdBox";
import Test from "./components/Test.jsx";
import NovaHistoria from "./components/NovaHistoria";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
