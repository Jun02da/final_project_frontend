import React from "react";
import Chart from "../Charts/MyPageChart.js";

export default function Dashboard({ visitCnt, nickname, likeCnt, userEmail }) {
  // // 좋아요 현황 조회 가져오기
  // axios
  //   .get("http://192.168.0.209:8090/like")
  //   .then((response) => {
  //     console.log(response.data); // userData의 데이터 구조를 user 테이블의 데이터 구조로 변경
  //   })
  //   .catch((err) => console.log(err));
  var contentCnt = 149;
  return (
    <div>
      <Chart
        visitCnt={visitCnt}
        likeCnt={likeCnt}
        contentCnt={contentCnt}
        nickname={nickname}
        userEmail={userEmail}
      />
    </div>
  );
}
