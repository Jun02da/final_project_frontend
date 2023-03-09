import React from "react";
import "./css/list.css";
import img011 from "../src/img/img01.png";

function image(props) {
  return (
    <div>
      <div className="image_item">
        <img className="img_item" src={img011} alt="img0212" />
      </div>
    </div>
  );
}

export default image;
