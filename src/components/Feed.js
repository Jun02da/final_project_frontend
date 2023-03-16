import React from "react";
// import profile from "../image/like.png";
import Comment from "./Comment";

import CommentInputLine from "./CommentInputLine";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

const Feed = ({ commentData, setCommentData, feedData }) => {
  return (
    <>
      {feedData.map((el, idx) => {
        return (
          <article className="feed" key={el.id}>
            <div>
              <img src={`${el.feedImg}`} className="feedImage" alt="feed" />
            </div>
            <div className="feedRight">
              <div className="feedRightTop">
                <a href="#!">
                  <img src="./image/myprofile.png" alt="profileImg" />
                </a>
                <a href="#!">{el.profileId}</a>
                <img
                  className="etcBtn"
                  src="./Images/img/more.png"
                  alt="else"
                />
              </div>
              <div className="buttonLine">
                <div className="leftButton">
                  <FontAwesomeIcon
                    className="buttons"
                    icon={faHeart}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    className="buttons"
                    icon={faComment}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    className="buttons"
                    icon={faPaperPlane}
                    size="xl"
                  />
                </div>
                <FontAwesomeIcon
                  className="buttons"
                  icon={faBookmark}
                  size="xl"
                />
              </div>
              <div className="heartLine">
                <img
                  className="likeProfile"
                  src="images/sangwon/pic1.jpg"
                  alt="profile"
                />
                <span className="text">
                  <b>hasang0.0</b>님 외 <b>{el.likeCount}명</b>이 좋아합니다
                </span>
              </div>
              <div className="contentLine">
                <span className="id">hasang0.0</span>
                <span>
                  {el.content}
                  <a href="#!" className="type3">
                    ...더 보기
                  </a>
                </span>
                <Comment feedNum={idx} commentData={commentData} />
                <span className="time">42분 전</span>
              </div>
              <CommentInputLine
                commentData={commentData}
                setCommentData={setCommentData}
                idx={idx}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Feed;
