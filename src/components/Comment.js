import { React, useState } from "react";
import axios from "axios";
import Like from "./Like";
import GetFormattedDate from "../utils/FormatDate";

const Comment = ({
  userData,
  feedNum,
  feedData,
  commentData,
  setCommentData,
}) => {
  const [showFullComments, setShowingFullComments] = useState(false);
  const comment = commentData.filter((comment) => comment.postId === feedNum);

  async function deleteComment(id) {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(() =>
        setCommentData(commentData.filter((comment) => comment.id !== id))
      )
      .catch((error) => console.error(error));
  }

  return comment?.length >= 1 ? (
    <div>
      {comment?.length > 2 ? (
        <h5
          className="post__comments__count mt-1"
          onClick={() => setShowingFullComments(!showFullComments)}
        >
          {" "}
          {!showFullComments ? "View all" : "Hide most of the "}{" "}
          {comment.length?.toLocaleString()} comments
        </h5>
      ) : (
        <h5 className="post__comments__count">Comments</h5>
      )}
      <div className="commentSection">
        {comment &&
          comment
            ?.slice(0, !showFullComments ? 4 : comment.length)
            ?.map((el, i) => {
              return (
                el.postId === feedNum && (
                  <div key={i}>
                    <span className="id">
                      <strong>{el.name}</strong>
                    </span>
                    {el.body}
                    <div className="commentImage">
                      <Like />
                      {feedData?.postDate && (
                        <span>
                          <GetFormattedDate
                            date={el?.commentDate?.seconds}
                            ago
                          />
                        </span>
                      )}
                      {/* 로그인 한 유저 id와 댓글의 id가 같아야지만 삭제가 가능 */}
                      {
                        // el?.user_id === userData.user_id &&
                        <button onClick={() => deleteComment(el.id)}>
                          Delete
                        </button>
                      }
                    </div>
                  </div>
                )
              );
            })}
      </div>
    </div>
  ) : null;
};

export default Comment;
