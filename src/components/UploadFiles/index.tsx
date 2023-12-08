import React, { ChangeEvent, useState } from "react";
import Styles from "./Upload.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "@/API/FileUpload";
import CommonProgress from "../common/Progress";
import { addFolder } from "@/API/Firestore";
import { useFetchSession } from "@/hooks/useSession";

export default function UploadFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  const [isFileVisiable, setFileVisiable] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [file, setFile] = useState({});
  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email as string);
    // console.log(files);
  };

  console.log(parentId);
  const uploadFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email,
    };

    addFolder(payload);
    setFolderName("");
  };

  return (
    <div className={Styles.UploadMain}>
      <Button
        onClick={() => {
          setFileVisiable(!isFileVisiable);
          setFolderVisible(false);
        }}
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
      <Button
        onClick={() => {
          setFileVisiable(false);
          setFolderVisible(!isFolderVisible);
        }}
        title="Add a Folder"
        btnClass="btn-success"
      />
      {isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            value={folderName}
            onChange={(event) => setFolderName(event.target.value)}
            className="max-w input input-bordered input-accent w-full"
          />
          <Button
            onClick={uploadFolder}
            title="Create"
            btnClass="btn-primary"
          />
        </>
      ) : (
        <></>
      )}
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
}
