import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import "../../css/Dashboard.css";
function MyPageChart() {
  // 데이터 관련
  var ViewsData = [
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
  var GreatData = [
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
  var FollowersData = [
    {
      name: "Followers",
      data: [
        {
          x: 1,
          y: 10,
        },
        {
          x: 2,
          y: 15,
        },
        {
          x: 3,
          y: 25,
        },
        {
          x: 4,
          y: 35,
        },
        {
          x: 5,
          y: 45,
        },
        {
          x: 6,
          y: 50,
        },
        {
          x: 7,
          y: 55,
        },
        {
          x: 8,
          y: 60,
        },
        {
          x: 9,
          y: 65,
        },
        {
          x: 10,
          y: 70,
        },
        {
          x: 11,
          y: 75,
        },
        {
          x: 12,
          y: 80,
        },
        {
          x: 13,
          y: 85,
        },
        {
          x: 14,
          y: 90,
        },
        {
          x: 15,
          y: 95,
        },
        {
          x: 16,
          y: 100,
        },
        {
          x: 17,
          y: 105,
        },
        {
          x: 18,
          y: 110,
        },
        {
          x: 19,
          y: 115,
        },
        {
          x: 20,
          y: 120,
        },
        {
          x: 21,
          y: 125,
        },
        {
          x: 22,
          y: 130,
        },
        {
          x: 23,
          y: 135,
        },
        {
          x: 24,
          y: 145,
        },
        {
          x: 25,
          y: 150,
        },
        {
          x: 26,
          y: 155,
        },
        {
          x: 27,
          y: 160,
        },
        {
          x: 28,
          y: 165,
        },
        {
          x: 29,
          y: 170,
        },
        {
          x: 30,
          y: 175,
        },
      ],
    },
  ];
  // 데이터 y 값 총합
  var ViewsDataTotal = 0;
  ViewsData.map((e) => {
    e.data.map((e) => {
      ViewsDataTotal = ViewsDataTotal + e.y;
      return ViewsDataTotal;
    });
    return ViewsDataTotal;
  });
  var GreatDataTotal = 0;
  GreatData.map((e) => {
    e.data.map((e) => {
      GreatDataTotal = GreatDataTotal + e.y;
      return GreatDataTotal;
    });
    return GreatDataTotal;
  });
  var FollowersDataTotal = 0;
  FollowersData.map((e) => {
    e.data.map((e) => {
      FollowersDataTotal = FollowersDataTotal + e.y;
      return FollowersDataTotal;
    });
    return FollowersDataTotal;
  });
  // 옵션 관련
  var ViewsOptions = {
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
  var GreatOptions = {
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
  var FollowersOptions = {
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
  const [showViewsChart, setShowViewsChart] = useState(true);
  const [showGreatChart, setShowGreatChart] = useState(false);
  const [showFollowersChart, setShowFollowersChart] = useState(false);

  const onlyViewsChart = () => {
    setShowViewsChart(true);
    setShowGreatChart(false);
    setShowFollowersChart(false);
  };
  const onlyGreatChart = () => {
    setShowViewsChart(false);
    setShowGreatChart(true);
    setShowFollowersChart(false);
  };
  const onlyFollowersChart = () => {
    setShowViewsChart(false);
    setShowGreatChart(false);
    setShowFollowersChart(true);
  };
  return (
    <div id="MyPageDashboard">
      <div id="MyPageChartButtonDiv">
        {/*
          autoFocus로 기본 포커스 지정
          데이터의 총합을 계산하여서 각각 명시
        */}
        <button onClick={onlyViewsChart} id="MyPageChartButton1" autoFocus>
          <div>조회수</div>
          <div id="MyPageChartButtonTotal">{ViewsDataTotal}</div>
        </button>
        <button onClick={onlyGreatChart} id="MyPageChartButton2">
          <div>좋아요</div>
          <div id="MyPageChartButtonTotal">{GreatDataTotal}</div>
        </button>
        <button onClick={onlyFollowersChart} id="MyPageChartButton3">
          <div>팔로워</div>
          <div id="MyPageChartButtonTotal">{FollowersDataTotal}</div>
        </button>
      </div>
      ,
      <div id="MyPageChartDiv">
        {showViewsChart && (
          <Chart options={ViewsOptions} series={ViewsData} type="area" />
        )}
        {showGreatChart && (
          <Chart options={GreatOptions} series={GreatData} type="area" />
        )}
        {showFollowersChart && (
          <Chart
            options={FollowersOptions}
            series={FollowersData}
            type="area"
          />
        )}
      </div>
    </div>
  );
}
export default MyPageChart;
