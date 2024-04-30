// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQ3WsL5V03GS5i9-0z0Ps5Bd5jUGGlOA",
  authDomain: "filmyverse-8581f.firebaseapp.com",
  projectId: "filmyverse-8581f",
  storageBucket: "filmyverse-8581f.appspot.com",
  messagingSenderId: "379641102556",
  appId: "1:379641102556:web:6839b51165e8578cd57419",
  measurementId: "G-ET2QX1TSSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");


export default app;