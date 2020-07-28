import "./App.css";
import React from "react";
import { uploadFile } from "react-s3";

const {
  REACT_APP_BUCKET_NAME,
  REACT_APP_DIR_NAME,
  REACT_APP_REGION,
  REACT_APP_ACCESS_KEY_ID,
  REACT_APP_SECRET_ACCESS_KEY,
} = process.env;

const config = {
  bucketName: REACT_APP_BUCKET_NAME,
  dirName: REACT_APP_DIR_NAME,
  region: REACT_APP_REGION,
  accessKeyId: REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
};

function App() {
  const handleFileUpload = async (file) => {
    try {
      const stored = await uploadFile(file, config);
      const { location } = stored;
      console.log(location);
    } catch (error) {
      console.log(error);
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
