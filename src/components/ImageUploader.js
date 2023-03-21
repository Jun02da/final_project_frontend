import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ImageUploader() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImages((prevState) => [...prevState, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="image-uploader">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>업로드</p> : <p>업로드</p>}
      </div>
      <div className="image-preview">
        {images.map((file, index) => (
          <div key={file.name} className="image-item">
            <img src={URL.createObjectURL(file)} alt={file.name} />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
