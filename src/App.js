import "./App.css";
import React from "react";
import config from "./config";
import { uploadFile } from "react-s3";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

function ImageUploader() {
  const handleSubmit = async (files, allFiles) => {
    files.forEach(async ({ file }) => {
      try {
        const { location } = await uploadFile(file, config);
        console.log(location);
      } catch (error) {
        throw error;
      }
    });
    // remove file from the drop zone
    allFiles.forEach((f) => f.remove());
  };

  return <Dropzone onSubmit={handleSubmit} accept="image/*" />;
}

export default ImageUploader;
