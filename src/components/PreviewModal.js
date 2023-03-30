import React, { useState } from "react";
import Modal from "react-modal";
import "../css/Preview.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/css/mousewheel";

SwiperCore.use([Pagination, Navigation]);

Modal.setAppElement("#root");

function PreviewModal({
  isOpen,
  previewImage,
  onCloseModal,
  onUpload,
  images,
  text,
  setText,
  category,
  setCategory,
}) {
  const [currentPreviewImage, setCurrentPreviewImage] = useState(previewImage);

  const handleUpload = async () => {
    const uploadedImage = await uploadImage(previewImage);
    onUpload({ image: uploadedImage, text, category });
    onCloseModal();
    setText(""); // text state 초기화
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const uploadImage = async (image) => {
    // TODO: 이미지 업로드 로직 구현
    return image;
  };

  const handleClickImage = (image) => {
    setCurrentPreviewImage(URL.createObjectURL(image));
  };

  return (
    <Modal
      className="preview_main"
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={{
        overlay: { zIndex: 1000 },
        content: { zIndex: 1000 },
      }}
    >
      <h2 className="modal_h2">새 게시물 만들기</h2>
      <div className="modal_category">
        <label htmlFor="category">카테고리:</label>
        <select onChange={handleCategoryChange} value={category}>
          <option value="">선택하세요</option>
          <option value="Home">Home</option>
          <option value="IT">IT</option>
          <option value="Food">Food</option>
          <option value="Sports">Sports</option>
          <option value="Nature">Nature</option>
        </select>
      </div>
      <div className="modal_image">
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="preview_img">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  onClick={() => handleClickImage(image)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <textarea
          type="text"
          className="modal_text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="modal_buttons">
        <button onClick={handleUpload}>업로드</button>
        <button onClick={handleCloseModal}>취소</button>
      </div>
    </Modal>
  );
}

export default PreviewModal;
