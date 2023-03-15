import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Abstract01 from "./image/abstract01.jpg";
import Abstract02 from "./image/abstract02.jpg";
import "./css/mypage.css";

export default function slider_img() {
  const settings = {
    dots: true, // 슬라이드 밑에 점
    infinite: true, // 무한으로 반복
    speed: 500, // 넘기는 속도
    slidesToShow: 1, // 4장씩 보이게
    slidesToScroll: 1, //
    centerMode: true, // 중앙정렬
    centerPadding: "0px",
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="slider_img" src={Abstract01} alt="zz" />
        </div>
        <div>
          <img className="slider_img" src={Abstract02} alt="gfg" />
        </div>
      </Slider>
    </div>
  );
}
