import { database } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFiles = () => {
  const [fileList, setFileList] = useState<ArraryType>([{}]);

  useEffect(() => {
    return onSnapshot(files, (response) => {
      setFileList(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      );
    });
  }, []);

  // export const fetchFiles = () => {
  //   const [fileList, setFileList] = useState([{}]);

  //   useEffect(() => {
  //     return onSnapshot(files, (response) => {
  //       console.log(
  //         "Data",
  //         response.docs.map((item) => {
  //           return { ...item.data(), id: item.id };
  //         }),
  //       );
  //     });
  //   }, []);

  return { fileList };
};
