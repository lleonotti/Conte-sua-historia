import React from "react";
import "./Reaction.css";

function Reaction({ src }) {
    return (
        <div className="reactions">
            <img
                className="icon-img"
                src={src}
                alt="Icone reacao"
                onClick={() => console.log("Click!")}
            />
        </div>
    );
}

export default Reaction;
