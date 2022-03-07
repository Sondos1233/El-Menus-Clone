import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "./firebase";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBjiXw0hpBM8ke5rZlLdvDdO-2z2Cgwhwo",
  authDomain: "assiti-employee.firebaseapp.com",
  databaseURL: "https://assiti-employee-default-rtdb.firebaseio.com",
  projectId: "assiti-employee",
  storageBucket: "assiti-employee.appspot.com",
  messagingSenderId: "345110750554",
  appId: "1:345110750554:web:b57b81db324d698bd8ff63"
  };
  
const app =initializeApp(firebaseConfig);
const db = getFirestore(app)
  
export default db;