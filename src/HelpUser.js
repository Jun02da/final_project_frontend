import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import HelpBoard from "./components/Help/Board";
import HelpFAQ from "./components/Help/FAQ";
import HelpCommunication from "./components/Help/Communication";
import Login from "./login";
import Footer from "./components/Layout/footer";
import "./css/HelpHeader.css";
import banner from "./image/HelpHeaderBanner.jpg";
import axios from "axios";

export default function HelpUser() {
  const [postAllData, setPostAllData] = useState();
  const [userMeData, setUserMeData] = useState();
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
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function handleLoginSuccess() {
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
  function goAdmin() {
    movePage("/Admin");
  }

  // 현재 활성화된 버튼 상태
  const [activeButton, setActiveButton] = useState("공지사항");

  // 공지사항 버튼 클릭시 실행할 함수
  const buttonClickHelpBoard = () => {
    setActiveButton("공지사항");
    onlyShowHelpBoard();
  };
  // FAQ 버튼 클릭시 실행할 함수
  const buttonClickHelpFAQ = () => {
    setActiveButton("FAQ");
    onlyShowHelpFAQ();
  };
  // 문의 버튼 클릭시 실행할 함수
  const buttonClickHelpCommunication = () => {
    setActiveButton("문의");
    onlyShowHelpCommunication();
  };

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
          {userMeData && userMeData.email === "admin" && (
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
      <div id="HelpHeaderMenuSection">
        {/* 마이페이지 버튼 활용 */}
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
        {/* 고객지원 내용 */}
        {showHelpBoard && <HelpBoard />}
        {showHelpFAQ && <HelpFAQ />}
        {showHelpCommunication && <HelpCommunication />}
      </div>
      <br />
      <Footer />
    </div>
  );
}
