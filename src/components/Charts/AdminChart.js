import React from "react";
import Chart from "react-apexcharts";
import "../../css/chart.css";
// sampleData로 임시 import
import seriesBar from "./sampleData/seriesBar.json";
import seriesDonut from "./sampleData/seriesDonut.json";
import seriesArea from "./sampleData/seriesArea.json";
import seriesPolarArea from "./sampleData/seriesPolarArea.json";

function AdminChart() {
  // Bar 변수
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
      width: "100%",
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
  // area변수
  var optionsArea = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoom: true, // zoom기능을 메인기능으로 선정
        },
      },
      width: "100%",
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
  var optionsPolarArea = {
    chart: {
      width: "100%",
    },
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
        <Chart options={optionsBar} series={seriesBar} type="bar" />
      </div>
      <div id="chartArea">
        <h3>전체회원 남여비율</h3>
        {/* donut 그래프 */}
        <Chart options={optionsDonut} series={seriesDonut} type="donut" />
      </div>
      <div id="chartArea">
        <h3>이번달 방문자</h3>
        {/* area 그래프 */}
        <Chart options={optionsArea} series={seriesArea} type="area" />
      </div>
      <div id="chartArea">
        <h3>방문 시간대</h3>
        {/* PolarArea 그래프 */}
        <Chart
          options={optionsPolarArea}
          series={seriesPolarArea}
          type="polarArea"
        />
      </div>
    </div>
  );
}
export default AdminChart;
