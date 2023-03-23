import React from "react";
import "../../css/mypage.css";
import Header from "../Layout/MyPageHeader";
import Footer from "../Layout/footer";
import Chart from "../Charts/MyPageChart.js";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div>
        <Chart />
      </div>
      <Footer />
    </div>
  );
}
