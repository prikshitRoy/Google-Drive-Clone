import { database } from "@/firebaseConfig";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFetchSession } from "./useSession";

let files = collection(database, "files");

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArraryType>([]);

  const getFolders = () => {
    if (userEmail) {
      let emailQuery = query(files, where("userEmail", "==", userEmail));
      if (!parentId) {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === ""),
          );
        });
      } else {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === parentId),
          );
        });
      }
    }
  };

  useEffect(() => {
    getFolders();
  }, [parentId, userEmail]);

  return { fileList };
};

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
