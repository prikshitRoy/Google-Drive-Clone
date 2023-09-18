import { storage, app, database } from "@/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";
import { addFiles } from "./Firestore";

export const fileUpload = (file: any, setProgress: Function) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshort) => {
      const progress = Math.round(
        (snapshort.bytesTransferred / snapshort.totalBytes) * 100,
      );
      setProgress(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        addFiles(downloadURL);
      });
    },
  );
};
