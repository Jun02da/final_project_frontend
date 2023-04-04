import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../css/MyPageHeader.css";
import "../../css/mypage.css";
import Login from "../../login";
//마이페이지 기능 버튼
import { Button } from "react-bootstrap";


const stat = [{ id: 1, bookmark: 123, views: 18449, post: 130 }];

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
  const userName = "Han Yongjae";

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
      {/* 유저에 따라서 이름이 변경되야함 */}
      <div className="mypage_menu">
        <Link to="/mypage">
          <p className="mypage_id">{userName}</p>
        </Link>
        <Button
          variant="dark"
          size="lg"
          className="button_active"
          onClick={goMypage}
        >
          게시물
        </Button>
        <Button
          variant="outline-dark"
          size="lg"
          className="button_active"
          onClick={goBio}
        >
          정보
        </Button>
        {/* Dashboard 페이지로 이동 추가 */}
        <Button
          variant="outline-dark"
          size="lg"
          className="button_active"
          onClick={goDashboard}
        >
          통계
        </Button>
      </div>
      {/* 한줄소개 */}
      <p className="AboutMe">
        이곳은 한줄로 적는 자기소개 구역입니다 테스트를 해야하니 아무말이나
        적어봅니다 가나다라마바사
      </p>

      {/* sns 아이콘 */}
      {/* <div className="Icon_set">
        <InstagramIcon className="Icon" sx={{ fontSize: 30 }} />
        <FacebookIcon className="Icon" sx={{ fontSize: 30 }} />
        <TwitterIcon className="Icon" sx={{ fontSize: 30 }} />
      </div> */}
      {/* Dashboard 페이지로 이동 추가 */}
      <div className="stat_set" onClick={goDashboard}>
        <div className="stat">
          <p className="stat_2">총 즐겨찾기 수</p>
          <p className="stat_1">{stat[0].bookmark}회</p>
        </div>

        <div className="stat">
          <p className="stat_2">누적 조회수</p>
          <p className="stat_1">{stat[0].views}회</p>
        </div>

        <div className="stat">
          <p className="stat_2">전체 게시물</p>
          <p className="stat_1">{stat[0].post}개</p>
        </div>
      </div>
    </>
  );
}
