// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnlL2TQmrJV3henCiSySTyL21l52X89Gc",
  authDomain: "donateme-bfb57.firebaseapp.com",
  projectId: "donateme-bfb57",
  storageBucket: "donateme-bfb57.appspot.com",
  messagingSenderId: "989641802140",
  appId: "1:989641802140:web:a7cdb8ed8c78dcf7f2c859"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };