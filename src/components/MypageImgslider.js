import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Link } from "react-router-dom";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import ImageUploader from "./ImageUploader";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import "../css/MypageSlider.css";
import "../css/Imguploadbtn.css";

// 이미지 슬라이더 유저 버전입니다
export default function MypageImgslider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  // const [email, setEmail] = useState("");
  const [userAll, setUserAll] = useState([]);
  const [postAll, setPostAll] = useState([]);

  const handleUpload = async (newImages, text, category) => {
    const newImageUrls = newImages.map((image) => URL.createObjectURL(image));
    setImageUrls([...imageUrls, ...newImageUrls]);

    const formData = new FormData();
    newImages.forEach((image) => {
      formData.append("file", image);
    });
    formData.append("content", text); // 텍스트 데이터 추가
    formData.append("category", category); // 카테고리 데이터 추가

    try {
      await axios.post("http://192.168.0.209:8090/post/add", formData);
    } catch (error) {
      console.error(error);
    }
  };
  // 이미지 슬라이더에 사용자 자신에 사진을 보여준다
  const fetchImages = async () => {
    try {
      const responseEmail = await axios.get(
        "http://192.168.0.209:8090/user/me"
      );
      const email = responseEmail.data.email;
      const userAll = responseEmail.data;

      setUserAll(userAll);

      const responseImages = await axios.get(
        `http://192.168.0.209:8090/post/email/${userAll.email}`
      );

      const urls = responseImages.data.map((post) => post.image_url);
      setImageUrls(urls);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  // user정보와 post 정보를 한번에 detail 페이지로 보내기 위해 만들어짐
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responsePostId = await axios.get(
          "http://192.168.0.209:8090/user/me"
        );
        const alldata = responsePostId.data;
        const responsePost = await axios.get(
          `http://192.168.0.209:8090/post/email/${alldata.email}`
        );
        const postAll = responsePost.data;
        setPostAll(postAll);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, []);
  return (
    <>
      {/* 업로드 버튼 */}
      <button className="floating">
        <ImageUploader onUpload={handleUpload} />
      </button>

      <div className="MySwiperTop">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} //자동으로 사진 넘겨주는 슬라이드기능
          effect="fade"
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
          className="mySwiper2"
        >
          {/* 업로드된 이미지 보여주기 */}
          {imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Link to="/detail" state={{ userAll, postAll }}>
                <img src={imageUrl} alt={`Imagefile ${index}`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 하단 미리보기 이미지 부분 */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
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
