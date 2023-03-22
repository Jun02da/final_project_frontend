import { useState } from "react";
import "../../../css/BoardPagination.css";

export default function Pagination({ page, totalPosts, limit, setPage }) {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;

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
        &lt;&lt;
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
        })}
      <button
        className="BoardPaginationRightArrow"
        onClick={() => {
          setPage(page + 1);
          setCurrPage(page);
        }}
        disabled={page === numPages} // 마지막 페이지이기 떄문에 막음
      >
        &gt;&gt;
      </button>
    </div>
  );
}
