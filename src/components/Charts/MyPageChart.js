import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import "../../css/Dashboard.css";
// sampleData로 임시 import
import ViewsData from "./sampleData/ViewsData.json";
import GreatData from "./sampleData/GreatData.json";
import FollowersData from "./sampleData/FollowersData.json";
// import axios from "axios";
function MyPageChart() {
  // axios.get('ViewsData 주소')
  // .then((Response)=>{ViewsData = Response.data})
  // axios.get('GreatData 주소')
  // .then((Response)=>{GreatData = Response.data})
  // axios.get('FollowersData 주소')
  // .then((Response)=>{FollowersData = Response.data})

  // 데이터 y값 총합
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
  // 그래프 옵션 관련
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
          === 버튼 부분 ===
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
      {/* === 그래프 부분 === */}
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
