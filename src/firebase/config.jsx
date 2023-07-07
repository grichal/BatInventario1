import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCudwEzHfw8Ajl6kCjJ-f8-Sp40S3XeNw4",
  authDomain: "batinventario-1abe7.firebaseapp.com",
  projectId: "batinventario-1abe7",
  storageBucket: "batinventario-1abe7.appspot.com",
  messagingSenderId: "1091424421624",
  appId: "1:1091424421624:web:5490c83b1ade3481dcdd0d",
  measurementId: "G-EGWMYPYL4L"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig)
 const db = getFirestore(app)

export default db;