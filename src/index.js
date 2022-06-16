import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NovaHistoria from "./components/NovaHistoria";
import MyStories from "./pages/MyStories";
import Story from "./components/Story";
import Missing from "./pages/Missing";
import "./index.css";

ReactDOM.render(
    <Router basename="/Conte-sua-historia">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/myStories" element={<MyStories />} />
            <Route path="/story" element={<Story />} />
            <Route path="/new" element={<NovaHistoria />} />
            <Route path="/*" element={<Missing />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);
