import React from "react";
import MypageImgslider from "./MypageImgslider";
import "./css/mypage.css";
import Header from "./components/Layout/MyPageHeader";
import Footer from "./components/Layout/footer";

export default function Mypage() {
  return (
    <div>

      <Header />
      <div>
        <MypageImgslider />
      </div>
      <Footer />
      
    </div>
  );
}
