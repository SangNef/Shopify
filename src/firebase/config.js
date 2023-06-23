// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAGt-eGlS2dTIecEqugJn1nU-Nzqnikb4A",
  authDomain: "shopify-f98c2.firebaseapp.com",
  projectId: "shopify-f98c2",
  storageBucket: "shopify-f98c2.appspot.com",
  messagingSenderId: "30156092580",
  appId: "1:30156092580:web:d0912740701eca54a1a231",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
