import React from "react";
import Chart from "react-apexcharts";
import "../../css/Dashboard.css";
function MyPageChart({ visitCnt, likeCnt, contentCnt, nickname }) {
  // 그래프 데이터 관련
  let ViewData = [
    {
      name: nickname + "님의 정보",
      data: [
        { x: "전체 조회수", y: visitCnt },
        { x: "전체 좋아요", y: likeCnt },
        { x: "전체 게시물", y: contentCnt + 1 }, // 0이면 오류남
      ],
    },
  ];

  // 그래프 옵션 관련
  var ViewsOptions = {
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
  return (
    <div id="MyPageDashboard">
      {/* === 그래프 부분 === */}
      <div id="MyPageChartDiv">
        <Chart options={ViewsOptions} series={ViewData} type="bar" />
      </div>
    </div>
  );
}
export default MyPageChart;
