import { React, useState } from "react";

const CommentInputLine = ({ setCommentData, idx }) => {
  const [commentValue, setCommentValue] = useState("");
  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (commentValue === "") return;

    setCommentData((value) =>
      value.map((comments, index) => {
        return index === idx
          ? [...comments, { name: "hasang0.0", comment: commentValue }]
          : comments;
      })
    );
    setCommentValue("");
  };

  return (
    <form className="commentLine" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="댓글 달기..."
        className="comment"
        value={commentValue}
        onChange={onChange}
      />
      <input type="submit" value="게시" className="submit" />
    </form>
  );
};

export default CommentInputLine;
