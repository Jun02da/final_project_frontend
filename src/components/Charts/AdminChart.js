import React from "react";
import Chart from "react-apexcharts";
import "../../css/adminChart.css";

function AdminChart({ adminUserAll, adminPost }) {
  // 남여 비율 관련
  var femailCount = 0;
  var mailCount = 0;
  adminUserAll.map((e) => {
    if ((e.gender = "femail")) {
      femailCount += 1;
    } else if ((e.gender = "male")) {
      mailCount += 1;
    }
  });
  var totalGender = [mailCount, femailCount];

  // 조회수 관련
  var totalVisitCnt = 0;
  adminUserAll.map((e) => {
    if (e.visitCnt) {
      totalVisitCnt = totalVisitCnt + e.visitCnt;
    }
  });
  // 팔로우 관련
  var totalFollowerCnt = 0;
  var totalFollowingCnt = 0;
  adminUserAll.map((e) => {
    if (e.followerCnt) {
      totalFollowerCnt = totalFollowerCnt + e.followerCnt;
    }
  });
  adminUserAll.map((e) => {
    if (e.followingCnt) {
      totalFollowingCnt = totalFollowingCnt + e.followingCnt;
    }
  });
  // 좋아요 관련
  var totalLikeCnt = 0;
  var totalCreated_at = []; // 생성일 관련
  adminPost.map((e) => {
    if (e.likeCnt) {
      totalLikeCnt = totalLikeCnt + e.likeCnt;
    } else if (e.created_at) {
      totalCreated_at.push(e.created_at.substr(0, 10)); // 년만 짤라서 넣음
    }
  });
  const resultCreated_at = totalCreated_at.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});
  // Donut 변수
  var optionsDonut = {
    chart: {
      width: "100%",
    },
    legend: {
      show: true,
      position: "bottom",
    },
    labels: ["Male", "Female"],
    colors: ["#546E7A", "#E91E63"], // 색상 지정
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
  };
  // area변수 신규 사용자 부분
  var optionsArea = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      width: "100%",
    },
    dataLabels: {
      enabled: true, // 값 표시 X
    },
    stroke: {
      curve: "straight", // 모서리 각지게
    },
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
    xaxis: {
      categories: Object.keys(resultCreated_at),
    },
  };
  // ==== 조회수,좋아요,게시물 그래프 옵션 관련 ====
  var ViewsOptions1 = {
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
    xaxis: {
      type: "category",
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
  // ==== 전체 조회수 / 전체 좋아요 / 전체 게시물 데이터 ====
  let ViewData1 = [
    {
      name: "전체 데이터",
      data: [
        // { x: "조회수", y: totalVisitCnt },
        { x: "좋아요", y: totalLikeCnt },
        { x: "팔로우 받은 수", y: totalFollowerCnt },
        { x: "팔로우 한 수", y: totalFollowingCnt },
        // { x: "게시물", y: adminPost.length },
      ],
    },
  ];
  // ==== 조회수,좋아요,게시물 그래프 옵션 관련 ====
  var ViewsOptions2 = {
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
  // ==== 전체 조회수 / 전체 좋아요 / 전체 게시물 데이터 ====
  let ViewData2 = [
    {
      name: "전체 데이터",
      data: [
        // { x: "좋아요", y: totalLikeCnt },
        // { x: "팔로우 받은 수", y: totalFollowerCnt },
        // { x: "팔로우 한 수", y: totalFollowingCnt },
        { x: "게시물", y: adminPost.length },
        { x: "조회수", y: totalVisitCnt },
      ],
    },
  ];
  // ==== 신규 가입자 데이터 부분 ====
  let SeriesCreated_at = [
    {
      name: "신규 가입자",
      data: Object.values(resultCreated_at),
    },
  ];

  return (
    <div>
      <h1>통계</h1>
      <hr />
      <div id="chartArea">
        <p>사용자 남여 비율</p>
        <Chart options={optionsDonut} series={totalGender} type="donut" />
      </div>
      <div id="chartArea">
        <p>신규 사용자</p>
        <Chart options={optionsArea} series={SeriesCreated_at} type="area" />
      </div>
      <div id="chartArea">
        <p>전체 데이터</p>
        <Chart options={ViewsOptions1} series={ViewData1} type="bar" />
      </div>
      <div id="chartArea">
        <p>전체 데이터</p>
        <Chart options={ViewsOptions2} series={ViewData2} type="bar" />
      </div>
    </div>
  );
}
export default AdminChart;
