import React from "react";
import styles from "./Progress.module.scss";

export default function CommonProgress({ progress }: Progress) {
  console.log("This is Progress", progress); // Add this line for debugging
  return (
    <div className={styles.progressMain}>
      <progress
        className="progress progress-accent w-56"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
}
