// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFb27KzcZyJNhzMy-BN7uGNmwzmPXNbP4",
  authDomain: "brander-mine.firebaseapp.com",
  databaseURL: "https://brander-mine-default-rtdb.firebaseio.com",
  projectId: "brander-mine",
  storageBucket: "brander-mine.appspot.com",
  messagingSenderId: "1013299111351",
  appId: "1:1013299111351:web:2b4625134cc1f98bc37432",
  measurementId: "G-XER1PE0J3X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
