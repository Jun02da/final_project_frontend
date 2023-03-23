import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageUploader({ onUpload }) {
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const image = acceptedFiles[0];
    setImages([image]);
    setPreviewImage(null);
    setModalIsOpen(true);
  }, []);

  const { getRootProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/gif",
    multiple: false,
  });

  const handleUpload = async () => {
    const uploadedImages = await uploadImages(images);
    onUpload(uploadedImages);
    setImages([]);
    setPreviewImage(null);
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setImages([]);
    setPreviewImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (images.length > 0) {
      const image = images[0];
      const imageUrl = URL.createObjectURL(image);
      setPreviewImage(imageUrl);
    }
  }, [images]);

  const uploadImages = async (images) => {
    // TODO: 이미지 업로드 로직 구현
    return images;
  };

  return (
    <div className="image-uploader">
      <div {...getRootProps()} className="dropzone">
        UPLOAD
      </div>
      {previewImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={{ overlay: { zIndex: 1000 }, content: { zIndex: 1000 } }}
        >
          <h2>이미지 미리보기</h2>
          <img src={previewImage} alt="Preview" />
          <div className="modal-buttons">
            <button onClick={handleCloseModal}>취소</button>
            {images.length > 0 && (
              <button onClick={handleUpload}>업로드</button>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ImageUploader;
