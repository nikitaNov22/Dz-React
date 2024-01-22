import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import noImage from "./noImage.png";

export default function UploadImg() {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const { uploadFile } = useParams();

  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      setImage(event.dataTransfer.files[0]);
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleDragEmpty = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="container">
      <h2>Ви ввели: {uploadFile}</h2>
      <div className="contentContainer">
        <form className="fileUploader">
          <img
            src={imageURL ? imageURL : noImage}
            className="fileUploaderPreview"
            alt="preview"
            onDrop={handleDrop}
            onDragEnter={handleDragEmpty}
            onDragOver={handleDragEmpty}
          />
          <div>{image ? image.name : ""}</div>
          <label
            htmlFor="fileUploadButton"
            className="fileUploaderCustomButton"
          >
            Завантажити файл
          </label>
          <input
            type="file"
            id="fileUploadButton"
            className="UploadButton"
            onChange={handleOnChange}
          />
        </form>
      </div>
    </div>
  );
}
