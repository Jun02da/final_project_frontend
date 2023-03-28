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
}) {
  const [currentPreviewImage, setCurrentPreviewImage] = useState(previewImage);
  const [text, setText] = useState("");

  const handleUpload = async () => {
    const uploadedImage = await uploadImage(previewImage);
    onUpload({ image: uploadedImage, text });
    onCloseModal();
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
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
      <div className="modal_buttons">
        <button onClick={handleUpload}>업로드</button>
        <button onClick={handleCloseModal}>취소</button>
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
      <div className="modal-text">
        <input type="text" value={text} onChange={handleTextChange} />
      </div>
    </Modal>
  );
}

export default PreviewModal;
