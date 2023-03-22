import { useState } from "react";
import "../../../css/BoardPagination.css";

export default function Pagination({ page, totalPosts, limit, setPage }) {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;

  return (
    <div className="BoardPaginationDiv">
      <div
        onClick={() => {
          setPage(page - 1);
          setCurrPage(page - 2);
        }}
        disabled={page === 1}
        className="BoardPaginationContent"
      >
        &lt;
      </div>
      <div
        onClick={() => setPage(firstNum)}
        aria-current={page === firstNum ? "page" : null}
        className="BoardPaginationContent"
      >
        {firstNum}
      </div>
      {Array(4)
        .fill()
        .map((_, i) => {
          if (i <= 2) {
            return (
              <div
                className="BoardPaginationContent"
                border="true"
                key={i + 1}
                onClick={() => {
                  setPage(firstNum + 1 + i);
                }}
                aria-current={page === firstNum + 1 + i ? "page" : null}
              >
                {firstNum + 1 + i}
              </div>
            );
          } else if (i >= 3) {
            return (
              <div
                className="BoardPaginationContent"
                border="true"
                key={i + 1}
                onClick={() => setPage(lastNum)}
                aria-current={page === lastNum ? "page" : null}
              >
                {lastNum}
              </div>
            );
          }
        })}
      <div
        className="BoardPaginationContent"
        onClick={() => {
          setPage(page + 1);
          setCurrPage(page);
        }}
        disabled={page === numPages}
      >
        &gt;
      </div>
    </div>
  );
}
