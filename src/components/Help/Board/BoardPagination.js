import { useState } from "react";
import "../../../css/BoardPagination.css";

export default function Pagination({ page, totalPosts, limit, setPage }) {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  // firstNum의 값과 lastNum은 page가 6번, 11번, 16번 등등
  // 넘어갈때까지 고정적인 값을 갖게 된다.
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  // page와 currPage를 분리시켜 두어 Next 화살표를 누를때
  // setCurrPage가 작동되게 만들어 Page가 6일때 값을 받도록 한다
  return (
    <div id="BoardPaginationDiv">
      <button
        onClick={() => {
          setPage(page - 1);
          setCurrPage(page - 2);
        }}
        disabled={page === 1} // 0페이지는 없기 때문에 막아준다
        className="BoardPaginationLeftArrow"
      >
        &lt;
      </button>
      <button
        onClick={() => setPage(firstNum)}
        aria-current={page === firstNum ? "page" : null}
        className="BoardPaginationButton"
      >
        {firstNum}
      </button>
      {Array(4)
        .fill()
        .map((_, i) => {
          if (i <= 2) {
            return (
              <button
                className="BoardPaginationButton"
                border="true"
                key={i + 1}
                onClick={() => {
                  setPage(firstNum + 1 + i);
                }}
                aria-current={page === firstNum + 1 + i ? "page" : null}
              >
                {firstNum + 1 + i}
              </button>
            );
          } else if (i >= 3) {
            return (
              <button
                className="BoardPaginationButton"
                border="true"
                key={i + 1}
                onClick={() => setPage(lastNum)}
                aria-current={page === lastNum ? "page" : null}
              >
                {lastNum}
              </button>
            );
          }
          return null;
        })}
      <button
        className="BoardPaginationRightArrow"
        onClick={() => {
          setPage(page + 1);
          setCurrPage(page);
        }}
        disabled={page === numPages} // 마지막 페이지이기 떄문에 막음
      >
        &gt;
      </button>
    </div>
  );
}
