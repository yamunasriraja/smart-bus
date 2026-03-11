// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATT6Jv6SYCW8Rf-gSF86eLJXgnDneWbZg",
  authDomain: "transitgo-826ae.firebaseapp.com",
  projectId: "transitgo-826ae",
  storageBucket: "transitgo-826ae.firebasestorage.app",
  messagingSenderId: "956295506274",
  appId: "1:956295506274:web:b38cfc13f0126893c2643b",
  measurementId: "G-93BWTER1CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);
export const auth = getAuth(app); 