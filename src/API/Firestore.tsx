import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, "files");

// Add File Function
export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
) => {
  try {
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Folder Function
export const addFolder = (payload: {}) => {
  try {
    addDoc(files, {
      ...payload,
    });
  } catch (err) {
    console.log(err);
  }
};
