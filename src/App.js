import "./App.css";
import React from "react";
import { uploadFile } from "react-s3";

const config = {
  bucketName: "image-uploader-app-bucket",
  dirName: "media",
  region: "us-east-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
};

function App() {
  const handleFileUpload = async (file) => {
    try {
      const stored = await uploadFile(file, config);
      console.log(stored);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handleFileUpload(e.target.files[0])}
    />
  );
}

export default App;
