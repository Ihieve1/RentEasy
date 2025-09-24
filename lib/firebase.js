// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8hCfkNJ4Jsqe_5ydWtGFlxrSl8LAbn-k",
  authDomain: "messenger-app-57e51.firebaseapp.com",
  projectId: "messenger-app-57e51",
  storageBucket: "messenger-app-57e51.firebasestorage.app",
  messagingSenderId: "494658873255",
  appId: "1:494658873255:web:6e07ff42a3acd539dd3882",
  measurementId: "G-KJRJ0JZNVK"
};

// Initialize Firebase App (only once)
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Authentication + Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();