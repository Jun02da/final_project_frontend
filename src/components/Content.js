import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentInputLine from "./CommentInputLine";
import ContentShowMore from "./ContentShowMore";
import Like from "./Like";
// import GetFormattedDate from "../utils/FormatDate";
import Moment from "react-moment";
import "moment/locale/ko";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const Content = ({ user, postData, post }) => {
  const [commentData, setCommentData] = useState([]);
  const [likeCnt, setLikeCnt] = useState(post.likeCnt);
  const [authUser, setAuthUser] = useState([]);
  let navigate = useNavigate();
  function handleClick() {
    navigate("/MypageGuest");
  }
  const refreshFunction = (newComment) => {
    //부모의 Comments state값을 업데이트하기위한 함수
    setCommentData(commentData.concat(newComment)); //자식들한테 값을 전달받아 Comments값 업데이트
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://192.168.0.209:8090/comment/${post.post_id}`)
        .then((response) => setCommentData(response.data))

        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);
  // console.log(commentData);

  const displayCreatedAt = (createdAt) => {
    let startTime = new Date(createdAt);
    let nowTime = Date.now();
    if (parseInt(startTime - nowTime) > -60000) {
      return <Moment format="방금 전">{startTime}</Moment>;
    }
    // if (parseInt(startTime - nowTime) < -86400000) {
    //   return <Moment format="MMM D일">{startTime}</Moment>;
    // }
    if (parseInt(startTime - nowTime) > -86400000) {
      return <Moment fromNow>{startTime}</Moment>;
    }
  };
  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("token") === "admin")
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("http://192.168.0.209:8090/user/me")
        .then((response) => {
          setAuthUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const intervalId = setInterval(() => {
      setIsAdmin(Boolean(localStorage.getItem("token") === "admin"));
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <article className="postContainer">
      <div className="feedTop">
        <span>
          <span onClick={handleClick}>
            <Avatar src={`${user.proImage}`} alt="profImg" />
          </span>

          <span onClick={handleClick}>{post.nickname}</span>
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
            user={user}
            authUser={authUser}
            isLoggedIn={isLoggedIn}
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
            user={user}
            authUser={authUser}
            isLoggedIn={isLoggedIn}
            commentData={commentData}
            setCommentData={setCommentData}
            refreshFunction={refreshFunction}
            feedData={postData}
            feedNum={post.post_id}
          />
          <div className="time">
            {displayCreatedAt(post.created_at)} •{" "}
            <time>{new Date(post.created_at).toDateString()}</time>
          </div>
        </div>
        <CommentInputLine
          user={user}
          authUser={authUser}
          isLoggedIn={isLoggedIn}
          commentData={commentData}
          setCommentData={setCommentData}
          refreshFunction={refreshFunction}
          feedNum={post.post_id}
        />
      </div>
    </article>
  );
};
export default Content;
