import React from "react";
import Header from "../../Layout/HelpHeader.js";
import Footer from "../../Layout/footer.js";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../css/BoardDetail.css";

export function BoardDetail() {
  // BoardItem에서 클릭한 데이터를 받음
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const createdAt = location.state.createdAt;
  const name = location.state.name;
  const content = location.state.content;

  const movePage = useNavigate();

  function goBoard() {
    movePage("/Board");
  }
  return (
    <div>
      <Header />
      <div id="BoardDetailSection">
        <button id="BoardWriteButton" onClick={goBoard}>
          목록
        </button>
        <div id="BoardDetailSectionContent" key={id}>
          <div id="BoardDetailTitle">{title}</div>
          <div id="BoardDetailName">글쓴이: {name}</div>
          <div id="BoardDetailCreateAt">작성일: {createdAt}</div>
          <hr />
          <div id="BoardDetailContent">{content}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BoardDetail;
