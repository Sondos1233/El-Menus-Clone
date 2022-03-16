import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1a9CLHoS1ym2dg_1RdmL1eJw1_D1HiN0",
  authDomain: "elmenus-project.firebaseapp.com",
  projectId: "elmenus-project",
  storageBucket: "elmenus-project.appspot.com",
  messagingSenderId: "729863614527",
  appId: "1:729863614527:web:e17072c9d467057c0fc88a"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);