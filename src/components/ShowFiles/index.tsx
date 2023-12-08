import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { AiFillFileText, AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";
import { useFetchSession } from "@/hooks/useSession";

export default function showFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user.email as string);
  const router = useRouter();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  // console.log(fileList);

  return (
    <div className={styles.filesGrid}>
      {fileList.map(
        (file: {
          imageLink: "";
          imageName: "";
          isFolder: false;
          folderName: "";
          id: "";
        }) => {
          return (
            <div key={file.id}>
              {file.isFolder ? (
                <div
                  className={`${styles.files}`}
                  onClick={() => router.push(`/Folder?id=${file.id}`)}
                >
                  <AiFillFolder size={80} />
                  <p>{file.folderName}</p>
                </div>
              ) : (
                <div
                  className={`${styles.files}`}
                  onClick={() => openFile(file.imageLink)}
                >
                  <p>{file.folderName}</p>

                  <img className={styles.imageLink} src={file.imageLink} />
                  <p>{file.imageName}</p>
                  {/* <AiFillFileText size={80} /> */}
                </div>
              )}

              {/* <img className={styles.imageLink} src={file.imageLink} /> */}
            </div>
          );
        },
      )}
    </div>
  );
}
