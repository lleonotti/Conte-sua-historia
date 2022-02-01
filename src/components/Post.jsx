import React from "react";
import calendar from "../assets/calendar-icon.svg";
import "./Post.css";
import milos from "../assets/milos.jpg";
import heart from "../assets/heart-icon.svg";
import thumb from "../assets/thumb-icon.svg";
import star from "../assets/star-icon.svg";
import share from "../assets/share-icon.svg";
import Reaction from "./Reaction";
import Tag from "./Tag";

function Post() {
  return (
    <div className="postAndtags-container">
      <section className="tags-container">
        <div className="tags-left">
          <Tag tag="yolo" />
          <Tag tag="yolo" />
          <Tag tag="yolo" />
        </div>
        <Tag src={share} />
      </section>
      <div className="post-container">
        <header className="post-header">
          <div className="post-userInfo">
            <img
              className="post-image-container"
              src={milos}
              alt="Foto de Perfil"
            />
            <p className="post-username">@ Ricardo Milos</p>
          </div>
          <div className="post-dateInfo">
            <img src={calendar} alt="Icone calendario" />
            <p className="post-date">19/01/2022</p>
          </div>
        </header>
        <section className="post-content-container">
          <p className="post-title">O dia que virei um meme</p>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            autem iure ipsa minima quod culpa animi facilis laborum iste totam
            corporis ab illo officia cumque corrupti at velit, soluta adipisci
            ex neque, tempora earum perferendis repudiandae. Neque laudantium
            rem, beatae nemo, fugit accusantium assumenda officia, quisquam
            expedita nobis quae ipsam molestias necessitatibus commodi. Illo
            aliquam, voluptatem hic explicabo a, quibusdam aliquid at sunt velit
            autem praesentium provident veniam debitis adipisci quis accusamus
            omnis asperiores itaque! Quibusdam unde similique maxime libero rem?
            Sequi ut aliquid perspiciatis odio ex aspernatur reprehenderit
            exercitationem sapiente, quod tempore excepturi, voluptate quos,
            natus numquam minima sint eius? Aliquam ipsam soluta earum
            doloribus, quos itaque minus praesentium libero cumque beatae nulla
            animi maiores quo architecto ut iusto distinctio debitis, sed
            nostrum! Illo vel doloribus officia sunt, ea, rem magni maxime
            voluptate porro, laudantium ducimus. Sit delectus, corporis fuga
            praesentium reiciendis et quos non asperiores aut libero numquam
            modi, perferendis, dolor laboriosam. Distinctio qui voluptates, odit
            reprehenderit porro amet esse officiis delectus magnam doloremque
            sapiente, minima quam fugit, enim ullam eaque in dicta fuga.
            Nesciunt voluptate nostrum fugiat doloremque ullam magnam suscipit
            culpa, vitae quos minus alias corporis? At eveniet, odit
            necessitatibus aperiam maxime ratione quidem alias sunt?
          </p>
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
