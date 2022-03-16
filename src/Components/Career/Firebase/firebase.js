import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "./firebase";
import "firebase/firestore"

//==================================Main CDN========================================

// const firebaseConfig = {
//   apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
//   authDomain: "elmenusclone.firebaseapp.com",
//   databaseURL: "https://elmenusclone-default-rtdb.firebaseio.com",
//   projectId: "elmenusclone",
//   storageBucket: "elmenusclone.appspot.com",
//   messagingSenderId: "57271621220",
//   appId: "1:57271621220:web:ff707ce3b18b1b76db7171",
//   measurementId: "G-GT1JVN96RD"
//   };

//==================================Test CDN========================================

const firebaseConfig = {
  apiKey: "AIzaSyC1a9CLHoS1ym2dg_1RdmL1eJw1_D1HiN0",
  authDomain: "elmenus-project.firebaseapp.com",
  projectId: "elmenus-project",
  storageBucket: "elmenus-project.appspot.com",
  messagingSenderId: "729863614527",
  appId: "1:729863614527:web:e17072c9d467057c0fc88a"
};
  
const app =initializeApp(firebaseConfig);
const db = getFirestore(app)
  
export default db;