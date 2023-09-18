import React from "react";
import styles from "./ShowFiles.module.sass";
import { fetchFiles } from "@/hooks/fetchFiles";

export default function showFiles() {
  let { fileList } = fetchFiles();
  console.log(fileList);

  return <div>ShowFiles</div>;
}
