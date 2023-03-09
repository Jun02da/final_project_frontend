import React from "react";
import "./css/Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar(props) {
  return (
    <div>
      <input type="checkbox" id="menuicon" />
      <label for="menuicon">
        <AiOutlineMenu />
      </label>
      <div className="sidebar">
        <p>내용1</p>
        <p>내용1</p>
        <p>내용1</p>
      </div>
    </div>
  );
}

export default Sidebar;
