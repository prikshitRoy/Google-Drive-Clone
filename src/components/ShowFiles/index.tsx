import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";

export default function showFiles() {
  let { fileList } = fetchFiles();
  // console.log(fileList);

  return (
    <div className={styles.filesGrid}>
      {fileList.map((file: { imageLink: "" }) => {
        return (
          <div>
            <img className={styles.imageLink} src={file.imageLink} />
          </div>
        );
      })}
    </div>
  );
}
