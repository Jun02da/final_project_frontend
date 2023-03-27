import BoardList from "./Board/BoardList";
import Header from "../Layout/HelpHeader.js";
import Footer from "../Layout/footer.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BoardPagination from "./Board/BoardPagination.js";
// sampleData로 임시 import
import list from "./Board/sampleData/boardList.json";

function Board() {
  const movePage = useNavigate();

  function goBoardEdit() {
    movePage("/BoardEdit");
  }
  // 데이터 부분
  const [contentInfo, setContentInfo] = useState([]);

  useEffect(() => {
    setContentInfo(list);
  }, []);
  // 페이징 부분
  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };
  return (
    <div>
      <Header />
      <div id="BoardContentDiv">
        {/* === 글쓰기 버튼 부분 === */}
        <button id="BoardWriteButton" onClick={goBoardEdit}>
          글쓰기
        </button>
        {/* === 게시판 헤드 부분 === */}
        <div className="BoardContentHeader">
          <span className="BoardContentHeaderId">번호</span>
          <span className="BoardContentHeaderTitle">제목</span>
          <span className="BoardContentHeaderCreateAt">작성일</span>
          <span className="BoardContentHeaderName">글쓴이</span>
        </div>
        <hr />
        {/* === 게시판 내용 부분 === */}
        <BoardList items={postsData(contentInfo)} />
        {/* === Pagination 부분 === */}
        <BoardPagination
          limit={limit}
          page={page}
          totalPosts={contentInfo.length}
          setPage={setPage}
        />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Board;
