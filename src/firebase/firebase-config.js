import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {getFirestore,collection,doc,limit,query,} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {
    getStorage,
    ref,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
    authDomain: "elmenusclone.firebaseapp.com",
    projectId: "elmenusclone",
    storageBucket: "elmenusclone.appspot.com",
    messagingSenderId: "57271621220",
    appId: "1:57271621220:web:ba8d19b9fddb0988db7171",
    storageBucket: "gs://elmenusclone.appspot.com/",
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);