import React from "react";
import Chart from "react-apexcharts";
import "../../css/Dashboard.css";

function MyPageChart({
  nickname,
  contentCnt,
  visitCnt,
  followerCnt,
  followingCnt,
  likeCnt,
}) {
  // undefined가 그래프에 들어가면 오류발생
  var content = 0;
  var visit = 0;
  var follower = 0;
  var following = 0;
  var like = 0;
  if (contentCnt) {
    content += contentCnt;
  }
  if (visitCnt) {
    visit += Math.ceil(visitCnt / 8);
  }
  if (followerCnt) {
    follower += followerCnt;
  }
  if (followingCnt) {
    following += followingCnt;
  }
  if (likeCnt) {
    like += likeCnt;
  }
  // === 데이터 부분 ===
  // 조회수 데이터
  const viewData = [
    {
      name: nickname + "님의 정보",
      data: [
        { x: "전체 게시물", y: content },
        { x: "전체 조회수", y: visit },
      ],
    },
  ];
  // 좋아요, 팔로우 데이터
  const chartData = [
    {
      name: nickname + "님의 정보",
      data: [
        { x: "팔로우 받은 수", y: follower },
        { x: "팔로우 한 수", y: following },
        { x: "전체 좋아요", y: like },
      ],
    },
  ];

  // === 그래프 옵션 부분 ===
  // 조회수 그래프 옵션
  const viewOption = {
    chart: {
      toolbar: {
        show: false,
      },
      width: "auto%",
    },
    dataLabels: {
      // 값 표시
      enabled: true,
      style: {
        fontSize: "28px",
        fontWeight: "bold",
      },
      background: {
        enabled: true,
        foreColor: "#000000",
        borderRadius: 2,
        padding: 4,
        opacity: 0.9,
        borderWidth: 0.5,
        borderColor: "#000000",
      },
      offsetX: 20,
    },
    stroke: {
      curve: "straight", // 모서리 각지게
    },
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
        columnWidth: "45%",
        distributed: true,
        borderRadius: 10, // 모서리 동글동글
        horizontal: true,
      },
    },
    legend: {
      // 추가적으로 표시되는 미니바
      show: true,
      position: "top",
      horizontalAlign: "center",
      fontSize: "20px",
      fontFamily: "Arial",
    },
    tooltip: {
      // 마우스 오버 옵션
      enabled: true,
    },
  };
  // 좋아요, 팔로우 그래프 옵션
  const chartOption = {
    chart: {
      toolbar: {
        show: false,
      },
      width: "100%",
    },
    dataLabels: {
      // 값 표시
      enabled: true,
      style: {
        fontSize: "28px",
        fontWeight: "bold",
      },
      background: {
        enabled: true,
        foreColor: "#000000",
        borderRadius: 2,
        padding: 4,
        opacity: 0.9,
        borderWidth: 0.5,
        borderColor: "#000000",
      },
      offsetY: -20,
    },
    stroke: {
      curve: "straight", // 모서리 각지게
    },
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
        columnWidth: "45%",
        distributed: true,
        borderRadius: 10, // 모서리 동글동글
      },
    },
    legend: {
      // 추가적으로 표시되는 미니바
      show: true,
      position: "top",
      horizontalAlign: "center",
      fontSize: "20px",
      fontFamily: "Arial",
    },
    tooltip: {
      // 마우스 오버 옵션
      enabled: true,
    },
  };
  return (
    <>
      <div id="MyPageDashboard">
        <Chart options={viewOption} series={viewData} type="bar" />
      </div>
      <div id="MyPageDashboard">
        <Chart options={chartOption} series={chartData} type="bar" />
      </div>
    </>
  );
}
export default MyPageChart;
