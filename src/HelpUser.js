import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HelpBoard from "./components/Help/Board";
import HelpFAQ from "./components/Help/FAQ";
import HelpCommunication from "./components/Help/Communication";
import Login from "./login";
import banner from "./image/HelpHeaderBanner.jpg";
import Footer from "./components/Layout/footer";
import "./css/HelpHeader.css";

export default function HelpUser() {
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

  // 3개중 1개만 true로 설정하여서 클릭한 1개만 나오도록 설정
  const [showHelpBoard, setShowHelpBoard] = useState(true);
  const [showHelpFAQ, setShowHelpFAQ] = useState(false);
  const [showHelpCommunication, setShowHelpCommunication] = useState(false);

  const onlyShowHelpBoard = () => {
    setShowHelpBoard(true);
    setShowHelpFAQ(false);
    setShowHelpCommunication(false);
  };
  const onlyShowHelpFAQ = () => {
    setShowHelpBoard(false);
    setShowHelpFAQ(true);
    setShowHelpCommunication(false);
  };
  const onlyShowHelpCommunication = () => {
    setShowHelpBoard(false);
    setShowHelpFAQ(false);
    setShowHelpCommunication(true);
  };

  const movePage = useNavigate();

  function goHome() {
    movePage("/");
  }
  function goMemberShip() {
    movePage("/membership");
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

  return (
    <div>
      <div id="SubHeaderLayout">
        <div onClick={goHome} className="SubLogo">
          PHOPO
        </div>
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
      </div>
      {/* 고객지원 배너 이미지 */}
      <div id="HelpHeaderBanner">
        <img src={banner} alt="banner" id="HelpHeaderBannerImg" />
      </div>
      {/* 고객지원 내용 */}
      <div id="HelpHeaderMenuSection">
        <button onClick={onlyShowHelpBoard} id="HelpHeaderMenu" autoFocus>
          공지사항
        </button>
        <button onClick={onlyShowHelpFAQ} id="HelpHeaderMenu">
          FAQ
        </button>
        <button onClick={onlyShowHelpCommunication} id="HelpHeaderMenu">
          문의
        </button>
      </div>
      <div>
        {showHelpBoard && <HelpBoard />}
        {showHelpFAQ && <HelpFAQ />}
        {showHelpCommunication && <HelpCommunication />}
      </div>
      <Footer />
    </div>
  );
}
