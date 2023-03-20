import BoardList from "./Board/BoardList";
import Header from "../Layout/HelpHeader.js";
import Footer from "../Layout/footer.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Board() {
  const [posts, setPosts] = useState([]);
  // 웹에서 서버로 요청 -> 나 리스트 전달해줘
  const getPosts = () => {
    axios
      .get("서버주소") // axios를 통해 HTTP요청을 보내는 코드
      .then((response) => {
        // then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있다
        setPosts(response.data); // 이전에 useState로 생성했던 setPosts함수를 통해 data를 posts에 저장
      });
  };
  useEffect(getPosts, []);
  const list = [
    { id: 1, title: "제목입니다 (1)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 2, title: "제목입니다 (2)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 3, title: "제목입니다 (3)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 4, title: "제목입니다 (4)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 5, title: "제목입니다 (5)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 6, title: "제목입니다 (6)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 7, title: "제목입니다 (7)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 8, title: "제목입니다 (8)", createdAt: "2021.06.30", name: "홍길동" },
    { id: 9, title: "제목입니다 (9)", createdAt: "2021.06.30", name: "홍길동" },
    {
      id: 10,
      title: "제목입니다 (10)",
      createdAt: "2021.06.30",
      name: "홍길동",
    },
  ];
  const movePage = useNavigate();

  function goBoardEdit() {
    movePage("/BoardEdit");
  }
  return (
    <div>
      <Header />
      <div id="BoardContentDiv">
        <BoardList items={list} />
        <button id="BoardWriteButton" onClick={goBoardEdit}>
          글쓰기
        </button>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Board;
