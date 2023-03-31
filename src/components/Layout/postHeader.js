import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../../css/MyPageHeader.css";
import "../../css/mypage.css";
import Login from "../../login";
//마이페이지 기능 버튼
// import { Button } from "react-bootstrap";

// //마이페이지 기능 버튼 아래 아이콘들
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";

export default function MyPageHeader() {
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("token") === "admin")
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAdmin(Boolean(localStorage.getItem("token") === "admin"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
  function goBio() {
    movePage("/Bio");
    // // 권한이 있는 경우 Bio
    // // 권한이 없는 경우 OtherBio
    // if (사용자 === 권한있는 사용자){
    //   movePage("/Bio");
    // } else {
    //   movePage("/OtherBio")
    // }
  }
  function goDashboard() {
    movePage("/Dashboard");
  }

  return (
    <>
      {/* 고정 부분 */}
      <div id="SubHeaderLayout">
        <div onClick={goHome} className="SubLogo">
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
          {isAdmin && (
            <button onClick={goAdmin} className="NavMenuTitle">
              관리자페이지
            </button>
          )}
        </nav>
        <br />
      </div>
    </>
  );
}
