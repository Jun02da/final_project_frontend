import profile from "../image/like.png";
import { useState, useRef, useMemo } from "react";
import React from "react";
import Moment from "react-moment";
import "moment-timezone";

function CommentList(props) {
  const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치
  const textLimit = useRef(68); // 글자수 제한 선언

  const commenter = useMemo(() => {
    // 조건에 따라 게시글을 보여주는 함수
    const shortReview = props.userComment.slice(0, textLimit.current); // 원본에서 글자 수만큼 잘라서 짧은 버전을 준비하자

    if (props.userComment.length > textLimit.current) {
      // 원본이 길면 (원본 글자수 > 제한된 갯수)
      if (isShowMore) {
        return props.userComment;
      } // 더보기가 true 면 원본 바로 리턴
      return shortReview; // (더보기가 false면) 짧은 버전 리턴해주자
    }
    return props.userComment; // 그렇지않으면 (짧은 글에는) 쓴글 그대로 리턴!
  }, [isShowMore, props.userComment]); // 얘는 isShowMore의 상태가 바뀔때마다 호출된다

  const displayTime = (date) => {
    const startTime = new Date(date);
    const nowTime = Date.now();
    if (parseInt(startTime - nowTime) > -60000) {
      return <Moment format="방금 전">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) < -86400000) {
      return <Moment format="MMM D일">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) > -86400000) {
      return <Moment fromNow>{startTime}</Moment>;
    }
  };

  return (
    <div className="userCommentBox">
      <div className="userCommentBoxM">
        <a className="wrapProfileComment" href="#!">
          <img src={profile} alt="" />
        </a>
        <a className="userName" href="#!">
          {props.userName}
        </a>
        {/* <p>{props.date}</p> */}
        <p>{displayTime(props.date)}</p>
      </div>

      {/* <div className="userComment">{props.userComment}</div> */}
      <div>
        <div>{commenter}</div>
        {/* // 여기에 (짧은거나 원본) 글 내용이 들어가고 */}
        <div onClick={() => setIsShowMore(!isShowMore)}>
          {" "}
          {/* //클릭시 토글로 상태를 변경해주자 */}
          {props.userComment.length > textLimit.current && // 버튼명은 조건에 따라 달라진다
            (isShowMore ? "[닫기]" : "...[더보기]")}
        </div>
      </div>
    </div>
  );
}
export default CommentList;
