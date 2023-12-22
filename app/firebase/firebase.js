// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEKPNh7kiC_p2v6eJHVUE9u7pBW6PZmE",
  authDomain: "pixelore-54609.firebaseapp.com",
  projectId: "pixelore-54609",
  storageBucket: "pixelore-54609.appspot.com",
  messagingSenderId: "541121926301",
  appId: "1:541121926301:web:473b5a6b97f4ab9885b074"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):
getApp();
const db=getFirestore();
const storage=getStorage();

export {app,db,storage}