import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HelpBoard from "./components/Help/Board";
import HelpFAQ from "./components/Help/FAQ";
import HelpCommunication from "./components/Help/Communication";
import Login from "./login";
import banner from "./image/HelpHeaderBanner.jpg";
import Footer from "./components/Layout/footer";
import "./css/HelpHeader.css";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function HelpUser() {
  const [postAllData, setPostAllData] = useState();
  const [userMeData, setUserMeData] = useState();
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("token") === "admin")
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  useEffect(() => {
    axios
      .get("http://192.168.0.209:8090/user/me")
      .then((response) => {
        setUserMeData(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://192.168.0.209:8090/post/all")
      .then((response) => {
        setPostAllData(response.data);
      })
      .catch((err) => console.log(err));

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
  const [activeButton, setActiveButton] = useState("공지사항"); // 현재 활성화된 버튼 상태

  const buttonClickHelpBoard = () => {
    // 공지사항 버튼 클릭시 실행할 함수
    setActiveButton("공지사항");
    onlyShowHelpBoard();
  };

  const buttonClickHelpFAQ = () => {
    // FAQ 버튼 클릭시 실행할 함수
    setActiveButton("FAQ");
    onlyShowHelpFAQ();
  };

  const buttonClickHelpCommunication = () => {
    // 문의 버튼 클릭시 실행할 함수
    setActiveButton("문의");
    onlyShowHelpCommunication();
  };
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
    const postMe = postAllData.filter(
      (postAll) => postAll.email === userMeData.email
    );
    movePage("/mypage", {
      state: {
        category: postMe.category,
        content: postMe.content,
        created_at: postMe.created_at,
        postEmail: postMe.email,
        image_url: postMe.image_url,
        likeCnt: postMe.likeCnt,
        modified_at: postMe.modified_at,
        post_id: postMe.post_id,
        birth: userMeData.birth,
        userEmail: userMeData.email,
        followerCnt: userMeData.followerCnt,
        followingCnt: userMeData.followingCnt,
        gender: userMeData.gender,
        introduce: userMeData.introduce,
        nickname: userMeData.nickname,
        password: userMeData.password,
        phone: userMeData.phone,
        proImage: userMeData.proImage,
        role: userMeData.role,
        visitCnt: userMeData.visitCnt,
        website: userMeData.website,
      },
    });
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
        {/* 마이페이지 버튼 사용 */}
        <Button
          variant={activeButton === "공지사항" ? "dark" : "outline-dark"}
          size="lg"
          className="button_active"
          onClick={buttonClickHelpBoard}
        >
          공지사항
        </Button>
        <Button
          variant={activeButton === "FAQ" ? "dark" : "outline-dark"}
          size="lg"
          className="button_active"
          onClick={buttonClickHelpFAQ}
        >
          FAQ
        </Button>
        {/* Dashboard 페이지로 이동 추가 */}
        <Button
          variant={activeButton === "문의" ? "dark" : "outline-dark"}
          size="lg"
          className="button_active"
          onClick={buttonClickHelpCommunication}
        >
          문의
        </Button>
      </div>
      <br />
      <div>
        {showHelpBoard && <HelpBoard />}
        {showHelpFAQ && <HelpFAQ />}
        {showHelpCommunication && <HelpCommunication />}
      </div>
      <br />
      <Footer />
    </div>
  );
}
