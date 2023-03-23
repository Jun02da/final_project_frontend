import React from "react";
import Chart from "react-apexcharts";
import "../../css/chart.css";

function AdminChart() {
  // Bar 변수
  var seriesBar = [
    {
      name: "Male",
      data: [44, 55, 41, 67, 22, 43, 34],
    },
    {
      name: "Female",
      data: [13, 23, 20, 8, 13, 27, 49],
    },
  ];
  var optionsBar = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: true, // download기능을 메인기능으로 선정
          zoom: false,
        },
      },
      stacked: true, // 위에 쌓아서 나타내기
    },
    plotOptions: {
      bar: {
        horizontal: false, // 가로 or 세로
        borderRadius: 10, // 모서리 동글동글
      },
    },
    dataLabels: {
      enabled: true, // 수치 표시
    },
    stroke: {
      curve: "smooth", // 포인트를 곡선 방식으로 연결합니다. 스플라인이라고도 함
    },
    grid: {
      row: {
        opacity: 0.5, // 투명도
      },
    },
    xaxis: {
      categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], // x축
    },
    colors: ["#546E7A", "#E91E63"], // 색상 지정
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
  };
  // Donut 변수
  var seriesDonut = [500, 1234];
  var optionsDonut = {
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
  // area변수
  var seriesArea = [
    {
      name: "방문자",
      data: [
        {
          x: 1,
          y: 162,
        },
        {
          x: 2,
          y: 90,
        },
        {
          x: 3,
          y: 50,
        },
        {
          x: 4,
          y: 77,
        },
        {
          x: 5,
          y: 35,
        },
        {
          x: 6,
          y: 45,
        },
        {
          x: 7,
          y: 88,
        },
        {
          x: 8,
          y: 120,
        },
        {
          x: 9,
          y: 156,
        },
        {
          x: 10,
          y: 123,
        },
        {
          x: 11,
          y: 88,
        },
        {
          x: 12,
          y: 66,
        },
        {
          x: 13,
          y: 45,
        },
        {
          x: 14,
          y: 129,
        },
        {
          x: 15,
          y: 45,
        },
        {
          x: 16,
          y: 88,
        },
        {
          x: 17,
          y: 132,
        },
        {
          x: 18,
          y: 146,
        },
        {
          x: 19,
          y: 169,
        },
        {
          x: 20,
          y: 184,
        },
        {
          x: 21,
          y: 88,
        },
        {
          x: 22,
          y: 66,
        },
        {
          x: 23,
          y: 45,
        },
        {
          x: 24,
          y: 89,
        },
        {
          x: 25,
          y: 45,
        },
        {
          x: 26,
          y: 88,
        },
        {
          x: 27,
          y: 132,
        },
        {
          x: 28,
          y: 146,
        },
        {
          x: 29,
          y: 169,
        },
        {
          x: 30,
          y: 184,
        },
      ],
    },
  ];
  var optionsArea = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoom: true, // zoom기능을 메인기능으로 선정
        },
      },
    },
    dataLabels: {
      enabled: false, // 값 표시 X
    },
    stroke: {
      curve: "straight", // 모서리 각지게
    },
    noData: {
      text: "No Data", // 데이터가 없는 경우
    },
  };
  // PolarArea 변수
  var seriesPolarArea = [6543, 2109, 3456, 5678, 7890, 8765, 9876, 10000];
  var optionsPolarArea = {
    labels: [
      "00:00 ~ 03:00",
      "03:00 ~ 06:00",
      "06:00 ~ 09:00",
      "09:00 ~ 12:00",
      "12:00 ~ 15:00",
      "15:00 ~ 18:00",
      "18:00 ~ 21:00",
      "21:00 ~ 24:00",
    ],
    stroke: {
      show: true,
      colors: ["#fff"],
      width: 2,
    },
    fill: {
      opacity: 0.8, // 투명도
    },
    dataLabels: {
      enabled: true, // 수치 표시
    },
  };

  return (
    <div>
      <h1>통계</h1>
      <hr />

      <div id="chartArea">
        <h3>이번주 방문자</h3>
        {/* bar 그래프 */}
        <Chart options={optionsBar} series={seriesBar} type="bar" width="720" />
      </div>

      <div id="chartArea">
        <h3>전체회원 남여비율</h3>
        {/* donut 그래프 */}
        <Chart
          options={optionsDonut}
          series={seriesDonut}
          type="donut"
          width="720"
        />
      </div>

      <div id="chartArea">
        <h3>이번달 방문자</h3>
        {/* area 그래프 */}
        <Chart
          options={optionsArea}
          series={seriesArea}
          type="area"
          width="720"
        />
      </div>

      <div id="chartArea">
        <h3>방문 시간대</h3>
        {/* PolarArea 그래프 */}
        <Chart
          options={optionsPolarArea}
          series={seriesPolarArea}
          type="polarArea"
          width="720"
        />
      </div>
    </div>
  );
}
export default AdminChart;
