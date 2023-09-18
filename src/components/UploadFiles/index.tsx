import React, { ChangeEvent, useState } from "react";
import Styles from "./Upload.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "@/API/FileUpload";
import CommonProgress from "../common/Progress";

export default function UploadFiles() {
  const [isFileVisiable, setFileVisiable] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState({});
  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
    // console.log(files);
  };

  return (
    <div className={Styles.UploadMain}>
      <Button
        onClick={() => setFileVisiable(!isFileVisiable)}
        title="Add a file"
        btnClass="btn-primary"
      />
      {isFileVisiable ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button title="Create a Folder" btnClass="btn-primary" />
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
}
