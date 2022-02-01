import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "./firebase";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
    authDomain: "elmenusclone.firebaseapp.com",
    projectId: "elmenusclone",
    storageBucket: "elmenusclone.appspot.com",
    messagingSenderId: "57271621220",
    appId: "1:57271621220:web:ba8d19b9fddb0988db7171"
  };
  
const app =initializeApp(firebaseConfig);
const db = getFirestore(app)
  
export default db;