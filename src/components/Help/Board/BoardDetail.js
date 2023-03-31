import React from "react";
import Header from "../../Layout/HelpHeader.js";
import Footer from "../../Layout/footer.js";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../css/BoardDetail.css";

export function BoardDetail() {
  // BoardItem에서 클릭한 데이터를 받음
  const location = useLocation();
  const notice_id = location.state.notice_id;
  const title = location.state.title;
  const created_at = location.state.created_at;
  const modified_at = location.state.modified_at;
  const content = location.state.content;

  const movePage = useNavigate();

  function goHelpUser() {
    movePage("/HelpUser");
  }
  return (
    <div>
      <Header />
      <div id="BoardDetailSection">
        <button id="BoardWriteButton" onClick={goHelpUser}>
          목록
        </button>
        <div id="BoardDetailSectionContent" key={notice_id}>
          <div id="BoardDetailTitle">{title}</div>
          <div id="BoardDetailCreateAt">작성일: {created_at}</div>
          <div id="BoardDetailCreateAt">수정일: {modified_at}</div>
          <hr />
          <div id="BoardDetailContent">{content}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BoardDetail;
