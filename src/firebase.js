// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCGPX2MbRQR8oHmTZf3-jsm9mZVXAJKfpE",
  authDomain: "safe-and-informed-volunteering.firebaseapp.com",
  projectId: "safe-and-informed-volunteering",
  storageBucket: "safe-and-informed-volunteering.appspot.com",
  messagingSenderId: "434195300349",
  appId: "1:434195300349:web:7d48d830d6d9598194e394",
  measurementId: "G-E4L967B2P6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);
const appleProvider = new OAuthProvider("apple.com");
appleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithApple = () => signInWithPopup(auth, appleProvider);

export default app;
