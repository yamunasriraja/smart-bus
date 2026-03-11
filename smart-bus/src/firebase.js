// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdyojpuiVzQmEHWewNIwWbnGpGwW9ElX0",
  authDomain: "smart-bus-9b25b.firebaseapp.com",
  projectId: "smart-bus-9b25b",
  storageBucket: "smart-bus-9b25b.firebasestorage.app",
  messagingSenderId: "957899006557",
  appId: "1:957899006557:web:582e7084be6fa32fefe3b4",
  measurementId: "G-B2LQTEBFVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);