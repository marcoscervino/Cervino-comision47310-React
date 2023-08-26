// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO1DbilacvMUU5CQoIkeXKNHvjolhkwhw",
  authDomain: "best-bar-160cf.firebaseapp.com",
  projectId: "best-bar-160cf",
  storageBucket: "best-bar-160cf.appspot.com",
  messagingSenderId: "14590609808",
  appId: "1:14590609808:web:b8e48cd07179db892a4b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);