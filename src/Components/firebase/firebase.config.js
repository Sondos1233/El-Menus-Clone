// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
//   authDomain: "elmenusclone.firebaseapp.com",
//   projectId: "elmenusclone",
//   storageBucket: "elmenusclone.appspot.com",
//   messagingSenderId: "57271621220",
//   appId: "1:57271621220:web:ba8d19b9fddb0988db7171"
  // apiKey: "AIzaSyBjiXw0hpBM8ke5rZlLdvDdO-2z2Cgwhwo",
  // authDomain: "assiti-employee.firebaseapp.com",
  // databaseURL: "https://assiti-employee-default-rtdb.firebaseio.com",
  // projectId: "assiti-employee",
  // storageBucket: "assiti-employee.appspot.com",
  // messagingSenderId: "345110750554",
  // appId: "1:345110750554:web:b57b81db324d698bd8ff63"
// };

//==================================Main CDN========================================
//  const firebaseConfig = {
//   apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
//   authDomain: "elmenusclone.firebaseapp.com",
//   databaseURL: "https://elmenusclone-default-rtdb.firebaseio.com",
//   projectId: "elmenusclone",
//   storageBucket: "elmenusclone.appspot.com",
//   messagingSenderId: "57271621220",
//   appId: "1:57271621220:web:ff707ce3b18b1b76db7171",
//   measurementId: "G-GT1JVN96RD"
//  };
//==================================Test CDN========================================

 const firebaseConfig = {
  apiKey: "AIzaSyC1a9CLHoS1ym2dg_1RdmL1eJw1_D1HiN0",
  authDomain: "elmenus-project.firebaseapp.com",
  projectId: "elmenus-project",
  storageBucket: "elmenus-project.appspot.com",
  messagingSenderId: "729863614527",
  appId: "1:729863614527:web:e17072c9d467057c0fc88a"
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig)
 export const auth = getAuth(app);
 export const firestore = getFirestore(app);
 
