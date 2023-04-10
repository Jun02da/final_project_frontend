import React from "react";
import Chart from "react-apexcharts";
import "../../css/adminChart.css";

function AdminChart({ adminUserAll, adminPost }) {
  // 남여 비율 관련
  var femaleCount = 0;
  var maleCount = 0;
  adminUserAll.map((e) => {
    if (e.gender === "female") {
      femaleCount += 1;
    } else {
      maleCount += 1;
    }
  });
  const totalGender = [maleCount, femaleCount];

  // 조회수 관련
  var totalVisitCnt = 0;
  adminUserAll.map((e) => {
    if (e.visitCnt) {
      totalVisitCnt += Math.ceil(e.visitCnt / 8);
    }
  });

  // 팔로우 관련
  var totalFollowerCnt = 0;
  var totalFollowingCnt = 0;
  adminUserAll.map((e) => {
    if (e.followerCnt) {
      totalFollowerCnt += e.followerCnt;
    }
  });
  adminUserAll.map((e) => {
    if (e.followingCnt) {
      totalFollowingCnt += e.followingCnt;
    }
  });

  // 좋아요 관련
  var totalLikeCnt = 0;
  adminPost.map((e) => {
    if (e.likeCnt) {
      totalLikeCnt += e.likeCnt;
    }
  });

  // 생성일 관련
  var totalCreated_at = []; // 생성일 관련
  adminPost.map((e) => {
    if (e.created_at) {
      totalCreated_at.push(e.created_at.substr(0, 10)); // 년만 짤라서 넣음
    }
  });
  const resultCreated_at = totalCreated_at.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  // === 옵션 부분 ===
  // 이용자 남여 비율
  const optionGender = {
    chart: {
      width: "100%",
    },
    legend: {
      show: true,
      position: "right",
      horizontalAlign: "center",
      fontSize: "15px",
      fontFamily: "Noto Sans KR",
    },
    labels: ["Male", "Female"],
    colors: ["#07B9E8", "#E91E63"], // 색상 지정
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
    title: {
      text: "이용자 남여 비율",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Noto Sans KR",
        color: "#263238",
      },
    },
  };
  // 신규 이용자
  const optionNew = {
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
    title: {
      text: "신규 이용자",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Noto Sans KR",
        color: "#263238",
      },
    },
  };
  // 이용자 상호작용
  const optionInteraction = {
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
        fontSize: "20px",
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
      position: "right",
      horizontalAlign: "center",
      fontSize: "15px",
      fontFamily: "Noto Sans KR",
    },
    tooltip: {
      // 마우스 오버 옵션
      enabled: true,
    },
    title: {
      text: "이용자 상호작용",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Noto Sans KR",
        color: "#263238",
      },
    },
  };
  // 이용자 데이터
  const optionData = {
    chart: {
      toolbar: {
        show: false,
      },
      width: "100%",
      height: "100%",
    },
    dataLabels: {
      // 값 표시
      enabled: true,
      style: {
        fontSize: "20px",
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
      horizontalAlign: "right",
      fontSize: "15px",
      fontFamily: "Noto Sans KR",
    },
    tooltip: {
      // 마우스 오버 옵션
      enabled: true,
    },
    title: {
      text: "이용자 데이터",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Noto Sans KR",
        color: "#263238",
      },
    },
  };

  // === 데이터 부분 ===
  // 신규 이용자
  const dataNew = [
    {
      name: "신규 가입자",
      data: Object.values(resultCreated_at),
    },
  ];
  // 이용자 상호작용
  const dataInteraction = [
    {
      name: "전체 데이터",
      data: [
        { x: "팔로우 받은 수", y: totalFollowerCnt },
        { x: "팔로우 한 수", y: totalFollowingCnt },
        { x: "좋아요", y: totalLikeCnt },
      ],
    },
  ];
  // 이용자 데이터
  const dataData = [
    {
      name: "전체 데이터",
      data: [
        { x: "게시물", y: adminPost.length },
        { x: "조회수", y: totalVisitCnt },
      ],
    },
  ];

  return (
    <div>
      <div id="chartArea">
        <Chart options={optionGender} series={totalGender} type="donut" />
      </div>
      <div id="chartArea">
        <Chart options={optionNew} series={dataNew} type="area" />
      </div>
      <div id="chartArea">
        <Chart
          options={optionInteraction}
          series={dataInteraction}
          type="bar"
        />
      </div>
      <div id="chartArea">
        <Chart options={optionData} series={dataData} type="bar" />
      </div>
    </div>
  );
}
export default AdminChart;
