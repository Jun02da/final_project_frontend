import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { RiImageAddLine } from "react-icons/ri";
import PreviewModal from "./PreviewModal";

function ImageUploader({ onUpload }) {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setImages([...images, ...acceptedFiles]);
      setModalIsOpen(true);
    },
    [images]
  );

  const { getRootProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/gif",
    multiple: false,
  });

  const handleUpload = async () => {
    const uploadedImages = await uploadImages(images);
    onUpload(uploadedImages);
    setImages([]);
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setImages([]);
    setModalIsOpen(false);
  };

  const uploadImages = async (image) => {
    // TODO: 이미지 업로드 로직 구현
    return image;
  };

  return (
    <div className="image-uploader">
      <div
        {...getRootProps()}
        className="dropzone"
        style={{ fontSize: "40px" }}
      >
        <RiImageAddLine />
      </div>
      {modalIsOpen && (
        <PreviewModal
          isOpen={modalIsOpen}
          onCloseModal={handleCloseModal}
          onUpload={handleUpload}
          images={images}
        />
      )}
    </div>
  );
}

export default ImageUploader;
