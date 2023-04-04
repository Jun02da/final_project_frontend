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

export default function HelpUser() {
  const [postData, setPostData] = useState();
  const [userData, setUserData] = useState();
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("token") === "admin")
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  useEffect(() => {
    //post 테이블에서 이미지 주소와 카테고리 정보 가져오기
    axios
      .get("http://192.168.0.209:8090/post")
      .then((response) => {
        setPostData(response.data); // postData의 데이터 구조를 post 테이블의 데이터 구조로 변경
      })
      .catch((err) => console.log(err));
    //user 테이블에서 프로필 사진과 닉네임 가져오기
    axios
      .get("http://192.168.0.209:8090/user/all")
      .then((response) => {
        setUserData(response.data); // userData의 데이터 구조를 user 테이블의 데이터 구조로 변경
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
    postData.map((post) => {
      const user = userData.find((user) => user.email === post.email);
      movePage("/mypage", {
        state: {
          category: post.category,
          content: post.content,
          created_at: post.created_at,
          postEmail: post.email,
          image_url: post.image_url,
          likeCnt: post.likeCnt,
          modified_at: post.modified_at,
          post_id: post.post_id,
          birth: user.birth,
          userEmail: user.email,
          followerCnt: user.followerCnt,
          followingCnt: user.followingCnt,
          gender: user.gender,
          introduce: user.introduce,
          nickname: user.nickname,
          password: user.password,
          phone: user.phone,
          proImage: user.proImage,
          role: user.role,
          visitCnt: user.visitCnt,
          website: user.website,
        },
      });
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
