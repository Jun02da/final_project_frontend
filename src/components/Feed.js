import React from "react";
// import profile from "../image/like.png";
import Comment from "./Comment";
import CommentInputLine from "./CommentInputLine";
import ContentShowMore from "./ContentShowMore";
import Like from "./Like";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  // faComment,
  faPaperPlane,
  // faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useMemo } from "react";
import GetFormattedDate from "../utils/FormatDate";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Detail.css";

const Feed = ({ commentData, setCommentData, feedData }) => {
  return (
    <>
      <Swiper
        className="detailSwiper"
        navigation={true}
        effect={"fade"}
        loop={true}
        modules={[Navigation, EffectFade]}
      >
        {feedData.map((el, idx) => {
          return (
            <SwiperSlide className="detailSwiper-Slide">
              <article className="feed" key={el.id}>
                <div className="feedTop">
                  <span>
                    <a href="#!">
                      <img src="./image/myprofile.png" alt="profImg" />
                    </a>
                    <a href="#!">{el.nickname}</a>
                  </span>
                  <a href="#!">
                    <img
                      className="etcBtn"
                      src="./Images/img/more.png"
                      alt="else"
                    />
                  </a>
                </div>
                <div>
                  <img src={`${el.img_url}`} className="feedImage" alt="feed" />
                </div>
                <div className="feedbottom">
                  <div className="buttonLine">
                    <div className="leftButton">
                      <Like />
                      {/* <FontAwesomeIcon className="buttons" icon={faComment} size="xl" /> */}
                      <FontAwesomeIcon
                        className="buttons"
                        icon={faPaperPlane}
                        size="xl"
                      />
                    </div>
                    {/* <FontAwesomeIcon className="buttons" icon={faBookmark} size="xl" /> */}
                  </div>
                  <div className="heartLine">
                    <span>
                      <img
                        className="likeProfile"
                        src="images/sangwon/pic1.jpg"
                        alt="profile"
                      />
                    </span>
                    <b>hasang0.0</b>님 외 <b>{el.likeCount}명</b>이 좋아합니다
                  </div>
                  <div className="contentLine">
                    <span>
                      <strong>{el.nickname}</strong>
                    </span>
                    <ContentShowMore content={el.content} />
                    <Comment
                      // userData={userData}
                      commentData={commentData}
                      setCommentData={setCommentData}
                      feedData={feedData}
                      feedNum={el.id}
                    />
                    <span className="time">
                      <GetFormattedDate date={el.created_at?.seconds} /> •{" "}
                      <time>
                        {new Date(el.created_at?.seconds * 1000).toDateString()}
                      </time>
                    </span>
                  </div>
                  <CommentInputLine
                    commentData={commentData}
                    setCommentData={setCommentData}
                    feedNum={el.id}
                  />
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Feed;
