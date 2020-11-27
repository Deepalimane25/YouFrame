import React from "react";
import uploadIcon from "../assets/upload.svg";

export default function UploadButton({ onChange }) {
  return (
    <div>
      <label htmlFor="input" className="button" >
        <img src={uploadIcon} className="upload-icon" alt="upload-icon"/>
        Upload
      </label>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        onChange={onChange}
      />
    </div>
  );
}
