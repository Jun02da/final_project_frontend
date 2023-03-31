import React from "react";
import Chart from "react-apexcharts";
import "../../css/chart.css";
// sampleData로 임시 import
// import seriesBar from "./sampleData/seriesBar.json";
// import seriesArea from "./sampleData/seriesArea.json";
// import seriesPolarArea from "./sampleData/seriesPolarArea.json";

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
  // 좋아요 관련
  var totalLikeCnt = 0;
  adminPost.map((e) => {
    if (e.likeCnt) {
      totalLikeCnt = totalLikeCnt + e.likeCnt;
    }
  });
  // // Bar 변수
  // var optionsBar = {
  //   chart: {
  //     toolbar: {
  //       show: true,
  //       tools: {
  //         download: true, // download기능을 메인기능으로 선정
  //         zoom: false,
  //       },
  //     },
  //     stacked: true, // 위에 쌓아서 나타내기
  //     width: "100%",
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false, // 가로 or 세로
  //       borderRadius: 10, // 모서리 동글동글
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true, // 수치 표시
  //   },
  //   stroke: {
  //     curve: "smooth", // 포인트를 곡선 방식으로 연결합니다. 스플라인이라고도 함
  //   },
  //   grid: {
  //     row: {
  //       opacity: 0.5, // 투명도
  //     },
  //   },
  //   xaxis: {
  //     categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], // x축
  //   },
  //   colors: ["#546E7A", "#E91E63"], // 색상 지정
  //   noData: {
  //     text: "No Data", // 데이터가 없는 경우
  //   },
  // };
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
  // // area변수
  // var optionsArea = {
  //   chart: {
  //     toolbar: {
  //       show: true,
  //       tools: {
  //         download: false,
  //         zoom: true, // zoom기능을 메인기능으로 선정
  //       },
  //     },
  //     width: "100%",
  //   },
  //   dataLabels: {
  //     enabled: false, // 값 표시 X
  //   },
  //   stroke: {
  //     curve: "straight", // 모서리 각지게
  //   },
  //   noData: {
  //     text: "No Data", // 데이터가 없는 경우
  //   },
  // };
  // // PolarArea 변수
  // var optionsPolarArea = {
  //   chart: {
  //     width: "100%",
  //   },
  //   labels: [
  //     "00:00 ~ 03:00",
  //     "03:00 ~ 06:00",
  //     "06:00 ~ 09:00",
  //     "09:00 ~ 12:00",
  //     "12:00 ~ 15:00",
  //     "15:00 ~ 18:00",
  //     "18:00 ~ 21:00",
  //     "21:00 ~ 24:00",
  //   ],
  //   stroke: {
  //     show: true,
  //     colors: ["#fff"],
  //     width: 2,
  //   },
  //   fill: {
  //     opacity: 0.8, // 투명도
  //   },
  //   dataLabels: {
  //     enabled: true, // 수치 표시
  //   },
  // };
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
  let ViewData = [
    {
      name: "전체 데이터",
      data: [
        { x: "전체 조회수", y: totalVisitCnt },
        { x: "전체 좋아요", y: totalLikeCnt },
        { x: "전체 게시물", y: adminPost.length },
      ],
    },
  ];

  return (
    <div>
      <h1>통계</h1>
      <hr />
      {/* <div id="chartArea">
        <h3>이번주 방문자</h3>
        <Chart options={optionsBar} series={totalDashboard} type="bar" />
      </div> */}
      <div id="chartArea">
        <h3>전체회원 남여비율</h3>
        {/* donut 그래프 */}
        <Chart options={optionsDonut} series={totalGender} type="donut" />
      </div>
      <div>
        <Chart options={ViewsOptions} series={ViewData} type="bar" />
      </div>
      {/* <div id="chartArea">
        <h3>전체 조회수</h3>
        <Chart options={optionsArea} series={seriesArea} type="area" />
      </div> */}
      {/* <div id="chartArea">
        <h3>방문 시간대</h3>
        <Chart
          options={optionsPolarArea}
          series={seriesPolarArea}
          type="polarArea"
        />
      </div> */}
    </div>
  );
}
export default AdminChart;
