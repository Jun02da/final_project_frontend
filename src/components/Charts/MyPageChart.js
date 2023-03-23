import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import "../../css/Dashboard.css";
function MyPageChart() {
  // 데이터 관련
  var sample1 = [
    {
      name: "Views",
      data: [
        {
          x: 1,
          y: 100,
        },
        {
          x: 2,
          y: 90,
        },
        {
          x: 3,
          y: 150,
        },
        {
          x: 4,
          y: 177,
        },
        {
          x: 5,
          y: 135,
        },
        {
          x: 6,
          y: 145,
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
          y: 166,
        },
        {
          x: 13,
          y: 145,
        },
        {
          x: 14,
          y: 129,
        },
        {
          x: 15,
          y: 145,
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
          y: 159,
        },
        {
          x: 20,
          y: 104,
        },
        {
          x: 21,
          y: 88,
        },
        {
          x: 22,
          y: 166,
        },
        {
          x: 23,
          y: 95,
        },
        {
          x: 24,
          y: 89,
        },
        {
          x: 25,
          y: 145,
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
  var sample2 = [
    {
      name: "Great",
      data: [
        {
          x: 1,
          y: 50,
        },
        {
          x: 2,
          y: 60,
        },
        {
          x: 3,
          y: 54,
        },
        {
          x: 4,
          y: 77,
        },
        {
          x: 5,
          y: 45,
        },
        {
          x: 6,
          y: 65,
        },
        {
          x: 7,
          y: 80,
        },
        {
          x: 8,
          y: 23,
        },
        {
          x: 9,
          y: 56,
        },
        {
          x: 10,
          y: 33,
        },
        {
          x: 11,
          y: 18,
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
          y: 49,
        },
        {
          x: 15,
          y: 45,
        },
        {
          x: 16,
          y: 68,
        },
        {
          x: 17,
          y: 32,
        },
        {
          x: 18,
          y: 10,
        },
        {
          x: 19,
          y: 69,
        },
        {
          x: 20,
          y: 34,
        },
        {
          x: 21,
          y: 48,
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
          y: 39,
        },
        {
          x: 25,
          y: 45,
        },
        {
          x: 26,
          y: 18,
        },
        {
          x: 27,
          y: 32,
        },
        {
          x: 28,
          y: 46,
        },
        {
          x: 29,
          y: 69,
        },
        {
          x: 30,
          y: 84,
        },
      ],
    },
  ];
  var sample3 = [
    {
      name: "Followers",
      data: [
        {
          x: 1,
          y: 10,
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
          y: 55,
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
          y: 20,
        },
        {
          x: 9,
          y: 36,
        },
        {
          x: 10,
          y: 23,
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
          y: 99,
        },
        {
          x: 15,
          y: 65,
        },
        {
          x: 16,
          y: 88,
        },
        {
          x: 17,
          y: 32,
        },
        {
          x: 18,
          y: 46,
        },
        {
          x: 19,
          y: 69,
        },
        {
          x: 20,
          y: 84,
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
          y: 32,
        },
        {
          x: 28,
          y: 46,
        },
        {
          x: 29,
          y: 69,
        },
        {
          x: 30,
          y: 84,
        },
      ],
    },
  ];
  // 데이터 y 값 총합
  var sample1Total = 0;
  sample1.map((e) => {
    e.data.map((e) => {
      sample1Total = sample1Total + e.y;
      return sample1Total;
    });
    return sample1Total;
  });
  var sample2Total = 0;
  sample2.map((e) => {
    e.data.map((e) => {
      sample2Total = sample2Total + e.y;
      return sample2Total;
    });
    return sample2Total;
  });
  var sample3Total = 0;
  sample3.map((e) => {
    e.data.map((e) => {
      sample3Total = sample3Total + e.y;
      return sample3Total;
    });
    return sample3Total;
  });
  // 옵션 관련
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
    <div id="MyPageDashboard">
      <div id="MyPageChartButtonDiv">
        <button onClick={handleTest1} id="MyPageChartButton1">
          <div>조회수</div>
          <div id="MyPageChartButtonTotal">{sample1Total}</div>
        </button>
        <button onClick={handleTest2} id="MyPageChartButton2">
          <div>좋아요</div>
          <div id="MyPageChartButtonTotal">{sample2Total}</div>
        </button>
        <button onClick={handleTest3} id="MyPageChartButton3">
          <div>팔로워</div>
          <div id="MyPageChartButtonTotal">{sample3Total}</div>
        </button>
      </div>
      ,
      <div id="MyPageChartDiv">
        {showTest1 && (
          <Chart options={optionsTest1} series={sample1} type="area" />
        )}
        {showTest2 && (
          <Chart options={optionsTest2} series={sample2} type="area" />
        )}
        {showTest3 && (
          <Chart options={optionsTest3} series={sample3} type="area" />
        )}
      </div>
    </div>
  );
}
export default MyPageChart;
