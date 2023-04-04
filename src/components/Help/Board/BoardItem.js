import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/BoardItem.css";
/*
    이 함수는 item을 받아서
    해당 item의 id, title, createdAt, name을
    박스에 담아 출력한다
*/
function BoardItem({ item, showDeleteButton, handleDeleteItem }) {
  // 년-월-일
  const simpleCreated_at = item.created_at.substr(0, 10);
  const simpleModified_at = item.modified_at.substr(0, 10);
  // 년-월-일 시:분:초
  const detailCreated_at =
    simpleCreated_at + " " + item.created_at.substr(11, 18);
  const detailModified_at =
    simpleModified_at + " " + item.modified_at.substr(11, 18);

  const movePage = useNavigate();

  function goBoardDetail() {
    // 페이지를 넘어가면서 state(데이터)도 같이 넘긴다
    movePage("/BoardDetail", {
      state: {
        notice_id: item.notice_id,
        title: item.title,
        created_at: detailCreated_at,
        modified_at: detailModified_at,
        content: item.content,
      },
    });
  }
  function handleDelete(e) {
    e.stopPropagation();
    handleDeleteItem(item.notice_id);
  }
  return (
    <div className="BoardListContent" onClick={goBoardDetail}>
      <span className="BoardListContentId">{item.notice_id}</span>
      <span className="BoardListContentTitle">{item.title}</span>
      <span className="BoardListContentCreateAt">{simpleCreated_at}</span>
      <span className="BoardListContentName">{simpleModified_at}</span>
      {showDeleteButton && (
        <button className="Announcement-delete" onClick={handleDelete}>
          x
        </button>
      )}
    </div>
  );
}
export default BoardItem;
