import { React } from "react";
import CommentHeart from "./CommentHeart";

const Comment = ({ feedNum, commentData }) => {
  return (
    <div className="commentSection">
      {commentData[feedNum].map((el) => {
        return (
          <div key={el.id}>
            <span className="id">
              <strong>{el.name}</strong>
            </span>
            {el.comment}
            <div className="commentImage">
              <CommentHeart />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
