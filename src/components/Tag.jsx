import React from "react";
import "./Tag.css";

function Tag({ tag, src }) {
  if (src == undefined) {
    return (
      <div className="tags">
        <a className="tag-text" href="">
          {"#" + tag}
        </a>
      </div>
    );
  } else {
    return (
      <div className="tags">
        <img src={src} alt="Imagem tag" />
      </div>
    );
  }
}

export default Tag;
