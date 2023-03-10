import React from "react";
import feeds from "./image/feeds.png";
import heart from "./image/free-icon-love.png";
import comment from "./image/free-icon-good-comment.png";
import dm from "./image/free-icon-send.png";
import bookmark from "./image/free-icon-bookmark.png";
import Comment from "./components/Comment";

// import "./FirstFeed.css";

class FirstFeed extends React.Component {
  render() {
    return (
      <section className="feeds">
        <article>
          <div className="feeds-sections">
            {/* 사진 */}
            <img className="feedStyleL" src={feeds} alt="feedImg" />
            <div className="feedStyleR">
              {/* 화면 오른쪽 윗 부분 (프로필, 더보기) */}
              <div className="feedsTop">
                <div className="wrapProfileL">
                  <img src="./Images/img/myprofile.png" alt="profileImg" />
                  <div>
                    <a href="{() => false}">killer_dong</a>
                    <p>홍길동</p>
                  </div>
                </div>
                <img
                  className="etcBtn"
                  src="./Images/img/more.png"
                  alt="else"
                />
              </div>
              {/* 좋아요, dm, 북마크  */}
              <div className="feedIcons">
                <div className="alignCenter">
                  <img
                    className="iconStyle bigHeart colorHeart"
                    src={heart}
                    alt="heart"
                  />
                  <img className="iconStyle" src={comment} alt="comment" />
                  <img className="dmIcon" src={dm} alt="comment" />
                  <img className="iconStyle" src={bookmark} alt="bookmark" />
                </div>
              </div>
              {/* 텍스트  */}
              <div className="text">
                <a href="#!">killer_dong</a>
                <p>스위스에서 한 컷</p>
              </div>
              <div className="feedLike">
                <img
                  className="feedLikeBtn"
                  src={"./Images/img/bsjun.png"}
                  alt="profile"
                />
                {/* 좋아요 수, 좋아요 명단 */}
                <div>
                  <a href="#!">사람4</a>님
                  <a href="#!">
                    외 <span className="peopleCount">14</span>명
                  </a>
                  이 좋아합니다.
                </div>
              </div>
              <Comment />
              {/* <div className="feedTime">1시간전</div> */}
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default FirstFeed;
