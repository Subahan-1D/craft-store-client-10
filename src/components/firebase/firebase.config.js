// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCujCUJ5Mrx0TdFNsZ8gWk_uimMXMHVIxA",
  authDomain: "art-craft-store-689df.firebaseapp.com",
  projectId: "art-craft-store-689df",
  storageBucket: "art-craft-store-689df.appspot.com",
  messagingSenderId: "341203506179",
  appId: "1:341203506179:web:1a6c3b40eece2ec9fe2a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
export default app;