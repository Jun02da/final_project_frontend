import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Link } from "react-router-dom";

import { FreeMode, Navigation, Thumbs, Autoplay, Mousewheel } from "swiper";
import ImageUploader from "./ImageUploader";

// import 스와이퍼 스타일
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";

// 슬라이더 css
import "../css/MypageSlider.css";

export default function MypageImgslider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const handleUpload = (newImages) => {
    const newImageUrls = newImages.map((image) => URL.createObjectURL(image));
    setImageUrls([...imageUrls, ...newImageUrls]);
  };

  return (
    <>
      <button>
        <ImageUploader onUpload={handleUpload} />
      </button>
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000 }} //자동으로 사진 넘겨주는 슬라이드기능
        effect="fade"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
        className="mySwiper2"
      >
        {/* 업로드된 이미지 보여주기 */}
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <Link to="/detail">
              <img src={imageUrl} alt={`Imagefile ${index}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 하단 미리보기 이미지 부분 */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={10}
        freeMode={true}
        mousewheel={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
        className="mySwiper"
      >
        {/* 업로드된 이미지 보여주기 */}
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Imagefile ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
