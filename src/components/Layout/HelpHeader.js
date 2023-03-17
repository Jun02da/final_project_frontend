import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/HelpHeader.css";
import Login from "../../login";

export default function HelpHeader() {
  const movePage = useNavigate();

  function goMypage() {
    movePage("/mypage");
  }
  function goBoard() {
    movePage("/Board");
  }
  function goAdmin() {
    movePage("/Admin");
  }
  function goHome() {
    movePage("/");
  }
  function goPageBoard() {
    movePage("/Board");
  }
  function goPageFAQ() {
    movePage("/FAQ");
  }
  function goPageCommunication() {
    movePage("/Communication");
  }
  return (
    <>
      {/* 고정 부분 */}
      <div id="SubHeaderLayout">
        <div onClick={goHome} id="SubLogo">
          PHOPO
        </div>
        <nav className="NavMenu">
          <Login />
          <button onClick={goMypage} className="NavMenuTitle">
            마이페이지
          </button>
          <button onClick={goBoard} className="NavMenuTitle">
            고객지원
          </button>
          <button onClick={goAdmin} className="NavMenuTitle">
            관리자페이지
          </button>
        </nav>
        <br />
      </div>
      {/* 고객지원 내용 */}
      <div id="HelpHeaderMenuSection">
        <hr />
        <span onClick={goPageBoard} id="HelpHeaderMenu">
          게시판
        </span>
        <span onClick={goPageFAQ} id="HelpHeaderMenu">
          FAQ
        </span>
        <span onClick={goPageCommunication} id="HelpHeaderMenu">
          문의
        </span>
        <hr />
      </div>
    </>
  );
}
