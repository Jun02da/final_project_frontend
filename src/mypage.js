import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MypageImgslider from "./components/MypageImgslider";
import MypageBio from "./components/MyPage/Bio";
import MypageDashboard from "./components/MyPage/Dashboard";
import "./css/mypage.css";
import "./css/MyPageHeader.css";
import Footer from "./components/Layout/footer";
import Login from "./login";
//마이페이지 기능 버튼
import { Button } from "react-bootstrap";

export default function Mypage() {
  const stat = [{ id: 1, bookmark: 123, views: 18449, post: 130 }];

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
  const [showMypageImgslider, setShowMypageImgslider] = useState(true);
  const [showMypageBio, setShowMypageBio] = useState(false);
  const [showMypageDashboard, setShowMypageDashboard] = useState(false);

  const onlyShowMypageImgslider = () => {
    setShowMypageImgslider(true);
    setShowMypageBio(false);
    setShowMypageDashboard(false);
  };
  const onlyShowMypageBio = () => {
    setShowMypageImgslider(false);
    setShowMypageBio(true);
    setShowMypageDashboard(false);
  };
  const onlyShowMypageDashboard = () => {
    setShowMypageImgslider(false);
    setShowMypageBio(false);
    setShowMypageDashboard(true);
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
  const userName = "Han Yongjae";

  return (
    <div>
      <>
        {/* === 헤드 부분 === */}
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
        {/* 유저에 따라서 이름이 변경되야함 */}
        <div className="mypage_menu">
          <Link to="/mypage">
            <p className="mypage_id">{userName}</p>
          </Link>
          <Button
            variant="dark"
            size="lg"
            className="button_active"
            onClick={onlyShowMypageImgslider}
          >
            게시물
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            className="button_active"
            onClick={onlyShowMypageBio}
          >
            정보
          </Button>
          {/* Dashboard 페이지로 이동 추가 */}
          <Button
            variant="outline-dark"
            size="lg"
            className="button_active"
            onClick={onlyShowMypageDashboard}
          >
            통계
          </Button>
        </div>
        {/* 한줄소개 */}
        <p className="AboutMe">
          이곳은 한줄로 적는 자기소개 구역입니다 테스트를 해야하니 아무말이나
          적어봅니다 가나다라마바사
        </p>
        {/* Dashboard 페이지로 이동 추가 */}
        <div className="stat_set">
          <div className="stat" onClick={onlyShowMypageDashboard}>
            <p className="stat_2">총 즐겨찾기 수</p>
            <p className="stat_1">{stat[0].bookmark}회</p>
          </div>

          <div className="stat" onClick={onlyShowMypageDashboard}>
            <p className="stat_2">누적 조회수</p>
            <p className="stat_1">{stat[0].views}회</p>
          </div>

          <div className="stat" onClick={onlyShowMypageDashboard}>
            <p className="stat_2">전체 게시물</p>
            <p className="stat_1">{stat[0].post}개</p>
          </div>
        </div>
      </>
      {/* === 내용 부분 === */}
      <div>
        {showMypageImgslider && <MypageImgslider />}
        {showMypageBio && <MypageBio isLoggedIn={isLoggedIn} />}
        {showMypageDashboard && <MypageDashboard />}
      </div>
      <Footer />
    </div>
  );
}
