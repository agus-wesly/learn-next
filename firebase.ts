// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "test-next-firebase-dc21b.firebaseapp.com",
  projectId: "test-next-firebase-dc21b",
  storageBucket: "test-next-firebase-dc21b.appspot.com",
  messagingSenderId: "1065167326272",
  appId: "1:1065167326272:web:4ff161e5994aed0e78e3a5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
