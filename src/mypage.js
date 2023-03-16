import React from "react";
import Slider_img from "./slider_img";
import "./css/mypage.css";
import Header from "./components/Layout/MyPageHeader";
import Footer from "./components/Layout/footer";

export default function Mypage() {
  return (
    <div>
      <Header />
      <div className="mypage_slider">
        <Slider_img />
      </div>
      <Footer />
    </div>
  );
}
