import React from "react";
import BoardItem from "./BoardItem.js";
/*
    map을 이용해 동적인 List를 반영할 수 있게 한다
    items를 매개변수로 받아서 각 원소를 item.js의 item 매개변수로 넘겨준다
    slice()를 사용해서 원본을 변형시키지 않고
    reverse()를 사용해서 역순으로 표현해서 최신순으로 제공한다
*/
function BoardList({ items, showDeleteButton = false, handleDeleteItem }) {
  return (
    <div>
      {items
        // .slice(0)
        // .reverse()
        .map((item) => (
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
