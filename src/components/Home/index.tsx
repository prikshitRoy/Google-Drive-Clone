import React from "react";
import styles from "./Home.module.scss";
import Topbar from "@/components/Topbar";
import UploadFiles from "../UploadFiles";
import ShowFiles from "@/components/ShowFiles/index";

export default function HomeComponent() {
  return (
    <div>
      <Topbar />
      <UploadFiles parentId="" />

      <ShowFiles parentId="" />
    </div>
  );
}
