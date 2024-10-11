// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqA93BOjA-KghCTQ72jaw5mJ7wiNQyVzE",
  authDomain: "my-portfolio-d1324.firebaseapp.com",
  projectId: "my-portfolio-d1324",
  storageBucket: "my-portfolio-d1324.appspot.com",
  messagingSenderId: "1052109559152",
  appId: "1:1052109559152:web:36df9b26749f83d944ebb5",
  measurementId: "G-48EQY0GS7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
