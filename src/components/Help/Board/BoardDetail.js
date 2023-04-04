import React, { useState, useEffect } from "react";
import Footer from "../../Layout/footer.js";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../../../login.js";
import banner from "../../../image/HelpHeaderBanner.jpg";
import "../../../css/BoardDetail.css";
import "../../../css/HelpHeader.css";

export default function BoardDetail() {
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
  // BoardItem에서 클릭한 데이터를 받음
  const location = useLocation();
  const notice_id = location.state.notice_id;
  const title = location.state.title;
  const created_at = location.state.created_at;
  const modified_at = location.state.modified_at;
  const content = location.state.content;

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
      <br />
      {/* 고객지원 배너 이미지 */}
      <div id="HelpHeaderBanner">
        <img src={banner} alt="banner" id="HelpHeaderBannerImg" />
      </div>
      <div id="BoardDetailSection">
        <h3>공지사항</h3>
        <div id="BoardDetailSectionContent" key={notice_id}>
          <div id="BoardDetailTitle">{title}</div>

          <div id="BoardDetailContent">{content}</div>
        </div>
        <div id="BoardDetailCreateAt">
          <span>작성일 : {created_at}</span>&nbsp;&nbsp;
          <span>수정일 : {modified_at}</span>
        </div>
        <button id="BoardWriteButton" onClick={goHelpUser}>
          목록
        </button>
      </div>
      <Footer />
    </div>
  );
}
