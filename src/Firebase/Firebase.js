import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

/// ==========================Main CDN===============================================

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
  apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
  authDomain: "elmenusclone.firebaseapp.com",
  databaseURL: "https://elmenusclone-default-rtdb.firebaseio.com",
  projectId: "elmenusclone",
  storageBucket: "elmenusclone.appspot.com",
  messagingSenderId: "57271621220",
  appId: "1:57271621220:web:ff707ce3b18b1b76db7171",
  measurementId: "G-GT1JVN96RD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
