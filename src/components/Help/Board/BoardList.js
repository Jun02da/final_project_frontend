import React from "react";
import BoardItem from "./BoardItem.js";
/*
    map을 이용해 동적인 List를 반영할 수 있게 한다
    items를 매개변수로 받아서 각 원소를 item.js의 item 매개변수로 넘겨준다
*/
function BoardList({ items, showDeleteButton = false, handleDeleteItem }) {
  return (
    <div>
      {items.map((item) => (
        <BoardItem
          item={item}
          showDeleteButton={showDeleteButton}
          key={item.notice_id}
          handleDeleteItem={handleDeleteItem}
        />
      ))}

      <hr />
    </div>
  );
}

export default BoardList;
