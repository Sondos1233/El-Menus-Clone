import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {getFirestore,getDocs,getDoc,collection,doc,limit,query,} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// Your web app's Firebase configuration

/// ==========================Main CDN===============================================

// const firebaseConfig = {
//     apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
//     authDomain: "elmenusclone.firebaseapp.com",
//     projectId: "elmenusclone",
//     storageBucket: "elmenusclone.appspot.com",
//     messagingSenderId: "57271621220",
//     appId: "1:57271621220:web:ba8d19b9fddb0988db7171",
//     storageBucket: "gs://elmenusclone.appspot.com/",
// };

/// ==========================Test CDN===============================================
const firebaseConfig = {
    apiKey: "AIzaSyC-5jGgvrgiCrq1lMJId4RwNJYAEg43DJY",
    authDomain: "authentication-test-33755.firebaseapp.com",
    projectId: "authentication-test-33755",
    storageBucket: "authentication-test-33755.appspot.com",
    messagingSenderId: "379055240396",
    appId: "1:379055240396:web:e6dd73c5bbc567f5df3e69",
    measurementId: "G-4FYS3B5EQF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);