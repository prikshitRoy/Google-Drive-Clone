// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAlPeKtBY-Ds0mf_UZMQAuthqg2i427zQ",
  authDomain: "drive-clone-48074.firebaseapp.com",
  projectId: "drive-clone-48074",
  storageBucket: "drive-clone-48074.appspot.com",
  messagingSenderId: "68173965976",
  appId: "1:68173965976:web:091218ea3ad8657224feed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
