import React, { useState } from "react";
import Chart from "../Charts/MyPageChart.js";
import axios from "axios";

export default function Dashboard({
  userEmail,
  nickname,
  visitCnt,
  followerCnt,
  followingCnt,
  likeCnt,
}) {
  const [contentCnt, setContentCnt] = useState([]);
  axios
    .get(`http://192.168.0.209:8090/post/email/${userEmail}`)
    .then((response) => {
      setContentCnt(response.data.length);
    })
    .catch((err) => console.log(err));
  return (
    <div>
      <Chart
        nickname={nickname}
        visitCnt={visitCnt}
        contentCnt={contentCnt}
        followerCnt={followerCnt}
        followingCnt={followingCnt}
        likeCnt={likeCnt}
      />
    </div>
  );
}
