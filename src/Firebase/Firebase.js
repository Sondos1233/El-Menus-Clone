import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
    authDomain: "elmenusclone.firebaseapp.com",
    projectId: "elmenusclone",
    storageBucket: "elmenusclone.appspot.com",
    messagingSenderId: "57271621220",
    appId: "1:57271621220:web:ba8d19b9fddb0988db7171"
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyBaj6NF_W4fET0MM_PkYEA5lOKuJhb9HoE",
//     authDomain: "employeeproject-d926f.firebaseapp.com",
//     databaseURL: "https://employeeproject-d926f-default-rtdb.firebaseio.com",
//     projectId: "employeeproject-d926f",
//     storageBucket: "employeeproject-d926f.appspot.com",
//     messagingSenderId: "407806862722",
//     appId: "1:407806862722:web:4ce831dad432a8f1055b9b"
//   };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);