import { database } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFiles = () => {
  const [fileList, setFileList] = useState([{}]);

  useEffect(() => {
    return onSnapshot(files, (response) => {
      console.log(response);
    });
  }, []);

  return { fileList };
};
