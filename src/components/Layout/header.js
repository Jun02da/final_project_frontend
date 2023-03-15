import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import Login from "../../login";

export default function Header() {
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

  function goLogin() {
    movePage("/LoginTest");
  }
  function goHome() {
    movePage("/");
  }
  return (
    <header>
      <div>
        <nav className="NavMenu">
          <Login />
          <button onClick={goMypage} className="NavMenuTitle">
            마이페이지 이동
          </button>
          <button onClick={goBoard} className="NavMenuTitle">
            고객지원
          </button>
          <button onClick={goAdmin} className="NavMenuTitle">
            관리자페이지
          </button>
        </nav>

        <br />

        <div onClick={goHome}>
          <h1 className="Title">P H O P O</h1>
        </div>
      </div>
    </header>
  );
}
