import React, { useState, useEffect } from "react";
import "../../css/MainHeader.css";
import { useNavigate } from "react-router-dom";
import Login from "../../login";

export default function Header() {
  const movePage = useNavigate();
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("token") === "admin")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAdmin(Boolean(localStorage.getItem("token") === "admin"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  function handleLoginSuccess() {
    setIsAdmin(true);
  }
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

  return (
    <header>
      <div>
        <nav className="NavMenu">
          <Login onLoginSuccess={handleLoginSuccess} />
          <button onClick={goMypage} className="NavMenuTitle">
            마이페이지
          </button>
          <button onClick={goBoard} className="NavMenuTitle">
            고객지원
          </button>
          {isAdmin && (
            <button onClick={goAdmin} className="NavMenuTitle">
              관리자페이지
            </button>
          )}
        </nav>

        <br />

        <div onClick={goHome}>
          <h1 className="Title">P H O P O</h1>
        </div>
      </div>
    </header>
  );
}
