import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import "../../css/Dashboard.css";
function MyPageChart() {
  // 조회수(Views) 관련
  var sample = [
    {
      name: "Views",
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
  var optionsTest1 = {
    chart: {
      toolbar: {
        show: false,
      },
      width: "100%",
    },
    colors: ["#7831ED"],
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
  var optionsTest2 = {
    chart: {
      toolbar: {
        show: false,
      },
      width: "100%",
    },
    colors: ["#05a081"],
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
  var optionsTest3 = {
    chart: {
      toolbar: {
        show: false,
      },
      width: "100%",
    },
    colors: ["#d3405c"],
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
  // 3개중 1개만 true로 설정하여서 클릭한 1개의 그래프만 나오도록 설정
  const [showTest1, setShowTest1] = useState(true);
  const [showTest2, setShowTest2] = useState(false);
  const [showTest3, setShowTest3] = useState(false);

  const handleTest1 = () => {
    setShowTest1(true);
    setShowTest2(false);
    setShowTest3(false);
  };
  const handleTest2 = () => {
    setShowTest1(false);
    setShowTest2(true);
    setShowTest3(false);
  };
  const handleTest3 = () => {
    setShowTest1(false);
    setShowTest2(false);
    setShowTest3(true);
  };
  return (
    <div>
      <div id="MyPageChartButtonDiv">
        <button onClick={handleTest1} id="MyPageChartButton1">
          버튼 1
        </button>
        <button onClick={handleTest2} id="MyPageChartButton2">
          버튼 2
        </button>
        <button onClick={handleTest3} id="MyPageChartButton3">
          버튼 3
        </button>
      </div>
      <div id="MyPageChartDiv">
        {showTest1 && (
          <Chart options={optionsTest1} series={sample} type="area" />
        )}
        {showTest2 && (
          <Chart options={optionsTest2} series={sample} type="area" />
        )}
        {showTest3 && (
          <Chart options={optionsTest3} series={sample} type="area" />
        )}
      </div>
    </div>
  );
}
export default MyPageChart;
