import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {getFirestore,getDocs,getDoc,collection,doc,limit,query,} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

// Your web app's Firebase configuration


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
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
