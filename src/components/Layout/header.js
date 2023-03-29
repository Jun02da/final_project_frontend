import React, { useState, useEffect } from "react";
import "../../css/MainHeader.css";
import { useNavigate } from "react-router-dom";
import Login from "../../login";

export default function Header() {
  const movePage = useNavigate();
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("token") === "admin")
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAdmin(Boolean(localStorage.getItem("token") === "admin"));
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  function handleLoginSuccess() {
    setIsAdmin(true);
    setIsLoggedIn(true);
  }
  function goMypage() {
    movePage("/mypage");
  }

  function goHelpUser() {
    movePage("/HelpUser");
  }
  function goAdmin() {
    movePage("/Admin");
  }
  function goHome() {
    movePage("/");
  }
  function goMemberShip() {
    movePage("/membership");
  }

  return (
    <header>
      <div>
        <nav className="NavMenu">
          <Login onLoginSuccess={handleLoginSuccess} />

          {isLoggedIn ? null : (
            <button onClick={goMemberShip} className="NavMenuTitle">
              회원가입
            </button>
          )}
          {isLoggedIn && (
            <button onClick={goMypage} className="NavMenuTitle">
              마이페이지
            </button>
          )}
          <button onClick={goHelpUser} className="NavMenuTitle">
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
