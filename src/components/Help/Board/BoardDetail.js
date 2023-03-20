import React from "react";
import Header from "../../Layout/HelpHeader.js";
import Footer from "../../Layout/footer.js";
import { useLocation, useNavigate } from "react-router-dom";

export function BoardDetail() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const createdAt = location.state.createdAt;
  const name = location.state.name;

  const movePage = useNavigate();

  function goBoard() {
    movePage("/Board");
  }
  return (
    <div>
      <Header />
      <button id="BoardWriteButton" onClick={goBoard}>
        목록
      </button>
      <h3>BoardDetail 페이지 입니다</h3>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>createdAt: {createdAt}</div>
      <div>name: {name}</div>
      <Footer />
    </div>
  );
}

export default BoardDetail;
