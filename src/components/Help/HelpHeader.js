import React from "react";
import Header from "../Layout/header.js";
import { useNavigate } from "react-router-dom";
import "../../css/HelpHeader.css";

export default function HelpHeader() {
  const movePage = useNavigate();

  function goPageBoard() {
    movePage("/Board");
  }
  function goPageFAQ() {
    movePage("/FAQ");
  }
  function goPageAdvice() {
    movePage("/Advice");
  }

  return (
    <div>
      <Header />
      <div id="HelpHeaderMenuSection">
        <hr />
        <span onClick={goPageBoard} id="HelpHeaderMenu">
          게시판
        </span>
        <span onClick={goPageFAQ} id="HelpHeaderMenu">
          FAQ
        </span>
        <span onClick={goPageAdvice} id="HelpHeaderMenu">
          1:1 문의
        </span>
        <hr />
      </div>
    </div>
  );
}
