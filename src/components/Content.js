import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentInputLine from "./CommentInputLine";
import ContentShowMore from "./ContentShowMore";
import Like from "./Like";
import GetFormattedDate from "../utils/FormatDate";

const Content = ({ email, postData, post }) => {
  const [commentData, setCommentData] = useState([]);
  const [likeCnt, setLikeCnt] = useState(post.likeCnt);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://192.168.0.209:8090/comment/${post.post_id}`)
        .then((response) => setCommentData(response.data))

        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);
  console.log(commentData);
  return (
    <article className="postContainer">
      <div className="feedTop">
        <span>
          <a href="#!">
            <img src="./image/myprofile.png" alt="profImg" />
          </a>
          <a href="#!">{post.nickname}</a>
        </span>
        <a href="#!">
          <img className="etcBtn" src="./Images/img/more.png" alt="else" />
        </a>
      </div>
      <div className="imageContainer">
        <img src={`${post.image_url}`} className="image" alt="feed" />
      </div>
      <div className="textContainer">
        <div className="buttonLine">
          <Like
            email={email}
            feedNum={post.post_id}
            likeCnt={likeCnt}
            setLikeCnt={setLikeCnt}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;<b>{likeCnt}명</b>이 좋아합니다
        </div>

        <div className="contentLine">
          <span className="content">
            <strong>{post.nickname}</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {post.content ? <ContentShowMore content={post.content} /> : null}
          </span>

          <Comment
            email={"test"}
            commentData={commentData}
            setCommentData={setCommentData}
            feedData={postData}
            feedNum={post.post_id}
          />
          <div className="time">
            <GetFormattedDate date={post.created_at?.seconds} /> •{" "}
            <time>
              {new Date(post.created_at?.seconds * 1000).toDateString()}
            </time>
          </div>
        </div>
        <CommentInputLine
          email={"test"}
          commentData={commentData}
          setCommentData={setCommentData}
          feedNum={post.post_id}
        />
      </div>
    </article>
  );
};
export default Content;
