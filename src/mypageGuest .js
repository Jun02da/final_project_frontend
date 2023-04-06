import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MpImgSliderGuest from "./components/MpImgSliderGuest";
import MypageBio from "./components/MyPage/Bio";
import MypageDashboard from "./components/MyPage/Dashboard";
import "./css/mypage.css";
import "./css/MyPageHeader.css";
import Footer from "./components/Layout/footer";
import Login from "./login";
import FollowBut from "./components/FollowBut";
//마이페이지 기능 버튼
import { Button } from "react-bootstrap";
import axios from "axios";

// 마이페이지 게스트 페이지입니다
export default function MypageGuest() {
  const [postAllData, setPostAllData] = useState();
  const [userMeData, setUserMeData] = useState();
  const location = useLocation();
  // const category = location.state.category;
  // const content = location.state.content;
  // const created_at = location.state.created_at;
  // const postEmail = location.state.postEmail;
  // const image_url = location.state.image_url;
  const likeCnt = location.state.likeCnt;
  // const modified_at = location.state.modified_at;
  // const post_id = location.state.post_id;
  // const birth = location.state.birth;
  const userEmail = location.state.userEmail;
  const followerCnt = location.state.followerCnt;
  const followingCnt = location.state.followingCnt;
  // const gender = location.state.gender;
  const introduce = location.state.introduce;
  const nickname = location.state.nickname;
  // const password = location.state.password;
  // const phone = location.state.phone;
  const proImage = location.state.proImage;
  // const role = location.state.role;
  const visitCnt = location.state.visitCnt;
  // const website = location.state.website;

  // const stat = [{ id: 1, bookmark: 123, views: 18449, post: 130 }];

  const [activeButton, setActiveButton] = useState("게시물"); // 현재 활성화된 버튼 상태
  const buttonClickImgslider = () => {
    setActiveButton("게시물");
    onlyShowMypageImgslider();
    // 게시물 버튼 클릭시 실행할 함수
  };

  const buttonClickMypageBio = () => {
    setActiveButton("정보");
    onlyShowMypageBio();
    // 정보 버튼 클릭시 실행할 함수
  };

  const buttonClickDashboard = () => {
    setActiveButton("통계");
    onlyShowMypageDashboard();
    // 통계 버튼 클릭시 실행할 함수
  };

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
            {isLoggedIn && (
              <button onClick={goHelpUser} className="NavMenuTitle">
                고객지원
              </button>
            )}
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
          <p className="mypage_id">
            {nickname} <FollowBut userEmail={userEmail} />
          </p>
          <Button
            variant={activeButton === "게시물" ? "dark" : "outline-dark"}
            size="lg"
            className="button_active"
            onClick={buttonClickImgslider}
          >
            게시물
          </Button>
          <Button
            variant={activeButton === "정보" ? "dark" : "outline-dark"}
            size="lg"
            className="button_active"
            onClick={buttonClickMypageBio}
          >
            정보
          </Button>
          {/* Dashboard 페이지로 이동 추가 */}
          <Button
            variant={activeButton === "통계" ? "dark" : "outline-dark"}
            size="lg"
            className="button_active"
            onClick={buttonClickDashboard}
          >
            통계
          </Button>
        </div>
        {/* 한줄소개 */}
        {/* <p className="AboutMe">{introduce}</p> */}
        {/* Dashboard 페이지로 이동 추가 */}
        {/* <div className="stat_set">
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
        </div> */}
      </>
      {/* === 내용 부분 === */}
      <div>
        {showMypageImgslider && (
          <MpImgSliderGuest userEmail={userEmail} location={location} />
        )}
        {showMypageBio && (
          <MypageBio
            isLoggedIn={isLoggedIn}
            proImage={proImage}
            introduce={introduce}
            userEmail={userEmail}
          />
        )}
        {showMypageDashboard && (
          <MypageDashboard
            visitCnt={visitCnt}
            nickname={nickname}
            likeCnt={likeCnt}
            userEmail={userEmail}
            followerCnt={followerCnt}
            followingCnt={followingCnt}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
