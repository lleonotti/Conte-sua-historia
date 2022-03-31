import React from "react";
import Post from "./Post";

function HistoriaList({ posts }) {
  return posts.map((post) => {
    return <Post key={post} />;
  });
}

export default HistoriaList;
