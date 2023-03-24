import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/BoardItem.css";
/*
    이 함수는 item을 받아서
    해당 item의 id, title, createdAt, name을
    박스에 담아 출력한다
*/
function BoardItem({ item }) {
  const movePage = useNavigate();

  function goBoardDetail() {
    // 페이지를 넘어가면서 state(데이터)도 같이 넘긴다
    movePage("/BoardDetail", {
      state: {
        id: item.id,
        title: item.title,
        createdAt: item.createdAt,
        name: item.name,
        content: item.content,
      },
    });
  }

  return (
    <div className="BoardListContent" onClick={goBoardDetail}>
      <span className="BoardListContentId">{item.id}</span>
      <span className="BoardListContentTitle">{item.title}</span>
      <span className="BoardListContentCreateAt">{item.createdAt}</span>
      <span className="BoardListContentName">{item.name}</span>
    </div>
  );
}
export default BoardItem;
