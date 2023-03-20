import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/BoardItem.css";
/*
    이 함수는 item을 받아서
    해당 item의 id, title, createdAt을
    박스에 담아 출력한다
*/
function BoardItem({ item }) {
  const movePage = useNavigate();

  function goBoardDetail() {
    movePage("/BoardDetail", {
      state: {
        id: item.id,
        title: item.title,
        createdAt: item.createdAt,
        name: item.name,
      },
    });
  }

  return (
    <div className="BoardListContent" onClick={goBoardDetail}>
      <span>{item.id}</span>
      <span className="BoardListContentTitle">{item.title}</span>
      <span>{item.createdAt}</span>
      <span>{item.name}</span>
    </div>
  );
}
export default BoardItem;
