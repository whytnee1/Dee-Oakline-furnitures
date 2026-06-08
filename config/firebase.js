// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS86Xfyjt-wtYPY6Dz5irYYsjFxt-qZ-k",
  authDomain: "dee-oakline-furnitures.firebaseapp.com",
  projectId: "dee-oakline-furnitures",
  storageBucket: "dee-oakline-furnitures.firebasestorage.app",
  messagingSenderId: "878022671749",
  appId: "1:878022671749:web:42ab36412cee4c3f4318ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}
export const storage = getStorage(app);