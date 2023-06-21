// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcZnGHoxMklNnmeieAN6VU4AxcffmYQW0",
  authDomain: "e-clone-9acf2.firebaseapp.com",
  projectId: "e-clone-9acf2",
  storageBucket: "e-clone-9acf2.appspot.com",
  messagingSenderId: "830779838742",
  appId: "1:830779838742:web:1f88654cf608d8ec8b4037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);