import { useState } from "react";
import CommentList from "./CommentList";
import classnames from "classnames";
import moment from "moment";
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import "moment/locale/ko";
function Comment() {
  const [userName] = useState("user");
  const [comment, setComment] = useState("");
  const [feedComments, setFeedComments] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [date, setDate] = useState([]);
  // 댓글 구현 함수()
  const post = (e) => {
    const copyFeedCommnets = [...feedComments];
    copyFeedCommnets.push(comment);
    setFeedComments(copyFeedCommnets);
    // 게시 버튼을 누르면 초기로 돌아감
    setDate(moment().format("YYYY-MM-DD HH:mm:ss"));
    setComment("");
    setIsValid(false);
  };

  return (
    <div className="container">
      <form className="feedComment">
        {/* 댓글 입력하는 곳 */}
        <input
          type="text"
          className="commentText"
          placeholder="댓글 달기"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          onKeyUp={(e) => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
          value={comment}
        />
        <button
          type="button"
          className={classnames(
            "commentButton",
            // 댓글 입력 시 글자가 있다면 활성화, 없다면 비활성화
            comment.length > 0 ? "submitCommentActive" : "submitCommentInactive"
          )}
          onClick={post}
          // 댓글 등록 이후 버튼 비활성화
          disabled={isValid ? false : true}
        >
          comment
        </button>
      </form>
      {/* 모든 댓글 출력 */}
      <ul className="commentListContainer">
        {feedComments.map((commentArr, i) => {
          return (
            <li>
              <CommentList
                userName={userName}
                userComment={commentArr}
                date={date}
                key={i}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comment;
