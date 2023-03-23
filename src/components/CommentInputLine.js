import { React, useState } from "react";
import axios from "axios";

const CommentInputLine = ({
  feedData,
  commentData,
  setCommentData,
  feedNum,
  setComment,
}) => {
  const [commentValue, setCommentValue] = useState("");
  const [nextId, setNextId] = useState(560);
  const onChange = (e) => {
    setCommentValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (commentValue === "") return;
    addComment(feedNum, commentValue, nextId);
  };
  const addComment = async (feedNum, commentValue, nextId) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/comments`, {
        postId: feedNum,
        id: nextId,
        name: "로그인한 닉네임",
        body: commentValue,
      })
      .then((response) => {
        console.log(response.data);
        setCommentData([...commentData, response.data]);
        setNextId(nextId + 1);
        setCommentValue("");
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  };

  return (
    <form className="commentLine" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="add on comment..."
        className="comment"
        value={commentValue}
        onChange={onChange}
      />
      <button type="submit">comment</button>
    </form>
  );
};

export default CommentInputLine;
