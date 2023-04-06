import React, { useState, useEffect } from "react";
import Footer from "../../Layout/footer.js";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../../../login.js";
import banner from "../../../image/HelpHeaderBanner.jpg";
import "../../../css/BoardDetail.css";
import "../../../css/HelpHeader.css";
import axios from "axios";
import BoardDetail_Modal from "./BoardDetail_Modal.js";

export default function BoardDetail() {
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
          {isLoggedIn && (
            <button onClick={goHelpUser} className="NavMenuTitle">
              고객지원
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
      <br />
      {/* 고객지원 배너 이미지 */}
      <div id="HelpHeaderBanner">
        <img src={banner} alt="banner" id="HelpHeaderBannerImg" />
      </div>
      <div id="BoardDetailSection">
        <div id="BoardDetailSectionContent" key={notice_id}>
          <div id="BoardDetailTitle">{title}</div>
          <div id="BoardDetailContent">{content}</div>
        </div>
        <div id="BoardDetailCreateAt">
          <span>작성일 : {created_at}</span>&nbsp;&nbsp;
          <span>수정일 : {modified_at}</span>
        </div>
        {userMeData && userMeData.email === "admin" && (
          <BoardDetail_Modal announcement={{ id: notice_id, title, content }} />
        )}
        <button id="BoardWriteButton" onClick={goHelpUser}>
          목록
        </button>
      </div>
      <Footer />
    </div>
  );
}
