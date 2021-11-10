// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4k5ZSa-ItNbhVvV559H3owjD8UehAcME",
  authDomain: "instagram-1d169.firebaseapp.com",
  projectId: "instagram-1d169",
  storageBucket: "instagram-1d169.appspot.com",
  messagingSenderId: "260103828210",
  appId: "1:260103828210:web:3e4776940dbef96a4a566b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
